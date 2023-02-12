import React, { useEffect, useState } from "react";

const logBoxSmall = {
    display: "flex",
    background: "lightgray",
    color: "firebrick",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "300px",
    marginBottom: "15px",
    border: "2px solid red",
    margin: "0",
}

const logContainer = {
    display: "flex",
    flexWrap: "wrap"
}



function Log(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/posts")
            .then((r) => r.json())
            .then((data) => setPosts(data));
    }, []);


    function handleDelete(id) {
        console.log("delete was pressed")
        console.log(id)
        
        fetch(`http://localhost:4000/posts/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => {
                const updatedPosts = posts.filter((post) => post.id !== id);
                setPosts(updatedPosts);;
            });
    }

    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function handleDateConverter(post) {
        const postDate = new Date(`${post.date} ${post.time}`)
        // console.log("this is the post Date being passed through", postDate)
        // const postDateMonthNumber = postDate.getMonth();
        // console.log("this is the date month number: " ,postDateMonthNumber)
        // const postDateMonth = monthsOfYear[postDateMonthNumber]
        // console.log("this is the word of the month: ", postDateMonth)
        // const postDateNum = postDate.getDate();
        // console.log("this is the post date number: ", postDateNum)
        // const postDateYear = postDate.getFullYear();
        // console.log("this is the year: ", postDateYear)
        // const stringedDate = `${postDateMonth} ${postDateNum}, ${postDateYear}`;
        // console.log("this is the stringedDate: ", stringedDate)
        // return stringedDate;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        console.log('this is blah: ', postDate.toLocaleDateString(undefined, options))
        return postDate.toLocaleDateString(undefined, options);
    }

    function handleTimeConversion(post) {
        const timeEvent = new Date(`${post.date} ${post.time}`)
        console.log('time thingy: ', timeEvent.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"}));
        return timeEvent.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"});

        // const hours = post.time.slice(0,2);
        // const minutes = post.time.slice(3)
        // const hours12 = hours % 12 || 12;
        // const nightOrLight = hours < 12 ? 'am':'pm';
        // const time12hr = `${hours12}:${minutes} ${nightOrLight}`
        // return time12hr;
    }


    return (
        <div>
            <h1>this is the page that holds the log entries</h1>
            <h3>here is a hardcoded example</h3>

            <div style={logContainer}>
                {posts.sort(function(a,b) {
                    return new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`);
                }).map((post) => {
                    const postDate = new Date(`${post.date} ${post.time}`)
                    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
                    

                    return (
                        <div style={logBoxSmall} key={post.id}>
                            <h3>{postDate.toLocaleDateString(undefined, { weekday: 'long'})}</h3>
                            <h2>{postDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}</h2>
                            <p>Time logged: {postDate.toLocaleTimeString(undefined, {hour: "2-digit", minute: "2-digit"})}</p>
                            <p>Hours slept: {post.sleep}</p>
                            <p>Mood: {post.mood}</p>
                            <p>Energy: {post.energy}</p>
                            <p>Notes: {post.notes}</p>
                            <button onClick={() => handleDelete(post.id)}>Delete</button> {/*arrow function so its only passed whenclicked*/}
                            <button>Edit</button>
                        </div>
                    )
                    
                    })}
                </div>            
            
            <p>this is the end of the hardcoded box</p>
        </div>
    )
}

export default Log;