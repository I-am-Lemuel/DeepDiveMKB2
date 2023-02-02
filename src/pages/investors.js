import useTranslation from "next-translate/useTranslation";

export default function Investors() {
  const { t } = useTranslation('investors');
  return (
    <>
      <div className="container mx-auto">
        <div className="col mx-auto mt-3">
          <div className="col-md-6 mx-auto">
            <h1 className="display-4 fw-bold text-primary">
              {t('title')}
            </h1>
            <p className="lead fw-bold">
              {t('investment_subtext')}
            </p>
          </div>
        </div>
        <div className="row mx-auto border-top border-bottom mt-5">
          <div className="col-md-6 mx-auto">
            <h1 className="display-4 fw-bold mb-3 text-primary">{t('advantages')}</h1>
            <ol className="list-inline">
              <li>
                <p className="lead">
                  {t('potential_text')}
                </p>
              </li>
              <li>
                <p className="lead">
                  {t('diversification_text')}
                </p>
              </li>
              <li>
                <p className="lead">
                  {t('opportunity_text')}
                </p>
              </li>
              <li>
                <p className="lead">
                  {t('exclusive_deals_text')}
                </p>
              </li>
              <li>
                <p className="lead">
                  {t('networking_text')}
                </p>
              </li>
              <li>
                <p className="lead">
                  {t('alignment_text')}
                </p>
              </li>
              <li>
                <p className="lead">
                  {t('mover_text')}
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}