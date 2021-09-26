<template>
<v-app>
    <Appbar />
    <v-main>
        <v-container fluid class="pa-0">
            <Nuxt />
        </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
        <v-row justify="center" class="ma-0">
            <p class="para-text2 mb-0">Copyright <span>&copy; {{ new Date().getFullYear() }}</span>. All Rights Reserved.</p>
        </v-row>
    </v-footer>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            fixed: false
        }
    }
}
</script>
