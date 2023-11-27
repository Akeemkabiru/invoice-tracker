export default function SummaryContainer({
  detail,
  value,
}: {
  detail: string;
  value: number;
}) {
  return (
    <div className="h-[100px] sm:w-[200px] w-[300px] border-2 rounded-xl border-gray-300 flex pl-5  flex-col justify-evenly  ">
      <div>{detail}</div>
      <div className="text-3xl font-semibold">{value}</div>
    </div>
  );
}
