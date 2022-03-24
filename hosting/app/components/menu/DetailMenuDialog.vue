<template>
  <v-dialog
    overlay-opacity="0.5"
    width="80%"
    max-width="600px"
    :value="dialog"
    @click:outside="close"
  >
    <v-card class="pa-0 ma-0">
      <v-img :src="menu.img" contain></v-img>
      <v-card-title
        >{{ menu.name }}<v-spacer></v-spacer
        ><span>{{ menu.price }}円</span></v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col cols="12"
            ><span>{{ menu.description }}</span></v-col
          >
        </v-row>
        <v-row class="menu_price">
          <v-spacer></v-spacer>
          <v-col cols="3"></v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'
import { Menu } from '@/types/Menu'

type DetailMenuDialogProps = {
  dialog: boolean
  menu: Menu
}

export default defineComponent<DetailMenuDialogProps>({
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
    menu: {
      type: Object,
      required: true,
    },
  },
  setup(_, { emit }) {
    const isShownOverview = ref(true)

    const caretLeftIconClass = computed(
      () => `caretLeft_icon${isShownOverview.value ? '-active' : ''}`
    )

    const close = () => {
      emit('close')
    }

    return {
      isShownOverview,
      caretLeftIconClass,
      close,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped>
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
