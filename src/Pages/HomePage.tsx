import Navigation from "../Components/Navigation";
import NewInvoice from "../Components/NewInvoice";
import Summary from "../Components/Summary";

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="my-10 mx-40">
        <NewInvoice />
        <Summary />
      </div>
    </div>
  );
}
