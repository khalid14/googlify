<template>
    <div>
        <v-container grid-list-md text-xs-center class="pl-0 pr-5">
            <v-layout row wrap class="">
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Shop Name
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="Shop Name goes here"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Shopify Store
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="shopName.myshopify.com"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Shop URL
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="www.shopurl.com"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Scheduling of Feed
                    </v-subheader>
                    <v-select
                            :items="feedSchedule"
                            label="Select Schedule"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Channel
                    </v-subheader>
                    <v-select
                            :items="listedChannel"
                            label="Select Channel"
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
        data(){
            return{
                feedSchedule:['Hourly','Daily','Weekly'],
                listedChannel:['Amazon','Ebay','Google Shopping']
            }
        }
    }
</script>