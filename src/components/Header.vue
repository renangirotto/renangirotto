<script setup>

const handleDisclaimerClick = () => {
  window.scroll({ top: window.innerHeight, behavior: "smooth"})
}

</script>

<template>
  <header class="header">
    <div class="header__container">
      <h1 class="header__title"><span>Renan</span> Girotto</h1>
    </div>
    <div class="header__container--bottom">
      <h2 class="header__dev-type">Desenvolvedor <span>Front-end</span></h2>
    </div>
    <button class="header__disclaimer" @click="handleDisclaimerClick()">
      <svg viewBox="0 0 384 512"><path d="M32 480c0 17.7 14.3 32 32 32s32-14.3 32-32V272H32V480zM224 320c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-17.7-14.3-32-32-32s-32 14.3-32 32v64zm-64 64c17.7 0 32-14.3 32-32V304c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 17.7 14.3 32 32 32zm160-96c0 17.7 14.3 32 32 32s32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64zm-96-88l0 .6c9.4-5.4 20.3-8.6 32-8.6c13.2 0 25.4 4 35.6 10.8c8.7-24.9 32.5-42.8 60.4-42.8c11.7 0 22.6 3.1 32 8.6V160C384 71.6 312.4 0 224 0H162.3C119.8 0 79.1 16.9 49.1 46.9L37.5 58.5C13.5 82.5 0 115.1 0 149v27c0 35.3 28.7 64 64 64h88c22.1 0 40-17.9 40-40s-17.9-40-40-40H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h56c39.8 0 72 32.2 72 72z"/></svg>
    </button>
  </header>
</template>

<style lang="scss">
.header {
  min-height: 100vh;
  max-height: 100vh;
  position: relative;

  &__container {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 50vh;
    background: $color-purple;

    &--bottom {
      @extend .header__container;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 3rem;
      background: transparent;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 5.5rem;
    line-height: 0.6;
    text-align: center;
    color: $color-background;

    span {
      display: block;
      position: relative;
      top: -24px;

      @media screen and (min-width: 768px) {
        display: inline;
        top: 0;
      }
    }
  }

  &__dev-type {
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 1.5;
    text-align: center;
    color: $color-foreground;

    span {
      display: block;

      @media screen and (min-width: 768px) {
        display: inline;
      }
    }
  }

  &__disclaimer {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    position: absolute;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
    color: $color-foreground;
    background: transparent;
    outline: none;

    svg {
      width: 1.75rem;
      fill: $color-foreground;
    }
  }
}
</style>
