<?php

$email = $_POST["email"];



if( $email=="" ){
    echo "Заполните все поля";
}

else{
    $to = "your_mail@mail.ru"; 
    $subject = "Письмо с обратной связи"; 
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: <test@mail.ru>\r\n";
   
    $message .= "Почта: ".$email."\n";


    
    $send = mail($to, $subject, $message, $headers);

    if ($send == "true")
    {
        echo "<p style='color: green;'>Ваше сообщение отправлено. Мы ответим вам в ближайшее время.\r\n</p>";
    }
    else
    {
        echo "<p style='color: red;'>Не удалось отправить, попробуйте снова!</p>";
    }
}
?>