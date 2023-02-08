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

    return (
        <div>
            <h1>this is the page that holds the log entries</h1>
            <h3>here is a hardcoded example</h3>

            <div style={logContainer}>
                {posts.map((post) => (
                    <div style={logBoxSmall} key={post.id}>
                        <h3>{post.day}</h3>
                        <h2>{post.date}</h2>
                        <p>Time logged: {post.time}</p>
                        <p>Hours slept: {post.sleep}</p>
                        <p>Mood: {post.emotion}</p>
                        <p>Energy: {post.energy}</p>
                        <p>Notes: {post.notes}</p>
                        <button onClick={() => handleDelete(post.id)}>Delete</button> {/*arrow function so its only passed whenclicked*/}
                        <button>Edit</button>
                    </div>
                    ))}
                </div>            
            
            <p>this is the end of the hardcoded box</p>
        </div>
    )
}

export default Log;