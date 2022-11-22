<script setup>
import { reactive } from 'vue';

import { MOTION_CONTENT_INITIAL, MOTION_CONTENT_VISIBLE } from "../constants"

const props = defineProps({
  timeline: [],
  color: String
})

const timelineClasses = reactive({
  "timeline": true,
  [`timeline--${props.color}`]: props.color
})
</script>

<template>
  <ul :class="timelineClasses">
    <li 
      v-for="item in props.timeline" 
      class="timeline__item"
      v-motion
      :initial="MOTION_CONTENT_INITIAL"
      :visibleOnce="MOTION_CONTENT_VISIBLE"
    >
      <div v-if="item.year" class="timeline__year">
        {{item.year}}
      </div>
      <div>
        <h3 class="timeline__title">{{item.title}}</h3>
        <h4 class="timeline__subTitle">{{item.subTitle}}</h4>
        <p v-if="item.tags.type === 'text'" class="timeline__tags">
          {{item.tags.content}}
        </p>
        <ul v-else class="timeline__tags">
          <li v-for="tag in item.tags.content">
            {{tag}}
          </li>
        </ul>
        <a v-if="item.link" :href="item.link.href" target="_blank">{{item.link.beauty}}</a>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">

.timeline {
  &__item {
    position: relative;
    padding-inline-end: 2.5rem;

    &:before, &:after {
      background: $color-current-line;
    }

    &::after {
      content: "";
      display: block;
      width: 0.25rem;
      height: calc(100% + 3.5rem);
      position: absolute;
      top: 0;
      right: 0;
    }

    &:not(:last-child) {
      margin-bottom: 3.5rem;
    }

    &:first-child {
      &::before {
        content: "";
        display: block;
        width: 2rem;
        height: 0.25rem;
        position: absolute;
        top: 20px;
        right: 0;
      }

      &::after {
        height: calc(100% + 3.5rem - 20px);
        position: absolute;
        top: 20px;
      }
    }

    &:last-child {
      &::before {
        content: "";
        display: block;
        width: 2rem;
        height: 0.25rem;
        position: absolute;
        bottom: 10px;
        right: 0;
      }

      &::after {
        height: calc(100% - 10px);
        position: absolute;
        top: 0;
      }
    }
  }

  &__year {
    font-weight: 700;
    font-size: 2.5rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 1.25rem;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &__subTitle {
    font-size: 1.5rem;
    line-height: 1.2;
    color: $color-foreground;

    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }

  &__tags, a {
    font-size: 1.1rem;
    line-height: 1.5;
    color: $color-comment;

    &:not(:last-child) {
      margin-bottom: 0.25rem;
    }
  }

  &--orange {
    .timeline__year,
    .timeline__title {
      color: $color-orange;
    }

    .timeline__item {
      &:first-child {
        &:before, &::after {
        background: $color-orange;
      }
      }
    }
  }

  &--red {
    .timeline__year,
    .timeline__title {
      color: $color-red;
    }

    .timeline__item {
      &:first-child {
        &:before, &::after {
        background: $color-red;
      }
      }
    }
  }
}

</style>