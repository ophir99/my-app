import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Home from "../Pages/Home";
import CreatePosts from "../Pages/CreatePosts";
import ListPosts from "../Pages/ListPosts";
import "./App.css";
import Post from "../Pages/Post";
import DemoClass from "../Pages/DemoClass";
import DemoFun from "../Pages/DemoFun";
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <BrowserRouter>
          <nav>
            <ul className="links">
              <li>
                <NavLink exact={true} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/createposts">Create Posts</NavLink>
              </li>
              <li>
                <NavLink to="/listposts">List Posts</NavLink>
              </li>
              <li>
                <NavLink to="/democlass">DemoClass</NavLink>
              </li>
              <li>
                <NavLink to="/demofun">DemoFun</NavLink>
              </li>
            </ul>
          </nav>
          <main>
            {/* Here goes comments */}
            <Route path="/" exact={true} component={Home} />
            <Route path="/createposts" component={CreatePosts} />
            <Route path="/listposts" component={ListPosts} />
            <Route path="/viewpost/:postIndex" component={Post} />
            <Route path="/democlass" component={DemoClass} />
            <Route path="/demofun" component={DemoFun} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
