/* eslint-disable camelcase */
import { onMounted, reactive } from '@nuxtjs/composition-api'

import { fetchMenu, addMenu, updateMenu, deleteMenu } from '~/api/menu'
import { deleteFile } from '~/api/storage'

import { useEditMenuDialog } from '~/components/dialog/useEditMenuDialog'

import { Menu, defaultEmptyMenu } from '@/types/Menu'

type State = {
  menus: Menu[]
  loading: boolean
}

const useIndex = () => {
  const state = reactive<State>({
    menus: [],
    loading: true,
  })
  const editMenuDialog = useEditMenuDialog()

  const openEditMenuDialog = (menu: Menu) => {
    editMenuDialog.open(menu)
  }

  const closeEditMenuDialog = () => {
    editMenuDialog.close()
  }

  onMounted(async () => {
    try {
      await $_fetchMenu()
    } catch (e) {
      console.log(e)
    } finally {
      state.loading = false
    }
  })

  // eslint-disable-next-line camelcase
  const $_fetchMenu = async () => {
    state.menus = await fetchMenu()
  }

  const add = async () => {
    await addMenu(defaultEmptyMenu)
    await $_fetchMenu()
  }

  const update = async (menu: Menu) => {
    await updateMenu(menu)
    await $_fetchMenu()
  }

  const $_delete = async (menu: Menu) => {
    if (menu.img) await deleteFile(`menu/${menu.id}`)
    await deleteMenu(menu)
    await $_fetchMenu()
  }

  return {
    state,
    add,
    update,
    $_delete,
    editMenuDialog,
    openEditMenuDialog,
    closeEditMenuDialog,
  }
}

export { useIndex }
