<?php

//Definir las variables y establecer valores vacíos
$nameErr = $apellidoErr = $emailErr = $subjectErr = $messageErr = "";

$name = $apellido = $email = $subject = $message = "";//estas variables no valen nada


function checkEmpty($data){
    if (empty($data)){
        return false;
    }else{
        return true;
    }
}


if ($_SERVER["REQUEST_METHOD"] == "POST"){
    if (checkEmpty($_POST["name"]) || checkEmpty($_POST["apellido"]) || checkEmpty($_POST["email"]) || checkEmpty($_POST["subject"]) || checkEmpty($_POST["message"])){
        $nameErr = "El nombre es requerido";
        $apellidoErr = "El apellido es requerido";
        $emailErr = "El email es requerido";
        $subjectErr = "El asunto es requerido";
        $messageErr = "El mensaje es requerido";


    }
}