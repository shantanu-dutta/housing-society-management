"use client"

import {MdOutlineSpaceDashboard} from "react-icons/md";
import {GoTriangleDown} from "react-icons/go";
import {IoAnalytics} from "react-icons/io5";
import {FaRegCalendar, FaRegCalendarCheck} from "react-icons/fa";
import {AiOutlineFileSearch} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
import {HiOutlineSupport} from "react-icons/hi";
import {useState} from "react";

export default function AppSidebar() {
    const [isExpanded, setIsExpanded] = useState(false)

    function toggleExpand() {
        setIsExpanded(prevState => !prevState)
    }

    return (
        <aside id="app-sidebar" className="h-full py-4 px-0 overflow-y-auto bg-blue-500 dark:bg-gray-800 text-white"
               aria-label="Sidebar">
            <ul className="font-medium">
                <li className="mb-2" onClick={toggleExpand}>
                    <a href="#"
                       className="flex items-center p-4 hover:bg-blue-400">
                        <MdOutlineSpaceDashboard className="text-2xl"/>
                        <span className="ms-2">Dashboard</span>
                        <GoTriangleDown className="ml-auto"/>
                    </a>
                    {isExpanded &&
                        (<ul>
                            <li className="mb-2">
                                <a href="#"
                                   className="flex items-center py-2 pl-10 pr-2 hover:bg-blue-400">
                                    <span className="ms-2">Default Management</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#"
                                   className="flex items-center py-2 pl-10 pr-2 hover:bg-blue-400">
                                    <span className="ms-2">Staff Management</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#"
                                   className="flex items-center py-2 pl-10 pr-2 hover:bg-blue-400">
                                    <span className="ms-2">Complaint Management</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#"
                                   className="flex items-center py-2 pl-10 pr-2 hover:bg-blue-400">
                                    <span className="ms-2">Maintenance</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#"
                                   className="flex items-center py-2 pl-10 pr-2 hover:bg-blue-400">
                                    <span className="ms-2">Visitor Management</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#"
                                   className="flex items-center py-2 pl-10 pr-2 hover:bg-blue-400">
                                    <span className="ms-2">Vendor Management</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#"
                                   className="flex items-center py-2 pl-10 pr-2 hover:bg-blue-400">
                                    <span className="ms-2">Member Management</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#"
                                   className="flex items-center py-2 pl-10 pr-2 hover:bg-blue-400">
                                    <span className="ms-2">Task Management</span>
                                </a>
                            </li>
                        </ul>)}
                </li>
                <li className="hover:bg-blue-400mb-2">
                    <a href="#"
                       className="flex items-center p-4 hover:bg-blue-400">
                        <IoAnalytics className="text-2xl"/>
                        <span className="ms-2">Analytics</span>
                    </a>
                </li>
                <li className="hover:bg-blue-400mb-2">
                    <a href="#"
                       className="flex items-center p-4 hover:bg-blue-400">
                        <FaRegCalendar className="text-2xl"/>
                        <span className="ms-2">Calendar</span>
                    </a>
                </li>
                <li className="hover:bg-blue-400mb-2">
                    <a href="#"
                       className="flex items-center p-4 hover:bg-blue-400">
                        <FaRegCalendarCheck className="text-2xl"/>
                        <span className="ms-2">Events</span>
                    </a>
                </li>
                <li className="hover:bg-blue-400mb-2">
                    <a href="#"
                       className="flex items-center p-4 hover:bg-blue-400">
                        <AiOutlineFileSearch className="text-2xl"/>
                        <span className="ms-2">Society Directory</span>
                    </a>
                </li>
                <li className="hover:bg-blue-400mb-2">
                    <a href="#"
                       className="flex items-center p-4 hover:bg-blue-400">
                        <FiSettings className="text-2xl"/>
                        <span className="ms-2">Settings</span>
                    </a>
                </li>
                <li className="hover:bg-blue-400mb-2">
                    <a href="#"
                       className="flex items-center p-4 hover:bg-blue-400">
                        <HiOutlineSupport className="text-2xl"/>
                        <span className="ms-2">Help and Support</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
