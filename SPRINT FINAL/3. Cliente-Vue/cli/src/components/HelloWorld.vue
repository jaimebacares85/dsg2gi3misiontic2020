<template>

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
    <!-- carousel -->

    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            
                <div class="active carousel-item d-block w-100">
                    <img  src="../assets/carrusel1.png" alt="First slide" class="img-fluid">
                </div>
                <div class="active carousel-item d-block w-100">
                    <img  src="../assets/carrusel2.png" alt="Second slide" class="img-fluid">
                </div>
                <div class="active carousel-item d-block w-100">
                    <img src="../assets/carrusel3.png" alt="Third slide" class="img-fluid">
                </div>
            
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>


<!-- Fin Sección David Menu Navegación y Carrusel--> 

<!-- Yanis -- Inicio Sección Servicios -->

    <hr />
    <div class="container-fluid bg-white" >
        <h2 class="text-center">Servicios</h2>
            <div class="row justify-content-center">
                <div class="col-sm-12 col-xs-12 col-lg-12"></div>       
            </div>
    </div>
    <hr />

        <div class="container-fluid"> 
            <div class="row justify-content-center">
                
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"> 
                    <div class="card text-center"> 
                        <div class="d-flex justify-content-center"> 
                                <img src="../assets/heladeria.png" alt="Servicio Heladeria" title="Servicio Heladeria" />
                        </div> 
                            
                                <div class="card-body"> 
                                    <h5 class="card-title">Heladería</h5> 
                                    <p class="card-text"> Tenemos helados y 
                                    malteadas con tus sabores favoritos: fresa, mandarina, chicle, frutos rojos, brownie...</p> 
                                    <a href="/heladeria" class="btn btn-warning">Ver más Heladería</a> 
                                </div> 
                    </div> 
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"> 
                    <div class="card text-center"> 
                        <div class="d-flex justify-content-center"> 
                                <img src="../assets/hotdogs.png" alt="Venta Hotdogs" title="Venta Hotdogs" />
                        </div> 
                            
                                <div class="card-body"> 
                                    <h5 class="card-title">Hot Dogs</h5> 
                                    <p class="card-text">Disfruta de los mejores Hot Dogs 
                                    Listo de la ciudad tipo americano, o también tenemos hawaianos, rancheros o...</p> 
                                    <a href="/hotdogs" class="btn btn-warning">Ver más Hot Dogs</a> 
                                </div> 
                    </div> 
                </div>

                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"> 
                    <div class="card text-center"> 
                        <div class="d-flex justify-content-center"> 
                                <img src="../assets/bebidas.png" alt="Venta Bebidas" title="Venta Bebidas" />
                        </div> 
                            
                                <div class="card-body"> 
                                    <h5 class="card-title">Bebidas</h5> 
                                    <p class="card-text">Tenemos variedad de bebidas para que vengas 
                                    a compartir en cualquier ocasión. Disfruta de americanos, expresos...</p> 
                                    <a href="/bebidas" class="btn btn-warning">Ver más Bebidas</a> 
                                </div> 
                    </div> 
                </div>
            </div>
        </div>
    
<!-- Yanis -- Fin Sección Servicios -->

