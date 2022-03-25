<template>
  <div>
    <v-container fluid pre class="pa-0">
      <v-card tile elevation="0">
        <div class="">
          <v-card-text>
            <v-row class="" align="center">
              <span class="menu_bar_title"
                ><v-btn icon class="mr-2" @click="changeShowOverview"
                  ><img
                    :class="caretLeftIconClass"
                    src="/icon/caretLeft.svg" /></v-btn
                >{{ upperCaseTitle }}</span
              >
            </v-row>
          </v-card-text>
        </div>
        <v-divider />
        <v-container class="pa-0">
          <v-expand-transition>
            <div v-show="isShownOverview">
              <v-list>
                <v-list-item v-for="menu in menus" :key="menu.img">
                  <span @click="openDialog(menu)">{{ menu.name }}</span>
                  <v-spacer />
                  <span>{{ menu.price }}円</span>
                </v-list-item>
              </v-list>
            </div>
          </v-expand-transition>
        </v-container>
      </v-card>
    </v-container>
    <DetailMenuDialog
      :dialog="dialog"
      :menu="selectMenu"
      @close="closeDialog"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
} from '@nuxtjs/composition-api'
import DetailMenuDialog from '@/components/menu/DetailMenuDialog.vue'
import { Menu } from '@/types/Menu'

type MenuCardItemProps = {
  title: string
  menus: Menu[]
}

export default defineComponent<MenuCardItemProps>({
  components: {
    DetailMenuDialog,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    menus: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const isShownOverview = ref(true)
    const dialog = ref(false)
    const selectMenu = ref<Menu>(Object.create(null))
    const upperCaseTitle = computed(() => props.title.toUpperCase())

    const caretLeftIconClass = computed(
      () => `caretLeft_icon${isShownOverview.value ? '-active' : ''}`
    )

    const changeShowOverview = () => {
      isShownOverview.value = !isShownOverview.value
    }

    const openDialog = (menu: Menu) => {
      selectMenu.value = menu
      dialog.value = true
    }

    const closeDialog = () => {
      dialog.value = false
    }

    return {
      isShownOverview,
      dialog,
      selectMenu,
      upperCaseTitle,
      caretLeftIconClass,
      changeShowOverview,
      openDialog,
      closeDialog,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped>
.menu_bar {
  background: rgb(48, 48, 48);
  color: white;
  height: 40px;
}
.menu_bar_title {
  font-size: 16px !important;
  font-style: normal;
  font-weight: 600;
}

[class*='caretLeft_icon'] {
  transition: all 0.2s ease-out;
}

.caretLeft_icon-active {
  transform: rotate(180deg);
}
</style>
