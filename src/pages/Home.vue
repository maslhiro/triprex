<template>
  <div class="q-pa-md">
    <q-carousel animated v-model="slide" arrows infinite height="500px">
      <q-carousel-slide
        :name="1"
        style="
          background-image: linear-gradient(
              180deg,
              rgba(16, 12, 8, 0.4) 0%,
              rgba(16, 12, 8, 0.4) 100%
            ),
            url(home_slider_1.jpg);
          background-position: center;
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
        "
        class="text-white"
      >
        <div class="container text-center non-selectable flex column">
          <div
            style="
              background-image: url('banner_batch_bg.svg');
              mask-repeat: no-repeat;
              mask-position: center;
              mask-size: contain;

              -webkit-mask-image: url('banner_batch_bg.svg');
              -webkit-mask-position: center;
              -webkit-mask-repeat: no-repeat;
              -webkit-mask-size: contain;

              display: inline-flex;

              white-space: nowrap;
              display: inline-flex;
              margin-bottom: 15px;

              background-color: #fbb03b;
              /* padding: 30px; */
            "
            class="q-pa-sm non-selectable text-h5 text-weight-medium justify-center items-center"
          >
            <q-icon
              name="share_location"
              color="white"
              size="md"
              class="q-mr-sm"
            />
            Italy
          </div>

          <div class="text-h2 text-weight-bolder q-py-lg">
            Let's Explore Your Holiday Trip.
          </div>
          <p class="text-subtitle1 text-weight-bold">
            Life is unpredictable, and we understand that plans might change.
            Enjoy flexible booking options, so you can reschedule or modify your
            trip with ease.
          </p>

          <div class="row self-center items-center">
            <div>
              <q-btn color="primary" label="Book A Trip" size="md" no-caps />
            </div>

            <div class="q-ml-lg q-qa-lg row content-center items-center">
              <q-icon
                name="compost"
                color="white"
                size="3rem"
                class="q-mr-sm"
              />
              <div class="text-subtitle1 text-weight-bold">
                <div class="">Tripadvisor</div>
                <div>5.0/5.0</div>
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>

      <!-- <q-carousel-slide :name="2" img-src="home_slider_2.jpg" />
      <q-carousel-slide :name="3" img-src="home_slider_3.jpg" /> -->
    </q-carousel>
  </div>
  <div style="width: 100%; min-height: 20em"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'HomePage',
});

const slide = ref(1);
</script>

<style scoped lang="scss"></style>
