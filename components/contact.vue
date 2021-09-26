<template>
<div>
    <v-container>
        <v-row>
            <v-col cols="12" align="center">
                <p class="head1 mb-0">Contact Us</p>
                <v-img :src="require('~/assets/line.svg')" max-width="300"></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-img :src="require('~/assets/contact-back.svg')">
                <v-img :src="require('~/assets/contact-img.svg')" max-width="700" max-height="" class="mx-auto" style="margin-top:10%"></v-img>
            </v-img>
        </v-row>
    </v-container>
    <v-container fluid>
        <v-row>
            <v-col cols="12" lg="4" md="4" align="center">
                <v-icon color="icon" size="60">mdi-map-marker-radius</v-icon>
                <p class="text1">Address</p>
                <p class="text2">Gokaneshwor- 08, Narayantar<br>Kathmandu, Nepal</p>
            </v-col>
            <v-col cols="12" lg="4" md="4" align="center">
                <v-icon color="icon" size="60">mdi-cellphone</v-icon>
                <p class="text1">Mobile</p>
                <p class="text2">9861585119</p>
            </v-col>
            <v-col cols="12" lg="4" md="4" align="center">
                <v-icon color="icon" size="60">mdi-send</v-icon>
                <p class="text1">Email</p>
                <p class="text2">fiftechzone@gmail.com</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="10">
                <v-img :src="require('~/assets/line.svg')" max-width="300"></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" lg="4" md="6">
                <p class="text3">Subscribe Newsletter</p>
                <p class="para-text2">Subscribe our newsletter to get latest updates.</p>
                <v-row>
                    <v-text-field rounded dense solo flat outlined placeholder="Enter yout email"></v-text-field>
                    <v-btn rounded class="text-capitalize ml-2" dark color="icon">Subscribe</v-btn>
                </v-row>
                <p class="text3">Follow us</p>
                <v-row>
                    <div class="round-icon2 text-center">
                        <v-icon color="icon">mdi-facebook</v-icon>
                    </div>
                    <div class="round-icon2 text-center mx-2">
                        <v-icon color="icon">mdi-instagram</v-icon>
                    </div>
                    <div class="round-icon2 text-center">
                        <v-icon color="icon">mdi-twitter</v-icon>
                    </div>
                </v-row>
            </v-col>
            <v-col cols="12" lg="8" md="6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.714801597472!2d85.37758721668112!3d27.72601072774173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bf6389b009d%3A0x503fb4562b5aa4ec!2sBN%20Holidays!5e0!3m2!1sen!2snp!4v1632648813570!5m2!1sen!2snp" style="width:800px;border:0" height="200" allowfullscreen="" loading="lazy"></iframe>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<style lang="scss">
.text1 {
    font-family: 'Bahnschrift', sans-serif;
    font-weight: bold;
    font-size: 30;
}

.text2 {
    font-family: 'Bahnschrift', sans-serif;
    font-size: 20;
}
.text3 {
    font-size: 23;
    color: #1F7F99;
}
.round-icon2 {
    width: 36px;
    height: 36px;
    padding-top:5px;
    border: 1px solid #1F7F99;
    border-radius: 50%;
}
</style>
