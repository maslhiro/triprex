<template>
  <q-carousel-slide
    :name="props.name"
    :style="`background-image: ${backgroundImage}`"
    class="text-white content"
  >
    <div class="container text-center non-selectable flex column">
      <div
        class="q-pa-sm location non-selectable text-h5 text-weight-medium justify-center items-center"
      >
        <q-icon name="share_location" color="white" size="md" class="q-mr-sm" />
        {{ props.data.location }}
      </div>

      <div class="text-h2 text-weight-bolder q-py-lg">
        {{ props.data.title }}
      </div>
      <p class="text-subtitle1 text-weight-bold">
        {{ props.data.desc }}
      </p>

      <div class="row self-center items-center">
        <div>
          <q-btn
            color="primary"
            label="Book A Trip"
            size="md"
            no-caps
            to="/tour"
          />
        </div>

        <div class="q-ml-lg q-qa-lg row content-center items-center">
          <q-icon name="compost" color="white" size="3rem" class="q-mr-sm" />
          <div class="text-subtitle1 text-weight-bold">
            <div class="">Tripadvisor</div>
            <div>5.0/5.0</div>
          </div>
        </div>
      </div>
    </div>
  </q-carousel-slide>
</template>
<script setup lang="ts">
import { Slide } from 'src/types';
import { computed } from 'vue';

defineOptions({
  name: 'HomeSlide',
});

interface Props {
  data: Slide;
  name: number;
}

const props = withDefaults(defineProps<Props>(), {});

const backgroundImage = computed(
  () => `linear-gradient(
          180deg,
          rgba(16, 12, 8, 0.4) 0%,
          rgba(16, 12, 8, 0.4) 100%
        ), url(${props.data.img})`
);
</script>
<style lang="scss" scoped>
.content {
  background-position: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.location {
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
}
</style>
