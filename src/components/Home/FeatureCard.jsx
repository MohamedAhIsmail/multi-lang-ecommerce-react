import React from "react";
import { useTranslation } from "react-i18next";

function FeatureCard({ feature }) {
  const { title, text, icon } = feature;
  const { t } = useTranslation();
  return (
    <div className="text-heading flex flex-col items-center justify-center gap-4 2xl:flex-row">
      <div className="p-5 bg-background-second rounded-full text-4xl">
        {icon}
      </div>
      <div className="flex flex-col gap-1 justify-center text-center 2xl:text-start ">
        <h3 className="font-semibold">{t(title)}</h3>
        <p className="text-sm">{t(text)}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
