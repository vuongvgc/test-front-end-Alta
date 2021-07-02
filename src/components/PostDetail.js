import React from "react";
import { connect } from "react-redux";
import { findComment } from "../actions";
import UserHeader from "./UserHeader";
class PostDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.findComment(id);
  }
  renderPost() {
    const idPost = this.props.match.params.id;
    const post = this.props.posts.filter((post) => post.id === idPost * 1);
    const { id, title, body, userId } = post[0];
    return (
      <div className="item" key={id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <UserHeader userId={userId} />
          <div className="description">
            <h2 class="post__title">{title}</h2>
            <p>{body}</p>
          </div>
        </div>
      </div>
    );
  }
  renderComment() {
    return this.props.commentsPost.map((comment) => {
      return (
        <div className="comment comment__box" key={comment.id}>
          <div className="content">
            <h4 className="author">Name:{comment.name}</h4>
            <div className="metadata">
              <p>Email: {comment.email}</p>
            </div>
            <div className="text">{comment.body}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderPost()}
        <div className="ui comments">
          <h3 className="ui dividing comment_header">Comments</h3>
          {this.renderComment()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    comments: state.comments,
    commentsPost: state.commentsPost,
  };
};

export default connect(mapStateToProps, { findComment })(PostDetail);
