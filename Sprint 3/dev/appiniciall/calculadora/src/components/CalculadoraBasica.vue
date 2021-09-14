<template>
<div>
    <h1>Calculadora Básica</h1>
    <input type="number" v-model="n1" />
    <input type="number" v-model="n2" />
    <button @click="suma()">Sumar</button>
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
        };
    },
    methods: {
        suma() {
        this.resultado = parseFloat(this.n1) + parseFloat(this.n2);
        },
    }, 
};
</script>

<style>

</style>