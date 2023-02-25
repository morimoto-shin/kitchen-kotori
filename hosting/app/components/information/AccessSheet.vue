<template>
  <v-row class="mb-4">
    <v-col class="label" cols="12">
      <span class="label_text">住所</span>
    </v-col>
    <v-col cols="12" class="mt-4 pa-0">
      <div class="map-wrapper">
        <div class="google_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.7459943478866!2d134.0386394!3d35.0630891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355436bd5a1b3fcf%3A0x17b3a2acb40d4e15!2z44CSNzA4LTA4NDEg5bKh5bGx55yM5rSl5bGx5biC5bed5bSO77yR77yX77yW77yV4oiS77yR!5e0!3m2!1sja!2sjp!4v1649668755753!5m2!1sja!2sjp"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <p>岡山県津山市川崎1765-1</p>
      <p>車: 中国自動車道津山ICより約5分</p>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.label {
  background: #0b3364;
  height: 40px;
  .label_text {
    font-size: 16px;
    color: white;
  }
}

.map-wrapper {
  max-width: 640px;
  min-width: 280px;
  margin: 20px 0;
  padding: 4px;
  border: 1px solid #ccc;
}
.google_map {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.google_map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
