import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      image: '/img/slider/1.webp',
      title: 'Разработка сайта Landing Page',
      description:
        'Создам уникальный, адаптивный и современный сайт с индивидуальным дизайном, направленным на увеличение продаж и привлечение клиентов.',
    },
    // {
    //   id: 2,
    //   image: '/img/slider/2.webp',
    //   title: 'Разработка логотипа',
    //   description:
    //     'Разработаю узнаваемый логотип с уникальной идеей, отражающий ценности вашего бренда и усиливающий визуальный образ компании.',
    // },
    // {
    //   id: 3,
    //   image: '/img/slider/3.webp',
    //   title: 'Оформление презентации',
    //   description:
    //     'Дизайн презентации для бизнеса, выступлений или проектов. Яркий, лаконичный и профессиональный подход к подаче информации.',
    // },
    // {
    //   id: 4,
    //   image: '/img/slider/4.webp',
    //   title: 'Дизайн постера, плаката или афиши',
    //   description:
    //     'Разработка афиш, плакатов и постеров с креативной визуальной подачей для мероприятий, рекламы и проектов.',
    // },
  ];

  return (
    <section className="production__section_4" id="services" aria-label="Услуги по веб-разработке и дизайну">
      <div className="services">
        <div className="container">
          <div className="content">
            <h2 className="title bold">Мои услуги</h2>
            <hr />
            <ul className="yelist w-100" style={{ listStyle: 'none', paddingLeft: 0 }}>
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="https://t.me/kairbekoff"
                    className="i3card"
                    rel="noopener"
                    aria-label={`Заказать ${service.title}`}
                  >
                    <img src={service.image} alt={service.title} className="w-100" loading="lazy" />
                    <h3 className="w-100">{service.title}</h3>
                    <p className="w-100">{service.description}</p>
                    <p className="CHbutton">Заказать</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
