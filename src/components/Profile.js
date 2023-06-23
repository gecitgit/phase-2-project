import React from "react";
import ProfileRookie from "./ProfileRookie";
import ProfileVeteran from "./ProfileVeteran";

function Profile({ currentUser }) {
    const postCount = currentUser.posts.length;
    const sleepArr = [];
    let hasNotes = 0;

    currentUser.posts.forEach((post) => {
        sleepArr.push(post.sleep);
        if (post.notes && post.notes.length > 2) {
            hasNotes++;
        }
    });
    console.log("this is sleepArr: ", sleepArr);

    //adds each post.sleep value as an int in the sleepArr and then gives avg
    let sum = 0;
    for (let i = 0; i < sleepArr.length; i++) {
        const num = parseFloat(sleepArr[i]);
        sum += num;
    }
    const sleepAvg = sum/sleepArr.length;

    return (
        <div className="profileBody">
            <h1 style={{color: "red"}}>THIS PAGE IS DONE</h1>
            <h1>Hey there, <span style={{color: "#e85a4f"}}>{currentUser.username}</span></h1>
            {postCount > 10 ? (
                <ProfileVeteran postCount={postCount} hasNotes={hasNotes} user={currentUser.username} sleepAvg={sleepAvg}/>
            ) : (
                <ProfileRookie postCount={postCount} hasNotes={hasNotes} user={currentUser.username} sleepAvg={sleepAvg}/>
            )}
        </div>
    )
}

export default Profile;