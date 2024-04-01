import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/AdminSidebarStyles.css";

function AdminHomepage() {
  return (
    <>
    <AdminSidebar/>
    <div className="home">
      <h1>AdminHomepage</h1>
    </div>
    </>
    
  );
}

export default AdminHomepage;
