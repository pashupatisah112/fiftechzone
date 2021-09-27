<template>
<div>
    <v-container id="Service">
        <v-row>
            <v-col align="center">
                <p class="text-lg-h4 text-md-h4 text-sm-h5 head1 mb-0">Our Services</p>
                <v-img :src="require('~/assets/line.svg')" max-width="300"></v-img>
            </v-col>

        </v-row>
        <v-row>
            <v-col cols="12" lg="6" md="6" align="center">
                <v-img :src="require('~/assets/service.svg')">
                    <p class="head2 ma-5">What we do</p>
                    <div style="position:absolute;bottom:10px;width:100px;margin:30px">
                        <p class="para-text2">The Victorian government plans to bring 120 national students per week. </p>
                    </div>
                </v-img>
            </v-col>
            <v-col cols="12" lg="6" md="6" align="center" class="pa-5">
                <div class="mt-5 mt-md-4 my-3">
                    <v-row>
                        <div class="round-icon text-center mr-5">
                            <v-col align="center" class="pa-0">
                                <v-img :src="require('~/assets/web.svg')" width="20" class="mt-2"></v-img>
                            </v-col>
                        </div>
                        <p class="float-right mt-2">WEB APPLICATION DEVELOPMENT</p>
                    </v-row>
                </div>
                <div class="ml-lg-5 ml-md-5 mt-lg-5 mt-md-4 my-3">
                    <v-row>
                        <div class="round-icon text-center mr-5">
                            <v-col align="center" class="pa-0">
                                <v-img :src="require('~/assets/mobile.svg')" width="25" class="mt-2"></v-img>
                            </v-col>
                        </div>
                        <p class="float-right mt-2">MOBILE APPLICATION DEVELOPMENT</p>
                    </v-row>
                </div>
                <div class="ml-lg-10 ml-md-10 mt-lg-5 mt-md-4 my-3">
                    <v-row>
                        <div class="round-icon text-center mr-5">
                            <v-col align="center" class="pa-0">
                                <v-img :src="require('~/assets/marketing.svg')" width="23" class="mt-2"></v-img>
                            </v-col>
                        </div>
                        <p class="float-right mt-2">DIGITAL MARKETING</p>
                    </v-row>
                </div>
                <div class="ml-lg-15 ml-md-15 mt-lg-5 mt-md-4 my-3">
                    <v-row>
                        <div class="round-icon text-center mr-5">
                            <v-col align="center" class="pa-0">
                                <v-img :src="require('~/assets/graphic.svg')" width="23" class="mt-2"></v-img>
                            </v-col>
                        </div>
                        <p class="float-right mt-2">GRAPHIC DESIGN</p>
                    </v-row>
                </div>
                <div class="ml-lg-15 ml-md-15 pl-lg-5 pl-md-5 mt-lg-5 mt-md-4 mt-my-3">
                    <v-row>
                        <div class="round-icon text-center mr-5">
                            <v-col align="center" class="pa-0">
                                <v-img :src="require('~/assets/training.svg')" width="20" class="mt-2"></v-img>
                            </v-col>
                        </div>
                        <p class="float-right mt-2">IT TRAINING</p>
                    </v-row>
                </div>

            </v-col>
        </v-row>
    </v-container>

</div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss">
.round-icon {
    width: 36px;
    height: 36px;
    box-shadow: 0 0 5px #000000;
    border-radius: 50%;
}

.icon {
    margin-top: 5px;
    color: #1F7F99;
}

.round-icon-img {
    width: 30px;
}
</style>
