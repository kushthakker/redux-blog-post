import React, { useEffect } from "react";
import { fetchPost, FetchPostAndUser } from "../actions";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";

const PostList = ({ fetchPost, posts, users, FetchPostAndUser }) => {
  useEffect(() => {
    FetchPostAndUser();
  }, [fetchPost]);

  const renderList = () => {
    return posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <div className="user">
              <UserHeader id={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ui relaxed divided list">
      {renderList()}
      {console.log(`posts--`, posts)}
      {console.log(`users--`, users)}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { posts: state.post, users: state.users };
};

export default connect(mapStateToProps, { fetchPost, FetchPostAndUser })(
  PostList
);
