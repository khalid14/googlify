<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            settings_input_component
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Setup
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        File Name
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
                        Fetch Frequency
                    </v-subheader>
                    <v-select
                            :items="feedSchedule"
                            label="Select Frequency"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Time Zone
                    </v-subheader>
                    <v-select
                            :items="zoneListing"
                            label="Select Currency"
                            outline
                            class="fsb-textfield"
                            solo
                            flat
                    ></v-select>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Feed URL
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="Enter URL"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md6>
                    <v-subheader class="idea-subheadings pa-0">
                        Feed Diagnostics
                    </v-subheader>
                    <v-textarea
                            outline
                            name="input-7-4"
                            placeholder="Diagnostics Details"
                            value=""
                            class="fsb-textfield"
                            no-resize
                    ></v-textarea>
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
                feedSchedule:['Hourly','Daily','Weekly'],
                zoneListing:['Time Zone 1','Time Zone 2','Time Zone 3','Time Zone 4','Time Zone 5']
            }
        }
    }
</script>