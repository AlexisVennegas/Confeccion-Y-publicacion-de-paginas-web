<?php
// Valor que deseas mostrar en el lugar de {value}
$value = "Hola Mundo!";

// Incluye el contenido del archivo HTML
$html_content = file_get_contents("../prueba08/index.html");

// Reemplaza {value} con el valor deseado
$html_content = str_replace("{value}", $value, $html_content);

// Imprime el HTML modificado
echo $html_content;
?>
