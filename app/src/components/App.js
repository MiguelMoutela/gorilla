import React, { Fragment } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Posts from "./Posts/Posts";
import CreatePost from "./Posts/CreatePost/CreatePost";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import Container from "../utils/components/UI/Container/Container";
import Navigation from "../utils/components/UI/Navigation/Navigation";
import Logo from "../utils/components/UI/Logo/Logo";
import GorillaLogo from "../utils/components/UI/Gorilla/GorillaLogo/GorillaLogo";
import Links from "../utils/components/UI/Links/Links";
import Main from "../utils/components/UI/Main/Main";

import logo from "../assets/images/Logo/gorilla.png";
import reset from "../utils/css/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Container>
        <Navigation>
          <Logo>
            <GorillaLogo src={logo} alt="Gorilla" />
          </Logo>
          <Links>
            <Link to="/create">Create post</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </Links>
        </Navigation>
        <Main>
          <Switch>
            <Route path="/create" component={CreatePost} />
            <Route path="/posts" component={Posts} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Main>
      </Container>
      <GlobalStyle />
    </Fragment>
  </BrowserRouter>
);

export default App;
