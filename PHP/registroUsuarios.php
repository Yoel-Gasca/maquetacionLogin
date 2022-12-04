<?php

    include 'conexionbk.php';

    // Variables para recabar los datos de los usuarios
    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    // Insertar los valores en la BD
    /* Todo esto funciona si existe una conexion a una BD */
    $query = "INSERT INTO usuarios(nombre_completo, correo, usuario, contrasena)
              VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena')"

    $ejecutar = mysqli_query($conexion, $query);

    //Alerta de confirmacion3

    if($ejecutar){
        echo '
            <script>
                alert("Usuario registrado correctamente");
                window.location = "../index.html";
            </script>
        ';
    } else{
        echo '
            <script>
                alert("Ha ocurrido un problema, intentalo de nuevo");
                window.location = "../index.html";
            </script>
        ';
    }
    
    mysqli_close($conexion);

?>