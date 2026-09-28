export class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('portfolio_lang') || 'en';
        this.dictionary = {
            en: {
                "nav-about": "About",
                "nav-services": "Services",
                "nav-portfolio": "Portfolio",
                "nav-contact": "Contact",
                "about-heading": "About Me",
                "about-sub": "My skillset, passions and goals.",
                "about-text-1": "I am an <mark class='purple'>indie game developer </mark> and a <mark class='orange'>3D artist </mark> making various 3D models mainly in game development sphere.",
                "about-text-2": "With around 4 months of experience in Blender, I focus on creating models with optimized topology and small details.",
                "about-text-3": "Instead of chasing overly complex, high-poly renders that tank frame rates, my goal is to build clean, functional props and stylized-realistic nature assets that drop seamlessly into active game scenes.",
                "about-text-4": "I do 3D modelling because I like making games and often make assets for my own games and constantly improving my skills.",
                "toolkit-heading": "Toolkit",
                "toolkit-1": "3D Modeling:",
                "toolkit-2": "Game engines:",
                "toolkit-3": "Texturing:",
                "pipeline-heading": "Production Pipeline",
                "pipeline": "My <mark class='purple'>workflow </mark> of how I create various projects from scratch",
                "step-1-title": "Idea & Reference",
                "step-1-desc": "Analyzing concepts, proportions, and visual direction before starting.",
                "step-2-title": "Blender Modeling",
                "step-2-desc": "Crafting clean geometry, matching forms, and optimizing polycount.",
                "step-3-title": "Texturing Stage",
                "step-3-desc": "Unwrapping UVs and hand-painting or baking high-quality textures.",
                "portfolio-heading": "My Showcase",
                "portfolio": "A collection of my projects I made in <mark class='orange'>Blender </mark>",
                "portfolio-title-env": "Grassy field rendered scene",
                "portfolio-title-tree": "Realistic tree - oak",
                "portfolio-title-sword": "Crystalline Greatsword",
                "portfolio-title-viking-shield": "Viking shield",
                "portfolio-title-gravestone": "Gravestone",
                "portfolio-title-duck": "A funny little duck",
                "portfolio-title-mustang": "Mustang car",
                "footer-copy": "© 2026 Sampestas. All rights reserved.",
                "category-game-asset": "Game asset",
                "category-texture-painting": "Texture painting",
                "category-tech": "Tech modeling",
                "category-env": "Environment design"
            },
            ru: {
                "nav-about": "О себе",
                "nav-services": "Услуги",
                "nav-portfolio": "Портфолио",
                "nav-contact": "Контакты",
                "about-heading": "Обо мне",
                "about-sub": "Мои навыки, увлечения и цели.",
                "about-text-1": "Я <mark class='purple'>инди-разработчик игр </mark> и <mark class='orange'>3D-художник </mark>, создающий различные модели в основном в области разработки игр.",
                "about-text-2": "Имея около 4 месяцев опыта работы в Blender, я уделяю внимание оптимизации моделей, чтобы избежать лишней геометрии.",
                "about-text-3": "Вместо создания слишком сложных высокополигональных рендеров, которые просаживают фреймрейт, моя цель - создавать красивые стилизованно-реалистичные элементы окружения, которые в то же время производительные и легко интегрируются в игровые сцены.",
                "about-text-4": "Я занимаюсь созданием 3д моделей, потому что люблю создавать игры и часто делаю ассеты для своих проектов, и постепенно улучшаю свои навыки.",
                "toolkit-heading": "Инструменты",
                "toolkit-1": "3д моделирование:",
                "toolkit-2": "Игровые движки:",
                "toolkit-3": "Текстурирование:",
                "pipeline-heading": "Процесс разработки",
                "pipeline": "Мой <mark class='purple'>рабочий процесс </mark> создания различных проектов с нуля.",
                "step-1-title": "Идея и референсы",
                "step-1-desc": "Анализ концептов, пропорций и визуального направления перед началом работы.",
                "step-2-title": "Моделирование в Blender",
                "step-2-desc": "Создание чистой геометрии, соблюдение форм и оптимизация полигонажа.",
                "step-3-title": "Этап текстурирования",
                "step-3-desc": "Развертка UV-карт, ручная покраска или запекание высококачественных текстур.",
                "portfolio-heading": "Мои работы",
                "portfolio": "Коллекция проектов, сделанных мной в  <mark class='orange'>Blender </mark>",
                "portfolio-title-env": "Отрендеренная сцена пейзажа с травянистыми полями",
                "portfolio-title-tree": "Реалистичное дерево — дуб",
                "portfolio-title-sword": "Кристальный двуручный меч",
                "portfolio-title-viking-shield": "Щит викинга",
                "portfolio-title-gravestone": "Могила",
                "portfolio-title-duck": "Резиновая утка",
                "portfolio-title-mustang": "Автомобиль Mustang",
                "footer-copy": "© 2026 Sampestas. Все права защищены.",
                "category-game-asset": "Игровой ассет",
                "category-texture-painting": "Рисование текстур",
                "category-tech": "Моделирование техники",
                "category-env": "Дизайн окружения"
            }
        };
    }
    init() {
        this.btn = document.getElementById('lang-switcher-btn');
        if (!this.btn) return;
        this.btn.addEventListener('click', () => this.toggleLanguage());
        this.applyLanguage(this.currentLang);
    }
    toggleLanguage() {
        const nextLang = this.currentLang === 'en' ? 'ru' : 'en';
        this.applyLanguage(nextLang);
    }
    applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (this.dictionary[lang] && this.dictionary[lang][key]) {
                el.innerHTML = this.dictionary[lang][key];
            }
        });
        document.documentElement.lang = lang;
        this.btn.textContent = lang === 'en' ? 'RU' : 'EN';
        this.btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Russian' : 'Переключить на английский');
        localStorage.setItem('portfolio_lang', lang);
        this.currentLang = lang;
    }
}