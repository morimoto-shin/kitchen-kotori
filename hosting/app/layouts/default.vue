<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" right fixed temporary height="100%">
      <v-list class="pa-0">
        <v-list-item
          v-for="(item, i) in headerItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="list_text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed flat app nav>
      <img src="/icon/logo.svg" width="45px" height="45px" />
      <v-toolbar-title>
        <img src="/icon/logo_text.svg" height="45px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon color="primary" @click.stop="switchNav" />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-btn class="fixed_btn" x-large icon retain-focus-on-click to="/"
      ><!-- 電話番号追加 -->
      <v-icon dark large color="white">mdi-phone-outgoing</v-icon>
    </v-btn>
    <v-footer class="pa-0 ma-0">
      <v-card
        flat
        tile
        img="img/bg_wood.png"
        class="text-center"
        color="primary"
        width="100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in snsIcons"
            :key="icon"
            class="mx-4"
            icon
            color="primary"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <span class="list_text">&copy; {{ currentYear }}</span>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    const fixed = false as const
    const drawer = ref(false)
    const title = 'キッチン小鳥'
    const headerItems = [
      {
        icon: 'mdi-home-outline',
        title: 'HOME',
        to: '/',
      },
      {
        icon: 'mdi-coffee',
        title: 'MENU',
        to: '/menu',
      },
      {
        icon: 'mdi-map-marker',
        title: 'ACCESS',
        to: '/access',
      },
      {
        icon: 'mdi-information',
        title: 'INFORMATION',
        to: '/information',
      },
    ] as const
    const snsIcons = [
      'mdi-facebook',
      'mdi-instagram',
      // 'mdi-paperclip',
      // 'mdi-phone',
    ]
    const switchNav = () => {
      drawer.value = !drawer.value
    }
    return {
      title,
      drawer,
      headerItems,
      currentYear,
      fixed,
      snsIcons,
      switchNav,
    }
  },
})
</script>
<style scoped>
.list_text {
  color: #0b3364;
  font-size: 18px;
}
.fixed_btn {
  background: #0b3364;
  padding: 4px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 10;
}
</style>
