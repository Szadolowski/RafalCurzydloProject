import { useDispatch, useSelector } from "react-redux";
import { setFilter, RootState } from "../store/userDataStore";

export default function DataFiltering() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.userData.filters);

  const handleChange =
    (
      key: keyof typeof filters
    ): ((event: React.ChangeEvent<HTMLInputElement>) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setFilter({ key, value: event.target.value }));
    };

  return (
    <thead className="border-b-4 border-white ">
      <tr className="border border-white">
        <th className="border border-white">Name</th>
        <th className="border border-white">Username</th>
        <th className="border border-white">Email</th>
        <th className="border border-white">Phone</th>
      </tr>
      <tr className="border border-white">
        <td className="border border-white">
          <input
            type="text"
            className="bg-gray-600"
            value={filters.name}
            onChange={handleChange("name")}
            placeholder="Filter by name"
          />
        </td>
        <td className="border border-white">
          <input
            type="text"
            className="bg-gray-600"
            value={filters.userName}
            onChange={handleChange("userName")}
            placeholder="Filter by username"
          />
        </td>
        <td className="border border-white">
          <input
            type="text"
            className="bg-gray-600"
            value={filters.email}
            onChange={handleChange("email")}
            placeholder="Filter by email"
          />
        </td>
        <td className="border border-white">
          <input
            type="text"
            className="bg-gray-600"
            value={filters.phone}
            onChange={handleChange("phone")}
            placeholder="Filter by phone"
          />
        </td>
      </tr>
    </thead>
  );
}
