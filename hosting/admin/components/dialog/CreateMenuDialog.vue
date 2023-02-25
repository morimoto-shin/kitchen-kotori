<template>
  <v-dialog :value="value" width="920" persistent @keydown.esc="close">
    <v-card>
      <v-card-title class="headline justify-center"
        >メニューを追加</v-card-title
      >
      <v-card-text>
        <v-container>
          <v-row dense class="justify-center">
            <v-col cols="4">
              <v-subheader>
                <span class="font-weight-bold">名前</span>
              </v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                v-model="menu.name"
                outlined
                placeholder="メニュー名"
              />
            </v-col>
          </v-row>
          <v-row dense class="justify-center">
            <v-col cols="4">
              <v-subheader>
                <span class="font-weight-bold">値段</span>
              </v-subheader>
            </v-col>
            <v-col cols="8">
              <v-text-field
                v-model="menu.price"
                type="number"
                outlined
                placeholder="値段(半角数字で入力してください)"
              />
            </v-col>
          </v-row>
          <v-row dense class="justify-center">
            <v-col cols="4">
              <v-subheader>
                <span class="font-weight-bold">説明</span>
              </v-subheader>
            </v-col>
            <v-col cols="8">
              <v-textarea
                v-model="menu.description"
                outlined
                placeholder="メニュー説明"
              />
            </v-col>
          </v-row>
          <v-row dense class="justify-center">
            <v-col cols="4">
              <v-subheader>
                <span class="font-weight-bold">画像</span>
              </v-subheader>
            </v-col>
            <v-col cols="8">
              <v-file-input
                v-model="filePayload"
                accept="image/*"
                prepend-icon="mdi-image"
              />
            </v-col>
          </v-row>
          <v-row dense class="justify-center">
            <v-col cols="4">
              <v-subheader>
                <span class="font-weight-bold">タイプ</span>
              </v-subheader>
            </v-col>
            <v-col cols="8">
              <v-select
                v-model="menu.type"
                :items="TypeList"
                item-text="plan"
                return-object
                label="タイプ"
                solo
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="gray" class="mr-4" large @click="close">キャンセル</v-btn>
        <v-btn color="primary" large @click="create">追加</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'

import { defaultEmptyMenu, TypeList } from '@/types/Menu'

type CreateMenuDialogProps = {
  value: boolean
}

export default defineComponent<CreateMenuDialogProps>({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const menu = ref(defaultEmptyMenu)
    const filePayload = ref()

    watch(
      () => props.value,
      () => {
        menu.value = defaultEmptyMenu
      }
    )

    const close = () => {
      emit('close')
    }

    const create = () => {
      emit('create')
      close()
    }

    return {
      menu,
      close,
      create,
      TypeList,
      filePayload,
    }
  },
})
</script>
