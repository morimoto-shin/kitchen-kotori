<template>
  <v-container>
    <v-row>
      <v-col><h3>メニュー</h3></v-col>
      <v-col align="right">
        <v-btn color="primary" outlined tile @click="openCreateMenuDialog"
          >メニューを追加する</v-btn
        ></v-col
      >
    </v-row>
    <v-row>
      <v-col>
        <MenuCard
          :menus="state.menus"
          :loading="state.loading"
          @open-edit-dialog="openEditMenuDialog"
          @remove="$_delete"
        />
      </v-col>
    </v-row>
    <CreateMenuDialog
      :value="createMenuDialog.state.visible"
      @create="add"
      @close="closeCreateMenuDialog"
    />
    <EditMenuDialog
      :menu="editMenuDialog.state.menu"
      :value="editMenuDialog.state.visible"
      @update="update"
      @close="closeEditMenuDialog"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useIndex } from './-index'

import MenuCard from '~/components/MenuCard.vue'
import CreateMenuDialog from '@/components/dialog/CreateMenuDialog.vue'
import EditMenuDialog from '@/components/dialog/EditMenuDialog.vue'

export default defineComponent({
  components: {
    MenuCard,
    CreateMenuDialog,
    EditMenuDialog,
  },
  setup() {
    return {
      ...useIndex(),
    }
  },
})
</script>
