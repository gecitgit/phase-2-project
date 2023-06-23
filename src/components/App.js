import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Form from "./Form";
import NavBar from "./NavBar";
import Log from "./Log";
import Stats from "./Stats";
import Login from "./Login";
import Register from "./Register";
import HomeLayout from "./HomeLayout";
import AuthLayout from "./AuthLayout";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');

    if (storedUsername) {
      fetchCurrentUser(storedUsername);
    } else {
      setIsAuthenticated(false);
    }
  }, []);


  function fetchCurrentUser(username) {
    fetch(`http://localhost:4000/users?username=${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const currentUser = data[0];
          setCurrentUser(currentUser);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching current user:', error);
      });
  };

  function handleLogin(username, password) {
    toast.promise(
      fetch(`http://localhost:4000/users?username=${encodeURIComponent(username)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const currentUser = data[0];
            if (currentUser.password === password) {
              setCurrentUser(currentUser);
              setIsAuthenticated(true);
              sessionStorage.setItem('username', username);
              navigate('/loggedin');
              toast.success("Welcome back, " + username + "!", { delay: 500 });
          } else {
            toast.error("Incorrect password");
          }
        } else {
          toast.error("user not found...");
        }
      })
      .catch((error) => {
        toast.error("Something went wrong");
      }),
      {
        pending: "logging in...", duration: 1000
      },
      {
        autoClose: 1500,
        duration: 1000
      }

    )
  }

  // function handleDelete(id) {
  //   console.log("delete was pressed");

  //   fetch(`http://localhost:4000/posts/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       const updatedPosts = posts.filter((post) => post.id !== id);
  //       setPosts(updatedPosts);
  //     });
  // }

  // return (
  //   <div>
  //   <Routes>
  //     {isAuthenticated ? (
  //       <Route path="/loggedin" element={<HomeLayout />} />
  //     ) : (
  //       <Route path="/login" element={<AuthLayout />} />
  //     )
  //   }
  //   </Routes>
  //   </div>
  // )

  function handleLogout(){
    setCurrentUser(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem('username');
    navigate('/login');
  }

  return (
    <div>
      <ToastContainer 
        position="top-center" 
        role="alert"
        autoClose={3000}
        // newestOnTop
        transition={Slide}
      />
      {isAuthenticated ? (
        <HomeLayout currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogout={handleLogout} />
      ) : (
        <AuthLayout handleLogin={handleLogin} />
      )}
    </div>
  );


  //   <div>
  //     <NavBar />
  //     <Routes>
  //       <Route path="/about" element={<About />} />
  //       <Route path="/form" element={<Form />} />
  //       <Route path="/log" element={<Log posts={posts} handleDelete={handleDelete}/>} />
  //       <Route path="/stats" element={<Stats />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/" element={<Home />} />
  //     </Routes>
  //   </div>
  // );
}

export default App;
