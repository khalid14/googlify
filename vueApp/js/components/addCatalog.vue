<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex md6>
                <v-card flat>
                    <v-card-text class="px-0">
                        <h1 class="text-xs-left">Remarketing Lover - Add Catalog</h1>
                        <p class="text-xs-left"><strong>I just love turning those VC events into Purchases!</strong></p>
                        <p class="text-xs-left">Run some high conversation dynamic remarketing ads by creating & connecting your
                            product catalog with Facebook! It's time to give your prospects another chance to buy!</p>
                    </v-card-text>
                </v-card>
                <v-flex xs5 class="sprint-tooltip setting-tip" pt-5>
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
                        <!--<p>Facebook Catalog Help! <span style="display: block;">Checkout this video! </span></p>-->
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
                        <v-layout row wrap class="aud-videos">
                            <!--<v-flex xs12>-->
                                <!--<v-dialog-->
                                        <!--v-model="dialog2"-->
                                        <!--width="500"-->
                                <!--&gt;-->
                                    <!--<v-btn dark slot="activator" class="secondary right tf-app-cta" flat>-->
                                        <!--<v-icon dark right class="ml-0 mr-3">play_circle_outline</v-icon>Add Catalog Video-->
                                    <!--</v-btn>-->
                                    <!--<v-card>-->
                                        <!--<v-card-title class="grey lighten-2">-->
                                            <!--Add Catalog Video-->
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
                            <v-flex xs12>
                               <v-layout row wrap>
                                   <v-flex xs3>
                                       <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Catalog Name:</label>
                                       <v-text-field
                                               label="Enter Catalog Name"
                                               outline
                                               class="app-text-field"
                                               flat
                                       ></v-text-field>
                                   </v-flex>
                                   <v-flex xs3>
                                       <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Feed Name:</label>
                                       <v-text-field
                                               label="Enter Feed Name"
                                               outline
                                               class="app-text-field"
                                               flat
                                       ></v-text-field>
                                   </v-flex>
                                   <v-flex xs3>
                                       <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Feed URL:</label>
                                       <v-text-field
                                               label="Enter Url"
                                               outline
                                               class="app-text-field"
                                               flat
                                       ></v-text-field>
                                   </v-flex>
                                   <v-flex xs3 pt-4>
                                       <v-btn class="tf-app-cta left primary--text" flat depressed style="border: 1px solid;">Preview Feed!</v-btn>
                                   </v-flex>
                                   <v-flex xs5>
                                       <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Ad Image:</label>
                                       <v-combobox
                                               :items="items"
                                               label="Select a favorite activity or create a new one"
                                               solo
                                               outline
                                               hide-details
                                               flat
                                               class="app-text-field"
                                       ></v-combobox>
                                   </v-flex>
                                   <v-flex xs5>
                                       <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Pixel Id:</label>
                                       <v-text-field
                                               label="Enter Id"
                                               outline
                                               class="app-text-field"
                                               flat
                                       ></v-text-field>
                                   </v-flex>
                                   <v-flex xs2 pt-4>
                                       <v-btn class="tf-app-cta left primary" flat>Create Catalog!</v-btn>
                                   </v-flex>
                               </v-layout>
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
                dialog: false,
                dialog2: false,
                items: [
                    'First Varient Image(default)',
                    'Product Image'
                ],
            }
        },
        created () {

        },
        methods: {
        }
    }
</script>