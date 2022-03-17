<template>
  <v-sheet>
    <InformationSheetItem
      v-for="item in items"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :attention="item.attention"
    />
    <GoogleScheduleCalender />
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import InformationSheetItem from '@/components/information/InformationSheetItem.vue'
import GoogleScheduleCalender from '@/components/information/GoogleScheduleCalender.vue'

export default defineComponent({
  components: {
    InformationSheetItem,
    GoogleScheduleCalender,
  },
  setup() {
    const items = [
      {
        label: 'TEL',
        value: '0868-32-8129',
        attention: 'ホームページを見たとお伝えいただくとスムーズです。',
      },
      { label: '住所', value: '岡山県津山市川崎1765-1', attention: '' },
      { label: '定休日', value: '不定休', attention: '' },
      { label: '営業時間', value: '10:00 ~ 17:00', attention: '' },
      { label: '席数', value: '22席', attention: '' },
      {
        label: '駐車場',
        value: '8台',
        attention: '同一の車（2名以上）で来店の場合、焼菓子のプレゼントあり',
      },
    ]
    const snsIcons = [
      {
        icon: 'mdi-instagram',
        url: 'https://www.instagram.com/kitchen_kotori/',
      },
      { icon: 'mdi-facebook', url: 'https://www.facebook.com/kitchenKotori/' },
    ]
    return {
      items,
      snsIcons,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped></style>
