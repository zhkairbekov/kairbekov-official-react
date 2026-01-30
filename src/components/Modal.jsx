import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ modalId, isOpen, onClose }) => {
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
                    <h2>🚀 Персональный веб-сайт-портфолио</h2>
                    <p>
                        Современное Single Page Application (SPA), переработанное с классического стека на
                        мощную связку <strong>React 18</strong> и <strong>Vite</strong>.
                    </p>
                    <p>
                        <strong>Ключевые особенности обновления:</strong>
                    </p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Компонентная архитектура для легкой поддержки кода.</li>
                        <li>Использование <strong>React Hooks</strong> (useState, useEffect) для управления состоянием и анимациями.</li>
                        <li>Оптимизированная сборка через Vite для мгновенной загрузки.</li>
                        <li>Интерактивный <strong>Custom Cursor</strong> и сложные CSS-эффекты.</li>
                        <li>Полная адаптивность и автоматизированный деплой через <strong>Netlify</strong>.</li>
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
                    <h2>🛍️ Saukele.ru — E-commerce экосистема</h2>
                    <p>
                        Высокотехнологичный интернет-магазин национальных аксессуаров, построенный на базе
                        фреймворка <strong>Laravel</strong>. Проект ориентирован на производительность и удобство управления.
                    </p>

                    <p><strong>Технические особенности:</strong></p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        <li><strong>Инфраструктура:</strong> Полная контейнеризация через <strong>Docker</strong> и <strong>Docker Compose</strong>.</li>
                        <li><strong>Автоматизация:</strong> Управление проектом через <strong>Makefile</strong> (сборка, миграции, деплой одной командой).</li>
                        <li><strong>Админ-панель:</strong> Интеграция <strong>Filament PHP</strong> для быстрого и мощного управления контентом и заказами.</li>
                        <li><strong>Хранилище:</strong> Настроенная система <strong>Storage Link</strong> для работы с медиафайлами и оптимизация изображений.</li>
                        <li><strong>Backend:</strong> Сложные SQL-миграции, кастомные Artisan-команды и очереди задач (Queues) для обработки фоновых процессов.</li>
                    </ul>

                    <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
                        Проект демонстрирует навыки создания масштабируемых backend-систем с использованием современных стандартов разработки.
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
                    <h2>🛍️ Saukele Online Shop</h2>
                    <p>
                        Профессиональное <strong>E-commerce</strong> решение, разработанное для Омской региональной общественной организации <strong>«Казахи Омска»</strong>.
                        Сайт представляет собой полноценную платформу для реализации продукции с национальным колоритом.
                    </p>

                    <p><strong>Технические характеристики:</strong></p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        <li>Разработано на базе мощного PHP-фреймворка <strong>Laravel</strong>.</li>
                        <li>Использование шаблонизатора <strong>Blade</strong> для создания динамических и быстрых интерфейсов.</li>
                        <li>Архитектура включает защищенную систему управления корзиной и заказами.</li>
                        <li>Собственный уникальный дизайн, адаптированный под брендинг организации.</li>
                    </ul>

                    <div style={{
                        marginTop: '15px',
                        padding: '10px',
                        borderLeft: '4px solid #000',
                        backgroundColor: '#eee',
                        fontSize: '0.9rem'
                    }}>
                        <p><strong>Правовая информация:</strong></p>
                        <p>
                            Проект является интеллектуальной собственностью. Авторские права на программный код и дизайн принадлежат разработчику
                            <strong> Каирбекову Жанату</strong>. Заказчик: ОРОО «Казахи Омска».
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
                    <h2>🚲 Velobike.kz — Adaptive Clone</h2>
                    <p>
                        Детальная реплика популярного сервиса проката велосипедов, выполненная в рамках учебного проекта.
                        Основной упор сделан на <strong>pixel-perfect</strong> верстку и чистый пользовательский опыт.
                    </p>

                    <p><strong>Реализованный функционал:</strong></p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        <li><strong>Multilingual:</strong> Полноценная поддержка русского и казахского языков через независимые структуры.</li>
                        <li><strong>Custom JS:</strong> Самописный слайдер, адаптивное бургер-меню и интерактивные выпадающие списки (dropdown).</li>
                        <li><strong>Layout:</strong> Сложная адаптивная сетка, корректно работающая на всех типах устройств (Mobile First).</li>
                        <li><strong>Performance:</strong> Полностью статический проект с оптимизированными ассетами для мгновенной загрузки.</li>
                    </ul>

                    <div style={{
                        marginTop: '15px',
                        padding: '10px',
                        borderLeft: '4px solid #f39c12',
                        backgroundColor: '#fff3cd',
                        fontSize: '0.85rem'
                    }}>
                        <strong>Disclaimer:</strong> Проект создан исключительно в образовательных целях для демонстрации навыков верстки.
                        Все права на контент и бренд принадлежат оригинальному сервису Velobike.kz.
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
                    <h2>🧩 The Maze Escape: Алгоритмический визуализатор</h2>
                    <p>
                        Интерактивное приложение для визуализации алгоритма <strong>BFS (Breadth-First Search)</strong>.
                        Проект решает задачу поиска кратчайшего пути в лабиринте, демонстрируя пошаговую работу логики.
                    </p>



                    <p><strong>Технические детали:</strong></p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        <li><strong>Algorithm:</strong> Поиск в ширину (BFS), гарантирующий нахождение кратчайшего пути в невзвешенном графе.</li>
                        <li><strong>Data Structure:</strong> Использование очередей (Queue) и родительских узлов для эффективного восстановления пути.</li>
                        <li><strong>Visualization:</strong> Пошаговое изменение состояний матрицы: <code>0</code> (свободно), <code>1</code> (стена), <code>2</code> (посещено), <code>3</code> (финальный путь).</li>
                        <li><strong>Scalability:</strong> Обработка различных типов карт — от простых 5x5 до сложных лабиринтов 30x30.</li>
                    </ul>

                    <div style={{
                        marginTop: '15px',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #3498db',
                        backgroundColor: '#ebf5fb',
                        fontSize: '0.9rem'
                    }}>
                        <strong>💡 Computer Science Case:</strong> Данный проект демонстрирует навыки работы с графами, понимание временной сложности <code>O(V + E)</code> и умение перекладывать математические абстракции в визуальный интерфейс.
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
                    <h2>🛒 Современный каталог товаров</h2>
                    <p>
                        Динамическое веб-приложение, демонстрирующее продвинутую работу с <strong>React</strong> и
                        библиотеками анимаций. Проект интегрирован с внешним API для получения актуальных данных о товарах.
                    </p>

                    <p><strong>Технологический стек и решения:</strong></p>
                    <ul style={{ color: '#000', paddingLeft: '20px', marginTop: '10px', listStyle: 'disc' }}>
                        <li><strong>Framer Motion:</strong> Реализованы сложные оркестрованные анимации (постепенное появление списка, плавные переходы при фильтрации и интерактивные hover-эффекты).</li>
                        <li><strong>API Integration:</strong> Асинхронное взаимодействие с <em>FakeStoreAPI</em> через Fetch API с обработкой состояний загрузки (Loader) и ошибок.</li>
                        <li><strong>SCSS & БЭМ:</strong> Строгая модульная архитектура стилей по методологии БЭМ, обеспечивающая масштабируемость и чистоту кода.</li>
                        <li><strong>Responsive Design:</strong> Адаптивная сетка, оптимизированная под все типы экранов — от смартфонов до широкоформатных мониторов.</li>
                    </ul>

                    <div style={{
                        marginTop: '15px',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #646cff',
                        backgroundColor: '#f0f1ff',
                        fontSize: '0.9rem'
                    }}>
                        <strong>✨ UX/UI Focus:</strong> Особое внимание уделено микровзаимодействиям и состояниям интерфейса (Empty states, Loading skeleton), что создает ощущение дорогого и качественного продукта.
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
                        title="Закрыть"
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
                                aria-label={`Открыть сайт ${data.title}`}
                            >
                                Открыть сайт
                            </a>
                        )}
                        {data.githubUrl && (
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={data.githubUrl}
                            className="pfbutton"
                            aria-label={`Открыть GitHub репозиторий проекта ${data.title}`}
                        >
                            Открыть github проекта
                        </a>
                        )}
                    </div>
                    <div className="modal-images"> {/* Новая обертка для изображений */}
                        <img src={data.mockup} alt={`Мокап ${data.title}`} loading="lazy" />
                        {data.screenshot && <img src={data.screenshot} alt={`Скриншоты ${data.title}`} loading="lazy" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;