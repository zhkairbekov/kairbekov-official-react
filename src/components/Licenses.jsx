import './Licenses.css';

const Licenses = () => {
  const licenses = [
    {
      id: 1,
      pdf: '/img/license/pdf/Контент-менеджер.pdf',
      image: '/img/license/contentManager.png',
      alt: 'Сертификат о прохождении курса контент-менеджера – повышение квалификации',
      caption: 'Сертификат «Контент-менеджер»: управление контентом, продвижение и маркетинг',
    },
    {
      id: 2,
      pdf: '/img/license/pdf/Администратор-базовый.pdf',
      image: '/img/license/adminBase.png',
      alt: 'Базовый сертификат администратора сайта – основы администрирования',
      caption:
        'Сертификат «Администратор базового уровня»: навыки работы с сайтами и системами управления',
    },
  ];

  return (
    <section className="licenses container" id="licenses">
      <h2 className="title bold">Мои сертификаты и подтверждения квалификации</h2>
      <hr />
      <div className="licence">
        {licenses.map((license) => (
          <figure key={license.id}>
            <a href={license.pdf} rel="noopener noreferrer" target="_blank">
              <img src={license.image} alt={license.alt} loading="lazy" />
              <figcaption>{license.caption}</figcaption>
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Licenses;
