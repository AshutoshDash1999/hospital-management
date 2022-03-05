import React from "react";
import {useNavigate } from 'react-router-dom';

const Doctor = () => {
    let navigate = useNavigate();

    return(
        <div>
            <h1>Patient's Detail</h1>
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
        </div>
    )
}
export default Doctor;