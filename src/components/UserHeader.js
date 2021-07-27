import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  if (!user) return <div>Loading...</div>;

  return <div>{user.name}</div>;
};

const mapStateToProps = (state, props) => {
  return { user: state.users.find((user) => user.id === props.id) };
};

export default connect(mapStateToProps)(UserHeader);
