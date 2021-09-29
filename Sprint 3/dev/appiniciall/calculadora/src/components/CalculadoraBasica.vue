<template>
<v-container>
    <v-row>
        <v-col>
            <h1 class="text-center">Calculadora Básica</h1>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
    <v-text-field
        type="number"
        label="Number 1"
        :rules="rules"
        hide-details="auto"
        v-model="n1"
    ></v-text-field>   
        </v-col>
        <v-col>
    <v-text-field
        type="number"
        label="Number 2"
        :rules="rules"
        hide-details="auto"
        v-model="n2"
    ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
    <v-btn
        color="primary"
        elevation="7"
        rounded
        small
        @click="sumar()"
    >Sumar</v-btn>
        </v-col>
        <v-col>
    <v-btn
        color="primary"
        elevation="7"
        rounded
        small
        @click="restar()"
    >Restar</v-btn>  
        </v-col>
        <v-col>
    <v-btn
        color="primary"
        elevation="7"
        rounded
        small
        @click="multiplicar()"
    >Multiplicar</v-btn>
        </v-col>
    <v-col>
    <v-btn
        color="primary"
        elevation="7"
        rounded
        small
        @click="dividir()"
    >Dividir</v-btn>
        </v-col>
    </v-row>
    <br />
    <span>{{ resultado }}</span>
</v-container>
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
        sumar() {
        this.resultado = parseFloat(this.n1) + parseFloat(this.n2);
        },
        restar() {
        this.resultado = parseFloat(this.n1) - parseFloat(this.n2);
        },
        multiplicar() {
        this.resultado = parseFloat(this.n1) * parseFloat(this.n2);
        },
        dividir() {
            if (this.n2 == 0){
                alert("No es un número")   
            } else {
                this.resultado = parseFloat(this.n1) / parseFloat(this.n2);
            }
        },
    }, 
};
</script>

<style>

</style>