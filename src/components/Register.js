import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [newUserData, setNewUserData] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        posts: []
    })


    function handleChange(event) {
        setNewUserData({
            ...newUserData,
            [event.target.name]: event.target.value,
        });
    }

    function handleRegSubmit(e) {
        e.preventDefault();
        console.log("Sign Up btn pressed", newUserData)
        fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: newUserData.username,
                password: newUserData.password,
                firstname: newUserData.firstname,
                lastname: newUserData.lastname,
                email: newUserData.email,
                posts: []
            }),
        }).then((res) => {
            alert("Registration was successful. You are being redirected to the login page.")
            navigate('/login');
        }).catch((err) => {
            alert("There was an error: " + err);
        })
    }

    return (
        <div className="loginBody">
            <form onSubmit={handleRegSubmit}>
                {/* <fieldset> */}
                    {/* <legend>User Registration</legend> */}

                <div>
                    <div> {/* login card header */}
                        <h1 className="h1Title" style={{ fontSize: "35px", padding: "10px", margin: 0 }}>Sign up for <span style={{ color: "#e85a4f", fontWeight: "bolder" }}>MindLOG</span>!</h1>
                    </div>
                    <div className="loginBoxHolder">
                        <div className="loginBox">
                            <label htmlFor="username">Username</label>
                            <input required id="username" name="username" value={newUserData.username} onChange={handleChange}></input>
                        </div>

                        <div className="loginBox">
                            <label htmlFor="password">Password</label>
                            <input required type="password" id="password" name="password" value={newUserData.password} onChange={handleChange}></input>
                        </div>

                        <div className="loginBox">
                            <label htmlFor="firstname">First Name</label>
                            <input required id="firstname" name="firstname" value={newUserData.firstname} onChange={handleChange}></input>
                        </div>

                        <div className="loginBox">
                            <label htmlFor="lastname">Last Name</label>
                            <input required id="lastname" name="lastname" value={newUserData.lastname} onChange={handleChange}></input>
                        </div>

                        <div className="loginBox">
                            <label htmlFor="email">Email address</label>
                            <input required type="email" id="email" name="email" value={newUserData.email} onChange={handleChange}></input>
                        </div>

                    </div>
                    <div> {/* card footer */}
                        <div>
                            <button type="submit" className="loginUser">Sign Up</button>
                        </div>
                        <div>
                            <p className="signupPrompt">
                                Already have an account? <Link to={'/login'}>Log in!</Link>
                            </p>
                        </div>
                    </div>
                </div>
                    {/* </fieldset> */}




                    
                </form>
            </div>

    )
}

export default Register;