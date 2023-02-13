import React from "react";

function PostInfo({ trigger, setTrigger, postInfo }) {

    const postDate = new Date(`${postInfo.date} ${postInfo.time}`)

    return (trigger) ? (
        <div className="popup">
            <div className="popupInner">
                
                <h2>{postDate.toLocaleDateString(undefined, { weekday: 'long'})}</h2>
                <h1>{postDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}</h1>
                <h3>Time logged : {postDate.toLocaleTimeString(undefined, {hour: "numeric", minute: "2-digit"})}</h3>
                <h3>{`Sleep: ${postInfo.sleep} hours!`}</h3>
                <h3>Mood: {postInfo.mood}</h3>
                <h3>Energy: {postInfo.energy}</h3>
                <h3>Additional notes: {postInfo.notes}</h3>
                <button className="close-btn" onClick={() => setTrigger(false)}>back to log</button>
            </div>
        </div>
    ) : "";
}

export default PostInfo;