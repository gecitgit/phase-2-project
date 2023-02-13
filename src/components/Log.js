import React, { useEffect, useState } from "react";
import PostInfo from "./PostInfo";

function Log(){
    const [posts, setPosts] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});

    useEffect(() => {
        fetch("https://mindlog-db.onrender.com/posts")
            .then((r) => r.json())
            .then((data) => setPosts(data));
    }, []);


    function handleDelete(id) {
        console.log("delete was pressed")
        console.log(id)
        
        fetch(`https://mindlog-db.onrender.com/posts/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => {
                const updatedPosts = posts.filter((post) => post.id !== id);
                setPosts(updatedPosts);;
            });
    }

    //handleSeeMore updates selectedPost with the post that is being clicked
    //sets trigger to true which will show the component
    //selectedPost is passed as a prop to PostInfo
    //this way PostInfo only handles what is being sent down
    function handleSeeMore(post) {
        setSelectedPost(post);
        setButtonPopup(true)
    }

    return (
        <div className="textParentDiv">
            <h1 className="textTextDiv">Welcome to your Journal</h1>
            <div className="logContainer">
                {posts.sort(function(a,b) {
                    return new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`);
                }).map((post) => {
                    const postDate = new Date(`${post.date} ${post.time}`)

                    return (
                        <div className="logBoxSmall" key={post.id}>
                            <h3>{postDate.toLocaleDateString(undefined, { weekday: 'long'})}</h3>
                            <h2>{postDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}</h2>
                            <h3>Time logged: {postDate.toLocaleTimeString(undefined, {hour: "numeric", minute: "2-digit"})}</h3>
                            <h3>{`Sleep: ${post.sleep} hours`}</h3>
                            <h3>Mood: {post.mood}</h3>
                            <h3>Energy: {post.energy}</h3>
                            <div className="postBtns">
                                <button className="deleteLog" onClick={() => handleDelete(post.id)}>Delete Post</button>
                                {/*arrow function so its only passed whenclicked*/}
                                <button className="logInfo" onClick={(e) =>  {
                                    setButtonPopup(true)
                                    handleSeeMore(post)}}
                                    >
                                    Read More
                                </button>
                            </div>
                                                        
                            <PostInfo trigger={buttonPopup} setTrigger={setButtonPopup} postInfo={selectedPost}>
                                <h2>post id: {post.id}</h2>
                                <h2>post mood: {post.mood}</h2>
                            </PostInfo>
                        </div>
                    )
                    
                    })}
                </div>            
            </div>
    )
}

export default Log;