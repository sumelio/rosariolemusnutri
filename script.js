/* =====================================================
   Rosario Lemus Barrera — Bilingual CV
   Language: English (en) / Spanish (es)
   ===================================================== */

const translations = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.eyebrow": "Registered Dietitian Nutritionist",
    "hero.title": "Holistic Nutritionist · MSc in Food and Nutritional Security · Specialist in Pediatric Clinical Nutrition",
    "hero.sub": "Helping people of all ages build sustainable, healthy relationships with food — from pediatric clinical nutrition to GLP-1 therapy support and community food security.",
    "hero.cta1": "Get in touch",
    "hero.cta2": "View experience",
    "hero.badge1": "🇨🇦 Based in Canada",
    "hero.badge2": "💻 Virtual counseling",
    "hero.badge3": "🗣 English & Spanish",

    "stats.years": "Years of experience",
    "stats.roles": "Professional roles",
    "stats.degrees": "Academic degrees",
    "stats.languages": "Languages",

    "about.eyebrow": "About me",
    "about.heading": "Nutrition with science, empathy and purpose",
    "about.p1": "I am a Holistic Nutritionist with a Master's Degree in Food and Nutritional Security and a specialist degree in Pediatric Clinical Nutrition. I graduated as a Dietitian Nutritionist from the National University of Colombia.",
    "about.p2": "As a food and nutrition counsellor, I have worked with populations of all ages. I have also shared my knowledge teaching Clinical Mother and Child Nutrition at the National University of Colombia, and I have experience in nutritional therapy for patients undergoing GLP-1 analogue treatment.",
    "about.quote": "“Never stop learning” — my motto. I focus on goals and effective communication.",
    "about.card1.title": "Clinical Nutrition",
    "about.card1.text": "Individualized care for weight management, renal disease, diabetes and chronic conditions.",
    "about.card2.title": "Pediatric Expertise",
    "about.card2.text": "Specialist in pediatric clinical nutrition, from infancy through adolescence.",
    "about.card3.title": "Teaching & Research",
    "about.card3.text": "University lecturer and researcher in food security and nutrition education.",

    "exp.eyebrow": "Career path",
    "exp.heading": "Professional Experience",

    "edu.eyebrow": "Academic background",
    "edu.heading": "Education & Continuous Learning",
    "edu.diploma": "Dietitian Nutritionist Diploma — Universidad Nacional de Colombia (2017)",

    "skills.eyebrow": "What I bring",
    "skills.heading": "Core Skills",
    "certs.eyebrow": "Credentials",
    "certs.heading": "Certifications",

    "contact.eyebrow": "Let's talk",
    "contact.heading": "Start your nutrition journey",
    "contact.sub": "Available for virtual nutrition counseling, teaching and consulting projects — in English or Spanish.",
    "contact.email": "Email",
    "contact.site": "Personal site",
    "contact.location": "📍 Canada · Available worldwide (virtual)",

    "footer.tag": "Nutritionist · Dietitian · Educator",
  },

  es: {
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Nutricionista Dietista",
    "hero.title": "Nutricionista Holística · Mg. en Seguridad Alimentaria y Nutricional · Esp. en Nutrición Clínica Pediátrica",
    "hero.sub": "Ayudo a personas de todas las edades a construir una relación saludable y sostenible con la comida — desde la nutrición clínica pediátrica hasta el acompañamiento en terapia GLP-1 y la seguridad alimentaria comunitaria.",
    "hero.cta1": "Contáctame",
    "hero.cta2": "Ver experiencia",
    "hero.badge1": "🇨🇦 Radicada en Canadá",
    "hero.badge2": "💻 Consulta virtual",
    "hero.badge3": "🗣 Español e Inglés",

    "stats.years": "Años de experiencia",
    "stats.roles": "Roles profesionales",
    "stats.degrees": "Títulos académicos",
    "stats.languages": "Idiomas",

    "about.eyebrow": "Sobre mí",
    "about.heading": "Nutrición con ciencia, empatía y propósito",
    "about.p1": "Soy Nutricionista Holística, con Maestría en Seguridad Alimentaria y Nutricional y especialización en Nutrición Clínica Pediátrica. Me gradué como Nutricionista Dietista de la Universidad Nacional de Colombia.",
    "about.p2": "Como consejera en alimentación y nutrición, he trabajado con poblaciones de todas las edades. También he compartido mi conocimiento como docente de Nutrición Clínica Materno Infantil en la Universidad Nacional de Colombia, y tengo experiencia en terapia nutricional para pacientes en tratamiento con análogos GLP-1.",
    "about.quote": "“Nunca dejes de aprender” — mi lema. Me enfoco en las metas y la comunicación efectiva.",
    "about.card1.title": "Nutrición Clínica",
    "about.card1.text": "Atención individualizada para control de peso, enfermedad renal, diabetes y condiciones crónicas.",
    "about.card2.title": "Experticia Pediátrica",
    "about.card2.text": "Especialista en nutrición clínica pediátrica, desde la infancia hasta la adolescencia.",
    "about.card3.title": "Docencia e Investigación",
    "about.card3.text": "Docente universitaria e investigadora en seguridad alimentaria y educación nutricional.",

    "exp.eyebrow": "Trayectoria",
    "exp.heading": "Experiencia Profesional",

    "edu.eyebrow": "Formación académica",
    "edu.heading": "Educación y Aprendizaje Continuo",
    "edu.diploma": "Diploma de Nutricionista Dietista — Universidad Nacional de Colombia (2017)",

    "skills.eyebrow": "Lo que aporto",
    "skills.heading": "Habilidades Principales",
    "certs.eyebrow": "Credenciales",
    "certs.heading": "Certificaciones",

    "contact.eyebrow": "Hablemos",
    "contact.heading": "Comienza tu camino nutricional",
    "contact.sub": "Disponible para consulta nutricional virtual, docencia y proyectos de consultoría — en español o inglés.",
    "contact.email": "Correo",
    "contact.site": "Sitio personal",
    "contact.location": "📍 Canadá · Disponible en todo el mundo (virtual)",

    "footer.tag": "Nutricionista · Dietista · Educadora",
  },
};

