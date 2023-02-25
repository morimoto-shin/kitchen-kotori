import { reactive } from '@nuxtjs/composition-api'

const useCreateMenuDialog = () => {
  const state = reactive({
    visible: false,
  })

  const open = () => {
    state.visible = true
  }

  const close = () => {
    state.visible = false
  }

  return {
    state,
    open,
    close,
  }
}

export { useCreateMenuDialog }
