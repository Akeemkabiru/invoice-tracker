import InvoiceForm from "../Components/InvoiceForm";
import LatestInvoice from "../Components/LatestInvoice";
import Navigation from "../Components/Navigation";
import NewInvoice from "../Components/NewInvoice";
import Summary from "../Components/Summary";
import { useState } from "react";
export default function HomePage() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      {openForm && <InvoiceForm OnClick={() => setOpenForm(false)} />}
      {openForm && (
        <div
          className={`absolute inset-0 bg-black opacity-50 w-[100vw] h-full`}
        ></div>
      )}
      <Navigation />
      <div className="sm:my-10 sm:mx-40 mx-5">
        <NewInvoice OnClick={() => setOpenForm(true)} />
        <Summary />
        <LatestInvoice />
      </div>
    </div>
  );
}