/* ============ Experience data ============ */
const experience = [
  {
    org: "Dharma Nutrition Clinic",
    role: { en: "Nutrition Coach", es: "Coach Nutricional" },
    period: { en: "Jun 2024 – May 2026", es: "Jun 2024 – May 2026" },
    loc: { en: "Remote", es: "Remoto" },
    bullets: {
      en: [
        "Delivered virtual nutrition counseling for patients undergoing GLP-1 therapy, supporting sustainable weight loss and metabolic health.",
        "Developed individualized meal plans and lifestyle interventions tailored to patient needs.",
        "Improved patient adherence through behavior change strategies and ongoing follow-up.",
        "Sold supplements and nutrition programs.",
      ],
      es: [
        "Brindé consulta nutricional virtual a pacientes en terapia con GLP-1, apoyando la pérdida de peso sostenible y la salud metabólica.",
        "Desarrollé planes de alimentación individualizados e intervenciones de estilo de vida adaptadas a cada paciente.",
        "Mejoré la adherencia de los pacientes mediante estrategias de cambio de comportamiento y seguimiento continuo.",
        "Comercialicé suplementos y programas de nutrición.",
      ],
    },
  },
  {
    org: "Examinarte Centro Médico",
    role: { en: "Registered Dietitian – Virtual Nutrition Counseling", es: "Nutricionista Dietista – Consulta Virtual" },
    period: { en: "Apr 2024 – Aug 2024", es: "Abr 2024 – Ago 2024" },
    loc: { en: "Bogotá, Colombia", es: "Bogotá, Colombia" },
    bullets: {
      en: [
        "Conducted initial and follow-up consultations for overweight, obesity, body fat reduction and muscle hypertrophy goals.",
        "Provided nutrition consultations for chronic conditions such as diabetes, kidney disease and lupus.",
        "Developed individualized nutrition plans tailored to each patient's preferences and clinical conditions.",
        "Implemented nutrition coaching focused on behavior change and sustainable healthy habits.",
      ],
      es: [
        "Realicé consultas iniciales y de seguimiento para sobrepeso, obesidad, reducción de grasa corporal e hipertrofia muscular.",
        "Brindé consultas nutricionales para condiciones crónicas como diabetes, enfermedad renal y lupus.",
        "Desarrollé planes de nutrición individualizados según las preferencias y condiciones clínicas de cada paciente.",
        "Implementé procesos de coaching nutricional enfocados en el cambio de comportamiento y hábitos saludables sostenibles.",
      ],
    },
  },
  {
    org: "NutravidaCiens",
    role: { en: "Instructor – Diploma in Pediatric Clinical Nutrition", es: "Docente – Diplomado en Nutrición Clínica Pediátrica" },
    period: { en: "Sep 2022 – Jul 2024", es: "Sep 2022 – Jul 2024" },
    loc: { en: "Peru (remote)", es: "Perú (remoto)" },
    bullets: {
      en: [
        "Reviewed updated scientific literature to develop pediatric nutrition content for the diploma program.",
        "Delivered virtual classes on nutritional management of renal and gastrointestinal diseases in children and adolescents.",
        "Gave a specialized lecture on the nutritional care of pediatric burn patients.",
      ],
      es: [
        "Revisé literatura científica actualizada para desarrollar contenidos de nutrición pediátrica del diplomado.",
        "Dicté clases virtuales sobre el manejo nutricional de enfermedades renales y gastrointestinales en niños y adolescentes.",
        "Impartí una conferencia especializada sobre el cuidado nutricional del paciente pediátrico quemado.",
      ],
    },
  },
  {
    org: "Universidad Nacional de Colombia",
    role: { en: "Research Assistant", es: "Asistente de Investigación" },
    period: { en: "Oct 2023 – Dec 2023", es: "Oct 2023 – Dic 2023" },
    loc: { en: "Colombia", es: "Colombia" },
    bullets: {
      en: [
        "Supported extension projects implementing Food Security strategies for communities involved in peacebuilding.",
        "Supported the Rural Food and Nutrition Education Strategy for Ciénaga, Magdalena.",
        "Co-created edu-communicative tools to strengthen rural food and nutrition education.",
      ],
      es: [
        "Apoyé proyectos de extensión implementando estrategias de Seguridad Alimentaria para comunidades vinculadas a la construcción de paz.",
        "Apoyé la Estrategia de Educación Alimentaria y Nutricional Rural del municipio de Ciénaga, Magdalena.",
        "Co-creé herramientas educomunicativas para fortalecer la educación alimentaria y nutricional rural.",
      ],
    },
  },
  {
    org: "Renal Therapy Services – RTS",
    role: { en: "Registered Dietitian", es: "Nutricionista Dietista" },
    period: { en: "Nov 2021 – Oct 2023", es: "Nov 2021 – Oct 2023" },
    loc: { en: "Colombia", es: "Colombia" },
    bullets: {
      en: [
        "Conducted nutritional assessments for adults and older adults in the nephroprotection program (admission and follow-up).",
        "Provided recommendations based on each patient's laboratory results and health status.",
        "Prescribed nutritional supplements through the Ministry of Health's MIPRES system.",
      ],
      es: [
        "Realicé valoraciones nutricionales a adultos y adultos mayores del programa de nefroprotección (ingreso y seguimiento).",
        "Brindé recomendaciones según los resultados de laboratorio y el estado de salud de cada paciente.",
        "Prescribí suplementos nutricionales a través del sistema MIPRES del Ministerio de Salud.",
      ],
    },
  },
  {
    org: "Universidad Nacional de Colombia",
    role: { en: "Professor Ad Honorem – Maternal and Child Nutrition", es: "Profesora Ad Honorem – Nutrición Materno Infantil" },
    period: { en: "Feb 2020 – Jun 2020", es: "Feb 2020 – Jun 2020" },
    loc: { en: "Colombia", es: "Colombia" },
    bullets: {
      en: [
        "Delivered lectures for the Maternal and Child Nutrition course.",
        "Supported grading of exams and workshops, including the Nutrition Care Process.",
      ],
      es: [
        "Dicté clases del curso de Nutrición Materno Infantil.",
        "Apoyé la calificación de exámenes y talleres, incluyendo el Proceso de Atención Nutricional.",
      ],
    },
  },
  {
    org: "Secretaría de Integración Social",
    role: { en: "Registered Dietitian – Early Childhood Program", es: "Nutricionista Dietista – Primera Infancia" },
    period: { en: "Aug 2019 – Jan 2020", es: "Ago 2019 – Ene 2020" },
    loc: { en: "Bogotá, Colombia", es: "Bogotá, Colombia" },
    bullets: {
      en: [
        "Led educational sessions on food practices and caregiving skills for families in the “Growing Up in Family” program.",
        "Measured weight and height of children and completed nutritional classifications.",
        "Guided families in food selection during food assistance distribution.",
        "Initiated and monitored care pathways for children with moderate and severe acute malnutrition.",
      ],
      es: [
        "Lideré sesiones educativas sobre prácticas alimentarias y habilidades de cuidado para familias del servicio “Creciendo en Familia”.",
        "Realicé toma de peso y talla a los niños y su correspondiente clasificación nutricional.",
        "Orienté a las familias en la selección de alimentos durante la entrega de apoyos alimentarios.",
        "Activé y monitoreé rutas de atención integral para niños con desnutrición aguda moderada y severa.",
      ],
    },
  },
  {
    org: "Universidad Nacional de Colombia",
    role: { en: "Teaching Assistant – Clinical Maternal and Child Nutrition", es: "Asistente Docente – Nutrición Clínica Materno Infantil" },
    period: { en: "Sep 2019 – Dec 2019", es: "Sep 2019 – Dic 2019" },
    loc: { en: "Bogotá, Colombia", es: "Bogotá, Colombia" },
    bullets: {
      en: [
        "Delivered lectures and supported grading on infant formula prescription, pediatric kidney disease and gestational diabetes mellitus.",
      ],
      es: [
        "Dicté clases y apoyé la calificación en temas como prescripción de fórmulas infantiles, enfermedad renal pediátrica y diabetes mellitus gestacional.",
      ],
    },
  },
  {
    org: "Renal Therapy Services – RTS",
    role: { en: "Registered Dietitian", es: "Nutricionista Dietista" },
    period: { en: "Sep 2018 – Jan 2019", es: "Sep 2018 – Ene 2019" },
    loc: { en: "Colombia", es: "Colombia" },
    bullets: {
      en: [
        "Nutritional assessment and follow-up of adults in the nephroprotection program's renal units.",
        "Prescribed supplements via the MIPRES system according to each patient's needs.",
      ],
      es: [
        "Valoración nutricional y seguimiento de adultos en las unidades renales del programa de nefroprotección.",
        "Prescripción de suplementos mediante el sistema MIPRES según las necesidades de cada paciente.",
      ],
    },
  },
  {
    org: "ICBF",
    role: { en: "Registered Dietitian – Child Protection", es: "Nutricionista Dietista – Protección" },
    period: { en: "Jan 2018 – Jul 2018", es: "Ene 2018 – Jul 2018" },
    loc: { en: "Zipaquirá, Colombia", es: "Zipaquirá, Colombia" },
    bullets: {
      en: [
        "Conducted nutrition and health assessments to verify children's and adolescents' fundamental rights.",
        "Evaluated nutritional status of children, adolescents and pregnant women, identifying risks and needs.",
        "Monitored nutritional status within the Administrative Process for the Restoration of Rights.",
        "Delivered nutrition education to parents and caregivers, promoting healthy habits.",
      ],
      es: [
        "Realicé valoraciones nutricionales y de salud para verificar los derechos fundamentales de niños, niñas y adolescentes.",
        "Evalué el estado nutricional de niños, adolescentes y gestantes, identificando riesgos y necesidades.",
        "Realicé seguimiento nutricional dentro del Proceso Administrativo de Restablecimiento de Derechos.",
        "Brindé educación alimentaria y nutricional a padres y cuidadores, promoviendo hábitos saludables.",
      ],
    },
  },
  {
    org: "Universidad de Antioquia",
    role: { en: "Nutritionist – Field Researcher", es: "Nutricionista – Investigadora de Campo" },
    period: { en: "Sep 2017 – Dec 2017", es: "Sep 2017 – Dic 2017" },
    loc: { en: "Bogotá, Colombia", es: "Bogotá, Colombia" },
    bullets: {
      en: [
        "Applied research on alternative food distribution systems and their potential to inform public policies on food sovereignty and food and nutrition security.",
        "Analyzed community-based supply models and their implications for sustainable, equitable food systems.",
      ],
      es: [
        "Investigación aplicada sobre sistemas alternativos de distribución de alimentos y su potencial para políticas públicas de soberanía y seguridad alimentaria y nutricional.",
        "Analicé modelos de abastecimiento comunitario y sus implicaciones para sistemas alimentarios sostenibles y equitativos.",
      ],
    },
  },
];

