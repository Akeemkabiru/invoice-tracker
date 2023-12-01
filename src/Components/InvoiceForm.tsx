import { X } from "lucide-react";
type InvoiceFormProp = {
  OnClick: () => void;
};
export default function InvoiceForm({ OnClick }: InvoiceFormProp) {
  return (
    <div className="fixed sm:w-[50vw] sm:h-[50vh] w-[80vw] h-[60vh] rounded-md sm:top-[25%] sm:left-[25%] bg-white sm:px-20 z-10 top-[20vh] left-[10vw] px-5">
      <X className="absolute right-5 top-5" onClick={OnClick} />
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
          className=" border-2 border-black rounded-md sm:p-1 p-2 focus:outline-0"
        />
      </div>
    </div>
  );
}
