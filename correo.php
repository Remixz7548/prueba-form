<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

/*
if( ! isset( $_POST['nombre'] ) ){
    header("Location: index.html" );
}
*/

$nombre = $_POST['name'];
$email = $_POST['email'];
$numero = $_POST['number'];
$asunto = $_POST['asunto'];
$sistema = $_POST['sistema'];
$mensaje = $_POST['mensaje'];

if( empty(trim($nombre)) ) $nombre = 'anonimo';

$body = <<<HTML
    <h1>Contacto desde el sitio web Grupo Contsulta</h1>
    <p>De: $nombre / $email / $numero</p>
    <h2>Asunto</h2>
    $asunto
    <h2>Sistema</h2>
    $sistema
    <h2>Mensaje</h2>
    $mensaje
HTML;

//sintaxis de los emails email@algo.com || 
// nombre <email@algo.com>

$headers = "MIME-Version: 1.0 \r\n";
$headers.= "Content-type: text/html; charset=utf-8 \r\n";
$headers.= "From: $nombre <$email> \r\n";
$headers.= "To: Sitio web <parachichon75@gmail.com> \r\n";
// $headers.= "Cc: copia@email.com \r\n";
// $headers.= "Bcc: copia-oculta@email.com \r\n";


//REMITENTE (NOMBRE/APELLIDO - EMAIL)
//ASUNTO 
//CUERPO 
$rta = mail('$destinatario = parachichon75@gmail.com', "Mensaje web: $asunto", $body, $headers );
//var_dump($rta);
