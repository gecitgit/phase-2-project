import React, { useState } from "react";

function Form(){

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
        });
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
            <h2>form header</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>What day are you logging? </label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={(e) => {
                        handleChange(e);
                        setDayOfWeek(e);
                    }}>

                    </input>
                </div>
                <div>
                    <label>What time? </label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange}/>
                </div>
                <div>
                    <label>How long did you sleep last night? </label>
                    <input type="text" name="sleep" placeholder="How much you sleep?" value={formData.sleep} onChange={handleChange}/>
                </div>
                <div>
                    <label>How would you describe your mood?</label>
                    <select id="mood" name="mood" value={formData.mood} onChange={handleChange}>
                        <option>Select a mood...</option>
                        <option value="ecstatic">Ecstatic</option>
                        <option value="happy">Happy</option>
                        <option value="neutral">Neutral</option>
                        <option value="anxious">Anxious</option>
                        <option value="scared">Scared</option>
                        <option value="disgusted">Disgusted</option>
                        <option value="angry">Angry</option>
                    </select>
                </div>
                <div>
                    <label>What is your overall energy like?</label>
                    <select id="energy" name="energy" onChange={handleChange}>
                        <option value="motivated">Motivated</option>
                        <option value="lethargic">lethargic</option>
                        <option value="restless">Restless</option>
                        <option value="calm">Calm</option>
                        <option value="numb">Numb</option>
                    </select>
                </div>
                <div>
                    <input type="text" name="notes" placeholder="Add additional words" value={formData.notes} onChange={handleChange}/>
                </div>
                <input type="submit" value="Submit it man" />
                <p>spacer</p>
            </form>
        </div>
    )
}

export default Form;