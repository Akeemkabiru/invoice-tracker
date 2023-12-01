import { X } from "lucide-react";
type InvoiceFormProp = {
  OnClick: () => void;
};
export default function InvoiceForm({ OnClick }: InvoiceFormProp) {
  return (
    <div className="fixed sm:w-[700px] sm:h-[350px] w-[350px] h-[400px] rounded-md sm:top-[20%] sm:left-[25%] bg-white sm:px-20 z-10 top-[15vh] left-[5vw] px-5">
      <h1 className="absolute top-5 left-5 font-semibold text-2xl">FI</h1>
      <X
        className="absolute right-5 top-5"
        onClick={OnClick}
        size={`${25}px`}
      />
      <div className="flex flex-col gap-5 sm:mt-[10%] mt-[12vh]">
        <input
          type="text"
          placeholder="Buyer's name"
          className=" border-2 border-black rounded-md sm:p-1 p-2 focus:outline-0"
        />
        <input
          type="text"
          placeholder="Product Bought"
          className=" border-2 border-black rounded-md sm:p-1 p-2 focus:outline-0"
        />
        <input
          type="text"
          placeholder="Products Price"
          className=" border-2 border-black rounded-md sm:p-1 p-2 focus:outline-0"
        />
        <input
          type="date"
          placeholder="Date"
          className=" border-2 border-black rounded-md sm:p-1 p-2 focus:outline-0 w-[100%]"
        />
        <button className="w-[100%] bg-black sm:p-1 p-2 rounded-md text-white font-semibold">
          Add Invoice
        </button>
      </div>
    </div>
  );
}
