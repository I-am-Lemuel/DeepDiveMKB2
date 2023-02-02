import useTranslation from "next-translate/useTranslation";

export default function Privacy() {
  const { t } = useTranslation('privacy');

  return (
    <>
      <h1 className="display-1 fw-bold text-center">
        {t('privacy_policy_title')}
      </h1>

      <div className="container">
        <div className="border-bottom mb-4">
          <p className="fw-bold">
            {t('privacy_policy_subtitle')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('types_of_information_title')}</p>
          <p>
            {t('types_of_information_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('how_we_use_information_title')}</p>
          <p>
            {t('how_we_use_information_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('disclosure_title')}</p>
          <p>
            {t('disclosure_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('changes_to_policy_title')}</p>
          <p>
            {t('changes_to_policy_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('contact_title')}</p>
          <p>
            {t('contact_text')}
          </p>
        </div>
        <small>{t('effective_date')}</small>{" "}
        <br />
        <small>
          {t('jurisdiction')}
        </small>
      </div>
    </>
  );
}
