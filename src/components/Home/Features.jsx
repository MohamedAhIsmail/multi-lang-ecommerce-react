import { CiDeliveryTruck, CiCreditCard1 } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { IoChatbubblesOutline } from "react-icons/io5";
import FeatureCard from "./FeatureCard";

const features = [
  {
    id: 1,
    icon: <CiDeliveryTruck />,
    title: "siteFeatures.shipping",
    text: "siteFeatures.shippingText",
  },
  {
    id: 2,
    icon: <CiCreditCard1 />,
    title: "siteFeatures.payment",
    text: "siteFeatures.paymentText",
  },
  {
    id: 3,
    icon: <TfiReload />,
    title: "siteFeatures.moneyBack",
    text: "siteFeatures.moneyBackText",
  },
  {
    id: 4,
    icon: <IoChatbubblesOutline />,
    title: "siteFeatures.support",
    text: "siteFeatures.supportText",
  },
];

function Features() {
  return (
    <section className="py-12">
      <div className="container grid gap-5 sm:gap-12 grid-cols-2 xl:grid-cols-4">
        {features.map((feat) => (
          <FeatureCard key={feat.id} feature={feat} />
        ))}
      </div>
    </section>
  );
}

export default Features;