/* ============ Education data ============ */
const education = [
  {
    icon: "🎓",
    title: { en: "Master's Degree in Food and Nutritional Security", es: "Maestría en Seguridad Alimentaria y Nutricional" },
    inst: { en: "Graduate studies", es: "Estudios de posgrado" },
    period: "",
    tag: { en: "Degree", es: "Título" },
  },
  {
    icon: "🎓",
    title: { en: "Specialist in Pediatric Clinical Nutrition", es: "Especialización en Nutrición Clínica Pediátrica" },
    inst: { en: "Graduate studies", es: "Estudios de posgrado" },
    period: "",
    tag: { en: "Degree", es: "Título" },
  },
  {
    icon: "🎓",
    title: { en: "Dietitian Nutritionist", es: "Nutricionista Dietista" },
    inst: { en: "Universidad Nacional de Colombia", es: "Universidad Nacional de Colombia" },
    period: "",
    tag: { en: "Degree", es: "Título" },
  },
  {
    icon: "🤖",
    title: { en: "International Course on Artificial Intelligence and Nutrition", es: "Curso Internacional de Inteligencia Artificial y Nutrición" },
    inst: { en: "Instituto Universitario Vive Sano", es: "Instituto Universitario Vive Sano" },
    period: "2025 – 2026",
    tag: { en: "Course", es: "Curso" },
  },
  {
    icon: "🗣",
    title: { en: "English C1", es: "Inglés C1" },
    inst: { en: "Centro Colombo Americano", es: "Centro Colombo Americano" },
    period: "2025 – 2026",
    tag: { en: "Language", es: "Idioma" },
  },
  {
    icon: "🏋️",
    title: { en: "Workshop: Sports Nutrition — High-Performance Fitness", es: "Taller: Nutrición Deportiva — Fitness al Alto Rendimiento" },
    inst: { en: "Instituto Universitario Vive Sano", es: "Instituto Universitario Vive Sano" },
    period: "2025",
    tag: { en: "Workshop", es: "Taller" },
  },
  {
    icon: "🗣",
    title: { en: "General English — Advanced C1", es: "Inglés General — Avanzado C1" },
    inst: { en: "Kaplan", es: "Kaplan" },
    period: "2024",
    tag: { en: "Language", es: "Idioma" },
  },
  {
    icon: "🦠",
    title: { en: "Certification: Food and Cooking for the Gut Microbiota", es: "Certificación: Alimentación y Cocina para la Microbiota Intestinal" },
    inst: { en: "ACODIN", es: "ACODIN" },
    period: "2024",
    tag: { en: "Certification", es: "Certificación" },
  },
];

