import { onMounted, reactive } from '@nuxtjs/composition-api'

import { fetchMenu, addMenu, updateMenu, deleteMenuDoc } from '~/api/menu'
import { useCreateMenuDialog } from '~/components/dialog/useCreateMenuDialog'
import { useEditMenuDialog } from '~/components/dialog/useEditMenuDialog'

import { Menu } from '@/types/Menu'

type State = {
  menus: Menu[]
  loading: boolean
}

const useIndex = () => {
  const state = reactive<State>({
    menus: [],
    loading: true,
  })
  const createMenuDialog = useCreateMenuDialog()
  const editMenuDialog = useEditMenuDialog()

  const openCreateMenuDialog = () => {
    createMenuDialog.open()
  }

  const closeCreateMenuDialog = () => {
    createMenuDialog.close()
  }

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

  const add = async (menu: Menu) => {
    await addMenu(menu)
    await $_fetchMenu()
  }

  const update = async (menu: Menu) => {
    await updateMenu(menu)
    await $_fetchMenu()
  }

  const deleteMenu = async (menu: Menu) => {
    await deleteMenuDoc(menu)
    await $_fetchMenu()
  }

  return {
    state,
    add,
    update,
    deleteMenu,
    createMenuDialog,
    editMenuDialog,
    openCreateMenuDialog,
    closeCreateMenuDialog,
    openEditMenuDialog,
    closeEditMenuDialog,
  }
}

export { useIndex }
