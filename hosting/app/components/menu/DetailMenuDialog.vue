<template>
  <v-dialog
    :width="$vuetify.breakpoint.width > 500 ? 600 : 300"
    overlay-opacity="0.5"
    :value="dialog"
    @click:outside="close"
  >
    <v-card class="menu_card pa-0 ma-0">
      <v-img height="50%" cover :src="menu.img"></v-img>
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
@media screen and (max-width: 767px) {
  .menu_card {
    width: 300px;
    height: 450px;
  }
}
@media screen and (min-width: 767px) {
  .menu_card {
    width: 600px;
    height: 900px;
  }
}
</style>
