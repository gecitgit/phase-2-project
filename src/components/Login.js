import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login({ handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function validate() {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            alert("please enter your username");
        }
        if (password === '' || password === null) {
            result = false;
            alert("please enter your password!");
        }
        return result;
    }

    return (
        <div className="loginBody">
            <form onSubmit={(e) => {
                e.preventDefault();
                if (validate()) {
                    handleLogin(username, password);
                }
            }}>
                <div> {/* This is going to be the card div */}
                    <div> {/* login card header */}
                        <h1 className="h1Title" style={{ fontSize: "35px", padding: "10px", margin: 0 }}>Welcome to <span style={{ color: "#e85a4f", fontWeight: "bolder" }}>MindLOG</span>!</h1>                    
                    </div>
                    <div className="loginBoxHolder"> {/* card body */}
                        <div className="loginBox"> {/* form group */}
                            <label>Username</label>
                            <input required value={username} onChange={e => setUsername(e.target.value)}></input>
                        </div>
                        <div className="loginBox"> {/* form group */}
                            <label>Password</label>
                            <input required type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        </div>
                    </div>
                    <div> {/* card footer */}
                        <div>
                            <button type="submit" className="loginUser">Login</button>
                        </div>
                        <div>
                            <p className="signupPrompt">
                                Don't have an account? <Link to={'/register'}>Sign up!</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;