import firebase from '~/plugins/firebase'
import { Menu } from '@/types/Menu'

const fetchMenu = async () => {
  const response = await firebase.firestore().collection('menus').get()
  return response.docs.map((x) => {
    return { id: x.id, ...x.data() } as Menu
  })
}

// const addMenu = async (menu: Menu) => {
//   const doc = menu
//   return await firebase.firestore().collection('menus').add(doc)
// }

export { fetchMenu }
