import React from "react";
import { connect } from "react-redux";

import { Grid, Card, Header, Divider } from "semantic-ui-react";

class PostList extends React.Component {
  state = {};

  render() {
    let listPosts = this.props.posts.filter(post => {
      return post.title.indexOf(this.props.search.toLowerCase()) !== -1;
    });

    return (
      <Grid.Column width={12}>
        {listPosts.map(e => (
          <Card fluid key={e.id}>
            <Card.Content>
              <Header color="red">{e.title}</Header>
              <Divider horizontal>Bio Data</Divider>
              <Card.Description>{e.body}</Card.Description>
              <Divider hidden />
            </Card.Content>
          </Card>
        ))}
      </Grid.Column>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    search: state.search,
    post: state.post
  };
}

export default connect(mapStateToProps)(PostList);
