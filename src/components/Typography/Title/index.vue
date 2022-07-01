<script setup>
const props = defineProps({
  tag: {
    type: String,
    default: "h1",
  },
});

</script>

<template>
  <props.tag class="title">
    <slot></slot>
  </props.tag>
</template>

<style lang="scss" scoped>
.title {
  font-family: $font-family-fascinate;
  font-size: $font-size-xxl;
  line-height: $line-height-xxl;

  &--semi-bold {
    font-weight: $font-weight-semi-bold;
  }
}
</style>
