<template>
  <div class="q-pa-md">
    <div style="border-radius: 24px; overflow: hidden; margin: 0px 42px">
      <q-carousel
        animated
        v-model="slideIndex"
        arrows
        infinite
        height="700px"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <home-slide
          v-for="(item, index) in slide"
          :key="item.title"
          :name="index"
          :data="item"
        />
      </q-carousel>

      <div class="col full-width flex bg-accent btn-group">
        <q-btn-group square unelevated class="btn-group-content">
          <q-btn
            v-for="(item, index) in tabData"
            :key="item.id"
            @click="tabIndex = index"
            no-caps
            :label="item.title"
            :icon="item.icon"
            size="1rem"
            class="q-pa-md no-border-radius"
            :color="index == tabIndex ? 'primary' : 'accent'"
            :text-color="index == tabIndex ? 'white' : 'black'"
          />
        </q-btn-group>

        <div class="bg-accent full-width row q-col-gutter-md">
          <div class="col-md-1 gt-sm" />
          <home-select
            v-for="item in tabData[tabIndex].select"
            :key="item.title"
            :class="item.class"
            :options="item.options"
            :placeholder="item.placeholder"
            :icon="item.icon"
            :title="item.title"
          />
          <div class="col-grow bg-green">
            <div
              class="fit items-center justify-center flex text-h6 text-white non-selectable"
            >
              <q-btn
                no-caps
                flat
                size="1.2rem"
                text-color="white"
                color="primary"
                to="/package-sidebar"
                class="text-weight-bold"
                label="Search"
              />
            </div>
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

import { useTourStore } from 'src/stores/tours';
import { Slide } from 'src/types';
import { title } from 'process';
const store = useTourStore();

const recommendTour = computed(() => store.bundle);

defineOptions({
  name: 'HomePage',
});

const slide: Slide[] = [
  {
    img: 'home_slider_1.jpg',
    location: 'Italy',
    title: "Let's Explore Your Holiday Trip.",
    desc: 'Life is unpredictable, and we understand that plans might change. Enjoy flexible booking options, so you can reschedule or modify your trip with ease.',
  },
  {
    img: 'home_slider_2.jpg',
    location: 'Spain',
    title: "Let's journey and discover a place.",
    desc: 'Life is unpredictable, and we understand that plans might change. Enjoy flexible booking options, so you can reschedule or modify your trip with ease.',
  },
  {
    img: 'home_slider_3.jpg',
    location: 'France',
    title: 'Lets trek and venture to a spot.',
    desc: 'Life is unpredictable, and we understand that plans might change. Enjoy flexible booking options, so you can reschedule or modify your trip with ease.',
  },
];

