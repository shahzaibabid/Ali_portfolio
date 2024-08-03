<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));  
    $msg = trim($_POST["msg"]);

    // Check that data was sent
    if (empty($name) OR empty($subject) OR empty($msg) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Recipient email address
    $recipient = "shahzaibabidsaeed@gmail.com";

    // Email subject
    $email_subject = "New contact from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$msg\n";

    // Email headers
    $email_headers = "From: $name <$email>";

     // Send the email
     if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Oops! Something went wrong, and we couldn't send your message."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "There was a problem with your submission, please try again."]);
}
?>