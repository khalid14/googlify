<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex md6>
                <v-card flat>
                    <v-card-text class="px-0">
                        <h1 class="text-xs-left">Settings</h1>
                        <p class="text-xs-left"><strong>(Optional) Advanced marketer? Use these settings to get more out of Trackify!</strong></p>
                        <p class="text-xs-left">Note: We recommend that you keep the default settings here, unless you fully understand the effects of any changes you make. Please watch the Advanced Settings Video, and ask any questions in our chat!</p>
                    </v-card-text>
                </v-card>
                <v-flex xs1 class="adSettings sprint-tooltip setting-tip" pt-5>
                    <v-tooltip bottom color="orange darken-2">
                        <v-icon
                                slot="activator"
                                color="orange darken-2"
                                dark
                        >whatshot</v-icon>
                        <span>You can create a sprint to promote your best-selling products, a specific collection or ones with a specific tag!</span>
                    </v-tooltip>
                    <v-btn icon @click="" class="mt-0"><v-icon color="blue darken-1">school</v-icon></v-btn>
                </v-flex>
            </v-flex>
            <!--<v-flex md6>-->
            <!--<v-card flat>-->
            <!--<v-card-text class="px-0 top-right-portion">-->
            <!--<p>Build Better Audiences! <span style="display: block;">Watch and implement this video!</span></p>-->
            <!--<v-dialog-->
            <!--v-model="dialog"-->
            <!--width="500"-->
            <!--&gt;-->
            <!--<v-btn flat depressed slot="activator" class="ma-0 pa-0 video-popup-cta">-->
            <!--<img src="../../images/audience_thumb.png" alt="Audience Thumb">-->
            <!--</v-btn>-->
            <!--<v-card>-->
            <!--<v-card-title-->
            <!--class="headline grey lighten-2"-->
            <!--primary-title-->
            <!--&gt;-->
            <!--Build Better Audiences!! Checkout this video!-->
            <!--</v-card-title>-->

            <!--<v-card-text class="pb-0">-->
            <!--<iframe title="YouTube video player" class="youtube-player-intro" type="text/html" width="100%" src="https://www.youtube.com/embed/K39KWvsZ5j8?rel=0&amp;&amp;showinfo=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" frameborder="0" allowfullscreen=""></iframe>-->
            <!--</v-card-text>-->

            <!--<v-divider></v-divider>-->

            <!--<v-card-actions>-->
            <!--<v-spacer></v-spacer>-->
            <!--<v-btn-->
            <!--color="primary"-->
            <!--flat-->
            <!--@click="dialog = false"-->
            <!--&gt;-->
            <!--Got It!-->
            <!--</v-btn>-->
            <!--</v-card-actions>-->
            <!--</v-card>-->
            <!--</v-dialog>-->
            <!--</v-card-text>-->
            <!--</v-card>-->
            <!--</v-flex>-->
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card flat class="border-arround">
                    <v-card-text>
                        <v-layout row wrap>
                            <!--<v-flex xs12 mb-4 class="aud-videos">-->
                            <!--<v-dialog-->
                            <!--v-model="dialog2"-->
                            <!--width="500"-->
                            <!--&gt;-->
                            <!--<v-btn dark slot="activator" class="secondary right tf-app-cta" flat>-->
                            <!--<v-icon dark right class="ml-0 mr-3">play_circle_outline</v-icon>Lookalike Audiences Video-->
                            <!--</v-btn>-->
                            <!--<v-card>-->
                            <!--<v-card-title class="grey lighten-2">-->
                            <!--Lookalike Audiences Video-->
                            <!--</v-card-title>-->
                            <!--<v-card-text class="pb-0">-->
                            <!--<iframe title="YouTube video player" class="youtube-iframe" type="text/html" width="100%" height="400" src="https://www.youtube.com/embed/K39KWvsZ5j8?start=rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" frameborder="0" allowfullscreen=""></iframe>-->
                            <!--</v-card-text>-->

                            <!--<v-divider></v-divider>-->

                            <!--<v-card-actions>-->
                            <!--<v-spacer></v-spacer>-->
                            <!--<v-btn-->
                            <!--color="primary"-->
                            <!--flat-->
                            <!--@click="dialog2 = false"-->
                            <!--&gt;-->
                            <!--Got It!-->
                            <!--</v-btn>-->
                            <!--</v-card-actions>-->
                            <!--</v-card>-->
                            <!--</v-dialog>-->
                            <!--</v-flex>-->
                            <v-flex sm4>
                                <v-card-text>
                                    <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Purchase Value Reporting::</label>
                                    <v-text-field
                                            label="Enter Value"
                                            single-line
                                            outline
                                            class="app-text-field"
                                    ></v-text-field>
                                </v-card-text>
                            </v-flex>
                            <v-flex sm4 class="offset-sm1">
                                <v-card-text>
                                    <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Time Delay on VC event
                                        (Recommended value: 0):</label>
                                    <v-text-field
                                            label="Enter Value"
                                            single-line
                                            outline
                                            class="app-text-field"
                                    ></v-text-field>
                                </v-card-text>
                            </v-flex>
                            <v-flex sm4>
                                <v-card-text class="text-xs-left">
                                    <label class="font-weight-black" style="display: block; font-size: 16px">ViewContent, ATC and InitiateCheckout
                                        Value Reporting:</label>
                                    <span class="font-weight-medium" style="display:inline-block">Off</span>
                                    <v-switch
                                            v-model="switch1"
                                            class="toggle-switch"
                                            color="primary"
                                    ></v-switch>
                                    <span class="font-weight-medium" style="display:inline-block">On</span>
                                </v-card-text>
                            </v-flex>
                            <v-flex sm4>
                                <v-card-text class="text-xs-left">
                                    <label class="font-weight-black" style="display: block; font-size: 16px">Enable Microdata if Available:</label>
                                    <span class="font-weight-medium" style="display:inline-block">Off</span>
                                    <v-switch
                                            v-model="switch1"
                                            class="toggle-switch"
                                            color="primary"
                                    ></v-switch>
                                    <span class="font-weight-medium" style="display:inline-block">On</span>
                                </v-card-text>
                            </v-flex>
                            <v-flex sm4>
                                <v-card-text class="text-xs-left">
                                    <label class="font-weight-black" style="display: block; font-size: 16px">Enable Advanced Matching:</label>
                                    <span class="font-weight-medium" style="display:inline-block">Off</span>
                                    <v-switch
                                            v-model="switch1"
                                            class="toggle-switch"
                                            color="primary"
                                    ></v-switch>
                                    <span class="font-weight-medium" style="display:inline-block">On</span>
                                </v-card-text>
                            </v-flex>
                            <v-flex xs4>
                                <v-btn class="tf-app-cta left primary" flat>Save!</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                switch1: true,
                dialog: false,
                dialog2: false,
                select:'Shopify Store 1',
                select2:'DiscoverMan Pixel - 2 (23135465161)',
                select3:'All',
                items: [
                    'Shopify Store 1',
                    'Shopify Store 2',
                    'Shopify Store 3',
                    'Shopify Store 4'
                ],
                items2: [
                    'Lookalike (US, 2% to 5%) - NT - Website Purchases - 180 Days',
                    'Lookalike (CA, 8% to 3%) - NT - Purchases - 100 Days',
                    'Lookalike (US, 2% to 5%) - NT - Website Purchases - 180 Days',
                ],
                items3: ['Afghanistan', 'Albania','Pakistan','Canada','USA'],
                items4: ['Asia-Pacific Economic Cooperation', 'European Economic Area','Gulf Cooperation Council'],
                items5: ['1%', '2%','3%','4%', '5%','6%','7%', '8%','9%','10%','15%','20%'],
                trackifyCode: '<!-- Trackify Pixel Code -->\n' +
                    '          Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....              \n'+
                    '<!-- END Trackify Pixel Code -->'
            }
        },
        created () {

        },
        methods: {

        }
    }
</script>