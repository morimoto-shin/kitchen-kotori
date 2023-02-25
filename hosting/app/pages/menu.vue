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
  onMounted,
} from '@nuxtjs/composition-api'
import PageTitle from '@/components/common/PageTitle.vue'
import MenuCard from '@/components/menu/MenuCard.vue'
import { fetchMenu } from '@/api/menu'
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
    const pageTitle = 'MENU' as const
    useMeta(() => ({ title: 'キッチン小鳥 | メニュー | 岡山県津山市' }))

    const state = reactive<State>({
      menus: [],
    })

    onMounted(async () => {
      try {
        await $_fetchMenu()
      } catch (e) {
        console.log(e)
      }
    })

    // eslint-disable-next-line camelcase
    const $_fetchMenu = async () => {
      state.menus = await fetchMenu()
    }

    $_fetchMenu()

    return {
      pageTitle,
      state,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped></style>
