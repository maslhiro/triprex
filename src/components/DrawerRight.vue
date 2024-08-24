<template>
  <q-drawer
    side="right"
    :model-value="visible"
    overlay
    bordered
    :width="width"
    style="
      background-image: url(https://triprex.egenslab.com/wp-content/plugins/triprex-core//inc/theme-options/images/sidebar/h-sidebar-bg.png);
    "
  >
    <div class="row justify-between q-py-lg q-px-md divider">
      <img src="logo.svg" height="40px" fit="contain" ratio="1" />
      <q-btn color="dark" round icon="close" @click="onClose" size="md" />
    </div>

    <div class="q-py-lg q-px-md">
      <div class="text-h5 q-pb-lg text-weight-bolder">{{ tourTitle }}</div>
      <div class="row q-col-gutter-lg">
        <div class="col-4" v-for="item in tourData" :key="item.icon">
          <q-btn class="q-pa-sm overflow-hidden bg-accent">
            <div class="icon">
              <img :src="item.icon" />
            </div>
            <div class="text-subtitle2">{{ item.title }}</div>
          </q-btn>
        </div>
      </div>
    </div>

    <div class="q-pa-md bg-transparent">
      <div class="text-h5 q-pb-lg text-weight-bolder">Ours Destination</div>
      <q-carousel
        animated
        infinite
        v-model="carousel"
        autoplay
        transition-prev="slide-right"
        transition-next="slide-left"
        class="bg-transparent"
        style="height: auto"
      >
        <q-carousel-slide
          class="flex row justify-between"
          v-for="(item, index) in carouselData"
          :key="index"
          :name="index"
        >
          <destination-card
            v-for="tour in item"
            :key="tour.name"
            class="tour-card"
            :name="tour.name"
            :image="tour.image"
            :desc="tour.desc"
            :href="tour.href"
          />
        </q-carousel-slide>
      </q-carousel>
      <div class="q-px-md q-mt-lg row justify-between">
        <img src="sidebar-prev.svg" fit="contain" ratio="1" />
        <q-btn push color="primary" rounded no-caps>View All</q-btn>
        <img src="sidebar-next.svg" fit="contain" ratio="1" />
      </div>
    </div>

    <div class="q-pb-lg divider" />

    <div class="q-py-lg q-px-md row">
      <extra-info
        v-for="item in contact"
        :key="item.title"
        class="col-6"
        :title="item.title"
        :desc="item.desc"
        :icon="item.icon"
        size="small"
      />
    </div>
  </q-drawer>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import ExtraInfo from './ExtraInfo.vue';
import DestinationCard from './DestinationCard.vue';
import { useDestinationStore } from 'src/stores/destination';
import { Destination } from 'src/types';

const q = useQuasar();

defineOptions({
  name: 'DrawerRight',
});

interface TourType {
  title: string;
  icon: string;
  href: string;
}

interface ContactInformation {
  title: string;
  icon?: string;
  desc: string;
}

export interface Props {
  visible: boolean;
  onClose: () => void;
  tourTitle: string;
  tourData: TourType[];
  destinationTitle: string;
  contact: ContactInformation[];
}

const carousel = ref(1);

const destinationStore = useDestinationStore();

const destinationList: Destination[] = destinationStore.ourDestination;

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  onClose: () => null,
  tourTitle: '',
  tourData: () => [],
});

const DEFAULT_WIDTH_1 = 500;
const DEFAULT_WIDTH_2 = 300;
const width = computed(() =>
  q.screen?.width / 2 > DEFAULT_WIDTH_1 ? DEFAULT_WIDTH_1 : DEFAULT_WIDTH_2
);
const carouselData = computed(() => {
  let result: Destination[][] = [];
  for (let i = 0; i < destinationList.length; i++) {
    if (i != 0 && result[result.length - 1].length != 2) {
      result[result.length - 1].push(destinationList[i]);
    } else result.push([destinationList[i]]);
  }
  return result;
});
</script>
<style lang="scss" scoped>
@import '../css/app.scss';

.tour-card {
  width: 100%;
  max-width: 200px;
  height: 210px;
  background-size: cover;
}

.divider {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: aquamarine;
}
</style>
