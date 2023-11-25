export default function InvoiceForm() {
  return (
    <form className="w-[250px] bg-gray-100 p-5 rounded-xl absolute  mt-5">
      <input
        type="text"
        placeholder="Name"
        className="w-full border-2 border-gray-400 p-1 rounded mb-5  bg-gray-100"
      />
      <input
        type="text"
        placeholder="items"
        className="w-full border-2 border-gray-400 p-1 rounded mb-5  bg-gray-100"
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="Price"
        className="w-full border-2 border-gray-400 p-1 rounded bg-gray-100"
      />
    </form>
  );
}
