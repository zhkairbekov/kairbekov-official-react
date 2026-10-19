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
        testimonials: "Отзывы",
        journey: "История",
        certs: "Образование",
        contacts: "Контакты",
        menu: "Меню",
        closeMenu: "Закрыть",
        games: "Игры",
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
        bio1: "Frontend‑разработчик и графический дизайнер из Астаны, 23 года. Выпускник ОмАЭиП по специальности «Информационные системы и программирование».",
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
            tags: ["React", "JavaScript", "PHP", "SCSS", "Laravel"],
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
            h2: "NOMAD Academy — Академия хореографии в Астане (Цифровая экосистема)",
            intro:
              "Премиальная Академия Хореографии с единой цифровой экосистемой (SPA на Inertia + Vue 3 с поддержкой SSR). Объединяет B2C личные кабинеты учеников, B2B-портал Nomad Awards для аккредитации танцевальных коллективов со всего Казахстана и маркетплейс брендовой одежды Nomad Wear.",
            featuresLabel: "Ключевые особенности и функционал:",
            features: [
              "B2B Портал Nomad Awards: создание базы участников (ростер), подача сценических заявок (Nomination Wizard), управление облачной фонограммой с таймингом запуска, верификация взносов.",
              "Раздельные личные кабинеты по ролям: Роль с аналитикой, Роль для учебного процесса (Excel импорт/экспорт), Роль для Nomad Awards (модерация, оценки жюри), Роль для магазина (заказы), Роль для изменения контента (CMS).",
              "Каталог Nomad Wear: розничная и оптовая витрина, автоматический калькулятор размеров по меркам, корзина на LocalStorage и интеграция WhatsApp-чекаута.",
              "Прокси-роутер файлов (Storage Fallback) для безопасного скачивания музыки, PDF-регламентов и финансовых квитанций.",
              "SEO-оптимизация: разметка Schema.org (JSON-LD), мета-теги Open Graph, и Inertia SSR для мгновенного индексирования поисковиками.",
            ],
            note: "Проект успешно решает задачи автоматизации крупных фестивалей, обеспечивая бесшовный B2B/B2C опыт и гибкое управление контентом студии.",
            testimonialLabel: "Отзыв заказчика",
            testimonialAuthor: "NOMAD Academy of Choreography · academynomad.com",
            testimonial:
              "Жанат сам вышел на нас с предложением разработать сайт для NOMAD Academy of Choreography - academynomad.com. Всю разработку - от вёрстки до реализации - выполнил полностью самостоятельно, от начала и до конца.\n\nДизайн обсуждали вместе: мы вносили правки, что-то добавляли, что-то убирали - Жанат всегда был на связи и помогал определиться с решением, если мы сомневались. Видно, что у него отличный вкус - и как у дизайнера, и как у разработчика в целом: по нашему запросу сделал дизайн сайта, продумав всё до мелочей, и по ходу работы уточнял каждый момент, чтобы не возникало косяков и недопониманий.\n\nВ итоге сайт получился именно таким, каким мы его задумывали - современным, аккуратным и полностью рабочим, без лишних затягиваний по срокам.\n\nОтдельно отмечу - с ним легко работать: понимает задачи с полуслова, всегда на связи, не нужно по десять раз объяснять одно и то же.\n\nРекомендуем как надёжного разработчика для тех, кто ищет человека, способного сделать сайт «под ключ» самостоятельно, с хорошим вкусом и вниманием к деталям.",
          },
          4: {
            h2: "WedPeople — Свадебное и event-агентство полного цикла (Астана & Алматы)",
            intro:
              "Премиальный веб-сайт свадебного и event-агентства в эстетике Warm Editorial Atelier с акцентом на журнальную типографику, современное переосмысление казахского культурного кода (Қыз ұзату) и мгновенную конверсию в WhatsApp.",
            featuresLabel: "Ключевые особенности и функционал:",
            features: [
              "Двуязычный интерфейс (RU / ҚАЗ): полная локализация всех секций, манифеста, кейсов портфолио и культурного блока с сохранением в LocalStorage.",
              "Кураторское портфолио (CaseDrawerModal): фильтрация по категориям и детальные карточки кейсов с интерактивной фотогалереей, историей реализации и списком подрядчиков (Credits).",
              "Concierge Dispatch в WhatsApp: формы записи автоматически формируют персонализированное сообщение на выбранном языке и открывают диалог в WhatsApp без лишних полей.",
              "Эстетика Warm Editorial Atelier: акцентная антиква (Playfair Display, Cormorant Garamond), кастомная сетка hairline и оптимизация под prefers-reduced-motion.",
              "Продуманный Mobile-First UX: адаптивные таблицы форматов (аккордеон на мобильных) и умная плавающая панель быстрой связи.",
            ],
            note: "Проект сочетает эмоциональный сторителлинг люксового event-бренда с высокой скоростью работы на стеке React 19 + Vite + Tailwind CSS.",
          },
        },
      },
      testimonials: {
        sectionLabel: "Отзывы",
        title: "Что говорят клиенты",
        subtitle:
          "Честная обратная связь от заказчиков о совместной работе, подходе к разработке и результатах реализованных проектов.",
        verifiedBadge: "Верифицированный клиент",
        viewProject: "Открыть проект",
        items: [
          {
            id: "nomad",
            clientName: "NOMAD Academy of Choreography",
            clientRole: "Руководство академии",
            projectTitle: "academynomad.com",
            projectUrl: "https://academynomad.com/",
            projectType: "Веб-платформа и цифровая экосистема",
            year: "2026",
            rating: 5,
            tags: [
              "Разработка «под ключ»",
              "UI/UX и дизайн сайта",
              "Внимание к деталям",
              "Соблюдение сроков",
              "Понимание с полуслова",
            ],
            text: [
              "Жанат сам вышел на нас с предложением разработать сайт для NOMAD Academy of Choreography - academynomad.com. Всю разработку - от вёрстки до реализации - выполнил полностью самостоятельно, от начала и до конца.",
              "Дизайн обсуждали вместе: мы вносили правки, что-то добавляли, что-то убирали - Жанат всегда был на связи и помогал определиться с решением, если мы сомневались. Видно, что у него отличный вкус - и как у дизайнера, и как у разработчика в целом: по нашему запросу сделал дизайн сайта, продумав всё до мелочей, и по ходу работы уточнял каждый момент, чтобы не возникало косяков и недопониманий.",
              "В итоге сайт получился именно таким, каким мы его задумывали - современным, аккуратным и полностью рабочим, без лишних затягиваний по срокам.",
              "Отдельно отмечу - с ним легко работать: понимает задачи с полуслова, всегда на связи, не нужно по десять раз объяснять одно и то же.",
              "Рекомендуем как надёжного разработчика для тех, кто ищет человека, способного сделать сайт «под ключ» самостоятельно, с хорошим вкусом и вниманием к деталям.",
            ],
          },
        ],
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
              pdf: "/img/license/Контент-менеджер.pdf",
            },
          },
          {
            year: "2024",
            org: "Онлайн-курс",
            title: "Администратор базового уровня — работа с сайтами и CMS",
            type: "Сертификат",
            media: {
              image: "/img/license/adminBase.png",
              pdf: "/img/license/Администратор-базовый.pdf",
            },
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
        testimonials: "Пікірлер",
        journey: "Тарих",
        certs: "Білім",
        contacts: "Байланыс",
        menu: "Мәзір",
        closeMenu: "Жабу",
        games: "Ойындар",
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
            h2: "Жеке портфолио веб-сайты",
            intro:
              "Классикалық стектен React 18 және Vite жұбына көшірілген заманауи Single Page Application (SPA).",
            featuresLabel: "Негізгі ерекшеліктер:",
            features: [
              "Кодты қолдауды жеңілдететін компоненттік архитектура.",
              "Күй мен анимацияны басқаруға React Hooks (useState, useEffect) қолдану.",
              "Vite арқылы жылдам жүктелетін оңтайландырылған жинақ.",
              "Интерактивті Custom Cursor және күрделі CSS эффектілері.",
              "Толық адаптивтілік және Netlify арқылы автоматты деплой.",
            ],
          },
          2: {
            h2: "Laravel-дегі бизнес-орталық сайты (Docker + Make)",
            intro:
              "Контентті, жалға алушыларды және тапсырыстарды басқаруға арналған кіріктірілген админ-панелі бар толыққанды сайт. Масштабталу мен қауіпсіздікке басымдық бере отырып Laravel-де әзірленген.",
            featuresLabel: "Техникалық ерекшеліктер:",
            features: [
              "Инфрақұрылым: Docker және Docker Compose арқылы контейнерлеу (PHP, Nginx, MySQL, Redis).",
              "Автоматтандыру: Makefile — жинау, миграциялар, сидинг және деплой.",
              "Админ-панель: Filament PHP — CRUD, аналитика, рөлдер (admin, manager, tenant).",
              "Сақтау: S3‑үйлесімді қойма, суреттерді оңтайландыру, құжаттарды жүктеу.",
              "Backend: Eloquent, Artisan командалары, кезектер, хабарламалар, төлемдер, PDF генерациясы.",
              "Қосымша: API, Redis кэш, Telescope, CSRF, rate limiting, SEO.",
            ],
            note: "Бұл жоба full‑stack дағдыларды көрсетеді: дерекқор мен backend логикасынан бастап frontend және деплойға дейін.",
          },
          3: {
            h2: "NOMAD Academy — Астанадағы хореография академиясы (Цифрлық экожүйе)",
            intro:
              "Бірыңғай цифрлық экожүйесі бар премиум Хореография Академиясы (SSR қолдауы бар Inertia + Vue 3 негізіндегі SPA). Студенттердің B2C жеке кабинеттерін, Қазақстанның түкпір-түкпірінен келген би ұжымдарын аккредитациялауға арналған Nomad Awards B2B порталын және Nomad Wear брендтік киім маркетплейсін біріктіреді.",
            featuresLabel: "Негізгі мүмкіндіктер мен функционал:",
            features: [
              "Nomad Awards B2B порталы: қатысушылар базасын жасау (ростер), сахналық өтінімдерді беру (Nomination Wizard), уақыты реттелетін бұлтты фонограммаларды басқару, жарналарды тексеру.",
              "Рөлдер бойынша бөлінген жеке кабинеттер: Директор (аналитика), Жетекші (оқу процесі, Excel импорт/экспорт), Конкурс әкімшісі (модерация, қазылар алқасының бағалары), Дүкен менеджері (тапсырыстар), Контент-менеджер (CMS).",
              "Nomad Wear каталогы: бөлшек және көтерме сауда витринасы, өлшемдер бойынша автоматты калькулятор, LocalStorage негізіндегі себет және WhatsApp-чекаут интеграциясы.",
              "Файлдарды қауіпсіз жүктеуге арналған прокси-роутер (Storage Fallback) — музыка, PDF ережелері мен төлем түбіртектерінің 100% қолжетімділігін қамтамасыз етеді.",
              "SEO-оңтайландыру: Schema.org (JSON-LD) микробелгілеуі, Open Graph мета-тегтері және іздеу жүйелерінде жылдам индекстелу үшін Inertia SSR.",
            ],
            note: "Жоба ірі фестивальдерді автоматтандыру міндеттерін сәтті шешеді, B2B/B2C интерфейсін және студия мазмұнын икемді басқаруды қамтамасыз етеді.",
            testimonialLabel: "Тапсырыс берушінің пікірі",
            testimonialAuthor: "NOMAD Academy of Choreography · academynomad.com",
            testimonial:
              "Жанат бізге NOMAD Academy of Choreography - academynomad.com үшін сайт әзірлеу ұсынысымен өзі шықты. Барлық әзірлеуді — беттеуден бастап жүзеге асыруға дейін — басынан аяғына дейін толықтай өз бетінше орындап шықты.\n\nДизайнды бірге талқыладық: біз түзетулер енгіздік, бірдеңе қостық, бірдеңе алып тастадық — Жанат әрдайым байланыста болып, күмәнданған кезде дұрыс шешім қабылдауға көмектесті. Оның дизайнер ретінде де, жалпы әзірлеуші ретінде де талғамы керемет екені бірден байқалады: біздің сұранысымыз бойынша барлық ұсақ-түйекті ойластырып сайт дизайнын жасады және жұмыс барысында қателіктер мен түсінбеушіліктер болмас үшін әрбір сәтті нақтылап отырды.\n\nНәтижесінде сайт дәл біз ойлағандай — заманауи, ұқыпты және мерзімді созбай толық жұмыс істейтін болып шықты.\n\nБөлек атап өтерлігі — онымен жұмыс істеу өте жеңіл: тапсырмаларды жарты сөзден түсінеді, үнемі байланыста, бір нәрсені он рет түсіндірудің қажеті жоқ.\n\nЖақсы талғамымен, ұсақ-түйекке дейін көңіл бөліп, сайтты өз бетінше «нөлден бастап кілтке дейін» тапсыра алатын адамды іздеп жүргендерге сенімді әзірлеуші ретінде шын жүректен ұсынамыз.",
          },
          4: {
            h2: "WedPeople — Толық циклді үйлену тойы және ивент-агенттігі (Астана & Алматы)",
            intro:
              "Warm Editorial Atelier эстетикасында жасалған үйлену тойы мен ивент-агенттігінің премиум веб-сайты. Журналдық типографикаға, қазақтың мәдени кодын заманауи тұрғыдан қайта пайымдауға (Қыз ұзату) және WhatsApp-қа жылдам конверсияға басымдық берілген.",
            featuresLabel: "Негізгі мүмкіндіктер мен функционал:",
            features: [
              "Қос тілді интерфейс (RU / ҚАЗ): барлық секциялардың, манифесттің, портфолио кейстерінің және мәдени блоктың толық локализациясы (LocalStorage-та сақталады).",
              "Кураторлық портфолио (CaseDrawerModal): санаттар бойынша сүзгілеу және интерактивті фотогалереясы, іске асыру тарихы мен мердігерлер тізімі (Credits) бар кейс карточкалары.",
              "WhatsApp-қа Concierge Dispatch: жазылу формалары таңдалған тілде жекелендірілген хабарламаны автоматты түрде дайындап, WhatsApp диалогын бірден ашады.",
              "Warm Editorial Atelier эстетикасы: акценттік антиква (Playfair Display, Cormorant Garamond), кастомды hairline торы және prefers-reduced-motion оңтайландыруы.",
              "Ойластырылған Mobile-First UX: бейімделгіш формат кестелері (мобильді құрылғыларда аккордеон) және жылдам байланысқа арналған ақылды қалқымалы панель.",
            ],
            note: "Жоба люкс деңгейіндегі ивент-брендтің эмоционалды сторителлингін React 19 + Vite + Tailwind CSS стегіндегі жоғары жылдамдықпен үйлестіреді.",
          },
        },
      },
      testimonials: {
        sectionLabel: "Пікірлер",
        title: "Тапсырыс берушілер лебізі",
        subtitle:
          "Бірлескен жұмыс, әзірлеу сапасы және жүзеге асқан жобалардың нәтижесі туралы тапсырыс берушілердің шынайы пікірі.",
        verifiedBadge: "Расталған тапсырыс беруші",
        viewProject: "Жобаны ашу",
        items: [
          {
            id: "nomad",
            clientName: "NOMAD Academy of Choreography",
            clientRole: "Академия басшылығы",
            projectTitle: "academynomad.com",
            projectUrl: "https://academynomad.com/",
            projectType: "Веб-платформа және цифрлық экожүйе",
            year: "2026",
            rating: 5,
            tags: [
              "«Кілтке дейін» әзірлеу",
              "UI/UX және сайт дизайны",
              "Бөлшектерге назар аудару",
              "Мерзімді сақтау",
              "Жарты сөзден түсіну",
            ],
            text: [
              "Жанат бізге NOMAD Academy of Choreography - academynomad.com үшін сайт әзірлеу ұсынысымен өзі шықты. Барлық әзірлеуді — беттеуден бастап жүзеге асыруға дейін — басынан аяғына дейін толықтай өз бетінше орындап шықты.",
              "Дизайнды бірге талқыладық: біз түзетулер енгіздік, бірдеңе қостық, бірдеңе алып тастадық — Жанат әрдайым байланыста болып, күмәнданған кезде дұрыс шешім қабылдауға көмектесті. Оның дизайнер ретінде де, жалпы әзірлеуші ретінде де талғамы керемет екені бірден байқалады: біздің сұранысымыз бойынша барлық ұсақ-түйекті ойластырып сайт дизайнын жасады және жұмыс барысында қателіктер мен түсінбеушіліктер болмас үшін әрбір сәтті нақтылап отырды.",
              "Нәтижесінде сайт дәл біз ойлағандай — заманауи, ұқыпты және мерзімді созбай толық жұмыс істейтін болып шықты.",
              "Бөлек атап өтерлігі — онымен жұмыс істеу өте жеңіл: тапсырмаларды жарты сөзден түсінеді, үнемі байланыста, бір нәрсені он рет түсіндірудің қажеті жоқ.",
              "Жақсы талғамымен, ұсақ-түйекке дейін көңіл бөліп, сайтты өз бетінше «нөлден бастап кілтке дейін» тапсыра алатын адамды іздеп жүргендерге сенімді әзірлеуші ретінде шын жүректен ұсынамыз.",
            ],
          },
        ],
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
              pdf: "/img/license/Контент-менеджер.pdf",
            },
          },
          {
            year: "2024",
            org: "Онлайн-курс",
            title: "Базалық деңгейдегі администратор — сайттармен жұмыс",
            type: "Сертификат",
            media: {
              image: "/img/license/adminBase.png",
              pdf: "/img/license/Администратор-базовый.pdf",
            },
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
        testimonials: "Testimonials",
        journey: "Journey",
        certs: "Education",
        contacts: "Contact",
        menu: "Menu",
        closeMenu: "Close",
        games: "Games",
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
            h2: "Personal portfolio website",
            intro:
              "A modern Single Page Application (SPA), rebuilt from a classic stack to a powerful combo of React 18 and Vite.",
            featuresLabel: "Key highlights:",
            features: [
              "Component architecture for easier maintenance.",
              "Using React Hooks (useState, useEffect) for state and animations.",
              "Optimized Vite build for fast loading.",
              "Interactive Custom Cursor and advanced CSS effects.",
              "Fully responsive and deployed via Netlify.",
            ],
          },
          2: {
            h2: "Business center website on Laravel (Docker + Make)",
            intro:
              "A full-featured business center website with an integrated admin panel for managing content, tenants, and orders. Built with Laravel with a focus on scalability and security.",
            featuresLabel: "Technical details:",
            features: [
              "Infrastructure: Containerization with Docker and Docker Compose (PHP, Nginx, MySQL, Redis).",
              "Automation: Makefile for build, migrations, seeding, and deployment.",
              "Admin panel: Filament PHP with custom CRUD, analytics, and roles (admin, manager, tenant).",
              "Storage & media: S3-compatible storage, image optimization, and document uploads.",
              "Backend: Eloquent models/migrations, Artisan commands, queues, notifications, payments, and PDF generation.",
              "Extra: APIs, Redis caching, Telescope, security (CSRF, rate limiting), and SEO.",
            ],
            note: "This project showcases full‑stack skills: from database design and backend logic to frontend and deployment.",
          },
          3: {
            h2: "NOMAD Academy — Choreography Academy in Astana (Digital Ecosystem)",
            intro:
              "A premium Choreography Academy platform featuring a unified digital ecosystem (Inertia.js + Vue 3 SPA with SSR support). It integrates B2C student portals, the B2B Nomad Awards accreditation portal for dance groups across Kazakhstan, and the Nomad Wear brand merchandise marketplace.",
            featuresLabel: "Key Features and Technical Solutions:",
            features: [
              "Nomad Awards B2B Portal: comprehensive roster management, step-by-step nomination wizard, cloud music player with performance start-time cues, and fee payment verification.",
              "Role-based Dashboard System: Director (analytics & sales), Supervisor (schedule/branch management, Excel import/export), Contest Admin (moderation, judges scoring), Wear Manager (sales & inventory), and Content Manager (CMS).",
              "Nomad Wear Storefront: retail and wholesale catalogs, automatic size calculator based on child height/chest measurements, LocalStorage cart, and smooth WhatsApp checkout flow.",
              "Secure Storage Fallback: custom file-proxy routing for bulletproof delivery of audio tracks, PDF regulations, and payment receipts without breaking symlinks.",
              "SEO & Social Integration: rich Schema.org (JSON-LD) structured metadata, Open Graph / Twitter cards, and Inertia SSR for lightning-fast search engine indexing.",
            ],
            note: "This application streamlines large-scale dance festival registrations and academy management while delivering a cohesive B2B/C experience and a customizable CMS.",
            testimonialLabel: "Client Review",
            testimonialAuthor: "NOMAD Academy of Choreography · academynomad.com",
            testimonial:
              "Zhanat reached out to us proactively with a proposal to develop the website for NOMAD Academy of Choreography - academynomad.com. He handled the entire development process — from layout to final implementation — completely independently, from start to finish.\n\nWe collaborated closely on the design: we provided feedback, added and refined elements — Zhanat was always available and helped us find the right solutions whenever we were in doubt. It's clear that he has exceptional taste — both as a designer and as an engineer: based on our vision, he crafted the site design thinking through every detail, clarifying each nuance along the way to eliminate any oversights or misunderstandings.\n\nIn the end, the website turned out exactly as we envisioned — modern, polished, and fully functional, delivered strictly on time without delays.\n\nI'd particularly highlight how effortless it is to work with him: he grasps tasks instantly, stays responsive, and never requires repetitive explanations.\n\nWe highly recommend him as a reliable developer for anyone looking for someone who can deliver an end-to-end turnkey website with great taste and meticulous attention to detail.",
          },
          4: {
            h2: "WedPeople — Full-Service Wedding & Event Agency (Astana & Almaty)",
            intro:
              "A bespoke website for a luxury wedding and event agency crafted in a Warm Editorial Atelier aesthetic, featuring expressive magazine typography, a modern reinterpretation of Kazakh cultural heritage (Qyz Uzatu), and instant WhatsApp conversion.",
            featuresLabel: "Key Features and Functionality:",
            features: [
              "Bilingual Interface (RU / KAZ): full localization across all sections, brand manifesto, portfolio case studies, and cultural blocks with LocalStorage persistence.",
              "Curated Portfolio (CaseDrawerModal): category filtering and detailed case cards with interactive photo galleries, storytelling, and full vendor credits.",
              "WhatsApp Concierge Dispatch: friction-free booking forms that automatically compose a personalized message in the active language and open WhatsApp directly.",
              "Warm Editorial Atelier Aesthetic: high-contrast serif typography (Playfair Display, Cormorant Garamond), custom hairline grid utilities, and prefers-reduced-motion support.",
              "Thoughtful Mobile-First UX: adaptive event format layouts (mobile accordion to desktop table) and a context-aware floating quick-contact bar.",
            ],
            note: "Combines the emotional storytelling of a luxury event brand with blazing-fast performance on React 19, Vite, and Tailwind CSS.",
          },
        },
      },
      testimonials: {
        sectionLabel: "Testimonials",
        title: "Client Feedback",
        subtitle:
          "Direct feedback from clients on collaboration, engineering craftsmanship, and project outcomes.",
        verifiedBadge: "Verified Client",
        viewProject: "Visit Project",
        items: [
          {
            id: "nomad",
            clientName: "NOMAD Academy of Choreography",
            clientRole: "Academy Leadership",
            projectTitle: "academynomad.com",
            projectUrl: "https://academynomad.com/",
            projectType: "Web Platform & Digital Ecosystem",
            year: "2026",
            rating: 5,
            tags: [
              "Turnkey Development",
              "UI/UX & Website Design",
              "Attention to Detail",
              "Deadlines Met",
              "Seamless Communication",
            ],
            text: [
              "Zhanat reached out to us proactively with a proposal to develop the website for NOMAD Academy of Choreography - academynomad.com. He handled the entire development process — from layout to final implementation — completely independently, from start to finish.",
              "We collaborated closely on the design: we provided feedback, added and refined elements — Zhanat was always available and helped us find the right solutions whenever we were in doubt. It's clear that he has exceptional taste — both as a designer and as an engineer: based on our vision, he crafted the site design thinking through every detail, clarifying each nuance along the way to eliminate any oversights or misunderstandings.",
              "In the end, the website turned out exactly as we envisioned — modern, polished, and fully functional, delivered strictly on time without delays.",
              "I'd particularly highlight how effortless it is to work with him: he grasps tasks instantly, stays responsive, and never requires repetitive explanations.",
              "We highly recommend him as a reliable developer for anyone looking for someone who can deliver an end-to-end turnkey website with great taste and meticulous attention to detail.",
            ],
          },
        ],
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
              pdf: "/img/license/Контент-менеджер.pdf",
            },
          },
          {
            year: "2024",
            org: "Online course",
            title: "Basic Administrator — website and CMS skills",
            type: "Certificate",
            media: {
              image: "/img/license/adminBase.png",
              pdf: "/img/license/Администратор-базовый.pdf",
            },
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
