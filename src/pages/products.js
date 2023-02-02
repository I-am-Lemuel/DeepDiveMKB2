import React from "react"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"

export default function Products() {
  const { t } = useTranslation('products');
  return (
    <div className="container">
      <h1 className="display-1 mt-5 text-center fw-bolder">{t('page_title')}</h1>
      <p className="text-center text-muted">{t('page_description')}</p>
      <div className="row row-cols-5">
        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="CREDITCARD" width={180} height={180} />
          <p><strong>American express.</strong> {t('american_desc')}</p>
        </div>
        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="PAYPAL" width={180} height={180} />
          <p><strong>Paypal.</strong> {t('paypal_desc')}</p>
        </div>

        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="KLARNA" width={180} height={180} />
          <p><strong>Klarna.</strong> {t('klarna_desc')}</p>
        </div>

        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="iDeal" width={180} height={180} />
          <p><strong>iDeal.</strong> {t('ideal_desc')}</p>
        </div>

        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="SEPA" width={180} height={180} />
          <p><strong>SEPA.</strong> {t('sepa_desc')}</p>
        </div>
      </div>
      {/* end div here and start over */}
      <div className="row row-cols-5" id="row2">

        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="BANCONTACT" width={180} height={180} />
          <p><strong>Bancontact.</strong> {t('bancontact_desc')}</p>
        </div>

        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="SOFORT" width={180} height={180} />
          <p><strong>Sofort.</strong> {t('sofort_desc')}</p>
        </div>

        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="GIROPAY" width={180} height={180} />
          <p><strong>Giropay.</strong> {t('giropay_desc')}</p>
        </div>

        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="APPLEPAY" width={180} height={180} />
          <p><strong>Visa.</strong> {t('visa_desc')}</p>
        </div>

        <div className="col">
          <Image className="img" src="/images/credit-cards.svg" alt="GOOGLEPAY" width={180} height={180} />
          <p><strong>Mastercard.</strong> {t('mastercard_desc')}</p>
        </div>
      </div>







      {/* <p>Paypal</p> */}
      {/* <p>Klarna</p> */}
      {/* <p>IDEAL</p> */}
      {/* <p>SEPA</p> */}
      {/* <p>Bancontact</p> */}
      {/* <p>Sofort</p> */}
      {/* <p>Giropay</p> */}
      {/* <p>Apple Pay</p> */}
    </div>

  )
}
