<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
                class="backend-left-menu socialGenie"
                width="260"
        >
            <v-menu offset-x class="top-left-user" transition="scale-transition">
                <v-btn
                        slot="activator"
                        flat
                        depressed
                        class="pl-0"
                >
                    <v-avatar tile>
                        <img src="../../images/googlifyLogo.png" alt="Googlify Logo">
                    </v-avatar>
                </v-btn>
            </v-menu>
            <v-list dense class="left-side-bar">
                <template v-for="item in items">
                    <v-list-group
                            v-if="item.children"
                            v-model="item.model"
                            :key="item.text"
                            :append-icon="item.model ? item.icon : item['icon-alt']"
                            :prepend-icon="item.model ? item.textIcon : item['textIcon-alt']"
                            class="yes-child"
                    >
                        <v-list-tile slot="activator" class="hello asdf">
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ item.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile
                                v-for="(child, i) in item.children"
                                :key="i"
                                :to="child.url == '#' ? '' : child.url"
                                @click="dashboardActive"
                        >

                            <v-list-group
                                    sub-group
                                    :prepend-icon="child.model ? child.icon : child['icon-alt']"
                                    class="sub-child-start"
                            >
                                <v-list-tile slot="activator" class="broooook">
                                    <v-list-tile-content>
                                        <v-list-tile-title>
                                            <v-list-tile-title class="pl-5">
                                                {{ child.text }}
                                            </v-list-tile-title>
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile
                                        v-for="(bChild, i) in child.subChildren"
                                        @click=""
                                        v-model="bChild.model"
                                        :key="bChild.text"
                                        :append-icon="bChild.model ? bChild.icon : bChild['icon-alt']"

                                        class="choty-bachy"
                                        :to="bChild.url == '#' ? '' : bChild.url"
                                        exact
                                >
                                    <v-list-tile-title>
                                        <v-icon>
                                            {{bChild.icon}}
                                        </v-icon>
                                        <span>{{ bChild.text }}</span>
                                    </v-list-tile-title>
                                </v-list-tile>
                            </v-list-group>
                        </v-list-tile>
                    </v-list-group>

                    <v-list-tile v-else :key="item.text" @click="dashboardActive(); hideDropDown()" class="no-child"
                                 :to="item.url == '#' ? '' : item.url" exact>
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>

        </v-navigation-drawer>
        <v-toolbar
                color="topColor"
                dark
                app
                fixed
                class="main-jedi-menu"
                flat
        >
            <v-toolbar-title class="ml-0 main-burger-menu">
                <v-toolbar-side-icon class="ma-0" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <p class="brand-logo">
                    Googlify <span>By Thotar</span>
                </p>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>notifications</v-icon>
            </v-btn>
            <v-menu offset-y>
                <v-btn
                        slot="activator"
                        flat
                        depressed
                        class="pl-0 store-details mr-0"
                >
                    <v-avatar size="32px" tile class="mr-2">
                        <img src="../../images/tk.png" alt="Tariq Khurshid">
                    </v-avatar>
                    <i class="material-icons">
                        arrow_drop_down
                    </i>
                </v-btn>
                <v-list>
                    <v-list-tile @click="">
                        <v-list-tile-title>Store 2</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-title>Upgrade</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="">
                        <v-list-tile-title>Log Out</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn
                    dark
                    icon
                    class="ma-0"
                    style="width:45px; height:45px"
            >
                <v-icon size="36px">apps</v-icon>
            </v-btn>
        </v-toolbar>
        <div class="custom-right-bar">
            <div class="icon-side">
                <div :class="{active : showFirst}">
                    <v-btn icon @click="showRightBar1"><v-icon color="blue darken-1">calendar_today</v-icon></v-btn>
                </div>
                <div :class="{active : showSecond}">
                    <v-btn icon @click="showRightBar2"><v-icon color="blue darken-1">edit</v-icon></v-btn>
                </div>
                <div :class="{active : showThird}">
                    <v-btn icon @click="showRightBar3"><v-icon color="blue darken-1">event_note</v-icon></v-btn>
                </div>
                <div :class="{active : showFourth}">
                    <v-btn icon @click="showRightBar4"><v-icon color="blue darken-1">school</v-icon></v-btn>
                </div>
            </div>
            <div v-show="rightBar" class="right-options" style="width: 300px;">
                <v-btn style="float:right" @click="closeBar" icon>
                    <i class="material-icons">
                        close
                    </i>
                </v-btn>
                <div v-show="showFirst" class="single-entity">
                    <v-date-picker></v-date-picker>
                </div>
                <div v-show="showSecond" class="single-entity">
                    <v-card flat>
                        <v-card-text class="pb-0">
                            My Tasks:
                        </v-card-text>
                        <v-card-text>
                            <v-flex xs12 v-for="(tasks,index) in userTasks" :key="index">
                                <v-text-field
                                        label="Task Title"
                                        solo
                                        placeholder="Enter Task Title"
                                        v-model="tasks.taskTitle"
                                        v-on:keyup.enter="addTask"
                                ></v-text-field>
                            </v-flex>
                            <v-btn @click="addTask" icon style="display:block;margin:0 auto">
                                <i class="material-icons primary--text">
                                    add_circle
                                </i>
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </div>
                <div v-show="showThird" class="single-entity">
                    <v-card flat>
                        <v-card-text class="pb-0">
                            My Notes:
                        </v-card-text>
                        <v-card-text>
                            <v-flex xs12 v-for="(notes,index) in userNotes" :key="index">
                                <v-text-field
                                        label="Note Title"
                                        solo
                                        placeholder="Enter Note"
                                        v-model="notes.noteTitle"
                                        v-on:keyup.enter="addNotes"
                                ></v-text-field>
                            </v-flex>
                            <v-btn @click="addNotes" icon style="display:block;margin:0 auto">
                                <i class="material-icons primary--text">
                                    add_circle
                                </i>
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </div>
                <div v-show="showFourth" class="single-entity">
                    <v-card flat>
                        <v-card-text>Trackify Video</v-card-text>
                        <v-card-text>
                            <iframe style="width: 100%;height: auto;" src="https://www.youtube.com/embed/jIGZFlMdOzo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </v-card-text>
                        <v-card-text>Some Text Here Some Text Here Some Text Here Some Text Here Some Text Here</v-card-text>
                    </v-card>
                </div>
            </div>
        </div>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center style="display: block">
                    <router-view></router-view>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<style>
    .left-side-bar .choty-bachy a {
        height: auto !important;
    }

    .v-list--dense .v-list__tile:not(.v-list__tile--avatar) {
        height: auto;
        padding: 9px 0px;
    }

    .v-list--dense .v-list__tile:not(.v-list__tile--avatar) .v-list__tile {
        padding: 0;
    }

    .v-list__group .v-list__group .v-list__group__header:hover {
        background-color: transparent
    }

    .v-list__group .v-list__group--active:before,
    .v-list__group .v-list__group--active:after {
        background: none !important;
    }

    .v-list__group .v-list__group .choty-bachy {
        padding-left: 0px
    }

    .v-list--dense .v-list__tile:not(.v-list__tile--avatar) .v-list__group {
        width: 100%
    }
