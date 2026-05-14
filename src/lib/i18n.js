import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "Обо мне",
        services: "Услуги",
        process: "Процесс",
        sites: "Работы",
        journey: "История",
        certs: "Образование",
        contacts: "Контакты",
      },
      hero: {
        tagline: "Разработка сайтов и графический дизайн",
        cta: "Связаться",
        available: "Открыт к проектам",
        location: "Астана, Казахстан",
        scrollLabel: "прокрутить",
        role1: "Frontend Developer",
        role2: "Graphic Designer",
        role3: "UI/UX Enthusiast",
      },
      about: {
        sectionLabel: "Обо мне",
        title: "Привет — я Жанат",
        bio1: "Frontend‑разработчик и графический дизайнер из Астаны, 22 года. Выпускник ОмАЭиП по специальности «Информационные системы и программирование».",
        bio2: "Сейчас учусь в Alem School (Astana Hub). Строю быстрые, красивые интерфейсы и всегда открыт к новым вызовам.",
        yearsLabel: "лет в разработке",
        stats: [
          { val: "2023", label: "Год старта" },
          { val: "6+", label: "Проектов" },
          { val: "3", label: "Языков" },
          { val: "∞", label: "Стремлений" },
        ],
        cta: "Написать в Telegram",
      },
      journey: {
        sectionLabel: "История",
        title: "Мой путь",
        items: [
          {
            year: "2020",
            title: "Начало пути",
            desc: "Первое знакомство с графическим дизайном и веб-разработкой",
          },
          {
            year: "2020",
            title: "OmAEiP",
            desc: "Поступление в ОмАЭиП на «Информационные системы и программирование»",
          },
          {
            year: "2023",
            title: "Первые проекты",
            desc: "Saukele — дипломный проект на Laravel, полный цикл разработки",
          },
          {
            year: "2025",
            title: "Alem School",
            desc: "Поступление в Alem School при Astana Hub — прокачка стека и pet-проекты",
          },
          {
            year: "2025",
            title: "Коммерческий опыт",
            desc: "Разработка сайта для Downtown Astana — первый коммерческий проект",
          },
          {
            year: "2026",
            title: "Сейчас",
            desc: "Открыт к новым проектам, фрилансу и интересным командам",
          },
        ],
      },
      services: {
        sectionLabel: "Услуги",
        title: "Чем могу помочь",
        subtitle: "Комплексный подход от идеи до готового продукта",
        items: [
          {
            title: "Разработка сайтов",
            desc: "Адаптивный и быстрый сайт с индивидуальным дизайном, направленный на увеличение продаж. Оптимизация под SEO и все устройства.",
            tags: ["React", "TypeScript", "Vite", "SCSS", "Next.js"],
          },
          {
            title: "Графический дизайн",
            desc: "Визуальная идентичность и цифровые интерфейсы, которые не просто работают — они ощущаются. Перевожу ценности бренда в целостные визуальные системы.",
            tags: ["Figma", "UI/UX", "Брендинг", "Логотип"],
          },
          {
            title: "Frontend-разработка",
            desc: "Чистый, поддерживаемый код на React / JavaScript с анимациями и оптимизацией производительности. Пишу то, что легко развивать.",
            tags: ["React", "Framer Motion", "Tailwind", "REST API"],
          },
          {
            title: "Поддержка и доработка",
            desc: "Добавление новых функций, рефакторинг существующего кода, исправление ошибок. Работаю с чужими проектами без потери качества.",
            tags: ["Code Review", "Рефакторинг", "Оптимизация"],
          },
        ],
      },
      process: {
        sectionLabel: "Процесс",
        title: "Как я работаю",
        subtitle: "Прозрачный процесс от первого звонка до запуска",
        steps: [
          {
            num: "01",
            title: "Исследую",
            desc: "Разбираю задачу, изучаю целевую аудиторию и конкурентов. Формулируем ТЗ.",
          },
          {
            num: "02",
            title: "Проектирую",
            desc: "Создаю прототипы и дизайн в Figma. Согласовываем визуал до строчки кода.",
          },
          {
            num: "03",
            title: "Разрабатываю",
            desc: "Пишу чистый, быстрый код на современном стеке. Держу в курсе на каждом шаге.",
          },
          {
            num: "04",
            title: "Запускаю",
            desc: "Тестирую, оптимизирую, деплою. Сопровождаю после сдачи проекта.",
          },
        ],
      },
      portfolio: {
        sectionLabel: "Работы",
        title: "Избранные проекты",
        viewSite: "Открыть сайт",
        viewCode: "Исходный код",
        close: "Закрыть",
        projects: {
          1: {
            h2: "Персональный веб-сайт-портфолио",
            intro:
              "Современное SPA, переработанное с классического стека на связку React 18 и Vite.",
            featuresLabel: "Ключевые особенности:",
            features: [
              "Компонентная архитектура для лёгкой поддержки кода.",
              "React Hooks (useState, useEffect) для управления состоянием и анимациями.",
              "Оптимизированная сборка через Vite для мгновенной загрузки.",
              "Интерактивный Custom Cursor и сложные CSS-эффекты.",
              "Полная адаптивность и автодеплой через Netlify.",
            ],
          },
          2: {
            h2: "Сайт бизнес-центра на Laravel (Docker + Make)",
            intro:
              "Полноценный сайт бизнес-центра с интегрированной админ-панелью для управления контентом, арендаторами и заказами. Разработан на Laravel с акцентом на масштабируемость и безопасность.",
            featuresLabel: "Технические особенности:",
            features: [
              "Инфраструктура: контейнеризация с Docker и Docker Compose (PHP, Nginx, MySQL, Redis).",
              "Автоматизация: Makefile для сборки, миграций, сидинга и деплоя.",
              "Админ-панель: Filament PHP — CRUD, аналитика, роли (admin, manager, tenant).",
              "Хранилище: S3-совместимое хранилище, оптимизация изображений, загрузка документов.",
              "Backend: Eloquent, Artisan-команды, очереди, уведомления, платежи, генерация PDF.",
              "Дополнительно: API, кэширование Redis, Telescope, CSRF, rate limiting, SEO.",
            ],
            note: "Проект демонстрирует full-stack навыки: от проектирования БД и backend-логики до фронтенда и деплоя.",
          },
          3: {
            h2: "Saukele Online Shop",
            intro:
              "Профессиональное E-commerce решение для Омской общественной организации «Казахи Омска» — полноценная платформа для реализации продукции с национальным колоритом.",
            featuresLabel: "Технические характеристики:",
            features: [
              "Разработано на PHP-фреймворке Laravel.",
              "Шаблонизатор Blade для динамических и быстрых интерфейсов.",
              "Защищённая система управления корзиной и заказами.",
              "Уникальный дизайн, адаптированный под брендинг организации.",
            ],
            legalTitle: "Правовая информация:",
            legalText:
              "Авторские права на код и дизайн принадлежат разработчику Каирбекову Жанату. Заказчик: ОРОО «Казахи Омска».",
          },
          4: {
            h2: "Velobike.kz — Adaptive Clone",
            intro:
              "Детальная реплика популярного сервиса проката велосипедов в рамках учебного проекта. Основной упор — pixel-perfect вёрстка и чистый пользовательский опыт.",
            featuresLabel: "Реализованный функционал:",
            features: [
              "Multilingual: полная поддержка русского и казахского языков.",
              "Custom JS: самописный слайдер, адаптивное бургер-меню и dropdown.",
              "Layout: сложная адаптивная сетка для всех устройств (Mobile First).",
              "Performance: полностью статический проект с оптимизированными ассетами.",
            ],
            disclaimerTitle: "Disclaimer:",
            disclaimerText:
              "Проект создан исключительно в образовательных целях. Все права на контент и бренд принадлежат оригинальному сервису Velobike.kz.",
          },
          5: {
            h2: "The Maze Escape: Алгоритмический визуализатор",
            intro:
              "Интерактивное приложение для визуализации алгоритма BFS (Breadth-First Search). Решает задачу поиска кратчайшего пути в лабиринте с пошаговой демонстрацией логики.",
            featuresLabel: "Технические детали:",
            features: [
              "Algorithm: BFS гарантирует нахождение кратчайшего пути в невзвешенном графе.",
              "Data Structure: очереди и родительские узлы для восстановления пути.",
              "Visualization: состояния матрицы — 0 (свободно), 1 (стена), 2 (посещено), 3 (путь).",
              "Scalability: поддержка карт от 5×5 до 30×30.",
            ],
            csTitle: "Computer Science Case:",
            csText:
              "Демонстрирует навыки работы с графами, понимание временной сложности O(V + E) и перевод математических абстракций в визуальный интерфейс.",
          },
          6: {
            h2: "Современный каталог товаров",
            intro:
              "Динамическое веб-приложение с продвинутой работой React и анимаций, интегрированное с внешним API для получения актуальных данных о товарах.",
            featuresLabel: "Технологический стек:",
            features: [
              "Framer Motion: оркестрованные анимации — появление, фильтрация, hover-эффекты.",
              "API Integration: асинхронное взаимодействие с FakeStoreAPI через Fetch API.",
              "SCSS & БЭМ: модульная архитектура стилей для масштабируемости.",
              "Responsive Design: адаптивная сетка для всех типов экранов.",
            ],
            uxTitle: "UX/UI Focus:",
            uxText:
              "Особое внимание уделено микровзаимодействиям и состояниям интерфейса (empty states, loading skeleton).",
          },
        },
      },
      certs: {
        sectionLabel: "Образование",
        title: "Образование и сертификаты",
        viewPdf: "Открыть PDF",
        items: [
          {
            year: "2020–2023",
            org: "ОмАЭиП",
            title: "Информационные системы и программирование",
            type: "Диплом",
          },
          {
            year: "2024",
            org: "Онлайн-курс",
            title: "Контент-менеджер — управление, продвижение и маркетинг",
            type: "Сертификат",
            media: {
              image: "/img/license/contentManager.png",
              pdf: "/img/license/Контент-менеджер.pdf"
            }
          },
          {
            year: "2024",
            org: "Онлайн-курс",
            title: "Администратор базового уровня — работа с сайтами и CMS",
            type: "Сертификат",
            media: {
              image: "/img/license/adminBase.png",
              pdf: "/img/license/Администратор-базовый.pdf"
            }
          },
          {
            year: "2025",
            org: "Alem School · Astana Hub",
            title: "Интенсивная программа по разработке ПО",
            type: "Обучение",
          },
        ],
      },
      contacts: {
        sectionLabel: "Контакты",
        title: "Давайте работать вместе",
        subtitle: "Открыт к новым проектам и интересным командам",
        cta: "Написать в Telegram",
        ctaEmail: "GitHub",
        availability: "Доступен для работы",
        footer: "©2022 — портфолио frontend-разработчика",
      },
      ui: {
        theme: "Тема",
        lang: "Язык",
        themeLight: "Светлая",
        themeDark: "Тёмная",
        themeSystem: "Системная",
      },
    },
  },
  kk: {
    translation: {
      nav: {
        home: "Басты",
        about: "Мен туралы",
        services: "Қызметтер",
        process: "Процесс",
        sites: "Жұмыстар",
        journey: "Тарих",
        certs: "Білім",
        contacts: "Байланыс",
      },
      hero: {
        tagline: "Сайт жасау және графикалық дизайн",
        cta: "Хабарласу",
        available: "Жобаларға ашық",
        location: "Астана, Қазақстан",
        scrollLabel: "айналдыру",
        role1: "Frontend Әзірлеуші",
        role2: "Графикалық Дизайнер",
        role3: "UI/UX Маманы",
      },
      about: {
        sectionLabel: "Мен туралы",
        title: "Сәлем — мен Жанат",
        bio1: "Астана қаласынан 22 жасар Frontend-әзірлеуші және графикалық дизайнер. ОмАЭиП-тің «Ақпараттық жүйелер мен бағдарламалау» мамандығының түлегі.",
        bio2: "Қазір Alem School-да (Astana Hub) оқып жатырмын. Жылдам, әдемі интерфейстер жасаймын.",
        yearsLabel: "жыл тәжірибе",
        stats: [
          { val: "2023", label: "Бастаған жыл" },
          { val: "6+", label: "Жобалар" },
          { val: "3", label: "Тілдер" },
          { val: "∞", label: "Мақсаттар" },
        ],
        cta: "Telegram-да жазу",
      },
      journey: {
        sectionLabel: "Тарих",
        title: "Менің жолым",
        items: [
          {
            year: "2020",
            title: "Жолдың басы",
            desc: "Графикалық дизайн мен веб-әзірлеумен алғашқы танысу",
          },
          {
            year: "2020",
            title: "ОмАЭиП",
            desc: "ОмАЭиП-ке «Ақпараттық жүйелер мен бағдарламалау» мамандығына түсу",
          },
          {
            year: "2023",
            title: "Алғашқы жобалар",
            desc: "Saukele сайты — Laravel-дегі диплом жобасы",
          },
          {
            year: "2025",
            title: "Alem School",
            desc: "Astana Hub-тағы Alem School-ға оқуға кіру",
          },
          {
            year: "2025",
            title: "Коммерциялық тәжірибе",
            desc: "Downtown Astana бизнес-орталығының сайтын әзірлеу",
          },
          {
            year: "2026",
            title: "Қазір",
            desc: "Жаңа жобаларға, фрилансқа және қызықты командаларға ашықпын",
          },
        ],
      },
      services: {
        sectionLabel: "Қызметтер",
        title: "Қалай көмектесемін",
        subtitle: "Идеядан дайын өнімге дейін кешенді тәсіл",
        items: [
          {
            title: "Сайт жасау",
            desc: "Сатуды арттыруға бағытталған бірегей, адаптивті және жылдам сайт.",
            tags: ["React", "TypeScript", "Vite", "SCSS"],
          },
          {
            title: "Графикалық дизайн",
            desc: "Жұмыс істеп қана қоймай, сезімді де тудыратын визуалды идентификация.",
            tags: ["Figma", "UI/UX", "Брендинг"],
          },
          {
            title: "Frontend-әзірлеу",
            desc: "React / TypeScript-те таза код, анимациялар және өнімділікті оңтайландыру.",
            tags: ["React", "Framer Motion", "Tailwind"],
          },
          {
            title: "Қолдау және жетілдіру",
            desc: "Жаңа мүмкіндіктер қосу, рефакторинг, қателерді түзету.",
            tags: ["Code Review", "Рефакторинг"],
          },
        ],
      },
      process: {
        sectionLabel: "Процесс",
        title: "Мен қалай жұмыс істеймін",
        subtitle: "Алғашқы қоңыраудан іске қосуға дейін мөлдір процесс",
        steps: [
          {
            num: "01",
            title: "Зерттеймін",
            desc: "Тапсырманы талдаймын, мақсатты аудиторияны зерттеймін. ТЗ қалыптастырамыз.",
          },
          {
            num: "02",
            title: "Жобалаймын",
            desc: "Figma-да прототиптер мен дизайн жасаймын. Код жазбас бұрын визуалды келісеміз.",
          },
          {
            num: "03",
            title: "Әзірлеймін",
            desc: "Заманауи стекте таза, жылдам код жазамын. Әр қадамда хабардар етемін.",
          },
          {
            num: "04",
            title: "Іске қосамын",
            desc: "Тестілеймін, оңтайландырамын, деплой жасаймын. Тапсырғаннан кейін де қолдаймын.",
          },
        ],
      },
      portfolio: {
        sectionLabel: "Жұмыстар",
        title: "Таңдаулы жобалар",
        viewSite: "Сайтты ашу",
        viewCode: "Бастапқы код",
        close: "Жабу",
        projects: {
          1: {
            h2: "🚀 Жеке портфолио сайты",
            p1: "Классикалық стектен <1>React 18</1> және <3>Vite</3> жұбына көшірілген заманауи Single Page Application (SPA).",
            p2: "<1>Негізгі ерекшеліктер:</1>",
            features: [
              "Кодты қолдауды жеңілдететін компоненттік архитектура.",
              "Күй мен анимацияны басқаруға <1>React Hooks</1> (useState, useEffect) қолдану.",
              "Vite арқылы жылдам жүктелетін оңтайландырылған жинақ.",
              "Интерактивті <1>Custom Cursor</1> және күрделі CSS эффектілері.",
              "Толық адаптивтілік және <1>Netlify</1> арқылы автоматты деплой.",
            ],
          },
          2: {
            h2: "🏢 downtownastana.com — Laravel-тағы бизнес-орталық сайты (Docker + Make)",
            p1: "Контентті, арендаттарды, қызмет тапсырыстарын және т.б. басқаруға арналған админ-панелі бар толыққанды сайт. <1>Laravel</1> фреймворкінде жасалған, масштабталу, қауіпсіздік және ыңғайлы әкімшілендіруге басымдық берілген.",
            p2: "<1>Техникалық ерекшеліктер:</1>",
            features: [
              "<1>Инфрақұрылым:</1> <3>Docker</3> және <5>Docker Compose</5> арқылы контейнерлеу (PHP, Nginx, MySQL/PostgreSQL, Redis).",
              "<1>Автоматтандыру:</1> <3>Makefile</3> — build, миграциялар, seed, deploy (SSH немесе GitHub Actions арқылы).",
              "<1>Админ-панель:</1> <3>Filament PHP</3> — CRUD, аналитика және рөлдер.",
              "<1>Сақтау және медиа:</1> <3>Storage Link</3>, S3‑үйлесімді сақтау, суреттерді оңтайландыру, құжат жүктеу.",
              "<1>Backend:</1> Eloquent модельдері/миграциялар, Artisan командалары, queues, хабарландырулар, төлемдер, PDF генерациясы.",
              "<1>Қосымша:</1> API, Redis кэш, Telescope, қауіпсіздік (CSRF, rate limiting), SEO meta-тегтер.",
            ],
            note: "Бұл жоба full‑stack дағдыларды көрсетеді: дерекқор мен backend логикасынан бастап frontend және деплойға дейін — Астанадағы нақты бизнес қажеттіліктеріне бағытталған.",
          },
          3: {
            h2: "🛍️ Saukele Online Shop",
            p1: "Омбы аймақтық қоғамдық ұйымы <3>«Омбы қазақтары»</3> үшін жасалған кәсіби <1>E-commerce</1> шешімі — ұлттық колориті бар өнімдерді сатуға арналған платформа.",
            p2: "<1>Техникалық сипаттамалар:</1>",
            features: [
              "Қуатты PHP фреймворкі <1>Laravel</1> негізінде жасалған.",
              "Жылдам және динамикалық интерфейс үшін <1>Blade</1> қолдану.",
              "Қауіпсіз себет және тапсырыс басқаруы.",
              "Ұйым брендингіне сай бірегей дизайн.",
            ],
            legalTitle: "Құқықтық ақпарат:",
            legalText:
              "Жоба зияткерлік меншік болып табылады. Код пен дизайнға авторлық құқық әзірлеуші <1> Жанат Қайырбековке</1> тиесілі. Тапсырыс беруші: ОҚҰ «Омбы қазақтары».",
          },
          4: {
            h2: "🚲 Velobike.kz — Adaptive Clone",
            p1: "Танымал велосипед жалға беру сервисінің оқу жобасы ретінде жасалған детальды көшірмесі. Негізгі назар: <1>pixel‑perfect</1> верстка және таза UX.",
            p2: "<1>Іске асқан функционал:</1>",
            features: [
              "<1>Multilingual:</1> Орыс және қазақ тілдерін толық қолдау.",
              "<1>Custom JS:</1> Самописный слайдер, адаптивті бургер мәзір және dropdown тізімдер.",
              "<1>Layout:</1> Барлық құрылғыларда дұрыс жұмыс істейтін күрделі адаптивті тор (Mobile First).",
              "<1>Performance:</1> Оңтайландырылған ассеттері бар толық статикалық жоба.",
            ],
            disclaimerTitle: "Disclaimer:",
            disclaimerText:
              "Жоба тек оқу мақсатында жасалған. Контент пен бренд құқықтары бастапқы Velobike.kz сервисіне тиесілі.",
          },
          5: {
            h2: "🧩 The Maze Escape: Алгоритм визуализаторы",
            p1: "<1>BFS (Breadth‑First Search)</1> алгоритмін визуализациялайтын интерактивті қосымша. Лабиринтте ең қысқа жолды тауып, қадам‑қадамымен көрсетеді.",
            p2: "<1>Техникалық мәліметтер:</1>",
            features: [
              "<1>Algorithm:</1> BFS салмақсыз графта ең қысқа жолды табуға кепіл береді.",
              "<1>Data Structure:</1> Queue және parent node арқылы жолды қалпына келтіру.",
              "<1>Visualization:</1> Матрица күйлері: <3>0</3> бос, <5>1</5> қабырға, <7>2</7> барылған, <9>3</9> финал жол.",
              "<1>Scalability:</1> 5x5-тен 30x30-ға дейінгі карталарды өңдеу.",
            ],
            csTitle: "💡 Computer Science Case:",
            csText:
              "Жоба графтармен жұмыс дағдыларын, уақыт күрделілігін <1>O(V + E)</1> түсінуді және математикалық абстракцияларды UI-ға айналдыруды көрсетеді.",
          },
          6: {
            h2: "🛒 Заманауи тауарлар каталогы",
            p1: "<1>React</1> және анимация кітапханаларымен алдыңғы қатарлы жұмыс көрсететін динамикалық веб‑қосымша. Өзекті деректерді алу үшін сыртқы API-мен интеграция жасалған.",
            p2: "<1>Стек және шешімдер:</1>",
            features: [
              "<1>Framer Motion:</1> Күрделі анимациялар (stagger, фильтрлеу кезіндегі smooth өтулер, hover эффектілер).",
              "<1>API Integration:</1> <3>FakeStoreAPI</3> арқылы Fetch API-мен асинхронды жұмыс, loading/error күйлері.",
              "<1>SCSS & БЭМ:</1> Масштабталатын модульді стиль архитектурасы.",
              "<1>Responsive Design:</1> Барлық экрандарға бейімделген тор.",
            ],
            uxTitle: "✨ UX/UI Focus:",
            uxText:
              "Микро‑өзара әрекеттер мен интерфейс күйлеріне (empty states, loading skeleton) ерекше назар аударылған.",
          },
        },
      },
      certs: {
        sectionLabel: "Білім",
        title: "Білім және сертификаттар",
        viewPdf: "PDF ашу",
        items: [
          {
            year: "2020–2023",
            org: "ОмАЭиП",
            title: "Ақпараттық жүйелер мен бағдарламалау",
            type: "Диплом",
          },
          {
            year: "2024",
            org: "Онлайн-курс",
            title: "Контент-менеджер — басқару, жылжыту және маркетинг",
            type: "Сертификат",
            media: {
              image: "/img/license/contentManager.png",
              pdf: "/img/license/Контент-менеджер.pdf"
            }
          },
          {
            year: "2024",
            org: "Онлайн-курс",
            title: "Базалық деңгейдегі администратор — сайттармен жұмыс",
            type: "Сертификат",
            media: {
              image: "/img/license/adminBase.png",
              pdf: "/img/license/Администратор-базовый.pdf"
            }
          },
          {
            year: "2025",
            org: "Alem School · Astana Hub",
            title: "Бағдарламалық қамтамасыз ету бойынша интенсивті бағдарлама",
            type: "Оқу",
          },
        ],
      },
      contacts: {
        sectionLabel: "Байланыс",
        title: "Бірге жұмыс істейік",
        subtitle: "Жаңа жобалар мен қызықты командаларға ашықпын",
        cta: "Telegram-да жазу",
        ctaEmail: "GitHub",
        availability: "Жұмысқа қолжетімді",
        footer: "©2022 — frontend-әзірлеушінің портфолиосы",
      },
      ui: {
        theme: "Тема",
        lang: "Тіл",
        themeLight: "Жарық",
        themeDark: "Қараңғы",
        themeSystem: "Жүйелік",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        process: "Process",
        sites: "Work",
        journey: "Journey",
        certs: "Education",
        contacts: "Contact",
      },
      hero: {
        tagline: "Website development and graphic design",
        cta: "Get in touch",
        available: "Open to work",
        location: "Astana, Kazakhstan",
        scrollLabel: "scroll",
        role1: "Frontend Developer",
        role2: "Graphic Designer",
        role3: "UI/UX Enthusiast",
      },
      about: {
        sectionLabel: "About",
        title: "Hi — I'm Zhanat",
        bio1: "Frontend developer and graphic designer from Astana, 22. Graduate of OmAEiP with a degree in Information Systems and Programming.",
        bio2: "Currently studying at Alem School (Astana Hub). Building fast, beautiful interfaces and always open to new challenges.",
        yearsLabel: "years in dev",
        stats: [
          { val: "2020", label: "Year started" },
          { val: "6+", label: "Projects" },
          { val: "3", label: "Languages" },
          { val: "∞", label: "Ambitions" },
        ],
        cta: "Message on Telegram",
      },
      journey: {
        sectionLabel: "Story",
        title: "My journey",
        items: [
          {
            year: "2020",
            title: "The beginning",
            desc: "First encounter with graphic design and web development",
          },
          {
            year: "2020",
            title: "OmAEiP",
            desc: "Enrolled in OmAEiP, Information Systems and Programming",
          },
          {
            year: "2023",
            title: "First projects",
            desc: "Saukele website — a Laravel diploma project, full dev cycle",
          },
          {
            year: "2025",
            title: "Alem School",
            desc: "Enrolled at Alem School, Astana Hub — leveling up the stack",
          },
          {
            year: "2025",
            title: "Commercial work",
            desc: "Built the Downtown Astana business center website",
          },
          {
            year: "2026",
            title: "Now",
            desc: "Open to new projects, freelance, and interesting teams",
          },
        ],
      },
      services: {
        sectionLabel: "Services",
        title: "How I can help",
        subtitle: "End-to-end approach from idea to a shipped product",
        items: [
          {
            title: "Website development",
            desc: "Responsive, fast websites with custom design focused on conversions and attracting customers. SEO and cross-device optimized.",
            tags: ["React", "TypeScript", "Vite", "SCSS", "Next.js"],
          },
          {
            title: "Graphic design",
            desc: "Visual identity and digital interfaces that don't just work — they feel right. Brand values into cohesive visual systems.",
            tags: ["Figma", "UI/UX", "Branding", "Logo"],
          },
          {
            title: "Frontend engineering",
            desc: "Clean, maintainable React / TypeScript code with animations and performance optimization. Code that's easy to grow.",
            tags: ["React", "Framer Motion", "Tailwind", "REST API"],
          },
          {
            title: "Support & improvement",
            desc: "Adding features, refactoring existing code, fixing bugs. Working with existing projects without losing quality.",
            tags: ["Code Review", "Refactoring", "Optimization"],
          },
        ],
      },
      process: {
        sectionLabel: "Process",
        title: "How I work",
        subtitle: "A transparent process from the first call to launch",
        steps: [
          {
            num: "01",
            title: "Discover",
            desc: "I analyze the task, study the target audience and competitors. We define the brief together.",
          },
          {
            num: "02",
            title: "Design",
            desc: "Prototypes and design in Figma. We agree on visuals before writing a single line of code.",
          },
          {
            num: "03",
            title: "Develop",
            desc: "Clean, fast code on modern stack. I keep you updated at every step of the way.",
          },
          {
            num: "04",
            title: "Deploy",
            desc: "Test, optimize, ship. I stay available after handoff to support the project.",
          },
        ],
      },
      portfolio: {
        sectionLabel: "Work",
        title: "Selected projects",
        viewSite: "Visit site",
        viewCode: "Source code",
        close: "Close",
        projects: {
          1: {
            h2: "🚀 Personal portfolio website",
            p1: "A modern Single Page Application (SPA), rebuilt from a classic stack to a powerful combo of <1>React 18</1> and <3>Vite</3>.",
            p2: "<1>Key highlights:</1>",
            features: [
              "Component architecture for easier maintenance.",
              "Using <1>React Hooks</1> (useState, useEffect) for state and animations.",
              "Optimized Vite build for fast loading.",
              "Interactive <1>Custom Cursor</1> and advanced CSS effects.",
              "Fully responsive and deployed via <1>Netlify</1>.",
            ],
          },
          2: {
            h2: "🏢 downtownastana.com — Business center website on Laravel (Docker + Make)",
            p1: "A full-featured business center website with an admin panel for managing content, tenants, service orders and more. Built with <1>Laravel</1>, focusing on scalability, security and convenient administration.",
            p2: "<1>Technical details:</1>",
            features: [
              "<1>Infrastructure:</1> Containerization with <3>Docker</3> and <5>Docker Compose</5> for easy deployment and scaling (PHP, Nginx, MySQL/PostgreSQL, Redis).",
              "<1>Automation:</1> <3>Makefile</3> for common tasks: build, migrations, seeding, deploy (SSH or CI/CD with GitHub Actions).",
              "<1>Admin panel:</1> <3>Filament PHP</3> with custom CRUD, analytics and role support.",
              "<1>Storage & media:</1> <3>Storage Link</3>, S3-compatible storage, image optimization, document uploads.",
              "<1>Backend:</1> Eloquent models/migrations, Artisan commands, queues, notifications, payments, PDF generation.",
              "<1>Extra:</1> APIs for mobile, Redis caching, Telescope, security (CSRF, rate limiting), SEO meta tags.",
            ],
            note: "This project showcases full‑stack skills: from database and backend logic to frontend and deployment — focused on real business needs in Astana.",
          },
          3: {
            h2: "🛍️ Saukele Online Shop",
            p1: "A professional <1>E-commerce</1> solution built for the Omsk regional public organization <3>“Kazakhs of Omsk”</3> — a full platform for selling products with national identity.",
            p2: "<1>Technical specs:</1>",
            features: [
              "Built with the powerful PHP framework <1>Laravel</1>.",
              "Using <1>Blade</1> templates for fast, dynamic UI.",
              "Secure cart and order management.",
              "A unique custom design aligned with the organization’s branding.",
            ],
            legalTitle: "Legal information:",
            legalText:
              "This project is intellectual property. Copyright for the code and design belongs to the developer <1> Zhanat Kairbekov</1>. Client: “Kazakhs of Omsk”.",
          },
          4: {
            h2: "🚲 Velobike.kz — Adaptive clone",
            p1: "A detailed replica of a popular bike rental service, made as a learning project. Main focus: <1>pixel‑perfect</1> layout and clean UX.",
            p2: "<1>Implemented features:</1>",
            features: [
              "<1>Multilingual:</1> Full Russian and Kazakh support via separate structures.",
              "<1>Custom JS:</1> Custom slider, responsive burger menu and interactive dropdowns.",
              "<1>Layout:</1> Complex responsive grid working across all devices (Mobile First).",
              "<1>Performance:</1> Fully static project with optimized assets for fast loading.",
            ],
            disclaimerTitle: "Disclaimer:",
            disclaimerText:
              "Created for educational purposes only. All content and brand rights belong to the original Velobike.kz service.",
          },
          5: {
            h2: "🧩 The Maze Escape: Algorithm visualizer",
            p1: "An interactive app visualizing <1>BFS (Breadth‑First Search)</1>. It finds the shortest path in a maze and shows the algorithm step by step.",
            p2: "<1>Technical details:</1>",
            features: [
              "<1>Algorithm:</1> BFS guarantees the shortest path in an unweighted graph.",
              "<1>Data structure:</1> Queues and parent nodes for efficient path reconstruction.",
              "<1>Visualization:</1> Step-by-step matrix states: <3>0</3> free, <5>1</5> wall, <7>2</7> visited, <9>3</9> final path.",
              "<1>Scalability:</1> Supports maps from simple 5x5 to complex 30x30 mazes.",
            ],
            csTitle: "💡 Computer Science case:",
            csText:
              "This project demonstrates graph skills, understanding of time complexity <1>O(V + E)</1>, and translating math abstractions into UI.",
          },
          6: {
            h2: "🛒 Modern product catalog",
            p1: "A dynamic web app showing advanced work with <1>React</1> and animation libraries. It integrates with an external API to fetch up-to-date product data.",
            p2: "<1>Stack & solutions:</1>",
            features: [
              "<1>Framer Motion:</1> Orchestrated animations (staggered list, smooth filtering transitions, hover micro-interactions).",
              "<1>API integration:</1> Async work with <3>FakeStoreAPI</3> via Fetch API, with loading and error states.",
              "<1>SCSS & BEM:</1> Modular styling architecture for maintainability.",
              "<1>Responsive design:</1> Adaptive grid for all screen sizes.",
            ],
            uxTitle: "✨ UX/UI focus:",
            uxText:
              "Special attention to micro‑interactions and interface states (empty states, loading skeleton) for a premium feel.",
          },
        },
      },
      certs: {
        sectionLabel: "Education",
        title: "Education & certificates",
        viewPdf: "View PDF",
        items: [
          {
            year: "2020–2023",
            org: "OmAEiP",
            title: "Information Systems and Programming",
            type: "Diploma",
          },
          {
            year: "2024",
            org: "Online course",
            title: "Content Manager — management, promotion and marketing",
            type: "Certificate",
            media: {
              image: "/img/license/contentManager.png",
              pdf: "/img/license/Контент-менеджер.pdf"
            }
          },
          {
            year: "2024",
            org: "Online course",
            title: "Basic Administrator — website and CMS skills",
            type: "Certificate",
            media: {
              image: "/img/license/adminBase.png",
              pdf: "/img/license/Администратор-базовый.pdf"
            }
          },
          {
            year: "2025",
            org: "Alem School · Astana Hub",
            title: "Intensive software development program",
            type: "Studying",
          },
        ],
      },
      contacts: {
        sectionLabel: "Contact",
        title: "Let's work together",
        subtitle: "Open to new projects and interesting teams",
        cta: "Message on Telegram",
        ctaEmail: "GitHub",
        availability: "Available for work",
        footer: "©2022 — frontend developer portfolio",
      },
      ui: {
        theme: "Theme",
        lang: "Language",
        themeLight: "Light",
        themeDark: "Dark",
        themeSystem: "System",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "ru",
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
