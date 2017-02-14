<template>
    <div class="contener">
        <y-header title="彩票"></y-header>
        <div class="scroll-content">
            <div class="banner">
                <mt-swipe :show-indicators="true" :auto="0">
                    <mt-swipe-item>
                        <img src="../assets/images/banner.jpg"/>
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../assets/images/banner.jpg"/>
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="../assets/images/banner.jpg"/>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="bet_luckynumber cont_padding">
                <div class="bet_title itemborder flex">
                    <div class="head menucolor">
                        <span class="typecolor">【双色球】</span>2元赢千万大奖！等你来战！
                    </div>
                    <div class="head_right" @click="changeNotes">
                        <a href="javascript:;" class="typehot">换一注</a>
                    </div>
                </div>
                <div class="bet_cont flex" id="index_number_box">
                    <div class="lucky_number size_16 red numberborder ballsize">08</div>
                    <div class="lucky_number size_16 red numberborder ballsize">09</div>
                    <div class="lucky_number size_16 red numberborder ballsize">16</div>
                    <div class="lucky_number size_16 red numberborder ballsize">18</div>
                    <div class="lucky_number size_16 red numberborder ballsize">28</div>
                    <div class="lucky_number size_16 red numberborder ballsize">32</div>
                    <div class="lucky_number size_16 blue margin_none numberborder ballsize">08</div>
                </div>
                <div class="bet_button">
                    <a href="javascript:;" class="size_14 bet_submit" @click="luckSubmin()">投注幸运号</a>
                </div>
            </div>
            <!--以上是投注幸运号-->
            <div class="type_content cont_padding">
                <ul @click="changePromptState($event)">
                    <li class="item_menu flex itemborder">
                        <div class="item" data-type="1">
                            <img src="../assets/images/leixing1.png"/>
                            <p class="typecolor size_14">双色球</p>
                            <p class="typehot">奖池5000元</p>
                        </div>
                        <div class="item">
                            <img src="../assets/images/leixing2.png"/>
                            <p class="typecolor size_14">大乐透</p>
                            <p class="typehot">喜迎千万大奖</p>
                        </div>
                        <div class="item">
                            <img src="../assets/images/leixing3.png"/>
                            <p class="typecolor size_14">七星彩</p>
                            <p class="typehot">奖池2000元</p>
                        </div>
                        <div class="item margin_none">
                            <img src="../assets/images/leixing4.png"/>
                            <p class="typecolor size_14">七乐彩</p>
                            <p class="typehot">富翁生产线</p>
                        </div>
                    </li>
                    <li class="item_menu flex itemborder">
                        <div class="item">
                            <img src="../assets/images/leixing21.png"/>
                            <p class="typecolor size_14">竞彩篮球</p>
                            <p class="typehot">火热NBA</p>
                        </div>
                        <div class="item">
                            <img src="../assets/images/leixing22.png"/>
                            <p class="typecolor size_14">竞猜篮球</p>
                            <p class="typehot">热门赛事竞猜</p>
                        </div>
                        <div class="item">
                            <img src="../assets/images/leixing23.png"/>
                            <p class="typecolor size_14">福彩3D</p>
                            <p class="typehot">轻松三个数</p>
                        </div>
                        <div class="item margin_none">
                            <img src="../assets/images/leixing24.png"/>
                            <p class="typecolor size_14">北京单场</p>
                            <p class="typehot">北京单场竞猜</p>
                        </div>
                    </li>
                    <li class="item_menu flex itemborder">
                        <div class="item">
                            <img src="../assets/images/leixing31.png"/>
                            <p class="typecolor size_14">排列三</p>
                            <p class="typehot">每天博头彩</p>
                        </div>
                        <div class="item">
                            <img src="../assets/images/leixing32.png"/>
                            <p class="typecolor size_14">排列五</p>
                            <p class="typehot">每天开大奖</p>
                        </div>
                        <div class="item">
                            <img src="../assets/images/leixing33.png"/>
                            <p class="typecolor size_14">任选九</p>
                            <p class="typehot">最高赢500万</p>
                        </div>
                        <div class="item margin_none">
                            <img src="../assets/images/leixing34.png"/>
                            <p class="typecolor size_14">胜负彩</p>
                            <p class="typehot">2元赢500万</p>
                        </div>
                    </li>
                    <li class="item_menu flex itemborder border_none">
                        <div class="item">
                            <img src="../assets/images/leixing41.png"/>
                            <p class="typecolor size_14">新11选5</p>
                            <p class="typehot">超高中奖率</p>
                        </div>
                        <div class="item">
                            <img src="../assets/images/leixing42.png"/>
                            <p class="typecolor size_14">其他</p>
                            <p class="typehot">其他</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="error_prompt size_16" v-if="promptState">抱歉，该品种暂停购买</div>
        </div>
        <transition
        name="custom-classes-transition"
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        >
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import header from '../components/header.vue';

import Vue from 'vue';
import { mapGetters,mapMutations } from 'vuex';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
    components:{
        'y-header':header
    },
    data(){
        return {
			promptState:false
        }
    },
	beforeCreate:function(){
		/*Indicator.open({
			text: '加载中...',
			spinnerType: 'fading-circle'
		});*/
	},
	beforeMount:function(){
		
	},
	mounted:function(){
        this.changeNotes();
	},
    computed:{
        ...mapGetters({
            notes:'getNotes'
        })
    },
	methods:{
        ...mapMutations({
            changeNotes:'changeNotes'
        }),
        luckSubmin:function(){
            this.$store.commit('distroyNotesList')
            this.$store.commit('addNotesList',this.notes)
            this.$router.push({
                name:'betboxList'
            })
        },
		changePromptState:function(e){
			let target = e.target;
			if(target.nodeName != 'DIV'){
				target = target.parentNode
			}
            if(!target.classList.contains('item'))return;
			let type = target.getAttribute('data-type');
			if(type == 1){
				this.$router.push({
					name:'betbox',
					path:'/betbox'
				});
			}else{
				if(this.promptState){return;}
				this.promptState = true;
				setTimeout(() =>{
					this.promptState = false;
				},2000)
			}
		}
	}
}

</script>
