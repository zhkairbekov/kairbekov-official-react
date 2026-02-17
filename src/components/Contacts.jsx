import './Contacts.css';
import { Trans, useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <footer className="section_6" id="contacts" aria-label={t('contacts.sectionAria')}>
      <div className="about_contacts">
        <div className="blure w-100 h-100 d-flex flex-column">
          <div className="container w-100">
            <div className="content w-100">
              <h2 className="title bold">{t('contacts.title')}</h2>
              <hr />
              <address className="bttext w-100">
                <a
                  href="https://github.com/zhkairbekov"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contact_1 lkpoint d-flex"
                  title={t('contacts.githubTitle')}
                >
                  <img
                    src="/img/ico/github.png"
                    alt={t('contacts.githubAlt')}
                    loading="lazy"
                  />
                  <p>GitHub: zhkairbekov</p>
                </a>
                <a
                  href="https://wa.me/77053062873"
                  target="_blank"
                  className="contact_1 lkpoint d-flex"
                  title={t('contacts.whatsappTitle')}
                >
                  <img
                    src="/img/ico/kazakhstan.png"
                    alt={t('contacts.whatsappAlt')}
                    loading="lazy"
                  />
                  <p>+7 (705) 306 28-73</p>
                </a>
                <a
                  href="https://t.me/kairbekoff"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contact_2 lkpoint d-flex"
                  title={t('contacts.telegramTitle')}
                >
                  <img src="/img/ico/telegram.png" alt={t('contacts.telegramAlt')} loading="lazy" />
                  <p>Telegram: @kairbekoff</p>
                </a>
                <a
                  href="https://www.instagram.com/kairbekov.official"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contact_3 lkpoint d-flex"
                  title={t('contacts.instagramTitle')}
                >
                  <img
                    src="/img/ico/instagram.png"
                    alt={t('contacts.instagramAlt')}
                    loading="lazy"
                  />
                  <p>Instagram: @kairbekov.official</p>
                </a>
              </address>
            </div>
            <div id="footer">
              <div className="iwcontent flex-column">
                {/*<p>*/}
                {/*  Meta Platforms Inc. (Facebook, Instagram) признана экстремистской организацией в РФ, её*/}
                {/*  деятельность запрещена.*/}
                {/*</p>*/}
                <a
                  href="https://www.instagram.com/kairbekov.official"
                  rel="noopener noreferrer"
                  target="_blank"
                  title={t('contacts.footerTitle')}
                >
                  <Trans i18nKey="contacts.footerCopyright" components={{ 1: <span /> }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contacts;
