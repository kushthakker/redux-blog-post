import React, { useEffect } from "react";
import { FetchPostAndUser } from "../actions";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";

const PostList = ({ posts, FetchPostAndUser }) => {
  useEffect(() => {
    FetchPostAndUser();
  }, [FetchPostAndUser]);

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

  return <div className="ui relaxed divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.post, users: state.users };
};

export default connect(mapStateToProps, { FetchPostAndUser })(PostList);
