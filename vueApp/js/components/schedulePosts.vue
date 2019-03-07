<template>
    <v-container grid-list-md text-xs-center class="pa-0 pb-4">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card flat>
                    <v-card-text class="pl-0 pb-3 step-heading">
                        <h2 class="darken-3 primary--text">Scheduled Posts</h2>
                        <p>Choose which networks you want to promote your products on, how often and at what time!</p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-layout row wrap>
                    <v-flex xs6>
                        <v-card-text class="text-xs-left" style="font-size: 19px;">Your Scheduled Posts:</v-card-text>
                    </v-flex>
                    <v-flex xs3>
                        <v-layout row wrap>
                            <v-flex xs6>
                                <v-card-text class="text-xs-right grey-text" style="font-size: 17px;">Show posts for</v-card-text>
                            </v-flex>
                            <v-flex xs6>
                                <v-select
                                        :items="daysListed"
                                        label="Select Time"
                                        solo
                                ></v-select>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs3>
                        <v-layout row wrap>
                            <v-flex xs6>
                                <v-card-text class="text-xs-right grey-text" style="font-size: 17px;">Filter by</v-card-text>
                            </v-flex>
                            <v-flex xs6>
                                <v-select
                                        :items="socialListed"
                                        label="Select Social Media"
                                        solo
                                ></v-select>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-layout row wrap pa-3 class="listed-sch-posts v-card">
                    <v-flex xs2>
                        <img class="post-img" src="../../images/product-4.jpg">
                    </v-flex>
                    <v-flex xs7>
                        <h3 class="post-title font-weight-light primary--text text-xs-left">Bleach Hoodie Hollow Ichigo </h3>
                        <h4 class="post-sch font-regular grey--text lighten-4 mt-2 text-xs-left">Scheduled for:</h4>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs1>
                                        <i class="fab fa-pinterest pintColor--text" style="font-size: 20px;"></i>
                                    </v-flex>
                                    <v-flex xs4 class="text-xl-left" style="font-size: 16px">
                                        (Clothing)
                                    </v-flex>
                                    <v-flex xs6 class="text-xl-left" style="font-size: 17px">
                                        Oct 24, 2018 @ 05:53 PM
                                    </v-flex>
                                    <v-flex xs1 class="pa-0">
                                        <v-btn flat depressed class="ma-0 pa-0">
                                            <i class="material-icons primary--text">
                                                delete
                                            </i>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs1>
                                        <i class="fab fa-facebook-f fbColor--text" style="font-size: 20px;"></i>
                                    </v-flex>
                                    <v-flex xs4 class="text-xl-left" style="font-size: 16px">
                                        (Painting)
                                    </v-flex>
                                    <v-flex xs6 class="text-xl-left" style="font-size: 17px">
                                        Oct 25, 2018 @ 06:15 PM
                                    </v-flex>
                                    <v-flex xs1 class="pa-0">
                                        <v-btn flat depressed class="ma-0 pa-0">
                                            <i class="material-icons primary--text">
                                                delete
                                            </i>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs1>
                                        <i class="fab fa-twitter twitterColor--text" style="font-size: 20px;"></i>
                                    </v-flex>
                                    <v-flex xs4 class="text-xl-left" style="font-size: 16px">
                                        (Clothing)
                                    </v-flex>
                                    <v-flex xs6 class="text-xl-left" style="font-size: 17px">
                                        Oct 24, 2018 @ 05:53 PM
                                    </v-flex>
                                    <v-flex xs1 class="pa-0">
                                        <v-btn flat depressed class="ma-0 pa-0">
                                            <i class="material-icons primary--text">
                                                delete
                                            </i>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs3>
                        <v-btn color="success">Edit</v-btn>
                        <v-btn color="info">Remove</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-layout row wrap pa-3 class="listed-sch-posts v-card">
                    <v-flex xs2>
                        <img class="post-img" src="../../images/product-4.jpg">
                    </v-flex>
                    <v-flex xs7>
                        <h3 class="post-title font-weight-light primary--text text-xs-left">Bleach Hoodie Hollow Ichigo </h3>
                        <h4 class="post-sch font-regular grey--text lighten-4 mt-2 text-xs-left">Scheduled for:</h4>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs1>
                                        <i class="fab fa-pinterest pintColor--text" style="font-size: 20px;"></i>
                                    </v-flex>
                                    <v-flex xs4 class="text-xl-left" style="font-size: 16px">
                                        (Clothing)
                                    </v-flex>
                                    <v-flex xs6 class="text-xl-left" style="font-size: 17px">
                                        Oct 24, 2018 @ 05:53 PM
                                    </v-flex>
                                    <v-flex xs1 class="pa-0">
                                        <v-btn flat depressed class="ma-0 pa-0">
                                            <i class="material-icons primary--text">
                                                delete
                                            </i>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs1>
                                        <i class="fab fa-facebook-f fbColor--text" style="font-size: 20px;"></i>
                                    </v-flex>
                                    <v-flex xs4 class="text-xl-left" style="font-size: 16px">
                                        (Painting)
                                    </v-flex>
                                    <v-flex xs6 class="text-xl-left" style="font-size: 17px">
                                        Oct 25, 2018 @ 06:15 PM
                                    </v-flex>
                                    <v-flex xs1 class="pa-0">
                                        <v-btn flat depressed class="ma-0 pa-0">
                                            <i class="material-icons primary--text">
                                                delete
                                            </i>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs1>
                                        <i class="fab fa-twitter twitterColor--text" style="font-size: 20px;"></i>
                                    </v-flex>
                                    <v-flex xs4 class="text-xl-left" style="font-size: 16px">
                                        (Clothing)
                                    </v-flex>
                                    <v-flex xs6 class="text-xl-left" style="font-size: 17px">
                                        Oct 24, 2018 @ 05:53 PM
                                    </v-flex>
                                    <v-flex xs1 class="pa-0">
                                        <v-btn flat depressed class="ma-0 pa-0">
                                            <i class="material-icons primary--text">
                                                delete
                                            </i>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs3>
                        <v-btn color="success">Edit</v-btn>
                        <v-btn color="info">Remove</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                daysListed: ['Today','Tomorrow','7 Days','15 Days','30 Days','All Time'],
                socialListed:['Facebook','Twitter','Instagram','Pinterest','All Network']
            }
        }
    }
</script>