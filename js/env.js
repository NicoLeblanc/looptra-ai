/**
 * Environment configuration for client-side use
 * This file loads environment variables for the frontend
 */

class EnvironmentConfig {
    constructor() {
        this.config = {};
        this.loadConfig();
    }

    /**
     * Load configuration from various sources
     */
    loadConfig() {
        // For development: try to load from window object if set by a script
        if (typeof window !== 'undefined' && window.ENV) {
            this.config = { ...window.ENV };
            return;
        }

        // Check if we're in development (localhost)
        const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        
        if (isDev) {
            // Configuration locale de développement
            this.config = {
                SUPABASE_URL: 'https://dethftuebxxxiqxhmyvd.supabase.co',
                SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRldGhmdHVlYnh4eGlxeGhteXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzQwMjYsImV4cCI6MjA2OTAxMDAyNn0.-PN6UmZSoZUYF8rXgs50TrbuujKNwNmi9MCvVlGt6gM',
                NODE_ENV: 'development'
            };
        } else {
            // Configuration production - utilise les variables d'environnement injectées par Render
            this.config = {
                SUPABASE_URL: window.SUPABASE_URL || 'PLACEHOLDER_SUPABASE_URL',
                SUPABASE_ANON_KEY: window.SUPABASE_ANON_KEY || 'PLACEHOLDER_SUPABASE_ANON_KEY',
                NODE_ENV: 'production'
            };
        }
    }

    /**
     * Get environment variable
     * @param {string} key - Environment variable key
     * @param {string} defaultValue - Default value if not found
     * @returns {string} Environment variable value
     */
    get(key, defaultValue = null) {
        return this.config[key] || defaultValue;
    }

    /**
     * Check if we're in development mode
     * @returns {boolean}
     */
    isDevelopment() {
        return this.get('NODE_ENV') === 'development';
    }

    /**
     * Check if we're in production mode
     * @returns {boolean}
     */
    isProduction() {
        return this.get('NODE_ENV') === 'production';
    }

    /**
     * Get Supabase configuration
     * @returns {object} Supabase config object
     */
    getSupabaseConfig() {
        const url = this.get('SUPABASE_URL');
        const anonKey = this.get('SUPABASE_ANON_KEY');
        
        // Vérification que les valeurs ne sont pas des placeholders
        if (!url || !anonKey || 
            url.includes('PLACEHOLDER') || 
            anonKey.includes('PLACEHOLDER')) {
            console.error('⚠️ Configuration Supabase manquante ou mal configurée !');
            console.error('URL:', url);
            return null;
        }

        console.log('✅ Configuration Supabase chargée:', { url });
        
        return {
            url: url,
            anonKey: anonKey
        };
    }
}

// Export singleton instance
const env = new EnvironmentConfig();
window.env = env;