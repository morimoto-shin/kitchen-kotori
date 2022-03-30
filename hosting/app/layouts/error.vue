<template>
  <v-app dark>
    <v-container class="container">
      <v-row>
        <v-col cols="12" align="center">
          <h1 v-if="error.statusCode === 404">404 エラー</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align="center">
          <v-card class="error_card pa-4">
            <v-card-title>{{ title }}</v-card-title>
            <v-btn outlined dark color="blue" to="/"> ホームページへ</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, useMeta, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const title = computed(() =>
      props.error.statusCode === 404
        ? 'お探しのページは見つかりませんでした。'
        : '原因不明のエラーが発生しました。'
    )
    useMeta(() => ({ title: title.value }))
    return {
      title,
    }
  },
  head: {},
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.error_card {
  min-width: 300px;
  width: 50%;
}
</style>
