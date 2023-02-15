import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import { FETCH_POSTS } from "./actions/index";

import { Grid, Container } from "semantic-ui-react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import Sidebar from "./components/SideBar";

class App extends React.Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      store.dispatch({ type: FETCH_POSTS, payload: res.data });
    });
  }

  render() {
    return (
      <Provider store={store} >
        <Router>
          <React.Fragment>
            <Container  style={{marginTop:"30px"}}>
              <Grid columns={2}>
                <Grid.Row>
                  <Sidebar />
                  <Routes>
                    <Route exact path="/" element={<PostList />} />
                    <Route exact path="/addPost" element={<AddPost />} />
                  </Routes>
                </Grid.Row>
              </Grid>
            </Container>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
