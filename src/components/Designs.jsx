import './Designs.css';

const Designs = () => {
  const designs = [
    {
      id: 1,
      image: '/img/designs/di.webp',
      alt: 'Афиша мероприятия «Презентация премиального клуба ФЕНИКС»',
      title: 'Афиша мероприятия «Презентация премиального клуба ФЕНИКС»',
    },
    {
      id: 2,
      image: '/img/designs/Айлин.webp',
      alt: 'Витринный баннер для салона люксовой национальной одежды «Айлин»',
      title: (
        <>
          Витринный баннер для салона «Айлин»
          <br />
          <a href="https://www.instagram.com/ailin_etno" target="_blank" rel="noopener noreferrer">
            @ailin_etno
          </a>
        </>
      ),
    },
    {
      id: 3,
      image: '/img/designs/1.webp',
      alt: 'Карточка открытия наставничества для Арины Чумак',
      title: (
        <>
          Карточка открытия наставничества для Арины Чумак
          <br />
          <a href="https://www.instagram.com/chumak_arina" target="_blank" rel="noopener noreferrer">
            @chumak_arina
          </a>
        </>
      ),
    },
    {
      id: 4,
      image: '/img/designs/Frame411.webp',
      alt: 'Карточка афиши вебинара для Салии Днищевой',
      title: (
        <>
          Карточка афиши вебинара для Салии Днищевой
          <br />
          <a href="https://www.instagram.com/mrs_saliya" target="_blank" rel="noopener noreferrer">
            @mrs_saliya
          </a>
        </>
      ),
    },
    {
      id: 5,
      image: '/img/designs/Тлегенова-Алтын.webp',
      alt: 'Логотип для Тлегенова Алтын',
      title: (
        <>
          Логотип для Тлегенова Алтын
          <br />
          <a href="https://www.instagram.com/tlegenova_altyn_" target="_blank" rel="noopener noreferrer">
            @tlegenova_altyn_
          </a>
        </>
      ),
    },
    {
      id: 6,
      image: '/img/designs/Алина-Малина.webp',
      alt: 'Логотип для бренда Алина-Малина',
      title: (
        <>
          Логотип для Алина-Малина
          <br />
          <a href="https://www.instagram.com/malina_alii" target="_blank" rel="noopener noreferrer">
            @malina_alii
          </a>
        </>
      ),
    },
    {
      id: 7,
      image: '/img/designs/Инстасибирь.webp',
      alt: 'Афиша крупного мероприятия Инстасибирь',
      title: (
        <>
          Афиша крупного мероприятия Инстасибирь
          <br />
          <a href="https://www.instagram.com/mrs_saliya" target="_blank" rel="noopener noreferrer">
            @mrs_saliya
          </a>
          <br />
          <a href="https://www.instagram.com/tatiana.kush" target="_blank" rel="noopener noreferrer">
            @tatiana.kush
          </a>
        </>
      ),
    },
    {
      id: 8,
      image: '/img/designs/Отчетныйконцерт2023.webp',
      alt: 'Афиша отчётного концерта коллектива Ажар «Навстречу солнцу»',
      title: 'Афиша концерта коллектива «Ажар» — Навстречу солнцу!',
    },
    {
      id: 9,
      image: '/img/designs/15декабряконцерт.webp',
      alt: 'Афиша концерта «Искусство объединяет сердца» с приглашением Нурлана Алимжанова',
      title: 'Афиша концерта «Искусство объединяет сердца»',
    },
    {
      id: 10,
      image: '/img/designs/Предметка.webp',
      alt: 'Дизайн карточки товара для площадок Ozon и Wildberries',
      title: 'Дизайн карточки товара для Ozon и Wildberries',
    },
  ];

  return (
    <section className="section_5" id="designs" aria-label="Портфолио дизайн-проектов">
      <div className="designs">
        <div className="container">
          <div className="content">
            <h2 className="title bold">Мои дизайн проекты</h2>
            <hr />
            <ul className="Tdcards w-100" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {designs.map((design) => (
                <li key={design.id}>
                  <figure className="Tdcard">
                    <img src={design.image} alt={design.alt} loading="lazy" />
                    <figcaption>
                      <h4>{design.title}</h4>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designs;
