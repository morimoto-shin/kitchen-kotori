<template>
  <v-dialog :value="value" width="920" persistent @keydown.esc="close">
    <v-card>
      <v-card-title class="headline justify-center"
        >メニューを編集</v-card-title
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
                v-model="editState.name"
                outlined
                placeholder="日替わりランチ"
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
                v-model="editState.price"
                type="number"
                outlined
                placeholder="1000"
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
                v-model="editState.description"
                outlined
                placeholder="これは日替わりランチです。"
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
                prepend-icon=""
                accept="image/*"
                outlined
                dense
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
                v-model="editState.type"
                :items="TypeList"
                item-text="plan"
                return-object
                label="ランチ"
                solo
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="gray" class="mr-4" large @click="close">キャンセル</v-btn>
        <v-btn color="primary" large @click="update">保存</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'

import { defaultEmptyMenu, Menu, TypeList } from '~/types/Menu'

type EditMenuDialogProps = {
  value: boolean
  menu: Menu
}

export default defineComponent<EditMenuDialogProps>({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    menu: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const editState = ref(defaultEmptyMenu)
    const filePayload = ref()
    watch(
      () => props.menu,
      () => {
        editState.value = JSON.parse(JSON.stringify(props.menu))
      }
    )

    const close = () => {
      emit('close')
    }

    const update = () => {
      emit('update', editState.value, filePayload)
      close()
    }

    return {
      editState,
      close,
      update,
      TypeList,
      filePayload,
    }
  },
})
</script>
