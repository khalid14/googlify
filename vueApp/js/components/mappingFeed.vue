<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap class="inner-config-heading flex xs4 pb-0">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            local_dining
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Feeds
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex md4>
                    <v-subheader class="idea-subheadings pa-0">
                        Country of Sale
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
                        Currency
                    </v-subheader>
                    <v-select
                            :items="currencyListing"
                            label="Select Currency"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md5 class="conditionSelector">
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Id
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
                                Google Product Id
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Title
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
                                Google Product Title
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Description
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
                                Google Product Description
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Link
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
                                Google Product Link
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Image Link
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
                                Google Product Image Link
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Price
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
                                Google Product Price
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Availability
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
                                Google Product Availability
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex md5 class="offset-md1 leftLine conditionSelector">
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Gender
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
                                Google Product Gender
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Brand
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
                                Google Product Brand
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Age Group
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
                                Google Product Age Group
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Color
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
                                Google Product Color
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Size
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
                                Google Product Size
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex sm4 d-flex align-center>
                            <v-subheader class="idea-subheadings pa-0 text-xs-left">
                                Shopify Product Custom Label
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
                                Google Product Custom Label
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="inner-config-heading flex xs4 pb-0 mt-5">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            navigation
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Mapping Default Category
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex md4>
                    <v-subheader class="idea-subheadings pa-0">
                        Default Google Category
                    </v-subheader>
                    <v-select
                            :items="listingCateogories"
                            label="Select Category"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="inner-config-heading flex xs5 pb-0 mt-5">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            place
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Mapping Shopify Product Type
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex md4>
                    <v-subheader class="idea-subheadings pa-0">
                        Shopify Product Type 1
                    </v-subheader>
                    <v-select
                            :items="listingCateogories"
                            label="Select Category"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md4>
                    <v-subheader class="idea-subheadings pa-0">
                        Shopify Product Type 2
                    </v-subheader>
                    <v-select
                            :items="listingCateogories"
                            label="Select Category"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md4>
                    <v-subheader class="idea-subheadings pa-0">
                        Shopify Product Type 3
                    </v-subheader>
                    <v-select
                            :items="listingCateogories"
                            label="Select Category"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md4>
                    <v-subheader class="idea-subheadings pa-0">
                        Shopify Product Type 4
                    </v-subheader>
                    <v-select
                            :items="listingCateogories"
                            label="Select Category"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md4>
                    <v-subheader class="idea-subheadings pa-0">
                        Shopify Product Type 5
                    </v-subheader>
                    <v-select
                            :items="listingCateogories"
                            label="Select Category"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md4>
                    <v-subheader class="idea-subheadings pa-0">
                        Shopify Product Type 6
                    </v-subheader>
                    <v-select
                            :items="listingCateogories"
                            label="Select Category"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
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
                currencyListing:['Dollars','Canadian Dollars','Rupees','Paisa'],
                conditionListing:['Contains','Is Greater than','Is Equals to','Is Less than'],
                listingCateogories:['Category 1','Category 2','Category 3','Category 4','Category 5']
            }
        }
    }
</script>