<!-- Brandon -- Inicio Sección Blog -->

    <hr>
    <div class="container-fluid bg-white" >
        <h2 class="text-center">Blog</h2>
            <div class="row justify-content-center">
                <div class="col-sm-12 col-xs-12 col-lg-12"></div>       
            </div>
    </div>

    <div>
        <div class="container-fluid bg-white" > 
            <div class="row mt-md-5 mt-sm-5 mt-xs-5">

                <div class="col-lg-6 col-xs-12 border">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="p-3">
                            <img src="../assets/hierbabuena.png" alt="Propiedades Hierbabuena" title="Propiedades Hierbabuena" />
                        </div>
                        <div class="p-2"> 
                        <h3>La Hierba Buena</h3>
                        <hr>
                            <p class="text-justify"> Las propiedades de la Hierba Buena son mayores
                                combinada con el limón. La hierba buena tiene propiedades de dolores ligeros y
                                digestión. El limón sirve como antioxidante para el cuerpo y contiene vitamina C.
                            </p>
                        </div>
                    </div>
                        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                            <a type="button" class="btn btn-outline-primary" href="/hierbabuena">Más Info</a>
                        </div>
                    </div>

                <div class="col-lg-6 col-xs-12 border">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="p-3">
                            <img src="../assets/empanadas.png" alt="Empanadas Martica" title="Empanadas Martica" />                        
                        </div>
                        <div class="p-2">
                        <h3>Empanadas de Martica</h3>
                        <hr> 
                            <p class="text-justify"> ¿Quién no ha comido una deliciosa empanada de 
                                Martica? Tenemos excelentes noticias, realizamos un convenio con Martica y ahora
                                vendemos sus increíbles empanadas en Listo. No esperes para venir a disfrutarlas.
                            </p>
                        </div>
                    </div>
                        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                            <a type="button" class="btn btn-outline-primary" href="/empanadasmartica">Más Info</a>
                        </div>
                    </div>

                <div class="w-100"></div>

                <div class="col-lg-6 col-xs-12 border">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="p-3">
                            <img src="../assets/licores.png" alt="Licores legales" title="Licores legales" />                       
                        </div>
                        <div class="p-2">
                        <h3>Licores Legales</h3>
                        <hr> 
                            <p class="text-justify"> ¿Sabes cómo identificar una botella de licor legal? En Listo encuentras 
                            solamente licores estampillados, la forma de identificarlos es con la lectura del código QR que trae su estampilla. Acá te enseñamos cómo.
                            </p>
                        </div>
                    </div>
                        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                            <a type="button" class="btn btn-outline-primary" href="/licoreslegales">Más Info</a>
                        </div>
                    </div>

                <div class="col-lg-6 col-xs-12 border">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="p-3">
                            <img src="../assets/tinto.png" alt="Propiedades Tinto" title="Propiedades Tinto" />                        
                        </div>
                        <div class="p-2">
                        <h3>Café Cultura</h3>
                        <hr> 
                            <p class="text-justify"> Otro convenio importante que hemos hecho para 
                                ti, es el de ofrecer Café Cultura. El mejor café especial de la región. Así que si quieres
                                probar el mejor café, ven a Listo y te preparamos un café recién molido y tostado.
                            </p>
                        </div>
                    </div>
                        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                            <a type="button" class="btn btn-outline-primary" href="/cafecultura">Más Info</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>

<!-- Brandon -- Fin Sección Blog -->

<!-- Heiner -- Inicio Sección Equipo -->

    <hr>

    <div>
        <div class="container-fluid bg-white" >
                <h2 class="text-center pt-3">Nuestro Equipo</h2>
            <div class="row justify-content-center mb-5">
                <div class="col mt-2.5" style="background-color: #ffffff;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
                
                    <div class="card text-dark bg-white">
                        <div class="d-flex justify-content-center p-2">
                            <img src="../assets/heiner.png" alt="Heiner" title="Heiner"  width="90em" 
                            height="90em" viewBox="0 0 16 16" class="bi bi-person-bounding-box" fill="currentColor"
                            />                        
                        </div>
                        <div class="card-body">    
                            <h5 class="card-title">Heiner</h5>
                                <h6 class="card-text">Nuestro Gerente nos guía a llevar a Listo a ser 
                                el mejor lugar de esparcimiento de la ciudad. Su función es 
                            coordinar que cada detalle este siempre Listo para satisfacer a todos nuestros clientes. </h6>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Gerente General</small>
                        </div>
                    </div>
                </div>

                <div class="col mt-2.5" style="background-color: #ffffff;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
                    <div class="card text-dark bg-white">
                        <div class="d-flex justify-content-center p-2">
                            <img src="../assets/brandon.png" alt="Brandon" title="Brandon" style="width:50%"/>                     
                        </div>
                        <div class="card-body">    
                            <h5 class="card-title">Brandon</h5>
                                <h6 class="card-text">El Administrador de Listo es la persona que siempre está al frente de la operación. Su coordinación,  
                            hace que siempre llevemos a tiempo tus pedidos con una sonrisa y que todo este siempre Listo.</h6>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Administrador</small>
                        </div>
                    </div>
                </div>

                <div class="col mt-2.5" style="background-color: #ffffff;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
                    <div class="card text-dark bg-white">
                        <div class="d-flex justify-content-center p-2">
                            <img src="../assets/yanis.png" alt="Yanis" title="Yanis" style="width:50%"/>                      
                        </div>
                        <div class="card-body">    
                            <h5 class="card-title">Yanis</h5>
                                <h6 class="card-text">Nuestra Chef es la encargada de darle vida y alegría a cada plato que llega a tú mesa. Sus manos permiten que  
                            todos nuestros clientes se lleven un recuerdo en su paladar que los hace regresar.</h6>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Chef Ejecutiva</small>
                        </div>
                    </div>
                </div>

                <div class="col mt-2.5" style="background-color: #ffffff;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
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

                <div class="col mt-2.5" style="background-color: #ffffff;">         <!-- <div class="col-sm-6 col-md-4 col-xs-2 col-lg-2"> --> 
                    <div class="card text-dark bg-white">
                        <div class="d-flex justify-content-center p-2">
                            <img src="../assets/jaime.png" alt="Jaime Bacares" title="Jaime Bacares" style="width:50%"/>                        </div>
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

<!-- Heiner -- Fin Sección Equipo -->


<!-- Div Final -->
</div>

</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>
/*
h3 { 
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}

*/
</style>

-->