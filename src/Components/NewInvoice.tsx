import { useState } from "react";
export default function NewInvoice() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center sm:mt-0 mt-5">
      <h1 className="text-2xl font-bold">Home</h1>
      <div>
        {" "}
        <button
          className="bg-black py-2 sm:px-4  w-[120px] text-white font-semibold rounded sm:w-[150px]"
          onClick={() => setOpenForm(!openForm)}
        >
          + Add Invoice
        </button>
      </div>
    </div>
  );
}
