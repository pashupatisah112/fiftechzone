<template>
<div>
    <v-app-bar app absolute style="background-color:white" id="Home" flat height="75">
        <v-img :src="require('~/assets/logo.svg')" max-width="100" class="mt-5 mx-5"></v-img>
        <v-spacer />
        <div class="hidden-sm-and-down">
            <div class="menu-link" v-for="(item,i) in menu" :key="i" @click="scroll(item.title)">{{item.title}}</div>
        </div>
        <v-menu transition="slide-y-transition" bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn class="hidden-md-and-up ma-3" v-bind="attrs" v-on="on" icon>
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </template>
            <v-list dense>
                <v-list-item v-for="(item, i) in menu" :key="i" @click="scroll(item.title)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</div>
</template>

<script>
export default {
    data() {
        return {
            clipped: true,
            menu:[
                {title:'Home'},
                {title:'About us'},
                {title:'Service'},
                // {title:'Our product'},
                {title:'Contact us'}
            ]
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
    display: inline;
}

.menu-link:hover {
    color: #2BA7C8;
    box-shadow: 0 0 0 2px #2BA7C8;
    transition-duration: 0.5s;
    border-radius: 20px
}
</style>
