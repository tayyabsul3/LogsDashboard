import React from "react";

const UserModelingHighlights = (props) => {
  return (
    <div className=" userModelingOverviewHighlights flex justify-between rounded-xl py-5 text-white m-2 px-2">
      <div className="total flex-[0.3] flex flex-col justify-center items-center">
        <h2 className="text-xl">Total Users</h2>
        <h1 className="text-2xl text-blue-400">{props.totalUsers}</h1>
      </div>
      <div className="level12 flex-[0.25] flex flex-col justify-center items-center border-l-2 border-l-gray-500">
        <h2 className="text-xl">Events</h2>
        <h1 className="text-2xl text-blue-400">{props.totalEvents}</h1>
      </div>
      <div className="authFailure  flex-[0.25] flex flex-col justify-center items-center border-l-2 border-l-gray-500">
        <h2 className="text-xl"> Login Failure</h2>
        <h1 className="text-2xl text-blue-400">{props.totalLoginFailure}</h1>
      </div>
      <div className="authSuccess  flex-[0.25] flex flex-col justify-center items-center  border-l-2 border-l-gray-500">
        <h2 className="text-xl">Login Success</h2>
        <h1 className="text-2xl text-blue-400">{props.totalLoginSuccess}</h1>
      </div>
    </div>
  );
};

export default UserModelingHighlights;