/* ============ Skills & Certifications ============ */
const skills = {
  en: [
    "Clinical Nutrition", "Pediatric Clinical Nutrition", "Renal Nutrition",
    "GLP-1 Nutritional Therapy", "Maternal & Child Nutrition", "Behavior Change Coaching",
    "Individualized Meal Planning", "Food & Nutrition Security", "Nutrition Education",
    "CPR", "First Aid", "Emergency Management",
  ],
  es: [
    "Nutrición Clínica", "Nutrición Clínica Pediátrica", "Nutrición Renal",
    "Terapia Nutricional GLP-1", "Nutrición Materno Infantil", "Coaching de Cambio de Hábitos",
    "Planes de Alimentación Individualizados", "Seguridad Alimentaria y Nutricional", "Educación Nutricional",
    "RCP", "Primeros Auxilios", "Gestión de Emergencias",
  ],
};

const certs = {
  en: [
    "Instituto Universitario Vive Sano",
    "Personal Branding Course",
    "Verified International Academic Qualifications",
    "First Aid",
  ],
  es: [
    "Instituto Universitario Vive Sano",
    "Curso de Marca Personal",
    "Verified International Academic Qualifications",
    "Primeros Auxilios",
  ],
};

/* ============ Rendering ============ */
let currentLang = "en";

