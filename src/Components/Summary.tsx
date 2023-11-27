import SummaryContainer from "./SummaryContainer";

export default function Summary() {
  // const int = Intl.NumberFormat(navigator.language, {
  //   style: "currency",
  //   currency: "naira",
  // }).format(200);
  // console.log(int);
  return (
    <div className="flex items-center justify-center mt-10 w-full">
      <div className="flex-col items-center space-y-2 sm:mr-10">
        <h2 className="font-semibold text-xl">Overview</h2>
        <div className="flex sm:flex-row sm:gap-10 items-center flex-col gap-5">
          <SummaryContainer detail="All Invoices" value={9} />
          <SummaryContainer detail="Outstanding Invoices" value={4} />
          <SummaryContainer detail="Revenue" value={200} />
        </div>
      </div>
    </div>
  );
}
