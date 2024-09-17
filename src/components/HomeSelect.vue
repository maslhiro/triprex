<template>
  <q-select
    class="col-2a32 text-subtitle1"
    popup-content-class="text-subtitle1 text-weight-medium"
    v-model="model"
    :options="options"
    hide-bottom-space
    :label="title"
  >
    <template v-slot:before>
      <q-icon :name="icon" color="primary" size="1.5rem" />
    </template>
  </q-select>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'HomeSlide',
});

interface Props {
  title: string;
  options: string[];
  icon: string;
}

const props = withDefaults(defineProps<Props>(), {});
const model = ref(null);
</script>
<style lang="scss" scoped></style>
