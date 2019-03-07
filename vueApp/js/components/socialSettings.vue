<template>
    <v-container grid-list-md text-xs-center class="pa-0 pb-5">
        <v-layout row wrap>
            <v-flex xs12>
                <h3 class="text-xs-left">Social Configuration</h3>
            </v-flex>
            <v-flex sm12>
                <v-card flat>
                    <v-layout row wrap class="inner-config-heading">
                        <v-flex xs1>
                            <v-card-text class="icon-header">
                                <i class="material-icons orange--text text--darken-2">
                                    share
                                </i>
                            </v-card-text>
                        </v-flex>
                        <v-flex xs11>
                            <v-card-text class="text-xs-left head-portion">
                                Connect Your Social Networks
                            </v-card-text>
                            <v-card-text class="pt-2 pl-2 pb-0">
                                <v-layout row wrap class="connect-store">
                                    <v-flex xs6 sm2 v-for="(social,index) in listedSocial" :key="index">
                                        <v-btn flat>
                                            <img :src="social.logo">
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex sm12>
                <v-card flat>
                    <v-layout row wrap class="inner-config-heading">
                        <v-flex xs1>
                            <v-card-text class="icon-header">
                                <i class="material-icons orange--text text--darken-2">
                                    store
                                </i>
                            </v-card-text>
                        </v-flex>
                        <v-flex xs11>
                            <v-card-text class="text-xs-left head-portion">
                                Third Party Integrations
                            </v-card-text>
                            <v-card-text class="pt-2 pl-2 pb-0">
                                <v-layout row wrap class="connect-store">
                                    <v-flex xs6 sm2 v-for="(stores,index) in listedStores" :key="index">
                                        <v-btn flat :href="stores.articleLink" target="_blank">
                                            <img :src="stores.logo">
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                            <!--<v-card-text class="text-xs-left">-->
                                <!--<v-btn flat dark color="orange darken-3" class="back-cta">-->
                                    <!--<v-icon dark>add</v-icon>-->
                                    <!--Add Another Shop!-->
                                <!--</v-btn>-->
                            <!--</v-card-text>-->
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex sm12>
                <v-card flat>
                    <v-layout row wrap class="inner-config-heading">
                        <v-flex xs1>
                            <v-card-text class="icon-header">
                                <i class="material-icons orange--text text--darken-2">
                                    insert_chart
                                </i>
                            </v-card-text>
                        </v-flex>
                        <v-flex xs11>
                            <v-card-text class="text-xs-left head-portion">
                                Trackify Certified Themes
                            </v-card-text>
                            <v-card-text class="pt-2 pl-2 pb-0">
                                <v-layout row wrap class="connect-store">
                                    <v-flex xs6 sm2 v-for="(themes,index) in listedThemes" :key="index">
                                        <v-btn flat :href="themes.articleLink" target="_blank">
                                            <img :src="themes.logo">
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs12 class="next-step-cta">
                <v-btn depressed color="orange darken-3" @click="snackbar = true">Save Settings</v-btn>
                <v-snackbar
                        v-model="snackbar"
                        bottom="true"
                >
                    Settings has been saved!
                    <v-btn
                            class="pt-0 pb-0"
                            color="primary--text"
                            flat
                            @click="snackbar = false"
                    >
                        Close
                    </v-btn>
                </v-snackbar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                snackbar : false,
                activator: null,
                attach: null,
                colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
                editing: null,
                index: -1,
                items: [
                    {header: 'Select an option or create one'},
                    {
                        text: 'Hashtag1',
                        color: 'blue'
                    },
                    {
                        text: 'Hashtag2',
                        color: 'red'
                    }
                ],
                nonce: 1,
                menu: false,
                model: [
                    {
                        text: 'Hashtag3',
                        color: 'blue'
                    }
                ],
                x: 0,
                search: null,
                y: 0,
                collections: ['Collection', 'Tag', 'Type'],
                condition: ['Contains', 'Equals', 'Does not contain'],
                listedStores: [
                    {
                        logo: '../public/images/carthook.png',
                        articleLink: 'http://help.redretarget.com/trackify/hot-topics-and-updates/using-trackify-with-ocu-or-carthook'
                    },
                    {
                        logo: '../public/images/click-funnel.png',
                        articleLink: 'http://help.redretarget.com/trackify/advanced-features/the-trackify-clickfunnel-script'
                    },
                    {
                        logo: '../public/images/funnel-builder.png',
                        articleLink: 'http://help.redretarget.com/trackify/advanced-features/the-trackify-clickfunnel-script'
                    },
                    {
                        logo: '../public/images/zipfiy.png',
                        articleLink: 'http://help.redretarget.com/trackify/advanced-features/the-trackify-clickfunnel-script'
                    }
                ],
                listedThemes: [
                    {
                        logo: '../public/images/brooklyn.png',
                        articleLink: 'http://help.redretarget.com/trackify/installation-and-faq/turbo-theme-pixel-event-issues'
                    },
                    {
                        logo: '../public/images/parallax.png',
                        articleLink: 'http://help.redretarget.com/trackify/installation-and-faq/turbo-theme-pixel-event-issues'
                    },
                    {
                        logo: '../public/images/shoptimized.png',
                        articleLink: 'http://help.redretarget.com/trackify/installation-and-faq/turbo-theme-pixel-event-issues'
                    },
                    {
                        logo: '../public/images/turbo-theme.png',
                        articleLink: 'http://help.redretarget.com/trackify/installation-and-faq/turbo-theme-pixel-event-issues'
                    }
                ],
                listedSocial: [
                    {
                        logo: '../public/images/fb-logo.png'
                    },
                    {
                        logo: '../public/images/twitter-logo.png'
                    },
                    {
                        logo: '../public/images/instagram.png'
                    },
                    {
                        logo: '../public/images/pinterest-logo.png'
                    }
                ]
            }
        }
    }
</script>