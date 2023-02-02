import useTranslation from "next-translate/useTranslation";

export default function Documentation() {
    const { t } = useTranslation('documentation');
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mt-5">{t('docs_title')}</h1>
                        <p>{t('docs_subtext')}</p>

                        <h2>{t('about_title')}</h2>
                        <ul>
                            <li>{t('about_sub_1')}</li>
                            <li>{t('about_sub_2')}</li>
                            <li>{t('about_sub_3')}</li>
                        </ul>

                        <h2>{t('services_title')}</h2>
                        <ul>
                            <li>{t('services_sub_1')}</li>
                            <li>{t('services_sub_2')}</li>
                            <li>{t('services_sub_3')}</li>
                        </ul>

                        <h2>{t('benefits_title')}</h2>
                        <ul>
                            <li>{t('benefits_sub_1')}</li>
                            <li>{t('benefits_sub_2')}</li>
                            <li>{t('benefits_sub_3')}</li>
                        </ul>

                        <h2>{t('contact_title')}</h2>
                        <p>{t('contact_sub_1')}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
