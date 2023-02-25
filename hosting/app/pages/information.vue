<template>
  <v-container class="pa-0 home_container">
    <PageTitle class="mt-2" :page-title="pageTitle" />
    <v-row justify="center" align="center">
      <v-spacer />
      <v-col cols="8" md="6" align="center">
        <InformationSheet class="my-2" />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import PageTitle from '@/components/common/PageTitle.vue'
import InformationSheet from '@/components/information/InformationSheet.vue'

export default defineComponent({
  components: {
    PageTitle,
    InformationSheet,
  },
  setup() {
    const pageTitle = 'INFORMATION' as const
    useMeta(() => ({
      title: 'キッチン小鳥 | インフォメーション | 岡山県津山市',
    }))
    return {
      pageTitle,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped></style>
