<template>
	<div class="home-view">
		<p class="home-desc">How to configure this <strong class="home-tag vue">Vue</strong> project</p>
		<p class="home-desc">Please check the <a class="home-link gradient-color" href="https://jowayyoung.github.io/bruce/app" target="_blank" rel="noreferrer">bruce-app doc</a></p>
	</div>
</template>

<style lang="scss">
.home {
	&-view {
		margin-top: 3vmin;
		min-height: 30vmin;
	}
	&-desc {
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 1.5;
		font-size: 5vmin;
		color: #fff;
	}
	&-tag {
		margin: 0 1vmin;
		padding: 0 2vmin;
		border-radius: 1vmin;
		height: 6vmin;
		line-height: 6vmin;
		&.js {
			background-color: #f66;
		}
		&.react {
			background-color: #61dafb;
		}
		&.vue {
			background-color: #42b983;
		}
	}
	&-link {
		margin: 0 1vmin;
	}
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "home"
});
</script>