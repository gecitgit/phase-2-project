import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function startClick() {
        navigate("/form")
    }

    return (
        <div className="textParentDiv">
            <div className="textTextDiv">
                <h1 className="h1Title">Welcome to <span style={{ color: "#e85a4f"}}>MindLOG</span>!</h1>
                <h3>Take a load off and write down your day's worries in your very own personalized mood tracker!  Fill out the form below or in the navigation bar above to store your entry. Visit the <i>Journal Log</i> tab to view a collection of all of your posts.</h3>
                <br></br>
                <h3>In this version of the project every user is the only user so please make sure to clean up after yourself in the journal log. Keep in mind that your submitted data will persist so the next user can see your posts!</h3>
                <br></br>
                <button className="joinForm" onClick={startClick}>Check out the form!</button>
            </div>
        </div>
        
    )
}

export default Home;