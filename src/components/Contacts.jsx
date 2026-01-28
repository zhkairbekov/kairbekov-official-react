import './Contacts.css';

const Contacts = () => {
  return (
    <footer className="section_6" id="contacts" aria-label="Контактная информация">
      <div className="about_contacts">
        <div className="blure w-100 h-100 d-flex flex-column">
          <div className="container w-100">
            <div className="content w-100">
              <h2 className="title bold">Контакты для связи</h2>
              <hr />
              <address className="bttext w-100">
                <a
                  href="https://github.com/zhkairbekov"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contact_1 lkpoint d-flex"
                  title="Перейти на профиль GitHub"
                >
                  <img
                    src="/img/ico/github.png"
                    alt="Профиль GitHub графического дизайнера и веб-разработчика"
                    loading="lazy"
                  />
                  <p>GitHub: zhkairbekov</p>
                </a>
                <a
                  href="https://wa.me/77053062873"
                  className="contact_1 lkpoint d-flex"
                  title="Написать в WhatsApp"
                >
                  <img
                    src="/img/ico/kazakhstan.png"
                    alt="Иконка Казахстана – телефон для связи в WhatsApp"
                    loading="lazy"
                  />
                  <p>+7 (705) 306 28-73</p>
                </a>
                <a
                  href="https://t.me/kairbekoff"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contact_2 lkpoint d-flex"
                  title="Написать в Telegram"
                >
                  <img src="/img/ico/telegram.png" alt="Telegram-аккаунт: kairbekoff" loading="lazy" />
                  <p>Telegram: @kairbekoff</p>
                </a>
                <a
                  href="https://www.instagram.com/kairbekov.official"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="contact_3 lkpoint d-flex"
                  title="Instagram-портфолио дизайнера"
                >
                  <img
                    src="/img/ico/instagram.png"
                    alt="Instagram-профиль дизайнера: kairbekov.official"
                    loading="lazy"
                  />
                  <p>Instagram: @kairbekov.official</p>
                </a>
              </address>
            </div>
            <div id="footer">
              <div className="iwcontent flex-column">
                {/*<p>*/}
                {/*  Meta Platforms Inc. (Facebook, Instagram) признана экстремистской организацией в РФ, её*/}
                {/*  деятельность запрещена.*/}
                {/*</p>*/}
                <a
                  href="https://www.instagram.com/kairbekov.official"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Портфолио дизайнера в Instagram"
                >
                  ©2019 — портфолио frontend-разработчика <span>@kairbekov.official</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contacts;
