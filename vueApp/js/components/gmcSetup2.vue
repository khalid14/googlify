<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
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
            <v-layout row wrap>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Standard Shipping
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="Enter Shipping"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Country of Service
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
                <v-flex md3>
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
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Delivery Time
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="Number of Days"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
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
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Add New Feed
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="Feed Name"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Country of Sale
                    </v-subheader>
                    <v-select
                            :items="countryListingSale"
                            label="Select Country"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Language
                    </v-subheader>
                    <v-select
                            :items="languageListing"
                            label="Select Language"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Schedule Fetching
                    </v-subheader>
                    <v-select
                            :items="feedSchedule"
                            label="Select Time"
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
                countryListingSale:['Pakistan','China','United States','Canada','South Africa'],
                currencyListing:['Dollars','Canadian Dollars','Rupees','Paisa'],
                languageListing:['English','French','Spanish','Urdu','Punjabi','Pashtu'],
                feedSchedule:['Hourly','Daily','Weekly'],
            }
        }
    }
</script>