<script setup>
import { reactive, ref } from "vue";

const wasClicked = ref(false);
const buttonClasses = reactive({
  ["button--clicked"]: wasClicked,
});

const handleClickAnimation = (event) => {
  event.stopPropagation();
  wasClicked.value = true;

  setTimeout(() => {
    wasClicked.value = false;
  }, 350);
};
</script>

<template>
  <button
    class="button"
    :class="buttonClasses"
    @click="(event) => handleClickAnimation(event)"
  >
    <span class="button__content">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: calc($spacing-3 / 2) $spacing-3;
  border: $border-style-default;
  border-radius: $border-radius-05;
  position: relative;
  top: 0px;
  left: 0px;
  font-family: $font-family-raleway;
  font-weight: $font-weight-semi-bold;
  font-size: $font-size-sm;
  background-color: $color-white;
  background: linear-gradient(0deg, red 0%, white 0%);
  box-shadow: $spacing-1 $spacing-1 0px #000000;
  cursor: pointer;
  transition: all 0.25s;

  &__content {
    position: relative;
    z-index: 1;
  }

  &:hover {
    &::before {
      height: 100%;
    }
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 0%;
    position: absolute;
    z-index: 0;
    left: 0;
    bottom: 0;
    background: $color-red;
    transition: 0.25s;
  }

  &--clicked {
    animation: click 0.35s forwards;
  }

  @keyframes click {
    0% {
      top: 0px;
      left: 0px;
      box-shadow: $spacing-1 $spacing-1 0px #000000;
    }
    50% {
      top: 2px;
      left: 2px;
      box-shadow: calc($spacing-1 / 2) calc($spacing-1 / 2) 0px #000000;
    }
    100% {
      top: 0px;
      left: 0px;
      box-shadow: $spacing-1 $spacing-1 0px #000000;
    }
  }
}
</style>
