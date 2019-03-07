<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap class="inner-config-heading flex sm6 pb-0">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            business_center
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Business Information
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Business Name
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="InStyleMobile"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Website
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="www.instylemobile.com"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Business Address
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="Enter Address Here"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Customer Service Contact
                    </v-subheader>
                    <v-text-field
                            type="text"
                            placeholder="Email Address"
                            outline
                            class="fsb-textfield"
                    ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="inner-config-heading flex sm6 pb-0 mt-4">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            web
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Website
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex md3>
                            <v-btn
                                    flat
                                    class="appCta success"
                                    dark
                            >
                                Domain Verify & Claim Automatically
                            </v-btn>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="inner-config-heading flex sm6 pb-0 mt-5">
                <v-flex xs1>
                    <v-card-text class="icon-header pa-0">
                        <i class="material-icons primaryActive--text">
                            filter_vintage
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md8 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0">
                        Branding
                    </v-card-text>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Square Logo
                    </v-subheader>
                    <v-btn
                            flat
                            class="appCta grey left lighten-3 ma-0"
                            light
                            style="font-size: 16px;"
                    >
                        <v-icon class="mr-3">cloud_upload</v-icon>
                        Upload Square Logo
                    </v-btn>
                </v-flex>
                <v-flex md3>
                    <v-subheader class="idea-subheadings pa-0">
                        Rectangular Logo
                    </v-subheader>
                    <v-btn
                            flat
                            class="appCta grey left lighten-3 ma-0"
                            light
                            style="font-size: 16px;"
                    >
                        <v-icon class="mr-3">cloud_upload</v-icon>
                        Upload Rectangular Logo
                    </v-btn>
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