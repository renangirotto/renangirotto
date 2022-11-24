<script setup>
import { ref } from 'vue';

const isActive = ref(false)

const handleMenuAction = () => {
  isActive.value = !isActive.value
}

</script>

<template>
  <div class="menu" :class="{ 'menu--active': isActive }">
    <div class="menu__container">
      <button class="menu__action" @click="handleMenuAction()">
        <svg v-if="!isActive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill="currentColor" /></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" fill="currentColor" /></svg>
      </button>
      <nav class="menu__nav">
        <ul class="menu__links">
          <li class="menu__item">
            <a class="menu__link" href="#" target="_blank">Github</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#" target="_blank">Linkedin</a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#" target="_blank">Hashnode</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
.menu {
  &__container {
    position: relative;
    z-index: 10;
  }

  &__action {
    box-sizing: border-box;
    width: 4rem;
    height: 4rem;
    padding: 0;
    border-radius: 100%;
    border: 0;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 2;
    color: $color-background;
    background: $color-purple;
    transition: all 0.25s;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }

    &:focus, &:hover {
      background: darken($color: $color-purple, $amount: 2)
    }

    svg {
      height: 1.8rem;
    }
  }

  &__nav {
    box-sizing: border-box;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    
    @media (min-width: 768px) {
      display: flex;
      width: auto;
      height: 2rem;
      top: 2rem;
      right: 4rem;
      bottom: auto;
      left: auto;
    }

    &::before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      position: absolute;
      top: 34px;
      right: 35px;
      z-index: 0;
      background: $color-background;

      @media (min-width: 768px) {
        content: none;
      }
    }

    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      top: 34px;
      right: 35px;
      border-radius: 100%;
      position: absolute;
      background: $color-purple;
      z-index: 1;

      @media (min-width: 768px) {
        content: none;
      }
    }
  }

  &__links {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 12vh;
    position: relative;
    z-index: 2;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      gap: 3rem;
    }
  }

  &__item {
    opacity: 0;

    @media (min-width: 768px) {
      opacity: 1;
    }
  }

  &__link {
    font-weight: 600;
    font-size: 1.5rem;
    color: $color-foreground;

    @media (min-width: 768px) {
      font-size: 1.1rem;
      color: $color-background;
      opacity: 1;
    }
  }

  &--active {
    @media (max-width: 768px) {
      .menu__action {
        color: $color-foreground;
        background: $color-background;
      }

      .menu__nav {
        display: flex;

        &::before {
          animation-name: animate-before;
          animation-duration: 5s;
          animation-fill-mode: forwards;
        }

        &::after {
          animation-name: animate-after;
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-delay: 0.1s;
        }
      }

      .menu__links {
        display: flex;
      }

      .menu__item {
        animation-name: animate-links;
        animation-duration: 2s;
        animation-fill-mode: forwards;

        &:nth-child(1) {
          animation-delay: 1s;
        }
        
        &:nth-child(2) {
          animation-delay: 1.2s;
        }
        
        &:nth-child(3) {
          animation-delay: 1.4s;
        }
      }
    }
  }

  @keyframes animate-before {
    0% {
      width: 10px;
      height: 10px;
      top: 34px;
      right: 35px;
    }
    100% {
      width: 10000px;
      height: 10000px;
      top: -5000px;
      right: -5000px;
    }
  }

  @keyframes animate-after {
    0% {
      width: 10px;
      height: 10px;
      top: 34px;
      right: 35px;
    }
    100% {
      width: 128px;
      height: 128px;
      top: -24px;
      right: -24px;
    }
  }

  @keyframes animate-links {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>