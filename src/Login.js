import React, { useState } from "react";
// import { useEffect } from "react";
import './css/App.css';


function Login(props) {
    // useEffect(()=>{
    // let obj={
    //     id:2,
    //     name:"haneen",
    //     phone:"0790790520",
    // }

    // let newObj={...obj , id3}

    // },[])



    const handleSignUp = () => {
        props.setLogin(false)
    }

    const [userInfo, setUserInfo] = useState({
        email: "",
        passWord: "",
        phoneNumber: ""
    })

    const hanndleEmailChange = (e) => {
        setUserInfo({ ...userInfo, email: e.target.value })
        // object destruction
    }
    const handlePasswordChange = (e) => {
        setUserInfo({ ...userInfo, passWord: e.target.value })
    }
    const handlephoneChange = (e) => {
        setUserInfo({ ...userInfo, phoneNumber: e.target.value })
        console.log({ phoneNumber: e.target.value })
    }
    const submit = () => {
        console.log(userInfo)

    }
    return (
        <div className="text-center">
            <div className="container">
                <h1>login</h1>

                <div className="mb-3 text-left">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => hanndleEmailChange(e)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 text-left">
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="phoneNumber" onChange={handlephoneChange} />
                </div>
                <div className="mb-3 text-left">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePasswordChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                    <div className="mb-3">
                        <button className="btn btn-danger" onClick={handleSignUp}> register</button>
                        <button className="btn btn-primary" onClick={submit} >Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;