</style>


<script>
    export default {
        data: () => ({
            showFirst:false,
            showSecond:false,
            showThird:false,
            showFourth:false,
            rightBar:false,
            drawer: null,
            items: [
                {
                    icon: 'dashboard',
                    text: 'Dashboard',
                    url: '/'
                },
                {
                    icon: 'accessibility',
                    text: 'Authorizing',
                    url: '/authorizing'
                },
                {
                    icon: 'share',
                    text: 'Linking',
                    url: '/linking'
                },
                {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    textIcon: 'settings',
                    'textIcon-alt': 'settings',
                    text: 'Feed Setup',
                    model: false,
                    children: [
                        {
                            text: 'Mapping',
                            icon: 'location_on',
                            url: '/mappingFeed'
                        },
                        {
                            text: 'Shipping & Tax',
                            icon: 'local_shipping',
                            url: '/shippingFeed'
                        },
                    ]
                },
                {
                    icon: 'keyboard_arrow_up',
                    'icon-alt': 'keyboard_arrow_down',
                    textIcon: 'perm_data_setting',
                    'textIcon-alt': 'perm_data_setting',
                    text: 'GMC Setup',
                    model: false,
                    children: [
                        {
                            text: 'Sub Menu 1',
                            icon: 'explore',
                            url: '/gmcSetup1'
                        },
                        {
                            text: 'Sub Menu 2',
                            icon: 'explore',
                            url: '/gmcSetup2'
                        },
                        {
                            text: 'Sub Menu 3',
                            icon: 'explore',
                            url: '/gmcSetup3'
                        },
                    ]
                },
                {
                    icon: 'public',
                    text: 'Adwords Setup',
                    url: '/adwordsSetup'
                },
            ],
            userTasks:[
                {
                    taskTitle: '',
                    taskDetails: ''
                }
            ],
            userNotes:[
                {
                    noteTitle: '',
                }
            ]
        }),
        props: {
            source: String
        },
        methods : {
            hideDropDown: function(){
                this.items[3].model = false;
                this.items[4].model = false;
            },
            closeBar: function(){
                this.rightBar=false;
                this.showFirst=false;
                this.showSecond=false;
                this.showThird=false;
                this.showFourth=false;
            },
            addTask: function(){
              this.userTasks.push({
                  taskTitle: '',
                  taskDetails: ''
              });
            },
            addNotes: function(){
                this.userNotes.push({
                    noteTitle: '',
                });
            },
            showRightBar1: function(){
                this.rightBar = true;
                this.showFirst=true;
                this.showSecond=false;
                this.showThird=false;
                this.showFourth=false;
            },
            showRightBar2: function(){
                this.rightBar = true;
                this.showSecond=true;
                this.showFirst=false;
                this.showThird=false;
                this.showFourth=false;
            },
            showRightBar3: function(){
                this.showThird=true;
                this.rightBar = true;
                this.showSecond=false;
                this.showFirst=false;
                this.showFourth=false;
            },
            showRightBar4: function(){
                this.showFourth=true;
                this.rightBar = true;
                this.showSecond=false;
                this.showFirst=false;
                this.showThird=false;
            },
            dashboardActive : function() {
                if(this.$router.currentRoute.path== '/' || this.$router.currentRoute.path== '/dashboard'){
                    $('.v-list .no-child:nth-child(1) .v-list__tile.v-list__tile--link').addClass('primary--text v-list__tile--active');
                }
                else {
                    $('.v-list .no-child:nth-child(1) .v-list__tile.v-list__tile--link').removeClass('primary--text v-list__tile--active');
                }
            }
        },
        mounted : function(){
            //console.log(this.$router.currentRoute.path);
            this.dashboardActive();
        }
    }
</script>