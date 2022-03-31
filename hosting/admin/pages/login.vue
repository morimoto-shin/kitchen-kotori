<template>
  <FirebaseAuth />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useLogin } from './-login'

export default defineComponent({
  components: {},
  setup() {
    return { ...useLogin() }
  },
})
</script>
