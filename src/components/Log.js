import React, { useEffect, useState } from "react";
import PostInfo from "./PostInfo";

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
    const [buttonPopup, setButtonPopup] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});
    const [trigger, setTrigger] = useState(false);

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

    function handleSeeMore(post) {
        setSelectedPost(post);
        setTrigger(true);
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

                    return (
                        <div style={logBoxSmall} key={post.id}>
                            <h3>{postDate.toLocaleDateString(undefined, { weekday: 'long'})}</h3>
                            <h2>{postDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}</h2>
                            <p>Time logged: {postDate.toLocaleTimeString(undefined, {hour: "numeric", minute: "2-digit"})}</p>
                            <p>Hours slept: {post.sleep}</p>
                            <p>Mood: {post.mood}</p>
                            <p>Energy: {post.energy}</p>
                            <button onClick={() => handleDelete(post.id)}>Delete</button> 
                            {/*arrow function so its only passed whenclicked*/}
                            <button onClick={(e) =>  {
                                setButtonPopup(true)
                                handleSeeMore(post)}}
                                >See More</button>
                            <PostInfo trigger={buttonPopup} setTrigger={setButtonPopup} postInfo={selectedPost}>
                                <h2>post id: {post.id}</h2>
                                <h2>post mood: {post.mood}</h2>
                            </PostInfo>
                        </div>
                    )
                    
                    })}
                </div>            
            
            <p>this is the end of the hardcoded box</p>
        </div>
    )
}

export default Log;