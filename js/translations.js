/**
 * Looptra Website Translation System
 * 
 * This file contains all translations for the Looptra website.
 * Translations are embedded directly to avoid CORS issues when serving locally.
 * 
 * Structure:
 * - Navigation & Header
 * - Hero Section  
 * - Benefits Section
 * - Applications Section
 * - Ecosystem Section
 * - Testimonials Section
 * - Early Access Section
 * - FAQ Section
 * - Footer Section
 */

const TRANSLATIONS = {
    fr: {
        // Navigation & Header
        "nav-applications": "Applications",
        "nav-ecosysteme": "Écosystème", 
        "nav-temoignages": "Témoignages",
        "nav-faq": "FAQ",
        "nav-cta": "Commencer",

        // Hero Section
        "hero-title": "Des assistants IA directement dans ChatGPT.",
        "hero-subtitle": "Accédez à des assistants spécialisés sans quitter votre interface IA habituelle. Looptra construit sur l'infrastructure existante pour créer le nouvel App Store des agents génératifs.",
        "hero-cta": "Découvrir nos assistants",

        // Benefits Section
        "benefit-1-title": "Zéro app supplémentaire.",
        "benefit-1-text": "Nos assistants vivent directement dans ChatGPT. Vous gardez vos habitudes, on ajoute la spécialisation métier. Pas de nouvelle interface à apprendre, pas de compte à créer.",
        "benefit-2-title": "Construits sur l'infrastructure IA existante.",
        "benefit-2-text": "Nous ne réinventons pas la roue. Nos assistants exploitent la puissance des modèles GPT en évolution perpétuelle et y ajoutent notre propre couche de données contextuelles. Vous bénéficiez des dernières avancées IA avec la personnalisation métier en plus.",
        "benefit-3-title": "Le nouvel App Store génératif.",
        "benefit-3-text": "Nous sommes les pionniers d'un nouveau modèle : des assistants spécialisés disponibles directement dans vos outils IA. Choisissez votre expert métier comme vous installeriez une app sur votre téléphone.",

        // Applications Section
        "applications-title": "Nos assistants dans le GPT Store.",
        "applications-subtitle": "Des spécialistes métier accessibles directement depuis ChatGPT. Pas d'installation, pas de configuration — juste l'expertise dont vous avez besoin.",
        "app-status-available": "Disponible sur GPT Store",
        "app-status-coming": "Bientôt sur GPT Store",
        
        // Rundesk App
        "rundesk-description": "Tapez @Rundesk dans ChatGPT pour accéder à votre assistant logistique. Exploite GPT-4 + nos spécialisations transport pour optimiser vos déplacements directement dans votre conversation.",
        "rundesk-feature-1": "Accessible via ChatGPT (aucune app à installer)",
        "rundesk-feature-2": "Connecté aux APIs SNCF, Trainline en temps réel",
        "rundesk-feature-3": "Mémoire de vos préférences et historiques",
        "rundesk-feature-4": "Calculs et réservations dans la conversation",
        "rundesk-cta": "Accéder sur ChatGPT",
        
        // Tasklane App
        "tasklane-description": "L'assistant de priorisation qui transforme votre ChatGPT en chef de projet expert. Analyse vos tâches via GPT et applique les méthodologies de gestion de projet avancées.",
        "tasklane-feature-1": "Intégration native dans votre workflow ChatGPT",
        "tasklane-feature-2": "Connexions Asana, Notion via l'infrastructure GPT",
        "tasklane-feature-3": "Algorithmes de priorisation sur modèles évolutifs",
        "tasklane-feature-4": "Mises à jour automatiques avec les nouveaux GPT",
        "tasklane-cta": "Être notifié",

        // Ecosystem Section
        "ecosystem-title": "L'écosystème Looptra",
        "ecosystem-subtitle": "Un orchestrateur central qui connecte vos assistants à l'ensemble des données et services nécessaires à leur expertise métier, avec notre propre couche de données contextuelles sécurisée.",
        
        // Ecosystem Diagram
        "orchestrator-title": "Looptra",
        "orchestrator-subtitle": "Orchestrateur Central",
        "user-data-title": "🔐 Base de données Looptra sécurisée",
        "data-item-1": "Préférences métier",
        "data-item-2": "Historiques d'interactions", 
        "data-item-3": "Contextes business",
        "data-item-4": "Configurations assistants",
        "data-item-5": "Données d'apprentissage",
        "apis-title": "🔌 Looptra-MCP & APIs externes",
        "transport-category": "Transport",
        "transport-api-1": "SNCF Connect",
        "transport-api-2": "Trainline",
        "transport-api-3": "Google Maps",
        "productivity-category": "Productivité",
        "productivity-api-1": "Notion",
        "productivity-api-2": "Asana", 
        "productivity-api-3": "Trello",
        "booking-category": "Réservation",
        "booking-api-1": "Booking.com",
        "booking-api-2": "Hotels.com",
        "booking-api-3": "Airbnb",
        "expanding-category": "+ À venir",
        "expanding-api-1": "Calendly",
        "expanding-api-2": "Slack",
        "expanding-api-3": "HubSpot",
        "llm-title": "🧠 Moteurs LLM spécialisés",
        "llm-gpt4": "GPT-4",
        "llm-gpt4-desc": "Base conversationnelle",
        "llm-perplexity": "Perplexity",
        "llm-perplexity-desc": "Recherche temps réel",
        "llm-grok": "Grok",
        "llm-grok-desc": "Analyse de données",
        "llm-others": "+ Autres",
        "llm-others-desc": "Moteurs spécialisés",
        "agents-title": "🤖 Assistants IA spécialisés",
        "agent-rundesk": "Rundesk",
        "agent-rundesk-desc": "Expert logistique & transport",
        "agent-rundesk-status": "Disponible",
        "agent-tasklane": "Tasklane",
        "agent-tasklane-desc": "Expert gestion de projet",
        "agent-tasklane-status": "Bientôt",
        "agent-future": "Agent N+1",
        "agent-future-desc": "Spécialiste à définir",
        "agent-future-status": "À venir",
        
        // Ecosystem Benefits
        "ecosystem-benefit-1-title": "Performance optimisée",
        "ecosystem-benefit-1-text": "Chaque assistant accède instantanément aux bonnes données et API selon son domaine d'expertise.",
        "ecosystem-benefit-2-title": "Sécurité centralisée",
        "ecosystem-benefit-2-text": "Un seul point de contrôle pour la gestion des accès, des permissions et de la confidentialité. Vos données contextuelles sont stockées de manière chiffrée dans notre infrastructure européenne sécurisée.",
        "ecosystem-benefit-3-title": "Évolutivité garantie",
        "ecosystem-benefit-3-text": "L'ajout de nouveaux assistants, APIs ou moteurs LLM se fait sans impact sur l'existant.",

        // Testimonials Section
        "testimonials-title": "Ils ont adopté les assistants Looptra.",
        "testimonials-subtitle": "Plus de 500 professionnels utilisent déjà nos assistants pour transformer leur productivité.",
        "testimonial-1": "Je reste dans ChatGPT, je tape @Rundesk et j'ai directement mon expert transport. Pas besoin d'apprendre un nouvel outil, c'est génial. Je gagne 4h par semaine sur ma logistique.",
        "testimonial-2": "L'approche Looptra est brillante : utiliser GPT-4 comme base et ajouter la spécialisation métier. Rundesk comprend mes contraintes de déplacement mieux qu'un humain.",
        "testimonial-3": "Enfin des agents IA qui ont du sens ! Pas une énième app à installer, mais une évolution naturelle de ChatGPT vers la spécialisation métier. C'est l'avenir.",
        "testimonial-4": "Mes collègues utilisent déjà ChatGPT. Avec Rundesk, on a gardé nos habitudes mais on a gagné un expert logistique. Adoption instantanée dans l'équipe.",
        "testimonial-5": "La vision Looptra d'un App Store d'agents dans ChatGPT est exactement ce qu'on attendait. Chaque métier va avoir ses spécialistes, directement intégrés.",
        "testimonial-6": "J'adore le fait que Rundesk évolue automatiquement avec les mises à jour de GPT. Je bénéficie des dernières avancées IA sans rien faire.",

        // FAQ Section
        "faq-title": "Questions fréquentes",
        "faq-subtitle": "Tout ce que vous devez savoir sur les assistants Looptra.",
        "faq-question-1": "Comment accéder aux assistants Looptra ?", 
        "faq-answer-1": "Nos assistants sont disponibles directement dans ChatGPT via le GPT Store. Tapez simplement @Rundesk dans votre conversation ChatGPT pour accéder à l'expertise transport. Aucune app supplémentaire à installer, aucun compte à créer.",
        "faq-question-2": "Qu'est-ce qui différencie Looptra des autres assistants IA ?",
        "faq-answer-2": "Nous construisons sur l'infrastructure OpenAI existante au lieu de créer de nouveaux modèles. Nos assistants exploitent GPT-4 et y ajoutent l'expertise métier spécialisée. Vous bénéficiez automatiquement des évolutions de GPT sans changer d'outil.",
        "faq-question-3": "Pourquoi parlez-vous de \"nouvel App Store\" ?",
        "faq-answer-3": "Nous sommes pionniers d'un nouveau modèle : des assistants spécialisés disponibles directement dans vos outils IA génératifs. Comme les apps sur votre téléphone, mais pour l'expertise métier dans ChatGPT. C'est l'évolution naturelle de l'IA générative vers la spécialisation.",
        "faq-question-4": "Mes données sont-elles sécurisées ?",
        "faq-answer-4": "Nos assistants respectent la politique de confidentialité d'OpenAI. Nous n'ajoutons aucune couche de stockage supplémentaire. Vos conversations restent dans l'écosystème ChatGPT avec les mêmes garanties de sécurité.",
        "faq-question-5": "Comment les assistants évoluent-ils ?",
        "faq-answer-5": "Nos assistants bénéficient automatiquement des améliorations de GPT (nouvelles versions, capacités étendues). Nous mettons à jour régulièrement les spécialisations métier. Vous n'avez aucune maintenance à faire, tout se fait en arrière-plan.",

        // Early Access Section
        "early-access-title": "Accès anticipé",
        "early-access-subtitle": "Soyez parmi les premiers à tester nos nouvelles applications et à façonner l'avenir de votre productivité professionnelle.",
        "early-access-email-placeholder": "votre.email@entreprise.com",
        "early-access-button": "Rejoindre la liste",
        "early-access-benefits": "✨ Accès prioritaire aux bêtas  •  🎯 Influence sur le roadmap  •  📄 0 spam garanti",

        // Footer Section
        "footer-privacy": "Politique de confidentialité",
        "footer-terms": "CGU/CGV", 
        "footer-copyright": "© 2025 Looptra. Le studio des agents intelligents."
    },
    en: {
        // Navigation & Header
        "nav-applications": "Applications",
        "nav-ecosysteme": "Ecosystem",
        "nav-temoignages": "Testimonials",
        "nav-faq": "FAQ",
        "nav-cta": "Get Started",

        // Hero Section
        "hero-title": "AI assistants directly in ChatGPT.",
        "hero-subtitle": "Access specialized assistants without leaving your usual AI interface. Looptra builds on existing infrastructure to create the new App Store for generative agents.",
        "hero-cta": "Discover our assistants",

        // Benefits Section
        "benefit-1-title": "Zero additional apps.",
        "benefit-1-text": "Our assistants live directly in ChatGPT. You keep your habits, we add industry specialization. No new interface to learn, no account to create.",
        "benefit-2-title": "Built on existing AI infrastructure.",
        "benefit-2-text": "We don't reinvent the wheel. Our assistants leverage the power of ever-evolving GPT models and add our own contextual data layer. You benefit from the latest AI advances with added industry personalization.",
        "benefit-3-title": "The new generative App Store.",
        "benefit-3-text": "We are pioneers of a new model: specialized assistants available directly in your generative AI tools. Choose your industry expert like you would install an app on your phone.",

        // Applications Section
        "applications-title": "Our assistants in the GPT Store.",
        "applications-subtitle": "Industry specialists accessible directly from ChatGPT. No installation, no configuration — just the expertise you need.",
        "app-status-available": "Available on GPT Store",
        "app-status-coming": "Coming Soon on GPT Store",
        
        // Rundesk App
        "rundesk-description": "Type @Rundesk in ChatGPT to access your logistics assistant. Leverages GPT-4 + our transportation specializations to optimize your travel directly in your conversation.",
        "rundesk-feature-1": "Accessible via ChatGPT (no app to install)",
        "rundesk-feature-2": "Connected to SNCF, Trainline APIs in real-time",
        "rundesk-feature-3": "Memory of your preferences and history",
        "rundesk-feature-4": "Calculations and bookings in the conversation",
        "rundesk-cta": "Access on ChatGPT",
        
        // Tasklane App
        "tasklane-description": "The prioritization assistant that transforms your ChatGPT into an expert project manager. Analyzes your tasks via GPT and applies advanced project management methodologies.",
        "tasklane-feature-1": "Native integration in your ChatGPT workflow",
        "tasklane-feature-2": "Asana, Notion connections via GPT infrastructure",
        "tasklane-feature-3": "Prioritization algorithms on evolving models",
        "tasklane-feature-4": "Automatic updates with new GPT versions",
        "tasklane-cta": "Get Notified",

        // Ecosystem Section
        "ecosystem-title": "The Looptra Ecosystem",
        "ecosystem-subtitle": "A central orchestrator that connects your assistants to all the data and services needed for their industry expertise, with our own secure contextual data layer.",
        
        // Ecosystem Diagram
        "orchestrator-title": "Looptra",
        "orchestrator-subtitle": "Central Orchestrator",
        "user-data-title": "🔐 Secure Looptra database",
        "data-item-1": "Business preferences",
        "data-item-2": "Interaction history",
        "data-item-3": "Business contexts",
        "data-item-4": "Assistant configurations",
        "data-item-5": "Learning data",
        "apis-title": "🔌 Looptra-MCP & External APIs",
        "transport-category": "Transport",
        "transport-api-1": "SNCF Connect",
        "transport-api-2": "Trainline",
        "transport-api-3": "Google Maps",
        "productivity-category": "Productivity",
        "productivity-api-1": "Notion",
        "productivity-api-2": "Asana",
        "productivity-api-3": "Trello",
        "booking-category": "Booking",
        "booking-api-1": "Booking.com",
        "booking-api-2": "Hotels.com",
        "booking-api-3": "Airbnb",
        "expanding-category": "+ Coming",
        "expanding-api-1": "Calendly",
        "expanding-api-2": "Slack",
        "expanding-api-3": "HubSpot",
        "llm-title": "🧠 Specialized LLM engines",
        "llm-gpt4": "GPT-4",
        "llm-gpt4-desc": "Conversational base",
        "llm-perplexity": "Perplexity",
        "llm-perplexity-desc": "Real-time search",
        "llm-grok": "Grok",
        "llm-grok-desc": "Data analysis",
        "llm-others": "+ Others",
        "llm-others-desc": "Specialized engines",
        "agents-title": "🤖 Specialized AI assistants",
        "agent-rundesk": "Rundesk",
        "agent-rundesk-desc": "Logistics & transport expert",
        "agent-rundesk-status": "Available",
        "agent-tasklane": "Tasklane",
        "agent-tasklane-desc": "Project management expert",
        "agent-tasklane-status": "Soon",
        "agent-future": "Agent N+1",
        "agent-future-desc": "Specialist to be defined",
        "agent-future-status": "Coming",
        
        // Ecosystem Benefits
        "ecosystem-benefit-1-title": "Optimized Performance",
        "ecosystem-benefit-1-text": "Each assistant instantly accesses the right data and APIs according to their domain expertise.",
        "ecosystem-benefit-2-title": "Centralized Security",
        "ecosystem-benefit-2-text": "A single control point for managing access, permissions and confidentiality. Your contextual data is stored encrypted in our secure European infrastructure.",
        "ecosystem-benefit-3-title": "Guaranteed Scalability",
        "ecosystem-benefit-3-text": "Adding new assistants, APIs or LLM engines is done without impact on existing systems.",

        // Testimonials Section
        "testimonials-title": "They've adopted Looptra assistants.",
        "testimonials-subtitle": "Over 500 professionals already use our assistants to transform their productivity.",
        "testimonial-1": "I stay in ChatGPT, type @Rundesk and I directly have my transport expert. No need to learn a new tool, it's brilliant. I save 4 hours per week on logistics.",
        "testimonial-2": "Looptra's approach is brilliant: using GPT-4 as a base and adding industry specialization. Rundesk understands my travel constraints better than a human.",
        "testimonial-3": "Finally AI agents that make sense! Not yet another app to install, but a natural evolution of ChatGPT towards industry specialization. This is the future.",
        "testimonial-4": "My colleagues already use ChatGPT. With Rundesk, we kept our habits but gained a logistics expert. Instant adoption in the team.",
        "testimonial-5": "Looptra's vision of an agent App Store in ChatGPT is exactly what we were waiting for. Every industry will have its specialists, directly integrated.",
        "testimonial-6": "I love the fact that Rundesk evolves automatically with GPT updates. I benefit from the latest AI advances without doing anything.",

        // FAQ Section
        "faq-title": "Frequently Asked Questions",
        "faq-subtitle": "Everything you need to know about Looptra assistants.",
        "faq-question-1": "How do I access Looptra assistants?",
        "faq-answer-1": "Our assistants are available directly in ChatGPT via the GPT Store. Simply type @Rundesk in your ChatGPT conversation to access transport expertise. No additional app to install, no account to create.",
        "faq-question-2": "What differentiates Looptra from other AI assistants?",
        "faq-answer-2": "We build on existing OpenAI infrastructure instead of creating new models. Our assistants leverage GPT-4 and add specialized industry expertise. You automatically benefit from GPT evolutions without changing tools.",
        "faq-question-3": "Why do you talk about a \"new App Store\"?",
        "faq-answer-3": "We are pioneers of a new model: specialized assistants available directly in your generative AI tools. Like apps on your phone, but for industry expertise in ChatGPT. It's the natural evolution of generative AI towards specialization.",
        "faq-question-4": "Is my data secure?",
        "faq-answer-4": "Our assistants respect OpenAI's privacy policy. We don't add any additional storage layer. Your conversations remain in the ChatGPT ecosystem with the same security guarantees.",
        "faq-question-5": "How do assistants evolve?",
        "faq-answer-5": "Our assistants automatically benefit from GPT improvements (new versions, extended capabilities). We regularly update industry specializations. You have no maintenance to do, everything happens in the background.",

        // Early Access Section
        "early-access-title": "Early Access",
        "early-access-subtitle": "Be among the first to test our new applications and shape the future of your professional productivity.",
        "early-access-email-placeholder": "your.email@company.com",
        "early-access-button": "Join the list",
        "early-access-benefits": "✨ Priority beta access  •  🎯 Roadmap influence  •  📄 0 spam guaranteed",

        // Footer Section
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Service",
        "footer-copyright": "© 2025 Looptra. The intelligent agents studio."
    }
};

