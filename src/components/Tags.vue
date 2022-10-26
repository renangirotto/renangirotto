<script setup>

const props = defineProps({
  tags: []
})

</script>

<template>
  <ul v-if="tags?.length" class="tags">
    <li v-for="item in tags" class="tags__tag">{{item.name}}</li>
  </ul>
</template>

<style lang="scss">
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  &__tag {
    border-radius: 0.25rem;
    padding: 0.75rem;
    font-weight: 600;
    font-size: 1.10rem;
    color: $color-background;
    background: $color-cyan;
  }
}
</style>