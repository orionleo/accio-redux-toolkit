import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./rtkit/slice/counterSlice";
import ReduxExample from "./components/ReduxExample";
import {
  deleteUser,
  fetchUser,
  fetchUsers,
  newUser,
  updateUser,
} from "./rtkit/slice/userSlice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counter);
  const { users, user, loading } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading === true) {
    return <div>Loading</div>;
  }
  return (
    <div>
      {/* <div> */}
      {/* <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        {counter}
      </div>
      <ReduxExample /> */}
      <>
        {users && (
          <div>
            {users?.map((user) => (
              <div key={user?.id}>{user?.name}</div>
            ))}
          </div>
        )}
        <button onClick={() => dispatch(deleteUser(3))}>Delete User</button>
        <button
          onClick={() =>
            dispatch(
              updateUser({ id: 4, updatedUser: { name: "Jai Aggarwal" } })
            )
          }
        >
          Update User
        </button>
        <button onClick={() => dispatch(fetchUser(5))}>Fetch User</button>
        <button onClick={() => dispatch(newUser({name:"random name"}))}>New User</button>
        {user && <div>{user.name}</div>}
      </>
    </div>
  );
};

export default App;
