<template>
  <q-card
    v-ripple
    class="q-hoverable cursor-pointer destination-card"
    @click="onClick"
    :style="{
      'background-image': `url(${image})`,
    }"
  >
    <q-card-section class="flex justify-end">
      <div
        class="text-caption text-bold q-px-sm q-py-xxs borer text-dark bg-secondary"
        style="border-radius: 4px"
      >
        {{ desc }}
      </div>
    </q-card-section>
    <q-space />

    <div class="absolute-bottom q-pa-md">
      <div class="text-subtitle2 text-secondary text-bold">Travel to</div>
      <div class="text-h5 text-white text-weight-bold">
        {{ name }}
      </div>
    </div>
  </q-card>
</template>
<script setup lang="ts">
import { Destination } from 'src/types';
import { useRouter } from 'vue-router';

const router = useRouter();

defineOptions({
  name: 'DestinationCard',
});

const props = withDefaults(defineProps<Destination>(), {
  name: '',
  desc: '',
  image: '',
  href: '',
});

const onClick = () => {
  if (props?.href) router.push({ path: props?.href });
};
</script>
<style lang="scss">
.destination-card {
  background-size: cover;
}
</style>
