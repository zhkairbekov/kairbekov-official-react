import { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import './Modal.css';

const Modal = ({ modalId, isOpen, onClose }) => {
    const { t } = useTranslation();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('noscroll');
        } else {
            document.body.classList.remove('noscroll');
        }
        // Добавьте обработчик Esc для закрытия (улучшает UX)
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) document.addEventListener('keydown', handleEsc);
        return () => {
            document.body.classList.remove('noscroll');
            document.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal')) {
            onClose();
        }
    };

    const modalData = {
        myModal1: {
            title: 'Kairbekov official',
            githubUrl: 'https://github.com/zhkairbekov/kairbekov-official-react',
            mockup: '/img/mockup/kairbekov-official.webp',
            content: (
                <>
                    <h2>{t('modal.projects.myModal1.h2')}</h2>
                    <p>
                        <Trans i18nKey="modal.projects.myModal1.p1" components={{ 1: <strong />, 3: <strong /> }} />
                    </p>
                    <p>
                        <Trans i18nKey="modal.projects.myModal1.p2" components={{ 1: <strong /> }} />
                    </p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px' }}>
                        {t('modal.projects.myModal1.features', { returnObjects: true }).map((item, idx) => (
                          <li key={idx}>
                            <Trans i18nKey={`modal.projects.myModal1.features.${idx}`} components={{ 1: <strong /> }} />
                          </li>
                        ))}
                    </ul>
                </>
            ),
        },
        myModal2: {
            title: 'Downtownastana.com',
            siteUrl: 'https://downtownastana.com/',
            mockup: '/img/mockup/downtown_mockup.webp',
            screenshot: '/img/sites/downtown_screenshot.webp',
            content: (
                <>
                    <h2>{t('modal.projects.myModal2.h2')}</h2>
                    <p>
                        <Trans i18nKey="modal.projects.myModal2.p1" components={{ 1: <strong /> }} />
                    </p>
                    <p>
                      <Trans i18nKey="modal.projects.myModal2.p2" components={{ 1: <strong /> }} />
                    </p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        {t('modal.projects.myModal2.features', { returnObjects: true }).map((item, idx) => (
                          <li key={idx}>
                            <Trans i18nKey={`modal.projects.myModal2.features.${idx}`} components={{ 1: <strong />, 3: <strong />, 5: <strong /> }} />
                          </li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
                        {t('modal.projects.myModal2.note')}
                    </p>
                </>
            ),
        },
        myModal3: {
            title: 'Saukele.ru',
            siteUrl: 'https://www.kairbekoff.kz/saukele/',
            githubUrl: 'https://github.com/zhkairbekov/saukele_online-shop',
            mockup: '/img/mockup/image78.webp',
            screenshot: '/img/sites/saukele.webp',
            content: (
                <>
                    <h2>{t('modal.projects.myModal3.h2')}</h2>
                    <p>
                        <Trans i18nKey="modal.projects.myModal3.p1" components={{ 1: <strong />, 3: <strong /> }} />
                    </p>

                    <p>
                      <Trans i18nKey="modal.projects.myModal3.p2" components={{ 1: <strong /> }} />
                    </p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        {t('modal.projects.myModal3.features', { returnObjects: true }).map((item, idx) => (
                          <li key={idx}>
                            <Trans i18nKey={`modal.projects.myModal3.features.${idx}`} components={{ 1: <strong /> }} />
                          </li>
                        ))}
                    </ul>

                    <div style={{
                        marginTop: '15px',
                        padding: '10px',
                        borderLeft: '4px solid #000',
                        backgroundColor: '#eee',
                        fontSize: '0.9rem'
                    }}>
                        <p><strong>{t('modal.projects.myModal3.legalTitle')}</strong></p>
                        <p>
                            <Trans i18nKey="modal.projects.myModal3.legalText" components={{ 1: <strong /> }} />
                        </p>
                    </div>
                </>
            ),
        }, //saukele
        myModal4: {
            title: 'Velobike',
            siteUrl: 'https://kairbekov-velobike.netlify.app/',
            githubUrl: 'https://github.com/zhkairbekov/velobike',
            mockup: '/img/mockup/velobike_mockup.webp',
            screenshot: '/img/sites/velobike_screenshot.jpg',
            content: (
                <>
                    <h2>{t('modal.projects.myModal4.h2')}</h2>
                    <p>
                        <Trans i18nKey="modal.projects.myModal4.p1" components={{ 1: <strong /> }} />
                    </p>

                    <p>
                      <Trans i18nKey="modal.projects.myModal4.p2" components={{ 1: <strong /> }} />
                    </p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        {t('modal.projects.myModal4.features', { returnObjects: true }).map((item, idx) => (
                          <li key={idx}>
                            <Trans i18nKey={`modal.projects.myModal4.features.${idx}`} components={{ 1: <strong /> }} />
                          </li>
                        ))}
                    </ul>

                    <div style={{
                        marginTop: '15px',
                        padding: '10px',
                        borderLeft: '4px solid #f39c12',
                        backgroundColor: '#fff3cd',
                        fontSize: '0.85rem'
                    }}>
                        <strong>{t('modal.projects.myModal4.disclaimerTitle')}</strong> {t('modal.projects.myModal4.disclaimerText')}
                    </div>
                </>
            ),
        },
        myModal5: {
            title: 'Maze Escape game',
            siteUrl: 'https://kairbekov-alem-js-1.netlify.app/',
            githubUrl: 'https://github.com/zhkairbekov/alem-project-js-1',
            mockup: '/img/mockup/maze-escape-game_mockup.webp',
            screenshot: '/img/sites/maze-escape-game_screenshot.webp',
            content: (
                <>
                    <h2>{t('modal.projects.myModal5.h2')}</h2>
                    <p>
                        <Trans i18nKey="modal.projects.myModal5.p1" components={{ 1: <strong /> }} />
                    </p>



                    <p>
                      <Trans i18nKey="modal.projects.myModal5.p2" components={{ 1: <strong /> }} />
                    </p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        {t('modal.projects.myModal5.features', { returnObjects: true }).map((item, idx) => (
                          <li key={idx}>
                            <Trans
                              i18nKey={`modal.projects.myModal5.features.${idx}`}
                              components={{ 1: <strong />, 3: <code />, 5: <code />, 7: <code />, 9: <code /> }}
                            />
                          </li>
                        ))}
                    </ul>

                    <div style={{
                        marginTop: '15px',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #3498db',
                        backgroundColor: '#ebf5fb',
                        fontSize: '0.9rem'
                    }}>
                        <strong>{t('modal.projects.myModal5.csTitle')}</strong>{' '}
                        <Trans i18nKey="modal.projects.myModal5.csText" components={{ 1: <code /> }} />
                    </div>
                </>
            ),
        },
        myModal6: {
            title: 'product-catalog',
            siteUrl: 'https://kairbekov-product-catalog.netlify.app/',
            githubUrl: 'https://github.com/zhkairbekov/product-catalog',
            mockup: '/img/mockup/product-catalog_mockup.webp',
            screenshot: '/img/sites/product-catalog_screenshot.webp',
            content: (
                <>
                    <h2>{t('modal.projects.myModal6.h2')}</h2>
                    <p>
                        <Trans i18nKey="modal.projects.myModal6.p1" components={{ 1: <strong /> }} />
                    </p>

                    <p>
                      <Trans i18nKey="modal.projects.myModal6.p2" components={{ 1: <strong /> }} />
                    </p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        {t('modal.projects.myModal6.features', { returnObjects: true }).map((item, idx) => (
                          <li key={idx}>
                            <Trans i18nKey={`modal.projects.myModal6.features.${idx}`} components={{ 1: <strong />, 3: <em /> }} />
                          </li>
                        ))}
                    </ul>

                    <div style={{
                        marginTop: '15px',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #646cff',
                        backgroundColor: '#f0f1ff',
                        fontSize: '0.9rem'
                    }}>
                        <strong>{t('modal.projects.myModal6.uxTitle')}</strong> {t('modal.projects.myModal6.uxText')}
                    </div>
                </>
            ),
        },
    };

    const data = modalData[modalId];

    return (
        <div className="modal" onClick={handleBackdropClick}>
            <div className="modal-content"> {/* Добавьте class для animation если нужно */}
                <div className="modal-header">
                    <h5 className="modal-title mb-0">{data.title}</h5>
                    <span
                        title={t('modal.closeTitle')}
                        className="closeModal"
                        onClick={onClose}
                        style={{ float: 'right', cursor: 'pointer' }}>&times;
                    </span>
                </div>
                <hr />
                <div className="modal-body">
                    <div className="modal-content-text"> {/* Новая обертка для текста */}
                        {data.content}
                    </div>
                    <div className="modal-buttons"> {/* Новая обертка для кнопок */}
                        {data.siteUrl && (
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.siteUrl}
                                className="pfbutton"
                                aria-label={t('modal.openSiteAria', { title: data.title })}
                            >
                                {t('modal.openSite')}
                            </a>
                        )}
                        {data.githubUrl && (
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.githubUrl}
                                className="pfbutton"
                                aria-label={t('modal.openGithubAria', { title: data.title })}
                            >
                                {t('modal.openGithub')}
                            </a>
                        )}
                    </div>
                    <div className="modal-images"> {/* Новая обертка для изображений */}
                        <img src={data.mockup} alt={t('modal.mockupAlt', { title: data.title })} loading="lazy" />
                        {data.screenshot && (
                          <img src={data.screenshot} alt={t('modal.screenshotAlt', { title: data.title })} loading="lazy" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;