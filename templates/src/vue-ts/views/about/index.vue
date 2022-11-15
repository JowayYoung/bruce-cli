<template>
	<div class="about-view">
		<img v-show="tab === 0" class="about-qrcode" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03bcc13d83524f9eb8a61a1cab0543af~tplv-k3u1fbpfcp-watermark.image">
		<img v-show="tab === 1" class="about-qrcode" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9a7e606f0ca4cf58c2262f6c16e3464~tplv-k3u1fbpfcp-watermark.image">
		<button class="about-btn center" @click="setTab">查看{{tab === 0 ? "公众号" : "微信"}}</button>
	</div>
</template>

<style lang="scss">
.about {
	&-view {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 3vmin;
		min-height: 30vmin;
	}
	&-qrcode {
		border-radius: 1vmin;
		width: 80vmin;
		max-width: 300px;
	}
	&-btn {
		margin-top: 3vmin;
		padding: 0 2vmin;
		border: none;
		border-radius: 1vmin;
		height: 5vmin;
		background-color: #f66;
		cursor: pointer;
		font-size: 3vmin;
		color: #fff;
	}
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "about",
	setup(): object {
		const tab = ref<number>(0);
		const setTab = (): void => {
			tab.value = tab.value === 0 ? 1 : 0;
		};
		return { setTab, tab };
	}
});
</script>