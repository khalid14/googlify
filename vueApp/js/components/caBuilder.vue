<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex md6>
                <v-card flat>
                    <v-card-text class="px-0">
                        <h1 class="text-xs-left">CA Builder</h1>
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
                                    <!--<v-btn dark slot="activator" class="primary right tf-app-cta" flat>-->
                                        <!--<v-icon dark right class="ml-0 mr-3">play_circle_outline</v-icon>Custom Audiences Video-->
                                    <!--</v-btn>-->
                                    <!--<v-card>-->
                                        <!--<v-card-title class="grey lighten-2">-->
                                            <!--Custom Audiences Video-->
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
                            <v-flex xs3>
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
                            <v-flex xs3>
                                <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Pixel Id:</label>
                                <v-combobox
                                        v-model="select2"
                                        :items="items2"
                                        label="Select a favorite activity or create a new one"
                                        solo
                                        outline
                                        hide-details
                                        flat
                                        class="app-text-field"
                                ></v-combobox>
                            </v-flex>
                            <v-flex xs3>
                                <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">CA Name:</label>
                                <v-text-field
                                        label="Your Custom Audience Name"
                                        outline
                                        class="app-text-field"
                                        flat
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs3 pt-4>
                                <!--<label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">CA Builder Switch:</label>-->
                                <span class="font-weight-medium" style="display:inline-block">Event Based</span>
                                <v-switch
                                        v-model="switch1"
                                        class="toggle-switch"
                                        color="primary"
                                ></v-switch>
                                <span class="font-weight-medium" style="display:inline-block">URL Based</span>
                            </v-flex>
                            <v-flex mb-4 xs12>
                                <v-card color="grey lighten-4" flat>
                                    <v-card-text>
                                            <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Include</label>
                                            <small class="text-xs-left" style="display: block">Traffic that meets the following conditions:</small>
                                        <v-flex xs2>
                                            <v-combobox
                                                v-model="select3"
                                                :items="items3"
                                                label="Select Type"
                                                solo
                                                outline
                                                hide-details
                                                flat
                                                class="app-text-field">
                                            </v-combobox>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-layout row wrap>
                                                <v-flex xs2>
                                                    <v-combobox
                                                            :items="items4"
                                                            label="content_ids"
                                                            solo
                                                            outline
                                                            hide-details
                                                            flat
                                                            class="app-text-field">
                                                    </v-combobox>
                                                </v-flex>
                                                <v-flex xs2>
                                                    <v-combobox
                                                            :items="items5"
                                                            label="Contains"
                                                            solo
                                                            outline
                                                            hide-details
                                                            flat
                                                            class="app-text-field">
                                                    </v-combobox>
                                                </v-flex>
                                                <v-flex xs2>
                                                    <v-text-field
                                                            label="Add values"
                                                            outline
                                                            class="app-text-field"
                                                            flat
                                                    ></v-text-field>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <v-btn class="rounded-app-cta left primary--text" outline flat depressed small>Add Rule</v-btn>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs4>
                                <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Event Type:</label>
                                <v-combobox
                                        :items="items6"
                                        label="Select Event Type"
                                        class="app-text-field"
                                        multiple
                                        flat
                                        outline
                                ></v-combobox>
                            </v-flex>
                            <v-flex xs4>
                                <label class="text-xs-left font-weight-black" style="display: block; font-size: 16px">Lookback Period:</label>
                                <v-combobox
                                        :items="items7"
                                        label="Select Period"
                                        class="app-text-field"
                                        multiple
                                        flat
                                        outline
                                ></v-combobox>
                            </v-flex>
                            <v-flex xs4 pt-4>
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
                    'DiscoverMan Pixel - 2 (23135465161)',
                    'Babies n Mamas Pixel - 2 (23135465161)',
                    'InstylMobile - 2 (23135465161)',
                    'Another Store - 2 (23135465161)'
                ],
                items3: ['All', 'Any'],
                items4: ['Event Product Ids (product)', 'Event Product Name (product)','Custom Parameter'],
                items5: ['Contains', 'Not Contains','Equal','Not Equal','Less Than','Less Than or Equal','Greater Than','Greater Than or Equal'],
                items6: ['ViewContent', 'AddToCart','InitiateCheckout','AddPaymentInfo','Purchase'],
                items7: ['1', '3','7','14','30','60','90','120','180'],
            }
        },
        created () {

        },
        methods: {

        }
    }
</script>