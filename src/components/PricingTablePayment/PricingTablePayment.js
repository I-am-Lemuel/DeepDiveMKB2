import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export const PricingTablePayment = () => {
  const { t } = useTranslation("pricing");
  return (
    <>
      <table className="table pricing-table">
        <thead>
          <tr>
            <th>{t("payment_method")}</th>
            <th>{t("country_of_client")}</th>
            <th>{t("handling_fee")}</th>
            <th></th>
            <th>{t("payment_fee")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image
                src="/payment_icons/visa.png"
                alt="Visa Icon"
                width={35}
                height={35}
                className="me-2"
              />
              Visa
            </td>
            <td>{t("worldwide")}</td>
            <td>€0.25</td>
            <td>+</td>
            <td>2.3%</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/payment_icons/mastercard.png"
                alt="Mastercard Icon"
                width={35}
                height={35}
                className="me-2"
              />
              Mastercard
            </td>
            <td>{t("worldwide")}</td>
            <td>€0.25</td>
            <td>+</td>
            <td>2.3%</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/payment_icons/american-express.png"
                alt="American Express Icon"
                width={35}
                height={35}
                className="me-2"
              />
              American Express
            </td>
            <td>{t("worldwide")}</td>
            <td>€0.25</td>
            <td>+</td>
            <td>2.9%</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/payment_icons/paypal.png"
                alt="PayPal Icon"
                width={35}
                height={35}
                className="me-2"
              />
              PayPal
            </td>
            <td>{t("worldwide")}</td>
            <td>€0.10</td>
            <td>+</td>
            <td>Paypal Costs</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/payment_icons/klarna.png"
                alt="Klarna Icon"
                width={35}
                height={35}
                className="me-2"
              />
              Klarna
            </td>
            <td>{t("worldwide")}</td>
            <td>€1.00</td>
            <td>+</td>
            <td>2.99%</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/payment_icons/ideal.png"
                alt="iDEAL Icon"
                width={35}
                height={35}
                className="me-2"
              />
              iDEAL
            </td>
            <td>Netherlands</td>
            <td>€0.29</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Image
                src="/payment_icons/sepa.png"
                alt="SEPA Icon"
                width={35}
                height={35}
                className="me-2"
              />
              SEPA
            </td>
            <td>Europe, UK</td>
            <td>€0.25</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Image
                src="/payment_icons/bancontact.png"
                alt="Bancontact Icon"
                width={40}
                height={28.25}
                className="me-2"
              />
              Bancontact
            </td>
            <td>Belgium</td>
            <td>€0.39</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <Image
                src="/payment_icons/sofort.png"
                alt="Sofort Icon"
                width={35}
                height={35}
                className="me-2"
              />
              Sofort
            </td>
            <td>Europe</td>
            <td>€0.25</td>
            <td>+</td>
            <td>0.9%</td>
          </tr>
          <tr>
            <td>
              <Image
                src="/payment_icons/giropay.png"
                alt="Giropay Icon"
                width={35}
                height={35}
                className="me-2"
              />
              Giropay
            </td>
            <td>Germany</td>
            <td>€0.25</td>
            <td>+</td>
            <td>1.5%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
