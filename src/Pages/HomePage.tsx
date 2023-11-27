import LatestInvoice from "../Components/LatestInvoice";
import Navigation from "../Components/Navigation";
import NewInvoice from "../Components/NewInvoice";
import Summary from "../Components/Summary";

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="sm:my-10 sm:mx-40 mx-5">
        <NewInvoice />
        <Summary />
        <div className="mt-10 ">
          <LatestInvoice />
        </div>
      </div>
    </div>
  );
}
