<template>
<div>
    <v-app-bar :clipped-left="clipped" fixed app>
        <v-spacer />
        <nuxt-link to="/" class="menu-link">Home</nuxt-link>
        <nuxt-link to="/" class="menu-link">About Us</nuxt-link>
        <nuxt-link to="/" class="menu-link">Our Services</nuxt-link>
        <nuxt-link to="/" class="menu-link">Contact Us</nuxt-link>
    </v-app-bar>
</div>
</template>
<script>
export default {
    data(){
        return{
            clipped:true
        }
    }
}
</script>
<style lang="scss">
    .menu-link{
        text-decoration: none;
        margin: 0px 15px;
    }
</style>
