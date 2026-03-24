import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import './Portfolio.css';

const Portfolio = () => {
    const [openModal, setOpenModal] = useState(null);
    const { t } = useTranslation();

    const projects = t('portfolio.projects', { returnObjects: true });

    return (
        <>
            <section className="section_4" id="portfolio" aria-label={t('portfolio.sectionAria')}>
                <div className="sites">
                    <div className="blure w-100 h-100">
                        <div className="container">
                            <div className="content">
                                <h2 className="title bold">{t('portfolio.title')}</h2>
                                <hr />
                                <ul className="tgcards w-100" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {projects.map((project) => (
                                        <li key={project.id}>
                                            <button
                                                className="tgcard openModal"
                                                onClick={() => setOpenModal(project.id)}
                                                aria-label={t('portfolio.openProjectAria', { title: project.title })}
                                                type="button" // важно!
                                            >
                                                <img src={project.image} alt={project.alt} loading="lazy" />
                                                <h4>{project.title}</h4>
                                                <p className="jvbutton">{t('portfolio.viewProject')}</p>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {openModal && (
                <Modal
                    modalId={openModal}
                    isOpen={true}
                    onClose={() => setOpenModal(null)}
                />
            )}
        </>
    );
};

export default Portfolio;