import React from "react"
import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Login from "./Components/Login";
import Roles from "./Components/Role"
import Staff from "./Components/Staff/Staff"
import RegisterPatient from "./Components/Staff/RegisterPatient"
import Doctor from "./Components/Doctor/Doctor"
import Admin from "./Components/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/roles" element={<Roles/>} />
        <Route path="roles/staff" element={<Staff/>}/>
        <Route path="/newPatient" element={<RegisterPatient/>}/>
        <Route path="/patients" element={<Doctor/>} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
