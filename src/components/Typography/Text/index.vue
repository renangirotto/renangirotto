<script setup>
import { reactive } from "vue";

const props = defineProps({
  weight: String,
  tag: {
    type: String,
    default: "p",
  },
});

const textClasses = reactive({
  [`text--${props.weight}`]: props.weight,
});
</script>

<template>
  <props.tag class="text" :class="textClasses">
    <slot></slot>
  </props.tag>
</template>

<style lang="scss" scoped>
.text {
  font-weight: $font-weight-semi-bold;
  font-size: $font-size-xs;
  line-height: $line-height-sm;
}
</style>
