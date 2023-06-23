import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import LogFilter from "./LogFilter";

function Log({ handleDelete, currentUser, setCurrentUser }){
    const [buttonPopup, setButtonPopup] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});
    const [filterToggle, setFilterToggle] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        setFilteredPosts(currentUser.posts);
    }, [currentUser.posts]);

    function handleDeletePost(id) {
        handleDelete(id);
    }

    function handleDelete(id) {
        alert("Are you sure you want to delete this post?")
        const updatedPosts = currentUser.posts.filter((post) => post.id !== id);

        fetch(`http://localhost:4000/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ posts: updatedPosts}),
        })
            .then((response) => response.json())
            .then((data) => {
                setCurrentUser({
                    ...currentUser,
                    posts: updatedPosts,
                });
            })
            .catch((error) => {
                console.error("Error updating posts: ", error);
            });
        }

    function handleSeeMore(post) {
        setSelectedPost(post);
        setButtonPopup(true)
    }

    function filteredInfo(formData) {
        const { days, energy, mood, sleep, dateRange } = formData;

        let filteredPosts = currentUser.posts;

        if (days && days.length > 0) {
            filteredPosts = filteredPosts.filter((post) => days.includes(post.day));
        }

        if (dateRange) {
            const { start, end } = dateRange;
            filteredPosts = filteredPosts.filter(
                (post) => post.date >= start && post.date <= end
            );
        }

        if (sleep && sleep.length > 0) {
            filteredPosts = filteredPosts.filter((post) => {
                const postSleep = Math.floor(post.sleep);
                return sleep.some((sleepOption) => {
                    if (sleepOption === "10+") {
                        return postSleep >= 10;
                    } else {
                        const [start, end] = sleepOption.split(" - ");
                        const startHours = parseFloat(start);
                        const endHours = parseFloat(end);
                        return (
                            (startHours === 10 && postSleep >= startHours) ||
                            (postSleep >= startHours && postSleep <= endHours)
                        );
                    }
                });

                });
            }

        if (mood && mood.length > 0) {
            filteredPosts = filteredPosts.filter((post) => {
                const postMood = post.mood.slice(2).toLowerCase();
                const formDataMoods = mood.map((m) => m.toLowerCase());
                return formDataMoods.some((moodOption) => postMood.includes(moodOption))
            });
        }

        if (energy && energy.length > 0) {
            filteredPosts = filteredPosts.filter((post) => energy.includes(post.energy.toLowerCase()));
        }

        setFilteredPosts(filteredPosts);

        console.log("this is filtered posts: ", filteredPosts);
        console.log("This is the formData via Log body: ", formData);
        
    
    }

    return (
        <div className="textParentDiv">
            <h2 style={{ color: "red", fontSize: "28px"}}>Copy is good.  Needs formatting for top text. Need to add * on small box. Need to format filter box. Overhaul "create new entry button" styling. Need to add toast alerts for filtering.</h2>
            <h1 className="textTextDiv">Welcome to your Journal</h1>
            <p>
                Welcome to the Log page! Here, you can view all your log entries and dive int the details of your journey.  Use the "Show Filters" button to refine your search by day of the week, date range, hours slept, mood, and energy.  Customize your view to uncover the moments that matter most.
                <br />
                Adding a new entry is a breeze from this page too! Simply click the designated button and let your thoughts flow onto the screen.
                <br />
                Keep an eye out for posts marked with a "*", as they have additional notes.  Click "Read More" to expand the post in a convenient overlay.
                <br />
                Explore, reflect, and make this page your personal sanctuary of memories. Your story awaits!
            </p>
            <h2>Currently displaying <strong>{filteredPosts.length}</strong> posts!</h2>
            {filterToggle ? (
                <LogFilter 
                    filterToggle={filterToggle} 
                    setFilterToggle={setFilterToggle} 
                    currentUser={currentUser}
                    filteredInfo={filteredInfo}
                />
            ) : (
                <button
                    onClick={() => setFilterToggle(!filterToggle)}
                >
                    show filters
                </button>
            )}


            
            <button onClick={() => navigate("/form")} className="deleteLog">+ Create new entry</button>

            <div className="logContainer">
                {filteredPosts.length === 0 ? (
                    <p>No posts avail with selected filters.</p> 
                ) : (
                    filteredPosts
                        .sort(function(a, b) {
                            return (
                                new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`)
                            );
                        }).map((post) => {
                            return (
                                <PostCard 
                                    post={post}
                                    handleDeletePost={handleDeletePost}
                                    key={post.id}
                                    setButtonPopup={setButtonPopup}
                                    handleSeeMore={handleSeeMore}
                                    buttonPopup={buttonPopup}
                                    selectedPost={selectedPost}
                                />
                            );
                        })
                    )}
                    </div>            
                </div>
        )
}

export default Log;