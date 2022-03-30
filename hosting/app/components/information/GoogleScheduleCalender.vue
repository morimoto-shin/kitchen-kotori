<template>
  <v-row class="mb-4">
    <v-col class="label" cols="12">
      <span class="label_text">今月の予定</span>
    </v-col>
    <v-col cols="12" class="mt-4 pa-0">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showTz=0&showTabs=0&showPrint=0&showDate=0&showNav=0&showTitle=0&showCalendars=0&src=cTliN3VncnZma242ODg1MWthcXZycGJua29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5"
        class="google_calender"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>

<style lang="scss" scoped>
.label {
  background: #0B3364;
  height: 40px;
  .label_text {
    font-size: 16px;
    color: white;
  }
}

@media screen and (min-width: 767px) {
  .google_calender {
    border-width: 0;
    width: 100%;
    height: 500px;
  }
}

@media screen and (max-width: 767px) {
  .google_calender {
    border-width: 0;
    width: 100%;
    height: 280px;
  }
}
</style>
