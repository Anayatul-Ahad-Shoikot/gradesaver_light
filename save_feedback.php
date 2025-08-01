<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input']);
    exit;
}
$file = 'feedback.json';
$feedbacks = [];
if (file_exists($file)) {
    $json = file_get_contents($file);
    $feedbacks = json_decode($json, true) ?: [];
}
$data['timestamp'] = date('c');
$feedbacks[] = $data;
file_put_contents($file, json_encode($feedbacks, JSON_PRETTY_PRINT));
echo json_encode(['success' => true]);