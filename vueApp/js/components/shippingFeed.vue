<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap class="inner-config-heading flex xs4 pb-0">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            local_shipping
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Shipping
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mt-3">
                <v-flex md5 class="conditionSelector">
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Shipping Country
                            </v-subheader>
                        </v-flex>
                        <v-flex xs12 sm4 pl-0>
                            <v-select
                                    :items="conditionListing"
                                    label="Condition"
                                    outline
                                    class="fsb-textfield d-inline-block"
                                    solo
                                    flat
                                    hide-details
                            ></v-select>
                        </v-flex>
                        <v-flex sm4 d-flex align-center pl-3>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Google Shipping Country
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex md5 class="offset-md1 leftLine conditionSelector">
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Shipping Price
                            </v-subheader>
                        </v-flex>
                        <v-flex xs12 sm4 pl-0>
                            <v-select
                                    :items="conditionListing"
                                    label="Condition"
                                    outline
                                    class="fsb-textfield d-inline-block"
                                    solo
                                    flat
                                    hide-details
                            ></v-select>
                        </v-flex>
                        <v-flex sm4 d-flex align-center pl-3>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Google Shipping Price
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="inner-config-heading flex xs4 pb-0 mt-5">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            attach_money
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Tax
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap v-for="(details,index) in taxDetails" :key="index">
                <v-flex md4>
                    <v-subheader class="idea-subheadings pa-0">
                        Tax Country
                    </v-subheader>
                    <v-select
                            :items="countryListing"
                            label="Select Country"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md4 class="mlDesktop">
                    <v-subheader class="idea-subheadings pa-0">
                        Rate
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="Enter Rate"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md3 mt-4 pt-4>
                    <v-btn @click="addTaxDetails" color="topColor" dark icon class="ma-0"><v-icon>add</v-icon></v-btn>
                    <v-btn v-if="taxDetails[1]" @click="removeTaxDetails(index)" color="grey lighten-2" dark icon class="ma-0"><v-icon>remove</v-icon></v-btn>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-btn
                            flat
                            class="appCta ctaColor right mt-5"
                            dark
                    >
                        Save & Continue
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
    export default {
        data (){
            return{
                countryListing:['Pakistan','China','United States','Canada','South Africa'],
                conditionListing:['Contains','Is Greater than','Is Equals to','Is Less than'],
                taxDetails:[
                    {
                        taxCountry:'',
                        taxRate:''
                    }
                ]
            }
        },
        methods : {
            addTaxDetails : function () {
                this.taxDetails.push({
                    taxCountry:'',
                    taxRate:''
                })
            },
            removeTaxDetails : function (index) {
                this.taxDetails.splice(index,1);
            }
        }
    }
</script>