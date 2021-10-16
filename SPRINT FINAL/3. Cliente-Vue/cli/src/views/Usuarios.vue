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

<div class="container">
    <h1>Usuarios</h1>

    <b-alert 
    :show="dismissCountDown" 
    dismissible 
    :variant="mensaje.color" 
    @dismissed="dismissCountDown=0" 
    @dismiss-count-down="countDownChanged" > 
    {{mensaje.texto}} 
    </b-alert>

    <form @submit.prevent="editarUsuario(usuarioEditar)" v-if="editar">
        <h3>Editar Usuarios</h3>
        <input type="text" class="form-control my-2" placeholder="Nombre completo" v-model="usuarioEditar.nombre">
        <input type="email" class="form-control my-2" placeholder="Correo Electronico" v-model="usuarioEditar.correo">
        <input type="text" class="form-control my-2" placeholder="UsuarioId" v-model="usuarioEditar.usuarioId">
        <input type="text" class="form-control my-2" placeholder="Rol" v-model="usuarioEditar.rol">
        <input type="text" class="form-control my-2" placeholder="Teléfono" v-model="usuarioEditar.telefono">
        <input type="password" class="form-control my-2" placeholder="Contraseña" v-model="usuarioEditar.contraseña"> 
        <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
        <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>
    </form> 

    <form @submit.prevent="agregarUsuario()" v-if="!editar">   
   
        <h3>Agregar un nuevo usuario</h3>
        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="usuario.nombre">
        <input type="text" class="form-control my-2" placeholder="Correo" v-model="usuario.correo">
        <input type="text" class="form-control my-2" placeholder="UsuarioId" v-model="usuario.usuarioId">
        <input type="text" class="form-control my-2" placeholder="Rol" v-model="usuario.rol">
        <input type="text" class="form-control my-2" placeholder="Telefono" v-model="usuario.telefono">
        <input type="text" class="form-control my-2" placeholder="Contraseña" v-model="usuario.contraseña">
        <b-button class="btn-success my-2" type="submit">Agregar</b-button>
    </form>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">UsuarioId</th>
                <th scope="col">Rol</th>
                <th scope="col">telefono</th>
                <th scope="col">Contraseña</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in usuarios" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.nombre}}</td> 
                <td>{{item.correo}}</td>
                <td>{{item.usuarioId}}</td>
                <td>{{item.rol}}</td>
                <td>{{item.telefono}}</td>
                <td>{{item.contraseña}}</td>
                <td>
                    <b-button class="btn-danger mx-2" @click="eliminarUsuario(item._id)">Eliminar</b-button>
                    <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<!-- Fin Formulario y tablas -->
</div>
</template>

<script>
export default {

    data() {
        return {
            usuarios: [],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 5, 
            dismissCountDown: 0,

            usuario:{nombre:"",correo:"",usuarioId:"",rol:"",telefono:"",contraseña:""},
            editar:false,
            usuarioEditar:{}
        }    
    },
    created () {
        this.listarUsuarios();
    },
    methods: {
        listarUsuarios() {
            this.axios.get('/usuario')
            .then(res => {
                console.log(res.data);
                this.usuarios = res.data;
            })
            .catch(e => {
                console.log(e.response);            
            })
        },
        agregarUsuario(){
            this.axios.post('/nuevo-registro',this.usuario)
            .then(res=>{
                this.usuarios.push(res.data)
                this.usuario.nombre="";
                this.usuario.correo="";
                this.usuario.usuarioId="";
                this.usuario.rol="";
                this.usuario.telefono="";
                this.usuario.contraseña="";
                this.mensaje.color="success";
                this.mensaje.texto="Usuario Agregado";
                this.showAlert();
            })
            .catch(e=>{
                console.log(e.response);  
            })
        },
        eliminarUsuario(id){
            this.axios.delete(`/usuario/${id}`)
            .then(res=>{
            const index = this.usuarios.findIndex(item=> item._id===res.data._id);
                this.usuarios.splice(index, 1);
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
            this.axios.get(`/usuario/${id}`)
            .then(res=>{
                this.usuarioEditar=res.data;
            })
            .catch(e=>{
                console.log(e.response);
            })
        },   
        
        editarUsuario(item){
            this.axios.put(`/usuario/${item._id}`, item)
            .then(res=>{
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
        },

    }
}
</script>
