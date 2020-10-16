import React from "react";
import axios from "axios";

class BasicClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3000/posts").then((response) => {
      console.log(response.data);
      this.setState({ ...this.state, posts: response.data });
    });

    axios.get("http://localhost:3000/comments").then((response) => {
      console.log(response.data);
      this.setState({ ...this.state, comments: response.data });
    });
  }

  render() {
    return (
      <div>
        <div id="posts">
          <h1>posts</h1>
          {this.state.posts.map((post, i) => (
            <div key={i}>{post.title}</div>
          ))}
        </div>
        <div id="commments">
          <h1>comments</h1>
          {this.state.comments.map((comment, i) => (
            <div key={i}>{comment.body}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default BasicClassComponent;
