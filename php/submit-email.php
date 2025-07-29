<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configuration
$emailsFile = '../data/early-access-emails.txt';
$maxEmails = 10000; // Limit to prevent abuse

// Ensure data directory exists
$dataDir = dirname($emailsFile);
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

// Response function
function sendResponse($success, $message, $code = 200) {
    http_response_code($code);
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'timestamp' => date('Y-m-d H:i:s')
    ]);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, 'Méthode non autorisée', 405);
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);
$email = isset($input['email']) ? trim($input['email']) : '';

// Validate email
if (empty($email)) {
    sendResponse(false, 'Adresse email requise', 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(false, 'Adresse email invalide', 400);
}

// Check if email already exists
if (file_exists($emailsFile)) {
    $existingEmails = file($emailsFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    
    // Check for duplicates
    foreach ($existingEmails as $existingEmail) {
        $parts = explode('|', $existingEmail);
        if (isset($parts[0]) && trim($parts[0]) === $email) {
            sendResponse(false, 'Cette adresse email est déjà enregistrée', 409);
        }
    }
    
    // Check max limit
    if (count($existingEmails) >= $maxEmails) {
        sendResponse(false, 'Limite d\'inscriptions atteinte', 429);
    }
} else {
    $existingEmails = [];
}

// Add new email with timestamp and IP
$newEntry = $email . '|' . date('Y-m-d H:i:s') . '|' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . PHP_EOL;

// Save to file
if (file_put_contents($emailsFile, $newEntry, FILE_APPEND | LOCK_EX) !== false) {
    // Log the addition
    error_log("New early access signup: $email");
    
    sendResponse(true, 'Inscription réussie ! Vous recevrez un email dès que nos nouveaux assistants seront disponibles.');
} else {
    sendResponse(false, 'Erreur serveur. Veuillez réessayer plus tard.', 500);
}
?>