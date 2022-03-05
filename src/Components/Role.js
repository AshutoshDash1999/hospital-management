import React from "react"
import "../style/role.css"
import { Link } from "react-router-dom"
import Staff from "./Staff/Staff"
import Doctor from "./Doctor/Doctor"
import Admin from "./Admin/Admin"
import {useNavigate } from 'react-router-dom';

const Roles = () => {
    let navigate = useNavigate();

    return (
    <div  className="role">
        <div className="role-btn-group">
            <Link to="/roles/staff" element={<Staff/>}>
                <button>Staff</button>
            </Link>

            <Link to="/admin" element={<Admin/>}>
                <button>Admin</button>
            </Link>

            <Link to="/patients" element={<Doctor/>}>
                <button>Doctor</button>
            </Link>
        </div>
        
        <button className="backBtn" onClick={() => navigate('/')}>&lt;&lt; Back</button>

    </div>)
}

export default Roles;