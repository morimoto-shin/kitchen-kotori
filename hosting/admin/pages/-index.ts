/* eslint-disable camelcase */
import { onMounted, reactive } from '@nuxtjs/composition-api'

import { fetchMenu, addMenu, updateMenu, deleteMenu } from '~/api/menu'
import { uploadFile, deleteFile } from '~/api/storage'

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

  const add = async (menu: Menu, filePayload: File) => {
    menu.img = await uploadFile(`menu/${menu.id},`, filePayload)
    await addMenu(menu)
    await $_fetchMenu()
  }

  const update = async (menu: Menu, filePayload: File) => {
    if (menu.img) await deleteFile(`menu/${menu.id}`)
    menu.img = await uploadFile(`menu/${menu.id}`, filePayload)
    await updateMenu(menu)
    await $_fetchMenu()
  }

  const $_delete = async (menu: Menu) => {
    await deleteFile(`menu/${menu.id}`)
    await deleteMenu(menu)
    await $_fetchMenu()
  }

  return {
    state,
    add,
    update,
    $_delete,
    createMenuDialog,
    editMenuDialog,
    openCreateMenuDialog,
    closeCreateMenuDialog,
    openEditMenuDialog,
    closeEditMenuDialog,
  }
}

export { useIndex }
