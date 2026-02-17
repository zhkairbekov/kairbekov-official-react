import './Services.css';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true });

  return (
    <section className="production__section_4" id="services" aria-label={t('services.sectionAria')}>
      <div className="services">
        <div className="container">
          <div className="content">
            <h2 className="title bold">{t('services.title')}</h2>
            <hr />
            <ul className="yelist w-100" style={{ listStyle: 'none', paddingLeft: 0 }}>
              {services.map((service, idx) => (
                <li key={service.id ?? idx}>
                  <a
                    href="https://t.me/kairbekoff"
                    className="i3card"
                    rel="noopener"
                    target="_blank"
                    aria-label={t('services.orderAria', { title: service.title })}
                  >
                    <img src={service.image} alt={service.title} className="w-100" loading="lazy" />
                    <h3 className="w-100">{service.title}</h3>
                    <p className="w-100">{service.description}</p>
                    <p className="CHbutton">{t('services.order')}</p>
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
