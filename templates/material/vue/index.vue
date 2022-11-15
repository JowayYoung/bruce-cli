<template>
	<div className="demo-component">Demo Component {{done}}</div>
</template>

<style lang="scss">
.demo-component {
	font-size: 20px;
	color: #f66;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "demo",
	props: {
		done: {
			default: "Done",
			type: String
		}
	}
});
</script>