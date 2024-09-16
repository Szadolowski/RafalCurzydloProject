import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/userDataStore";
import { RootState, AppDispatch } from "./store/userDataStore"; // Importujemy AppDispatch
import DataGenerator from "./components/DataGenerator.tsx";

function App() {
  const dispatch: AppDispatch = useDispatch(); // Używamy AppDispatch do poprawnego typowania
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); // Wywołujemy akcję fetchUsers
  }, [dispatch]);

  return (
    <section className="bg-gray-900 min-h-screen text-white flex flex-col">
      <h1>User Table</h1>
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
          {users.map((e, index) => (
            <DataGenerator
              key={e.id}
              index={index + 1}
              id={e.id}
              personName={e.name}
              userName={e.userName}
              email={e.email}
              phone={e.phone}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
