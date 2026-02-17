import { useTranslation } from 'react-i18next';

const Hero = ({ showTopElements }) => {
  const { t } = useTranslation();

  return (
    <section className="section_1" id="start_window" aria-label={t('hero.sectionAria')}>
      <div className="start_window">
        <div className="blure vh-100 vw-100">
          <div className="container">
            <div className="content" role="banner">
              <img
                src="/img/me.webp"
                alt={t('hero.photoAlt')}
                id="top_zhan"
                className={`top-zhan ${!showTopElements ? 'd-none' : ''}`}
                fetchpriority="high"
                decoding="async"
              />
              <img
                src="/img/ico/top-logo.png"
                alt={t('hero.topLogoAlt')}
                id="top_logo"
                className={`top-logo ${!showTopElements ? 'd-none' : ''}`}
                fetchpriority="high"
                decoding="async"
              />
              <div className="text z-index-100">
                <h1 className="monoton-regular">KAIRBEKOV</h1>
                <p className="akony-font">
                  {t('hero.taglineLine1')}
                  <br />
                  {t('hero.taglineLine2')}
                </p>
                <a
                  rel="noopener noreferrer"
                  href="#services"
                  className="btn-order"
                  aria-label={t('hero.orderAria')}
                >
                  {t('hero.order')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
