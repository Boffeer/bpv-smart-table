<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../vendor/phpmailer/phpmailer/src/Exception.php';
require '../../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../../vendor/phpmailer/phpmailer/src/SMTP.php';

// Переменные
$name = htmlspecialchars($_POST['name']);
$tel = htmlspecialchars($_POST["tel"]);
$address = htmlspecialchars($_POST["address"]);

$trinketName = htmlspecialchars($_POST["trinketName"]);
$cost = htmlspecialchars($_POST["cost"]);

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;

$mail->Host = 'ssl://smtp.gmail.com';
$mail->Port = 465;
$mail->Username = 'boffeerleads@gmail.com';
$mail->Password = 'Bo8612241142ds';

// От кого
$mail->setFrom('boffeerleads@gmail.com', 'Заказ на аксесуар');

// Кому
$mail->addAddress('boffeerleads@gmail.com', 'Принмающий лиды');

// Тема письма
$mail->Subject = 'Смарт столы, лид с квиза';

// Тело письма

$body = "Цена: ".$cost."<br>Имя: ".$name."<br>Телефон: " .$tel."<br>Адрес: ".$address."<br>Аксессуар: ".$tirnketName;
$mail->msgHTML($body);

// Приложение
// $mail->addAttachment(__DIR__ . '/image.jpg');



$mail->send();

echo '<script>
  location.href= "https://ya.ru";
</script>';
?>