import React from "react";
import { Switch, Route } from "react-router-dom";

import Container from "../../utils/components/UI/Posts/Container/Container";

import AllPosts from "./AllPosts/AllPosts";
import CreatePost from "./CreatePost/CreatePost";

const Posts = () => (
  <Container>
    <Switch>
      <Route path="/posts" component={AllPosts} />
      <Route path="/create" component={CreatePost} />
    </Switch>
  </Container>
);

export default Posts;
