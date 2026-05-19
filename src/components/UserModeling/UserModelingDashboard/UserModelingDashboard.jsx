import React, { useEffect, useState } from "react";
import "./UserModelingDashboard.css";
import UsersNames from "../UserLists/UsersList";
import UserModelingDonutChart from "../Analytics/UserModelingDonutGraph";
import UserPrivilegeEscalationsDonutChart from "../Analytics/UserModelingPriviledgeChart";
import UserModelingOverviewPanel from "../UserModelingOverviewPanel/UserModelingOverview";
import UserModelingDetailPanel from "../UserModelingDetail/UserModelingDetail";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { mockUsers } from "@/lib/mockData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const UserModelOverview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(false);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(mockUsers);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  // Filter user data based on search query, defaulting to all users if the query is empty
  const filteredUsers = searchQuery
    ? userData.filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : userData;

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };
  const [sideScreen, setsideScreen] = useState(null);

  return (
    <div className=" overflow-y-auto  p-8 h-[85vh] ">
      <h1 className="text-white mb-3 text-xl">
        {selectedUser ? "User Detail Analysis" : "User Modeling Overview"}
      </h1>
      <div className="grid gap-2 sm:grid-cols-12">
        {/* Users List Container */}
        <div className="sm:col-span-3 min-h-[100px] linear_g_1 rounded-md p-3">
          <h3 className="text-white text-lg ps-2">Users</h3>
          {/* search Field */}
          <div className="search flex gap-2 justify-between w-full px-4 py-4 mb-2 border-blue-600 text-gray-500 border-b-2  items-center">
            <input
              type="search"
              className="bg-transparent px-2 text-medium outline-none border-none"
              placeholder="Search Users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <BsSearch size={20} />
          </div>
          {/* PlaceHolder div */}
          <div className="text-white">
            <div>
              {/* <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-3"
                  className="shadow-none rounded-xl mt-2 text-xs px-5 bg-transparent h-fit"
                >
                  <AccordionTrigger className="shadow-none text-center text-transparent hover:no-underline border-none font-medium text-base">
                    <p className="text-white">Button</p>
                  </AccordionTrigger>
                  <AccordionContent className="text-center">
                    <div className="space-y-2 px-3 flex flex-col items-start w-full">
                      <button
                        onClick={() => {
                          setsideScreen("network");
                        }}
                        className="border-b border-transparent hover:border-white transition-all duration-300   w-full text-left pb-2"
                      >
                        Network
                      </button>
                      <button
                        onClick={() => {
                          setsideScreen("file");
                        }}
                        className="border-b border-transparent hover:border-white transition-all duration-300   w-full text-left pb-2"
                      >
                        File
                      </button>
                      <button
                        onClick={() => {
                          setsideScreen("browser");
                        }}
                        className="border-b border-transparent hover:border-white transition-all duration-300   w-full text-left pb-2"
                      >
                        Browser
                      </button>
                      <button
                        onClick={() => {
                          setsideScreen("application");
                        }}
                        className="border-b border-transparent hover:border-white transition-all duration-300   w-full text-left pb-2"
                      >
                        Application
                      </button>
                      <button
                        onClick={() => {
                          setsideScreen("system");
                        }}
                        className="border-b border-transparent hover:border-white transition-all duration-300   w-full text-left pb-2"
                      >
                        System
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion> */}
            </div>
          </div>
          {/* Users Name Cards */}
          <UsersNames
            userlist={filteredUsers}
            onUserClick={setSelectedUser}
            selectedUser={selectedUser}
          />
        </div>
        {/* User Modeling Overview Analytics */}
        <div className="sm:col-span-9 min-h-[100px] linear_g_1 rounded-md p-2">
          {selectedUser ? (
            <UserModelingDetailPanel user={selectedUser} />
          ) : (
            <UserModelingOverviewPanel
              sideScreen={sideScreen}
              setsideScreen={setsideScreen}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserModelOverview;
