<template>
	<div class="demo-component">Demo Component {{done}}</div>
</template>

<style lang="scss">
.demo-component {
	font-size: 20px;
	color: #f66;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Demo extends Vue {
	@Prop({
		default: "Done",
		type: String
	})
	done!: string
};
</script>