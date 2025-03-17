import React from 'react'
import UserModelingHighlights from "../Analytics/UserModelingHighlights";
import UserDetailLineChart from '../Analytics/UserModelingDetailLineChart';
import UserDetailHighlights from '../Analytics/UserModeingDetailHighlightBox';
import UserDetailRadarChart from '../Analytics/UserModelingDetailRadarChart';
import UserDetailDonutChart from '../Analytics/UserModelingDetailDonutChart';
import UserDetailBehaviorRadialChart from '../Analytics/UserModelingDetailPolarChart';
import UserDetailTrafficMap from '../Analytics/UserModelingDetailMapUser';
import UserModelingMapOverview from '../Analytics/UserModelingMapOverview';
const UserModelingDetailPanel = ()=>{
    return(
        <div className='h-[100vh] overflow-y-scroll'>
            <div className="grid gap-2 sm:grid-cols-12 px-2 mt-1">
                <div className=" sm:col-span-4 min-h-[100px] rounded-lg">
                    <div className='grid sm:grid-cols-12 gap-2'>
                        <div className='sm:col-span-6'>
                            <UserDetailHighlights pad='true' counts={450} text='Events Injested'/>
                            <UserDetailHighlights pad='false' counts={50} text='Anomalies'/>
                        </div>
                        <div className='sm:col-span-6 '>
                            <UserDetailHighlights pad='true' counts={10} text='Suspicious Events'/>
                            <UserDetailHighlights pad='false' counts={'20'} text='Risk Score'/>
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