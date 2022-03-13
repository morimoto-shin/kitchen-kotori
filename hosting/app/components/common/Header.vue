<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      right
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in headerItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="switchNav" />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
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
        icon: 'mdi-email',
        title: 'CONTACT',
        to: '/contact',
      },
    ] as const
    const switchNav = () => {
      drawer.value = !drawer.value
    }
    return {
      title,
      drawer,
      headerItems,
      switchNav,
    }
  },
})
</script>
