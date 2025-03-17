from flask import Flask, jsonify, request
from elasticsearch import Elasticsearch
from elasticsearch.helpers import scan
import pandas as pd
import numpy as np
import csv
from flask_cors import CORS
import os
import json
from datetime import datetime, timedelta
import requests
import random
import secrets
import string
import faiss
from sentence_transformers import SentenceTransformer
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

app = Flask(__name__)
CORS(app)

ELASTIC_PASSWORD = "V*H8-5KIgK6aE_3ERmVN"
index_name = '.ds-winlogbeat-8.15.3-2024.10.23-000001'


try:
    client = Elasticsearch(
        "https://10.0.0.6:9200",
        ca_certs= "C:\\DARC\\backend\\http_ca.crt",
        # verify_certs=False,
        basic_auth=("elastic", ELASTIC_PASSWORD),
    )
except Exception as e:
    print(f"Failed to connect to Elasticsearch: {e}")

def generate_secure_id(length=8):
    characters = string.ascii_letters + string.digits
    secure_id = ''.join(secrets.choice(characters) for _ in range(length))
    return secure_id

# Function to get location data for a given IP address
def get_location(user, ip_address):
    url = f"https://ipinfo.io/{ip_address}?token=985d65a4bdb95d"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        # Extract city, region, and coordinates
        location_name = f"{data.get('city', 'Unknown City')}, {data.get('region', 'Unknown Region')}"
        coordinates = [float(coord) for coord in data.get("loc", "0,0").split(",")]
        # Ensure longitude is first, latitude second
        coordinates = [coordinates[1], coordinates[0]]  # Swap if the order is [latitude, longitude]

        return {"name": f"User's Name: {user}\nUser's IP: {ip_address}\nLocation: {location_name}", "coordinate": coordinates, "location" : location_name}
    else:
        print(f"Error fetching data for IP {ip_address}")
        return None