function renderStatic(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
}

function renderTimeline(lang) {
  const el = document.getElementById("timeline");
  el.innerHTML = experience
    .map(
      (job) => `
      <div class="tl-item reveal">
        <span class="tl-period">${job.period[lang]}</span>
        <h3 class="tl-role">${job.role[lang]}</h3>
        <p><span class="tl-org">${job.org}</span><span class="tl-loc">· ${job.loc[lang]}</span></p>
        <ul>${job.bullets[lang].map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>`
    )
    .join("");
}

function renderEducation(lang) {
  const el = document.getElementById("edu-grid");
  el.innerHTML = education
    .map(
      (item) => `
      <div class="edu-card reveal">
        <span class="edu-icon">${item.icon}</span>
        <h3>${item.title[lang]}</h3>
        <p class="edu-inst">${item.inst[lang]}</p>
        ${item.period ? `<span class="edu-period">${item.period}</span>` : ""}
        <span class="edu-tag">${item.tag[lang]}</span>
      </div>`
    )
    .join("");
}

function renderLists(lang) {
  document.getElementById("skills-list").innerHTML = skills[lang].map((s) => `<li>${s}</li>`).join("");
  document.getElementById("certs-list").innerHTML = certs[lang].map((c) => `<li>${c}</li>`).join("");
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-es").classList.toggle("active", lang === "es");

  renderStatic(lang);
  renderTimeline(lang);
  renderEducation(lang);
  renderLists(lang);
  observeReveals();
}

/* ============ Scroll reveal ============ */
let observer;
function observeReveals() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* Close mobile nav on link click */
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => document.body.classList.remove("nav-open"))
);

document.getElementById("year").textContent = new Date().getFullYear();

/* ============ Init ============ */
const saved = localStorage.getItem("lang");
const initial = saved || ((navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en");
setLang(initial);
