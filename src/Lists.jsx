import React from "react";
import Card from "./components/Card";

const Lists = ({ data }) => {
  const updatedPosts = data.posts.map((post) => {
    const commentCount = data.comments.filter(
      (comment) => comment.postId === post.id
    ).length;
    const author = data.users.filter((user) => user.id === post.userId)[0].name;

    return (
      <Card
        key={post.id}
        posts={post}
        commentCount={commentCount}
        author={author}
      />
    );
  });

  return (
    <div key="list" className="Lists">
      {updatedPosts}
    </div>
  );
};

export default Lists;
