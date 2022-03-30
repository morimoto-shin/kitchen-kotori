import { reactive } from '@nuxtjs/composition-api'

import { defaultEmptyMenu, Menu } from '@/types/Menu'

type useEditMenuDialogState = {
  visible: boolean
  menu: Menu
}

const useEditMenuDialog = () => {
  const state = reactive<useEditMenuDialogState>({
    visible: false,
    menu: defaultEmptyMenu,
  })

  const open = (menu: Menu) => {
    state.visible = true
    state.menu = menu
  }

  const close = () => {
    state.visible = false
    state.menu = defaultEmptyMenu
  }

  return {
    state,
    open,
    close,
  }
}

export { useEditMenuDialog }
