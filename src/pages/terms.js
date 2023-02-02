import useTranslation from 'next-translate/useTranslation';

export default function Terms() {
  const { t } = useTranslation('terms');
  return (
    <>
      <h1 className="display-1 fw-bold text-center">{t('tos_title')}</h1>

      <div className="container">
        <div className="border-bottom mb-4">
          <p className="fw-bold">
            {t('tos_subtitle')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('use_of_services_title')}</p>
          <p>
            {t('use_of_services_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('payment_processing_title')}</p>
          <p>
            {t('payment_processing_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('fees_and_payments_title')}</p>
          <p>
            {t('fees_and_payments_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('confidentiality_and_security_title')}</p>
          <p>
            {t('confidentiality_and_security_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('limitation_of_liability_title')}</p>
          <p>
            {t('limitation_of_liability_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('termination_title')}</p>
          <p>
            {t('termination_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('changes_to_tos_title')}</p>
          <p>
            {t('changes_to_tos_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('governing_law_title')}</p>
          <p>
            {t('governing_law_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('dispute_resolution_title')}</p>
          <p>
            {t('dispute_resolution_text')}
          </p>
        </div>
        <div className="border-bottom mb-4">
          <p className="display-4 fw-normal">{t('entire_agreement_title')}</p>
          <p>
            {t('entire_agreement_text')}
          </p>
        </div>
      </div>
    </>
  );
}
