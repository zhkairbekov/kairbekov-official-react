import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ modalId, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }

    return () => {
      document.body.classList.remove('noscroll');
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
      title: 'Saukele.ru',
      siteUrl: 'https://www.kairbekoff.kz/saukele/',
      githubUrl: 'https://github.com/123456789255/saukele_online-shop',
      mockup: '/img/mockup/image78.webp',
      screenshot: '/img/sites/saukele.webp',
      content: (
        <>
          <h2>🛍️ Saukele.ru</h2>
          <p>
            <strong>Saukele.ru</strong> — это веб-приложение электронной коммерции, разработанное с
            использованием фреймворка Laravel и шаблонизатора Blade. Проект предоставляет функциональность для
            просмотра товаров, управления корзиной и оформления заказов.
          </p>
        </>
      ),
    },
    myModal2: {
      title: 'Цифровая библиотека на JS',
      siteUrl: 'https://kairbekov-kazah-library.netlify.app/',
      githubUrl: 'https://github.com/123456789255/kazakh-library',
      mockup: '/img/mockup/library.webp',
      screenshot: '/img/sites/library.webp',
      content: (
        <>
          <h2>📚 Цифровая библиотека казахстанской литературы</h2>
          <p>
            Веб-сервис для чтения, скачивания и обсуждения книг казахстанских авторов. Поддержка
            администрирования и отзывов, онлайн-чтение и фильтрация по жанрам, языку, году издания и другим
            параметрам.
          </p>
        </>
      ),
    },
    myModal3: {
      title: 'Культурный Каталог Казахстана',
      siteUrl: 'https://kazakhstan-project.netlify.app',
      githubUrl: 'https://github.com/123456789255/kazakhstan-project',
      mockup: '/img/mockup/locations.webp',
      screenshot: '/img/sites/kazahLocations.webp',
      content: (
        <>
          <h2>🇰🇿 Культурный Каталог Казахстана</h2>
          <p>
            Адаптивный веб-каталог культурных достопримечательностей Казахстана с интерактивными функциями:
            фильтрацией, избранным, отзывами, афишей мероприятий и блогом о культуре.
          </p>
        </>
      ),
    },
    myModal4: {
      title: 'Kairbekov official',
      githubUrl: 'https://github.com/123456789255/kairbekov-official',
      mockup: '/img/mockup/kairbekov-official.webp',
      content: (
        <>
          <h2>Персональный веб-сайт-портфолио</h2>
          <p>
            Адаптивный и современный персональный сайт-портфолио, созданный с использованием{' '}
            <strong>HTML</strong>, <strong>CSS</strong> и <strong>JavaScript</strong>. Проект разработан для
            представления информации о себе, своих услугах, проектах, навыках и контактах.
          </p>
        </>
      ),
    },
  };

  const data = modalData[modalId];

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">{data.title}</h5>
          <span
            title="Закрыть"
            className="closeModal"
            onClick={onClose}
            style={{ float: 'right', cursor: 'pointer' }}
          >
            &times;
          </span>
        </div>
        <hr />
        <div className="modal-body">
          {data.siteUrl && (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={data.siteUrl}
              className="pfbutton"
              aria-label={`Открыть сайт ${data.title}`}
            >
              Открыть сайт
            </a>
          )}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={data.githubUrl}
            className="pfbutton"
            aria-label={`Открыть GitHub репозиторий проекта ${data.title}`}
          >
            Открыть github проекта
          </a>
          <div className="container">
            <div className="modal-locations">{data.content}</div>
          </div>
          <img src={data.mockup} alt={`Мокап ${data.title}`} loading="lazy" />
          {data.screenshot && <img src={data.screenshot} alt={`Скриншоты ${data.title}`} loading="lazy" />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
