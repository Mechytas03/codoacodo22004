<?php 
// Inicio session
if (!isset($_SESSION)) {  session_start();}
// recupero el nombre del archivo de texto
$id = $_SESSION['mi_archivo_de_texto'];
$target_path = "uploads/";
$target_path = $target_path . basename( $_FILES['uploadedfile']['name']); if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) { echo "El archivo ". basename( $_FILES['uploadedfile']['name']). " ha sido subido";
} else{
echo "Ha ocurrido un error, trate de nuevo!";
}
$foto = basename( $_FILES['uploadedfile']['name']);
$len = strlen($foto);
$tipo = substr($foto,$len-4);
$a1 = "uploads/".$foto;
$a2 = "uploads/".$id.$tipo;
rename($a1, $a2);
$a3 = $id.$tipo;
?>