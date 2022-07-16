<template>
  <div>
    <v-card elevation="0" :height="height" :width="width">

    <Main />
    </v-card>

    <About />
    <Service />
    <Contact />
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
      width: 0,
    };
  },
  mounted() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  },
};
</script>