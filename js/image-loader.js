/**
 * Image Loader for Supabase Storage
 * Replaces content images with Supabase Storage URLs
 * Keeps logos and favicons local for performance
 */

document.addEventListener('DOMContentLoaded', () => {
    if (!window.env) return;

    const imageMap = {
        // Main content images
        'img/chatgpt-rundesk-conversation.png': 'chatgpt-rundesk-conversation.png',
        'img/chatgpt-rundesk-integration.png': 'chatgpt-rundesk-integration.png',
        'img/gpt-infrastructure-evolution.png': 'gpt-infrastructure-evolution.png',
        'img/gpt-store-looptra-agents.png': 'gpt-store-looptra-agents.png',
        
        // Integration logos
        'img/int/googlecalendar_logo.png': 'int/googlecalendar_logo.png',
        'img/int/gmail_logo.png': 'int/gmail_logo.png',
        'img/int/notion_logo.png': 'int/notion_logo.png',
        'img/int/hubspot_logo.png': 'int/hubspot_logo.png',
        'img/int/asana_logo.png': 'int/asana_logo.png',
        'img/int/monday_logo.png': 'int/monday_logo.png',
        'img/int/drive_logo.png': 'int/drive_logo.png',
        'img/int/Atlassian_logo.png': 'int/Atlassian_logo.png',
        'img/int/whatsapp_logo.png': 'int/whatsapp_logo.png',
        'img/int/telegram_logo.png': 'int/telegram_logo.png',
        'img/int/calendly_logo.png': 'int/calendly_logo.png',
        'img/int/pipedrive_logo.png': 'int/pipedrive_logo.png',
        'img/int/slack_logo.png': 'int/slack_logo.png',
        'img/int/tableau_logo.png': 'int/tableau_logo.png',
        'img/int/linkedin_logo.png': 'int/linkedin_logo.png',
        
        // Rundesk page logos
        'img/sncf_logo.png': 'sncf_logo.png',
        'img/trainline_logo.png': 'trainline_logo.png',
        'img/booking_logo.png': 'booking_logo.png',
        'img/airbnb_logo.png': 'airbnb_logo.png',
        'img/googlemaps_logo.png': 'googlemaps_logo.png'
    };

    Object.entries(imageMap).forEach(([localPath, supabasePath]) => {
        const imgElements = document.querySelectorAll(`img[src="${localPath}"]`);
        imgElements.forEach(img => {
            img.src = window.env.getImageUrl(supabasePath);
        });
    });

    // Handle Supabase images with data attribute
    const supabaseImages = document.querySelectorAll('[data-supabase-image]');
    supabaseImages.forEach(img => {
        const imagePath = img.getAttribute('data-supabase-image');
        img.src = window.env.getImageUrl(imagePath);
    });
});

// Export for manual usage
window.ImageLoader = {
    getImageUrl: (path) => window.env?.getImageUrl(path)
};