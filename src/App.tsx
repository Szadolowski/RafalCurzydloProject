import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  RootState,
  AppDispatch,
  User,
} from "./store/userDataStore";
import DataGenerator from "./components/DataGenerator";
import DataFiltering from "./components/DataFiltering";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { users, filters, error } = useSelector(
    (state: RootState) => state.userData
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers =
    users.length > 0
      ? users.filter((user: User) =>
          Object.entries(filters).every(([key, value]) => {
            if (value === "") return true;
            if (key in user) {
              const userKey = key as keyof User;
              return user[userKey]
                ?.toString()
                .toLowerCase()
                .includes(value.toLowerCase());
            }
            return false;
          })
        )
      : [];

  return (
    <section className="bg-gray-900 min-h-screen text-white flex flex-col">
      <h1>User Table</h1>
      {error && <p className="text-red-500">Error: {error}</p>}
      <DataFiltering />
      <table className="border-2 border-white rounded-lg">
        <thead>
          <tr className="border border-b-4 border-white">
            <th className="border border-white">Name</th>
            <th className="border border-white">Username</th>
            <th className="border border-white">Email</th>
            <th className="border border-white">Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <DataGenerator
              key={user.id}
              index={index + 1}
              id={user.id}
              personName={user.name}
              userName={user.userName}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
