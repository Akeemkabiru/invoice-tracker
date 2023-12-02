import { X } from "lucide-react";
type InvoiceFormProp = {
  OnClick: () => void;
};
export default function InvoiceForm({ OnClick }: InvoiceFormProp) {
  return (
    <div className="fixed sm:w-[700px] rounded-md sm:mx-[25vw] sm:h-[400px] sm:my-[20vh] w-[350px] h-[450px]  bg-white  z-10 flex justify-center items-center mx-[17px] my-[120px]">
      <X
        onClick={OnClick}
        size={`${25}px`}
        className="absolute right-2 top-2"
      />
      <div className="flex flex-col gap-5 w-[100%] sm:px-20 px-5">
        <input
          type="text"
          placeholder="Buyer's name"
          className=" border-2 border-gray-500 rounded-md sm:p-1 p-3 focus:outline-0"
        />
        <input
          type="text"
          placeholder="Product Bought"
          className=" border-2 border-gray-500 rounded-md sm:p-1 p-3 focus:outline-0"
        />
        <input
          type="text"
          placeholder="Products Price"
          className=" border-2 border-gray-500 rounded-md sm:p-1 p-3 focus:outline-0"
        />
        <input
          type="date"
          placeholder="Date"
          className=" border-2 border-gray-500 rounded-md sm:p-1 p-3 focus:outline-0 w-[100%]"
        />
        <button className="w-[100%] bg-black sm:p-1 p-3 rounded-md text-white font-semibold">
          Add Invoice
        </button>
      </div>
    </div>
  );
}
