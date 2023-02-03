import setLanguage from 'next-translate/setLanguage'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import useTranslation from 'next-translate/useTranslation';

export const LanguageSelector = () => {
    const { t } = useTranslation("footer");
    return (
        <div className="d-flex justify-content-center">
            <div className="dropdown">
                <DropdownButton id="dropdown-basic-button" title={t('lang_title')}>
                    <Dropdown.Item onClick={async () => await setLanguage('en')}>{t('lang_en')}</Dropdown.Item>
                    <Dropdown.Item onClick={async () => await setLanguage('nl')}>{t('lang_nl')}</Dropdown.Item>
                    <Dropdown.Item onClick={async () => await setLanguage('es')}>{t('lang_es')}</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    );
}