<script setup>
import Header from "./components/Header.vue"
import Section from "./components/Section.vue"
import Tags from "./components/Tags.vue"
import Timeline from "./components/Timeline.vue"

import { EVENTS, EXPERIENCE, KNOWLEDGE, SECTIONS } from "./data";

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
      :title="SECTIONS.knowledge.title" 
      :subTitle="SECTIONS.knowledge.subTitle" 
      :color="SECTIONS.knowledge.color"
    >
      <Tags :tags="KNOWLEDGE" />
    </Section>
    <Section 
      :title="SECTIONS.educational.title" 
      :subTitle="SECTIONS.educational.subTitle" 
      :color="SECTIONS.educational.color"
    >
      teste 2
    </Section>
    <Section 
      :title="SECTIONS.experience.title" 
      :subTitle="SECTIONS.experience.subTitle" 
      :color="SECTIONS.experience.color"
    >
      <Timeline :timeline="getExperienceWithTags()" color="orange" />
    </Section>
    <Section 
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
