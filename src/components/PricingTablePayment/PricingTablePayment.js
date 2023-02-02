import useTranslation from "next-translate/useTranslation";

export const PricingTablePayment = () => {
  const { t } = useTranslation("pricing");
  return (
    <>
      <table className="table pricing-table">
        <thead>
          <tr>
            <th>{t('payment_method')}</th>
            <th>{t('country_of_client')}</th>
            <th>{t('handling_fee')}</th>
            <th></th>
            <th>{t('payment_fee')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Globcoin</td>
            <td>{t('netherlands')}</td>
            <td>{t('currency_symbol')}0.10</td>
            <td>+</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>Ideal</td>
            <td>{t('worldwide')}</td>
            <td>{t('currency_symbol')}0.10</td>
            <td>+</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Mastercard</td>
            <td>{t('worldwide')}</td>
            <td>{t('currency_symbol')}0.10</td>
            <td>+</td>
            <td>2.5%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
