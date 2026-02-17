import './Licenses.css';
import { useTranslation } from 'react-i18next';

const Licenses = () => {
  const { t } = useTranslation();
  const licenses = t('licenses.items', { returnObjects: true });

  return (
    <section className="licenses container" id="licenses">
      <h2 className="title bold">{t('licenses.title')}</h2>
      <hr />
      <div className="licence">
        {licenses.map((license, idx) => (
          <figure key={license.id ?? idx}>
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
