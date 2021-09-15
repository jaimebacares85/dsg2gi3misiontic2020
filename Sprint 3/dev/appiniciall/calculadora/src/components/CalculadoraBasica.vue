<template>
<div>
    <h1>Calculadora Básica</h1>
    <v-text-field
        type="number"
        label="Number 1"
        :rules="rules"
        hide-details="auto"
        v-model="n1"
    ></v-text-field>   

    <v-text-field
        type="number"
        label="Number 2"
        :rules="rules"
        hide-details="auto"
        v-model="n2"
    ></v-text-field>  

    <v-btn
        color="primary"
        elevation="7"
        rounded
        small
        @click="suma()"
    >Sumar</v-btn>

    <v-btn
        color="primary"
        elevation="7"
        rounded
        small
        @click="resta()"
    >Restar</v-btn>  
    
    <br />
    <span>{{ resultado }}</span>
</div>
</template>

<script>
export default {
    name: "CalculadoraBasica",
    data: () => {
        return {
            n1:null, 
            n2:null, 
            resultado:"",
            rules: [
                value => !!value || 'Requerido.',
                value => (value && value.length >= 1) || 'Min 1 caracteres',
                value => value === 'number' || 'No es un número',
            ],
        };
    },
    methods: {
        suma() {
        this.resultado = parseFloat(this.n1) + parseFloat(this.n2);
        },
        resta() {
        this.resultado = parseFloat(this.n1) - parseFloat(this.n2);
        },
    }, 
};
</script>

<style>

</style>