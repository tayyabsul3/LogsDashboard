// High-fidelity Mock Data for Tayyab Sultan's Logs Dashboard
// This file serves as a local mock database, removing all external API requirements.

export const mockLogs = [
  {
    message: "Process accessed:\nRuleName: technique_id=T1036,technique_name=Masquerading\nUtcTime: 2026-05-19 12:24:56.224\nSourceProcessGUID: {ba9fb914-5f64-66d5-b203-00000000aa00}\nSourceProcessId: 11840\nSourceThreadId: 11828\nSourceImage: C:\\Users\\Tayyab Sultan\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\nTargetProcessGUID: {ba9fb914-5f60-66d5-a303-00000000aa00}\nTargetProcessId: 3560\nTargetImage: C:\\Users\\Tayyab Sultan\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\nGrantedAccess: 0x1401\nCallTrace: C:\\WINDOWS\\SYSTEM32\\ntdll.dll+9da24|C:\\WINDOWS\\System32\\KERNELBASE.dll+338ae|C:\\Users\\Tayyab Sultan\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+27c26bc\nSourceUser: DESKTOP-TAYYAB\\Tayyab Sultan\nTargetUser: DESKTOP-TAYYAB\\Tayyab Sultan",
    timestamp: "2026-05-19T12:24:56.224Z",
    winlog: {
      api: "wineventlog",
      channel: "Microsoft-Windows-Sysmon/Operational",
      computer_name: "DESKTOP-TAYYAB",
      event_data: {
        CallTrace: "C:\\WINDOWS\\SYSTEM32\\ntdll.dll+9da24|C:\\WINDOWS\\System32\\KERNELBASE.dll+338ae",
        GrantedAccess: "0x1401",
        SourceUser: "DESKTOP-TAYYAB\\Tayyab Sultan",
        TargetImage: "C:\\Users\\Tayyab Sultan\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",
        TargetProcessGUID: "{ba9fb914-5f60-66d5-a303-00000000aa00}",
        TargetProcessId: "3560",
        TargetUser: "DESKTOP-TAYYAB\\Tayyab Sultan",
      },
      event_id: "10",
      opcode: "Info",
      process: {
        pid: 4988,
        thread: { id: 6368 },
      },
      provider_guid: "{5770385f-c22a-43e0-bf4c-06f5698ffbd9}",
      provider_name: "Microsoft-Windows-Sysmon",
      record_id: "721069",
      task: "Process accessed (rule: ProcessAccess)",
      user: {
        domain: "NT AUTHORITY",
        identifier: "S-1-5-18",
        name: "SYSTEM",
        type: "User",
      },
      version: 3,
    },
  },
  {
    message: "Network connection detected:\nRuleName: -\nUtcTime: 2026-05-19 12:25:01.102\nProcessGuid: {ba9fb914-5f64-66d5-b203-00000000aa00}\nProcessId: 11840\nImage: C:\\Users\\Tayyab Sultan\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\nUser: DESKTOP-TAYYAB\\Tayyab Sultan\nProtocol: tcp\nInitiated: true\nSourceIsIpv6: false\nSourceIp: 192.168.10.15\nSourcePort: 54321\nDestinationIsIpv6: false\nDestinationIp: 20.244.86.188\nDestinationPort: 5000",
    timestamp: "2026-05-19T12:25:01.102Z",
    winlog: {
      api: "wineventlog",
      channel: "Microsoft-Windows-Sysmon/Operational",
      computer_name: "DESKTOP-TAYYAB",
      event_data: {
        Image: "C:\\Users\\Tayyab Sultan\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",
        SourceUser: "DESKTOP-TAYYAB\\Tayyab Sultan",
        SourceIp: "192.168.10.15",
        SourcePort: "54321",
        DestinationIp: "20.244.86.188",
        DestinationPort: "5000",
        Protocol: "tcp",
      },
      event_id: "3",
      opcode: "Info",
      process: {
        pid: 11840,
        thread: { id: 8976 },
      },
      provider_name: "Microsoft-Windows-Sysmon",
      record_id: "721071",
      task: "Network connection (rule: NetworkConnect)",
      user: {
        domain: "NT AUTHORITY",
        identifier: "S-1-5-18",
        name: "SYSTEM",
        type: "User",
      },
    },
  },
  {
    message: "Process Create:\nRuleName: technique_id=T1059,technique_name=Command and Scripting Interpreter\nUtcTime: 2026-05-19 12:28:15.890\nProcessGuid: {ba9fb914-5f80-66d5-d003-00000000aa00}\nProcessId: 8492\nImage: C:\\Windows\\System32\\cmd.exe\nCommandLine: cmd.exe /c powershell.exe -ExecutionPolicy Bypass -File download.ps1\nParentProcessGuid: {ba9fb914-5f64-66d5-b203-00000000aa00}\nParentProcessId: 11840\nParentImage: C:\\Users\\Tayyab Sultan\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\nUser: DESKTOP-TAYYAB\\Tayyab Sultan",
    timestamp: "2026-05-19T12:28:15.890Z",
    winlog: {
      api: "wineventlog",
      channel: "Microsoft-Windows-Sysmon/Operational",
      computer_name: "DESKTOP-TAYYAB",
      event_data: {
        CommandLine: "cmd.exe /c powershell.exe -ExecutionPolicy Bypass -File download.ps1",
        SourceUser: "DESKTOP-TAYYAB\\Tayyab Sultan",
        SourceIp: "127.0.0.1",
        SourcePort: "49201",
        DestinationIp: "127.0.0.1",
        DestinationPort: "443",
        Protocol: "https",
      },
      event_id: "1",
      opcode: "Info",
      process: {
        pid: 8492,
        thread: { id: 2204 },
      },
      provider_name: "Microsoft-Windows-Sysmon",
      record_id: "721085",
      task: "Process Create (rule: ProcessCreate)",
      user: {
        domain: "DESKTOP-TAYYAB",
        name: "Tayyab Sultan",
        type: "User",
      },
    },
  },
  {
    message: "File created:\nRuleName: -\nUtcTime: 2026-05-19 12:29:10.155\nProcessGuid: {ba9fb914-5f80-66d5-d003-00000000aa00}\nProcessId: 8492\nImage: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe\nTargetFilename: C:\\Users\\Tayyab Sultan\\AppData\\Local\\Temp\\malware.exe\nCreationUtcTime: 2026-05-19 12:29:10.155",
    timestamp: "2026-05-19T12:29:10.155Z",
    winlog: {
      api: "wineventlog",
      channel: "Microsoft-Windows-Sysmon/Operational",
      computer_name: "DESKTOP-TAYYAB",
      event_data: {
        TargetFilename: "C:\\Users\\Tayyab Sultan\\AppData\\Local\\Temp\\malware.exe",
        SourceUser: "DESKTOP-TAYYAB\\Tayyab Sultan",
        SourcePort: "80",
        DestinationIp: "10.0.0.24",
        DestinationPort: "80",
        Protocol: "http",
      },
      event_id: "11",
      opcode: "Info",
      process: {
        pid: 8492,
        thread: { id: 1104 },
      },
      provider_name: "Microsoft-Windows-Sysmon",
      record_id: "721098",
      task: "File created (rule: FileCreate)",
      user: {
        domain: "DESKTOP-TAYYAB",
        name: "Tayyab Sultan",
        type: "User",
      },
    },
  },
  {
    message: "Registry value set:\nRuleName: T1547.001,Registry Run Keys / Startup Folder\nUtcTime: 2026-05-19 12:31:02.441\nProcessGuid: {ba9fb914-5f80-66d5-d003-00000000aa00}\nProcessId: 8492\nImage: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe\nEventType: SetValue\nTargetObject: HKU\\S-1-5-21-3974234-Run\\MaliciousStartup\nDetails: C:\\Users\\Tayyab Sultan\\AppData\\Local\\Temp\\malware.exe",
    timestamp: "2026-05-19T12:31:02.441Z",
    winlog: {
      api: "wineventlog",
      channel: "Microsoft-Windows-Sysmon/Operational",
      computer_name: "DESKTOP-TAYYAB",
      event_data: {
        TargetObject: "HKU\\S-1-5-21-3974234-Run\\MaliciousStartup",
        Details: "C:\\Users\\Tayyab Sultan\\AppData\\Local\\Temp\\malware.exe",
        SourceUser: "DESKTOP-TAYYAB\\Tayyab Sultan",
        SourcePort: "0",
        DestinationIp: "127.0.0.1",
        DestinationPort: "0",
        Protocol: "local",
      },
      event_id: "13",
      opcode: "Info",
      process: {
        pid: 8492,
        thread: { id: 1104 },
      },
      provider_name: "Microsoft-Windows-Sysmon",
      record_id: "721115",
      task: "Registry value set (rule: RegistryValueSet)",
      user: {
        domain: "DESKTOP-TAYYAB",
        name: "Tayyab Sultan",
        type: "User",
      },
    },
  },
  {
    message: "Privilege Escalation detected:\nRuleName: T1068,Exploitation for Privilege Escalation\nUtcTime: 2026-05-19 12:35:11.902\nProcessId: 1044\nImage: C:\\Windows\\System32\\lsass.exe\nDescription: Access to LSASS memory was granted with extensive privileges to an untrusted process.\nSourceImage: C:\\Users\\Tayyab Sultan\\AppData\\Local\\Temp\\malware.exe",
    timestamp: "2026-05-19T12:35:11.902Z",
    winlog: {
      api: "wineventlog",
      channel: "Microsoft-Windows-Sysmon/Operational",
      computer_name: "DESKTOP-TAYYAB",
      event_data: {
        SourceUser: "NT AUTHORITY\\SYSTEM",
        SourceIp: "10.0.0.1",
        SourcePort: "4444",
        DestinationIp: "185.220.101.5",
        DestinationPort: "4444",
        Protocol: "tcp",
      },
      event_id: "10",
      opcode: "Warning",
      process: {
        pid: 1044,
        thread: { id: 441 },
      },
      provider_name: "Microsoft-Windows-Sysmon",
      record_id: "721155",
      task: "Process accessed (rule: LSASS_Access)",
      user: {
        domain: "NT AUTHORITY",
        name: "SYSTEM",
        type: "User",
      },
    },
  },
  {
    message: "DNS Query:\nRuleName: -\nUtcTime: 2026-05-19 12:37:00.123\nProcessGuid: {ba9fb914-5fa0-66d5-e203-00000000aa00}\nProcessId: 6732\nImage: C:\\Windows\\System32\\svchost.exe\nQueryName: command-and-control-server.com\nQueryStatus: 0\nQueryResults: ::ffff:185.220.101.5",
    timestamp: "2026-05-19T12:37:00.123Z",
    winlog: {
      api: "wineventlog",
      channel: "Microsoft-Windows-Sysmon/Operational",
      computer_name: "DESKTOP-TAYYAB",
      event_data: {
        QueryName: "command-and-control-server.com",
        QueryResults: "185.220.101.5",
        SourceUser: "NT AUTHORITY\\NETWORK SERVICE",
        SourcePort: "53",
        DestinationIp: "8.8.8.8",
        DestinationPort: "53",
        Protocol: "udp",
      },
      event_id: "22",
      opcode: "Info",
      process: {
        pid: 6732,
        thread: { id: 910 },
      },
      provider_name: "Microsoft-Windows-Sysmon",
      record_id: "721182",
      task: "DNS query (rule: DnsQuery)",
      user: {
        domain: "NT AUTHORITY",
        name: "NETWORK SERVICE",
        type: "User",
      },
    },
  },
  {
    message: "Process terminated:\nRuleName: -\nUtcTime: 2026-05-19 12:45:00.000\nProcessGuid: {ba9fb914-5f80-66d5-d003-00000000aa00}\nProcessId: 8492\nImage: C:\\Windows\\System32\\cmd.exe\nUser: DESKTOP-TAYYAB\\Tayyab Sultan",
    timestamp: "2026-05-19T12:45:00.000Z",
    winlog: {
      api: "wineventlog",
      channel: "Microsoft-Windows-Sysmon/Operational",
      computer_name: "DESKTOP-TAYYAB",
      event_data: {
        SourceUser: "DESKTOP-TAYYAB\\Tayyab Sultan",
      },
      event_id: "5",
      opcode: "Info",
      process: {
        pid: 8492,
        thread: { id: 2204 },
      },
      provider_name: "Microsoft-Windows-Sysmon",
      record_id: "721221",
      task: "Process terminated (rule: ProcessTerminate)",
      user: {
        domain: "DESKTOP-TAYYAB",
        name: "Tayyab Sultan",
        type: "User",
      },
    },
  }
];

