export default function DataGenerator({
  index,
  id,
  personName,
  userName,
  email,
  phone,
}: {
  index: number;
  id: number;
  personName: string;
  userName: string;
  email: string;
  phone: string;
}) {
  return (
    <tr id={`numer_${index}_${id}`}>
      <td className="border border-white">{personName}</td>
      <td className="border border-white">{userName}</td>
      <td className="border border-white">{email}</td>
      <td className="border border-white">{phone}</td>
    </tr>
  );
}
