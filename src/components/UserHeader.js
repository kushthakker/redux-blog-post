import React, { useEffect } from "react";
import { UserHeaderPost } from "../actions";
import { connect } from "react-redux";

const UserHeader = ({ id, user, UserHeaderPost }) => {
  useEffect(() => {
    UserHeaderPost(id);
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return <div>{user.name}</div>;
};

const mapStateToProps = (state, props) => {
  return { user: state.users.find((user) => user.id === props.id) };
};

export default connect(mapStateToProps, { UserHeaderPost })(UserHeader);
