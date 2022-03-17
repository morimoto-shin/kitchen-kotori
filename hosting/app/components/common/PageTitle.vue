<template>
  <v-row justify="center" align="center">
    <v-spacer />
    <v-col cols="8" md="6" align="center">
      <h1 class="mb-2 page_title">{{ pageTitle }}</h1>
      <v-divider />
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.page_title {
  font-size: 30px;
}
</style>
