import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "../../../utils/components/UI/Posts/Header/Header";
import StyledAllPosts from "../../../utils/components/UI/Posts/AllPosts/StyledAllPosts";

import Post from "../Post/Post";

const AllPosts = () => (
  <Fragment>
    <Header>
      <h1>All posts</h1>
      <Link to="/create">Create post</Link>
    </Header>
    <StyledAllPosts>
      <Post title="First post" />
      <Post title="First post" />
      <Post title="First post" />
      <Post title="First post" />
    </StyledAllPosts>
  </Fragment>
);

export default AllPosts;
