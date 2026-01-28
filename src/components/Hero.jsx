const Hero = ({ showTopElements }) => {
  return (
    <section className="section_1" id="start_window" aria-label="Введение — разработка сайтов и графический дизайн">
      <div className="start_window">
        <div className="blure vh-100 vw-100">
          <div className="container">
            <div className="content" role="banner">
              <img
                src="/img/me.webp"
                alt="Жанат Каирбеков — веб-разработчик и графический дизайнер"
                id="top_zhan"
                className={`top-zhan ${!showTopElements ? 'd-none' : ''}`}
              />
              <img
                src="/img/ico/top-logo.png"
                alt="Логотип Kairbekov Official"
                id="top_logo"
                className={`top-logo ${!showTopElements ? 'd-none' : ''}`}
              />
              <div className="text z-index-100">
                <h1 className="monoton-regular">KAIRBEKOV</h1>
                <p className="akony-font">
                  Разработка сайтов
                  <br />и графический дизайн
                </p>
                <a
                  rel="noopener noreferrer"
                  href="#services"
                  className="btn-order"
                  aria-label="Перейти к разделу услуг и заказать"
                >
                  Заказать
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
