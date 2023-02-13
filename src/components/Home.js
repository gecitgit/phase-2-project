import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function startClick() {
        navigate("/form")
    }

    return (
        <div>
            <h1>home title </h1>
            <p>h1 text </p>
            <p>put random words to intro user to the app with direction</p>
            <p>
                use log-detail as a new component to display the notes for the entry

                Show	/movies/:id	GET	Display a single movie's info



                stretch goal: intro a Trends tab that lets the user see trends of mood over time -- scatterplot?

            </p>
            <button onClick={startClick}>Get started! link this to /form</button>
        </div>
        
    )
}

export default Home;