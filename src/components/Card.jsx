import React from "react";
import { Link } from "react-router-dom";

const Card = ({ posts: { id, title, body }, commentCount, author }) => {
  return (
    <div key={id} className="posts">
      <div>
        <p>
          <Link to={"/detail/" + id}>{title}</Link>
        </p>
        <p>{body}</p>
      </div>
      <div>
        <span>{commentCount}</span>
        <div>
          <h3>{author}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
