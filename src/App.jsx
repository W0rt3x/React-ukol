import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import Lists from "./Lists";

export default function App() {
  const [data, setData] = useState({
    posts: [],
    comments: [],
    users: [],
  });

  //const posts = (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
  useEffect(() => {
    async function fetchData() {
      const respPosts = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!respPosts.ok) {
        //TODO: handle error
      }

      const respComments = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );

      const respUsers = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      setData({
        posts: await respPosts.json(),
        comments: await respComments.json(),
        users: await respUsers.json(),
      });
    }
    fetchData();
  }, []);

  //return <div className="App">{updatedPosts}</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lists data={data} />} />
        {
          //poslou data do lists
        }
        <Route path="detail/:id" element={<Details data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

/*return {
    
    ...post,
    commentsCount: comments
      .filter((comment) => comment.postId === post.id)
      .length,
    author: users.filter((user) => user.id === post.userId)[0].name

  
  };*/
/*
console.log(updatedPosts);


const postId = 1;
const post = posts[postId];

const author = users.filter((user) => user.id === post.userId)[0];

const postComments = comments.filter((comment) => comment.postId === postId);


*/
