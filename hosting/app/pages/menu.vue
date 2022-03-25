<template>
  <v-container class="pa-0">
    <PageTitle class="mt-2" :page-title="pageTitle" />
    <v-row justify="center" align="center">
      <v-spacer />
      <v-col v-if="state.menus.length" cols="8" md="6" align="center">
        <MenuCard :menus="state.menus" />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  defineComponent,
  useMeta,
  reactive,
  useStore,
  onMounted,
} from '@nuxtjs/composition-api'
import PageTitle from '@/components/common/PageTitle.vue'
import MenuCard from '@/components/menu/MenuCard.vue'
import { Menu } from '@/types/Menu'

type State = {
  menus: Menu[]
}

export default defineComponent({
  components: {
    PageTitle,
    MenuCard,
  },
  setup() {
    const store = useStore()

    const pageTitle = 'MENU' as const
    useMeta(() => ({ title: 'メニュー | カフェ | 岡山県津山市' }))

    const state = reactive<State>({
      menus: [],
    })

    state.menus = store.getters['menus/getMenu'] as Menu[]

    onMounted(async () => {
      try {
        await store.dispatch('menus/getMenu')
      } catch (e) {
        console.log(e)
      }
    })

    return {
      pageTitle,
      state,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped></style>
