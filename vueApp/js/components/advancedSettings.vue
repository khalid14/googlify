<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex md6>
                <v-card flat>
                    <v-card-text class="px-0">
                        <h1 class="text-xs-left">Ninja Installs</h1>
                        <p class="text-xs-left"><strong>(Optional) Advanced marketer? Use these settings to get more out of Trackify!</strong></p>
                        <p class="text-xs-left">Note: We recommend that you keep the default settings here, unless you fully understand the effects of any changes you make. Please watch the Advanced Settings Video, and ask any questions in our chat!</p>
                    </v-card-text>
                </v-card>
                <v-flex xs1 class="adSettings sprint-tooltip setting-tip" pt-5>
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
        </v-layout>
        <v-layout row wrap>
            <v-flex sm6 pr-2 mb-3>
                <label class="text-xs-left mb-2" style="display: block; font-size: 16px">Assign Default Google Product Category:</label>
                <v-combobox
                        :items="ProductsItems"
                        label="Assign Category"
                        solo
                        outline
                        hide-details
                        flat
                        class="app-text-field"
                ></v-combobox>
            </v-flex>
            <v-flex sm6 mb-3>
                <label class="text-xs-left mb-2" style="display: block; font-size: 16px">FB Business Manager:</label>
                <v-combobox
                        :items="items"
                        label="Select Store"
                        solo
                        outline
                        hide-details
                        flat
                        class="app-text-field"
                ></v-combobox>
            </v-flex>
            <v-flex xs12>
                <v-card flat>
                    <v-card-text class="pa-0">
                        <v-layout row wrap>
                            <v-flex xs12 class="text-xs-left ninga-settings">

                                <v-expansion-panel>
                                    <v-expansion-panel-content>
                                        <div slot="header">Ninja Mode Setup</div>
                                        <v-card-text class="pb-0">
                                            <label class="font-weight-black" style="display: block; font-size: 16px">Let’s capture those pixel events really really fast by implementing the Ninja Code!:</label>
                                        </v-card-text>
                                        <v-layout row wrap>
                                            <v-flex sm6>
                                                <v-card-text>
                                                    <strong>Ninja Mode Checkout Script:</strong><br>
                                                    Ninja Mode is auto-enabled in the current theme when you save the settings.
                                                    Please follow these Instructions:<br>
                                                    Instructions: Copy the entire content of the box on the right and paste it at the BEGINNING of the Additional Scripts field in your <a href="https://sacrifice-live.myshopify.com/admin/settings/checkout/#shop_checkout_configuration_content" target="_blank">Checkout Settings (click to open)</a><br>
                                                    Click here to watch the instruction video for <a href="http://help.redretarget.com/trackify/hot-topics-and-updates/what-is-trackify-ninja-mode" target="_blank">Ninja Mode Self-Install and FAQ</a>

                                                </v-card-text>
                                            </v-flex>
                                            <v-flex sm6>
                                                <v-card-text class="pt-0">
                                                    <v-textarea
                                                            solo
                                                            name="input-7-4"
                                                            label="Solo textarea"
                                                            :value="trackifyCode"
                                                            disabled
                                                            no-resize
                                                            flat
                                                            outline
                                                            rows="15"
                                                    ></v-textarea>
                                                </v-card-text>
                                            </v-flex>
                                        </v-layout>
                                    </v-expansion-panel-content>
                                    <v-expansion-panel-content>
                                        <div slot="header">Add Pixel Events to Checkout Pages</div>
                                        <v-card-text class="pb-0">
                                            <label class="font-weight-black" style="display: block; font-size: 16px">Let’s capture those pixel events really really fast by implementing the Ninja Code!:</label>
                                        </v-card-text>
                                        <v-layout row wrap>
                                            <v-flex sm6>
                                                <v-card-text>
                                                    <strong>Ninja Mode Checkout Script:</strong><br>
                                                    Ninja Mode is auto-enabled in the current theme when you save the settings.
                                                    Please follow these Instructions:<br>
                                                    Instructions: Copy the entire content of the box on the right and paste it at the BEGINNING of the Additional Scripts field in your <a href="https://sacrifice-live.myshopify.com/admin/settings/checkout/#shop_checkout_configuration_content" target="_blank">Checkout Settings (click to open)</a><br>
                                                    Click here to watch the instruction video for <a href="http://help.redretarget.com/trackify/hot-topics-and-updates/what-is-trackify-ninja-mode" target="_blank">Ninja Mode Self-Install and FAQ</a>

                                                </v-card-text>
                                            </v-flex>
                                            <v-flex sm6>
                                                <v-card-text class="pt-0">
                                                    <v-textarea
                                                            solo
                                                            name="input-7-4"
                                                            label="Solo textarea"
                                                            :value="trackifyCode"
                                                            disabled
                                                            no-resize
                                                            flat
                                                            outline
                                                            rows="15"
                                                    ></v-textarea>
                                                </v-card-text>
                                            </v-flex>
                                        </v-layout>
                                    </v-expansion-panel-content>
                                    <v-expansion-panel-content>
                                        <div slot="header"> Remove Your Pixel ID from Shopify Settings!</div>
                                        <v-card-text class="pb-0">
                                            <label class="font-weight-black" style="display: block; font-size: 16px">Let’s capture those pixel events really really fast by implementing the Ninja Code!:</label>
                                        </v-card-text>
                                        <v-layout row wrap>
                                            <v-flex sm6>
                                                <v-card-text>
                                                    <strong>Ninja Mode Checkout Script:</strong><br>
                                                    Ninja Mode is auto-enabled in the current theme when you save the settings.
                                                    Please follow these Instructions:<br>
                                                    Instructions: Copy the entire content of the box on the right and paste it at the BEGINNING of the Additional Scripts field in your <a href="https://sacrifice-live.myshopify.com/admin/settings/checkout/#shop_checkout_configuration_content" target="_blank">Checkout Settings (click to open)</a><br>
                                                    Click here to watch the instruction video for <a href="http://help.redretarget.com/trackify/hot-topics-and-updates/what-is-trackify-ninja-mode" target="_blank">Ninja Mode Self-Install and FAQ</a>

                                                </v-card-text>
                                            </v-flex>
                                            <v-flex sm6>
                                                <v-card-text class="pt-0">
                                                    <v-textarea
                                                            solo
                                                            name="input-7-4"
                                                            label="Solo textarea"
                                                            :value="trackifyCode"
                                                            disabled
                                                            no-resize
                                                            flat
                                                            outline
                                                            rows="15"
                                                    ></v-textarea>
                                                </v-card-text>
                                            </v-flex>
                                        </v-layout>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

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
                    'Lookalike (US, 2% to 5%) - NT - Website Purchases - 180 Days',
                    'Lookalike (CA, 8% to 3%) - NT - Purchases - 100 Days',
                    'Lookalike (US, 2% to 5%) - NT - Website Purchases - 180 Days',
                ],
                items3: ['Afghanistan', 'Albania','Pakistan','Canada','USA'],
                items4: ['Asia-Pacific Economic Cooperation', 'European Economic Area','Gulf Cooperation Council'],
                items5: ['1%', '2%','3%','4%', '5%','6%','7%', '8%','9%','10%','15%','20%'],
                ProductsItems: ['Electronics > Communications > Telephony','Electronics1 > Communications1 > Telephony1','Electronics2 > Communications2 > Telephony2'],
                trackifyCode: '<!-- Trackify Pixel Code -->\n' +
                    '          Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....Trackify Code Goes here....              \n'+
                    '<!-- END Trackify Pixel Code -->'
            }
        },
        created () {

        },
        methods: {

        }
    }
</script>