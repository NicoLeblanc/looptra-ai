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

        // Configuration directe avec tes identifiants Supabase
        this.config = {
            SUPABASE_URL: 'https://dethftuebxxxiqxhmyvd.supabase.co',
            SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRldGhmdHVlYnh4eGlxeGhteXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzQwMjYsImV4cCI6MjA2OTAxMDAyNn0.-PN6UmZSoZUYF8rXgs50TrbuujKNwNmi9MCvVlGt6gM',
            NODE_ENV: 'development'
        };
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
        
        // Vérification que les valeurs sont définies
        if (!url || !anonKey) {
            console.error('⚠️ Configuration Supabase manquante !');
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