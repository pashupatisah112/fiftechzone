<template>
<div>
    <v-container>
        <v-row>
            <v-col cols="12" align="center">
                <p class="head1 mb-0">Who we are</p>
                <v-img :src="require('~/assets/line.svg')" max-width="300"></v-img>
                <p class="para-text">The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system.The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system.</p>
            </v-col>
        </v-row>
        <v-row justify="center">
            <div class="round-box r1">
                <v-row justify="center">
                    <v-col cols="10" align="center" class="pt-16">
                        <v-img :src="require('~/assets/mission-icon.svg')" class="icons"></v-img>
                        <p class="head2 mb-0">Mission</p>
                        <v-img :src="require('~/assets/white-line.svg')" width="50px" height="2px"></v-img>
                        <p class="para-text2 mt-2">The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. </p>
                    </v-col>
                </v-row>

            </div>
        </v-row>
        <v-row justify="center">
            <div class="round-box r2">
                <v-row>
                    <v-col cols="8" align="center" class="pt-16 mt-16 mx-5">
                        <v-img :src="require('~/assets/mission-icon.svg')" class="icons"></v-img>
                        <p class="head2 mb-0">Vision</p>
                        <v-img :src="require('~/assets/white-line.svg')" width="50px" height="2px"></v-img>
                        <p class="para-text2 mt-2">The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. </p>
                    </v-col>
                </v-row>

            </div>
            <div class="round-box r3">
                <v-row justify="end">
                    <v-col cols="8" align="center" class="pt-16 mt-16 mx-5">
                        <v-img :src="require('~/assets/values-icon.svg')" class="icons"></v-img>
                        <p class="head2 mb-0">Values</p>
                        <v-img :src="require('~/assets/white-line.svg')" width="50px" height="2px"></v-img>
                        <p class="para-text2 mt-2">The Victorian government plans to bring 120 international students per week back into the state from next month using a dedicated hotel quarantine system. </p>
                    </v-col>
                </v-row>

            </div>
        </v-row>
    </v-container>
</div>
</template>

<style lang="scss">
.round-box {
    width: 390px;
    height: 390px;
    border-radius: 50%;
    box-shadow: 0 0 8px #B1C33D;
    justify-content: center;
}

.r1 {
    background: rgba(225, 180, 180, 0.5);
    margin-bottom: -150px;
    z-index: 10;

}

.r2 {
    background: rgba(43, 167, 200, 0.5);
    margin-right: -50px;
    z-index: 8;
}

.r3 {
    background: rgba(177, 195, 61, 0.5);
    margin-left: -50px;
    z-index: 9;
}

.icons {
    width: 36px;
    height: 36px;
    color: #165B6D;
}
</style>
