import React, { Fragment } from "react";

import Header from "../../../utils/components/UI/Posts/Header/Header";
import Main from "../../../utils/components/UI/Posts/Main/Main";

import Post from "../Post/Post";

const AllPosts = () => (
  <Fragment>
    <Header>
      <h1>All posts</h1>
    </Header>
    <Main>
      <Post title="First post" />
      <Post title="First post" />
      <Post title="First post" />
      <Post title="First post" />
    </Main>
  </Fragment>
);

export default AllPosts;
