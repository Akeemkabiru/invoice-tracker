type NewInvoiceProp = {
  OnClick: () => void;
};
export default function NewInvoice({ OnClick }: NewInvoiceProp) {
  return (
    <div className="flex justify-between items-center sm:mt-0 mt-5">
      <h1 className="text-2xl font-bold">Home</h1>
      <div>
        {" "}
        <button
          className="bg-black py-2 sm:px-4  w-[120px] text-white font-semibold rounded sm:w-[150px]"
          onClick={OnClick}
        >
          + Add Invoice
        </button>
      </div>
    </div>
  );
}
