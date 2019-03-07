<template>
    <v-container grid-list-md text-xs-center class="pa-0 pb-4">
        <v-layout row wrap v-show="showStep0">
            <v-flex xs12 class="step0">
                <v-card flat>
                    <h3 class="text-xs-left mb-3">Let's name your social sprint!</h3>
                    <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            :counter="50"
                            label="Name Your Auto Sprint"
                            required
                            solo
                            v-on:keyup.enter="StepOneActive"
                    ></v-text-field>
                    <v-layout row wrap class="grey lighten-3">
                        <v-flex xs1>
                            <i class="material-icons pl-1 pt-3">
                                whatshot
                            </i>
                        </v-flex>
                        <v-flex xs11 class="pb-0 pt-0">
                            <p class="mb-0 pa-3 text-xs-left">
                                <strong style="display: block;" class="mr-2">Tip:</strong> If you are promoting a particular type of product or collection, try to use that in name to make your sprint more identifiable in the dashboard!
                            </p>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs12 class="next-step-cta">
                <v-progress-linear height="18" v-model="sprintProgress"></v-progress-linear>
                <p>{{sprintProgress}}%</p>
                <v-btn @click="StepOneActive" depressed color="orange darken-3">Next Step: Select Products</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-show="showStep1">
            <v-flex xs12>
                <v-card flat>
                    <v-card-text class="pl-0 pb-3 step-heading">
                        <h2 class="darken-3 primary--text">Populate Your Sprint With Products!</h2>
                        <p>Add the products you would like to promote on your social networks over here! </p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 class="sprint-tooltip">
                <v-tooltip bottom color="orange darken-2">
                    <v-icon
                            slot="activator"
                            color="orange darken-2"
                            dark
                    >whatshot</v-icon>
                    <span>You can create a sprint to promote your best-selling products, a specific collection or ones with a specific tag!</span>
                </v-tooltip>
            </v-flex>
            <v-flex xs12>
                <v-card-text class="top-search-bar">
                    <v-autocomplete
                            v-model="model"
                            :items="items"
                            :loading="isLoading"
                            :search-input.sync="search"
                            color="primary"
                            hide-no-data
                            hide-selected
                            item-text="Description"
                            item-value="API"
                            label=""
                            placeholder="Type To Search Your Products"
                            prepend-icon="mdi-database-search"
                            return-object
                            class="product-search-bar"
                    ></v-autocomplete>
                </v-card-text>
            </v-flex>
            <v-flex xs2>
                <v-card flat>
                    <v-card-text class="px-0">Filter Your Products</v-card-text>
                    <v-select
                            :items="filterOptions"
                            box
                            label="Select Filter"
                    ></v-select>
                    <p>{{ selected }}</p>
                    <v-checkbox color="primary" class="mt-0" v-model="selected" label="John" value="John"></v-checkbox>
                    <v-checkbox color="primary" class="mt-0" v-model="selected" label="Jacob" value="Jacob"></v-checkbox>
                    <v-checkbox color="primary" class="mt-0" v-model="selected" label="Option1" value="Option1"></v-checkbox>
                    <v-checkbox color="primary" class="mt-0" v-model="selected" label="Option2" value="Option2"></v-checkbox>
                    <v-checkbox color="primary" class="mt-0" v-model="selected" label="Option3" value="Option3"></v-checkbox>
                    <v-checkbox color="primary" class="mt-0" v-model="selected" label="Option4" value="Option4"></v-checkbox>
                    <v-checkbox color="primary" class="mt-0" v-model="selected" label="Option5" value="Option5"></v-checkbox>

                </v-card>
            </v-flex>
            <v-flex xs10 style="margin-bottom: 60px;">
                <v-checkbox
                        label="Select All Shown"
                        v-model="selectAll"
                        @change="selectAllProducts"
                        color="primary"
                ></v-checkbox>
                <v-card flat>
                    <v-layout row wrap>
                        <v-flex v-for="(products, index) in listedProducts" :key="index" xs3>
                            <v-card class="listed-products-shopify">
                                <v-card-text class="px-0">
                                    <v-btn :disabled="products.isSelected" @click="productSelected(index)" flat>
                                        <img :src="products.productImg"/>
                                        <p>{{products.productName}}</p>
                                        <span class="beforeAdded" v-if="!products.isSelected">Add To Stack!</span>
                                        <span class="afterAdded" v-else>Added!</span>
                                    </v-btn>
                                    <span class="beforeAdded removeProduct" @click="removeFromStack(index)"  v-if="products.isSelected">
                                        <i class="material-icons close-icon">
                                            close
                                        </i>
                                    </span>
                                </v-card-text>
                            </v-card>
                            <v-flex xs12 class="next-step-cta">
                                <v-progress-linear height="18" v-model="sprintProgress"></v-progress-linear>
                                <p>{{sprintProgress}}%</p>
                                <v-btn style="float:left" @click="setStep0" flat depressed class="orange--text darken-3 back-cta">Back To Sprint Name</v-btn>
                                <v-btn :disabled="makeACtive" @click="nextStep" depressed color="orange darken-3">Next Step: Let's Schedule Your Post!</v-btn>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-show="showStep2" class="step-two">
            <v-flex xs12>
                <v-card flat>
                    <v-card-text class="pl-0 pb-3 step-heading">
                        <h2 class="darken-3 primary--text">Autopilot Configuration</h2>
                        <p>Choose which networks you want to promote your products on, how often and at what time!</p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 class="sprint-tooltip">
                <v-tooltip bottom color="orange darken-2">
                    <v-icon
                            slot="activator"
                            color="orange darken-2"
                            dark
                    >whatshot</v-icon>
                    <span>You can create a sprint to promote your best-selling products, a specific collection or ones with a specific tag!</span>
                </v-tooltip>
            </v-flex>
            <v-flex sm6>
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
                                                <i style="font-size:20px" class="fab fa-facebook-f fbColor--text"></i>
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
                                                <i style="font-size: 20px" class="fab fa-twitter twitterColor--text"></i>
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
                                                <i style="font-size: 20px" class="fab fa-instagram instaColor--text"></i>
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
                                                <i style="font-size: 20px" class="fab fa-pinterest pintColor--text"></i>
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
            </v-flex>
            <v-flex sm6>
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
                                What type of format should we use to promote your products?
                            </v-card-text>
                            <v-card-text class="prod-weights">
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-layout row wrap class="primary cal-weighted">
                                            <v-flex xs8>
                                                <v-card-text class="text-xs-left white--text hed-cal">Single Image</v-card-text>
                                            </v-flex>
                                            <v-flex xs2 offset-xs2 class="label-perct">
                                                <v-text-field
                                                        label="0"
                                                        solo
                                                        value="100"
                                                ></v-text-field>
                                                <span>%</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs12 class="mt-1 mb-1">
                                        <v-layout row wrap class="primary cal-weighted">
                                            <v-flex xs8>
                                                <v-card-text class="text-xs-left white--text hed-cal">GIFs</v-card-text>
                                            </v-flex>
                                            <v-flex xs2 offset-xs2 class="label-perct">
                                                <v-text-field
                                                        label="0"
                                                        solo
                                                        value="0"
                                                ></v-text-field>
                                                <span>%</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-layout row wrap class="primary cal-weighted">
                                            <v-flex xs8>
                                                <v-card-text class="text-xs-left white--text hed-cal">Collage</v-card-text>
                                            </v-flex>
                                            <v-flex xs2 offset-xs2 class="label-perct">
                                                <v-text-field
                                                        label="0"
                                                        solo
                                                        value="0"
                                                ></v-text-field>
                                                <span>%</span>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex sm6>
                <v-card flat>
                    <v-layout row wrap class="inner-config-heading">
                        <v-flex xs1>
                            <v-card-text class="icon-header">
                                <i class="material-icons orange--text text--darken-2">
                                    send
                                </i>
                            </v-card-text>
                        </v-flex>
                        <v-flex xs11>
                            <v-card-text class="text-xs-left head-portion">
                                How Often do you want to post your products:
                            </v-card-text>
                            <v-card-text>
                                <v-layout row wrap class="post-days">
                                    <v-flex xs3>
                                        <v-text-field
                                                v-model="postNo"
                                                :rules="nameRules"
                                                label=""
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs4 pt-4>
                                        # of Post every
                                    </v-flex>
                                    <v-flex xs3>
                                        <v-text-field
                                                v-model="DayNo"
                                                :rules="nameRules"
                                                label=""
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex xs1 pt-4>
                                        Days
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex sm6>
                <v-card flat>
                    <v-layout row wrap class="inner-config-heading">
                        <v-flex xs1>
                            <v-card-text class="icon-header">
                                <i class="material-icons orange--text text--darken-2">
                                    access_time
                                </i>
                            </v-card-text>
                        </v-flex>
                        <v-flex xs11>
                            <v-card-text class="text-xs-left head-portion">
                                What time do you want us to promote your products?
                            </v-card-text>
                            <v-card-text>
                                <v-layout row wrap class="post-days">
                                    <v-flex sm5>
                                        <v-layout row wrap>
                                            <v-flex xs4>
                                                <v-combobox
                                                        :items="hourDetails"
                                                        label="Hour"
                                                ></v-combobox>
                                            </v-flex>
                                            <v-flex xs4>
                                                <v-combobox
                                                        :items="minDetails"
                                                        label="Min"
                                                ></v-combobox>
                                            </v-flex>
                                            <v-flex xs4>
                                                <v-combobox
                                                        v-model="morning"
                                                        :items="morningDetails"
                                                        label=""
                                                ></v-combobox>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex sm2>
                                        <v-card-text>Between</v-card-text>
                                    </v-flex>
                                    <v-flex sm5>
                                        <v-layout row wrap>
                                            <v-flex xs4>
                                                <v-combobox
                                                        :items="hourDetails"
                                                        label="Hour"
                                                ></v-combobox>
                                            </v-flex>
                                            <v-flex xs4>
                                                <v-combobox
                                                        :items="minDetails"
                                                        label="Min"
                                                ></v-combobox>
                                            </v-flex>
                                            <v-flex xs4>
                                                <v-combobox
                                                        v-model="morning"
                                                        :items="morningDetails"
                                                        label=""
                                                ></v-combobox>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex sm6>
                <v-card flat>
                    <v-layout row wrap class="inner-config-heading">
                        <v-flex xs1>
                            <v-card-text class="icon-header">
                                <i class="material-icons orange--text text--darken-2">
                                    settings
                                </i>
                            </v-card-text>
                        </v-flex>
                        <v-flex xs11>
                            <v-card-text class="text-xs-left head-portion">
                                Would you like to post on weekends!
                            </v-card-text>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-layout row wrap>
                                            <v-flex xs3>
                                                <v-card-text class="week-head text-xs-left">
                                                    Include Weekends:
                                                </v-card-text>
                                            </v-flex>
                                            <v-flex xs2>
                                                <v-switch class="switch-week"
                                                          v-model="switch1"
                                                          color="primary"
                                                ></v-switch>
                                                <span class="yesoption" v-if="switch1">Yes</span>
                                                <span class="yesoption" v-else>No</span>
                                            </v-flex>
                                            <v-flex xs7>
                                                <v-card-text class="text-xs-left">
                                                    Schedule for Saturday and Sundays also
                                                </v-card-text>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-layout row wrap>
                                            <v-flex xs3>
                                                <v-card-text class="week-head text-xs-left">
                                                    Allow Reposting
                                                </v-card-text>
                                            </v-flex>
                                            <v-flex xs2>
                                                <v-switch class="switch-week"
                                                          v-model="switch2"
                                                          color="primary"
                                                ></v-switch>
                                                <span class="yesoption" v-if="switch2">Yes</span>
                                                <span class="yesoption" v-else>No</span>
                                            </v-flex>
                                            <v-flex xs7>
                                                <v-card-text class="text-xs-left">
                                                    Repeat Autopilot when every product has been shared/posted at least once
                                                </v-card-text>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs12 class="next-step-cta">
                <v-progress-linear height="18" v-model="sprintProgress"></v-progress-linear>
                <p>{{sprintProgress}}%</p>
                <v-btn style="float:left" @click="StepOneActive" flat depressed class="orange--text darken-3 back-cta">Back To Products</v-btn>
                <v-btn @click="stepThirdActive" depressed color="orange darken-3">Next Step: Messaging</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-show="showStep3" class="step-two">
            <v-flex xs12>
                <v-card flat>
                    <v-card-text class="pl-0 pb-3 step-heading">
                        <h2 class="darken-3 primary--text">Autopilot Messaging</h2>
                        <p>Over here, you can determine the message that goes with each product post.</p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 class="sprint-tooltip">
                <v-tooltip bottom color="orange darken-2">
                    <v-icon
                            slot="activator"
                            color="orange darken-2"
                            dark
                    >whatshot</v-icon>
                    <span>You can create a sprint to promote your best-selling products, a specific collection or ones with a specific tag!</span>
                </v-tooltip>
            </v-flex>
            <v-flex xs6 class="pr-4">
                <v-radio-group v-model="radioGroup" column>
                    <div class="single-radio default-tem">
                        <v-radio label="I would like to use the default template " value="radio-1" color="primary">
                        </v-radio>
                        <div>
                            <v-textarea style="padding-left: 32px;" no-resize="true" rows="2" disabled="true"
                                    solo
                                    name="input-7-4"
                                    label="Solo textarea"
                                    value="| PRODUCT TITLE | - | PRICE | - | HASHTAG | - | URL |"
                            ></v-textarea>
                            <v-checkbox
                                    class="mt-0 pt-0"
                                    style="padding-left: 32px"
                                    label="I would like to add more messaging to my autopilot campaign"
                                    v-model="showMessages"
                                    color="primary"
                            ></v-checkbox>
                            <div class="show-messaging" v-show="showMessages">
                                <v-layout row wrap>
                                    <v-flex xs10 class="offset-xs1">
                                        <div class="addMesg">
                                            <v-layout align-center v-for="(msg,index) in additionalDefault" :key="index">
                                                <v-checkbox v-model="msg.check" hide-details class="shrink mr-2" color="orange darken-3"></v-checkbox>
                                                <v-text-field label="" placeholder="Add Your Custom Message" :value="msg.message"></v-text-field>
                                            </v-layout>
                                        </div>
                                        <div class="text-xs-center">
                                            <v-btn color="orange darken-3 white--text" @click="addUserMsg">
                                                <v-icon left color="white">add_circle_outline</v-icon>Add Another
                                            </v-btn>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </div>
                    </div>
                    <div class="single-radio mt-3">
                        <v-radio label="I would like to use a customized post template" value="radio-2" color="primary"></v-radio>
                        <v-textarea style="padding-left: 32px;" no-resize="true" rows="2"
                                    solo
                                    name="input-7-4"
                                    label="Solo textarea"
                                    value="| PRODUCT TITLE | - | PRICE | - | HASHTAG | - | URL |"
                        ></v-textarea>
                        <v-checkbox
                                class="mt-0 pt-0"
                                style="padding-left: 32px"
                                label="I would like to add more messaging to my autopilot campaign"
                                v-model="showMessagesCustom"
                                color="primary"
                        ></v-checkbox>
                        <div class="show-messaging" v-show="showMessagesCustom">
                            <v-layout row wrap>
                                <v-flex xs10 class="offset-xs1">
                                    <div class="addMesg">
                                        <v-layout align-center v-for="(msg,index) in additionalCustom" :key="index">
                                            <v-checkbox v-model="msg.check" hide-details class="shrink mr-2" color="orange darken-3"></v-checkbox>
                                            <v-text-field label="" placeholder="Add Your Custom Message" :value="msg.message"></v-text-field>
                                        </v-layout>
                                    </div>
                                    <div class="text-xs-center">
                                        <v-btn color="orange darken-3 white--text" @click="addUserCustom">
                                            <v-icon left color="white">add_circle_outline</v-icon>Add Another
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </div>
                    </div>
                </v-radio-group>
            </v-flex>
            <v-flex xs6>
                <v-card flat>
                    <v-card-text class="text-xs-left" style="font-weight: bold;font-size: 16px">Preview:</v-card-text>
                    <v-tabs grow v-model="active" color="primary" dark slider-color="blue lighten-2">
                        <v-tab ripple>Facebook</v-tab>
                        <v-tab-item>
                            <v-card>
                                <v-card-text class="mt-2" style="border: 1px solid #ccc;border-radius: 3px;">
                                    <v-layout row wrap>
                                        <v-flex xs1>
                                            <img style="width:100%;border-radius: 100%;" src="../../images/tk.png">
                                        </v-flex>
                                        <v-flex xs11>
                                            <v-layout row wrap>
                                                <v-flex xs9>
                                                    <h3 class="text-xs-left">My Store Name</h3>
                                                    <span class="text-xs-left grey--text" style="display: block;">Today at 7:30</span>
                                                </v-flex>
                                                <v-flex xs3>
                                                    <v-btn style="background-color:transparent !important" flat depressed class="ma-0 pa-0 right text-xs-right">
                                                        <i class="material-icons">
                                                            more_horiz
                                                        </i>
                                                    </v-btn>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex xs12>
                                            <p class="text-xs-left">3D Printed Cool Art Blood Deadpoo. <span class="primary--text">#naruto #khalidDJ</span> <a href="https://goo.gl/cimD8i">https://goo.gl/cimD8i</a> </p>
                                        </v-flex>
                                        <v-flex xs12>
                                            <img style="width: 100%;max-width: 329px;" src="../../images/product-4.jpg">
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab ripple>Twitter</v-tab>
                        <v-tab-item>
                            <v-card>
                                <v-card-text class="mt-2" style="border: 1px solid #ccc;border-radius: 3px;">
                                    <v-layout row wrap>
                                        <v-flex xs1>
                                            <img style="width:100%;border-radius: 100%" src="../../images/tk.png">
                                        </v-flex>
                                        <v-flex xs11>
                                            <h3 class="text-xs-left">My Store Name <span class="text-xs-left grey--text" style="font-size: 12px">@userName</span></h3>
                                            <p class="text-xs-left">3D Printed Cool Art Blood Deadpoo. <span class="primary--text">#naruto #khalidDJ</span> <a href="https://goo.gl/cimD8i">https://goo.gl/cimD8i</a> </p>
                                            <img style="width: 100%;max-width: 329px;" src="../../images/product-4.jpg">
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab ripple>Instagram</v-tab>
                        <v-tab-item>
                            <v-card>
                                <v-card-text class="mt-2" style="border: 1px solid #ccc;border-radius: 3px;">
                                    <v-layout row wrap class="mt-3">
                                        <v-flex xs7>
                                            <img style="width: 100%;max-width: 329px;" src="../../images/product-4.jpg">
                                        </v-flex>
                                        <v-flex xs5>
                                            <v-layout row wrap>
                                                <v-flex xs2>
                                                    <img style="width:100%;border-radius: 100%;" src="../../images/tk.png">
                                                </v-flex>
                                                <v-flex xs10>
                                                    <h3 class="text-xs-left">My Store Name</h3>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <p class="text-xs-left">Some Here Some Text Here Some Text Here Some Text Here Some Text Here Some Text Here</p>
                                                    <p class="text-xs-left">
                                                        Product Discriptiop with Hastag Product Discriptiop with Hastag Product Discriptiop with Hastag Product Discriptiop with Hastag
                                                        #hastag1 #hastag2 #hastag3 #hastag4 #hastag5 #hastag6
                                                    </p>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab ripple>Pinterest</v-tab>
                        <v-tab-item>
                            <v-card>
                                <v-card-text>
                                    <v-layout row wrap style="margin: 24px auto;border: 1px solid #ccc;border-radius: 3px;">
                                        <v-flex sm6 class="pb-0">
                                            <img style="width: 100%;max-width: 329px;" src="../../images/product-4.jpg">
                                        </v-flex>
                                        <v-flex sm6 v-card class="pt-3 pin-head">
                                            <p class="text-xs-left pin-price mb-0">$ 36.99</p>
                                            <h3 class="text-xs-left pin-prod">3D Printed Cool Art Blood Deadpoo</h3>
                                            <p class="text-xs-left mt-4 pin-desc">Some Text here for discription Some Text here for discription Some Text here for discription Some Text here for discription Some Text here for discription </p>
                                            <v-btn large flat depressed color="grey darken-2" style="text-transform: lowercase">
                                                <i class="material-icons">
                                                call_made
                                                </i>
                                                sacrifice-live.myshopify.com
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-flex>
            <v-flex xs12 class="next-step-cta">
                <v-progress-linear height="18" v-model="sprintProgress"></v-progress-linear>
                <p>{{sprintProgress}}%</p>
                <v-btn style="float:left" @click="StepTwoActive" flat depressed class="orange--text darken-3 back-cta">Back To Configuation</v-btn>
                <v-btn @click="StepFourActive" depressed color="orange darken-3">Calender View</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-show="showStep4">
            <v-flex xs12>
                <v-card flat>
                    <v-card-text class="pl-0 pb-3 step-heading">
                        <h2 class="darken-3 primary--text">Review Autopilot Calendar</h2>
                        <p>Almost there! Take a lot at the tentative calendar before we schedule them!</p>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 class="sprint-tooltip">
                <v-tooltip bottom color="orange darken-2">
                    <v-icon
                            slot="activator"
                            color="orange darken-2"
                            dark
                    >whatshot</v-icon>
                    <span>You can create a sprint to promote your best-selling products, a specific collection or ones with a specific tag!</span>
                </v-tooltip>
            </v-flex>
            <v-flex xs12>
                <v-container>
                    <my-calendar></my-calendar>
                </v-container>
            </v-flex>
            <v-flex xs12 class="next-step-cta">
                <v-progress-linear height="18" v-model="sprintProgress"></v-progress-linear>
                <p>{{sprintProgress}}%</p>
                <v-btn style="float:left" @click="stepThirdActive" flat depressed class="orange--text darken-3 back-cta">Back To Messaging</v-btn>
                <v-btn to="/dashboard" depressed color="orange darken-3">Save & Close</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    export default{
        data(){
            return{
                selectAll:false,
                sprintProgress:0,
                fbPages:['Page 1','Page 2','Page 3','Page 4','Page 5'],
                radioGroup: 'radio-1',
                showMessages: false,
                showMessagesCustom: false,
                switch1: true,
                switch2: true,
                valid: false,
                postNo: '',
                nameRules: [
                    v => !!v || 'Field is required',
                ],
                DayNo: '',
                chipTiming: false,
                makeACtive:true,
                hour: '1',
                hourDetails: ['1','2','3','4','5','6','7','8','9','10','11','12'],
                min: '1',
                minDetails: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',],
                morning: 'AM',
                morningDetails: ['AM','PM'],
                dialog: false,
                date: '2018-10-13',
                showStep0: true,
                showStep1:false,
                showStep2: false,
                showStep3: false,
                showStep4:false,
                selected: ['John'],
                filterOptions: ['Tag', 'Collections', 'Type'],
                descriptionLimit: 60,
                entries: [],
                isLoading: false,
                model: null,
                search: null,
                listedProducts:[
                    {
                        productImg: '../public/images/product-1.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-2.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-3.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-4.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-1.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-2.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-3.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-4.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-1.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-2.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-3.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-4.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-1.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-2.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-3.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-4.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-1.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-2.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-3.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                    {
                        productImg: '../public/images/product-4.jpg',
                        productName: 'Unique Naruto Painting Graffiti Style 3D Printed Naruto Long Sleeve',
                        isSelected : false,
                        postSelected: false,
                    },
                ],
                additionalDefault:[
                    {
                        message: 'This is so lit! 🔥 [Hashtag] [URL]',
                        check: true
                    },
                    {
                        message: 'Checkout the latest addition to our store 😍 [Hashtag] [URL]\n',
                        check: true
                    },
                    {
                        message: 'Get one of these before they are sold out! [Hashtag] [URL]',
                        check: true
                    },
                    {
                        message: 'Available only for limited time! [Hashtag] [URL]',
                        check: true
                    }
                ],
                additionalCustom:[
                    {
                        message: 'This is so lit! 🔥 [Hashtag] [URL]',
                        check: true
                    },
                    {
                        message: 'Checkout the latest addition to our store 😍 [Hashtag] [URL]\n',
                        check: true
                    },
                    {
                        message: 'Get one of these before they are sold out! [Hashtag] [URL]',
                        check: true
                    },
                    {
                        message: 'Available only for limited time! [Hashtag] [URL]',
                        check: true
                    }
                ]
            }
        },
        methods : {
            showChipTiming: function(){
                this.chipTiming = true;
            },
            showDialog: function(index){
                this.dialog = true;
            },
            postSelected: function(index){
                this.listedProducts[index].postSelected = true;
                this.dialog = true;
            },
            productSelected : function (index) {
                this.listedProducts[index].isSelected = true;
                this.makeACtive = false;
            },
            nextStep: function () {
                this.showStep1 = false;
                this.showStep2 = true;
                this.sprintProgress = 40;
            },
            setStep0: function(){
                this.showStep0 = true;
                this.showStep1 = false;
                this.showStep2 = false;
                this.showStep3 = false;
                this.showStep4 = false;
                this.sprintProgress = 0;
            },
            StepOneActive : function () {
                this.showStep1 = true;
                this.showStep0 = false;
                this.showStep2 = false;
                this.showStep3 = false;
                this.showStep4 = false;
                this.sprintProgress = 20;
            },
            StepTwoActive: function(){
                this.showStep2 = true;
                this.showStep0 = false;
                this.showStep1 = false;
                this.showStep3 = false;
                this.showStep4 = false;
                this.sprintProgress = 40;
            },
            stepThirdActive: function () {
                this.showStep3 = true;
                this.showStep0 = false;
                this.showStep1 = false;
                this.showStep2 = false;
                this.showStep4 = false;
                this.sprintProgress = 60;
            },
            StepFourActive: function(){
                this.showStep4 = true;
                this.showStep0 = false;
                this.showStep1 = false;
                this.showStep2 = false;
                this.showStep3 = false;
                this.sprintProgress = 80;
            },
            addUserMsg: function () {
                this.additionalDefault.push({message:'',check:false})
            },
            addUserCustom: function () {
                this.additionalCustom.push({message:'',check:false})
            },
            removeFromStack: function (index){
                let j=0;
                this.listedProducts[index].isSelected = false;
                for (var i = 0; i < this.listedProducts.length; i++) {
                    if(this.listedProducts[i].isSelected===true){
                        j = ++j;
                    }
                }
                if( j>=1 ){
                    this.makeACtive = false;
                }else{
                    this.makeACtive = true;
                }
            },
            selectAllProducts: function () {
                if(this.selectAll === true){
                    for (var i = 0; i < this.listedProducts.length; i++) {
                        this.listedProducts[i].isSelected = true;
                        this.makeACtive = false;
                    }
                }else{
                    for (var i = 0; i < this.listedProducts.length; i++) {
                        this.listedProducts[i].isSelected = false;
                        this.makeACtive = true;
                    }
                }

            }
        },
        computed: {
            fields () {
                if (!this.model) return [];

                return Object.keys(this.model).map(key => {
                    return {
                        key: key,
                        value: this.model[key] || 'n/a'
                    }
                })
            },
            items () {
                return this.entries.map(entry => {
                    const Description = entry.Description.length > this.descriptionLimit
                        ? entry.Description.slice(0, this.descriptionLimit) + '...'
                        : entry.Description

                    return Object.assign({}, entry, { Description })
                })
            }
        },

        watch: {
            search (val) {
                // Items have already been loaded
                if (this.items.length > 0) return;

                // Items have already been requested
                if (this.isLoading) return;

                this.isLoading = true;

                // Lazily load input items
                axios.get('https://api.publicapis.org/entries')
                    .then(res => {
                        const { count, entries } = res.data
                        this.count = count
                        this.entries = entries
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (this.isLoading = false))
            }
        }
    }

</script>