import React, { Fragment } from "react";

import Header from "../../../utils/components/UI/Posts/Header/Header";
import StyledAllPosts from "../../../utils/components/UI/Posts/AllPosts/StyledAllPosts";

const CreatePost = () => (
  <Fragment>
    <Header>
      <h1>Create a new post</h1>
    </Header>
    <StyledAllPosts>
      <h1>create post</h1>
    </StyledAllPosts>
  </Fragment>
);

export default CreatePost;
