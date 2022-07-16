import React, { useState } from "react";
import './css/App.css';

function Register(props) {

    const handleLogin = () => {
        props.setLogin(true);
    }
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const handleEmailChange = (e) => { 
        let newuserData = { ...userData, email: e.target.value }
        setUserData(newuserData)
        console.log(newuserData)
    }

    return (
        <div className="text-center">
            <h1>Sign Up</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmailChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Check me out</label>
                </div>
                <button className="btn btn-danger" onClick={handleLogin}>Login</button>
                <br />
                <br />
                <button className="btn btn-primary">Submit</button>

            </form>
        </div>
    );
}
export default Register;