@app.route('/users/data', methods=['GET'])
def get_UsersData():
# Set up time range for the last 7 days
    end_time = datetime.now()
    start_time = end_time - timedelta(days=7)
    
    # Format time for Elasticsearch query
    time_range = {
        "gte": start_time.isoformat(),
        "lte": end_time.isoformat(),
    }
    
    # Query for total events
    total_events = client.count(index=index_name, body={"query": {"range": {"@timestamp": time_range}}})["count"]

    # Query for Sysmon network connection events
    login_success = client.count(index=index_name, body={
        "query": {
            "bool": {
                "must": [
                    {"range": {"@timestamp": time_range}},           # Last 7 days
                    {"term": {"winlog.event_id": 4624}}                 # Network connection event in Sysmon
                ]
            }
        }
    })["count"]
    
    # Query for total login failures
    login_failure = client.count(index=index_name, body={
        "query": {
            "bool": {
                "must": [
                    {"range": {"@timestamp": time_range}},           # Last 7 days
                    {"term": {"winlog.event_id": 4625}}                 # Network connection event in Sysmon
                ]
            }
        }
    })["count"]

    # Query for total number of users (using a terms aggregation to get unique users)
    user_response = client.search(index=index_name, body= {
        "size": 0,
        "aggs": {
            "unique_hostnames": {
                "terms": {
                    "field": "agent.hostname",  # Adjust if necessary
                    "size": 10000               # Adjust if more than 10,000 expected
                }
            }
        }
    })
    
    total_users = [bucket['key'] for bucket in user_response['aggregations']['unique_hostnames']['buckets']]
    
    # Query for user activity over time with 3-hour intervals
    user_activity = client.search(index=index_name, body={
        "size": 0,
        "query": {"range": {"@timestamp": time_range}},
        "aggs": {
            "activity_over_time": {
                "date_histogram": {
                    "field": "@timestamp",
                    "fixed_interval": "3h"  # 3-hour intervals
                }
            }
        }
    })
    
    # Convert Elasticsearch buckets to chart-friendly data format
    activity_data_all_users = [
        [
            int(datetime.strptime(bucket["key_as_string"], "%Y-%m-%dT%H:%M:%S.%fZ").timestamp() * 1000),
            bucket["doc_count"]
        ]
        for bucket in user_activity["aggregations"]["activity_over_time"]["buckets"]
    ]

    
        # Define the Elasticsearch query with aggregations for user activity counts by hour
    response = client.search(index=index_name, body={
        "size": 0,
        "query": {
            "range": {"@timestamp": {"gte": start_time.isoformat(), "lte": end_time.isoformat()}}
        },
        "aggs": {
            "activity_over_time": {
                "date_histogram": {
                    "field": "@timestamp",
                    "fixed_interval": "1h"
                },
                "aggs": {
                    "user_activity": {
                        "terms": {"field": "agent.hostname"},
                        "aggs": {
                            "event_count": {"value_count": {"field": "winlog.event_id"}}  # Total events per user per interval
                        }
                    }
                }
            }
        }
    })
    
    # Step 2: Transform data into required format
    activity_data_users_separate = []
    user_colors = {}
    
    # Predefined colors for up to 8 users, adjust or extend as needed
    color_palette = [
        "rgba(0, 117, 255, 1)", "rgba(255, 69, 58, 1)", "rgba(250, 202, 21, 1)",
        "rgba(255, 159, 64, 1)", "rgba(52, 199, 89, 1)", "rgba(88, 86, 214, 1)",
        "rgba(255, 45, 85, 1)", "rgba(0, 255, 255, 1)"
    ]
    
    # Process each bucket (time interval) and user activity data
    for idx, bucket in enumerate(response["aggregations"]["activity_over_time"]["buckets"]):
        time_str = bucket["key_as_string"]  # e.g., "2023-10-30T01:00:00.000Z"
        time_label = datetime.strptime(time_str, "%Y-%m-%dT%H:%M:%S.%fZ").strftime("%H:%M")
        
        # Initialize a time entry
        time_entry = {"time": time_label}
        
        # Aggregate event counts for each user within the current time bucket
        for user_bucket in bucket["user_activity"]["buckets"]:
            user_name = user_bucket["key"]
            event_count = user_bucket["event_count"]["value"]
            
            # Assign a color if user not in user_colors
            if user_name not in user_colors:
                user_colors[user_name] = color_palette[len(user_colors) % len(color_palette)]
            
            # Add the user's event count to the time entry
            time_entry[user_name] = event_count
            
        activity_data_users_separate.append(time_entry)
    
    # Step 3: Build activityConfig dynamically based on user colors
    activity_config = {
        user: {
            "label": user,
            "color": color,
            "gradientId": f"gradient{user.replace(' ', '')}"
        } for user, color in user_colors.items()
    }
    
    # Prepare the final response
    response_data = {
        "activityData": activity_data_users_separate,
        "activityConfig": activity_config
    }

    query = {
        "size": 0,
        "aggs": {
            "users": {
                "terms": {
                    "field": "agent.hostname",
                    "size": 1000  # Adjust as necessary
                }
            }
        }
    }
        
    response = client.search(index=index_name, body=query)  # Replace 'your_index_name' with actual index name
    users = [bucket["key"] for bucket in response["aggregations"]["users"]["buckets"]]

    # Build structured output
    structured_output = []
    for user in users:
        query = {
                "size": 0,
                "query": {
                    "term": {
                        "user.name": user  
                    }
                },
                "aggs": {
                    "unique_source_ips": {
                        "terms": {
                            "field": "source.ip",
                            "size": 10000  
                        }
                    }
                }
            }
        # Execute the search query
        response = client.search(index=index_name, body=query)
        # Extract unique source IPs
        unique_source_ips = [bucket['key'] for bucket in response['aggregations']['unique_source_ips']['buckets']]
        mapData = []
        for ip in unique_source_ips:
            from_location = get_location(user, ip)
            
            mapData.append({
                "type": "Feature",
                "id": generate_secure_id(),
                "properties": {
                    "Code": from_location['location'],
                    "Name": from_location['name']
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": from_location['coordinate']
                }
            })

    
    # Compile results
    result = {
        "total_events": total_events,
        "total_login_success": login_success,
        "total_login_failure": login_failure,
        "total_users": len(total_users),
        "user_activity_over_time_combined": activity_data_all_users,
        "user_activity_over_time_separate": response_data,
        "users_location_map": mapData
    }
    
    return result

