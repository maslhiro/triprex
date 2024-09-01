<template>
  <fancy-box
    :options="{
      Carousel: {
        infinite: false,
      },
      mainClass: 'fancy-body',
      baseClass: 'fancy-body',
    }"
  >
    <div class="container">
      <div iv v-for="(item, index) in data" :key="index" :class="item.class">
        <div v-if="item.type == 'video'">
          <a :href="item.src" data-fancybox="gallery">
            <img :src="item.preview" />
          </a>
        </div>
        <a
          v-else
          data-fancybox="gallery"
          :data-src="item.src.concat('/1600x1200')"
        >
          <img :src="item.src.concat('/800x400')" :alt="index.toString()" />
        </a>
      </div>
    </div>
  </fancy-box>
</template>

<script setup lang="ts">
import { GalleryItem } from 'src/types';
import FancyBox from './FancyBox.vue';
import { ref } from 'vue';

interface Props {
  data: GalleryItem[];
}

withDefaults(defineProps<Props>(), {
  data: () => [],
});
</script>

<style scoped lang="scss">
.fancy-body {
  z-index: 10000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

span {
  box-sizing: border-box;
  position: relative;
  /*   box-shadow: 0px 1px 0px 0px black; */
}

span:after {
  display: block;
  position: absolute;
  width: 100%;
  content: '';
  border-bottom: 1px solid black;
  padding: 0 0 0.4em 2em; /*top right bottom left*/
  left: -3em;
  animation: 3s ease-out 0s slideInFromLeft;
}

.container {
  grid-area: c;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 20px;
  grid-auto-flow: dense;
  overflow: auto;
  padding-right: 20px; /*fix box-shadow on right side cutting off*/
}
/*scrollbar stuff*/
.container {
  -ms-overflow-style: none; // IE 10+
  overflow: -moz-scrollbars-none; // Firefox
}
.container::-webkit-scrollbar {
  display: none; // Safari and Chrome
}
.container > div {
  z-index: 1;
  position: relative;
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.container div img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
}

/*make bIG*/
.container > div:hover,
.container > div:hover img {
  transform: scale(1.01);
}

.vertical {
  grid-row: span 2;
}
.horizontal {
  grid-column: span 2;
}
.big {
  grid-row: span 2;
  grid-column: span 2;
}

.palette {
  color: #e2a9e5; /*.arrowButton*/
  color: #632c65; /*social media icons*/
  color: #4b384c; /*footer*/
}

/* Animation Stuff */
*:not(a) {
  animation: 3s ease-out 0s 1 fadeIn;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-130%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideInFromRight {
  0% {
    transform: translateX(300%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideInFromBottomActive {
  0% {
    padding-bottom: 300px;
  }
  100% {
  }
}
@keyframes slideInFromTop {
  0% {
    opacity: 0;
    margin-bottom: -100%;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
