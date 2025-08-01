/**
 * Early Access Form Handler
 * Handles email collection for the early access program
 */
class EarlyAccessForm {
    constructor() {
        this.form = null;
        this.emailInput = null;
        this.submitButton = null;
        this.messageContainer = null;
        this.hasInteracted = false;
        this.translations = {
            fr: {
                required: 'Adresse email requise',
                invalid: 'Adresse email invalide', 
                duplicate: 'Cette adresse email est déjà enregistrée',
                success: 'Inscription réussie ! Vous recevrez un email dès que nos nouveaux assistants seront disponibles.',
                error: 'Erreur lors de l\'inscription. Veuillez réessayer.',
                networkError: 'Erreur de connexion. Vérifiez votre connexion internet.',
                submitting: 'Inscription en cours...',
                submitButton: 'Rejoindre la liste'
            },
            en: {
                required: 'Email address required',
                invalid: 'Invalid email address',
                duplicate: 'This email address is already registered',
                success: 'Successfully registered! You\'ll receive an email as soon as our new assistants are available.',
                error: 'Registration error. Please try again.',
                networkError: 'Connection error. Check your internet connection.',
                submitting: 'Registering...',
                submitButton: 'Join the list'
            }
        };
    }

    init() {
        this.form = document.querySelector('.early-access-form');
        if (!this.form) return;

        this.emailInput = this.form.querySelector('input[type="email"]');
        this.submitButton = this.form.querySelector('button[type="submit"]');
        
        if (!this.emailInput || !this.submitButton) return;

        // Create message container
        this.createMessageContainer();
        
        // Add event listeners
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.emailInput.addEventListener('input', () => {
            this.hasInteracted = true;
            this.clearMessage();
        });
        this.emailInput.addEventListener('blur', () => {
            if (this.hasInteracted) {
                this.validateEmail();
            }
        });
    }

    createMessageContainer() {
        this.messageContainer = document.createElement('div');
        this.messageContainer.className = 'form-message';
        this.messageContainer.style.cssText = `
            margin-top: 12px;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            text-align: center;
            display: none;
        `;
        this.form.appendChild(this.messageContainer);
    }

    getCurrentLanguage() {
        return document.documentElement.lang || 'fr';
    }

    getMessage(key) {
        const lang = this.getCurrentLanguage();
        return this.translations[lang]?.[key] || this.translations.fr[key];
    }

    showMessage(message, type = 'info') {
        if (!this.messageContainer) return;

        const colors = {
            success: { bg: '#dcfce7', color: '#166534', border: '#bbf7d0' },
            error: { bg: '#fef2f2', color: '#dc2626', border: '#fecaca' },
            info: { bg: '#eff6ff', color: '#2563eb', border: '#dbeafe' }
        };

        const style = colors[type] || colors.info;
        
        this.messageContainer.textContent = message;
        this.messageContainer.style.display = 'block';
        this.messageContainer.style.backgroundColor = style.bg;
        this.messageContainer.style.color = style.color;
        this.messageContainer.style.border = `1px solid ${style.border}`;
    }

    clearMessage() {
        if (this.messageContainer) {
            this.messageContainer.style.display = 'none';
        }
    }

    validateEmail() {
        const email = this.emailInput.value.trim();
        
        if (!email) {
            this.showMessage(this.getMessage('required'), 'error');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showMessage(this.getMessage('invalid'), 'error');
            return false;
        }

        this.clearMessage();
        return true;
    }

    setSubmitButtonState(loading = false) {
        if (!this.submitButton) return;

        if (loading) {
            this.submitButton.disabled = true;
            this.submitButton.textContent = this.getMessage('submitting');
            this.submitButton.style.opacity = '0.7';
        } else {
            this.submitButton.disabled = false;
            this.submitButton.textContent = this.getMessage('submitButton');
            this.submitButton.style.opacity = '1';
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        // Mark as interacted for future validations
        this.hasInteracted = true;
        
        // Validate email
        if (!this.validateEmail()) {
            return;
        }

        const email = this.emailInput.value.trim();
        
        // Set loading state
        this.setSubmitButtonState(true);
        this.clearMessage();

        try {
            // Get Supabase configuration
            const supabaseConfig = window.env?.getSupabaseConfig();
            
            if (!supabaseConfig || !supabaseConfig.url || !supabaseConfig.anonKey) {
                throw new Error('Supabase configuration not found');
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
                // Supabase returns 201 for successful creation
                this.showMessage(this.getMessage('success'), 'success');
                this.emailInput.value = '';
                
                // Optional: Track the conversion
                if (typeof gtag === 'function') {
                    gtag('event', 'early_access_signup', {
                        event_category: 'engagement',
                        event_label: 'early_access_form'
                    });
                }
            } else {
                // Handle specific error cases
                const errorData = await response.json().catch(() => ({}));
                
                if (response.status === 409 || errorData.code === '23505') {
                    // PostgreSQL unique constraint violation
                    this.showMessage(this.getMessage('duplicate'), 'error');
                } else {
                    this.showMessage(errorData.message || this.getMessage('error'), 'error');
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage(this.getMessage('networkError'), 'error');
        } finally {
            this.setSubmitButtonState(false);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const earlyAccessForm = new EarlyAccessForm();
    earlyAccessForm.init();
});