<template>
  <div class="q-pa-md">
    <div style="border-radius: 24px; overflow: hidden; margin: 0px 42px">
      <q-carousel
        animated
        v-model="slide"
        arrows
        infinite
        height="700px"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <home-slide
          :name="1"
          :data="{
            img: 'home_slider_1.jpg',
            location: 'Italy',
            title: `Let's Explore Your Holiday Trip.`,
            desc: `Life is unpredictable, and we understand that plans might change. Enjoy flexible booking options, so you can reschedule or modify your trip with ease.`,
          }"
        />
        <home-slide
          :name="2"
          :data="{
            img: 'home_slider_2.jpg',
            location: 'Spain',
            title: `Let's journey and discover a place.`,
            desc: `Life is unpredictable, and we understand that plans might change. Enjoy flexible booking options, so you can reschedule or modify your trip with ease.`,
          }"
        />

        <home-slide
          :name="3"
          :data="{
            img: 'home_slider_3.jpg',
            location: 'France',
            title: `Lets trek and venture to a spot.`,
            desc: `Life is unpredictable, and we understand that plans might change. Enjoy flexible booking options, so you can reschedule or modify your trip with ease.`,
          }"
        />

        <!-- <q-carousel-slide :name="2" img-src="home_slider_2.jpg" />
      <q-carousel-slide :name="3" img-src="home_slider_3.jpg" /> -->
      </q-carousel>

      <div
        class="col full-width flex bg-accent"
        style="
          margin-top: -66px;
          align-items: flex-start;
          justify-content: center;
        "
      >
        <q-btn-group class="no-shadow overflow-hidden">
          <q-btn
            @click="id = item.id"
            v-for="item in btnGroup"
            :key="item.id"
            no-caps
            :label="item.title"
            :icon="item.icon"
            size="lg"
            class="q-pa-md no-border-radius"
            :color="item.id == id ? 'primary' : 'accent'"
            :text-color="item.id == id ? 'white' : 'black'"
          />
        </q-btn-group>

        <div class="bg-accent full-width row q-col-gutter-md">
          <div class="col-md-1 gt-sm" />
          <home-select
            class="col-6 col-md-3 text-h6"
            :options="options"
            title="Destination"
            icon="tour"
          />
          <home-select
            class="col-6 col-md-2 text-h6"
            :options="options"
            title="Tour Type"
            icon="festival"
          />
          <home-select
            class="col-6 col-md-2 text-h6"
            :options="options"
            title="When"
            icon="schedule"
          />
          <home-select
            class="col-6 col-md-3 text-h6"
            :options="options"
            title="Tour Duration"
            icon="timer"
          />
          <div class="col-grow">
            <q-btn
              no-caps
              text-color="white"
              color="primary"
              class="full-width"
              size="lg"
              label="Search"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container q-py-lg non-selectable">
      <div class="col row q-col-gutter-x-lg">
        <home-session
          class="col-12 col-md-6"
          session="About Us"
          title="Let's Know About Our Journey For TripRex"
          desc="Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula tortor malesuada gravida. Mauris volutpat enim quis pulv gont congue. Suspendisse ullamcorper, enim vitae tristique blandit, eratot augue torel tempo libero, non porta lectus tortor et elit. Quisque finibusot enim et eratourgt gravida, eu elementum turpis lacinia. Integer female go tellus ligula, attendora and condimentum."
        >
          <div class="flex justify-between items-center">
            <q-btn
              class="q-ma-lg"
              no-caps
              size="lg"
              color="primary"
              label="More About"
              to="/contact"
            />

            <div class="q-pa-md row items-center" style="height: 80px">
              <div class="self-center justify-center">
                <q-avatar
                  v-for="n in 5"
                  :key="n"
                  size="40px"
                  class="overlapping"
                  :style="`left: -${n * 14}px`"
                >
                  <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`" />
                </q-avatar>
              </div>
              <div class="column">
                <span class="text-h6 text-weight-bold">600+</span>
                <span class="text-h6">Customer</span>
              </div>
            </div>
          </div>
        </home-session>

        <q-img
          fit="scale-down"
          class="gt-sm col-6"
          src="https://triprex.b-cdn.net/wp-content/uploads/2024/02/about-img.png"
        />
      </div>

      <home-session
        session="Journey to the"
        title="Desired Vacation Spots"
        session-class="text-center"
        title-class="text-center"
      >
      </home-session>

      <home-session
        session="Tour Package"
        title="Affordable Vacation Bundles"
        session-class="text-center"
        title-class="text-center"
      >
        <div class="row q-col-gutter-md">
          <package-card
            class="col-12 col-md-6 col-lg-4"
            v-for="item in recommendTour"
            :key="item.name"
            :data="item"
          />
        </div>

        <q-btn
          class="q-ma-lg self-center"
          no-caps
          size="lg"
          rounded
          color="secondary"
          text-color="black"
          label="View All Package"
          to="/package-sidebar"
        />
      </home-session>
    </div>
  </div>

  <div style="width: 100%; min-height: 20em"></div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import HomeSlide from 'src/components/HomeSlide.vue';
import HomeSelect from 'src/components/HomeSelect.vue';
import HomeSession from 'src/components/HomeSession.vue';
import PackageCard from 'src/components/PackageCard.vue';
import PhotoGallery from 'src/components/PhotoGallery.vue';

import { useTourStore } from 'src/stores/tours';
const store = useTourStore();

const recommendTour = computed(() => store.bundle);

defineOptions({
  name: 'HomePage',
});

const btnGroup = [
  {
    id: '1',
    title: 'Tour',
    icon: 'tour',
  },
  {
    id: '2',
    title: 'Hotel',
    icon: 'hotel',
  },
  {
    id: '3',
    title: 'Visa',
    icon: 'assured_workload',
  },
  {
    id: '4',
    title: 'Activities',
    icon: 'hiking',
  },
  {
    id: '5',
    title: 'Transport',
    icon: 'flight_takeoff',
  },
];

const model = ref(null);
const options = ref(['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']);

const slide = ref(1);
const id = ref('1');
</script>

<style scoped lang="scss">
.overlapping {
  border: 2px solid white;
}
</style>
