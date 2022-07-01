<script setup>
import Text from "@/components/Typography/Text/index.vue";
import Title from "@/components/Typography/Title/index.vue";
import Button from "@/components/Button/index.vue";
</script>

<template>
  <section class="home">
    <div class="home__frame">
      <div class="home__content">
        <Text>Olá, sou o Renan,</Text>
        <Title>Um Desenvolvedor Front-end</Title>
        <Text>trabalhando de casa aqui em São Paulo, Brasil!</Text>
      </div>
      <span class="home__edges--left" aria-hidden="true"></span>
      <span class="home__edges--right" aria-hidden="true"></span>
      <span class="home__bullets--left-right" aria-hidden="true"></span>
      <span class="home__bullets--top-bottom" aria-hidden="true"></span>
    </div>
    <Button>Clica aqui!</Button>
  </section>
</template>

<style lang="scss">
.home {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: $color-white;

  &__frame {
    padding: $spacing-7;
    border: $border-style-default;
    position: relative;
    margin-bottom: $spacing-9;
  }

  &__edges {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% + $spacing-1 + $spacing-3);
    position: absolute;
    top: calc(calc($spacing-1 + $spacing-3) / 2 * -1);

    &::before {
      content: "";
      box-sizing: border-box;
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      border: $border-style-default;
      background: $color-white;
    }

    &::after {
      content: "";
      box-sizing: border-box;
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      border: $border-style-default;
      background: $color-white;
    }

    &--left {
      @extend .home__edges;
      left: calc($spacing-3 / 1.5 * -1);
    }

    &--right {
      @extend .home__edges;
      right: calc($spacing-3 / 1.5 * -1);
    }
  }

  &__bullets {
    display: flex;
    justify-content: space-between;
    width: calc(100% + 20px);
    position: absolute;
    left: -10px;

    &::before,
    &::after {
      content: "";
      box-sizing: border-box;
      display: block;
      width: 1rem;
      height: 1rem;
      border: $border-style-default;
      border-radius: 50%;
      background: $color-white;
    }

    &--left-right {
      @extend .home__bullets;
      top: calc(50% - $spacing-2 / 2);
    }

    &--top-bottom {
      @extend .home__bullets;
      flex-direction: column;
      width: auto;
      height: calc(100% + 20px);
      top: -10px;
      left: calc(50% - $spacing-2 / 2);
    }
  }
}
</style>
