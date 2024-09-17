<template>
  <div class="q-pa-md">
    <div style="border-radius: 24px; overflow: hidden; margin: 0px 42px">
      <q-carousel
        animated
        v-model="slide"
        arrows
        infinite
        autoplay
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
        <q-btn-group
          push
          class="no-shadow"
          style="
            border-top-left-radius: 80px 80px;
            border-top-right-radius: 12px 12px;
          "
        >
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

        <div class="q-pa-md bg-accent full-width row q-gutter-x-lg">
          <home-select :options="options" title="Destination" icon="tour" />
          <home-select :options="options" title="Tour Type" icon="festival" />
          <home-select :options="options" title="When" icon="schedule" />
          <home-select :options="options" title="Tour Duration" icon="timer" />

          <q-btn color="primary" class="col-grow" size="lg" label="Search" />

          <!-- <q-select
            class="col-3"
            v-model="model"
            :options="options"
            label="Filled"
          >
            <template v-slot:before>
              <q-icon name="flight_takeoff" />
            </template>
          </q-select>
          <q-select
            class="col-3"
            v-model="model"
            :options="options"
            label="Filled"
          >
          </q-select>
          <q-select
            class="col-3"
            v-model="model"
            :options="options"
            label="Filled"
          >
          </q-select> -->
        </div>
      </div>
    </div>
  </div>

  <div style="width: 100%; min-height: 20em"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomeSlide from 'src/components/HomeSlide.vue';
import HomeSelect from 'src/components/HomeSelect.vue';

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

<style scoped lang="scss"></style>
