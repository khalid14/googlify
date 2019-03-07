<template>
    <v-container grid-list-md class="pa-4 pb-4">
        <v-layout row wrap>
            <v-flex xs12 class="text-xs-center">
                <v-card-text class="px-0">
                    <h1 class="text-xs-left">Pixel Controls</h1>
                    <p class="text-xs-left"><strong>(Optional) Advanced marketer? Use these settings to get more out of Trackify!</strong></p>
                </v-card-text>
            </v-flex>
            <v-layout row wrap>
                <v-flex xs12 mb-2>
                    <label class="text-xs-left pb-2" style="display: block; font-size: 16px">FB Account Pixel ID</label>
                    <v-combobox
                            v-model="select"
                            :items="items"
                            label="Select FB Pixel"
                            solo
                            outline
                            hide-details
                            flat
                            class="app-text-field"
                    ></v-combobox>
                </v-flex>
                <v-flex sm6 pr-3>
                    <label class="text-xs-left pb-2" style="display: block; font-size: 16px">Select Pixel Type</label>
                    <v-select
                            :items="pixelTypes"
                            label="Select Type"
                            class="app-text-field"
                            solo
                            outline
                            hide-details
                            flat
                    ></v-select>
                </v-flex>
                <v-flex sm6>
                    <label class="text-xs-left pb-2" style="display: block; font-size: 16px">Select Collection</label>
                    <v-combobox
                            class="app-text-field"
                            v-model="select2"
                            :items="items2"
                            label="I use chips"
                            multiple
                            chips
                            solo
                            outline
                            hide-details
                            flat
                    ></v-combobox>
                </v-flex>
                <v-flex xs12>
                    <v-btn dark class="primary tf-app-cta" flat>
                        Add This Pixel
                    </v-btn>
                </v-flex>
                <v-flex xs12>
                    <h2 class="mb-2 mt-3" style="font-weight: normal;">Listed Pixels:</h2>
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
                            <td class="pt-3">
                                <v-switch
                                        v-model="switch1"
                                ></v-switch>
                            </td>
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
            <!--<v-flex xs12>-->
                <!---->
                <!--&lt;!&ndash;<v-tabs&ndash;&gt;-->
                        <!--&lt;!&ndash;centered&ndash;&gt;-->
                        <!--&lt;!&ndash;color="trackifyx"&ndash;&gt;-->
                        <!--&lt;!&ndash;dark&ndash;&gt;-->
                        <!--&lt;!&ndash;icons-and-text&ndash;&gt;-->
                        <!--&lt;!&ndash;grow&ndash;&gt;-->
                        <!--&lt;!&ndash;class="gen-settings"&ndash;&gt;-->
                <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;<v-tabs-slider color="grey lighten-1"></v-tabs-slider>&ndash;&gt;-->

                    <!--&lt;!&ndash;<v-tab href="#tab-1">&ndash;&gt;-->
                        <!--&lt;!&ndash;Connect Facebook&ndash;&gt;-->
                        <!--&lt;!&ndash;<v-icon dark left class="fab fa-facebook-f"></v-icon>&ndash;&gt;-->
                    <!--&lt;!&ndash;</v-tab>&ndash;&gt;-->

                    <!--&lt;!&ndash;<v-tab href="#tab-2">&ndash;&gt;-->
                        <!--&lt;!&ndash;Pixel Setup&ndash;&gt;-->
                        <!--&lt;!&ndash;<v-icon>settings</v-icon>&ndash;&gt;-->
                    <!--&lt;!&ndash;</v-tab>&ndash;&gt;-->

                    <!--&lt;!&ndash;<v-tab href="#tab-3">&ndash;&gt;-->
                        <!--&lt;!&ndash;Select Business Manager&ndash;&gt;-->
                        <!--&lt;!&ndash;<v-icon>business_center</v-icon>&ndash;&gt;-->
                    <!--&lt;!&ndash;</v-tab>&ndash;&gt;-->
                    <!--&lt;!&ndash;<v-tab-item id="tab-1">&ndash;&gt;-->
                        <!--&lt;!&ndash;<v-card color="" class="pa-3 single-settings">&ndash;&gt;-->
                            <!--&lt;!&ndash;<v-card-text>&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<img style="max-width: 253px;display: block;width: 100%;" src="../../images/facebook-logo.png">&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;<v-btn  class="social-app-cta primary" dark flat>&ndash;&gt;-->
                                <!--&lt;!&ndash;<v-icon dark left class="fab fa-facebook-f"></v-icon>&ndash;&gt;-->
                                <!--&lt;!&ndash;Facebook&ndash;&gt;-->
                            <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
                            <!--&lt;!&ndash;<v-icon light right large color="success">check_circle</v-icon>&ndash;&gt;-->
                            <!--&lt;!&ndash;</v-card-text>&ndash;&gt;-->
                        <!--&lt;!&ndash;</v-card>&ndash;&gt;-->
                    <!--&lt;!&ndash;</v-tab-item>&ndash;&gt;-->
                    <!--&lt;!&ndash;<v-tab-item id="tab-2">&ndash;&gt;-->
                        <!--&lt;!&ndash;<v-card color="" class="pa-3 single-settings">&ndash;&gt;-->
                            <!--&lt;!&ndash;<v-card-text class="text-xs-left">&ndash;&gt;-->
                                <!--&lt;!&ndash;<v-layout row wrap>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<v-flex xs12 mb-2>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<label class="text-xs-left pb-2" style="display: block; font-size: 16px">FB Account Pixel ID</label>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<v-combobox&ndash;&gt;-->
                                                <!--&lt;!&ndash;v-model="select"&ndash;&gt;-->
                                                <!--&lt;!&ndash;:items="items"&ndash;&gt;-->
                                                <!--&lt;!&ndash;label="Select FB Pixel"&ndash;&gt;-->
                                                <!--&lt;!&ndash;solo&ndash;&gt;-->
                                                <!--&lt;!&ndash;outline&ndash;&gt;-->
                                                <!--&lt;!&ndash;hide-details&ndash;&gt;-->
                                                <!--&lt;!&ndash;flat&ndash;&gt;-->
                                                <!--&lt;!&ndash;class="app-text-field"&ndash;&gt;-->
                                        <!--&lt;!&ndash;&gt;</v-combobox>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<v-flex sm6 pr-3>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<label class="text-xs-left pb-2" style="display: block; font-size: 16px">Select Pixel Type</label>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<v-select&ndash;&gt;-->
                                                <!--&lt;!&ndash;:items="pixelTypes"&ndash;&gt;-->
                                                <!--&lt;!&ndash;label="Select Type"&ndash;&gt;-->
                                                <!--&lt;!&ndash;class="app-text-field"&ndash;&gt;-->
                                                <!--&lt;!&ndash;solo&ndash;&gt;-->
                                                <!--&lt;!&ndash;outline&ndash;&gt;-->
                                                <!--&lt;!&ndash;hide-details&ndash;&gt;-->
                                                <!--&lt;!&ndash;flat&ndash;&gt;-->
                                        <!--&lt;!&ndash;&gt;</v-select>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<v-flex sm6>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<label class="text-xs-left pb-2" style="display: block; font-size: 16px">Select Collection</label>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<v-combobox&ndash;&gt;-->
                                                <!--&lt;!&ndash;class="app-text-field"&ndash;&gt;-->
                                                <!--&lt;!&ndash;v-model="select2"&ndash;&gt;-->
                                                <!--&lt;!&ndash;:items="items2"&ndash;&gt;-->
                                                <!--&lt;!&ndash;label="I use chips"&ndash;&gt;-->
                                                <!--&lt;!&ndash;multiple&ndash;&gt;-->
                                                <!--&lt;!&ndash;chips&ndash;&gt;-->
                                                <!--&lt;!&ndash;solo&ndash;&gt;-->
                                                <!--&lt;!&ndash;outline&ndash;&gt;-->
                                                <!--&lt;!&ndash;hide-details&ndash;&gt;-->
                                                <!--&lt;!&ndash;flat&ndash;&gt;-->
                                        <!--&lt;!&ndash;&gt;</v-combobox>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<v-flex xs12>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<v-btn dark class="primary tf-app-cta" flat>&ndash;&gt;-->
                                            <!--&lt;!&ndash;Add This Pixel&ndash;&gt;-->
                                        <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<v-flex xs12>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<h2 class="mb-2 mt-3" style="font-weight: normal;">Listed Pixels:</h2>&ndash;&gt;-->
                                        <!--&lt;!&ndash;<v-data-table&ndash;&gt;-->
                                                <!--&lt;!&ndash;:headers="headers"&ndash;&gt;-->
                                                <!--&lt;!&ndash;:items="desserts"&ndash;&gt;-->
                                                <!--&lt;!&ndash;class="data-listings"&ndash;&gt;-->
                                        <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                                            <!--&lt;!&ndash;<template slot="items" slot-scope="props">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<td class="text-xs-left">{{ props.item.name }}</td>&ndash;&gt;-->
                                                <!--&lt;!&ndash;<td class="text-xs-left">{{ props.item.calories }}</td>&ndash;&gt;-->
                                                <!--&lt;!&ndash;<td class="text-xs-left">{{ props.item.fat }}</td>&ndash;&gt;-->
                                                <!--&lt;!&ndash;<td class="text-xs-left">{{ props.item.carbs }}</td>&ndash;&gt;-->
                                                <!--&lt;!&ndash;<td class="justify-center layout px-0">&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<v-btn icon>&ndash;&gt;-->
                                                        <!--&lt;!&ndash;<v-icon small>&ndash;&gt;-->
                                                            <!--&lt;!&ndash;edit&ndash;&gt;-->
                                                        <!--&lt;!&ndash;</v-icon>&ndash;&gt;-->
                                                    <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
                                                    <!--&lt;!&ndash;<v-btn icon>&ndash;&gt;-->
                                                        <!--&lt;!&ndash;<v-icon small>&ndash;&gt;-->
                                                            <!--&lt;!&ndash;delete&ndash;&gt;-->
                                                        <!--&lt;!&ndash;</v-icon>&ndash;&gt;-->
                                                    <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
                                                <!--&lt;!&ndash;</td>&ndash;&gt;-->
                                            <!--&lt;!&ndash;</template>&ndash;&gt;-->
                                            <!--&lt;!&ndash;<template slot="no-data">&ndash;&gt;-->
                                                <!--&lt;!&ndash;<v-btn color="primary" @click="">Reset</v-btn>&ndash;&gt;-->
                                            <!--&lt;!&ndash;</template>&ndash;&gt;-->
                                        <!--&lt;!&ndash;</v-data-table>&ndash;&gt;-->
                                    <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->
                                <!--&lt;!&ndash;</v-layout>&ndash;&gt;-->
                            <!--&lt;!&ndash;</v-card-text>&ndash;&gt;-->
                        <!--&lt;!&ndash;</v-card>&ndash;&gt;-->
                    <!--&lt;!&ndash;</v-tab-item>&ndash;&gt;-->
                    <!--&lt;!&ndash;<v-tab-item id="tab-3">&ndash;&gt;-->
                        <!--&lt;!&ndash;<v-card color="" class="pa-3 single-settings">&ndash;&gt;-->
                            <!--&lt;!&ndash;<v-card-text class="text-xs-left">&ndash;&gt;-->
                                <!--&lt;!&ndash;<v-flex sm4>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<label class="text-xs-left pb-2" style="display: block; font-size: 16px">FB Business Manager</label>&ndash;&gt;-->
                                    <!--&lt;!&ndash;<v-combobox&ndash;&gt;-->
                                            <!--&lt;!&ndash;v-model="select"&ndash;&gt;-->
                                            <!--&lt;!&ndash;:items="items"&ndash;&gt;-->
                                            <!--&lt;!&ndash;label="Select FB Pixel"&ndash;&gt;-->
                                            <!--&lt;!&ndash;solo&ndash;&gt;-->
                                            <!--&lt;!&ndash;outline&ndash;&gt;-->
                                            <!--&lt;!&ndash;hide-details&ndash;&gt;-->
                                            <!--&lt;!&ndash;flat&ndash;&gt;-->
                                            <!--&lt;!&ndash;class="app-text-field"&ndash;&gt;-->
                                    <!--&lt;!&ndash;&gt;</v-combobox>&ndash;&gt;-->
                                <!--&lt;!&ndash;</v-flex>&ndash;&gt;-->
                            <!--&lt;!&ndash;</v-card-text>&ndash;&gt;-->
                        <!--&lt;!&ndash;</v-card>&ndash;&gt;-->
                    <!--&lt;!&ndash;</v-tab-item>&ndash;&gt;-->
                <!--&lt;!&ndash;</v-tabs>&ndash;&gt;-->

            <!--</v-flex>-->
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                switch1: true,
                e6: 1,
                items: [
                    'Shopify Store 1',
                    'Shopify Store 2',
                    'Shopify Store 3',
                    'Shopify Store 4'
                ],
                pixelTypes:[
                    'Master Pixel',
                    'Collection Pixel',
                    'Niche Tag Pixel',
                ],
                select2: ['Vuetify', 'Programming'],
                items2: [
                    'Programming',
                    'Design',
                    'Vue',
                    'Vuetify'
                ],
                headers: [
                    {
                        text: 'Pixel Name',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Pixel Id', value: 'calories' },
                    { text: 'Pixel Type', value: 'fat' },
                    { text: 'Tags/Collection', value: 'carbs' },
                    { text: 'Status', value: 'status' },
                    { text: 'Actions', value: 'name', sortable: false, align: 'center', }
                ],
                desserts: [],
                editedIndex: -1,
                editedItem: {
                    name: '',
                    calories: 0,
                    fat: 0,
                    carbs: 0
                },
                defaultItem: {
                    name: '',
                    calories: 0,
                    fat: 0,
                    carbs: 0
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
                        carbs: 24
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65
                    }
                ]
            }
        }
    }
</script>