export const mockGraphData = [
  { date: "2026-05-19T08:00:00.000Z", total: 45 },
  { date: "2026-05-19T09:00:00.000Z", total: 95 },
  { date: "2026-05-19T10:00:00.000Z", total: 120 },
  { date: "2026-05-19T11:00:00.000Z", total: 80 },
  { date: "2026-05-19T12:00:00.000Z", total: 245 },
  { date: "2026-05-19T13:00:00.000Z", total: 190 },
  { date: "2026-05-19T14:00:00.000Z", total: 110 },
  { date: "2026-05-19T15:00:00.000Z", total: 75 },
  { date: "2026-05-19T16:00:00.000Z", total: 55 },
];

export const mockUsers = [
  {
    id: "user_001",
    username: "tayyab.sultan",
    fullName: "Tayyab Sultan",
    role: "IT Security Administrator",
    department: "Information Security",
    status: "active",
    riskScore: 35,
    lastLogin: "2026-05-19 09:45",
    currentIP: "192.168.10.15",
    geolocation: "Islamabad, Pakistan",
    device: "Windows 11 Laptop",
    lastActivity: "Reviewed correlation security alert rules"
  },
  {
    id: "user_002",
    username: "john.smith",
    fullName: "John Smith",
    role: "Senior System Analyst",
    department: "IT Infrastructure",
    status: "idle",
    riskScore: 55,
    lastLogin: "2026-05-19 08:15",
    currentIP: "192.168.1.101",
    geolocation: "New York, USA",
    device: "MacBook Pro M3",
    lastActivity: "Fetched environment logs database"
  },
  {
    id: "user_003",
    username: "sam.wilson",
    fullName: "Sam Wilson",
    role: "Database Operator",
    department: "Data Engineering",
    status: "suspicious",
    riskScore: 85,
    lastLogin: "2026-05-19 12:11",
    currentIP: "185.220.101.5",
    geolocation: "Berlin, Germany (TOR Exit)",
    device: "Linux Workstation",
    lastActivity: "Access to LSASS memory requested with high privilege"
  },
  {
    id: "user_004",
    username: "emma.taylor",
    fullName: "Emma Taylor",
    role: "Finance Analyst",
    department: "Finance",
    status: "active",
    riskScore: 15,
    lastLogin: "2026-05-19 10:00",
    currentIP: "192.168.1.103",
    geolocation: "London, UK",
    device: "Windows 10 Pro Desktop",
    lastActivity: "Accessed quarterly budget spreadsheet"
  }
];

