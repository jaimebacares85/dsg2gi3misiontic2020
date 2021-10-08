<template>
<!-- Servicios-->
<!-- Header -->
<div class="container" style="height: auto; background-color: #ffffff;"> 
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
<div>
    <h2 class="text-center">Servicios</h2>

        <div class="container-fluid"> 
            <div class="row justify-content-center">
                <div class="col-sm-6 col-xs-12 col-lg-4"> 
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

                <div class="col-sm-6 col-xs-12 col-lg-4"> 
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

                <div class="col-sm-6 col-xs-12 col-lg-4"> 
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
    </div>
</div>
</template>

<script>
export default {
    name: 'Servicios',
    props: {
        msg: String
    }
}
</script>