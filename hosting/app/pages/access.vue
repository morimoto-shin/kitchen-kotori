<template>
  <v-container class="pa-0 home_container">
    <PageTitle class="mt-2" :page-title="pageTitle" />
    <v-row justify="center" align="center">
      <v-spacer />
      <v-col cols="8" md="6" align="center">
        <AccessSheet class="my-2" />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import PageTitle from '@/components/common/PageTitle.vue'
import AccessSheet from '@/components/access/AccessSheet.vue'

export default defineComponent({
  components: {
    PageTitle,
    AccessSheet,
  },
  setup() {
    const pageTitle = 'ACCESS' as const
    useMeta(() => ({ title: 'アクセス | カフェ | 岡山県津山市' }))
    return {
      pageTitle,
    }
  },
  head: {},
})
</script>
