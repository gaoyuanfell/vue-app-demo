<template>
    <div class="contener" :style="{'zIndex':zIndex}">
        <y-header title="双色球" r_title="历史开奖信息" router="/info" r_router="/info/doubleball/history"></y-header>
        <div class="notice_content body_overflow">
            <ul class="information_list no-bgimg cont_padding">
                <li class="information flex itemborder">
                    <a href="javascript:;" class="flex pading">
                        <div class="type_logo"><img src="../assets/images/leixing1.png" /></div>
                        <div class="tyle_information margleft">
                            <p class="typehot margbottom"><span class="size_14 typecolor">双色球</span><span>第16337期</span><span>2016/11/18&nbsp;20:40（周三）</span></p>
                            <div class="bet_cont flex">
                                <div v-for="(num, index) in code" :class="{blue:index==code.length-1}" class="size_16 red redbg auto_clear">{{num}}</div>
                            </div>
                        </div>                        
                    </a>
                </li>
                <div class="number">
                    <p class="typecolor size_14">奖池金额：<span class="red">1,024,556,668</span>元</p>
                    <p class="typecolor size_14">本期销量：<span class="red">624,556,668</span>元</p>
                </div>
            </ul>
            <div class="history_table size_14 typecolor">
                <div class="table_title flex">
                    <div class="title_item">奖项</div>
                    <div class="title_item">注数</div>
                    <div class="title_item">单注金额</div>
                </div>
                <div class="table_body">
                    <div class="content_item flex">
                        <div class="cols_first flex border_right border_top">
                            <div class="col_first border_right">一等奖</div>
                            <div class="col_second">
                                <div class="row_first itemborder">基本</div>
                                <div class="row_second">追加</div>
                            </div>
                        </div>
                        <div class="cols_second border_right border_top">
                            <div class="row_first itemborder">3</div>
                            <div class="row_second">-</div>
                        </div>
                        <div class="cols_three border_top">
                            <div class="row_first itemborder red">10,000,000.00</div>
                            <div class="row_second red">-</div>
                        </div>
                    </div>
                    <div class="content_item flex">
                        <div class="cols_first flex border_right border_top">
                            <div class="col_first border_right">二等奖</div>
                            <div class="col_second">
                                <div class="row_first itemborder">基本</div>
                                <div class="row_second">追加</div>
                            </div>
                        </div>
                        <div class="cols_second border_right border_top">
                            <div class="row_first itemborder">75</div>
                            <div class="row_second">-</div>
                        </div>
                        <div class="cols_three border_top">
                            <div class="row_first itemborder">113,410.00</div>
                            <div class="row_second">-</div>
                        </div>
                    </div>
                    <div class="content_item flex">
                        <div class="cols_first flex border_right border_top">
                            <div class="col_first border_right">三等奖</div>
                            <div class="col_second">
                                <div class="row_first itemborder">基本</div>
                                <div class="row_second">追加</div>
                            </div>
                        </div>
                        <div class="cols_second border_right border_top">
                            <div class="row_first itemborder">1465</div>
                            <div class="row_second">-</div>
                        </div>
                        <div class="cols_three border_top">
                            <div class="row_first itemborder">1,892.00</div>
                            <div class="row_second">-</div>
                        </div>
                    </div>
                </div>
            </div>
            <!--以上是奖励表-->
        </div>
        <transition name="custom-classes-transition" enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
            <router-view></router-view>
        </transition>
    </div>
</template>
<style>
.heading > .title_right > a{
    color: #fff !important;
}
</style>
<script>
    import { mapGetters } from 'vuex';
    import header from '../components/header.vue';
    import footer from '../components/footer.vue';
    export default {
        components: {
            'y-footer': footer,
            'y-header': header,
        },
        data() {
            return {
                code: []
            }
        },
        created: function () {
            this.code = (this.$route.params.code.split(','))
        },
        computed:{
            ...mapGetters({
                zIndex: 'getZindex'
            })
        }
    }
</script>