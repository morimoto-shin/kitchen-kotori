<template>
  <div>
    <MenuCardItem
      v-for="type in menuType"
      :key="type"
      :title="type"
      :menus="filterByTypeMenu(type)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import MenuCardItem from '@/components/menu/MenuCardItem.vue'
import { Menu, MenuType } from '@/types/Menu'

type MenuCardProps = {
  menus: Menu[]
}

export default defineComponent<MenuCardProps>({
  components: {
    MenuCardItem,
  },
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const menus = props.menus
    const menuType = Object.values(MenuType)
    const filterByTypeMenu = computed(
      () => (type: string) => menus.filter((menu) => menu.type === type)
    )

    return {
      menuType,
      filterByTypeMenu,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped>
[class*='caretLeft_icon'] {
  transition: all 0.2s ease-out;
}

.caretLeft_icon-active {
  transform: rotate(180deg);
}

.v-application .worksheetOverviewCard_title {
  font-size: 16px !important;
  font-style: normal;
  font-weight: 600;
}
</style>
