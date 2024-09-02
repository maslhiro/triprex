<template>
  <header-cover :title="data?.name" />
  <div class="container content">
    <photo-gallery class="q-my-lg" :data="galleryData" />
    <div class="row">
      <div class="col-md-8 col-lg-9 col-12 column q-gutter-y-lg q-pr-sm">
        <div class="text-h4 text-weight-bolder text-primary">
          <span
            >${{ data?.price }}
            <del class="text-h5 text-weight-bolder text-grey"
              >${{ data?.originalPrice }}</del
            ></span
          >/<span class="text-body1 text-black">Per Person</span>
        </div>

        <div class="row q-gutter-x-md">
          <div class="row items-center">
            <q-icon name="schedule" size="1.5rem" color="primary" />
            <div class="q-ml-sm text-subtitle1 text-weight-bold">
              {{ data?.date }}
            </div>
          </div>

          <div class="row items-center">
            <q-icon name="group" size="1.5rem" color="primary" />
            <div class="q-ml-sm text-subtitle1 text-weight-bold">
              Max People: {{ data?.maxPeople }}
            </div>
          </div>

          <div class="row items-center">
            <q-icon name="map" size="1.5rem" color="primary" />
            <div class="q-ml-sm text-subtitle1 text-weight-bold">
              {{ data?.location }}
            </div>
          </div>
        </div>

        <p class="text">
          {{ data?.description }}
        </p>

        <div class="text-h5 text-weight-bold">Included and Excluded</div>

        <div class="row">
          <div class="col-md-6 col include-content">
            <ul>
              <li class="text" v-for="item in data?.included" :key="item">
                <i></i> {{ item }}
              </li>
            </ul>
          </div>

          <div class="col-md-6 col exclude-content">
            <ul>
              <li class="text" v-for="item in data?.excluded" :key="item">
                <i></i> {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="text-h5 text-weight-bold">Highlights of the Tour</div>

        <div class="col highlight-content">
          <ul>
            <li class="text" v-for="item in data?.highlights" :key="item">
              <i></i> {{ item }}
            </li>
          </ul>
        </div>

        <div class="text-h5 text-weight-bold">Itinerary</div>

        <div class="q-gutter-lg">
          <q-expansion-item
            v-for="(item, index) in data?.itinerary"
            :key="item.name"
            expand-separator
          >
            <template v-slot:header>
              <div class="row full-width cursor-pointer non-selectable">
                <div
                  class="text-h6 text-weight-bold text-white q-pa-sm bg-primary column justify-center"
                  style="border-radius: 4px; overflow: hidden"
                >
                  {{ `Day ${index < 10 ? `0${index + 1}` : index + 1} :` }}
                </div>
                <div
                  class="col-grow q-px-sm justify-center column text-h6"
                  style="flex: 1"
                >
                  {{ item.name }}
                </div>
              </div>
            </template>
            <q-card>
              <q-card-section class="text">
                {{ item.description }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>

        <div class="text-h5 text-weight-bold">Location</div>

        <div
          class="bg-accent justify-center text-h6 items-center column"
          style="min-height: 300px"
        >
          <q-img
            src="https://pic-bstarstatic.akamaized.net/ugc/01bf8514c5b9b5ada4229c1eb1019457.jpg"
          />
        </div>

        <div class="text-h5 text-weight-bold">Frequently Asked & Question</div>
        <div class="q-gutter-lg">
          <q-expansion-item
            v-for="(item, index) in data?.faq"
            :key="item.question"
          >
            <template v-slot:header>
              <div
                class="text-subtitle1 full-width columns text-weight-bold non-selectable justify-center column"
              >
                {{ `${index < 10 ? `0${index + 1}` : index + 1}. `
                }}{{ item.question }}
              </div>
            </template>
            <q-card>
              <q-card-section class="text">
                {{ item.answer }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>
      <div class="col-md-4 col-lg-3 col-12">
        <div class="q-pa-lg bg-accent" style="border-radius: 4px">
          <div class="text-h5 text-weight-bold text-center">Book Your Tour</div>
          <div class="text text-center q-py-md">
            Reserve your ideal trip early for a hassle-free trip; secure comfort
            and convenience!
          </div>
          <q-separator />
          <div class="q-py-md row justify-evenly" style="display: flex">
            <q-btn
              no-caps
              :color="type == 'booking' ? 'primary' : 'default'"
              :text-color="type == 'booking' ? 'white' : 'primary'"
              @click="type = 'booking'"
            >
              Online Booking
            </q-btn>
            <q-btn
              no-caps
              :color="type == 'inquiry' ? 'primary' : 'white'"
              :text-color="type == 'inquiry' ? 'white' : 'primary'"
              @click="type = 'inquiry'"
            >
              Inquiry Form
            </q-btn>
          </div>
          <booking-form :type="type" />
        </div>
      </div>
    </div>
  </div>

  <div style="width: 100%; min-height: 20em"></div>
</template>
<script setup lang="ts">
import HeaderCover from 'src/components/HeaderCover.vue';
import PhotoGallery from 'src/components/PhotoGallery.vue';
import BookingForm from 'src/components/BookingForm.vue';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import MockData from 'src/apis/toursMockData';
import { useTourStore } from 'src/stores/tours';
import { getDetails } from 'src/apis/tours';
import { GalleryItem, TourDetail } from 'src/types';

defineOptions({
  name: 'PackageDetail',
});
const tourStore = useTourStore();
const route = useRoute();
const id = computed(() => route.params.id as string);

const data = ref<TourDetail>();

const galleryData = computed<GalleryItem[]>(() => {
  const format = [
    'vertical',
    'vertical',
    'horizontal',
    'horizontal',
    'big',
    'horizontal',
    'horizontal',
  ];
  const images = data?.value?.photos || [];
  const videos = data?.value?.videos || [];

  const imageItems = images.map(
    (src, index) =>
      ({
        src,
        class: format[index] || 'vertical',
        type: 'image',
      } as GalleryItem)
  );

  const videoItems = videos.map(
    ({ source: src, preview }) =>
      ({
        src,
        preview,
        class: 'horizontal',
        type: 'video',
      } as GalleryItem)
  );

  return [...imageItems, ...videoItems];
});

const type = ref<'booking' | 'inquiry'>('booking');

const fetchData = async () => {
  data.value = await getDetails(id.value);
};

watch(() => route.params.id, fetchData, { immediate: true });
</script>

<style scoped lang="scss">
@import '../css/app.scss';

.content {
  margin-top: 100px;
  margin-bottom: 100px;
}

.text {
  color: grey;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.54px;
}

.include-content {
  position: relative;
}

.include-content ::v-deep ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.include-content ::v-deep ul li i::before {
  font-family: 'Material Icons';
  font-weight: bolder;
  content: '\e92f';
  font-style: normal;
  color: var(--q-primary);
}

.exclude-content {
  position: relative;
}

.exclude-content ::v-deep ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.exclude-content ::v-deep ul li i::before {
  font-family: 'Material Icons';
  font-weight: bolder;
  font-style: normal;
  content: '\e5cd';
  color: var(--q-primary);
}

.highlight-content {
  position: relative;
}

.highlight-content ::v-deep ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.highlight-content ::v-deep ul li i::before {
  font-family: 'Material Icons';
  font-weight: bolder;
  font-style: normal;
  content: '\e877';
  color: var(--q-primary);
}
</style>
