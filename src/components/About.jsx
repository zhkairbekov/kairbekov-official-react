import './About.css';

const About = () => {
  return (
    <section className="section_3" id="about" aria-label="Обо мне и моих навыках">
      <div className="uslugi">
        <div className="blure w-100 h-100">
          <div className="container">
            <div className="content">
              <h2 className="title bold">Привет, меня зовут Жанат Каирбеков</h2>
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
                          Я — начинающий frontend-разработчик, выпускник ОмАЭиП по специальности
                          «Информационные системы и программирование».
                        </p>
                      </li>
                      <li>
                        <p>
                          Сейчас обучаюсь в Alem School (Astana Hub), работаю над pet-проектами и прокачиваю стек:
                          JavaScript, TypeScript, React.
                        </p>
                      </li>
                      <li>
                        <p>
                          Веду персональный сайт и портфолио, участвую в учебных и личных проектах, осваиваю Go и
                          backend-навыки для расширения компетенций.
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
                          <strong>Frontend:</strong> HTML5, CSS3 (Vanilla, SCSS, Bootstrap, Tailwind), JavaScript,
                          TypeScript, React.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Backend:</strong> Go, PHP (Laravel), базовые знания Python.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Дизайн:</strong> Figma, базовые навыки Adobe Photoshop.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Другое:</strong> SEO-оптимизация, адаптивная и кроссбраузерная верстка,
                          оптимизация производительности сайтов.
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
                          <strong>Kairbekov Official:</strong> персональный сайт с кастомными UI-эффектами, SEO и
                          оптимизацией.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Saukele:</strong> дипломный проект на Laravel (полный цикл от дизайна до backend).
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Velobike (клон):</strong> адаптивная версия оригинального сайта velobike.kz.
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
