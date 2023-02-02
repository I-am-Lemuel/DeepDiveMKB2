export const PricingTableRefund = () => {
  return (
    <>
      <table className="table pricing-table">
        <thead>
          <tr>
            <th>Payment Method</th>
            <th>Country of client</th>
            <th>Handling Fee Adyen</th>
            <th></th>
            <th>Refund Method Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Globcoin</td>
            <td>Netherlands</td>
            <td>$0.10</td>
            <td>+</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>Ideal</td>
            <td>Worldwide</td>
            <td>$0.10</td>
            <td>+</td>
            <td>v More information</td>
          </tr>
          <tr>
            <td>Mastercard</td>
            <td>Worldwide</td>
            <td>$0.10</td>
            <td>+</td>
            <td>2.5%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
