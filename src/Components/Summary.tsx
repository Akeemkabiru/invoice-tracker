import SummaryContainer from "./SummaryContainer";

export default function Summary() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex-col items-center space-y-2 mr-10">
        <h2 className="font-semibold text-xl">Overview</h2>
        <div className="flex gap-10 items-center">
          <SummaryContainer detail="All Invoices" value={9} />
          <SummaryContainer detail="Outstanding Invoices" value={4} />
          <SummaryContainer detail="Revenue" value={200} />
        </div>
      </div>
    </div>
  );
}
