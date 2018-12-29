import React from "react";
import { Link } from "react-router-dom";

import Container from "../../utils/components/UI/Posts/Container/Container";
import Header from "../../utils/components/UI/Posts/Header/Header";
import AllPosts from "../../utils/components/UI/Posts/AllPosts/AllPosts";

import Post from "./Post/Post";

const Posts = () => (
  <Container>
    <Header>
      <h1>All posts</h1>
      <Link to="/create">Create post</Link>
    </Header>
    <AllPosts>
      <Post title="First post" />
      <Post title="First post" />
      <Post title="First post" />
      <Post title="First post" />
    </AllPosts>
  </Container>
);

export default Posts;
