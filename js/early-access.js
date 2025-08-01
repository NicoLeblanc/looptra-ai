/**
 * Simple Early Access Form Handler
 * Uses env.js for Supabase config and translations.js for messages
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.early-access-form');
    if (!form) return;

    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (!emailInput || !submitButton) return;

    // Create message container
    const messageContainer = document.createElement('div');
    messageContainer.className = 'form-message';
    messageContainer.style.cssText = `
        margin-top: 12px;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 14px;
        text-align: center;
        display: none;
    `;
    form.appendChild(messageContainer);

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Basic validation
        if (!email) {
            showMessage('Adresse email requise', 'error');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showMessage('Adresse email invalide', 'error');
            return;
        }

        // Set loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Inscription en cours...';
        submitButton.style.opacity = '0.7';
        hideMessage();

        try {
            const supabaseConfig = window.env?.getSupabaseConfig();
            
            if (!supabaseConfig) {
                throw new Error('Configuration Supabase non trouvée');
            }

            const response = await fetch(`${supabaseConfig.url}/rest/v1/email_signups`, {
                method: 'POST',
                headers: {
                    'apikey': supabaseConfig.anonKey,
                    'Authorization': `Bearer ${supabaseConfig.anonKey}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({ 
                    email: email,
                    source: 'early-access',
                    created_at: new Date().toISOString()
                })
            });

            if (response.ok) {
                showMessage('Inscription réussie ! Vous recevrez un email dès que nos nouveaux assistants seront disponibles.', 'success');
                emailInput.value = '';
                
                // Optional: Track conversion
                if (typeof gtag === 'function') {
                    gtag('event', 'early_access_signup', {
                        event_category: 'engagement',
                        event_label: 'early_access_form'
                    });
                }
            } else {
                const errorData = await response.json().catch(() => ({}));
                
                if (response.status === 409 || errorData.code === '23505') {
                    showMessage('Cette adresse email est déjà enregistrée', 'error');
                } else {
                    showMessage('Erreur lors de l\'inscription. Veuillez réessayer.', 'error');
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('Erreur de connexion. Vérifiez votre connexion internet.', 'error');
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = 'Rejoindre la liste';
            submitButton.style.opacity = '1';
        }
    });

    function showMessage(message, type = 'info') {
        const colors = {
            success: { bg: '#dcfce7', color: '#166534', border: '#bbf7d0' },
            error: { bg: '#fef2f2', color: '#dc2626', border: '#fecaca' },
            info: { bg: '#eff6ff', color: '#2563eb', border: '#dbeafe' }
        };

        const style = colors[type] || colors.info;
        
        messageContainer.textContent = message;
        messageContainer.style.display = 'block';
        messageContainer.style.backgroundColor = style.bg;
        messageContainer.style.color = style.color;
        messageContainer.style.border = `1px solid ${style.border}`;
    }

    function hideMessage() {
        messageContainer.style.display = 'none';
    }
});