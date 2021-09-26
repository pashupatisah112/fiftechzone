<template>
<div>
    <v-app-bar app absolute style="background-color:white" id="home" flat>
        <v-spacer />
        <div class="menu-link" @click="scroll('home')">Home</div>
        <div class="menu-link" @click="scroll('about')">About Us</div>
        <div class="menu-link" @click="scroll('service')">Our Services</div>
        <div class="menu-link" @click="scroll('contact')">Contact Us</div>
    </v-app-bar>
</div>
</template>

<script>
export default {
    data() {
        return {
            clipped: true
        }
    },
    methods: {
        scroll(item) {
            document.getElementById(item).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="css">
.menu-link {
    margin: 0px 15px;
    cursor: pointer;
    padding: 5px 10px;
}

.menu-link:hover {
    color: #2BA7C8;
    box-shadow: 0 0 0 2px #2BA7C8;
    transition-duration: 0.5s;
    border-radius: 20px
}
</style>
