import { useState } from 'react';
import Modal from './Modal';
import './Portfolio.css';

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(null);

  const projects = [
    {
      id: 'myModal1',
      title: 'Saukele.ru',
      image: '/img/mockup/image78.webp',
      alt: 'Главная страница сайта Saukele.ru — магазин национальных аксессуаров',
    },
    {
      id: 'myModal2',
      title: 'Библиотека на JS',
      image: '/img/mockup/library.webp',
      alt: 'Интерфейс сайта цифровой библиотеки на JavaScript',
    },
    {
      id: 'myModal3',
      title: 'Культурный Каталог Казахстана',
      image: '/img/mockup/locations.webp',
      alt: 'Главная страница каталога культурных мест Казахстана',
    },
    {
      id: 'myModal4',
      title: 'Kairbekov official',
      image: '/img/mockup/kairbekov-official.webp',
      alt: 'Превью персонального сайта Kairbekov Official',
    },
  ];

  return (
    <>
      <section className="section_4" id="portfolio" aria-label="Портфолио сайтов">
        <div className="sites">
          <div className="blure w-100 h-100">
            <div className="container">
              <div className="content">
                <h2 className="title bold">Мои сайты</h2>
                <hr />
                <ul className="tgcards w-100" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {projects.map((project) => (
                    <li key={project.id}>
                      <a
                        className="tgcard openModal"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenModal(project.id);
                        }}
                        aria-label={`Открыть проект ${project.title}`}
                      >
                        <img src={project.image} alt={project.alt} loading="lazy" />
                        <h4>{project.title}</h4>
                        <p className="jvbutton">Посмотреть проект</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal modalId="myModal1" isOpen={openModal === 'myModal1'} onClose={() => setOpenModal(null)} />
      <Modal modalId="myModal2" isOpen={openModal === 'myModal2'} onClose={() => setOpenModal(null)} />
      <Modal modalId="myModal3" isOpen={openModal === 'myModal3'} onClose={() => setOpenModal(null)} />
      <Modal modalId="myModal4" isOpen={openModal === 'myModal4'} onClose={() => setOpenModal(null)} />
    </>
  );
};

export default Portfolio;
