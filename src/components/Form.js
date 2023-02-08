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

    return(
        <div>
            <h2>form header</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Input the day: 
                        <input type="text" name="day" placeholder="What day?" value={formData.day} onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <input type="text" name="date" placeholder="What date?" value={formData.date} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" name="time" placeholder="What time?" value={formData.time} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" name="sleep" placeholder="How much you sleep?" value={formData.sleep} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" name="mood" placeholder="How you feelin?" value={formData.mood} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" name="energy" placeholder="Describe your energy" value={formData.energy} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" name="notes" placeholder="Add additional words" value={formData.notes} onChange={handleChange}/>
                </div>
                <input type="submit" value="Submit it man" />
            </form>
        </div>
    )
}

export default Form;