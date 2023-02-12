import React from "react";

function PostInfo(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popupInner">
                <button className="close-btn">CLOSE</button>
                {props.children}
            </div>
        </div>
    ) : "";
}


export default PostInfo;