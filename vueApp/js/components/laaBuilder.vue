<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex md6>
                <v-card flat>
                    <v-card-text class="px-0">
                        <h1 class="text-xs-left">LAA Builder</h1>
                        <p class="text-xs-left"><strong>Ready to run a new campaign?</strong></p>
                        <p class="text-xs-left">Over here you can create multiple custom or lookalike audiences in a jiffy!</p>
                    </v-card-text>
                </v-card>
                <v-flex xs1 class="sprint-tooltip setting-tip" pt-5>
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
                            <v-flex xs6>
                                <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Ad Account:</label>
                                <v-combobox
                                        v-model="select"
                                        :items="items"
                                        label="Select a favorite activity or create a new one"
                                        solo
                                        outline
                                        hide-details
                                        flat
                                        class="app-text-field"
                                ></v-combobox>
                            </v-flex>
                            <v-flex xs6 pt-4>
                                <!--<label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">CA Builder Switch:</label>-->
                                <span class="font-weight-medium" style="display:inline-block">Combine Countries</span>
                                <v-switch
                                        v-model="switch1"
                                        class="toggle-switch"
                                        color="primary"
                                ></v-switch>
                                <span class="font-weight-medium" style="display:inline-block">Separate countries for each LAA</span>
                            </v-flex>
                            <v-flex xs6>
                                <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Source:</label>
                                <v-combobox
                                        :items="items2"
                                        label="Select Source"
                                        class="app-text-field"
                                        multiple
                                        flat
                                        outline
                                ></v-combobox>
                            </v-flex>
                            <v-flex xs6>
                                <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Country:</label>
                                <v-combobox
                                        :items="items3"
                                        label="Select Country"
                                        class="app-text-field"
                                        multiple
                                        flat
                                        outline
                                ></v-combobox>
                            </v-flex>
                            <v-flex xs6>
                                <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Regions:</label>
                                <v-combobox
                                        :items="items4"
                                        label="Select Regions"
                                        class="app-text-field"
                                        multiple
                                        flat
                                        outline
                                ></v-combobox>
                            </v-flex>
                            <v-flex xs6>
                                <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Audience Size:</label>
                                <v-combobox
                                        :items="items5"
                                        label="Select Size"
                                        class="app-text-field"
                                        multiple
                                        flat
                                        outline
                                ></v-combobox>
                            </v-flex>
                            <v-flex xs4>
                                <v-btn class="tf-app-cta left primary" flat>Create!</v-btn>
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
                items5: ['1%', '2%','3%','4%', '5%','6%','7%', '8%','9%','10%','15%','20%']
            }
        },
        created () {

        },
        methods: {

        }
    }
</script>