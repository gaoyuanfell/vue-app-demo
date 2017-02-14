<template>
    <div class="contener" :style="{'zIndex':zIndex}">
        <y-header title="双色球" r_title="玩法" :router="bet_router"></y-header>
        <div class="scroll-content">
            <div class="betting_content">
                <div class="tyle_information">
                    <p class="stop_prompt typehot margbottom itemborder"><span class="size_14 typecolor">第2016-145期</span><span>2016/12/11&nbsp;19:40:00&nbsp;截止</span></p>
                </div>
                <div class="select_number cont_padding">
                    <div class="red_ball">
                        <div class="flex title_notice">
                            <div class="typecolor size_14">至少选择6个<span class="red size_14">红球</span></div>
                            <a href="javascript:;" class="machine_elects" @click="changeBet()">
                                <span class="size_14">机选</span>
                            </a>
                        </div>
                        <div class="ball_cont pading itemborder" @click="selectBet($event,1)">
                            <a v-for="red in bet_red_list" v-text="red" :num="red" href="javacript:;" class="ballsize whitebg size_16 numberborder" 
                            :class="{'deepred':doubleBet[0].indexOf(red) != -1,'red':doubleBet[0].indexOf(red) == -1}">
                            </a>
                        </div>
                    </div>
                    <!--以上是选择红球-->
                    <div class="blue_ball">
                        <div class="flex title_notice">
                            <div class="typecolor size_14">至少选择1个<span class="red size_14">蓝球</span></div>
                        </div>
                        <div class="ball_cont pading itemborder" @click="selectBet($event,2)">
                            <a v-for="blue in bet_blue_list" v-text="blue" :num="blue" href="javacript:;" class="ballsize whitebg size_16 numberborder" 
                            :class="{'deepblue':doubleBet[1].indexOf(blue) != -1,'blue':doubleBet[1].indexOf(blue) == -1}">
                            </a>
                        </div>
                    </div>
                    <!--以上是选择蓝球-->
                </div>
                <!--以上是选择号-->
            </div>
        </div>
        <div class="foot_menu select_complete flex">
            <a @click="clearBet()" href="javascript:;" class="delect"><span></span></a>
            <div class="have_cast size_14 typecolor">已选
                <span v-text="getBetLength"></span>注
                <span class="numberred" v-text="getBetLength * 2"></span>元
            </div>
            <a href="javascript:;" @click="goBetboxList()" class="complete size_18">确定</a>
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
import { mapGetters,mapMutations } from 'vuex';
import header from '../components/header.vue';

export default {
    components:{
        'y-header':header
    },
    data(){
        return {
            doubleBet:{0:[],1:[]},
            bet_red_list:[],
            bet_blue_list:[],
            bet_router:'/index'
        }
    },
    created:function(){
        let params = this.$route.params;
        let bet_router = params.router;
        this.bet_router = bet_router || '/index';
    },
    updated:function(){
        
    },
    mounted:function(){
        for(let i = 1; i < 34; i++){
            this.bet_red_list.push(i);
        }
        for(let i = 1; i < 17; i++){
            this.bet_blue_list.push(i);
        }
    },
    computed:{
        ...mapGetters({
            zIndex: 'getZindex',
            doubleBet: 'getDoubleBet',
            getBetLength:'getDoubleBetLength'
        })
    },
    activated:function(){
        
    },
    methods:{
        changeBet:function(){
            let arr1 = [];
            let arr2 = [];
            for (let j = 0; j < 6; j++) {
                let _num = Math.floor(Math.random() * 33) + 1;
                while (arr1.indexOf(_num) != -1) {
                    _num = Math.floor(Math.random() * 33) + 1;
                }
                arr1.push(_num);
            }
            arr1 = arr1.sort((a, b) => {
                return a - b
            })
            let _num = Math.floor(Math.random() * 16) + 1;
            arr2.push(_num);
            this.$store.commit('updateDoubleBet',{
                0:arr1,
                1:arr2
            });
        },
        clearBet:function(){
            this.$store.commit('updateDoubleBet',{0:[],1:[]});
        },
        goBetboxList:function(){
            let b = this.doubleBet[0].length;
            let r = this.doubleBet[1].length;
            let $index = this.$route.params.$index;
            let bet = {
                0:this.doubleBet[0].sort( (a,b) => { return a - b } ),
                1:this.doubleBet[1].sort( (a,b) => { return a - b } )
            }

            if( b >= 6 && r >= 1 || b == 0 && r == 0 ){
                if($index != undefined){
                    if(b >= 6 && r >= 1){
                        this.$store.commit('updateNotesList',{$index:$index,bet:bet});
                    }else{
                        this.$store.commit('removeNotesList',$index);
                    }
                }else{
                    this.$store.commit('addNotesList',bet);
                }
                this.$router.push({
                    name: 'betboxList',
                    path: '/betboxList'
                })
            }
        },
        selectBet:function(e,type){
            let t = e.target;
            let index;
            let num = t.getAttribute('num');
            if(isNaN(parseInt(num)))return;
            switch(type){
                case 1:
                    index = this.doubleBet[0].indexOf(+num);
                    if(index == -1){
                        this.doubleBet[0].push(+num);
                    }else{
                        this.doubleBet[0].splice(index, 1);
                    }
                break;
                case 2:
                    index = this.doubleBet[1].indexOf(+num);
                    if(index == -1){
                        this.doubleBet[1].push(+num);
                    }else{
                        this.doubleBet[1].splice(index, 1);
                    }
                break;
            }
        }
    }
    
}
</script>

