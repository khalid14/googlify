<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap class="inner-config-heading">
                <v-flex xs1>
                    <v-card-text class="icon-header pt-0">
                        <i class="material-icons primaryActive--text">
                            apps
                        </i>
                    </v-card-text>
                </v-flex>
                <v-flex md10 xs11>
                    <v-card-text class="text-xs-left head-portion headline pt-0 px-0">
                        Application Setup
                    </v-card-text>
                    <v-layout row wrap class="mt-4">
                        <v-flex>
                            <v-btn dark color="topColor" class="font-weight-light left px-4 py-2 text-capitalize" style="font-size: 18px;height: auto;">Authorizing</v-btn>
                        </v-flex>
                        <v-flex>
                            <v-btn dark color="topColor" class="font-weight-light left px-4 py-2 text-capitalize" style="font-size: 18px;height: auto;">Linking</v-btn>
                        </v-flex>
                        <v-flex>
                            <v-btn dark color="topColor" class="font-weight-light left px-4 py-2 text-capitalize" style="font-size: 18px;height: auto;">Feed Setup</v-btn>
                        </v-flex>
                        <v-flex>
                            <v-btn dark color="topColor" class="font-weight-light left px-4 py-2 text-capitalize" style="font-size: 18px;height: auto;">Google Merchant Setup</v-btn>
                        </v-flex>
                        <v-flex>
                            <v-btn dark color="topColor" class="font-weight-light left px-4 py-2 text-capitalize" style="font-size: 18px;height: auto;">Google Adwords Setup</v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>


<script>
    export default {
        data: () => ({

        }),

        computed: {

        },

        watch: {

        },

        created () {

        },

        methods: {


        }
    }
</script>