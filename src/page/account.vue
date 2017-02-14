<template>
	<div class="contener" :style="{'zIndex':zIndex}">
		<y-header title="账户明细" router="/user"></y-header>
		<div class="tabs">
			<ul class="detailed_menu flex">
				<li class="size_16 border_right">
					<p class="typecolor">可用余额</p>
					<p class="numberred">2.00元</p>
				</li>
				<li class="size_16 border_right">
					<p class="typecolor">冻结金额</p>
					<p class="numberred">0.00元</p>
				</li>
				<li class="size_16">
					<p class="typecolor">账户余额</p>
					<p class="numberred">2.00元</p>
				</li>
			</ul>
			<ul class="notice_menu flex">
				<li class="typehot size_16 active"><a href="JavaScript:;">数字彩</a></li>
				<li class="typehot size_16"><a href="JavaScript:;">竞技彩</a></li>
				<li class="typehot size_16"><a href="JavaScript:;">快频彩</a></li>
			</ul>
			<!--以上是tab菜单-->
			<div class="detail_list scroll-tab cont_padding" style="top: 1.52rem;bottom: 0;">
				<div class="detail_item itemborder">
					<p class="size_14 typecolor flex">
						<span>投注支出</span>
						<span>-2.00元</span>
					</p>
					<p class="typehot">2016-12-09 15:40</p>
				</div>
				<div class="detail_item itemborder">
					<p class="size_14 typecolor flex">
						<span>公司优惠活动</span>
						<span class="numberred">3.00元</span>
					</p>
					<p class="typehot">2016-12-09 15:40</p>
				</div>
				<div class="detail_item itemborder">
					<p class="size_14 typecolor flex">
						<span>投注支出</span>
						<span>-2.00元</span>
					</p>
					<p class="typehot">2016-12-09 15:40</p>
				</div>
				<div class="detail_item">
					<p class="size_14 typecolor flex">
						<span>公司优惠活动</span>
						<span class="numberred">3.00元</span>
					</p>
					<p class="typehot">2016-12-09 15:40</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import header from '../components/header.vue';
	export default {
		components: {
			'y-header': header,
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