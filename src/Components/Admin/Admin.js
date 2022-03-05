import React from "react";
import {useNavigate } from 'react-router-dom';

const Admin = () => {
    let navigate = useNavigate();

    return (<div>

        <p>Table for Doctor, Staff</p>

        <button className="backBtn" onClick={() => navigate('/roles')}>&lt;&lt; Back</button>
    </div>)
}

export default Admin;