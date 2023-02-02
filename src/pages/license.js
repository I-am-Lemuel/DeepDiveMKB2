import useTranslation from "next-translate/useTranslation";


export default function License() {
  const { t } = useTranslation('license');
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mt-5">{t('license_title')}</h1>
          <p className="text-center mt-5">{t('license_subtext')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">1.</span> {t('license_text_1')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">2.</span> {t('license_text_2')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">3.</span> {t('license_text_3')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">4.</span> {t('license_text_4')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">5.</span> {t('license_text_5')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">6.</span> {t('license_text_6')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">7.</span> {t('license_text_7')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">8.</span> {t('license_text_8')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">9.</span> {t('license_text_9')}
          </p>
          <p className="text-left">
            <span className="h5 fw-bold">10.</span> {t('license_text_10')}{" "}
            <a href="contact">{t('contact_page')}</a>.
          </p>
          <p className="text-center mt-4 mb-5 fw-bold">
            {t('last_updated')}
          </p>
        </div>
      </div>
    </div>
  );
}
