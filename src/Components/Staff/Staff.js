import React from "react";
import "../../style/staff.css"
import "../../style/login.css"
import RegisterPatient from "./RegisterPatient";
import { Link, useNavigate } from "react-router-dom";
import DayWiseGraph from "./DayWisePatient";

const Staff = () => {
  let navigate = useNavigate();

    return(<>
        <Link to="/newPatient" element={<RegisterPatient/>} style={{textDecoration: "none"}}>
            <button>Register New Patient</button>
        </Link>

        <div className="patient-graph">
          <DayWiseGraph/>
        </div>

        <table>
          <thead>
            <tr>
              <th>Sl.No.</th>
              <th>Patient Name</th>
              <th>Gender</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>Male</td>
              <td>123456789</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jane Doe</td>
              <td>Female</td>
              <td>123456789</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Johny</td>
              <td>Male</td>
              <td>123456789</td>
            </tr>
          </tbody>
        </table>

        <button className="backBtn" onClick={() => navigate('/roles')}>&lt;&lt; Back</button>
    </>)
}

export default Staff;