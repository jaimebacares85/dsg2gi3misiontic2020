<template>
  <v-container>
    <v-row> 
      <v-col> 
        <calculadora-basica />
      </v-col>
    </v-row>
    <v-row> 
      <v-col> 
        <v-btn
          color="primary"
          elevation="2"
          @click="paso1()"
          ></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CalculadoraBasica from '../components/CalculadoraBasica.vue'

export default {
  name: 'Home',
  components: {
    CalculadoraBasica
  },
  methods: {
    paso1(){
      console.log("clic en botón about");
      this.$router.push("/about");
    }
  }
}
</script>
