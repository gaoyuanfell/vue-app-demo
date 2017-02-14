<template>
<div>
    <router-view></router-view>
    <y-footer></y-footer>
</div>
</template>

<script>
import header from './components/header.vue';
import footer from './components/footer.vue';
export default {
    components:{
		'y-footer': footer,
		'y-header': header,
	}
}
</script>
