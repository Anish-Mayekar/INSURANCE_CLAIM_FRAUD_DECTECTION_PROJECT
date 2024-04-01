import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/adminhomepage",
    icon: <AiIcons.AiFillHome />,
    cName: "nava-text",
  },
  {
    title: "All Reports",
    path: "/allreports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nava-text",
  },
  {
    title: "Not Fraud Reports",
    path: "/notfraudreports",
    icon: <FaIcons.FaCartPlus />,
    cName: "nava-text",
  },
  {
    title: "Fraud Reports",
    path: "/fraudreports",
    icon: <IoIcons.IoMdPeople />,
    cName: "nava-text",
  },
];
