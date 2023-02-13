import React from "react";

function PostInfo({ trigger, setTrigger, postInfo }) {

    const postDate = new Date(`${postInfo.date} ${postInfo.time}`)

    return (trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="close-btn" onClick={() => setTrigger(false)}>Back to log</button>
                
                <h1>Day of week: {postDate.toLocaleDateString(undefined, { weekday: 'long'})}</h1>
                <h2>date: {postDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}</h2>
                <h3>time : {postDate.toLocaleTimeString(undefined, {hour: "numeric", minute: "2-digit"})}</h3>
                <h3>Hours slept: {postInfo.sleep}</h3>
                <h3>Mood: {postInfo.mood}</h3>
                <h3>Energy: {postInfo.energy}</h3>
                <h3>additional notes: {postInfo.notes}</h3>
            </div>
        </div>
    ) : "";
}

export default PostInfo;