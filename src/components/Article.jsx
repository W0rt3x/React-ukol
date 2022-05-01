import React from "react";
const Card = ({ posts: { id, title, body }, commentCount, author }) => {
  return <div key={id} className="posts"></div>;
};

export default Article;