@app.route('/get_user', methods=['GET'])
def get_user():
    # Elasticsearch query to get unique hostnames
    query = {
        "size": 0,
        "aggs": {
            "unique_hostnames": {
                "terms": {
                    "field": "agent.hostname",  # Adjust if necessary
                    "size": 10000               # Adjust if more than 10,000 expected
                }
            }
        }
    }

    # Execute the search query
    response = client.search(index=index_name, body=query)

    # Extract unique device names and assign random IDs
    users = [
        {
            "id": f"user_{str(random.randint(100, 999)).zfill(3)}",  # Generates a random user ID
            "username": bucket['key']
        }
        for bucket in response['aggregations']['unique_hostnames']['buckets']
    ]

    # Return the users as a JSON response
    return jsonify(users)

@app.route('/get_user_ips', methods=['GET'])
def get_user_ips():
    # Get the user parameter from the request URL
    user = request.args.get('user')
    
    if not user:
        return jsonify({"error": "Please provide a 'user' parameter"}), 400

    # Elasticsearch query to get unique source and destination IPs for the specified user
    query = {
        "size": 0,
        "query": {
            "term": {
                "user.name": user  
            }
        },
        "aggs": {
            "unique_source_ips": {
                "terms": {
                    "field": "source.ip",
                    "size": 10000  
                }
            },
            "unique_destination_ips": {
                "terms": {
                    "field": "destination.ip",
                    "size": 10000  
                }
            }
        }
    }

    # Execute the search query
    response = client.search(index=index_name, body=query)

    # Extract unique destination IPs
    unique_destination_ips = [bucket['key'] for bucket in response['aggregations']['unique_destination_ips']['buckets']]

    # Extract unique source IPs
    unique_source_ips = [bucket['key'] for bucket in response['aggregations']['unique_source_ips']['buckets']]

    return jsonify({
        "source_ip": unique_source_ips,
        "destination_ip": unique_destination_ips
    })

@app.route('/api/logs', methods=['GET'])
def get_logsData():

    # Extracting query parameters from the request
    query_text = request.args.get('query', '')  # Search query
    time_range = request.args.get('time_range', '15m')  # Time range (default is last 15 minutes)

    # Building the query
    # Building the query
    if query_text:
        query = {
            "query": {
                "multi_match": {
                    "query": query_text,
                    "fields": ["message", "winlog.*"]  # Adjust fields as needed
                }
            },
            "post_filter": {
                "range": {
                    "@timestamp": {
                        "gte": f"now-{time_range}",
                        "lte": "now"
                    }
                }
            }
        }
    else:
        print("In else!!", time_range)
        query = {
            "query": {
                "match_all": {}
            },
            "post_filter": {
                "range": {
                    "@timestamp": {
                        "gte": f"now-{time_range}",
                        "lte": "now"
                    }
                }
            }
        }
 

   
    try:
        # Scan function to get all the data based on the query
        rel = scan(client=client,
                    query=query,
                    scroll='1m',
                    index=index_name,
                    sort=[{"@timestamp": {"order": "desc"}}],
                    raise_on_error=True,
                    preserve_order=True,
                    clear_scroll=True)

        result = list(rel)
        data = []

        for hit in result:
            source = hit['_source']
            timestamp = source.get('@timestamp', None)
            message = source.get('message', None)
            winlog = source.get('winlog', None)
            data.append({'timestamp': timestamp, 'message': message, 'winlog': winlog})

        # Convert the data to a DataFrame
        df = pd.DataFrame(data)
        # print(df)
        
        

        df['timestamp'] = pd.to_datetime(df['timestamp']) + pd.DateOffset(hours=5)
        # print("df", df)
        df.to_csv('elasticsearchLogData.csv', index=False)

        # Group by minute and count occurrences
        result = df.groupby(df['timestamp'].dt.floor('T')).size().reset_index(name='total')

        # Convert the 'timestamp' column to a list of strings
        result['timestamp'] = result['timestamp'].astype(str)

        # Create an array of objects for the desired output
        realtimeBarChartData = [
            {"date": row['timestamp'], "total": row['total']}
            for _, row in result.iterrows()
        ]

        
        response_data = df.head(100).to_dict(orient='records')

 
        return jsonify(response_data, realtimeBarChartData)

    except Exception as e:
        print(f"Error fetching data from Elasticsearch: {e}")
        return jsonify({"error": "Failed to fetch data from Elasticsearch"}), 500

