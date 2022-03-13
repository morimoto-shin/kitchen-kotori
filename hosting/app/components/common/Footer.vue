<template>
  <v-footer :absolute="!fixed" app>
    <span>&copy; {{ currentYear }}</span>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    const fixed = false as const
    return {
      currentYear,
      fixed,
    }
  },
})
</script>
x
