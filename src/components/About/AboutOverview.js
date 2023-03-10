import { Image } from "react-bootstrap";
import useTranslation from "next-translate/useTranslation";

export const AboutOverview = () => {
  const { t } = useTranslation("about");
  return (
    <div className="container mt-5 mb-5 mx-auto">
      <div className="row mx-auto">
        <div className="col-md-6 mx-auto">
          <h1 className="display-4 fw-bold">{t('overview_title')}</h1>
          <p className="lead">
            {t('overview_text')}
          </p>
        </div>
        <div className="col-md-6 mx-auto d-flex justify-content-end">
          <Image
            className="rounded-5 shadow about-image-h mb-3"
            src="/images/about_us.jpg"
            alt="About Us"
            width={625}
            height={470}
          />
        </div>
      </div>

      <div className="row mx-auto mt-5">
        <div className="col-md-6 mx-auto d-flex justify-content-start ">
          <Image
            className="rounded-5 shadow about-image-h mt-3"
            src="/images/finance.png"
            alt="About Us"
            width={580}
            height={470}
          />
        </div>
        <div className="col-md-6 mx-auto">
          <h1 className="display-4 fw-bold">{t('motto_title')}</h1>
          <p className="lead">
            {t('motto_text')}
          </p>
        </div>
      </div>
    </div>
  );
};
