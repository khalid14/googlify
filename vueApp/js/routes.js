import VueRouter from 'vue-router';

var routes = [
    { path: '*', redirect: '/' },
    {
        path: '/',
        component: require('./components/Dashboard'),
        meta: {

        }
    },
    {
        path: '/socialSprint',
        component: require('./components/socialSprint'),
        meta: {

        }
    },
    {
        path: '/manualScheduling',
        component: require('./components/manualScheduling'),
        meta: {

        }
    },
    {
        path: '/autoPilot',
        component: require('./components/autoPilot'),
        meta: {

        }
    },
    {
        path: '/socialSettings',
        component: require('./components/socialSettings'),
        meta: {

        }
    },
    {
        path: '/socialAnalytics',
        component: require('./components/socialAnalytics'),
        meta: {

        }
    },
    {
        path: '/singlePost',
        component: require('./components/singlePost'),
        meta: {

        }
    },
    {
        path: '/schedulePosts',
        component: require('./components/schedulePosts'),
        meta: {

        }
    },
    {
        path: '/generalSettings',
        component: require('./components/genSettings'),
        meta: {

        }
    },
    {
        path: '/audience-list',
        component: require('./components/audienceList'),
        meta: {

        }
    },
    {
        path: '/ca-builder',
        component: require('./components/caBuilder'),
        meta: {

        }
    },
    {
        path: '/laa-builder',
        component: require('./components/laaBuilder'),
        meta: {

        }
    },
    {
        path: '/eventStats',
        component: require('./components/eventStat'),
        meta: {

        }
    },
    {
        path: '/fbPixles',
        component: require('./components/fbPixels'),
        meta: {

        }
    },
    {
        path: '/manageCatalog',
        component: require('./components/manageCatalog'),
        meta: {

        }
    },
    {
        path: '/addCatalog',
        component: require('./components/addCatalog'),
        meta: {

        }
    },
    {
        path: '/googleCategory',
        component: require('./components/googleCategory'),
        meta: {

        }
    },
    {
        path: '/advancedSettings',
        component: require('./components/advancedSettings'),
        meta: {

        }
    },
    {
        path: '/settings',
        component: require('./components/settings'),
        meta: {

        }
    },
    {
        path: '/authorizing',
        component: require('./components/authorizing'),
        meta: {

        }
    },
    {
        path: '/linking',
        component: require('./components/linking'),
        meta: {

        }
    },
    {
        path: '/mappingFeed',
        component: require('./components/mappingFeed'),
        meta: {

        }
    },
    {
        path: '/shippingFeed',
        component: require('./components/shippingFeed'),
        meta: {

        }
    },
    {
        path: '/gmcSetup1',
        component: require('./components/gmcSetup1'),
        meta: {

        }
    },
    {
        path: '/gmcSetup2',
        component: require('./components/gmcSetup2'),
        meta: {

        }
    },
    {
        path: '/gmcSetup3',
        component: require('./components/gmcSetup3'),
        meta: {

        }
    },
    {
        path: '/adwordsSetup',
        component: require('./components/adwordsSetup'),
        meta: {

        }
    },
];

export default new VueRouter({
    routes: routes
});