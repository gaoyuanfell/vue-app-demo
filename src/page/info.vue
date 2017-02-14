<template>
    <div class="contener">
        <y-header title="开奖公告"></y-header>
        <div class="tabs">
            <ul class="notice_menu flex">
                <li :class="{active:index == activeIndex}" v-for="(item, index) in tabs" @click="tab(index)" class="typehot size_16">
                    <a href="Javascript:;">
                        {{ item.title}}
                    </a>
                </li>
            </ul>
            <div class="scroll-tab" v-if="activeIndex == '0'">
                <mt-loadmore bottomPullText="上拉加载更多..." :top-method="loadTop" :bottom-method="loadMore" ref="loadmore">
                    <ul class="information_list cont_padding">
                        <li class="information itemborder" v-for="ssq in result.ssq">
                            <router-link :to="{ name: 'doubleball', params: {code: ssq.opencode }}" class="flex pading">
                                    <div class="type_logo"><img src="../assets/images/leixing1.png" /></div>
                                    <div class="tyle_information margleft">
                                        <p class="typehot margbottom"><span class="size_14 typecolor">双色球</span><span>{{ssq.expect}}</span><span>{{ssq.opentime}}</span>
                                        </p>
                                        <div class="bet_cont flex">
                                            <div v-for="(num, index) in ssq.opencode.split(',')" :class="{bluebg:index==ssq.opencode.split(',').length-1}" class="size_16 red redbg numberborder">{{$last}}{{num}}</div>
                                        </div>
                                    </div>
                                    <span href="javascript:;" class="information_bg"></span>
                            </router-link>
                        </li>
                    </ul>
                <mt-loadmore>
            </div>
            <div class="scroll-tab" v-if="activeIndex == '1'">
                <mt-loadmore :top-method="loadTop" :bottom-method="loadMore" ref="loadmore">
                    <ul class="information_list cont_padding">
                        <li class="information itemborder" v-for="jjc in result.jjc">
                            <router-link :to="{ name: 'doubleball', params: {code: jjc.opencode }}" class="flex pading">
                                    <div class="type_logo"><img src="../assets/images/leixing4.png" /></div>
                                    <div class="tyle_information margleft">
                                        <p class="typehot margbottom"><span class="size_14 typecolor">竞技彩</span><span>{{jjc.expect}}</span><span>{{jjc.opentime}}</span>
                                        </p>
                                        <div class="bet_cont flex">
                                            <div v-for="(num, index) in jjc.opencode.split(',')" :class="{blue:index==jjc.opencode.split(',').length-1}" class="size_16 red redbg numberborder">{{num}}</div>
                                        </div>
                                    </div>
                                    <span href="javascript:;" class="information_bg"></span>
                            </router-link>
                        </li>
                    </ul>
                    <mt-loadmore>
            </div>
            <div class="scroll-tab" v-if="activeIndex == '2'">
                <mt-loadmore :top-method="loadTop" :bottom-method="loadMore" ref="loadmore">
                    <ul class="information_list cont_padding">
                        <li class="information itemborder" v-for="kpc in result.kpc">
                            <router-link :to="{ name: 'doubleball', params: {code: kpc.opencode }}" class="flex pading">
                                    <div class="type_logo"><img src="../assets/images/leixing1.png" /></div>
                                    <div class="tyle_information margleft">
                                        <p class="typehot margbottom"><span class="size_14 typecolor">快频彩</span><span>{{kpc.expect}}</span><span>{{kpc.opentime}}</span>
                                        </p>
                                        <div class="bet_cont flex">
                                            <div v-for="(num, index) in kpc.opencode.split(',')" :class="{blue:index==kpc.opencode.split(',').length-1}" class="size_16 red redbg numberborder">{{num}}</div>
                                        </div>
                                    </div>
                                    <span href="javascript:;" class="information_bg"></span>
                            </router-link>
                        </li>
                    </ul>
                    <mt-loadmore>
            </div>
        </div>
        <transition name="custom-classes-transition" enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import result from '../data.js';
    import header from '../components/header.vue';
    import footer from '../components/footer.vue';
    import Vue from 'vue';
    import {
        Loadmore
    } from 'mint-ui';
    Vue.component(Loadmore.name, Loadmore);
    export default {
        components: {
            'y-footer': footer,
            'y-header': header,
        },
        data() {
            return {
                currentpage: {
                    ssq: 0,
                    jjc: 0,
                    kpc: 0
                },
                maxPage: {
                    ssq: 1,
                    jjc: 1,
                    kpc: 1
                },
                allResult: null,
                result: {
                    source: result,
                    ssq: result.ssq.data.slice(10),
                    jjc: result.jjc.data.slice(10),
                    kpc: result.kpc.data.slice(10),
                },
                activeIndex: 0,
                tabs: [{
                    title: '双色球'
                }, {
                    title: '竞技彩'
                }, {
                    title: '快频彩'
                }]
            }
        },
        methods: {
            tab(index) {
                this.activeIndex = index;
            },
            loadTop() {
                switch (this.activeIndex) {
                    case 0:
                        this.result.ssq = this.result.source.ssq.data.slice(Math.floor(Math.random() * 4), 15).sort()
                        break;
                    case 1:
                        this.result.jjc = this.result.source.jjc.data.slice(Math.floor(Math.random() * 4), 15).reverse()
                        break;
                    case 2:
                        this.result.kpc = this.result.source.kpc.data.slice(Math.floor(Math.random() * 4), 15).sort()
                        break;
                }
                this.$refs.loadmore.onTopLoaded()
            },
            loadMore() {
                switch (this.activeIndex) {
                    case 0:
                        this.currentpage.ssq++
                            if (this.currentpage.ssq == this.maxPage.ssq) {
                                this.result.ssq = this.result.ssq.concat(this.result.source.ssq.data.slice(10, 20))
                            }
                        this.currentpage.ssq = 0
                        break;
                    case 1:
                        this.currentpage.jjc++
                            if (this.currentpage.jjc == this.maxPage.jjc) {
                                this.result.jjc = this.result.jjc.concat(this.result.source.jjc.data.slice(10, 20))
                            }
                        this.currentpage.ssq = 0
                        break;
                    case 2:
                        this.currentpage.kpc++
                            if (this.currentpage.kpc == this.maxPage.kpc) {
                                this.result.kpc = this.result.kpc.concat(this.result.source.kpc.data.slice(10, 20))
                            }
                        this.currentpage.ssq = 0
                        break;
                }
                this.$refs.loadmore.onBottomLoaded();
            }
        }
    }
</script>