<template>
<!-- Sección Equipo -->
<div class="container" style="height: auto; background-color: #ffffff;">   

<!-- Header -->

<nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: #F8A815;" >
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="/">   <!-- style="height: 40px; width: 120px;" -->
            <img src="../assets/logolistonavbar.svg" width="30" height="30" class="d-inline-block align-top" alt="Logo Listo Menu">
        </a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            
        <div class="navbar-nav mr-auto text-center">
            <a class="nav-item nav-link active" href="/">Inicio <span class="sr-only"></span></a>
            <a class="nav-item nav-link dropdown-toggle" href="/servicios" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicios</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/heladeria">Heladería</a>
                    <a class="dropdown-item" href="/hotdogs">Hot Dogs</a>
                    <a class="dropdown-item" href="/bebidas">Bebidas</a>
                </div>                   
            <a class="nav-item nav-link" href="/blog">Blog</a>
            <a class="nav-item nav-link" href="/equipo">Equipo</a>
        </div>

        <a class="navbar-brand" href="/">
            <img src="../assets/logonavbarslbn.svg" width="263" height="50" class="d-inline-block align-top" alt="Logo Listo Menu">
        </a>

        <form class="form-inline my-2  mr-2" action="https://www.google.com/search" method="get">
            <input class="form-control mr-2" type="search" placeholder="Buscar Google" aria-label="Search">
            <button class="btn btn-dark my-2 mr-3" type="submit">Buscar</button>
        </form>
        

        <div class="d-flex flex-row justify-content-center">

            <a href="https://www.facebook.com/" title=""><img src="../assets/facebook.png" alt="Facebook Listo" title="Facebook Listo" width="35" height="35" class=".img-fluid mr-2"/></a>
            <a href="https://www.instagram.com/" title=""><img src="../assets/instagram.png" alt="Instagram Listo" title="Instagram Listo" width="35" height="35" class=".img-fluid mr-2"/></a>
            <a href="wa.link/8nifnj" title=""><img src="../assets/whatsapp.png" alt="WhatsApp Listo" title="WhatsApp Listo" width="35" height="35" class=".img-fluid"/></a>
        </div>
    </div>
</nav>

<!-- Fin Header -->

<!-- Heiner -- Inicio Sección Equipo -->
    <hr>
    <div>
        <div class="container-fluid" style="height: auto; background-color: #ffffff;">
                <h2 class="text-center pt-3">Nuestro Equipo</h2>
            <div class="row justify-content-center mb-5">
                <div class="col mt-2.5" style="background-color: #DDDADA;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
                    <div class="card text-dark bg-white">
                        <div class="d-flex justify-content-center p-2">
                            <img src="../assets/heiner.png" alt="Heiner" title="Heiner"  width="90em" 
                            height="90em" viewBox="0 0 16 16" class="bi bi-person-bounding-box" fill="currentColor"
                            />                        
                        </div>
                        <div class="card-body">    
                            <h5 class="card-title">Heiner</h5>
                                <h6 class="card-text">Nuestro Gerente nos guía a llevar a Listo a posicionarse 
                                como el mejor lugar de esparcimiento de la ciudad. Su función es 
                            coordinar que cada detalle este siempre Listo para satisfacer a todos nuestros clientes. </h6>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Gerente General</small>
                        </div>
                    </div>
                </div>

                <div class="col mt-2.5" style="background-color: #DDDADA;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
                    <div class="card text-dark bg-white">
                        <div class="d-flex justify-content-center p-2">
                            <img src="../assets/brandon.png" alt="Brandon" title="Brandon" style="width:50%"/>                     
                        </div>
                        <div class="card-body">    
                            <h5 class="card-title">Brandon</h5>
                                <h6 class="card-text">El Administrador de Listo es la persona que siempre está al frente de la operación. Gracias a su coordinación,  
                            hace que siempre llevemos a tiempo tus pedidos con una sonrisa y que todo este siempre Listo.</h6>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Administrador</small>
                        </div>
                    </div>
                </div>

                <div class="col mt-2.5" style="background-color: #DDDADA;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
                    <div class="card text-dark bg-white">
                        <div class="d-flex justify-content-center p-2">
                            <img src="../assets/yanis.png" alt="Yanis" title="Yanis" style="width:50%"/>                      
                        </div>
                        <div class="card-body">    
                            <h5 class="card-title">Yanis</h5>
                                <h6 class="card-text">Nuestra Chef es la encargada de darle vida y alegría a cada plato que llega a tú mesa. Sus manos realizan y permiten que  
                            todos nuestros clientes se lleven un recuerdo en su paladar que los hace regresar.</h6>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Chef Ejecutiva</small>
                        </div>
                    </div>
                </div>

                <div class="col mt-2.5" style="background-color: #DDDADA;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
                    <div class="card text-dark bg-white">
                        <div class="d-flex justify-content-center p-2">
                            <img src="../assets/david.png" alt="David" title="David" style="width:50%"/>                      
                        </div>
                        <div class="card-body">    
                            <h5 class="card-title">David</h5>
                                <h6 class="card-text">Sin nuestro Contador no estaríamos contando el cuento de nuestra empresa. Él siempre tiene Listo los recursos para pagar todo a timepo, 
                                para que solo nos enfoquemos en la atención al cliente.</h6>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Contador</small>
                        </div>
                    </div>
                </div>

                <div class="col mt-2.5" style="background-color: #DDDADA;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
                    <div class="card text-dark bg-white">
                        <div class="d-flex justify-content-center p-2">
                            <img src="../assets/jaime.png" alt="Jaime Bacares" title="Jaime" style="width:50%"/>                        </div>
                        <div class="card-body">    
                            <h5 class="card-title">Jaime</h5>
                                <h6 class="card-text">Nuestro Creador Audiovisual es el que atrae nuevos clientes 
                                con su gran ingenio, él siempre tiene Listo el comercial o la publicidad 
                            necesaria para poder generar las ventas para que nos visiten y recomienden</h6>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Creador Audiovisual</small>
                        </div>
                    </div>
                </div>

            </div> 
        </div>
    </div>
</div> 
<!-- Heiner -- Fin Sección Equipo -->
</template>

<script>
export default {
    name: 'Equipo',
    props: {
        msg: String
    }
}
</script>