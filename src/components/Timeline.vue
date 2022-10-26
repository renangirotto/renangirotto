<script setup>
import { reactive } from 'vue';

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
    <li v-for="item in props.timeline" class="timeline__item">
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

    &:not(:last-child) {
      margin-bottom: 3.5rem;
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

  a {
    text-decoration: none;
  }

  &--orange {
    .timeline__year,
    .timeline__title {
      color: $color-orange;
    }
  }

  &--red {
    .timeline__year,
    .timeline__title {
      color: $color-red;
    }
  }
}

</style>