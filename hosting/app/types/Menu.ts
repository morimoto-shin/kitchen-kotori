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
}

export { MenuType, Type, Menu }
