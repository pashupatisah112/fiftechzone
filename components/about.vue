<template>
<div>
    <v-container id="About" class="mb-10">
        <v-row justify="center">
            <v-col cols="12" lg="8" md="10" align="center">
                <p class="text-lg-h4 text-md-h4 text-sm-h5 head1 font-weight-bold  mb-0">Who we are</p>
                <v-img :src="require('~/assets/line.svg')" max-width="300" class="mb-3"></v-img>
                <p class="para-text2">The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system.The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system.</p>
            </v-col>
        </v-row>
        <v-row justify="center" class="mb-lg-n16 mb-md-n16">
            <v-col align="center" class="mb-lg-n16 mb-md-n16">
                <div class="round-box r1 py-lg-14 py-md-12 py-10">
                    <v-row justify="center">
                        <v-col cols="10" align="center" class="py-16">
                            <v-img :src="require('~/assets/mission-icon.svg')" class="icons"></v-img>
                            <p class="head2 mb-0">Mission</p>
                            <v-img :src="require('~/assets/white-line.svg')" width="50px" height="2px"></v-img>
                            <p class="para-text2 mt-2">The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. </p>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
        <v-row justify="center" class="mt-lg-n16 mt-md-n16">
            <v-col cols="12" lg="6" md="6" align="center" class="pl-lg-16 mr-lg-n16 mr-md-n10">
                <div class="round-box r2 py-lg-14 py-md-12 py-10 mr-lg-n16 mr-md-n16">
                    <v-row justify="center">
                        <v-col cols="10" lg="8" md="8" align="center" class="py-16">
                            <v-img :src="require('~/assets/mission-icon.svg')" class="icons"></v-img>
                            <p class="head2 mb-0">Vision</p>
                            <v-img :src="require('~/assets/white-line.svg')" width="50px" height="2px"></v-img>
                            <p class="para-text2 mt-2">The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. </p>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="12" lg="6" md="6" align="center" class="pr-lg-16 ml-lg-n16 ml-md-n10">
                <div class="round-box r3 py-lg-14 py-md-12 py-10 ml-lg-n16">
                    <v-row justify="center">
                        <v-col cols="10" lg="8" md="8" align="center" class="py-16">
                            <v-img :src="require('~/assets/values-icon.svg')" class="icons"></v-img>
                            <p class="head2 mb-0">Values</p>
                            <v-img :src="require('~/assets/white-line.svg')" width="50px" height="2px"></v-img>
                            <p class="para-text2 mt-2">The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. </p>
                        </v-col>
                    </v-row>

                </div>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<style lang="scss">
.round-box {
    max-width: 390px;
    max-height: 390px;
    box-shadow: 0 0 8px #B1C33D;
    justify-content: center;
    border-radius: 50%;
}

.r1 {
    background: rgba(225, 180, 180, 0.5);
    // margin-bottom: -150px;
    z-index: 10;

}

.r2 {
    background: rgba(43, 167, 200, 0.5);
    // margin-right: -50%;
    z-index: 8;
}

.r3 {
    background: rgba(177, 195, 61, 0.5);
    // margin-left: -50%;
    z-index: 9;
}

.icons {
    width: 36px;
    height: 36px;
    color: #165B6D;
}
</style>