export const mockUserModelingOverview = {
  total_events: 184920,
  total_users: 142,
  total_login_success: 12901,
  total_login_failure: 148,
  
  // Array of [timestamp_ms, value]
  user_activity_over_time_combined: [
    [1779225600000, 1200],
    [1779229200000, 1500],
    [1779232800000, 1800],
    [1779236400000, 1400],
    [1779240000000, 2200],
    [1779243600000, 2800],
    [1779247200000, 2600],
    [1779250800000, 3100],
    [1779254400000, 2900],
  ],

  user_activity_over_time_separate: {
    activityConfig: {
      network: { label: "Network Logs", color: "#1A8299", gradientId: "gradNetwork" },
      application: { label: "Application Logs", color: "#C285FF", gradientId: "gradApp" },
      system: { label: "System Actions", color: "#FF5E5E", gradientId: "gradSys" }
    },
    activityData: [
      { time: "09:00", network: 145, application: 60, system: 22 },
      { time: "10:00", network: 180, application: 75, system: 30 },
      { time: "11:00", network: 220, application: 90, system: 35 },
      { time: "12:00", network: 160, application: 110, system: 85 },
      { time: "13:00", network: 290, application: 140, system: 40 },
      { time: "14:00", network: 240, application: 130, system: 32 },
      { time: "15:00", network: 200, application: 95, system: 28 },
    ]
  },

  users_location_map: [
    {
      type: "Feature",
      id: "BZlPSALV",
      properties: {
        Code: "User: tayyab.sultan\nIP: 192.168.10.15",
        Name: "Islamabad, Pakistan"
      },
      geometry: {
        type: "Point",
        coordinates: [73.0479, 33.6844]
      }
    },
    {
      type: "Feature",
      id: "USANY123",
      properties: {
        Code: "User: john.smith\nIP: 192.168.1.101",
        Name: "New York City, USA"
      },
      geometry: {
        type: "Point",
        coordinates: [-74.0060, 40.7128]
      }
    },
    {
      type: "Feature",
      id: "GERBER99",
      properties: {
        Code: "User: sam.wilson\nIP: 185.220.101.5",
        Name: "Berlin, Germany"
      },
      geometry: {
        type: "Point",
        coordinates: [13.4050, 52.5200]
      }
    },
    {
      type: "Feature",
      id: "UKLON456",
      properties: {
        Code: "User: emma.taylor\nIP: 192.168.1.103",
        Name: "London, United Kingdom"
      },
      geometry: {
        type: "Point",
        coordinates: [-0.1278, 51.5074]
      }
    }
  ]
};

