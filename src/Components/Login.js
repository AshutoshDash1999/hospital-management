import React from "react"
import "../style/login.css"
import { Link } from "react-router-dom"
import Role from "./Role"

const Login = () => {
    return (<>
        <form>
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <Link to="/roles" style={{textDecoration: "none"}} element={<Role/>}>
                <button id="sumbitBtn">Login</button>
            </Link>
        </form>
    </>)
}

export default Login;