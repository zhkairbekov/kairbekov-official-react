import './About.css';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="section_3" id="about" aria-label={t('about.sectionAria')}>
            <div className="uslugi">
                <div className="blure w-100 h-100">
                    <div className="container">
                        <div className="content">
                            <h2 className="title bold">{t('about.title')}</h2>
                            <hr />
                            <div className="cards">
                                <div className="Ayleft">
                                    <div>
                                        <img
                                            src="/img/ico/about-title.png"
                                            alt={t('about.aboutIconAlt')}
                                            className="uQabout-title"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="uBabout d-flex">
                                        <div className="title d-flex">
                                            <img src="/img/ico/about.png" alt={t('about.aboutIconSmallAlt')} loading="lazy" />
                                            <h3 className="mb-0">{t('about.aboutTitle')}</h3>
                                        </div>
                                        <ul>
                                            {t('about.aboutText', { returnObjects: true }).map((text, idx) => (
                                              <li key={idx}>
                                                <p>{text}</p>
                                              </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="Ayright">
                                    <div className="uBskills">
                                        <div className="title d-flex">
                                            <img src="/img/ico/skills.png" alt={t('about.skillsIconAlt')} loading="lazy" />
                                            <h3 className="mb-0">{t('about.skillsTitle')}</h3>
                                        </div>
                                        <ul>
                                            {t('about.skillsText', { returnObjects: true }).map((text, idx) => (
                                              <li key={idx}>
                                                <p>
                                                  <Trans i18nKey={`about.skillsText.${idx}`} components={{ strong: <strong /> }} />
                                                </p>
                                              </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="uBexperience">
                                        <div className="title d-flex">
                                            <img src="/img/ico/experience.png" alt={t('about.projectsIconAlt')} loading="lazy" />
                                            <h3 className="mb-0">{t('about.projectsTitle')}</h3>
                                        </div>
                                        <ul>
                                            {t('about.projectsText', { returnObjects: true }).map((text, idx) => (
                                              <li key={idx}>
                                                <p>
                                                  <Trans i18nKey={`about.projectsText.${idx}`} components={{ strong: <strong /> }} />
                                                </p>
                                              </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
