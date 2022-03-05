import React from "react";
import "../../style/login.css"

const RegisterPatient = () => {
    return (
        <div>
        <form>
            <h2>Register New Patient</h2>
            <input type="text" placeholder="Patient's Name" />
            <input type="number" min={0} placeholder="Patient's Age" />
            <select name="gender" id="">
                <option value="">Select gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Trans</option>
            </select>
            <input type="number" placeholder="Patient's Number" />
            <button id="submitBtn" style={{margin: "0 auto"}}>Submit</button>
        </form>
    </div>
    )
}

export default RegisterPatient;