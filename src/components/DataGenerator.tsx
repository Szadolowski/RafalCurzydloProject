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
    <tr id={`numer_${index}_${id}`} className="hover:bg-slate-700">
      <td className="border border-white hover:bg-slate-600">{personName}</td>
      <td className="border border-white hover:bg-slate-600">{userName}</td>
      <td className="border border-white hover:bg-slate-600">{email}</td>
      <td className="border border-white hover:bg-slate-600">{phone}</td>
    </tr>
  );
}
