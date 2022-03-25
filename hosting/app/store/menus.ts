import { reactive } from '@nuxtjs/composition-api'
import { Store } from 'vuex/types'
import { Menu } from '@/types/Menu'
import { fetchMenu } from '@/api/menu'

type MenuState = {
  menus: Menu[]
}

type MenuStore = Store<MenuState>

const state = () =>
  reactive<MenuState>({
    menus: [],
  })

const getters = {
  getMenu: (state: MenuState) => state.menus,
}

const mutations = {
  setMenu(state: MenuState, menus: Menu[]) {
    state.menus = menus
  },
}

const actions = {
  async getMenu({ commit }: MenuStore) {
    const menus = await fetchMenu()
    console.log('ゲットメニュー')
    commit('setMenu', menus)
  },
}

export { state, getters, actions, mutations }
