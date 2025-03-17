import React from "react";
import './UsersList.css';

const UsersNames = ({ userlist, onUserClick, selectedUser }) => {
  return (
    userlist.map((user) => {
        const isSelected = selectedUser && selectedUser.id === user.id;
        console.log("Is selected: ", isSelected)
      return (
        <div
          className={`rounded-lg p-3 shadow-lg shadow-indigo-500/20 mb-2 cursor-pointer ${isSelected ? 'userCard' : ''}`}
          style={{ background: isSelected ? '' : '#2B3566' }}
          key={user.id}
          onClick={() => onUserClick(user)} 
        >
          <div className="grid gap-2 sm:grid-cols-12">
            <div className="sm:col-span-2 flex">
              <img src="./profile.png" alt="profile" />
            </div>
            <div className="sm:col-span-10">
              <div className="flex flex-row align-middle justify-between">
                <h3 className="text-white text-md text-pretty">{user.username}</h3>
                <div className="ms-3 px-4 rounded-sm bg-green-500">
                  <h5>Active</h5>
                </div>
              </div>
              <div className="mt-1 text-white text-sm">
                <h5>Risk Score: 20</h5>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default UsersNames;
