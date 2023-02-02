import { useState } from "react";
import { PricingTablePayment } from "../components/PricingTablePayment/PricingTablePayment";
import { PricingTableRefund } from "../components/PricingTableRefund/PricingTableRefund";
import useTranslation from "next-translate/useTranslation";

export default function Pricing() {
  const { t } = useTranslation("pricing");
  const [isPayment, setIsPayment] = useState(true);
  return (
    <div className="container">
      <div
        className="toggle-button d-flex justify-content-center"
        style={{ marginTop: "1rem" }}
      >
        <button
          className={
            !isPayment ? "active btn btn-secondary me-1" : " btn btn-light me-1"
          }
          onClick={() => setIsPayment(false)}
        >
          {t('payment_title')}
        </button>
        <button
          className={isPayment ? "active btn btn-secondary" : " btn btn-light"}
          onClick={() => setIsPayment(true)}
        >
          {t('refund_title')}
        </button>
      </div>

      <div className="toggle-content">
        <div className={isPayment ? "d-none" : ""}>
          <PricingTablePayment />
        </div>
        <div className={!isPayment ? "d-none" : ""}>
          <PricingTableRefund />
        </div>
      </div>
    </div>
  );
}
