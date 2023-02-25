const MenuType = {
  Launch: 'launch',
  Drink: 'drink',
  Dessert: 'dessert',
  Takeout: 'takeout',
} as const

type Type = typeof MenuType[keyof typeof MenuType]

type Menu = {
  id: string
  name: string
  img: string
  description: string
  type: Type
  price: number
}

const defaultEmptyMenu: Menu = {
  id: '',
  name: '',
  img: '',
  description: '',
  type: 'launch',
  price: 0,
}

export { MenuType, Type, Menu, defaultEmptyMenu }
