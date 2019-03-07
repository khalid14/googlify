<template>
    <v-container grid-list-md text-xs-center class="pa-0 pb-5">
        <v-layout row wrap>
            <v-flex xs12>
                <h3 class="text-xs-left">Single Post</h3>
            </v-flex>
            <v-flex xs6 class="pr-4">
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
                                    Post Messaging
                                </v-card-text>
                                <v-card-text class="pt-2 pl-2 pb-0">
                                    <v-layout row wrap class="">
                                        <v-flex xs8>
                                            <v-textarea
                                                    solo
                                                    name="input-7-4"
                                                    label="Solo textarea"
                                                    placeholder="Write what you would like to share"
                                                    no-resize="true"
                                                    rows="11"
                                            ></v-textarea>
                                        </v-flex>
                                        <v-flex xs4>
                                            <img style="width: 100%" src="../../images/imgPlaceHolder.png">
                                            <v-btn color="orange darken-3" dark flat class="back-cta">
                                                <v-icon class="mr-2 ml-0" dark right>backup</v-icon>Upload Image
                                            </v-btn>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                </v-card>
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
                                    To get started, let's select the social platforms that you want to promote your store on:
                                </v-card-text>
                                <v-card-text>
                                    <v-layout row wrap>
                                        <v-flex sm6>
                                            <v-layout row wrap>
                                                <v-flex xs2>
                                                    <v-checkbox
                                                            v-model="ex4"
                                                            label=""
                                                            color="primary"
                                                            value="Facebook"
                                                            hide-details
                                                    ></v-checkbox>
                                                </v-flex>
                                                <v-flex xs1 class="pt-4">
                                                    <i style="font-size:20px" class="fab fa-facebook-f primary--text"></i>
                                                </v-flex>
                                                <v-flex xs8 class="pl-2">
                                                    <v-select
                                                            :items="fbPages"
                                                            label="Select Page"
                                                    ></v-select>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs6>
                                            <v-layout row wrap>
                                                <v-flex xs2>
                                                    <v-checkbox
                                                            v-model="ex4"
                                                            label=""
                                                            color="primary"
                                                            value="Twitter"
                                                            hide-details
                                                    ></v-checkbox>
                                                </v-flex>
                                                <v-flex xs1 class="pt-4">
                                                    <i style="font-size: 20px" class="fab fa-twitter primary--text"></i>
                                                </v-flex>
                                                <v-flex xs8 class="pl-2">
                                                    <v-select
                                                            :items="fbPages"
                                                            label="Select Page"
                                                    ></v-select>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs6>
                                            <v-layout row wrap>
                                                <v-flex xs2>
                                                    <v-checkbox
                                                            v-model="ex4"
                                                            label=""
                                                            color="primary"
                                                            value="Instagram"
                                                            hide-details
                                                    ></v-checkbox>
                                                </v-flex>
                                                <v-flex xs1 class="pt-4">
                                                    <i style="font-size: 20px" class="fab fa-instagram primary--text"></i>
                                                </v-flex>
                                                <v-flex xs8 class="pl-2">
                                                    <v-select
                                                            :items="fbPages"
                                                            label="Select Page"
                                                    ></v-select>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs6>
                                            <v-layout row wrap>
                                                <v-flex xs2>
                                                    <v-checkbox
                                                            v-model="ex4"
                                                            label=""
                                                            color="primary"
                                                            value="Pinterest"
                                                            hide-details
                                                    ></v-checkbox>
                                                </v-flex>
                                                <v-flex xs1 class="pt-4">
                                                    <i style="font-size: 20px" class="fab fa-pinterest primary--text"></i>
                                                </v-flex>
                                                <v-flex xs8 class="pl-2">
                                                    <v-select
                                                            :items="fbPages"
                                                            label="Select Page"
                                                    ></v-select>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-flex>
                        </v-layout>
                    </v-card>
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
                                Suggested Hastags
                            </v-card-text>
                            <v-card-text>
                                <v-textarea
                                        solo
                                        name="input-7-4"
                                        label=""
                                        placeholder="Enter Hashtag to use.."
                                        no-resize="true"
                                        rows="5"
                                        value="#Hastag1 #Hashtag2 #Hastag3"
                                ></v-textarea>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs6 class="mt-3">
                <v-card flat height="500">
                    <v-card-text class="text-xs-left pl-0 pb-2" style="font-weight: bold;font-size: 16px">Preview:</v-card-text>
                    <v-tabs grow v-model="active" color="primary" dark slider-color="blue lighten-2">
                        <v-tab ripple>Facbook</v-tab>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>Fac</v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab ripple>Twitter</v-tab>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>Twitter Preview</v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab ripple>Instagram</v-tab>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>Instagram Preview</v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab ripple>Pinterest</v-tab>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text>Pinterest Preview</v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
                <v-card>

                </v-card>
            </v-flex>
            <v-flex xs12 class="next-step-cta">
                <v-btn depressed color="orange darken-3" @click="snackbar = true">Schedule Post!</v-btn>
                <v-snackbar
                        v-model="snackbar"
                        bottom="true"
                >
                    Your post has been scheduled!
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
        data(){
            return{
                snackbar : false,
                fbPages:['Page 1','Page 2','Page 3','Page 4','Page 5'],
            }
        }
    }
</script>