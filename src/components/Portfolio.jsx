import {useState} from 'react';
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
                                <hr/>
                                <ul className="tgcards w-100" style={{listStyle: 'none', padding: 0, margin: 0}}>
                                    {projects.map((project) => (
                                        <li key={project.id}>
                                            <a
                                                className="tgcard openModal"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setOpenModal(project.id);
                                                }}
                                                aria-label={t('portfolio.openProjectAria', { title: project.title })}>
                                                <img src={project.image} alt={project.alt} loading="lazy"/>
                                                <h4>{project.title}</h4>
                                                <p className="jvbutton">{t('portfolio.viewProject')}</p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Заменяем кучу строк на одну универсальную */}
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
