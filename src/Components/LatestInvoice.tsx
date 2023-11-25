export default function LatestInvoice() {
  return (
    <div>
      <h1 className="font-semibold">Latest Invoice</h1>
      <div className="h-[60px] w-[200px] border-2 rounded-xl border-gray-300 flex-row pl-5 text-gray-700">
        <div className="flex text-lg font-bold gap-5 mb-1">
          <h1>GnPayAfrica</h1>
          <h2>$200</h2>
        </div>
        <p className="text-sm">Last updated Nov, 20</p>
      </div>
    </div>
  );
}
