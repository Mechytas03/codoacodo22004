<?php
                                if($_SERVER["REQUEST_METHOO"] == "POST"){
                                    $nombre = $_POST["nombre"];
                                    $email = $_POST["email"];
                                    $mensaje = $_POST["mensaje"];
                                    if(isset($nombre)){
                                        if(isset($email){
                                            if(isset($mensaje)){
                                                $para = "nuevocorreo@gmail.com";
                                                $asunto = "ESTO ES UNA PRUEBA";
                                                $cuerpo = $nombre."\n".$email."\n".$mensaje;
                                                $adicional = "from:noreplay@merceddes.com";
                                                mail($para, $asunto, $cuerpo,$adicional) ;
                                                ?>
                                                <p>ENVIO EXITOSO</p>
                                        <?php
                                            }
                                        })

                                    }

                                }
                            ?>