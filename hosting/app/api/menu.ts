import { db } from '~/plugins/firebase'
import { Menu } from '@/types/Menu'

const fetchMenu = async () => {
  const response = await db.collection('menus').get()
  return response.docs.map((x) => {
    return { id: x.id, ...x.data() } as Menu
  })
}

export { fetchMenu }