/**
 * Translation Manager Class
 * Handles language switching and text translation for the website
 */
class TranslationManager {
    constructor() {
        this.currentLanguage = 'fr';
        this.translations = TRANSLATIONS;
        this.defaultLanguage = 'fr';
    }

    /**
     * Change the website language
     * @param {string} language - Language code ('fr' or 'en')
     */
    async changeLanguage(language) {
        // Validate language
        if (!this.translations[language]) {
            console.warn(`Language ${language} not supported, falling back to ${this.defaultLanguage}`);
            language = this.defaultLanguage;
        }

        this.currentLanguage = language;
        document.documentElement.lang = language;
        
        // Update all translatable elements
        const translatableElements = document.querySelectorAll('[data-translate]');
        
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[language][key];
            
            if (translation) {
                this.updateElement(element, translation);
            }
        });
        
        // Save language preference
        localStorage.setItem('selectedLanguage', language);
        
        // Update language selector
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = language;
        }
    }

    /**
     * Update a single element with translation
     * @param {HTMLElement} element - Element to update
     * @param {string} translation - Translation text
     */
    updateElement(element, translation) {
        // Handle different element types
        if (element.tagName === 'INPUT' && element.type === 'email') {
            element.placeholder = translation;
        } else if (element.tagName === 'BUTTON' && element.classList.contains('faq-question')) {
            // For FAQ buttons, preserve the + span
            const plusSpan = element.querySelector('span');
            element.innerHTML = translation + (plusSpan ? plusSpan.outerHTML : '<span>+</span>');
        } else {
            element.textContent = translation;
        }
    }

    /**
     * Initialize the translation system
     */
    async init() {
        // Get saved language preference or use default
        const savedLanguage = localStorage.getItem('selectedLanguage') || this.defaultLanguage;
        
        // Set initial language
        if (savedLanguage !== this.defaultLanguage) {
            await this.changeLanguage(savedLanguage);
        } else {
            this.currentLanguage = savedLanguage;
            document.documentElement.lang = savedLanguage;
        }
    }
}

// Global translation manager instance
const translationManager = new TranslationManager();

// Global function for the dropdown onchange event
async function changeLanguage(language) {
    await translationManager.changeLanguage(language);
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    await translationManager.init();
});