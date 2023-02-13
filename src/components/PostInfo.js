import React from "react";

function PostInfo({ trigger, setTrigger, postInfo }) {
    console.log('this is the postinfo : ', postInfo)

    return (trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="close-btn" onClick={() => setTrigger(false)}>X</button>
                <h2>popup</h2>
                <h3>this is the id: {postInfo.id}</h3>
                <h3>this is the mood: {postInfo.mood}</h3>
            </div>
        </div>
    ) : "";
}

export default PostInfo;