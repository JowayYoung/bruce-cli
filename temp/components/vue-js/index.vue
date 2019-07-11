<template>
	<div class="demo-component">Demo Component {{done}}</div>
</template>

<style lang="scss">
.demo-component {
	font-size: 20px;
	color: #f66;
}
</style>

<script>
export default {
	name: "demo",
	props: {
		done: {
			default: "Done",
			type: String
		}
	}
};
</script>