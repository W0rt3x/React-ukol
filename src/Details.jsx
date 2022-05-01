import React from "react";
import { useParams } from "react-router-dom";
import Article from "./components/Article";
const Details = ({ data }) => {
  const updatedPosts = data.posts.map((post) => {
    const comments = data.comments.filter(
      (comment) => comment.postId === post.id
    );
    const author = data.users.filter((user) => user.id === post.userId)[0];

    const resultPost = {
      id: post.id,
      post: post,
      comments: comments,
      author: author,
    };
    return resultPost;
  });
  //<Card posts={post} commentCount={commentCount} author={author} />;
  let params = useParams();

  const selectedPost = updatedPosts.filter(
    (post) => post.id === parseInt(params.id)
  );
  if (selectedPost.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    const post = selectedPost[0].post;
    const comments = selectedPost[0].comments;
    const author = selectedPost[0].author;
    return <Article post={post} comments={comments} author={author} />;
  }
};

export default Details;
