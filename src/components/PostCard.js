import React from "react";
import PostInfo from "./PostInfo";

function PostCard({ post, handleDeletePost, setButtonPopup, handleSeeMore, buttonPopup, selectedPost }) {
    const postDate = new Date(`${post.date} ${post.time}`)
    // const dayName = {postDate.toLocaleDateString(undefined, { weekday: 'long'})}

    return (
        <div className="logBoxSmall">
            <span className="postCardTextLarge">
                {postDate.toLocaleDateString(undefined, { weekday: 'long'})}
            </span>
            <span className="postCardTextMedium">
                {postDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}
            </span>
            <span className="postCardTextSmall">
                Time logged: {postDate.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit'})}
            </span>
            <span className="postCardTextSmall">
                Sleep: {post.sleep} hours
            </span>
            <span className="postCardTextSmall">
                Mood: {post.mood}
            </span>
            <span className="postCardTextSmall">
                Energy: {post.energy}
            </span>

            <div className="postBtns">
                <button
                    className="deleteLog"
                    onClick={() => handleDeletePost(post.id)}
                >
                    Delete Post
                </button>
                <button
                    className="logInfo"
                    onClick={(e) => {
                        setButtonPopup(true)
                        handleSeeMore(post)
                    }}
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
}

export default PostCard;