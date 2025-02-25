<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //variables
    $name = htmlspecialchars(trim($_POST["name"]));
    if ($name == "") {
        header("Location:contact.php?error=El nombre es obligatorio");
        exit;
    }
    $apellido = htmlspecialchars(trim($_POST["apellido"]));
    if ($apellido == "") {
        header("Location:contact.php?error=El apellido es obligatorio");
        exit;
    }
    $email = htmlspecialchars(trim($_POST["email"]));
    if ($email == "") {
        header("Location:contact.php?error=El correo electrónico es obligatorio");
        exit;
    }

    $subject = htmlspecialchars(trim($_POST["subject"]));
    if ($subject == "") {
        header("Location:contact.php?error=El asunto es obligatorio");
        exit;
    }
    $message = htmlspecialchars(trim($_POST["message"]));
    if ($message == "") {
        header("Location:contact.php?error=El mensaje es obligatorio");
        exit;
    }

    //validación adicional del mail y del teléfono

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       header("Location:contact.php?error=Correo electrónico no válido");
       exit; 
    }

   

    //destinatario del correo y los campos de cuando mandamos un correo.
    $to = "micorreo@hotmail.com";
    $email_subject = "Nuevo mensaje de contacto: $subject";
    $email_body = "Nombre: $name\n";
    $email_body .= "Correo electrónico: $email\n";
    $email_body .= "Teléfono: $phone\n";
    $email_body .= "Asunto: $subject\n";
    $email_body .= "Mensaje: $message\n";
    $headers = "From: $email";

    //enviar el correo
    if (mail($to,$email_subject,$email_body,$headers)) {
        header("Loca  tion:contact.php?success=1");
    } else {
        header("Location:contact.php?success=1");
    }
} else {
    echo "Método no permitido";
}
?>