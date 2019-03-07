<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex md6>
                <v-card flat>
                    <v-card-text class="px-0">
                        <h1 class="text-xs-left">Remarketing Lover - Google Category</h1>
                        <p class="text-xs-left"><strong>I just love turning those VC events into Purchases!</strong></p>
                        <p class="text-xs-left">Run some high conversation dynamic remarketing ads by creating & connecting your
                            product catalog with Facebook! It's time to give your prospects another chance to buy!</p>
                    </v-card-text>
                </v-card>
            </v-flex>
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
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card flat class="border-arround">
                    <v-card-text class="pt-0">
                        <v-layout row wrap class="aud-videos">
                            <v-flex xs3>
                                <h3 class="text-xs-left mb-1">Some Heading Goes Here...</h3>
                            </v-flex>
                            <v-flex xs12>
                                <v-data-table
                                        :headers="headers"
                                        :items="desserts"
                                        class="data-listings typing-listed"
                                >
                                    <template slot="items" slot-scope="props">
                                        <td class="text-xs-left listed-prod-types">
                                            <v-flex xs6>
                                                <v-text-field
                                                        label="Product Type"
                                                        solo
                                                        :value="props.item.name"
                                                        flat
                                                        hide-details
                                                ></v-text-field>
                                            </v-flex>
                                        </td>
                                        <td class="text-xs-left listed-catg">
                                            <v-flex xs6>
                                                <v-combobox
                                                        :items="props.item.calories"
                                                        label="Select a favorite activity or create a new one"
                                                        solo
                                                        outline
                                                        hide-details
                                                        flat
                                                        class="app-text-field"
                                                ></v-combobox>
                                            </v-flex>
                                        </td>
                                        <td class="justify-center layout px-0">
                                            <v-btn icon class="mt-4">
                                                <v-icon class="grey--text text--darken-2">
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
                        text: 'Shopify Product Type',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Assign Google Product Category', value: 'calories',sortable: false, },
                    // { text: 'Fat (g)', value: 'fat' },
                    // { text: 'Carbs (g)', value: 'carbs' },
                    // { text: 'Protein (g)', value: 'protein' },
                    { text: 'Actions', value: 'name', sortable: false, align: 'center', }
                ],
                desserts: [],
                editedIndex: -1,
                editedItem: {
                    name: '',
                    calories: ''
                },
                defaultItem: {
                    name: '',
                    calories: ''
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
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    },
                    {
                        name: 'Eclair',
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    },
                    {
                        name: 'Cupcake',
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    },
                    {
                        name: 'Gingerbread',
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    },
                    {
                        name: 'Jelly bean',
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    },
                    {
                        name: 'Lollipop',
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    },
                    {
                        name: 'Honeycomb',
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    },
                    {
                        name: 'Donut',
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    },
                    {
                        name: 'KitKat',
                        calories: ['Electornics','Amplifiers > Mouse','Furniture > Chairs', 'Gaming Chairs']
                    }
                ]
            }
        }
    }
</script>