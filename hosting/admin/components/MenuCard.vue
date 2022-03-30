<template>
  <v-data-table
    :headers="headers"
    :items="menus"
    :loading="loading"
    :items-per-page="10"
    :search="search"
    class="elevation-1"
  >
    <template #top>
      <v-text-field v-model="search" label="検索" class="mx-4"></v-text-field>
    </template>
    <template #[`item.actions`]="{ item }">
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-icon
            small
            class="mr-2"
            v-bind="attrs"
            v-on="on"
            @click="open(item)"
            >mdi-pencil</v-icon
          >
        </template>
        <span>編集</span>
      </v-tooltip>
      <v-tooltip top>
        <template #activator="{ on, attrs }">
          <v-icon small v-bind="attrs" v-on="on" @click="remove(item)"
            >mdi-delete</v-icon
          >
        </template>
        <span>削除</span>
      </v-tooltip>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

import { Menu } from '~/types/Menu'

type MenuTableProps = {
  organizations: Menu[]
  loading: boolean
}

export default defineComponent<MenuTableProps>({
  props: {
    menus: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  setup(_, { emit }) {
    const headers = ref([
      {
        text: '名前',
        value: 'name',
      },
      {
        text: '値段',
        value: 'price',
      },
      {
        text: 'タイプ',
        value: 'type',
      },
      {
        text: '説明',
        value: 'description',
      },
      {
        text: 'アクション',
        value: 'actions',
        cellClass: 'px-0',
        sortable: false,
      },
    ])
    const search = ref('')

    const open = (menu: Menu) => {
      emit('open-edit-dialog', menu)
    }

    const remove = (menu: Menu) => {
      emit('remove', menu)
    }

    return {
      headers,
      search,
      open,
      remove,
    }
  },
})
</script>
