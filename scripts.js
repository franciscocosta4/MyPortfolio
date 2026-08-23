// i18n Translations
const translations = {
  en: {
    // Navigation
    'nav-about': 'About',
    'nav-journey': 'My journey',
    'nav-pricing': 'Pricing',
    'nav-contact': 'Contact me',
    'resume-btn': 'Resume',
    // Pricing Page
    'pricing-title': 'Backend Services Pricing',
    'pricing-subtitle': 'Choose a package that suits your needs, or contact me for a custom-tailored offer.',
    'popular-badge': 'Popular',
    'plan1-name': 'Simple API',
    'plan1-desc': 'Ideal for small projects that need a basic backend or REST API.',
    'plan1-f1': 'Up to 5 endpoints',
    'plan1-f2': 'Basic CRUD operations',
    'plan1-f3': 'MySQL database',
    'plan1-f4': 'Basic authentication',
    'plan2-name': 'Full Backend',
    'plan2-desc': 'Complete backend solution for web applications and businesses.',
    'plan2-f1': 'Everything from Simple API',
    'plan2-f2': 'Laravel app with Blade or API',
    'plan2-f3': 'Role-based access control',
    'plan2-f4': 'Email system integration',
    'plan2-f5': 'Admin dashboard',
    'plan3-name': 'Full Stack Web Application',
    'plan3-desc': 'Production-ready web application with scalable architecture, authentication system and modern UI.',
    'plan3-f1': 'Everything from Full Backend',
    'plan3-f2': 'Modern front-end (Blade-based UI)',
    'plan3-f3': 'Secure authentication (OAuth integration: Google, GitHub, Microsoft)',
    'plan3-f4': 'Role &amp; permission management',
    'plan3-f5': 'Optimised database design',
    'plan3-f6': 'Logging &amp; error handling system',
    'plan3-f7': 'Technical documentation',
    // Contact Page
    'contact-title': 'Contact me',
    'contact-subtitle': 'You can contact me via Email, GitHub or LinkedIn. I usually respond within a day.',
    // Index Page
    'bio': 'I\'m a 19-year-old Backend Web Developer currently in my first year of Computer Science at UTAD. I\'ve been programming for 4 years and focus on building scalable, well-structured web applications.',
    'what-i-work-with': 'What I work with',
    'main-stack': 'Main stack',
    'additional-languages': 'Additional languages',
    'learning-label': 'Currently Learning',
    'want-to-learn-label': 'Want to learn',
    'my-journey': 'My journey',
    'period-1': '2022 - First steps',
    'desc-1': 'Started programming through my technical high school program — web fundamentals with HTML, CSS, and JavaScript, alongside C for understanding low-level programming, pointers, and memory management.',
    'period-2': '2024 - Backend begins',
    'desc-2': 'Moved into backend development with raw PHP and MySQL. Learned how servers work, how to handle databases, build dynamic pages, and connect front-end to back-end. Started understanding MVC patterns and relational data modelling.',
    'period-3': '2025 – Full-Stack Development with Laravel',
    'desc-3': 'Adopted Laravel as my main framework during my technical high school program in Computer Science. Built full-stack applications with authentication, admin dashboards, REST APIs, role-based access control, and gamification systems. CloudNotes and DevConnect are the main projects from this phase.',
    'period-4': '1st year · 2025 – present',
    'desc-4': 'Currently in the first year of Computer Engineering at UTAD. The course introduced me to object-oriented programming with C++ — classes, memory management, and systems thinking — and Python, reinforcing algorithmic foundations with a more high-level lens. I\'ve also built simple web applications with Django for learning HTTP and web frameworks.',
    'period-5': 'Self-taught · ongoing',
    'desc-cloudnotes': 'A full-stack note-sharing web platform where students can publish, search, and save academic annotations by subject. It includes a gamification system where users level up by sharing notes, and a complete admin dashboard with user management, access logs, point tracking, and publication oversight. Built with Laravel, MySQL, and Blade.',
    'desc-devconnect': 'A web application built with Laravel and MySQL that works like a mini social network for developers — combining the ideas of GitHub and Twitter to promote technical content sharing and developer interaction. The project demonstrates full-stack skills, including MVC architecture, authentication, relational databases, and a modern UI.',
    'desc-springexpenses': 'A personal finance management application built with Spring Boot and React. Tracks incomes and expenses, detects overspending patterns, and provides financial insights based on 30-day and 90-day averages. Built with MVC architecture and PostgreSQL persistence.',
    'desc-hermes': 'A personal finance manager for the web built in .NET. It allows users to track income and expenses, categorize them, and gain insights into spending habits. The main goal is to help users monitor overspending and generate summary and forecast reports based on historical data.',
    'desc-5': 'I explored the JavaScript ecosystem with Node.js and PostgreSQL. I built small projects in Node.js to understand the strengths of the Javascript stack. But today, my main focus is .NET and the C# ecosystem.',
    'projects-heading': 'Projects',
  },
  pt: {
    // Navigation
    'nav-about': 'Sobre',
    'nav-journey': 'O meu percurso',
    'nav-pricing': 'Preços',
    'nav-contact': 'Contacto',
    'resume-btn': 'CV',
    // Pricing Page
    'pricing-title': 'Preços — Serviços Backend',
    'pricing-subtitle': 'Escolhe o pacote que mais se adequa ao teu projeto, ou contacta-me para uma proposta personalizada.',
    'popular-badge': 'Popular',
    'plan1-name': 'API Simples',
    'plan1-desc': 'Ideal para projetos pequenos que precisam de um backend básico ou REST API.',
    'plan1-f1': 'Até 5 endpoints',
    'plan1-f2': 'Operações CRUD básicas',
    'plan1-f3': 'Base de dados MySQL',
    'plan1-f4': 'Autenticação básica',
    'plan2-name': 'Backend Completo',
    'plan2-desc': 'Solução backend completa para aplicações web e negócios.',
    'plan2-f1': 'Tudo do plano API Simples',
    'plan2-f2': 'Aplicação Laravel com Blade ou API',
    'plan2-f3': 'Controlo de acessos por função',
    'plan2-f4': 'Integração de sistema de email',
    'plan2-f5': 'Painel de administração',
    'plan3-name': 'Aplicação Web Full Stack',
    'plan3-desc': 'Aplicação web pronta para produção com arquitetura escalável, sistema de autenticação e UI moderna.',
    'plan3-f1': 'Tudo do plano Backend Completo',
    'plan3-f2': 'Front-end moderno (UI baseada em Blade)',
    'plan3-f3': 'Autenticação segura (OAuth: Google, GitHub, Microsoft)',
    'plan3-f4': 'Gestão de funções e permissões',
    'plan3-f5': 'Design de base de dados otimizado',
    'plan3-f6': 'Sistema de logging e gestão de erros',
    'plan3-f7': 'Documentação técnica',
    // Contact Page
    'contact-title': 'Contacto',
    'contact-subtitle': 'Podes contactar-me por Email, GitHub ou LinkedIn. Costumo responder no próprio dia.',
    // Index Page
    'bio': 'Sou um Desenvolvedor Web Backend com 19 anos, atualmente no primeiro ano de Engenharia Informática na UTAD. Programo há 4 anos e foco-me em construir aplicações web escaláveis e bem estruturadas.',
    'what-i-work-with': 'O que uso',
    'main-stack': 'Stack principal',
    'additional-languages': 'Linguagens adicionais',
    'learning-label': 'A aprender',
    'want-to-learn-label': 'Quero aprender',
    'my-journey': 'O meu percurso',
    'period-1': '2022 - Primeiros passos',
    'desc-1': 'Comecei a programar através do curso técnico de Informática — fundamentos web com HTML, CSS e JavaScript, a par de C para compreender programação de baixo nível, ponteiros e gestão de memória.',
    'period-2': '2024 - O backend começa',
    'desc-2': 'Entrei no desenvolvimento backend com PHP puro e MySQL. Aprendi como funcionam os servidores, como lidar com bases de dados, construir páginas dinâmicas e ligar o front-end ao back-end. Comecei a compreender padrões MVC e modelação de dados relacional.',
    'period-3': '2025 – Desenvolvimento full-stack com Laravel',
    'desc-3': 'Adotei o Laravel como framework principal durante o curso técnico de Informática. Desenvolvi aplicações full-stack com autenticação, painéis de administração, REST APIs, controlo de acessos por função e sistemas de gamificação. O CloudNotes e o DevConnect são os principais projetos desta fase.',
    'period-4': '1.º ano · 2025 – presente',
    'desc-4': 'Atualmente no primeiro ano de Engenharia Informática na UTAD. O curso introduziu-me à programação orientada a objetos com C++ — classes, gestão de memória e pensamento de sistemas — e a Python, consolidando as bases algorítmicas com uma perspetiva de mais alto nível. Também construí aplicações web simples com Django para aprender HTTP e frameworks web.',
    'period-5': 'Autodidata · em curso',
    'desc-cloudnotes': 'Uma plataforma web full-stack para partilha de apontamentos onde os estudantes podem publicar, procurar e guardar anotações académicas por disciplina. Inclui um sistema de gamificação em que os utilizadores sobem de nível ao partilhar apontamentos e um painel de administração completo com gestão de utilizadores, registos de acesso, controlo de pontos e supervisão de publicações. Desenvolvida com Laravel, MySQL e Blade.',
    'desc-devconnect': 'Uma aplicação web construída com Laravel e MySQL que funciona como uma mini rede social para programadores — combinando ideias do GitHub e do Twitter para promover a partilha de conteúdo técnico e a interação entre developers. O projeto demonstra competências full-stack, incluindo arquitetura MVC, autenticação, bases de dados relacionais e uma interface moderna.',
    'desc-springexpenses': 'Uma aplicação de gestão de finanças pessoais construída com Spring Boot e React. Acompanha receitas e despesas, deteta padrões de gastos excessivos e fornece análises financeiras baseadas em médias de 30 e 90 dias. Construída com arquitetura MVC e persistência PostgreSQL.',
    'desc-hermes': 'Um gestor de finanças pessoais para a web desenvolvido em .NET. Permite acompanhar rendimentos e despesas, categorizá-los e obter informações sobre os hábitos de consumo. O objetivo principal é ajudar os utilizadores a controlar o excesso de gastos e a gerar relatórios de resumo e previsão com base em dados históricos.',
    'desc-5': 'Explorei o ecossistema JavaScript com Node.js e PostgreSQL. Fiz pequenos projetos em Node.js para compreender as vantagens da stack javascript. Hoje, o meu foco principal é .NET e o ecossistema C#.',
    'projects-heading': 'Projetos',
  }
};

let currentLang = 'en';

function toggleLang() {
  closeMenu();
  currentLang = currentLang === 'en' ? 'pt' : 'en';
  applyLang();
}

function applyLang() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'PT' : 'EN';
}

document.querySelectorAll('img').forEach(image => {
  if (!image.hasAttribute('alt')) image.setAttribute('alt', '');
  if (!image.hasAttribute('loading')) image.setAttribute('loading', 'lazy');
  image.decoding = 'async';
});

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', applyLang);

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const navToggle = document.getElementById('nav-toggle');
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  
  // Close menu when clicking a link
  if (isOpen) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu, { once: true });
    });
  }
}

function closeMenu() {
  const navLinks = document.getElementById('nav-links');
  const navToggle = document.getElementById('nav-toggle');
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// Close menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});
