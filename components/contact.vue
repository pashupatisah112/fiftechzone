<template>
<div>

    <!-- Image Section -->
    <v-container fluid id="Contact us" style="z-index:10">
        <v-row>
            <v-col cols="12" align="center">
                <p class="text-lg-h4 text-md-h4 text-sm-h5 head1 mb-0">Contact Us</p>
                <v-img :src="require('~/assets/line.svg')" max-width="300"></v-img>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10 pa-0">
                <v-img :src="require('~/assets/contact-bk.svg')" style="width:100%;height:auto">
                    <v-row justify="center">
                        <v-img :src="require('~/assets/contact-img.svg')" style="width:40%;height:auto;position:absolute;bottom:0"></v-img>
                    </v-row>
                </v-img>
            </v-col>
        </v-row>
    </v-container>

    <!-- Contact Details -->
    <v-container fluid style="background-color:#DEE8EA;" class="py-12">
        <v-row>
            <v-col cols="12" lg="4" md="4" align="center">
                <v-icon color="icon" size="60">mdi-map-marker-radius</v-icon>
                <p class="text1">Address</p>
                <p class="text2">Gokarneshwor- 08, Narayantar<br>Kathmandu, Nepal</p>
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
        <v-row class="px-16 py-5">
            <v-img :src="require('~/assets/line2.svg')"></v-img>
        </v-row>
        <v-row>

            <!-- Fiftechzone logo -->
            <v-spacer></v-spacer>
            <v-col cols="12" lg="4" md="4" align="center">
                <v-img :src="require('~/assets/logo.svg')" max-width="100"></v-img>
                <p class="ma-2 para-text2">The best IT solution at your budget. We understand your business's economic as well as development needs and help you grow to peak.</p>
            </v-col>

            <v-spacer></v-spacer>

            <!-- <v-col cols="12" lg="4" md="4" align="center">
                <p class="text3">In collaboration with B.N. Holidays</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.714801597472!2d85.37758721668112!3d27.72601072774173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bf6389b009d%3A0x503fb4562b5aa4ec!2sBN%20Holidays!5e0!3m2!1sen!2snp!4v1632648813570!5m2!1sen!2snp" style="border:none" allowfullscreen="" loading="lazy"></iframe>
            </v-col> -->

            <!-- Subscribe section -->
            <v-col cols="12" lg="4" md="4">
                <p class="text3">Subscribe Newsletter</p>
                <p class="para-text2">Subscribe our newsletter to get latest updates.</p>
                <v-row class="px-2">
                    <v-form v-model="valid" ref="form">
                        <v-text-field v-model="email" :rules="[validRules.required,validRules.validEmail]" rounded dense solo flat outlined placeholder="Enter yout email"></v-text-field>

                    </v-form>
                    <v-btn rounded class="text-capitalize float-right" dark color="icon" @click="send">Subscribe</v-btn>
                </v-row>
                <p class="text3">Follow us</p>
                <v-row class="px-2">
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

            <v-spacer></v-spacer>
            
        </v-row>
    </v-container>

    <!-- Subscribe alert -->
    <v-alert v-model="alert" type="success" dense style="position:fixed;top:5px;right:5px">
        Your email has been recorded.
        <v-btn icon @click="alert=false">
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-alert>

</div>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            email: '',
            validRules: {
                required: value => !!value || "Required.",
                validEmail: v => /.+@.+\..+/.test(v) || "E-mail must be valid",
            },
            alert:false

        }
    },
    methods: {
        send() {
            if (this.$refs.form.validate()) {
                this.alert=true
                this.email=''
            }
        }
    }
}
</script>

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
    padding-top: 5px;
    border: 1px solid #1F7F99;
    border-radius: 50%;
}
</style>
