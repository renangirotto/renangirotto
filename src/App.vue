<script setup>
import Header from "./components/Header.vue"
import Section from "./components/Section.vue"
import Tags from "./components/Tags.vue"
import Timeline from "./components/Timeline.vue"

import { EVENTS, EXPERIENCE, KNOWLEDGE, SECTIONS } from "./data";
import { MOTION_SECTION_INITIAL, MOTION_SECTION_VISIBLE } from "./constants"

const getTags = (tagsToGet) => {
  const filterKnowledge = KNOWLEDGE.filter(itemToFilter => {
    const haveToGet = tagsToGet.find(tag => tag === itemToFilter.id)

    if (haveToGet) {
      return itemToFilter
    }
    })

  return filterKnowledge.map(tag => `#${tag.name}`).join(" ")
}

const getExperienceWithTags = () => {
  const experienceWithTags = EXPERIENCE.map(exp => {
    const tagsName = getTags(exp.tags)

    return {
      ...exp,
      tags: {
        type: "text",
        content: tagsName
      }
    }
  })

  return experienceWithTags
}

</script>

<template>
  <Header />
  <main>
    <Section
      v-motion
      :initial="MOTION_SECTION_INITIAL"
      :visibleOnce="MOTION_SECTION_VISIBLE"
      :title="SECTIONS.knowledge.title" 
      :subTitle="SECTIONS.knowledge.subTitle" 
      :color="SECTIONS.knowledge.color"
    >
      <Tags :tags="KNOWLEDGE" />
    </Section>
    <Section 
      v-motion
      :initial="MOTION_SECTION_INITIAL"
      :visibleOnce="MOTION_SECTION_VISIBLE"
      :title="SECTIONS.educational.title" 
      :subTitle="SECTIONS.educational.subTitle" 
      :color="SECTIONS.educational.color"
    >
      Tecnólogo [2 Anos] <br />
      Universidade Cruzeiro do Sul
    </Section>
    <Section 
      v-motion
      :initial="MOTION_SECTION_INITIAL"
      :visibleOnce="MOTION_SECTION_VISIBLE"
      :title="SECTIONS.experience.title" 
      :subTitle="SECTIONS.experience.subTitle" 
      :color="SECTIONS.experience.color"
    >
      <Timeline :timeline="getExperienceWithTags()" color="orange" />
    </Section>
    <Section 
      v-motion
      :initial="MOTION_SECTION_INITIAL"
      :visibleOnce="MOTION_SECTION_VISIBLE"
      :title="SECTIONS.events.title" 
      :subTitle="SECTIONS.events.subTitle" 
      :color="SECTIONS.events.color"
    >
      <Timeline :timeline="EVENTS" color="red" />
    </Section>
  </main>
</template>

<style lang="scss">
body {
  background: $color-background;
}

main {
  padding: 7rem 2rem;
}
</style>
