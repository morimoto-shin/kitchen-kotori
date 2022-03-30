<template>
  <div>
    <v-carousel
      cycle
      :height="$vuetify.breakpoint.height - 200"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="item in carouselItems"
        :key="item.src"
        :src="item.src"
      />
    </v-carousel>
    <v-container class="pa-0 home_container">
      <v-row justify="center" align="center">
        <v-col cols="2" md="3"></v-col>
        <v-col cols="8" md="6" align="center">
          <h1 class="mb-2 content_title">Concept</h1>
          <v-divider></v-divider>
          <h3 class="my-4" align="center">
            スイーツからカフェご飯まで手作りの味を堪能
          </h3>
          <p class="content_text">
            スイーツからカフェご飯まで、手作りの味をいただける「キッチン小鳥」。清潔感のある明るい店内には、店名にちなんでキュートな小鳥の小物が随所に飾られている。地元の新鮮野菜をたっぷり使った料理はヘルシーで、しかもご飯がモリモリ進むと評判だ。自家製の仕込み味噌を使った味噌汁にもファンが多い。野菜の旬に合わせた季節メニュー、デザートメニュー、子ども用メニューもあり、さまざまなシーンで「小鳥」の味を楽しめる。
          </p>
        </v-col>
        <v-col cols="2" md="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const carouselItems = [
      { name: 'home_1', src: '/img/home_1.png' },
      // { name: 'home_2', src: '/img/home_2.png' },
      // { name: 'home_3', src: '/img/home_3.png' },
      // { name: 'home_4', src: '/img/home_4.png' },
      // { name: 'home_5', src: '/img/home_5.png' },
    ]
    useMeta(() => ({ title: 'キッチン小鳥 | カフェ | 岡山県津山市' }))
    return {
      carouselItems,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped>
.home_container {
  max-width: 100% !important;
  margin-top: 50px;
  margin-bottom: 100px;
}
.content_title {
  font-size: 30px;
}
.content_text {
  line-height: 30px;
}
@media screen and (max-width: 767px) {
  .carousel {
    height: 400px;
  }
}
@media screen and (min-width: 767px) {
  .carousel {
    height: 800px;
  }
}
</style>
