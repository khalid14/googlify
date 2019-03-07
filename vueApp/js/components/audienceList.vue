<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex md6>
                <v-card flat>
                    <v-card-text class="px-0">
                        <h1 class="text-xs-left">Audience List</h1>
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
                            <!--<v-flex xs12 class="aud-videos">-->
                                <!--&lt;!&ndash;<v-btn icon @click=""  class="right"><v-icon color="blue darken-1">school</v-icon></v-btn>&ndash;&gt;-->
                                <!--&lt;!&ndash;<v-dialog&ndash;&gt;-->
                                        <!--&lt;!&ndash;v-model="dialog2"&ndash;&gt;-->
                                        <!--&lt;!&ndash;width="500"&ndash;&gt;-->
                                <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                                    <!--&lt;!&ndash;<v-btn dark slot="activator" class="primary right tf-app-cta" flat>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<v-icon dark right class="ml-0 mr-3">play_circle_outline</v-icon>Audiences Video&ndash;&gt;-->
                                    <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<v-card>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<v-card-title class="grey lighten-2">&ndash;&gt;-->
                                            <!--&lt;!&ndash;Audiences Video&ndash;&gt;-->
                                        <!--&lt;!&ndash;</v-card-title>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<v-card-text class="pb-0">&ndash;&gt;-->
                                            <!--&lt;!&ndash;<iframe title="YouTube video player" class="youtube-iframe" type="text/html" width="100%" height="400" src="https://www.youtube.com/embed/K39KWvsZ5j8?start=rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" frameborder="0" allowfullscreen=""></iframe>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</v-card-text>&ndash;&gt;-->

                                        <!--&lt;!&ndash;<v-divider></v-divider>&ndash;&gt;-->

                                        <!--&lt;!&ndash;<v-card-actions>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<v-spacer></v-spacer>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<v-btn&ndash;&gt;-->
                                                    <!--&lt;!&ndash;color="primary"&ndash;&gt;-->
                                                    <!--&lt;!&ndash;flat&ndash;&gt;-->
                                                    <!--&lt;!&ndash;@click="dialog2 = false"&ndash;&gt;-->
                                            <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                                                <!--&lt;!&ndash;Got It!&ndash;&gt;-->
                                            <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</v-card-actions>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</v-card>&ndash;&gt;-->
                                <!--&lt;!&ndash;</v-dialog>&ndash;&gt;-->
                            <!--</v-flex>-->
                            <v-flex sm5>
                                <v-layout row wrap>
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
                                    <v-flex xs6 pt-2>
                                        <v-btn dark class="primary tf-app-cta mt-4" flat>
                                            Build LAA's from Selected Base Audiences
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex sm7 class="text-xs-right">
                                <v-card flat style="background-color: transparent">
                                    <v-card-text>
                                        <v-btn small flat depressed class="small-app-cta">All</v-btn>
                                        <v-btn small flat depressed class="small-app-cta">Custom Audience</v-btn>
                                        <v-btn small flat depressed class="small-app-cta">Look-a-like</v-btn>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12>
                                <v-layout row wrap>
                                    <v-flex xs3>
                                        <v-layout row wrap>
                                            <v-flex xs2 pt-3>
                                                <span class="font-weight-bold">Show</span>
                                            </v-flex>
                                            <v-flex xs3>
                                                <v-select
                                                        :items="entriesItems"
                                                        label="10"
                                                        outline
                                                        solo
                                                        class="app-text-field"
                                                        flat
                                                        small
                                                        height="30px"
                                                ></v-select>
                                            </v-flex>
                                            <v-flex xs2 pt-3>
                                                <span class="font-weight-bold">Entries</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs9>
                                            <v-text-field
                                                    label="Search Listing"
                                                    single-line
                                                    outline
                                                    class="app-text-field right"
                                            ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs12>
                                <v-data-table
                                        :headers="headers"
                                        :items="desserts"
                                        class="data-listings"
                                >
                                    <template slot="items" slot-scope="props">
                                        <td class="text-xs-left">{{ props.item.name }}</td>
                                        <td class="text-xs-left">{{ props.item.calories }}</td>
                                        <td class="text-xs-left">{{ props.item.fat }}</td>
                                        <td class="text-xs-left">{{ props.item.carbs }}</td>
                                        <td class="text-xs-left">{{ props.item.protein }}</td>
                                        <td class="justify-center layout px-0">
                                            <v-btn icon>
                                                <v-icon small>
                                                    edit
                                                </v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon small>
                                                    delete
                                                </v-icon>
                                            </v-btn>
                                        </td>
                                    </template>
                                    <template slot="no-data">
                                        <v-btn color="primary" @click="">Reset</v-btn>
                                    </template>
                                </v-data-table>
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
                select:'Shopify Store 1',
                items: [
                    'Shopify Store 1',
                    'Shopify Store 2',
                    'Shopify Store 3',
                    'Shopify Store 4'
                ],
                entriesItems:['10','25','50','100','200','500','All'],
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Calories', value: 'calories' },
                    { text: 'Fat (g)', value: 'fat' },
                    { text: 'Carbs (g)', value: 'carbs' },
                    { text: 'Protein (g)', value: 'protein' },
                    { text: 'Actions', value: 'name', sortable: false, align: 'center', }
                ],
                desserts: [],
                editedIndex: -1,
                editedItem: {
                    name: '',
                    calories: 0,
                    fat: 0,
                    carbs: 0,
                    protein: 0
                },
                defaultItem: {
                    name: '',
                    calories: 0,
                    fat: 0,
                    carbs: 0,
                    protein: 0
                }
            }
        },
        created () {
            this.initialize()
        },
        methods: {
            initialize() {
                this.desserts = [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7
                    }
                ]
            }
        }
    }
</script>