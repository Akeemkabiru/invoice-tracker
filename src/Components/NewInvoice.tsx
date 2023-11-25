import InvoiceForm from "./InvoiceForm";
import { useState } from "react";
export default function NewInvoice() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-start">
      <h1 className="text-2xl font-bold">Home</h1>
      <div>
        {" "}
        <button
          className="bg-black py-2 px-4 text-white font-semibold rounded w-[150px]"
          onClick={() => setOpenForm(!openForm)}
        >
          {!openForm ? " + Add Invoice" : "Close"}
        </button>
        {openForm && <InvoiceForm />}
      </div>
    </div>
  );
}
