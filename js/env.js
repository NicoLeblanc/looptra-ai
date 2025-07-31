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

        // Fallback to default values (for production, these should be replaced during build)
        this.config = {
            SUPABASE_URL: process.env.SUPABASE_URL || 'https://your-project-id.supabase.co',
            SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || 'your-anon-key-here',
            NODE_ENV: process.env.NODE_ENV || 'development'
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
        return {
            url: this.get('SUPABASE_URL'),
            anonKey: this.get('SUPABASE_ANON_KEY')
        };
    }
}

// Export singleton instance
const env = new EnvironmentConfig();
window.env = env;