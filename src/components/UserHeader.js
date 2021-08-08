// import { connect } from "react-redux";

// const UserHeader = ({ user }) => {
//   if (!user) return <div>Loading...</div>;

//   return <div>{user.name}</div>;
// };

// const mapStateToProps = (state, props) => {
//   return { user: state.users.find((user) => user.id === props.id) };
// };

// export default connect(mapStateToProps)(UserHeader);

import { useSelector } from "react-redux";

const UserHeader = ({ userId }) => {
  const user = useSelector((state) => state.users.find((u) => u.id === userId));

  return !user ? <div>Loading...</div> : <div>{user.name}</div>;
};

export default UserHeader;
