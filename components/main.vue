<template>
<div>
    <v-card elevation="0" :height="height" :width="width">
    <v-container>
            <v-row>
            <v-col cols="12" lg="5" md="12" style="margin-top:10%">
                <p class="head2 text-lg-h3 text-md-h3 text-h4">Go Digital</p>
                <p class="head1 text-lg-h2 text-lg-h2 text-h3 mt-n2 font-weight-bold">Live Smart</p>
                <p class="para-text">Digitalize your business with our product services. Let the world know where you stand in the market.</p>
            </v-col>
            <v-col cols="12" lg="7" md="12">
                <v-img :src="require('~/assets/dev-image.svg')"></v-img>
            </v-col>
        </v-row>
    </v-container>
    </v-card>
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
