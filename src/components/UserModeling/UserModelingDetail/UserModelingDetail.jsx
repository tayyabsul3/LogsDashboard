import React from 'react'
import UserModelingHighlights from "../Analytics/UserModelingHighlights";
import UserDetailLineChart from '../Analytics/UserModelingDetailLineChart';
import UserDetailHighlights from '../Analytics/UserModeingDetailHighlightBox';
import UserDetailRadarChart from '../Analytics/UserModelingDetailRadarChart';
import UserDetailDonutChart from '../Analytics/UserModelingDetailDonutChart';
import UserDetailBehaviorRadialChart from '../Analytics/UserModelingDetailPolarChart';
import UserDetailTrafficMap from '../Analytics/UserModelingDetailMapUser';
import UserModelingMapOverview from '../Analytics/UserModelingMapOverview';
const UserModelingDetailPanel = ({ user }) => {
    if (!user) return <div className="text-white p-5">Select a user to analyze.</div>;

    const eventsIngested = user.riskScore * 12 + 150;
    const anomalies = Math.max(0, Math.round(user.riskScore * 0.6));
    const suspiciousEvents = Math.max(0, Math.round(user.riskScore * 0.12));
    const riskScore = user.riskScore;

    return (
        <div className='h-[100vh] overflow-y-scroll pb-20'>
            {/* Sleek User Profile Header Card */}
            <div className="mx-2 mb-4 p-5 rounded-lg linear_g_1 text-white border border-blue-900/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl font-bold">{user.fullName}</h2>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase ${
                            user.status === "active" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                            user.status === "idle" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                            "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}>
                            {user.status}
                        </span>
                    </div>
                    <p className="text-sm text-indigo-200 mt-1">
                        {user.role} &bull; <span className="text-indigo-300 font-semibold">{user.department}</span>
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1 mt-3 text-xs text-slate-300">
                        <div><span className="text-slate-400">Current IP:</span> {user.currentIP}</div>
                        <div><span className="text-slate-400">Geolocation:</span> {user.geolocation}</div>
                        <div><span className="text-slate-400">Device:</span> {user.device}</div>
                    </div>
                </div>
                <div className="md:text-right border-t md:border-t-0 border-blue-950 pt-3 md:pt-0 w-full md:w-auto">
                    <p className="text-xs text-slate-400">Last Activity:</p>
                    <p className="text-sm text-amber-300 italic font-medium">{user.lastActivity}</p>
                    <p className="text-[10px] text-slate-400 mt-1">Last Login: {user.lastLogin}</p>
                </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-12 px-2 mt-1">
                <div className=" sm:col-span-4 min-h-[100px] rounded-lg">
                    <div className='grid sm:grid-cols-12 gap-2'>
                        <div className='sm:col-span-6'>
                            <UserDetailHighlights pad='true' counts={eventsIngested} text='Events Ingested'/>
                            <UserDetailHighlights pad='false' counts={anomalies} text='Anomalies'/>
                        </div>
                        <div className='sm:col-span-6 '>
                            <UserDetailHighlights pad='true' counts={suspiciousEvents} text='Suspicious Events'/>
                            <UserDetailHighlights pad='false' counts={riskScore.toString()} text='Risk Score'/>
                        </div>
                    </div>
                </div>
                <div className="userModelingLogTrend sm:col-span-8 min-h-[100px] rounded-lg p-2">
                    <UserDetailLineChart/>
                </div>
            </div>
            {/* User Traffic Map */}
            <div className="userModelingLogTrend px-2 min-h-[100px] mt-2 rounded-lg mb-10 pb-2 pt-2 mx-2">
                <h6 className="text-white my-2 mx-2 text-start">User GEO-Traffic Detail</h6>
                <UserDetailTrafficMap/>
            </div>

            {/* Three Charts in row */}
            <div className="userModelingLogTrend grid gap-3 sm:grid-cols-12 px-3 my-2 min-h-[100px] bg-gray-500 py-3 mx-2 rounded-lg">
                <div className="userModelingDetailPanel1 shadow-lg sm:col-span-4 min-h-[100px] rounded-lg p-2 ">
                    <h6 className="text-white m-2 mt-1  text-start">User Security Event</h6>
                    <UserDetailBehaviorRadialChart/>
                </div>
                <div className="userModelingDetailPanel1 shadow-lg sm:col-span-4 min-h-[100px] rounded-lg p-2">
                    <h6 className="text-white m-2 mt-1  text-start">Activity Patterns </h6>
                    <UserDetailRadarChart/>
                </div>
                <div className="userModelingDetailPanel1 shadow-lg sm:col-span-4 min-h-[100px] rounded-lg p-2 flex justify-start  flex-col">
                    <h6 className="text-white m-2 mt-1 mb-8 text-start">Users Risk Score Distribution</h6>
                    <UserDetailDonutChart />
                </div>               
            </div>
        </div>
    )
}

export default UserModelingDetailPanel;