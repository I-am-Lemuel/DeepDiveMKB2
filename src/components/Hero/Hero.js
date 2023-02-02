import useTranslation from "next-translate/useTranslation";



export const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <div className="hero-bg mb-5 d-flex justify-content-center align-items-center">
      <div className="hero-text">
        <h1 className="hero-title">{t('title')}</h1>
        <p className="hero-subtitle">
          {t('subtitle')}
        </p>
      </div>
    </div>
  );
};
