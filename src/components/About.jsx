import './About.css';

const About = () => {
    return (
        <section className="section_3" id="about" aria-label="Обо мне и моих навыках">
            <div className="uslugi">
                <div className="blure w-100 h-100">
                    <div className="container">
                        <div className="content">
                            <h2 className="title bold">Привет — я Жанат Каирбеков</h2>
                            <hr />
                            <div className="cards">
                                <div className="Ayleft">
                                    <div>
                                        <img
                                            src="/img/ico/about-title.png"
                                            alt="Иконка раздела 'Обо мне'"
                                            className="uQabout-title"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="uBabout d-flex">
                                        <div className="title d-flex">
                                            <img src="/img/ico/about.png" alt="Иконка 'Обо мне'" loading="lazy" />
                                            <h3 className="mb-0">Обо мне</h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <p>
                                                    Я — frontend‑разработчик (junior), выпускник ОмАЭиП по специальности «Информационные
                                                    системы и программирование». Работаю с современным стеком фронтенда и постоянно
                                                    расширяю навыки в backend-направлении.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Сейчас учусь в Alem School (Astana Hub), реализую pet‑проекты и прокачиваю стек: JavaScript,
                                                    TypeScript, React. Параллельно изучаю Go для серверной разработки.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Недавно разработал сайт для бизнес‑центра Downtown Astana и имею опыт создания адаптивных
                                                    интерфейсов с упором на производительность и SEO. Открыт к сотрудничеству и фриланс‑заказам.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="Ayright">
                                    <div className="uBskills">
                                        <div className="title d-flex">
                                            <img src="/img/ico/skills.png" alt="Иконка 'Навыки'" loading="lazy" />
                                            <h3 className="mb-0">Навыки</h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <p>
                                                    <strong>Frontend:</strong> HTML5, CSS3 (vanilla, SCSS), адаптивная и кроссбраузерная верстка,
                                                    JavaScript (ES6+), TypeScript, React (hooks, routing), Vite, Webpack, Git.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <strong>Инструменты и экосистема:</strong> Figma, npm, REST API, работа с формами и валидцией,
                                                    оптимизация загрузки, базовые навыки CI/CD.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <strong>Backend / другое:</strong> Go, PHP (Laravel), базовые знания Node.js и SQL — для
                                                    полноценной работы над полнофункциональными приложениями.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <strong>Другое:</strong> SEO‑оптимизация, производительность, доступность (a11y),
                                                    аналитика и мониторинг ошибок.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="uBexperience">
                                        <div className="title d-flex">
                                            <img src="/img/ico/experience.png" alt="Иконка 'Опыт'" loading="lazy" />
                                            <h3 className="mb-0">Проекты</h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <p>
                                                    <strong>Kairbekov Official:</strong> персональный сайт с кастомными UI‑эффектами, адаптивной
                                                    версткой и SEO‑оптимизацией.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <strong>Downtown Astana:</strong> сайт для бизнес‑центра — адаптивный дизайн, оптимизация
                                                    изображений и улучшение скорости загрузки.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <strong>Saukele:</strong> дипломный проект на Laravel — полный цикл: дизайн, реализация backend,
                                                    интеграция с базой данных.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <strong>Velobike (клон):</strong> адаптивная копия сайта velobike.kz — внимательная работа с
                                                    сетками и мобильной версией.
                                                </p>
                                            </li>
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
