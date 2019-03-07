<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            merge_type
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Campaigns Type
                    </v-card-text>
                </v-flex>
                <v-flex xs12>
                    <v-radio-group v-model="row" row>
                        <v-radio color="topColor" label="Search Campaigns" value="radio-1"></v-radio>
                        <v-radio color="topColor" label="Shopping Campaigns" value="radio-2"></v-radio>
                    </v-radio-group>
                </v-flex>
            </v-layout>
            <div style="width:100%" v-if="row=='radio-1'">
                <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
                    <v-flex xs1>
                        <v-card-text class="icon-header pa-0">
                            <i class="material-icons primaryActive--text">
                                search
                            </i>
                        </v-card-text>
                    </v-flex>
                    <v-flex md8 xs11>
                        <v-card-text class="text-xs-left head-portion headline pt-0">
                            Search Campaigns
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            New Campaign
                        </v-subheader>
                        <v-select
                                :items="NewCampaignsSearch"
                                label="Campaign Aim"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Sale
                        </v-subheader>
                        <v-select
                                :items="saleCampaignSearch"
                                label="Select Frequency"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Campaign Name
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Name"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Location
                        </v-subheader>
                        <v-select
                                :items="locationListing"
                                label="Select Location"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Network Type
                        </v-subheader>
                        <v-radio-group v-model="row1" row>
                            <v-radio color="topColor" label="Search Network" value="radio-1"></v-radio>
                            <v-radio color="topColor" label="Display Network" value="radio-2"></v-radio>
                        </v-radio-group>
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
                            Budget
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Amount"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Bid Type
                        </v-subheader>
                        <v-select
                                :items="bidListing"
                                label="Select Bid"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Start Date
                        </v-subheader>
                        <v-dialog
                                ref="dialog"
                                v-model="modal"
                                :return-value.sync="date"
                                persistent
                                lazy
                                full-width
                                width="290px"
                        >
                            <v-text-field
                                    slot="activator"
                                    v-model="date"
                                    label="Select Start Date"
                                    prepend-inner-icon="event"
                                    readonly
                                    single-line
                                    outline
                                    class="fsb-textfield"
                                    style="width:100%"
                                    hide-details
                            ></v-text-field>
                            <v-date-picker v-model="date" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="modal = false">Ok</v-btn>
                                <!--<v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>-->
                            </v-date-picker>
                        </v-dialog>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            End Date
                        </v-subheader>
                        <v-dialog
                                ref="dialog1"
                                v-model="modal1"
                                :return-value.sync="date1"
                                persistent
                                lazy
                                full-width
                                width="290px"
                        >
                            <v-text-field
                                    slot="activator"
                                    v-model="date1"
                                    label="Select End Date"
                                    prepend-inner-icon="event"
                                    readonly
                                    single-line
                                    outline
                                    class="fsb-textfield"
                                    style="width:100%"
                                    hide-details
                            ></v-text-field>
                            <v-date-picker v-model="date1" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="modal1 = false">Ok</v-btn>
                                <!--<v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>-->
                            </v-date-picker>
                        </v-dialog>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Site Link Extention
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Link"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Call Out Extention
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Link"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
                    <v-flex xs1>
                        <v-card-text class="icon-header pa-0">
                            <i class="material-icons primaryActive--text">
                                group
                            </i>
                        </v-card-text>
                    </v-flex>
                    <v-flex md8 xs11>
                        <v-card-text class="text-xs-left head-portion headline pt-0">
                            Ad Group
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout row wrap v-for="(adGroup,index) in adGroupDetails" :key="index">
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Ad Group Type
                        </v-subheader>
                        <v-select
                                :items="adGroupTypeListing"
                                label="Select Type"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Default Bid
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Ammount"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Keywords
                        </v-subheader>
                        <v-combobox
                                label="Enter Keywords"
                                chips
                                clearable
                                solo
                                multiple
                                v-model="ContentKeywords"
                                hide-details
                                outline
                                flat
                                class="fsb-textfield keywordsChips"
                        >
                            <template slot="selection" slot-scope="data">
                                <v-chip
                                        :selected="data.selected"
                                        close
                                        @input="remove(data.item)"
                                >
                                    <strong>{{ data.item }}</strong>&nbsp;
                                </v-chip>
                            </template>
                        </v-combobox>
                    </v-flex>
                    <v-flex md3 mt-4 pt-4>
                        <v-btn @click="addGroupDetails" color="topColor" dark icon class="ma-0"><v-icon>add</v-icon></v-btn>
                        <v-btn v-if="adGroupDetails[1]" @click="removeGroupDetails(index)" color="grey lighten-2" dark icon class="ma-0"><v-icon>remove</v-icon></v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
                    <v-flex xs1>
                        <v-card-text class="icon-header pa-0">
                            <i class="material-icons primaryActive--text">
                                add_to_queue
                            </i>
                        </v-card-text>
                    </v-flex>
                    <v-flex md8 xs11>
                        <v-card-text class="text-xs-left head-portion headline pt-0">
                            Ads
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout row wrap v-for="(ads,index) in adsDetails" :key="index">
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Final Store URL
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter URL"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Headline 1
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Here"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Headline 2
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Here"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Headline 3
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Here"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Display Path
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Link"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Description 1
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Link"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Description 2
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Link"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3 mt-4 pt-4>
                        <v-btn @click="addAdsDetails" color="topColor" dark icon class="ma-0"><v-icon>add</v-icon></v-btn>
                        <v-btn v-if="adsDetails[1]" @click="removeAdsDetails(index)" color="grey lighten-2" dark icon class="ma-0"><v-icon>remove</v-icon></v-btn>
                    </v-flex>
                </v-layout>
            </div>
            <div style="width:100%" v-else>
                <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
                    <v-flex xs1>
                        <v-card-text class="icon-header pa-0">
                            <i class="material-icons primaryActive--text">
                                shopping_basket
                            </i>
                        </v-card-text>
                    </v-flex>
                    <v-flex md8 xs11>
                        <v-card-text class="text-xs-left head-portion headline pt-0">
                            Shopping Campaigns
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            New Campaign
                        </v-subheader>
                        <v-select
                                :items="NewCampaignsShoping"
                                label="Campaign Aim"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Default Feed
                        </v-subheader>
                        <v-select
                                :items="feedsShopping"
                                label="Select Feed"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Campaign Sub-Type
                        </v-subheader>
                        <v-select
                                :items="campaignSubType"
                                label="Select Sub-Type"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Location
                        </v-subheader>
                        <v-select
                                :items="shoppingLocation"
                                label="Select Location"
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
                                :items="languageShopping"
                                label="Select Language"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Campaign Name
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Name"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Bid Types
                        </v-subheader>
                        <v-select
                                :items="bidListingShopping"
                                label="Select Bid"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Budget
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Ammount"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Campaign Priority
                        </v-subheader>
                        <v-select
                                :items="campaignPriorityShopping"
                                label="Select Priority"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                </v-layout>
                <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
                    <v-flex xs1>
                        <v-card-text class="icon-header pa-0">
                            <i class="material-icons primaryActive--text">
                                calendar_today
                            </i>
                        </v-card-text>
                    </v-flex>
                    <v-flex md8 xs11>
                        <v-card-text class="text-xs-left head-portion headline pt-0">
                            Targeting & Scheduling
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout row wrap v-for="(target,index) in targetingScheduling" :key="index">
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Devices
                        </v-subheader>
                        <v-select
                                :items="devicesShopping"
                                label="Select Device"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Locations
                        </v-subheader>
                        <v-select
                                :items="locationShopping"
                                label="Select Location"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md2>
                        <v-subheader class="idea-subheadings pa-0">
                            Start Date
                        </v-subheader>
                        <v-dialog
                                ref="dialogTarget1"
                                v-model="modalTarget1"
                                :return-value.sync="dateTarget1"
                                persistent
                                lazy
                                full-width
                                width="290px"
                        >
                            <v-text-field
                                    slot="activator"
                                    v-model="dateTarget1"
                                    label="Select Start Date"
                                    prepend-inner-icon="event"
                                    readonly
                                    single-line
                                    outline
                                    class="fsb-textfield"
                                    style="width:100%"
                                    hide-details
                            ></v-text-field>
                            <v-date-picker v-model="dateTarget1" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="modalTarget1 = false">Ok</v-btn>
                                <!--<v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>-->
                            </v-date-picker>
                        </v-dialog>
                    </v-flex>
                    <v-flex md2>
                        <v-subheader class="idea-subheadings pa-0">
                            End Date
                        </v-subheader>
                        <v-dialog
                                ref="dialogTarget2"
                                v-model="modalTarget2"
                                :return-value.sync="dateTarget2"
                                persistent
                                lazy
                                full-width
                                width="290px"
                        >
                            <v-text-field
                                    slot="activator"
                                    v-model="dateTarget2"
                                    label="Select End Date"
                                    prepend-inner-icon="event"
                                    readonly
                                    single-line
                                    outline
                                    class="fsb-textfield"
                                    style="width:100%"
                                    hide-details
                            ></v-text-field>
                            <v-date-picker v-model="dateTarget2" scrollable>
                                <v-spacer></v-spacer>
                                <v-btn flat color="primary" @click="modalTarget2 = false">Ok</v-btn>
                                <!--<v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>-->
                            </v-date-picker>
                        </v-dialog>
                    </v-flex>
                    <v-flex md2 mt-4 pt-4>
                        <v-btn @click="addTargetingScheduling" color="topColor" dark icon class="ma-0"><v-icon>add</v-icon></v-btn>
                        <v-btn v-if="targetingScheduling[1]" @click="removeTargetingScheduling(index)" color="grey lighten-2" dark icon class="ma-0"><v-icon>remove</v-icon></v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
                    <v-flex xs1>
                        <v-card-text class="icon-header pa-0">
                            <i class="material-icons primaryActive--text">
                                group_work
                            </i>
                        </v-card-text>
                    </v-flex>
                    <v-flex md8 xs11>
                        <v-card-text class="text-xs-left head-portion headline pt-0">
                            Ad Group
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-layout row wrap v-for="(adShopping,index) in adGroupShopping" :key="index">
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Ad Group Type
                        </v-subheader>
                        <v-select
                                :items="groupTypeShopping"
                                label="Select Type"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Ad Group Name
                        </v-subheader>
                        <v-text-field
                                type="text"
                                placeholder="Enter Name"
                                outline
                                class="fsb-textfield"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md3>
                        <v-subheader class="idea-subheadings pa-0">
                            Bid Type
                        </v-subheader>
                        <v-select
                                :items="bidTypeShopping"
                                label="Select Type"
                                outline
                                class="fsb-textfield"
                                solo
                                flat
                        ></v-select>
                    </v-flex>
                    <v-flex md3 mt-4 pt-4>
                        <v-btn @click="addAdGroupShopping" color="topColor" dark icon class="ma-0"><v-icon>add</v-icon></v-btn>
                        <v-btn v-if="adGroupShopping[1]" @click="removeAdGroupShopping(index)" color="grey lighten-2" dark icon class="ma-0"><v-icon>remove</v-icon></v-btn>
                    </v-flex>
                </v-layout>
            </div>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-btn
                            flat
                            class="appCta ctaColor right mt-5"
                            dark
                    >
                        Save & Close
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                date: new Date().toISOString().substr(0, 10),
                date1: new Date().toISOString().substr(0, 10),
                modal: false,
                modal1: false,
                dateTarget1: new Date().toISOString().substr(0, 10),
                dateTarget2: new Date().toISOString().substr(0, 10),
                modalTarget1: false,
                modalTarget2: false,
                row: 'radio-1',
                row1:null,
                NewCampaignsSearch:['Sale','Leads','Website Traffic','Product & Brand Considration','Brand Awareness & Reach','App Promotion','Create Campaign w/o Goal Guidence'],
                NewCampaignsShoping:['Sale','Leads','Website Traffic','Product & Brand Considration','Brand Awareness & Reach','App Promotion','Create Campaign w/o Goal Guidence'],
                saleCampaignSearch:['Search','Display','Shopping'],
                locationListing:['Europe','Middle East','Australia','Africa','Asia'],
                shoppingLocation:['Europe','Middle East','Australia','Africa','Asia'],
                locationShopping:['Europe','Middle East','Australia','Africa','Asia'],
                languageListing:['English','French','Spanish','Urdu','Punjabi','Pashtu'],
                languageShopping:['English','French','Spanish','Urdu','Punjabi','Pashtu'],
                bidListing:['Conversion','Max Conversion','Target CPC','ROAS','Max Click','Max Conv','Manual CPC','Enhanced CPC'],
                bidTypeShopping:['Conversion','Max Conversion','Target CPC','ROAS','Max Click','Max Conv','Manual CPC','Enhanced CPC'],
                bidListingShopping:['Conversion','Max Conversion','Target CPC','ROAS','Max Click','Max Conv','Manual CPC','Enhanced CPC'],
                campaignPriorityShopping:['Low','Medium','High'],
                feedsShopping:['Feed 1','Feed 2','Feed 3','Feed 4','Feed 5'],
                campaignSubType:['Smart Shopping Campaign','Standard Shopping Campaign'],
                devicesShopping:['Desktop','Mobile','Both'],
                groupTypeShopping:['Product Shopping','Showcase Shopping'],
                targetingScheduling:[
                    {
                        device:'',
                        location:'',
                        startDate:'',
                        endDate:''
                    }
                ],
                adGroupDetails:[
                    {
                        adGroupType:'',
                        defaultBid:'',
                        keywords:''
                    }
                ],
                adsDetails:[
                    {
                        finalStoreUrl:'',
                        headline1:'',
                        headline2:'',
                        headline3:'',
                        displayPath:'',
                        description1:'',
                        description2:''
                    }
                ],
                adGroupShopping:[
                    {
                        adGroupTypeShopping:'',
                        adGroupNameShopping:'',
                        bidTypeShopping:''
                    }
                ],
                adGroupTypeListing:['Standard','Dynamic'],
                ContentKeywords:[],
            }
        },
        methods: {
            addAdGroupShopping:function(){
              this.adGroupShopping.push({
                  adGroupTypeShopping:'',
                  adGroupNameShopping:'',
                  bidTypeShopping:''
              })
            },
            addGroupDetails:function(){
                this.adGroupDetails.push({
                    adGroupType:'',
                    defaultBid:'',
                    keywords:''
                })
            },
            addTargetingScheduling:function(){
                this.targetingScheduling.push({
                    device:'',
                    location:'',
                    startDate:'',
                    endDate:''
                })
            },
            addAdsDetails:function(){
                this.adsDetails.push({
                    finalStoreUrl:'',
                    headline1:'',
                    headline2:'',
                    headline3:'',
                    displayPath:'',
                    description1:'',
                    description2:''
                })
            },
            removeGroupDetails:function(index){
                this.adGroupDetails.splice(index,1);
            },
            removeTargetingScheduling:function(index){
                this.targetingScheduling.splice(index,1);
            },
            removeAdsDetails:function(index){
                this.adsDetails.splice(index,1);
            },
            removeAdGroupShopping:function(index){
                this.adGroupShopping.splice(index,1);
            },
            remove (item) {
                this.ContentKeywords.splice(this.ContentKeywords.indexOf(item), 1);
                this.ContentKeywords = [...this.ContentKeywords]
            },
        }
    }
</script>