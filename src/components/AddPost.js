import React from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";
import store from "../store";
import { ADD_POST } from "../actions/index";
import { Grid, Form, Input, Button, TextArea } from "semantic-ui-react";

class AddPost extends React.Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    const { title, body } = this.state;
    e.preventDefault();

    if (title === "" || body === "") {
      console.log("please fill out both fields!");
    } else {
      axios({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
          title: title,
          body: body,
          id: uuid()
        }
      }).then(res => {
        store.dispatch({ type: ADD_POST, payload: res.data });
      });

    }
  };

  render() {
    return (
      <Grid.Column width={12}>
        <Form>
          <Form.Field
            name="title"
            control={Input}
            label="Post Title"
            placeholder="Post Title..."
            onChange={this.handleChange}
          />

          <Form.Field
            name="body"
            control={TextArea}
            label="Post Content"
            placeholder="Post Content..."
            onChange={this.handleChange}
          />
          <Button color="red" inverted onClick={this.handleClick}>
            Submit Post!
          </Button>
        </Form>
      </Grid.Column>
    );
  }
}

export default AddPost;
