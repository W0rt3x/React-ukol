import React from "react";

const Article = ({ post: { id, title, body }, comments, author }) => {
  return (
    <div key={id} className="posts">
      <div>
        <p>{body}</p>
      </div>
      <div>
        <span>
          {/*comments mapovat comments a predat si comment do nove componenty treba comment*/}
        </span>
        <div>
          <h3>{author.name}</h3>
        </div>
      </div>
    </div>
  );
};
export default Article;
