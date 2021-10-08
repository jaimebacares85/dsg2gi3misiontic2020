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
<!-- Inicio Formulario y tablas -->
<section>
<!--Inicio Formulario-->    
    <div class="container-fluid bg-white" >
        <h2 class="text-center">Inicio de Sesión o Registro</h2>
            <div class="row justify-content-center">
                <div class="col-sm-12 col-xs-12 col-lg-12"></div>       
            </div>  
    </div>
    <hr>

        <b-alert 
        :show="dismissCountDown" 
        dismissible 
        :variant="mensaje.color" 
        @dismissed="dismissCountDown=0" 
        @dismiss-count-down="countDownChanged" > 
        {{mensaje.texto}} 
        </b-alert>

        <div class="contenedor__todo">
                <div class="caja__trasera">
                    <div class="caja__trasera-login">
                        <h3>¿Ya tienes una cuenta?</h3>
                        <p>Inicia sesión para entrar en la página</p>
                        <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                    </div>
                    <div class="caja__trasera-register">
                        <h3>¿Aún no tienes una cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id="btn__registrarse">Regístrarse</button>
                    </div>
                </div>

                <!--Formulario de Login y registro-->
                <div class="contenedor__login-register"> 
                    <!--Login-->
                    <form action="" class="formulario__login">
                        <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="Correo Electronico">
                        <input type="password" placeholder="Contraseña">
                        <button>Entrar</button>
                    </form>

                    <!--Register-->

                    <form @submit.prevent="editarSec(secEditar)" class="formulario__register" v-if="editar">
                        <h2>Editar Usuarios</h2>
                        <input type="text" placeholder="Nombre completo" v-model="secEditar.nombre">
                        <input type="email" placeholder="Correo Electronico" v-model="secEditar.correo">
                        <input type="text" placeholder="UsuarioId" v-model="secEditar.usuarioId">
                        <input type="text" placeholder="Rol" v-model="secEditar.rol">
                        <input type="text" placeholder="Teléfono" v-model="secEditar.telefono">
                        <input type="password" placeholder="Contraseña" v-model="secEditar.contraseña"> 
                        <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
                        <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>
                    </form>

                    <form @submit.prevent="agregarSec()" class="formulario__register" v-if="!editar">
                        <h2>Regístrarse</h2>
                        <input type="text" placeholder="Nombre completo" v-model="sec.nombre">
                        <input type="email" placeholder="Correo Electronico" v-model="sec.correo">
                        <input type="text" placeholder="UsuarioId" v-model="sec.usuarioId">
                        <input type="text" placeholder="Rol" v-model="sec.rol">
                        <input type="text" placeholder="Teléfono" v-model="sec.telefono">
                        <input type="password" placeholder="Contraseña" v-model="sec.contraseña"> 
                        <b-button class="btn-success my-2" type="submit">Regístrarse</b-button>
                    </form>
                </div>
            </div>
<!--Fin Formulario-->    
<hr>

<!--Inicio Tabla-->
    <div class="container">
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">UsuarioId</th>
            <th scope="col">Rol</th>
            <th scope="col">Telefono</th>
            <th scope="col">Contraseña</th>
            <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in sesion" :key="index">
            <th scope="row">{{item._id}}</th>
            <td>{{item.nombre}}</td> 
            <td>{{item.correo}}</td>
            <td>{{item.usuarioId}}</td>
            <td>{{item.rol}}</td>
            <td>{{item.telefono}}</td>
            <td>{{item.contraseña}}</td>
            <td>
                <b-button class="btn-danger mx-2" @click="eliminarSec(item._id)">Eliminar</b-button>
                <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
            </td>
        </tr>
        </tbody>
    </table>
</div>
<!--Fin Tabla-->
</section>
<!-- Fin Formulario y tablas -->
</div>
</template>




<script>
export default {
    data() {
        return {
            sesion: [],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 5, 
            dismissCountDown: 0,

            sec:{nombre:"",correo:"",usuarioId:"",rol:"",telefono:"",contraseña:""},
            editar:false,
            secEditar:{}
        }
    },
    created() {
        this.listarSesion();
    },
    methods:{
        listarSesion(){
            this.axios.get('/sesion')
            .then(res=>{
                console.log(res.data)
                this.sesion=res.data;
            })
            .catch(e=>{
                console.log(e.response)
            })
        },
        agregarSec(){
            this.axios.post('/nueva-sesion',this.sec)
            .then(res=>{
                this.sesion.push(res.data)
                this.sec.nombre="";
                this.sec.correo="";
                this.sec.usuarioId="";
                this.sec.rol="";
                this.sec.telefono="";
                this.sec.contraseña="";
                this.sec.color="success";
                this.mensaje.texto="Usuario Agregado";
                this.showAlert();
            })
            .catch(e=>{
                console.log(e.response)  
            })
        },

        eliminarSesion(){
            this.axios.delete(`/sec/${id}`)
            .then(res=>{
            const index = this.sesion.findIndex(item=> item._id===res.data._id);
                this.sesion.splice(index, 1)
                this.mensaje.color="success";
                this.mensaje.texto="Usuario Eliminado";
                this.showAlert();               
            })
            .catch(e=>{
                console.log(e.response);  
            })
        },

        activarEdicion(id){
            this.editar=true;
            this.axios.get(`/sec/${id}`)
            .then(res=>{
                this.usuariosEditar=res.data;
            })
            .catch(e=>{
                console.log(e.response);
            })
        },

        editarSec(item){
            this.axios.put(`/sec/${item._id}`, item)
            .them(res=>{
                const index= this.usuarios.findIndex(n=> n._id===res.data._id);
                this.usuarios[index].nombre=res.data.nombre;
                this.usuarios[index].correo=res.data.correo;
                this.usuarios[index].usuarioId=res.data.usuarioId;
                this.usuarios[index].rol=res.data.rol;
                this.usuarios[index].telefono=res.data.telefono;
                this.usuarios[index].contraseña=res.data.contraseña;
                this.mensaje.color="success";
                this.mensaje.texto="Usuario Editado";
                this.showAlert();
                this.editar=false;  
            })
            .catch(e=>{  
                console.log(e.response);          
            })
        },

        countDownChanged(dismissCountDown) { 
            this.dismissCountDown = dismissCountDown 
        }, 
        showAlert() { 
            this.dismissCountDown = this.dismissSecs 
        }
    }
}
</script>