const tabData = [
  {
    id: 1,
    title: 'Tour',
    icon: 'tour',
    select: [
      {
        title: 'Destination',
        icon: 'tour',
        placeholder: 'Select Destination',
        options: ['Japan', 'India', 'UK', 'China', 'Netherlands'],
        class: 'col-6 col-md-3',
      },
      {
        title: 'Tour Type',
        icon: 'map',
        placeholder: 'Select Month',
        options: [
          'Luxury Tour',
          'Group Tour',
          'Cultural Tour',
          'Honey Moon Tour',
          'Adventure Tour',
        ],
        class: 'col-6 col-md-2',
      },
      {
        title: 'When',
        icon: 'calendar_month',
        placeholder: 'Select Month',
        options: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        class: 'col-6 col-md-2',
      },
      {
        title: 'Tour Duration',
        icon: 'timer',
        placeholder: 'Select Duration',
        options: [
          '1 Week',
          '3 Days/ 4 Nights',
          '4 Days/ 4 Nights',
          '10 Days/ 11 Nights',
        ],
        class: 'col-6 col-md-3',
      },
    ],
  },
  {
    id: 2,
    title: 'Hotel',
    icon: 'hotel',
    select: [
      {
        title: 'Destination',
        icon: 'tour',
        placeholder: 'Select Destination',
        options: ['Japan', 'India', 'UK', 'China', 'Netherlands'],
        class: 'col-6 col-md-3',
      },
      {
        title: 'Check in - Check out',
        icon: 'event_available',
        placeholder: '19-Sep - 20-Sep',
        options: [
          '19-Sep - 20-Sep',
          '19-Sep - 21-Sep',
          '19-Sep - 22-Sep',
          '10-Sep - 24-Sep',
        ],
        class: 'col-6 col-md-3',
      },
      {
        title: 'Room',
        icon: 'bed',
        placeholder: 'Room Type',
        options: ['Sea View', 'Family Room', 'Couple Room'],
        class: 'col-6 col-md-2',
      },
      {
        title: 'Guest',
        icon: 'person',
        placeholder: '1 Person',
        options: ['1 Person', '2 Person', '2 Person - 1 Children'],
        class: 'col-6 col-md-2',
      },
    ],
  },
  {
    id: 3,
    title: 'Visa',
    icon: 'assured_workload',
    select: [
      {
        title: 'Country',
        icon: 'tour',
        placeholder: 'Select Country',
        options: ['Japan', 'India', 'UK', 'China', 'Netherlands'],
        class: 'col-6 col-md-3',
      },
      {
        title: 'Visa Type',
        icon: 'menu',
        placeholder: 'Select Visa Type',
        options: ['Tourist', 'Medical', 'Diplomat'],
        class: 'col-6 col-md-3',
      },
      {
        title: 'Visa Mode',
        icon: 'menu',
        placeholder: 'Select Visa Mode',
        options: ['B2B Visa', 'Electronic', 'Emergency'],
        class: 'col-12 col-md-3',
      },
    ],
  },
  {
    id: 4,
    title: 'Activities',
    icon: 'hiking',
    select: [
      {
        title: 'Country',
        icon: 'tour',
        placeholder: 'Select Country',
        options: ['Japan', 'India', 'UK', 'China', 'Netherlands'],
        class: 'col-6 col-md-3',
      },
      {
        title: 'Activities Type',
        icon: 'directions_run',
        placeholder: 'Select Activities Type',
        options: ['Tourist', 'Medical', 'Diplomat'],
        class: 'col-6 col-md-3',
      },
      {
        title: 'Activities Day',
        icon: 'timer',
        placeholder: '19-Sep-2024',
        options: ['19-Sep-2024', '20-Sep-2024', '21-Sep-2024'],
        class: 'col-12 col-md-3',
      },
    ],
  },
  {
    id: 5,
    title: 'Transport',
    icon: 'flight_takeoff',
    select: [
      {
        title: 'Location From',
        icon: 'tour',
        placeholder: 'Select Location',
        options: ['Japan', 'India', 'UK', 'China', 'Netherlands'],
        class: 'col-6 col-md-3',
      },
      {
        title: 'Transport Type',
        icon: 'emoji_transportation',
        placeholder: 'Which Type?',
        options: ['Bus', 'Boat', 'Car', 'Train'],
        class: 'col-6 col-md-3',
      },
      {
        title: 'Reverse Day',
        icon: 'timer',
        placeholder: '19-Sep-2024',
        options: ['19-Sep-2024', '20-Sep-2024', '21-Sep-2024'],
        class: 'col-12 col-md-3',
      },
    ],
  },
];

const model = ref(null);

const slideIndex = ref(1);
const tabIndex = ref(0);
</script>

<style scoped lang="scss">
.overlapping {
  border: 2px solid white;
}

.btn-group {
  margin-top: -59px;
  align-items: flex-start;
  justify-content: center;
}

.btn-group-content {
  -moz-border-radius: 0px;
  -webkit-border-radius: 24px 24px 0px 0px;
  border-radius: 24px 24px 0px 0px;
  overflow: hidden;
}
</style>
