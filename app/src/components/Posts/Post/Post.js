import React from "react";

import StyledPost from "../../../utils/components/UI/Posts/Post/StyledPost";

const Post = ({ title }) => (
  <StyledPost>
    <h1>{title}</h1>
  </StyledPost>
);

export default Post;
