const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'formation-1.html');
let template = fs.readFileSync(templatePath, 'utf-8');

const formations = [
    {
        id: 2,
        badge: 'Pédagogie',
        title: 'Animer une formation pro',
        description: 'Développez vos compétences de formateur et apprenez à animer des sessions interactives, engageantes et pédagogiquement efficaces en situation réelle pour des professionnels.',
        duration: '3 Jours (21h)'
    },
    {
        id: 3,
        badge: 'Digital / Marketing',
        title: 'Formation Community Manager',
        description: 'Maîtrisez les réseaux sociaux, construisez une stratégie éditoriale performante et fédérez une communauté autour de votre marque. Apprenez à utiliser les outils d\'automatisation et de création avec l\'IA.',
        duration: '4 Jours (28h)'
    },
    {
        id: 4,
        badge: 'IA & Pédagogie',
        title: 'Conception de supports assistée par l\'IA',
        description: 'Divisez par deux votre temps de préparation de cours. Apprenez à utiliser l\'IA pour structurer un plan de formation, générer des exercices, des quiz et concevoir des supports visuels impactants.',
        duration: '2 Jours (14h)'
    },
    {
        id: 5,
        badge: 'IT / DSI',
        title: 'Formations en Cybersécurité',
        description: 'Sensibilisez vos collaborateurs aux risques numériques ou formez vos techniciens aux protocoles de sécurité avancés. Une expertise indispensable face à l\'automatisation des cyberattaques.',
        duration: '3 Jours (21h)'
    },
    {
        id: 6,
        badge: 'Intelligence Artificielle',
        title: 'IA Générative & Prompt Engineering',
        description: 'Devenez un expert des LLM (ChatGPT, Claude, Gemini). Maîtrisez l\'art de concevoir des "prompts" complexes pour obtenir des rendus fiables, répliquables et professionnels pour vos tâches quotidiennes.',
        duration: '2 Jours (14h)'
    },
    {
        id: 7,
        badge: 'Stratégie Digitale',
        title: 'Réussir sa Digitalisation',
        description: 'Accompagnement et formation pour les dirigeants et managers souhaitant mener à bien la transformation numérique de leur entreprise. Audit, choix des outils (ERP/CRM) et conduite du changement.',
        duration: '2 Jours (14h)'
    }
];

formations.forEach(f => {
    let content = template
        .replace(/<title>.*?<\/title>/g, `<title>${f.title} | Kayliss Digital</title>`)
        .replace(/<meta name="description" content=".*?"/g, `<meta name="description" content="${f.description}"`)
        .replace(/<span class="badge" style="background-color: rgba\(255,255,255,0\.1\); color: white;">.*?<\/span>/g, `<span class="badge" style="background-color: rgba(255,255,255,0.1); color: white;">${f.badge}</span>`)
        .replace(/<h1 style="color: white; margin-top: 1rem;">.*?<\/h1>/g, `<h1 style="color: white; margin-top: 1rem;">${f.title}</h1>`)
        .replace(/<p style="font-size: 1\.25rem; opacity: 0\.9; margin-block: 1\.5rem;">\s*.*?\s*<\/p>/sg, `<p style="font-size: 1.25rem; opacity: 0.9; margin-block: 1.5rem;">${f.description}</p>`)
        .replace(/<span>2 Jours \(14h\)<\/span>/g, `<span>${f.duration}</span>`);
    
    fs.writeFileSync(path.join(__dirname, `formation-${f.id}.html`), content, 'utf-8');
});

console.log('Pages generated successfully.');
