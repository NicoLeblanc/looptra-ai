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
        "hero-title": "Une Galaxie d'Applications Intelligentes directement dans ChatGPT",
        "hero-subtitle": "Accédez à des applications intelligentes spécialisées sans quitter votre interface IA habituelle. Looptra construit sur l'infrastructure existante pour créer le nouvel App Store des agents génératifs.",
        "hero-cta-primary": "Rejoindre l'accès anticipé",
        "hero-cta": "Découvrir nos applications",

        // Benefits Section
        "benefit-1-title": "Zéro app supplémentaire.",
        "benefit-1-text": "Nos applications intelligentes vivent directement dans ChatGPT. Vous gardez vos habitudes, on ajoute la spécialisation métier. Pas de nouvelle interface à apprendre, pas de compte à créer.",
        "benefit-2-title": "Construits sur l'infrastructure IA existante.",
        "benefit-2-text": "Nous ne réinventons pas la roue. Nos applications intelligentes exploitent la puissance des modèles GPT en évolution perpétuelle et y ajoutent notre propre couche de données contextuelles. Vous bénéficiez des dernières avancées IA avec la personnalisation métier en plus.",
        "benefit-3-title": "Le nouvel App Store génératif.",
        "benefit-3-text": "Nous sommes les pionniers d'un nouveau modèle : des applications intelligentes spécialisées disponibles directement dans vos outils IA. Choisissez votre expert métier comme vous installeriez une app sur votre téléphone.",

        // Applications Section
        "applications-title": "Nos applications intelligentes dans le GPT Store.",
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
        
        // Todozen App
        "todozen-description": "L'application intelligente de gestion de tâches conversationnelle. Ajoutez, organisez et suivez vos to-do en parlant naturellement avec votre assistant personnel directement dans ChatGPT.",
        "todozen-feature-1": "Gestion conversationnelle de vos tâches",
        "todozen-feature-2": "Découpage automatique des tâches complexes",
        "todozen-feature-3": "Planification journalière, hebdomadaire, mensuelle",
        "todozen-feature-4": "Rappels intelligents et reformulation de tâches",
        "todozen-cta": "Être notifié",
        
        // MailFlow App
        "mailflow-description": "L'assistant Inbox Zero qui transforme votre gestion d'emails. Triage intelligent, réponses automatisées et organisation optimale - directement dans ChatGPT pour atteindre la boîte de réception vide.",
        "mailflow-feature-1": "Triage intelligent de vos emails via GPT",
        "mailflow-feature-2": "Connexions Gmail, Outlook en temps réel",
        "mailflow-feature-3": "Génération de réponses contextuelles",
        "mailflow-feature-4": "Stratégies Inbox Zero personnalisées",
        "mailflow-cta": "Être notifié",
        
        // NewsFlow App
        "newsflow-description": "Votre veilleur sectoriel intelligent qui crée des podcasts personnalisés. Analyse les actualités de votre industrie, synthétise l'essentiel et vous l'envoie en format audio via WhatsApp.",
        "newsflow-feature-1": "Veille sectorielle automatisée via GPT",
        "newsflow-feature-2": "Génération de podcasts personnalisés",
        "newsflow-feature-3": "Diffusion automatique via WhatsApp",
        "newsflow-feature-4": "Analyse des tendances de votre marché",
        "newsflow-cta": "Être notifié",
        
        // BizDev Pro App
        "bizdev-description": "Votre coach en développement commercial personnel. Analyse vos prospects, optimise vos approches et vous guide dans vos négociations pour maximiser vos performances commerciales.",
        "bizdev-feature-1": "Coaching commercial personnalisé via GPT",
        "bizdev-feature-2": "Analyse de prospects et opportunités",
        "bizdev-feature-3": "Scripts de vente adaptatifs",
        "bizdev-feature-4": "Suivi des performances et KPIs",
        "bizdev-cta": "Être notifié",

        // Ecosystem Section
        "ecosystem-title": "L'écosystème Looptra",
        "ecosystem-subtitle": "Un orchestrateur central qui connecte vos applications intelligentes à l'ensemble des données et services nécessaires à leur expertise métier, avec notre propre couche de données contextuelles sécurisée.",
        
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
        "agents-title": "🤖 Applications Intelligentes spécialisées",
        "agent-rundesk": "Rundesk",
        "agent-rundesk-desc": "Expert logistique & transport",
        "agent-rundesk-status": "Disponible",
        "agent-tasklane": "Tasklane",
        "agent-tasklane-desc": "Expert gestion de projet",
        "agent-tasklane-status": "Bientôt",
        "agent-todozen": "Todozen",
        "agent-todozen-desc": "Expert gestion de tâches conversationnelle",
        "agent-todozen-status": "Bientôt",
        "agent-mailflow": "MailFlow",
        "agent-mailflow-desc": "Expert gestion d'emails & Inbox Zero",
        "agent-mailflow-status": "Bientôt",
        "agent-newsflow": "NewsFlow",
        "agent-newsflow-desc": "Expert veille sectorielle & podcasts",
        "agent-newsflow-status": "Bientôt",
        "agent-bizdev": "BizDev Pro",
        "agent-bizdev-desc": "Expert développement commercial",
        "agent-bizdev-status": "Bientôt",
        "agent-future": "Agent N+1",
        "agent-future-desc": "Spécialiste à définir",
        "agent-future-status": "À venir",
        
        // Integrations Section
        "integrations-title": "Intégrations natives",
        "integrations-subtitle": "Connectez vos applications intelligentes Looptra aux outils que vous utilisez déjà.",
        "integrations-communication": "Communication",
        "integrations-productivity": "Productivité",
        "integrations-storage": "Stockage & Documents",
        "integrations-calendar": "Calendrier & Planning",
        "integrations-crm": "CRM & Ventes",
        "integrations-analytics": "Analytics & Reporting",
        
        // Communication integrations
        "integration-whatsapp": "WhatsApp",
        "integration-slack": "Slack",
        "integration-gmail": "Gmail",
        "integration-teams": "Microsoft Teams",
        "integration-outlook": "Outlook",
        "integration-telegram": "Telegram",
        
        // Productivity integrations
        "integration-notion": "Notion",
        "integration-asana": "Asana",
        "integration-trello": "Trello",
        "integration-monday": "Monday.com",
        "integration-clickup": "ClickUp",
        "integration-airtable": "Airtable",
        
        // Storage & Documents integrations
        "integration-gdrive": "Google Drive",
        "integration-linkedin": "LinkedIn",
        "integration-onedrive": "OneDrive",
        "integration-box": "Box",
        "integration-canva": "Canva",
        "integration-figma": "Figma",
        "integration-atlassian": "Atlassian",
        
        // Calendar & Planning integrations
        "integration-gcalendar": "Google Calendar",
        "integration-outlook-cal": "Outlook Calendar",
        "integration-calendly": "Calendly",
        "integration-acuity": "Acuity Scheduling",
        "integration-doodle": "Doodle",
        "integration-when2meet": "When2meet",
        
        // CRM & Sales integrations
        "integration-hubspot": "HubSpot",
        "integration-salesforce": "Salesforce",
        "integration-pipedrive": "Pipedrive",
        "integration-zendesk": "Zendesk",
        "integration-stripe": "Stripe",
        "integration-shopify": "Shopify",
        
        // Analytics & Reporting integrations
        "integration-ganalytics": "Google Analytics",
        "integration-tableau": "Tableau",
        "integration-powerbi": "Power BI",
        "integration-mixpanel": "Mixpanel",
        "integration-hotjar": "Hotjar",
        "integration-amplitude": "Amplitude",
        
        // Integrations CTA
        "integrations-cta-title": "Vous souhaitez une autre intégration ? Contactez-nous...",
        "integrations-cta-subtitle": "Nos applications intelligentes peuvent s'adapter à pratiquement n'importe quelle API ou service.",
        "integrations-cta-button": "Demander une intégration",
        
        // Ecosystem Benefits
        "ecosystem-benefit-1-title": "Performance optimisée",
        "ecosystem-benefit-1-text": "Chaque application intelligente accède instantanément aux bonnes données et API selon son domaine d'expertise.",
        "ecosystem-benefit-2-title": "Sécurité centralisée",
        "ecosystem-benefit-2-text": "Un seul point de contrôle pour la gestion des accès, des permissions et de la confidentialité. Vos données contextuelles sont stockées de manière chiffrée dans notre infrastructure européenne sécurisée.",
        "ecosystem-benefit-3-title": "Évolutivité garantie",
        "ecosystem-benefit-3-text": "L'ajout de nouvelles applications intelligentes, APIs ou moteurs LLM se fait sans impact sur l'existant.",

        // Testimonials Section
        "testimonials-title": "Ils ont adopté les applications intelligentes Looptra.",
        "testimonials-subtitle": "Plus de 500 professionnels utilisent déjà nos applications intelligentes pour transformer leur productivité.",
        "testimonial-1": "Je reste dans ChatGPT, je tape @Rundesk et j'ai directement mon expert transport. Pas besoin d'apprendre un nouvel outil, c'est génial. Je gagne 4h par semaine sur ma logistique.",
        "testimonial-2": "L'approche Looptra est brillante : utiliser GPT-4 comme base et ajouter la spécialisation métier. Rundesk comprend mes contraintes de déplacement mieux qu'un humain.",
        "testimonial-3": "Enfin des applications intelligentes qui ont du sens ! Pas une énième app à installer, mais une évolution naturelle de ChatGPT vers la spécialisation métier. C'est l'avenir.",
        "testimonial-4": "Mes collègues utilisent déjà ChatGPT. Avec Rundesk, on a gardé nos habitudes mais on a gagné un expert logistique. Adoption instantanée dans l'équipe.",
        "testimonial-5": "La vision Looptra d'un App Store d'applications intelligentes dans ChatGPT est exactement ce qu'on attendait. Chaque métier va avoir ses spécialistes, directement intégrés.",
        "testimonial-6": "J'adore le fait que Rundesk évolue automatiquement avec les mises à jour de GPT. Je bénéficie des dernières avancées IA sans rien faire.",

        // FAQ Section
        "faq-title": "Questions fréquentes",
        "faq-subtitle": "Tout ce que vous devez savoir sur les applications intelligentes Looptra.",
        "faq-question-1": "Comment accéder aux applications intelligentes Looptra ?", 
        "faq-answer-1": "Nos applications intelligentes sont disponibles directement dans ChatGPT via le GPT Store. Tapez simplement @Rundesk dans votre conversation ChatGPT pour accéder à l'expertise transport. Aucune app supplémentaire à installer, aucun compte à créer.",
        "faq-question-2": "Qu'est-ce qui différencie Looptra des autres assistants IA ?",
        "faq-answer-2": "Nous construisons sur l'infrastructure OpenAI existante au lieu de créer de nouveaux modèles. Nos assistants exploitent GPT-4 et y ajoutent l'expertise métier spécialisée. Vous bénéficiez automatiquement des évolutions de GPT sans changer d'outil.",
        "faq-question-3": "Pourquoi parlez-vous de \"nouvelle Galaxie d'Applications Intelligentes\" ?",
        "faq-answer-3": "Nous sommes pionniers d'un nouveau modèle : des applications intelligentes spécialisées disponibles directement dans vos outils IA génératifs. Comme les apps sur votre téléphone, mais pour l'expertise métier dans ChatGPT. C'est l'évolution naturelle de l'IA générative vers la spécialisation.",
        "faq-question-4": "Mes données sont-elles sécurisées ?",
        "faq-answer-4": "Nos applications intelligentes respectent la politique de confidentialité d'OpenAI. Nous n'ajoutons aucune couche de stockage supplémentaire. Vos conversations restent dans l'écosystème ChatGPT avec les mêmes garanties de sécurité.",
        "faq-question-5": "Comment les applications intelligentes évoluent-elles ?",
        "faq-answer-5": "Nos applications intelligentes bénéficient automatiquement des améliorations de GPT (nouvelles versions, capacités étendues). Nous mettons à jour régulièrement les spécialisations métier. Vous n'avez aucune maintenance à faire, tout se fait en arrière-plan.",

        // Early Access Section
        "early-access-title": "Accès anticipé",
        "early-access-subtitle": "Soyez parmi les premiers à tester nos nouvelles applications et à façonner l'avenir de votre productivité professionnelle.",
        "early-access-email-placeholder": "votre.email@entreprise.com",
        "early-access-button": "Rejoindre la liste",
        "early-access-benefits": "✨ Accès prioritaire aux bêtas  •  🎯 Influence sur le roadmap",

        // Footer Section
        "footer-privacy": "Politique de confidentialité",
        "footer-terms": "CGU/CGV", 
        "footer-copyright": "© 2025 Looptra. La galaxie d'applications intelligentes.",

        // Legal Pages
        "back-home": "← Retour à l'accueil",
        "last-updated": "Dernière mise à jour :",
        "privacy-title": "Politique de confidentialité",
        "privacy-subtitle": "Comment nous collectons, utilisons et protégeons vos données personnelles",
        "terms-title": "Conditions générales",
        "terms-subtitle": "Conditions d'utilisation et de vente de nos applications intelligentes spécialisées",
        "toc-title": "Sommaire",
        
        // Table of Contents
        "toc-article-1": "1. Objet et champ d'application",
        "toc-article-2": "2. Acceptation des conditions",
        "toc-article-3": "3. Présentation des services",
        "toc-article-4": "4. Accès aux services",
        "toc-article-5": "5. Utilisation des services",
        "toc-article-6": "6. Conditions financières",
        "toc-article-7": "7. Responsabilités",
        "toc-article-8": "8. Propriété intellectuelle",
        "toc-article-9": "9. Données personnelles",
        "toc-article-10": "10. Durée et résiliation",
        "toc-article-11": "11. Force majeure",
        "toc-article-12": "12. Droit applicable et juridiction",
        
        // Article titles
        "terms-article-1-title": "1. Objet et champ d'application",
        "terms-article-2-title": "2. Acceptation des conditions",
        "terms-article-3-title": "3. Présentation des services",
        "terms-article-4-title": "4. Accès aux services",
        "terms-article-5-title": "5. Utilisation des services",
        "terms-article-6-title": "6. Conditions financières",
        "terms-article-7-title": "7. Responsabilités",
        "terms-article-8-title": "8. Propriété intellectuelle",
        "terms-article-9-title": "9. Données personnelles",
        "terms-article-10-title": "10. Durée et résiliation",
        "terms-article-11-title": "11. Force majeure",
        "terms-article-12-title": "12. Droit applicable et juridiction",
        
        // Article 1 - Objet et champ d'application
        "terms-article-1-p1": "Les présentes conditions générales d'utilisation et de vente (ci-après \"CGU/CGV\") régissent l'accès et l'utilisation des services proposés par Looptra, société [forme juridique à compléter], immatriculée sous le numéro [numéro à compléter], dont le siège social est situé [adresse à compléter] (ci-après \"Looptra\", \"nous\", \"notre\").",
        "terms-article-1-p2": "Ces services comprennent l'accès à nos applications intelligentes spécialisées intégrées dans l'écosystème ChatGPT/OpenAI, notamment :",
        "terms-article-1-li1": "Rundesk : Application intelligente spécialisée en logistique et transport",
        "terms-article-1-li2": "Tasklane : Application intelligente spécialisée en gestion de projet",
        "terms-article-1-li3": "Toute autre application intelligente développée par Looptra",
        
        // Article 2 - Acceptation des conditions
        "terms-article-2-p1": "L'accès et l'utilisation de nos services impliquent l'acceptation pleine et entière des présentes CGU/CGV. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.",
        "terms-article-2-p2": "Ces conditions s'appliquent également aux conditions d'utilisation d'OpenAI, notre partenaire technologique pour l'infrastructure ChatGPT.",
        
        // Highlight box
        "terms-highlight": "<strong>Important :</strong> Nos applications intelligentes fonctionnent dans l'écosystème ChatGPT. Vous devez également respecter les conditions d'utilisation d'OpenAI.",
        
        // Article 3 - Présentation des services
        "terms-article-3-subtitle-1": "3.1 Description générale",
        "terms-article-3-p1": "Looptra développe et propose des applications intelligentes spécialisées accessibles directement via ChatGPT. Ces applications combinent la puissance des modèles de langage GPT avec des spécialisations métier spécifiques et une couche de données contextuelles propriétaire.",
        "terms-article-3-subtitle-2": "3.2 Architecture technique",
        "terms-article-3-p2": "Nos services reposent sur une architecture hybride :",
        "terms-article-3-li1": "<strong>Couche ChatGPT/OpenAI :</strong> Interface conversationnelle et modèles de langage",
        "terms-article-3-li2": "<strong>Couche Looptra :</strong> Base de données sécurisée stockant vos préférences, historiques et contextes métier",
        "terms-article-3-li3": "<strong>Intégrations tierces :</strong> APIs spécialisées selon votre domaine d'activité",
        "terms-article-3-subtitle-3": "3.3 Fonctionnalités",
        "terms-article-3-feature1": "Accès à des applications intelligentes spécialisées via ChatGPT",
        "terms-article-3-feature2": "Intégrations avec des APIs tierces (SNCF, Trainline, Notion, etc.)",
        "terms-article-3-feature3": "Personnalisation selon vos préférences métier",
        "terms-article-3-feature4": "Mises à jour automatiques avec l'évolution des modèles GPT",
        "terms-article-3-subtitle-4": "3.4 Disponibilité",
        "terms-article-3-p3": "Nous nous efforçons de maintenir nos services disponibles 24h/24 et 7j/7, mais ne pouvons garantir une disponibilité absolue. Les interruptions programmées pour maintenance seront communiquées à l'avance.",
        
        // Article 4 - Accès aux services
        "terms-article-4-subtitle-1": "4.1 Conditions d'accès",
        "terms-article-4-p1": "Pour accéder à nos services, vous devez :",
        "terms-article-4-li1": "Être âgé d'au moins 18 ans ou représenter une personne morale",
        "terms-article-4-li2": "Disposer d'un compte ChatGPT actif",
        "terms-article-4-li3": "Avoir souscrit à un abonnement Looptra le cas échéant",
        "terms-article-4-li4": "Fournir des informations exactes et à jour",
        "terms-article-4-subtitle-2": "4.2 Compte utilisateur",
        "terms-article-4-p2": "La création d'un compte peut être nécessaire pour certains services. Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités réalisées sous votre compte.",

        // Article 5 - Utilisation des services
        "terms-article-5-subtitle-1": "5.1 Usage autorisé",
        "terms-article-5-p1": "Nos services sont destinés à un usage professionnel légitime. Vous vous engagez à :",
        "terms-article-5-li1": "Utiliser les services conformément à leur destination",
        "terms-article-5-li2": "Respecter les lois et réglementations applicables",
        "terms-article-5-li3": "Ne pas porter atteinte aux droits de tiers",
        "terms-article-5-li4": "Fournir des informations exactes",
        "terms-article-5-subtitle-2": "5.2 Usages interdits",
        "terms-article-5-p2": "Il est strictement interdit de :",
        "terms-article-5-li5": "Utiliser nos services à des fins illégales ou frauduleuses",
        "terms-article-5-li6": "Tenter de contourner les mesures de sécurité",
        "terms-article-5-li7": "Copier, modifier ou distribuer nos services sans autorisation",
        "terms-article-5-li8": "Utiliser nos services pour concurrencer directement Looptra",
        "terms-article-5-li9": "Surcharger nos systèmes par un usage anormal",

        // Article 6 - Conditions financières
        "terms-article-6-subtitle-1": "6.1 Tarification",
        "terms-article-6-p1": "Les tarifs de nos services sont indiqués sur notre site web et peuvent évoluer. Les modifications tarifaires ne s'appliquent pas aux abonnements en cours jusqu'à leur renouvellement.",
        "terms-article-6-subtitle-2": "6.2 Modalités de paiement",
        "terms-article-6-p2": "Le paiement s'effectue par les moyens proposés sur notre plateforme. Pour les abonnements, le paiement est effectué à l'avance selon la périodicité choisie.",
        "terms-article-6-subtitle-3": "6.3 Remboursement",
        "terms-article-6-p3": "Nous proposons une garantie satisfait ou remboursé de 30 jours pour les nouveaux abonnements. Passé ce délai, aucun remboursement ne sera effectué sauf cas particulier à notre discrétion.",
        "terms-article-6-subtitle-4": "6.4 Retard de paiement",
        "terms-article-6-p4": "En cas de retard de paiement, l'accès aux services pourra être suspendu après mise en demeure restée sans effet.",

        // Article 7 - Responsabilités
        "terms-article-7-subtitle-1": "7.1 Responsabilité de Looptra",
        "terms-article-7-p1": "Looptra s'engage à fournir ses services avec diligence et à maintenir la sécurité de son infrastructure de données. Cependant, notre responsabilité est limitée aux dommages directs et prévisibles. Nous ne saurions être tenus responsables :",
        "terms-article-7-li1": "Des décisions prises sur la base des recommandations de nos applications intelligentes",
        "terms-article-7-li2": "Des dysfonctionnements liés à l'infrastructure OpenAI",
        "terms-article-7-li3": "Des interruptions de services des APIs tierces",
        "terms-article-7-li4": "Des dommages indirects ou de la perte de profits",
        "terms-article-7-li5": "De la perte de données en cas de force majeure, sous réserve de nos obligations de sauvegarde",
        "terms-article-7-p2": "<strong>Engagement sécurité :</strong> Nous nous engageons à maintenir des standards de sécurité élevés pour notre infrastructure et à vous informer dans les meilleurs délais de tout incident affectant vos données.",
        "terms-article-7-subtitle-2": "7.2 Responsabilité de l'utilisateur",
        "terms-article-7-p3": "Vous êtes responsable :",
        "terms-article-7-li6": "De l'utilisation que vous faites de nos services",
        "terms-article-7-li7": "De la véracité des informations fournies",
        "terms-article-7-li8": "Des décisions prises sur la base des recommandations",
        "terms-article-7-li9": "Du respect des conditions d'utilisation des services tiers",

        // Limitation notice
        "terms-limitation-notice": "<strong>Limitation de responsabilité :</strong> Nos applications intelligentes fournissent des recommandations basées sur les données disponibles. Les décisions finales vous appartiennent et Looptra ne peut être tenu responsable des conséquences de vos choix.",

        // Article 8 - Propriété intellectuelle
        "terms-article-8-p1": "Tous les éléments de nos services (applications intelligentes, algorithmes, interfaces, marques, etc.) sont protégés par les droits de propriété intellectuelle et appartiennent à Looptra ou à nos partenaires.",
        "terms-article-8-p2": "Vous ne pouvez pas :",
        "terms-article-8-li1": "Reproduire, copier ou distribuer nos services",
        "terms-article-8-li2": "Procéder à de l'ingénierie inverse",
        "terms-article-8-li3": "Utiliser nos marques sans autorisation",
        "terms-article-8-li4": "Créer des services concurrents basés sur nos technologies",

        // Article 9 - Données personnelles
        "terms-article-9-p1": "Le traitement de vos données personnelles est régi par notre <a href=\"/politique-confidentialite\" style=\"color: #000; font-weight: 600;\">Politique de confidentialité</a>, qui fait partie intégrante des présentes conditions.",
        "terms-article-9-p2": "En utilisant nos services, vous consentez au traitement de vos données conformément à cette politique.",

        // Article 10 - Durée et résiliation
        "terms-article-10-subtitle-1": "10.1 Durée",
        "terms-article-10-p1": "Les présentes conditions s'appliquent tant que vous utilisez nos services. Les abonnements sont conclus pour la durée choisie et se renouvellent automatiquement sauf résiliation.",
        "terms-article-10-subtitle-2": "10.2 Résiliation par l'utilisateur",
        "terms-article-10-p2": "Vous pouvez résilier votre abonnement à tout moment depuis votre espace client. La résiliation prend effet à la fin de la période en cours.",
        "terms-article-10-subtitle-3": "10.3 Résiliation par Looptra",
        "terms-article-10-p3": "Nous pouvons résilier votre accès en cas de :",
        "terms-article-10-li1": "Non-respect des présentes conditions",
        "terms-article-10-li2": "Usage abusif ou frauduleux",
        "terms-article-10-li3": "Non-paiement après mise en demeure",
        "terms-article-10-subtitle-4": "10.4 Effets de la résiliation",
        "terms-article-10-p4": "La résiliation entraîne la cessation immédiate de l'accès aux services. Les données peuvent être conservées selon notre politique de conservation.",

        // Article 11 - Force majeure
        "terms-article-11-p1": "Looptra ne saurait être tenu responsable de tout retard ou inexécution consécutif à la survenance d'un cas de force majeure, notamment :",
        "terms-article-11-li1": "Catastrophes naturelles",
        "terms-article-11-li2": "Défaillances des réseaux de télécommunication",
        "terms-article-11-li3": "Actes de guerre, terrorisme, émeutes",
        "terms-article-11-li4": "Décisions gouvernementales",
        "terms-article-11-li5": "Grèves générales",

        // Article 12 - Droit applicable et juridiction
        "terms-article-12-p1": "Les présentes conditions sont régies par le droit français. En cas de litige, les parties s'efforceront de trouver une solution amiable.",
        "terms-article-12-p2": "À défaut d'accord amiable, tout litige sera soumis à la compétence exclusive des tribunaux de [ville à compléter], France.",
        "terms-article-12-subtitle-1": "12.1 Médiation",
        "terms-article-12-p3": "Conformément à la réglementation, nous adhérons à un service de médiation de la consommation. En cas de litige, vous pouvez recourir gratuitement à ce service de médiation.",
        "terms-article-12-subtitle-2": "12.2 Modifications",
        "terms-article-12-p4": "Nous nous réservons le droit de modifier les présentes conditions à tout moment. Les modifications importantes vous seront notifiées au moins 30 jours avant leur entrée en vigueur.",

        // Contact Information
        "contact-title": "Questions juridiques",
        "contact-intro": "Pour toute question relative aux présentes conditions :",
        "contact-email": "contact@looptra.ai",
        "contact-address": "Looptra<br>12 rue Letellier, 75015 Paris, France",

        // Privacy Policy Content
        "privacy-section-1-title": "1. Introduction",
        "privacy-section-1-p1": "Looptra s'engage à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez nos applications intelligentes spécialisées.",
        "privacy-section-1-p2": "En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.",
        "privacy-section-2-title": "2. Données que nous collectons",
        "privacy-section-2-intro": "Nous collectons différents types d'informations :",
        "privacy-data-account": "<strong>Informations d'compte :</strong> Email, nom, préférences utilisateur",
        "privacy-data-usage": "<strong>Données d'utilisation :</strong> Interactions avec nos applications intelligentes, historiques de conversations",
        "privacy-data-business": "<strong>Données métier :</strong> Informations partagées pour personnaliser nos applications intelligentes (itinéraires, préférences de transport, tâches, contextes business)",
        "privacy-data-technical": "<strong>Données techniques :</strong> Adresse IP, type de navigateur, données de performance",
        "privacy-data-integration": "<strong>Données d'intégration :</strong> Informations récupérées via les APIs connectées (SNCF, Trainline, Notion, etc.) avec votre autorisation",
        "privacy-data-contextual": "<strong>Données contextuelles :</strong> Informations stockées dans notre base de données sécurisée pour enrichir vos interactions avec nos applications intelligentes",
        "privacy-section-3-title": "3. Comment nous utilisons vos données",
        "privacy-section-3-intro": "Vos données sont utilisées pour :",
        "privacy-usage-1": "Fournir et améliorer nos applications intelligentes spécialisées",
        "privacy-usage-2": "Personnaliser les réponses et recommandations",
        "privacy-usage-3": "Maintenir la sécurité et prévenir les abus",
        "privacy-usage-4": "Communiquer avec vous sur nos services",
        "privacy-usage-5": "Analyser l'utilisation pour améliorer nos produits",
        "privacy-usage-6": "Respecter nos obligations légales",
        "privacy-architecture-highlight": "<strong>Architecture de données :</strong> Nous construisons sur l'infrastructure OpenAI/ChatGPT ET nous maintenons notre propre base de données sécurisée. Cette architecture hybride nous permet d'enrichir vos interactions avec du contexte personnalisé tout en respectant les standards de sécurité les plus élevés. Vos données contextuelles sont stockées de manière chiffrée dans nos systèmes européens.",
        "privacy-section-4-title": "4. Partage des données",
        "privacy-section-4-intro": "Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement dans ces cas :",
        "privacy-sharing-1": "<strong>Prestataires de services :</strong> OpenAI (ChatGPT), fournisseurs d'APIs (SNCF, Trainline, etc.)",
        "privacy-sharing-2": "<strong>Obligations légales :</strong> Si requis par la loi",
        "privacy-sharing-3": "<strong>Protection des droits :</strong> Pour protéger nos droits, votre sécurité ou celle d'autres utilisateurs",
        "privacy-sharing-4": "<strong>Avec votre consentement :</strong> Dans tous les autres cas, uniquement avec votre accord explicite",
        
        // Section 5 - Security
        "privacy-section-5-title": "5. Sécurité des données",
        "privacy-section-5-intro": "Nous mettons en place des mesures de sécurité appropriées pour protéger vos données dans notre infrastructure :",
        "privacy-security-1": "<strong>Chiffrement avancé :</strong> Données chiffrées en transit (TLS 1.3) et au repos (AES-256)",
        "privacy-security-2": "<strong>Infrastructure européenne :</strong> Nos serveurs sont hébergés en Europe avec des partenaires certifiés",
        "privacy-security-3": "<strong>Contrôles d'accès stricts :</strong> Authentification multi-facteurs et principe du moindre privilège",
        "privacy-security-4": "<strong>Surveillance continue :</strong> Monitoring 24/7 et détection d'anomalies",
        "privacy-security-5": "<strong>Sauvegardes sécurisées :</strong> Copies chiffrées avec rétention géographiquement distribuée",
        "privacy-security-6": "<strong>Audits réguliers :</strong> Évaluations de sécurité par des tiers indépendants",
        "privacy-security-7": "<strong>Formation de l'équipe :</strong> Sensibilisation continue aux bonnes pratiques de sécurité",
        "privacy-security-standards": "Nos mesures de sécurité respectent les standards industrie (ISO 27001) et les exigences RGPD.",
        
        // Section 6 - Rights
        "privacy-section-6-title": "6. Vos droits",
        "privacy-section-6-intro": "Conformément au RGPD, vous disposez des droits suivants :",
        "privacy-rights-1": "<strong>Accès :</strong> Obtenir une copie de vos données personnelles",
        "privacy-rights-2": "<strong>Rectification :</strong> Corriger des données inexactes",
        "privacy-rights-3": "<strong>Effacement :</strong> Demander la suppression de vos données",
        "privacy-rights-4": "<strong>Limitation :</strong> Restreindre le traitement de vos données",
        "privacy-rights-5": "<strong>Portabilité :</strong> Récupérer vos données dans un format lisible",
        "privacy-rights-6": "<strong>Opposition :</strong> Vous opposer au traitement de vos données",
        "privacy-rights-7": "<strong>Retrait du consentement :</strong> Retirer votre consentement à tout moment",
        "privacy-rights-contact": "Pour exercer ces droits, contactez-nous à <a href=\"mailto:privacy@looptra.ai\" class=\"contact-email\">privacy@looptra.ai</a>",
        
        // Section 7 - Cookies
        "privacy-section-7-title": "7. Cookies et technologies similaires",
        "privacy-section-7-intro": "Nous utilisons des cookies pour :",
        "privacy-cookies-1": "Maintenir votre session de connexion",
        "privacy-cookies-2": "Mémoriser vos préférences",
        "privacy-cookies-3": "Analyser l'utilisation de notre site",
        "privacy-cookies-4": "Améliorer votre expérience utilisateur",
        "privacy-cookies-note": "Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter le fonctionnement de nos services.",
        
        // Section 8 - Data Retention
        "privacy-section-8-title": "8. Conservation des données",
        "privacy-section-8-intro": "Nous conservons vos données selon les catégories suivantes :",
        "privacy-retention-1": "<strong>Données de compte :</strong> Tant que votre compte est actif",
        "privacy-retention-2": "<strong>Données contextuelles :</strong> Stockées dans notre BDD sécurisée pour améliorer vos interactions, supprimées à la fermeture du compte ou sur demande",
        "privacy-retention-3": "<strong>Historiques d'utilisation :</strong> Conservés 2 ans maximum pour l'amélioration du service",
        "privacy-retention-4": "<strong>Données de facturation :</strong> 10 ans conformément aux obligations légales",
        "privacy-retention-5": "<strong>Logs techniques :</strong> 6 mois maximum pour la sécurité et le support",
        "privacy-auto-deletion": "<strong>Suppression automatique :</strong> Toutes vos données contextuelles stockées dans notre infrastructure sont automatiquement supprimées 3 mois après la fermeture de votre compte, sauf obligation légale contraire.",
        
        // Section 9 - International Transfers
        "privacy-section-9-title": "9. Transferts internationaux",
        "privacy-infrastructure-eu": "<strong>Notre infrastructure :</strong> Vos données contextuelles sont stockées exclusivement sur des serveurs européens (France/Allemagne) respectant le RGPD.",
        "privacy-openai-transfers": "<strong>Partenaires technologiques :</strong> Nos services utilisant l'infrastructure OpenAI, certaines données peuvent être transférées vers les États-Unis lors de vos interactions avec ChatGPT. Ces transferts sont effectués conformément aux mécanismes de protection appropriés :",
        "privacy-transfer-1": "Clauses contractuelles types de la Commission européenne",
        "privacy-transfer-2": "Mesures de sécurité supplémentaires (chiffrement renforcé)",
        "privacy-transfer-3": "Minimisation des données transférées",
        "privacy-transfer-4": "Conformité aux décisions d'adéquation en vigueur",
        
        // Section 10 - Policy Changes
        "privacy-section-10-title": "10. Modifications de cette politique",
        "privacy-modifications": "Nous nous réservons le droit de modifier cette politique de confidentialité. En cas de changements importants, nous vous en informerons par email ou via notre site web au moins 30 jours avant l'entrée en vigueur.",
        
        // Contact Information
        "privacy-contact-title": "Questions sur cette politique ?",
        "privacy-contact-dpo": "Contactez notre délégué à la protection des données :",
        "privacy-contact-address": "Looptra<br>12 rue Letellier<br>75015 Paris, France"
    },
    en: {
        // Navigation & Header
        "nav-applications": "Applications",
        "nav-ecosysteme": "Ecosystem",
        "nav-temoignages": "Testimonials",
        "nav-faq": "FAQ",
        "nav-cta": "Get Started",

        // Hero Section
        "hero-title": "A Galaxy of Intelligent Applications directly in ChatGPT",
        "hero-subtitle": "Access specialized intelligent applications without leaving your usual AI interface. Looptra builds on existing infrastructure to create the new App Store for intelligent applications.",
        "hero-cta-primary": "Join Early Access",
        "hero-cta": "Discover our intelligent applications",

        // Benefits Section
        "benefit-1-title": "Zero additional apps.",
        "benefit-1-text": "Our intelligent applications live directly in ChatGPT. You keep your habits, we add industry specialization. No new interface to learn, no account to create.",
        "benefit-2-title": "Built on existing AI infrastructure.",
        "benefit-2-text": "We don't reinvent the wheel. Our intelligent applications leverage the power of ever-evolving GPT models and add our own contextual data layer. You benefit from the latest AI advances with added industry personalization.",
        "benefit-3-title": "The new generative App Store.",
        "benefit-3-text": "We are pioneers of a new model: specialized intelligent applications available directly in your generative AI tools. Choose your industry expert like you would install an app on your phone.",

        // Applications Section
        "applications-title": "Our intelligent applications in the GPT Store.",
        "applications-subtitle": "Industry specialists accessible directly from ChatGPT. No installation, no configuration — just the expertise you need.",
        "app-status-available": "Available on GPT Store",
        "app-status-coming": "Coming Soon on GPT Store",
        
        // Rundesk App
        "rundesk-description": "Type @Rundesk in ChatGPT to access your logistics intelligent application. Leverages GPT-4 + our transportation specializations to optimize your travel directly in your conversation.",
        "rundesk-feature-1": "Accessible via ChatGPT (no app to install)",
        "rundesk-feature-2": "Connected to SNCF, Trainline APIs in real-time",
        "rundesk-feature-3": "Memory of your preferences and history",
        "rundesk-feature-4": "Calculations and bookings in the conversation",
        "rundesk-cta": "Access on ChatGPT",
        
        // Tasklane App
        "tasklane-description": "The prioritization intelligent application that transforms your ChatGPT into an expert project manager. Analyzes your tasks via GPT and applies advanced project management methodologies.",
        "tasklane-feature-1": "Native integration in your ChatGPT workflow",
        "tasklane-feature-2": "Asana, Notion connections via GPT infrastructure",
        "tasklane-feature-3": "Prioritization algorithms on evolving models",
        "tasklane-feature-4": "Automatic updates with new GPT versions",
        "tasklane-cta": "Get Notified",
        
        // Todozen App
        "todozen-description": "The conversational task management intelligent application. Add, organize and track your to-dos by speaking naturally with your personal assistant directly in ChatGPT.",
        "todozen-feature-1": "Conversational task management",
        "todozen-feature-2": "Automatic breakdown of complex tasks",
        "todozen-feature-3": "Daily, weekly, monthly planning",
        "todozen-feature-4": "Smart reminders and task reformulation",
        "todozen-cta": "Get Notified",
        
        // MailFlow App
        "mailflow-description": "The Inbox Zero intelligent application that transforms your email management. Smart triage, automated responses and optimal organization - directly in ChatGPT to achieve empty inbox.",
        "mailflow-feature-1": "Smart email triage via GPT",
        "mailflow-feature-2": "Gmail, Outlook connections in real-time",
        "mailflow-feature-3": "Contextual response generation",
        "mailflow-feature-4": "Personalized Inbox Zero strategies",
        "mailflow-cta": "Get Notified",
        
        // NewsFlow App
        "newsflow-description": "Your intelligent sector watcher that creates personalized podcasts. Analyzes your industry news, synthesizes the essentials and sends it to you in audio format via WhatsApp.",
        "newsflow-feature-1": "Automated sector monitoring via GPT",
        "newsflow-feature-2": "Personalized podcast generation",
        "newsflow-feature-3": "Automatic distribution via WhatsApp",
        "newsflow-feature-4": "Market trend analysis",
        "newsflow-cta": "Get Notified",
        
        // BizDev Pro App
        "bizdev-description": "Your personal business development coach. Analyzes your prospects, optimizes your approaches and guides you in negotiations to maximize your commercial performance.",
        "bizdev-feature-1": "Personalized business coaching via GPT",
        "bizdev-feature-2": "Prospect and opportunity analysis",
        "bizdev-feature-3": "Adaptive sales scripts",
        "bizdev-feature-4": "Performance tracking and KPIs",
        "bizdev-cta": "Get Notified",

        // Ecosystem Section
        "ecosystem-title": "The Looptra Ecosystem",
        "ecosystem-subtitle": "A central orchestrator that connects your intelligent applications to all the data and services needed for their industry expertise, with our own secure contextual data layer.",
        
        // Ecosystem Diagram
        "orchestrator-title": "Looptra",
        "orchestrator-subtitle": "Central Orchestrator",
        "user-data-title": "🔐 Secure Looptra database",
        "data-item-1": "Business preferences",
        "data-item-2": "Interaction history",
        "data-item-3": "Business contexts",
        "data-item-4": "Application configurations",
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
        "agents-title": "🤖 Specialized Intelligent Applications",
        "agent-rundesk": "Rundesk",
        "agent-rundesk-desc": "Logistics & transport expert",
        "agent-rundesk-status": "Available",
        "agent-tasklane": "Tasklane",
        "agent-tasklane-desc": "Project management expert",
        "agent-tasklane-status": "Soon",
        "agent-todozen": "Todozen",
        "agent-todozen-desc": "Conversational task management expert",
        "agent-todozen-status": "Soon",
        "agent-mailflow": "MailFlow",
        "agent-mailflow-desc": "Email management & Inbox Zero expert",
        "agent-mailflow-status": "Soon",
        "agent-newsflow": "NewsFlow",
        "agent-newsflow-desc": "Sector monitoring & podcast expert",
        "agent-newsflow-status": "Soon",
        "agent-bizdev": "BizDev Pro",
        "agent-bizdev-desc": "Business development expert",
        "agent-bizdev-status": "Soon",
        "agent-future": "Agent N+1",
        "agent-future-desc": "Specialist to be defined",
        "agent-future-status": "Coming",
        
        // Integrations Section
        "integrations-title": "Native Integrations",
        "integrations-subtitle": "Connect your Looptra intelligent applications to the tools you already use.",
        "integrations-communication": "Communication",
        "integrations-productivity": "Productivity",
        "integrations-storage": "Storage & Documents",
        "integrations-calendar": "Calendar & Planning",
        "integrations-crm": "CRM & Sales",
        "integrations-analytics": "Analytics & Reporting",
        
        // Communication integrations
        "integration-whatsapp": "WhatsApp",
        "integration-slack": "Slack",
        "integration-gmail": "Gmail",
        "integration-teams": "Microsoft Teams",
        "integration-outlook": "Outlook",
        "integration-telegram": "Telegram",
        
        // Productivity integrations
        "integration-notion": "Notion",
        "integration-asana": "Asana",
        "integration-trello": "Trello",
        "integration-monday": "Monday.com",
        "integration-clickup": "ClickUp",
        "integration-airtable": "Airtable",
        
        // Storage & Documents integrations
        "integration-gdrive": "Google Drive",
        "integration-linkedin": "LinkedIn",
        "integration-onedrive": "OneDrive",
        "integration-box": "Box",
        "integration-canva": "Canva",
        "integration-figma": "Figma",
        "integration-atlassian": "Atlassian",
        
        // Calendar & Planning integrations
        "integration-gcalendar": "Google Calendar",
        "integration-outlook-cal": "Outlook Calendar",
        "integration-calendly": "Calendly",
        "integration-acuity": "Acuity Scheduling",
        "integration-doodle": "Doodle",
        "integration-when2meet": "When2meet",
        
        // CRM & Sales integrations
        "integration-hubspot": "HubSpot",
        "integration-salesforce": "Salesforce",
        "integration-pipedrive": "Pipedrive",
        "integration-zendesk": "Zendesk",
        "integration-stripe": "Stripe",
        "integration-shopify": "Shopify",
        
        // Analytics & Reporting integrations
        "integration-ganalytics": "Google Analytics",
        "integration-tableau": "Tableau",
        "integration-powerbi": "Power BI",
        "integration-mixpanel": "Mixpanel",
        "integration-hotjar": "Hotjar",
        "integration-amplitude": "Amplitude",
        
        // Integrations CTA
        "integrations-cta-title": "Need another integration? Contact us...",
        "integrations-cta-subtitle": "Our intelligent applications can adapt to virtually any API or service.",
        "integrations-cta-button": "Request an integration",
        
        // Ecosystem Benefits
        "ecosystem-benefit-1-title": "Optimized Performance",
        "ecosystem-benefit-1-text": "Each intelligent application instantly accesses the right data and APIs according to their domain expertise.",
        "ecosystem-benefit-2-title": "Centralized Security",
        "ecosystem-benefit-2-text": "A single control point for managing access, permissions and confidentiality. Your contextual data is stored encrypted in our secure European infrastructure.",
        "ecosystem-benefit-3-title": "Guaranteed Scalability",
        "ecosystem-benefit-3-text": "Adding new intelligent applications, APIs or LLM engines is done without impact on existing systems.",

        // Testimonials Section
        "testimonials-title": "They've adopted Looptra intelligent applications.",
        "testimonials-subtitle": "Over 500 professionals already use our intelligent applications to transform their productivity.",
        "testimonial-1": "I stay in ChatGPT, type @Rundesk and I directly have my transport expert. No need to learn a new tool, it's brilliant. I save 4 hours per week on logistics.",
        "testimonial-2": "Looptra's approach is brilliant: using GPT-4 as a base and adding industry specialization. Rundesk understands my travel constraints better than a human.",
        "testimonial-3": "Finally intelligent applications that make sense! Not yet another app to install, but a natural evolution of ChatGPT towards industry specialization. This is the future.",
        "testimonial-4": "My colleagues already use ChatGPT. With Rundesk, we kept our habits but gained a logistics expert. Instant adoption in the team.",
        "testimonial-5": "Looptra's vision of an intelligent applications App Store in ChatGPT is exactly what we were waiting for. Every industry will have its specialists, directly integrated.",
        "testimonial-6": "I love the fact that Rundesk evolves automatically with GPT updates. I benefit from the latest AI advances without doing anything.",

        // FAQ Section
        "faq-title": "Frequently Asked Questions",
        "faq-subtitle": "Everything you need to know about Looptra intelligent applications.",
        "faq-question-1": "How do I access Looptra intelligent applications?",
        "faq-answer-1": "Our intelligent applications are available directly in ChatGPT via the GPT Store. Simply type @Rundesk in your ChatGPT conversation to access transport expertise. No additional app to install, no account to create.",
        "faq-question-2": "What differentiates Looptra from other intelligent applications?",
        "faq-answer-2": "We build on existing OpenAI infrastructure instead of creating new models. Our intelligent applications leverage GPT-4 and add specialized industry expertise. You automatically benefit from GPT evolutions without changing tools.",
        "faq-question-3": "Why do you talk about a \"new App Store\"?",
        "faq-answer-3": "We are pioneers of a new model: specialized intelligent applications available directly in your generative AI tools. Like apps on your phone, but for industry expertise in ChatGPT. It's the natural evolution of generative AI towards specialization.",
        "faq-question-4": "Is my data secure?",
        "faq-answer-4": "Our intelligent applications respect OpenAI's privacy policy. We don't add any additional storage layer. Your conversations remain in the ChatGPT ecosystem with the same security guarantees.",
        "faq-question-5": "How do intelligent applications evolve?",
        "faq-answer-5": "Our intelligent applications automatically benefit from GPT improvements (new versions, extended capabilities). We regularly update industry specializations. You have no maintenance to do, everything happens in the background.",

        // Early Access Section
        "early-access-title": "Early Access",
        "early-access-subtitle": "Be among the first to test our new applications and shape the future of your professional productivity.",
        "early-access-email-placeholder": "your.email@company.com",
        "early-access-button": "Join the list",
        "early-access-benefits": "✨ Priority beta access  •  🎯 Roadmap influence",

        // Footer Section
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Service",
        "footer-copyright": "© 2025 Looptra. The intelligent applications galaxy.",

        // Legal Pages
        "back-home": "← Back to home",
        "last-updated": "Last updated:",
        "privacy-title": "Privacy Policy",
        "privacy-subtitle": "How we collect, use and protect your personal data",
        "terms-title": "Terms of Service",
        "terms-subtitle": "Terms of use and sale of our specialized AI helpers",
        "toc-title": "Table of Contents",
        
        // Table of Contents
        "toc-article-1": "1. Purpose and scope",
        "toc-article-2": "2. Acceptance of terms",
        "toc-article-3": "3. Service description",
        "toc-article-4": "4. Service access",
        "toc-article-5": "5. Service usage",
        "toc-article-6": "6. Financial terms",
        "toc-article-7": "7. Responsibilities",
        "toc-article-8": "8. Intellectual property",
        "toc-article-9": "9. Personal data",
        "toc-article-10": "10. Duration and termination",
        "toc-article-11": "11. Force majeure",
        "toc-article-12": "12. Applicable law and jurisdiction",
        
        // Article titles
        "terms-article-1-title": "1. Purpose and scope",
        "terms-article-2-title": "2. Acceptance of terms",
        "terms-article-3-title": "3. Service description",
        "terms-article-4-title": "4. Service access",
        "terms-article-5-title": "5. Service usage",
        "terms-article-6-title": "6. Financial terms",
        "terms-article-7-title": "7. Responsibilities",
        "terms-article-8-title": "8. Intellectual property",
        "terms-article-9-title": "9. Personal data",
        "terms-article-10-title": "10. Duration and termination",
        "terms-article-11-title": "11. Force majeure",
        "terms-article-12-title": "12. Applicable law and jurisdiction",
        
        // Article 1 - Purpose and scope
        "terms-article-1-p1": "These general terms of use and sale (hereinafter \"Terms\") govern access to and use of services provided by Looptra, a company [legal form to be completed], registered under number [number to be completed], with registered office located at [address to be completed] (hereinafter \"Looptra\", \"we\", \"our\").",
        "terms-article-1-p2": "These services include access to our specialized AI helpers integrated into the ChatGPT/OpenAI ecosystem, including:",
        "terms-article-1-li1": "Rundesk: Helper specialized in logistics and transport",
        "terms-article-1-li2": "Tasklane: Helper specialized in project management", 
        "terms-article-1-li3": "Any other helper developed by Looptra",
        
        // Article 2 - Acceptance of terms
        "terms-article-2-p1": "Access to and use of our services implies full acceptance of these Terms. If you do not accept these terms, you must not use our services.",
        "terms-article-2-p2": "These terms also apply to OpenAI's terms of use, our technology partner for ChatGPT infrastructure.",
        
        // Highlight box
        "terms-highlight": "<strong>Important:</strong> Our helpers operate within the ChatGPT ecosystem. You must also comply with OpenAI's terms of use.",
        
        // Article 3 - Service description
        "terms-article-3-subtitle-1": "3.1 General description",
        "terms-article-3-p1": "Looptra develops and offers specialized AI helpers accessible directly via ChatGPT. These helpers combine the power of GPT language models with specific business specializations and a proprietary contextual data layer.",
        "terms-article-3-subtitle-2": "3.2 Technical architecture",
        "terms-article-3-p2": "Our services are based on a hybrid architecture:",
        "terms-article-3-li1": "<strong>ChatGPT/OpenAI Layer:</strong> Conversational interface and language models",
        "terms-article-3-li2": "<strong>Looptra Layer:</strong> Secure database storing your preferences, history and business contexts",
        "terms-article-3-li3": "<strong>Third-party integrations:</strong> Specialized APIs according to your business domain",
        "terms-article-3-subtitle-3": "3.3 Features",
        "terms-article-3-feature1": "Access to specialized helpers via ChatGPT",
        "terms-article-3-feature2": "Integrations with third-party APIs (SNCF, Trainline, Notion, etc.)",
        "terms-article-3-feature3": "Customization according to your business preferences",
        "terms-article-3-feature4": "Automatic updates with the evolution of GPT models",
        "terms-article-3-subtitle-4": "3.4 Availability",
        "terms-article-3-p3": "We strive to keep our services available 24/7, but cannot guarantee absolute availability. Scheduled maintenance interruptions will be communicated in advance.",
        
        // Article 4 - Service access
        "terms-article-4-subtitle-1": "4.1 Access conditions",
        "terms-article-4-p1": "To access our services, you must:",
        "terms-article-4-li1": "Be at least 18 years old or represent a legal entity",
        "terms-article-4-li2": "Have an active ChatGPT account",
        "terms-article-4-li3": "Have subscribed to a Looptra subscription if applicable",
        "terms-article-4-li4": "Provide accurate and up-to-date information",
        "terms-article-4-subtitle-2": "4.2 User account",
        "terms-article-4-p2": "Creating an account may be necessary for certain services. You are responsible for the confidentiality of your credentials and all activities performed under your account.",

        // Article 5 - Service usage
        "terms-article-5-subtitle-1": "5.1 Authorized use",
        "terms-article-5-p1": "Our services are intended for legitimate professional use. You agree to:",
        "terms-article-5-li1": "Use the services in accordance with their intended purpose",
        "terms-article-5-li2": "Comply with applicable laws and regulations",
        "terms-article-5-li3": "Not infringe on the rights of third parties",
        "terms-article-5-li4": "Provide accurate information",
        "terms-article-5-subtitle-2": "5.2 Prohibited uses",
        "terms-article-5-p2": "It is strictly prohibited to:",
        "terms-article-5-li5": "Use our services for illegal or fraudulent purposes",
        "terms-article-5-li6": "Attempt to circumvent security measures",
        "terms-article-5-li7": "Copy, modify or distribute our services without authorization",
        "terms-article-5-li8": "Use our services to directly compete with Looptra",
        "terms-article-5-li9": "Overload our systems through abnormal usage",

        // Article 6 - Financial terms
        "terms-article-6-subtitle-1": "6.1 Pricing",
        "terms-article-6-p1": "Our service rates are indicated on our website and may change. Price modifications do not apply to current subscriptions until their renewal.",
        "terms-article-6-subtitle-2": "6.2 Payment terms",
        "terms-article-6-p2": "Payment is made through the methods offered on our platform. For subscriptions, payment is made in advance according to the chosen frequency.",
        "terms-article-6-subtitle-3": "6.3 Refund",
        "terms-article-6-p3": "We offer a 30-day money-back guarantee for new subscriptions. After this period, no refund will be made except in special cases at our discretion.",
        "terms-article-6-subtitle-4": "6.4 Payment delay",
        "terms-article-6-p4": "In case of payment delay, access to services may be suspended after formal notice remains without effect.",

        // Article 7 - Responsibilities
        "terms-article-7-subtitle-1": "7.1 Looptra's responsibility",
        "terms-article-7-p1": "Looptra undertakes to provide its services diligently and to maintain the security of its data infrastructure. However, our liability is limited to direct and foreseeable damages. We cannot be held responsible for:",
        "terms-article-7-li1": "Decisions made based on recommendations from our helpers",
        "terms-article-7-li2": "Malfunctions related to OpenAI infrastructure",
        "terms-article-7-li3": "Third-party API service interruptions",
        "terms-article-7-li4": "Indirect damages or loss of profits",
        "terms-article-7-li5": "Data loss in case of force majeure, subject to our backup obligations",
        "terms-article-7-p2": "<strong>Security commitment:</strong> We commit to maintaining high security standards for our infrastructure and to inform you as soon as possible of any incident affecting your data.",
        "terms-article-7-subtitle-2": "7.2 User responsibility",
        "terms-article-7-p3": "You are responsible for:",
        "terms-article-7-li6": "Your use of our services",
        "terms-article-7-li7": "The accuracy of information provided",
        "terms-article-7-li8": "Decisions made based on recommendations",
        "terms-article-7-li9": "Compliance with third-party service terms of use",

        // Limitation notice
        "terms-limitation-notice": "<strong>Liability limitation:</strong> Our AI helpers provide recommendations based on available data. Final decisions belong to you and Looptra cannot be held responsible for the consequences of your choices.",

        // Article 8 - Intellectual property
        "terms-article-8-p1": "All elements of our services (AI helpers, algorithms, interfaces, trademarks, etc.) are protected by intellectual property rights and belong to Looptra or our partners.",
        "terms-article-8-p2": "You may not:",
        "terms-article-8-li1": "Reproduce, copy or distribute our services",
        "terms-article-8-li2": "Proceed with reverse engineering",
        "terms-article-8-li3": "Use our trademarks without authorization",
        "terms-article-8-li4": "Create competing services based on our technologies",

        // Article 9 - Personal data
        "terms-article-9-p1": "The processing of your personal data is governed by our <a href=\"/politique-confidentialite\" style=\"color: #000; font-weight: 600;\">Privacy Policy</a>, which is an integral part of these terms.",
        "terms-article-9-p2": "By using our services, you consent to the processing of your data in accordance with this policy.",

        // Article 10 - Duration and termination
        "terms-article-10-subtitle-1": "10.1 Duration",
        "terms-article-10-p1": "These terms apply as long as you use our services. Subscriptions are concluded for the chosen duration and automatically renew unless terminated.",
        "terms-article-10-subtitle-2": "10.2 Termination by user",
        "terms-article-10-p2": "You can terminate your subscription at any time from your customer area. Termination takes effect at the end of the current period.",
        "terms-article-10-subtitle-3": "10.3 Termination by Looptra",
        "terms-article-10-p3": "We can terminate your access in case of:",
        "terms-article-10-li1": "Non-compliance with these terms",
        "terms-article-10-li2": "Abusive or fraudulent use",
        "terms-article-10-li3": "Non-payment after formal notice",
        "terms-article-10-subtitle-4": "10.4 Effects of termination",
        "terms-article-10-p4": "Termination results in immediate cessation of access to services. Data may be retained according to our retention policy.",

        // Article 11 - Force majeure
        "terms-article-11-p1": "Looptra cannot be held responsible for any delay or non-performance resulting from the occurrence of a force majeure event, including:",
        "terms-article-11-li1": "Natural disasters",
        "terms-article-11-li2": "Telecommunications network failures",
        "terms-article-11-li3": "Acts of war, terrorism, riots",
        "terms-article-11-li4": "Government decisions",
        "terms-article-11-li5": "General strikes",

        // Article 12 - Applicable law and jurisdiction
        "terms-article-12-p1": "These terms are governed by French law. In case of dispute, the parties will endeavor to find an amicable solution.",
        "terms-article-12-p2": "Failing an amicable agreement, any dispute will be subject to the exclusive jurisdiction of the courts of [city to be completed], France.",
        "terms-article-12-subtitle-1": "12.1 Mediation",
        "terms-article-12-p3": "In accordance with regulations, we adhere to a consumer mediation service. In case of dispute, you can resort to this mediation service free of charge.",
        "terms-article-12-subtitle-2": "12.2 Modifications",
        "terms-article-12-p4": "We reserve the right to modify these terms at any time. Important modifications will be notified to you at least 30 days before they take effect.",

        // Contact Information
        "contact-title": "Legal questions",
        "contact-intro": "For any questions regarding these terms:",
        "contact-email": "contact@looptra.ai",
        "contact-address": "Looptra<br>12 rue Letellier, 75015 Paris, France",

        // Privacy Policy Content
        "privacy-section-1-title": "1. Introduction",
        "privacy-section-1-p1": "Looptra is committed to protecting your privacy and personal data. This privacy policy explains how we collect, use, share and protect your information when you use our specialized AI helpers.",
        "privacy-section-1-p2": "By using our services, you agree to the practices described in this policy.",
        "privacy-section-2-title": "2. Data we collect",
        "privacy-section-2-intro": "We collect different types of information:",
        "privacy-data-account": "<strong>Account information:</strong> Email, name, user preferences",
        "privacy-data-usage": "<strong>Usage data:</strong> Interactions with our helpers, conversation history",
        "privacy-data-business": "<strong>Business data:</strong> Information shared to customize our helpers (itineraries, transport preferences, tasks, business contexts)",
        "privacy-data-technical": "<strong>Technical data:</strong> IP address, browser type, performance data",
        "privacy-data-integration": "<strong>Integration data:</strong> Information retrieved via connected APIs (SNCF, Trainline, Notion, etc.) with your authorization",
        "privacy-data-contextual": "<strong>Contextual data:</strong> Information stored in our secure database to enrich your interactions with our helpers",
        "privacy-section-3-title": "3. How we use your data",
        "privacy-section-3-intro": "Your data is used to:",
        "privacy-usage-1": "Provide and improve our specialized AI helpers",
        "privacy-usage-2": "Personalize responses and recommendations",
        "privacy-usage-3": "Maintain security and prevent abuse",
        "privacy-usage-4": "Communicate with you about our services",
        "privacy-usage-5": "Analyze usage to improve our products",
        "privacy-usage-6": "Comply with our legal obligations",
        "privacy-architecture-highlight": "<strong>Data architecture:</strong> We build on OpenAI/ChatGPT infrastructure AND we maintain our own secure database. This hybrid architecture allows us to enrich your interactions with personalized context while respecting the highest security standards. Your contextual data is stored encrypted in our European systems.",
        "privacy-section-4-title": "4. Data sharing",
        "privacy-section-4-intro": "We never sell your personal data. We may share it only in these cases:",
        "privacy-sharing-1": "<strong>Service providers:</strong> OpenAI (ChatGPT), API providers (SNCF, Trainline, etc.)",
        "privacy-sharing-2": "<strong>Legal obligations:</strong> If required by law",
        "privacy-sharing-3": "<strong>Rights protection:</strong> To protect our rights, your security or that of other users",
        "privacy-sharing-4": "<strong>With your consent:</strong> In all other cases, only with your explicit agreement",
        
        // Section 5 - Security
        "privacy-section-5-title": "5. Data security",
        "privacy-section-5-intro": "We implement appropriate security measures to protect your data in our infrastructure:",
        "privacy-security-1": "<strong>Advanced encryption:</strong> Data encrypted in transit (TLS 1.3) and at rest (AES-256)",
        "privacy-security-2": "<strong>European infrastructure:</strong> Our servers are hosted in Europe with certified partners",
        "privacy-security-3": "<strong>Strict access controls:</strong> Multi-factor authentication and principle of least privilege",
        "privacy-security-4": "<strong>Continuous monitoring:</strong> 24/7 monitoring and anomaly detection",
        "privacy-security-5": "<strong>Secure backups:</strong> Encrypted copies with geographically distributed retention",
        "privacy-security-6": "<strong>Regular audits:</strong> Security assessments by independent third parties",
        "privacy-security-7": "<strong>Team training:</strong> Continuous awareness of security best practices",
        "privacy-security-standards": "Our security measures comply with industry standards (ISO 27001) and GDPR requirements.",
        
        // Section 6 - Rights
        "privacy-section-6-title": "6. Your rights",
        "privacy-section-6-intro": "In accordance with GDPR, you have the following rights:",
        "privacy-rights-1": "<strong>Access:</strong> Obtain a copy of your personal data",
        "privacy-rights-2": "<strong>Rectification:</strong> Correct inaccurate data",
        "privacy-rights-3": "<strong>Erasure:</strong> Request deletion of your data",
        "privacy-rights-4": "<strong>Restriction:</strong> Restrict the processing of your data",
        "privacy-rights-5": "<strong>Portability:</strong> Retrieve your data in a readable format",
        "privacy-rights-6": "<strong>Objection:</strong> Object to the processing of your data",
        "privacy-rights-7": "<strong>Withdrawal of consent:</strong> Withdraw your consent at any time",
        "privacy-rights-contact": "To exercise these rights, contact us at <a href=\"mailto:privacy@looptra.ai\" class=\"contact-email\">privacy@looptra.ai</a>",
        
        // Section 7 - Cookies
        "privacy-section-7-title": "7. Cookies and similar technologies",
        "privacy-section-7-intro": "We use cookies to:",
        "privacy-cookies-1": "Maintain your login session",
        "privacy-cookies-2": "Remember your preferences",
        "privacy-cookies-3": "Analyze usage of our site",
        "privacy-cookies-4": "Improve your user experience",
        "privacy-cookies-note": "You can configure your browser to refuse cookies, but this may affect the operation of our services.",
        
        // Section 8 - Data Retention
        "privacy-section-8-title": "8. Data retention",
        "privacy-section-8-intro": "We retain your data according to the following categories:",
        "privacy-retention-1": "<strong>Account data:</strong> As long as your account is active",
        "privacy-retention-2": "<strong>Contextual data:</strong> Stored in our secure database to improve your interactions, deleted when account is closed or upon request",
        "privacy-retention-3": "<strong>Usage history:</strong> Retained for 2 years maximum for service improvement",
        "privacy-retention-4": "<strong>Billing data:</strong> 10 years in accordance with legal obligations",
        "privacy-retention-5": "<strong>Technical logs:</strong> 6 months maximum for security and support",
        "privacy-auto-deletion": "<strong>Automatic deletion:</strong> All your contextual data stored in our infrastructure is automatically deleted 3 months after your account closure, unless otherwise required by law.",
        
        // Section 9 - International Transfers
        "privacy-section-9-title": "9. International transfers",
        "privacy-infrastructure-eu": "<strong>Our infrastructure:</strong> Your contextual data is stored exclusively on European servers (France/Germany) complying with GDPR.",
        "privacy-openai-transfers": "<strong>Technology partners:</strong> Our services using OpenAI infrastructure, some data may be transferred to the United States during your interactions with ChatGPT. These transfers are carried out in accordance with appropriate protection mechanisms:",
        "privacy-transfer-1": "Standard contractual clauses from the European Commission",
        "privacy-transfer-2": "Additional security measures (enhanced encryption)",
        "privacy-transfer-3": "Minimization of transferred data",
        "privacy-transfer-4": "Compliance with current adequacy decisions",
        
        // Section 10 - Policy Changes
        "privacy-section-10-title": "10. Changes to this policy",
        "privacy-modifications": "We reserve the right to modify this privacy policy. In case of significant changes, we will inform you by email or via our website at least 30 days before implementation.",
        
        // Contact Information
        "privacy-contact-title": "Questions about this policy?",
        "privacy-contact-dpo": "Contact our data protection officer:",
        "privacy-contact-address": "Looptra<br>12 rue Letellier, 75015 Paris, France"
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
            // Fallback to default language
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
        } else if (translation.includes('<strong>') || translation.includes('<em>') || translation.includes('<br>')) {
            // For content with HTML tags, use innerHTML
            element.innerHTML = translation;
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