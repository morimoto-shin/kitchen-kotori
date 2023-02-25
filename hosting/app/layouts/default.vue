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
    <v-app-bar fixed flat app nav color="white" src="img/bg_wood.png">
      <img src="/icon/logo.svg" width="45px" height="45px" />
      <v-toolbar-title>
        <img @click="moveHomePage" src="/icon/logo_text.svg" height="45px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon color="primary" @click.stop="switchNav" />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-btn
      class="fixed_btn"
      large
      icon
      retain-focus-on-click
      href="tel:0868-32-8129"
    >
      <v-icon color="primary">mdi-phone</v-icon>
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
            v-for="sns in snsIcons"
            :key="sns.icon"
            class="mx-4"
            icon
            color="primary"
            :href="sns.src"
            target="_blank"
          >
            <v-icon size="24px">
              {{ sns.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <span class="list_text">&copy;KITCHEN KOTORI {{ currentYear }}</span>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  useRoute,
  useMeta,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const currentYear = computed(() => new Date().getFullYear())
    const fixed = false as const
    const drawer = ref(false)
    const title = 'キッチン小鳥'
    const headerItems = [
      {
        icon: 'mdi-home',
        title: 'HOME',
        to: '/',
      },
      {
        icon: 'mdi-coffee',
        title: 'MENU',
        to: '/menu',
      },
      {
        icon: 'mdi-information',
        title: 'INFORMATION',
        to: '/information',
      },
    ] as const
    const snsIcons = [
      {
        icon: 'mdi-instagram',
        src: 'https://www.instagram.com/kitchen_kotori/',
      },
      { icon: 'mdi-facebook', src: 'https://www.facebook.com/kitchenKotori' },
      // { icon: 'mdi-paperclip', src: ''}
      // { icon: 'mdi-phone', src: ''}
    ] as const

    const moveHomePage = () => {
      router.push('/')
    }
    const currentPageForCanonical = computed(() => route.value.path.slice(1))
    useMeta(() => ({
      link: [
        {
          rel: 'canonical',
          href: `${process.env.BASE_URL}/${currentPageForCanonical.value}`,
        },
      ],
    }))

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
      moveHomePage,
    }
  },
  head: {},
})
</script>
<style scoped>
.list_text {
  color: #0b3364;
  font-size: 18px;
}
.fixed_btn {
  background: rgba(142, 142, 142, 0.2);
  padding: 4px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 10;
}
</style>
