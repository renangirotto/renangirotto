<script setup>
import { reactive } from 'vue';

const props = defineProps({
  title: String,
  subTitle: String,
  color: String
})


const sectionClasses = reactive({
  "section": true,
  [`section--${props.color}`]: props.color
})

</script>

<template>
  <section :class="sectionClasses">
    <header>
      <h2 class="section__title">{{props.title}}</h2>
      <h3 v-if="props.subTitle" class="section__title--small">{{props.subTitle}}</h3>
    </header>
    <div class="section__content">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss">
.section {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &:not(:last-child) {
    margin-bottom: 7rem;
  }

  &__title {
    padding-left: 1rem;
    border-left: 0.25rem solid;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.2;
    color: $color-foreground;

    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }

    &--small {
      @extend .section__title;
      border: none;
      padding: 0;
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  &--cyan {
    .section__title {
      border-color: $color-cyan;
    }

    .section__title--small {
      color: $color-cyan;
    }
  }

  &--orange {
    .section__title {
      border-color: $color-orange;
    }

    .section__title--small {
      color: $color-orange;
    }
  }

  &--red {
    .section__title {
      border-color: $color-red;
    }

    .section__title--small {
      color: $color-red;
    }
  }
}
</style>
