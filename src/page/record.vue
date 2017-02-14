<template>
    <div class="contener" :style="{'zIndex':zIndex}">
        <y-header title="投注记录" router="/user"></y-header>
        <div class="tabs">
            <div class="record_select">
                <ul>
                    <li :class="{active:index == activeIndex}" v-for="(item, index) in tabs" @click="tab(index)">
                        <a href="Javascript:;">
                        {{ item.title}}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="scroll-tab botoom_0" v-if="activeIndex == '0'">
                <mt-loadmore bottomPullText="上拉加载更多..." :top-method="loadTop" :bottom-method="loadMore" ref="loadmore">
                    <ul class="information_list cont_padding">
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="information flex itemborder">
                            <div class="tyle_information pading">
                                <img src="../assets/images/leixing1.png">
                                <div class="content_info">
                                    <div class="content_top">
                                        <p style="float: left;">等待开奖</p>
                                        <p style="float: right;">[双色球]</p>
                                    </div>
                                    <div class="content_bottom">
                                        <p style="float: left;">2016-11-18 15:40</p>
                                        <p style="float: right;">投注2.00元</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <mt-loadmore>
            </div>
            <div class="scroll-tab botoom_0" v-if="activeIndex == '1'">
                <mt-loadmore bottomPullText="上拉加载更多..." :top-method="loadTop" :bottom-method="loadMore" ref="loadmore">
                    <mt-loadmore>
            </div>
            <div class="scroll-tab botoom_0" v-if="activeIndex == '2'">
                <mt-loadmore bottomPullText="上拉加载更多..." :top-method="loadTop" :bottom-method="loadMore" ref="loadmore">
                    <mt-loadmore>
            </div>
            <div class="scroll-tab botoom_0" v-if="activeIndex == '3'">
                <mt-loadmore bottomPullText="上拉加载更多..." :top-method="loadTop" :bottom-method="loadMore" ref="loadmore">
                    <mt-loadmore>
            </div>
        </div>
    </div>
</template>
<style>
    .record_select>ul {
        background: #fff;
    }
</style>
<script>
    import { mapGetters } from 'vuex';
    import result from '../data.js';
    import header from '../components/header.vue'
    import Vue from 'vue'
    import {
        Loadmore
    } from 'mint-ui';
    Vue.component(Loadmore.name, Loadmore);
    export default {
        components: {
            'y-header': header,
        },
        data() {
            return {
                zIndex: 0,
                activeIndex: 0,
                tabs: [{
                    title: '全部',
                }, {
                    title: '中奖'
                }, {
                    title: '待开奖'
                }, {
                    title: '未成功'
                }],
                result: {
                    source: result
                }
            }
        },
        methods: {
            tab(index) {
                this.activeIndex = index;
            },
            loadTop() {
                this.$refs.loadmore.onTopLoaded()
            },
            loadMore(){
                console.log(1)
            }
        },
        created: function () {
            
        },
        computed:{
            ...mapGetters({
                zIndex: 'getZindex'
            })
        }
    }
</script>