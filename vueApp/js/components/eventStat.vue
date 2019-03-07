<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex md6>
                <v-card flat>
                    <v-card-text class="px-0">
                        <h1 class="text-xs-left">Event Stat</h1>
                        <p class="text-xs-left"><strong>(Optional) Advanced marketer? Use these settings to get more out of Trackify</strong></p>
                    </v-card-text>
                </v-card>
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
                                <!--<v-dialog-->
                                        <!--v-model="dialog2"-->
                                        <!--width="500"-->
                                <!--&gt;-->
                                    <!--<v-btn dark slot="activator" class="secondary right tf-app-cta" flat>-->
                                        <!--<v-icon dark right class="ml-0 mr-3">play_circle_outline</v-icon>Tracking Tags Video-->
                                    <!--</v-btn>-->
                                    <!--<v-card>-->
                                        <!--<v-card-title class="grey lighten-2">-->
                                            <!--Tracking Tags Video-->
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