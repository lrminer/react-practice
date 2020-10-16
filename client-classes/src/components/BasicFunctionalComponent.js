import React, { useState, useEffect } from "react";
import axios from "axios";

const BasicFunctionalComponent = (props) => {
    const [state, setState] = useState({
      comments: [],
      posts: [],
    });

//   const state = {
//     posts: [],
//     comments: [],
//   };

  const [temperature, setTemperature] = useState(90);

  const getData = async () => {
    const posts = await axios.get("http://localhost:3000/posts");
    const comments = await axios.get("http://localhost:3000/comments");
    console.log({
      posts: posts.data,
      comments: comments.data,
    });
    setState({ posts: posts.data, comments: comments.data });
    // state.posts = posts.data;
    // state.comments = comments.data;
    // console.log({ state });
  };

  useEffect(() => {
    getData();
    // setTemperature(45);
  }, []);

  return (
    <div>
      <div id="posts">
        <h1>posts</h1>
        {state.posts.map((post, i) => (
          <div key={i}>{post.title}</div>
        ))}
      </div>
      <div id="commments">
        <h1>comments</h1>
        {state.comments.map((comment, i) => (
          <div key={i}>{comment.body}</div>
        ))}
      </div>
      <h1>{temperature}</h1>
    </div>
  );
};

export default BasicFunctionalComponent;
