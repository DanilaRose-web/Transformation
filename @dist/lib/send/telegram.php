/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

<?php

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1798535930:AAFfeyJYqKC3xdgt2UZaohSaFuw9vWNthns";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-1001155016293";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';

//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
  header("Location: https://nessart.ru/success.html");
} else {
  header("Location: https://nessart.ru/error.html");
}
?>