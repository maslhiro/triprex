<template>
  <div class="col row q-mb-lg">
    <q-btn
      v-for="(item, index) in data"
      :key="item.name"
      flat
      size="medium"
      @click="currentIndex = index"
      :class="index == currentIndex ? `text-weight-bold` : ``"
      :color="index == currentIndex ? `primary` : `dark`"
      >{{ item.name }}
    </q-btn>
  </div>

  <fancy-box
    :options="{
      Carousel: {
        infinite: false,
      },
      mainClass: 'fancy-body',
      baseClass: 'fancy-body',
    }"
  >
    <div class="row q-col-gutter-md">
      <a
        v-for="item in visibleData"
        :key="item"
        class="col-md-4 col-6 zoom-img"
        data-fancybox="gallery"
        :data-src="item.concat('/1600x1200')"
      >
        <q-img class="image" :src="item.concat('/200x150')" />
      </a>
    </div>
  </fancy-box>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import FancyBox from './FancyBox.vue';
import { Location } from 'src/types';

defineOptions({
  name: 'ImageGallery',
});

interface Props {
  data?: Location[];
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
});

const currentIndex = ref(0);

const visibleData = computed(() => props.data?.[currentIndex.value]?.images);
</script>
<style lang="scss" scoped>
.fancy-body {
  z-index: 10000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.zoom-img {
  display: block;
  overflow: hidden;
  position: relative;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image:hover {
  transform: scale(1.01);
}
</style>
