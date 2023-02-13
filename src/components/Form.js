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

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

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
        fetch("http://localhost:4000/posts", {
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


    function setDayOfWeek(e) {
        const date = new Date(e.target.value);
        const dayOfWeek = date.getDay();
        setFormData({
            ...formData,
            day: daysOfWeek[dayOfWeek],
            date: e.target.value
        });
        console.log("this is the day of the week: ", dayOfWeek)
        console.log("This is the same day of the week in string: ", daysOfWeek[dayOfWeek])
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Log your day!</legend>
                
                <div className="dateWrapper">
                    <label>What day are you logging? </label>
                    <input required type="date" id="date" name="date" value={formData.date} onChange={(e) => {
                        handleChange(e);
                        setDayOfWeek(e);
                    }}>

                    </input>
                </div>
                <div className="timeWrapper">
                    <label>What time? </label>
                    <input required type="time" name="time" value={formData.time} onChange={handleChange}/>
                </div>
                <div className="sleepWrapper">
                    <label>How long did you sleep last night? </label>
                    <input required type="number" name="sleep" placeholder="How much you sleep?" value={formData.sleep} min="0" max="24" step="0.5" onChange={handleChange}/>
                </div>
                <div className="formDivWrapper">
                    <label>How would you describe your mood?</label>
                    <select required id="mood" name="mood" value={formData.mood} onChange={handleChange}>
                        <option disabled value="">Select a mood...</option>
                        <option value="ecstatic">Ecstatic</option>
                        <option value="happy">Happy</option>
                        <option value="neutral">Neutral</option>
                        <option value="anxious">Anxious</option>
                        <option value="scared">Scared</option>
                        <option value="disgusted">Disgusted</option>
                        <option value="angry">Angry</option>
                    </select>
                </div>
                <div className="formDivWrapper">
                    <label>What is your overall energy like?</label>
                    <select required id="energy" name="energy" value={formData.energy}onChange={handleChange}>
                        <option disabled value="">Select your energy...</option>
                        <option value="motivated">Motivated</option>
                        <option value="lethargic">lethargic</option>
                        <option value="restless">Restless</option>
                        <option value="calm">Calm</option>
                        <option value="numb">Numb</option>
                    </select>
                </div>
                <div className="noteWrapper">
                    <label htmlFor="notes">Feel free to add more words here:</label>
                    <textarea type="text" name="notes" placeholder="Add additional words" rows="5" cols="150" value={formData.notes} onChange={handleChange}/>
                </div>
                <input id="formSubmit" type="submit" value="submit form" />
                </fieldset>
            </form>
        </div>
    )
}

export default Form;