export const defaultRules = [
  {
    RuleName: "Masquerading Process Detection (T1036)",
    source_ip: "Any",
    source_port: "Any",
    destination_ip: "Any",
    destination_port: "Any",
    protocol: "Any",
    Description: "Detects masqueraded system files executed from non-standard folders or temporary directories."
  },
  {
    RuleName: "LSASS Memory Access (T1003.001)",
    source_ip: "Any",
    source_port: "Any",
    destination_ip: "Any",
    destination_port: "Any",
    protocol: "Any",
    Description: "Detects attempts to read credentials from the local security authority subsystem service memory."
  },
  {
    RuleName: "PowerShell C2 Connection (T1059.001)",
    source_ip: "192.168.10.0/24",
    source_port: "Any",
    destination_ip: "Any",
    destination_port: "5000",
    protocol: "tcp",
    Description: "Alerts on outbound network handshakes initiated by PowerShell scripts on non-standard backend ports."
  }
];

export const defaultAlerts = [
  {
    rule: { RuleName: "Masquerading Process Detection (T1036)" },
    log: { message: "Process accessed:\nRuleName: technique_id=T1036,technique_name=Masquerading\nSourceImage: C:\\Users\\Tayyab Sultan\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe" }
  },
  {
    rule: { RuleName: "LSASS Memory Access (T1003.001)" },
    log: { message: "Privilege Escalation detected:\nRuleName: T1068,Exploitation for Privilege Escalation\nImage: C:\\Windows\\System32\\lsass.exe" }
  }
];
