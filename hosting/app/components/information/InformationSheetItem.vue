<template>
  <v-row>
    <v-col class="label" cols="12">
      <span class="label_text">{{ label }}</span>
    </v-col>
    <v-col class="value" cols="12">
      <span class="value_text">{{ value }}</span>
      <p v-if="attention" class="attention_text">*{{ attention }}</p>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    attention: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.label {
  background: #3a3a3a;
  height: 40px;
  .label_text {
    font-size: 16px;
    color: white;
  }
}
.value {
  margin-top: 5px;
  .value_text {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .attention_text {
    font-size: 12px;
  }
}
</style>
