import Vuer from 'vue-router';
import index from './page/index.vue'
import info from './page/info.vue'
import betbox from './page/betbox.vue'
import betboxList from './page/betboxList.vue'
import betSuccess from './page/betSuccess.vue'
import user from './page/user.vue'
import doubleball from './page/doubleball.vue'
import history from './page/history.vue'
import record from './page/record.vue'
import account from './page/account.vue'
import nameauth from './page/nameauth.vue'
import bindcard from './page/bindcard.vue'
import changePass from './page/changePass.vue'
import money from './page/money.vue'
import moneySuccess from './page/moneySuccess.vue'
import pay from './page/pay.vue'
import paySuccess from './page/paySuccess.vue'

import accountDetail from './page/accountDetail.vue'

let routes = [{
    name:'index',
    path: '/index',
    component: index,
    children: [
        {
            name: 'betbox',
            path: 'betbox',
            component: betbox,
            children: [
                {
                    name: 'betboxList',
                    path: 'betboxList',
                    component: betboxList,
                    children:[
                        {
                            name: 'betSuccess',
                            path: 'betSuccess',
                            component: betSuccess
                        }
                    ]
                }
            ]
        }
    ]
}, {
    name: 'info',
    path: '/info',
    component: info,
    children: [
        {
            name: 'doubleball',
            path: 'doubleball',
            component: doubleball,
            children: [
                {
                    name: 'history',
                    path: 'history',
                    component: history
                }
            ]
        },
    ]
}, {
    name: 'user',
    path: '/user',
    component: user,
    children: [{
        name: 'pay',
        path: 'pay',
        component: pay,
        children: [{
            name: 'paySuccess',
            path: 'paySuccess',
            component: paySuccess
        }]
    }, {
        name: 'money',
        path: 'money',
        component: money,
        children: [{
            name: 'moneySuccess',
            path: 'moneySuccess',
            component: moneySuccess
        }]
    }, {
        name: 'record',
        path: 'record',
        component: record
    }, {
        name: 'account',
        path: 'account',
        component: account
    }, {
        name: 'nameauth',
        path: 'nameauth',
        component: nameauth
    }, {
        name: 'bindcard',
        path: 'bindcard',
        component: bindcard
    }, {
        name: 'changePass',
        path: 'changePass',
        component: changePass
    }]
},{
    path: 'accountDetail',
    path: '/accountDetail',
    component: accountDetail,
},{
    path: '*',
    component: index,
}]

const router = new Vuer({
    routes: routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router;