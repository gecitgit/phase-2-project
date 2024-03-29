import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        day: "",
        date: "",
        time: "",
        sleep: "",
        mood: "",
        energy: "",
        notes: "",
    });


    function handleChange(event) {
        console.log("this is being changed: ", event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("submit was pressed", formData)
        fetch("https://mindlog-db.onrender.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                day: formData.day,
                date: formData.date,
                time: formData.time,
                sleep: formData.sleep,
                mood: formData.mood,
                energy: formData.energy,
                notes: formData.notes,
            }),
        }) .then(() => navigate("/log"))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Log your day!</legend>
                
                <div className="dateWrapper">
                    <label htmlFor="date">Please choose the date in question.</label>
                    <input required type="date" id="date" name="date" value={formData.date} onChange={handleChange}>

                    </input>
                </div>
                <div className="timeWrapper">
                    <label htmlFor="time">When did this occur?</label>
                    <input required type="time" name="time" value={formData.time} onChange={handleChange}/>
                </div>
                <div className="sleepWrapper">
                    <label htmlFor="sleep">How much sleep did you get last night? </label>
                    <input required type="number" name="sleep" placeholder="0-24 hours / 30m increments" value={formData.sleep} min="0" max="24" step="0.5" onChange={handleChange}/>
                </div>
                <div className="formDivWrapper">
                    <label htmlFor="mood">How would you describe your mood?</label>
                    <select required id="mood" name="mood" value={formData.mood} onChange={handleChange}>
                        <option disabled value="">Select a mood...</option>
                        <option value="🤩 Ecstatic">Ecstatic</option>
                        <option value="😀 Happy">Happy</option>
                        <option value="😐 Neutral">Neutral</option>
                        <option value="😰 Anxious">Anxious</option>
                        <option value="😨 Scared">Scared</option>
                        <option value="😢 Sad">Sad</option>
                        <option value="😡 Angry">Angry</option>
                    </select>
                </div>
                <div className="formDivWrapper">
                    <label htmlFor="energy">What is your overall energy like?</label>
                    <select required id="energy" name="energy" value={formData.energy}onChange={handleChange}>
                        <option disabled value="">Select your energy...</option>
                        <option value="Motivated">Motivated</option>
                        <option value="Lethargic">Lethargic</option>
                        <option value="Restless">Restless</option>
                        <option value="Calm">Calm</option>
                        <option value="Numb">Numb</option>
                    </select>
                </div>
                <div className="noteWrapper">
                    <label htmlFor="notes">Feel free to add any additional notes here:</label>
                    <textarea type="text" name="notes" placeholder="[optional] Add any additional notes you'd like to remember for today!" rows="5" cols="150" value={formData.notes} onChange={handleChange}/>
                </div>
                <input id="formSubmit" type="submit" value="submit form" />
                </fieldset>
            </form>
        </div>
    )
}

export default Form;