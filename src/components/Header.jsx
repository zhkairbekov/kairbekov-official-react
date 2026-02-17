import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../i18n';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsHighlighted(scrollY >= window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('noscroll');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('noscroll');
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    const element = document.getElementById(sectionId);
    if (!element) return;

    const screenWidth = window.innerWidth;
    let offset = -55;
    
    if (screenWidth <= 768) {
      offset = -53;
    } else if (screenWidth <= 1199) {
      offset = -78;
    }

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header 
      id="header" 
      className={`section_2 w-100 pt-4 pb-4 z-index-100 ${isHighlighted ? 'highlight' : ''} ${isMenuOpen ? 'header-fixed' : ''}`}
    >
      <div className="container">
        <nav className="navbar" role="navigation" aria-label={t('header.navAria')}>
          <div className="container w-100">
            <div className="Rfwrap w-100">
              <a 
                href="#wrapper" 
                className="logo" 
                aria-label={t('header.logoAria')}
                onClick={(e) => scrollToSection(e, 'wrapper')}
              >
                <img className="SUlogo" src="/img/ico/logo.png" alt={t('header.logoAlt')} />
              </a>

              <div className="hamb">
                <button
                  className={`ggfield ${isMenuOpen ? 'active' : ''}`}
                  id="hamb"
                  aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
                  aria-controls="menu"
                  aria-expanded={isMenuOpen}
                  onClick={toggleMenu}
                >
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </button>
              </div>

              <ul className="menu justify-content-end" id="menu">
                <li className="text-15px">
                  <a className="link" href="#wrapper" onClick={(e) => scrollToSection(e, 'wrapper')}>
                    {t('header.menu.home')}
                  </a>
                </li>
                <li className="text-15px">
                  <a className="resources link" href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                    {t('header.menu.about')}
                  </a>
                </li>
                <li className="text-15px">
                  <a className="services link" href="#services" onClick={(e) => scrollToSection(e, 'services')}>
                    {t('header.menu.services')}
                  </a>
                </li>
                <li className="text-15px">
                  <a className="services link" href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>
                    {t('header.menu.sites')}
                  </a>
                </li>
                {/*<li className="text-15px">*/}
                {/*  <a className="services link" href="#designs" onClick={(e) => scrollToSection(e, 'designs')}>*/}
                {/*    Дизайны*/}
                {/*  </a>*/}
                {/*</li>*/}
                <li className="text-15px">
                  <a className="about link" href="#licenses" onClick={(e) => scrollToSection(e, 'licenses')}>
                    {t('header.menu.certs')}
                  </a>
                </li>
                <li className="text-15px">
                  <a className="about link" href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')}>
                    {t('header.menu.contacts')}
                  </a>
                </li>

                <li className="text-15px" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button
                    type="button"
                    className="link"
                    onClick={() => changeLanguage('ru')}
                    aria-label={t('lang.ru')}
                    style={{ opacity: (i18n.resolvedLanguage || i18n.language) === 'ru' ? 1 : 0.6 }}
                  >
                    {t('lang.ru')}
                  </button>
                  <button
                    type="button"
                    className="link"
                    onClick={() => changeLanguage('kk')}
                    aria-label={t('lang.kk')}
                    style={{ opacity: (i18n.resolvedLanguage || i18n.language) === 'kk' ? 1 : 0.6 }}
                  >
                    {t('lang.kk')}
                  </button>
                  <button
                    type="button"
                    className="link"
                    onClick={() => changeLanguage('en')}
                    aria-label={t('lang.en')}
                    style={{ opacity: (i18n.resolvedLanguage || i18n.language) === 'en' ? 1 : 0.6 }}
                  >
                    {t('lang.en')}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className={`popup ${isMenuOpen ? 'open' : ''}`} id="popup">
          <ul className="menu">
            <li className="text-15px">
              <a className="link" href="#wrapper" onClick={(e) => scrollToSection(e, 'wrapper')}>
                {t('header.menu.home')}
              </a>
            </li>
            <li className="text-15px">
              <a className="resources link" href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                {t('header.menu.about')}
              </a>
            </li>
            <li className="text-15px">
              <a className="services link" href="#services" onClick={(e) => scrollToSection(e, 'services')}>
                {t('header.menu.services')}
              </a>
            </li>
            <li className="text-15px">
              <a className="services link" href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>
                {t('header.menu.sites')}
              </a>
            </li>
            {/*<li className="text-15px">*/}
            {/*  <a className="services link" href="#designs" onClick={(e) => scrollToSection(e, 'designs')}>*/}
            {/*    Дизайны*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className="text-15px">
              <a className="about link" href="#licenses" onClick={(e) => scrollToSection(e, 'licenses')}>
                {t('header.menu.certs')}
              </a>
            </li>
            <li className="text-15px">
              <a className="about link" href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')}>
                {t('header.menu.contacts')}
              </a>
            </li>

            <li className="text-15px" style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                className="link"
                onClick={() => changeLanguage('ru')}
                aria-label={t('lang.ru')}
                style={{ opacity: (i18n.resolvedLanguage || i18n.language) === 'ru' ? 1 : 0.6 }}
              >
                {t('lang.ru')}
              </button>
              <button
                type="button"
                className="link"
                onClick={() => changeLanguage('kk')}
                aria-label={t('lang.kk')}
                style={{ opacity: (i18n.resolvedLanguage || i18n.language) === 'kk' ? 1 : 0.6 }}
              >
                {t('lang.kk')}
              </button>
              <button
                type="button"
                className="link"
                onClick={() => changeLanguage('en')}
                aria-label={t('lang.en')}
                style={{ opacity: (i18n.resolvedLanguage || i18n.language) === 'en' ? 1 : 0.6 }}
              >
                {t('lang.en')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
