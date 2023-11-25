export default function SummaryContainer({
  detail,
  value,
}: {
  detail: string;
  value: number;
}) {
  return (
    <div className="h-[100px] w-[200px] border-2 rounded-xl border-gray-300 flex-row pl-5 pt-3">
      <div>{detail}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}
