<template>
  <v-container>
    <h1>This is an about page</h1>
    <v-row> 
      <v-col> 
        <v-btn
          color="primary"
          elevation="2"
          @click="paso2()"
          >Home</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    paso2() {
      console.log("Ir al home...");
      this.$router.push("/");
            }
          }
              }
</script>

