<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap class="inner-config-heading">
                <v-flex xs1>
                    <v-card-text class="icon-header pt-0">
                        <i class="material-icons primaryActive--text">
                            beach_access
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md10 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        App Authorization
                    </v-card-text>
                    <v-layout row wrap class="connect-store mt-4">
                        <v-flex v-for="(stores,index) in listedStores" :key="index">
                            <v-btn flat :href="stores.articleLink">
                                <img :src="stores.logo">
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
       data(){
           return{
               listedStores: [
                   {
                       logo: '../public/images/shopify-logo.png',
                       articleLink: '#'
                   },
                   {
                       logo: '../public/images/google-merchant-center-logo.png',
                       articleLink: '#'
                   },
                   {
                       logo: '../public/images/google-adwords.png',
                       articleLink: '#'
                   }
               ],
           }
       }
    }
</script>