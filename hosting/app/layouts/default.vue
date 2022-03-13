<template>
  <v-app dark>
    <Header />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default defineComponent({
  components: { Header, Footer },
})
</script>
