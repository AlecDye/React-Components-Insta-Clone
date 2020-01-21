// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log("This is the props:", props);
  // Add state for the comments
  // const [comments] = useState(Comment);

  return (
    <div>
      props.postData.map(comments){/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
