import React from "react"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"
import Link from "next/link";

export default function Products() {
  const { t } = useTranslation('products');
  return (
    <div className="container">
      <h1 className="display-1 mt-5 text-center fw-bolder">{t('page_title')}</h1>
      <p className="text-center text-muted">{t('page_description')}</p>
      <div className="row row-cols-5">
        <div className="col">
        <Link href="/methods/american-express">
          <Image className="img" src="/images/american-express.svg" alt="CREDITCARD" width={180} height={180} />
        </Link>
          <p><strong>American express.</strong> {t('american_desc')}</p>
        </div>
        <div className="col">
        <Link href="/methods/paypal">
          <Image className="img" src="/images/paypal.svg" alt="PAYPAL" width={180} height={180} />
        </Link>
          <p><strong>Paypal.</strong> {t('paypal_desc')}</p>
        </div>

        <div className="col">
        <Link href="/methods/klarna">
          <Image className="img" src="/images/klarna.svg" alt="KLARNA" width={180} height={180} />
        </Link>
          <p><strong>Klarna.</strong> {t('klarna_desc')}</p>
        </div>

        <div className="col">
        <Link href="/methods/ideal">
          <Image className="img" src="/images/ideal.svg" alt="iDeal" width={180} height={180} />
        </Link>
          <p><strong>iDeal.</strong> {t('ideal_desc')}</p>
        </div>

        <div className="col">
        <Link href="/methods/sepa">
          <Image className="img" src="/images/sepa.svg" alt="SEPA" width={180} height={180} />
        </Link>
          <p><strong>SEPA.</strong> {t('sepa_desc')}</p>
        </div>
      </div>
      {/* end div here and start over */}
      <div className="row row-cols-5" id="row2">
        <div className="col">
        <Link href="/methods/bancontact">
          <Image className="img" src="/images/bancontact.svg" alt="BANCONTACT" width={180} height={180} />
        </Link>
          <p><strong>Bancontact.</strong> {t('bancontact_desc')}</p>
        </div>

        <div className="col">
        <Link href="/methods/sofort">
          <Image className="img" src="/images/sofort.svg" alt="SOFORT" width={180} height={180} />
        </Link>
          <p><strong>Sofort.</strong> {t('sofort_desc')}</p>
        </div>

        <div className="col">
        <Link href="/methods/giropay">
          <Image className="img" src="/images/giropay.svg" alt="GIROPAY" width={180} height={180} />
        </Link>
          <p><strong>Giropay.</strong> {t('giropay_desc')}</p>
        </div>

        <div className="col">
        <Link href="/methods/visa">
          <Image className="img" src="/images/visa.svg" alt="APPLEPAY" width={180} height={180} />
        </Link>
          <p><strong>Visa.</strong> {t('visa_desc')}</p>
        </div>

        <div className="col">
        <Link href="/methods/mastercard">
          <Image className="img" src="/images/mastercard.svg" alt="GOOGLEPAY" width={180} height={180} />
        </Link>
          <p><strong>Mastercard.</strong> {t('mastercard_desc')}</p>
        </div>
      </div>





    </div>

  )
}
