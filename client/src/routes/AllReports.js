import React from "react";
import "../styles/AdminSidebarStyles.css";
import AdminSidebar from "../components/AdminSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AllReportsStyles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'
function Reports() {
  const[users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);


  //Delete function
  // const deleteUser = (id,customer_id) => {
  //   if(window.confirm(`Are you sure you want to delete user: ${customer_id}`)){

  //   }else{

  //   }
  // };


  const deleteUser = () => {
    alert("Are you sure you want to delete")
  }

  return (
    <>
    <AdminSidebar />
    <br></br><br></br>
      <div className="w-100 vh-100 d-flex">
        <div className="w-50">
          <table className="table">
            <thead>
              <tr>
                <th>claim_id</th>
                <th>policy_id</th>
                <th>customer_id</th>
                <th>claim_amount</th>
                <th>claim_date</th>
                <th>claim_type</th>
                <th>claim_status</th>
                <th>city</th>
                <th>state</th>
                <th>country</th>
                <th>investigator_id</th>
                <th>investigation_status</th>
                <th>investigation_notes</th>
                {/* <th>is_fraudulent</th> */}
                <th>fraud_reason</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return<tr>
                  <td>{user.claim_id}</td>
                  <td>{user.policy_id}</td>
                  <td>{user.customer_id}</td>
                  <td>{user.claim_amount}</td>
                  <td>{user.claim_date}</td>
                  <td>{user.claim_type}</td>
                  <td>{user.claim_status}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.country}</td>
                  <td>{user.investigator_id}</td>
                  <td>{user.investigation_status}</td>
                  <td>{user.investigation_notes}</td>
                  {/* <td>{user.is_fraudulent}</td> */}
                  <td>{user.fraud_reason}</td>
                  <td>
                  <FontAwesomeIcon icon={faTrash} onClick={() => deleteUser()} />
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Reports;