# Endpoint to retrieve rules  
@app.route('/get_all_rules', methods=['GET'])
def rules():
    print('1') 
   
    with open('C:\\DARC\\backend\\Rule.json') as f:
        print('3')
        logs = json.load(f)
    print('2')
   
    return jsonify(logs) 

# Endpoint to retrieve alerts  
@app.route('/get_all_alerts', methods=['GET'])
def alerts():
    print('1') 
   
    with open('C:\\DARC\\backend\\alerts.json') as f:
        logs = json.load(f)
   
    return jsonify(logs) 

@app.route('/add_rule', methods=['POST'])
def add_log():
    print("2")
    new_log = request.json

    with open('C:\\DARC\\backend\\Rule.json', 'r+') as f:
        logs = json.load(f)
        logs.append(new_log)
        f.seek(0)
        json.dump(logs, f, indent=4)

    return jsonify({"message": "Rule entry added successfully!"}), 201

@app.route('/rule_check', methods=['GET']) 
def check_rules_and_generate_alerts():
    print("IN rule fn!!")
    with open("C:\\DARC\\backend\\Rule.json", 'r') as file:
        rules = json.load(file)

    # List to store alerts
    alerts = []

    # Iterate through each rule
    for rule in rules:
        rule_name = rule.get("RuleName", "")
        
        if rule_name == "Suspicious Process Execution":
            print("Inside suspicious!!")
            process_name = rule.get("process_name")
            Default_directory = rule.get("Default_directory")
            user = rule.get("user")
                

            # Create the query based on the process execution rule
            query = {
                "query": {
                    "bool": {
                        "must": [
                            {"match": {"process.name": process_name}},
                            {"match": {"process.working_directory": Default_directory}},
                        ]
                    }
                }
            }
            print("Query: ", query)

            # Execute the search query
            response = client.search(index=".ds-winlogbeat-8.15.3-2024.10.23-000001", body=query)

            # Retrieve the hits (matching logs)
            hits = response['hits']['hits']
            print("hits: ", hits)

            # If there are any matching logs, add them to alerts
            for hit in hits:
                alert = {
                    "rule": rule,
                    "log": hit['_source']
                }
                alerts.append(alert)

        elif rule_name == "Data Exfiltration":
            print("In elif!!!")
            source_ip = rule.get("source_ip")
            destination_ip = rule.get("destination_ip")
            source_port = rule.get("source_port")
            destination_port = rule.get("destination_port")

            query = {
                "query": {
                    "bool": {
                        "must": [
                            {"match": {"source.ip": source_ip}},
                            {"match": {"destination.ip": destination_ip}},
                            {"match": {"source.port": source_port}},
                            {"match": {"destination.port": destination_port}}
                        ]
                    }
                }
            }

            response = client.search(index=".ds-winlogbeat-8.15.3-2024.10.23-000001", body=query)

            hits = response['hits']['hits']

            for hit in hits:
                alert = {
                    "rule": rule,
                    "log": hit['_source']
                }
                alerts.append(alert)

    # Save the alerts to alerts.json
    with open("C:\\DARC\\backend\\alerts.json", 'w') as outfile:
        json.dump(alerts, outfile, indent=4)

    print("Alerts:: ",alerts)

    return alerts



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)