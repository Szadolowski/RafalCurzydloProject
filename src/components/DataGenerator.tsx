interface user {
  index: number;
  id: number;
  personName: string;
  userName: string;
  email: string;
  phone: string;
}

export default function DataGenerator({
  index,
  id,
  personName,
  userName,
  email,
  phone,
}: user) {
  console.log(index);
  return (
    <tr id={`numer_${id}`}>
      <td className="border border-white">{personName}</td>
      <td className="border border-white">{userName}</td>
      <td className="border border-white">{email}</td>
      <td className="border border-white">{phone}</td>
    </tr>
  );
}
