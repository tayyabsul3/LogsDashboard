import React from 'react'

const UserDetailHighlights = (props)=>{
    return(
        <div className={`userModelingLogTrend flex justify-center items-center flex-col py-8 rounded-lg ${props.pad === 'true' ? 'mb-2' : 'mb-0'}`}>
            <h2 className="text-blue-400 text-2xl text-pretty font-bold">{props.counts}</h2>
            <h4 className="text-white text-md text-pretty mt-2">{props.text}</h4>
        </div>
    )
}

export default UserDetailHighlights