<template>
    <div class="contener" :style="{'zIndex':zIndex}">
        <y-header title="历史开奖信息" router="/info/doubleball"></y-header>
        <div class="notice_content overflow">
            <ul class="information_list no-bgimg cont_padding">
                <li class="information flex itemborder">
                    <div class="tyle_information pading">
                        <p class="typehot margbottom"><span class="size_14 typecolor">第16337期</span><span>2016/11/18&nbsp;15:40（周五）</span></p>
                        <div class="bet_cont flex">
                            <div class="size_16 deepred_bg white auto_clear">02</div>
                            <div class="size_16 deepred_bg white auto_clear">14</div>
                            <div class="size_16 deepred_bg white auto_clear">16</div>
                            <div class="size_16 deepred_bg white auto_clear">23</div>
                            <div class="size_16 deepred_bg white auto_clear">26</div>
                            <div class="size_16 deepred_bg white auto_clear">32</div>
                            <div class="size_16 deepblue_bg white margin_none auto_clear">06</div>
                        </div>
                    </div>
                </li>
                <li class="information flex itemborder">
                    <div class="tyle_information pading">
                        <p class="typehot margbottom"><span class="size_14 typecolor">第16145期</span><span>2016/12/09&nbsp;21:30（周五）</span></p>
                        <div class="bet_cont flex">
                            <div class="size_16 deepred_bg white auto_clear">7</div>
                            <div class="size_16 deepred_bg white auto_clear">2</div>
                            <div class="size_16 deepred_bg white auto_clear">1</div>
                            <div class="size_16 deepred_bg white auto_clear">3</div>
                            <div class="size_16 deepred_bg white auto_clear">0</div>
                            <div class="size_16 deepred_bg white auto_clear">2</div>
                            <div class="size_16 deepblue_bg white margin_none auto_clear">1</div>
                        </div>
                    </div>
                </li>
                <li class="information flex itemborder">
                    <div class="tyle_information pading">
                        <p class="typehot margbottom"><span class="size_14 typecolor">第16336期</span><span>2016/12/18&nbsp;20:40（周三）</span></p>
                        <div class="bet_cont flex">
                            <div class="size_16 deepred_bg white auto_clear">7</div>
                            <div class="size_16 deepred_bg white auto_clear">2</div>
                            <div class="size_16 deepred_bg white auto_clear">1</div>
                            <div class="size_16 deepred_bg white auto_clear">3</div>
                            <div class="size_16 deepred_bg white auto_clear">0</div>
                            <div class="size_16 deepred_bg white auto_clear">2</div>
                            <div class="size_16 deepblue_bg white margin_none auto_clear">1</div>
                        </div>
                    </div>
                </li>
                <li class="information flex itemborder">
                    <div class="tyle_information pading">
                        <p class="typehot margbottom"><span class="size_14 typecolor">第16336期</span><span>2016/12/18&nbsp;20:40（周三）</span></p>
                        <div class="bet_cont flex">
                            <div class="size_16 deepred_bg white auto_clear">7</div>
                            <div class="size_16 deepred_bg white auto_clear">2</div>
                            <div class="size_16 deepred_bg white auto_clear">1</div>
                            <div class="size_16 deepred_bg white auto_clear">3</div>
                            <div class="size_16 deepred_bg white auto_clear">0</div>
                            <div class="size_16 deepred_bg white auto_clear">2</div>
                            <div class="size_16 deepblue_bg white margin_none auto_clear">1</div>
                        </div>
                    </div>
                </li>
            </ul>
            <!--以上是开奖历史查看-->
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import result from '../data.js';
    import header from '../components/header.vue';
    import footer from '../components/footer.vue';

    export default {
        components: {
            'y-footer': footer,
            'y-header': header
        },
        data() {
            return {
                
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