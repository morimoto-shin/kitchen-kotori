import firebase from '~/plugins/firebase'
import { Menu } from '@/types/Menu'

const fetchMenu = async () => {
  const response = await firebase.firestore().collection('menus').get()
  return response.docs.map((x) => {
    const menu = { id: '', ...x.data() }
    menu.id = x.id
    return menu as Menu
  })
}

const addMenu = async (menu: Menu) => {
  const doc = menu
  return await firebase.firestore().collection('menus').add(doc)
}

const updateMenu = async (menu: Menu) => {
  console.log('アップデート', menu)
  const doc = menu
  return await firebase.firestore().collection('menus').doc(doc.id).update(doc)
}

const deleteMenu = async (menu: Menu) => {
  const doc = menu
  return await firebase.firestore().collection('menus').doc(doc.id).delete()
}

export { fetchMenu, addMenu, updateMenu, deleteMenu }
