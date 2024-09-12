import { useState } from "react";
import { usersData } from "./data/data.ts";
import DataGenerator from "./components/DataGenerator.tsx";

function App() {
  interface userData {
    id: number;
    name: string;
    userName: string;
    email: string;
    phone: string;
  }

  const [user, setUser] = useState<userData[]>(usersData);

  return (
    <section className="bg-gradient-to-br from-[#0f0c44] from-40% to-[#597ebb] to-90% min-h-screen text-white flex flex-col">
      <h1>User Table</h1>
      <table className="border-2 border-white rounded-lg">
        <thead>
          <tr className="border border-b-4 border-white">
            <th className="border border-white">Name</th>
            <th className="border border-white">username</th>
            <th className="border border-white">email</th>
            <th className="border border-white">phone</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, index) => (
            <DataGenerator
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
