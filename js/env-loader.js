/**
 * Simple environment loader for development
 * This script loads .env file for local development
 * Note: This is for development only - in production, use build-time environment injection
 */

async function loadEnvironment() {
    // Only load .env file in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        try {
            const response = await fetch('/.env');
            if (response.ok) {
                const envText = await response.text();
                const envVars = parseEnvFile(envText);
                
                // Set environment variables on window object
                window.ENV = envVars;
                console.log('Environment loaded:', Object.keys(envVars));
            }
        } catch (error) {
            console.warn('Could not load .env file:', error.message);
            console.log('Using default configuration');
        }
    }
}

/**
 * Parse .env file content
 * @param {string} content - .env file content
 * @returns {object} Parsed environment variables
 */
function parseEnvFile(content) {
    const env = {};
    const lines = content.split('\n');
    
    for (const line of lines) {
        const trimmedLine = line.trim();
        
        // Skip empty lines and comments
        if (!trimmedLine || trimmedLine.startsWith('#')) {
            continue;
        }
        
        // Parse KEY=VALUE format
        const equalsIndex = trimmedLine.indexOf('=');
        if (equalsIndex !== -1) {
            const key = trimmedLine.substring(0, equalsIndex).trim();
            let value = trimmedLine.substring(equalsIndex + 1).trim();
            
            // Remove quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            
            env[key] = value;
        }
    }
    
    return env;
}

// Load environment on script load
loadEnvironment();