import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "./MainLayout";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import "../styles/style.css";
import history from "../history";
const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={PostList} />
              <Route path="/post/:id" component={PostDetail} />
            </Switch>
          </MainLayout>
        </Switch>
        <Redirect to="/" />
      </Router>
    </div>
  );
};

export default App;
