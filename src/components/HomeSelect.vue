<template>
  <q-select
    popup-content-class="text-h6 text-weight-medium"
    v-model="model"
    :options="options"
    hide-bottom-space
    :label="title"
  >
    <template v-slot:label>
      <div class="text-h5">
        {{ title }}
      </div>
    </template>

    <template v-slot:before>
      <q-icon :name="icon" color="primary" size="1.5rem" />
    </template>
  </q-select>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'HomeSelect',
});

interface Props {
  title: string;
  options: string[];
  icon: string;
}

const props = withDefaults(defineProps<Props>(), {});
const model = ref('google');
</script>
<style lang="scss" scoped></style>
