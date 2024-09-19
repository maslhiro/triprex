<template>
  <div class="row col items-center">
    <q-icon :name="icon" color="primary" size="2rem" />
    <div class="col q-pa-xs items-center q-pl-md">
      <div class="text-caption text-weight-medium text-grey-9">
        {{ title }}
      </div>
      <q-select
        popup-content-class="text-subtitle2 text-weight-medium q-px-md"
        v-model="model"
        dense
        map-options
        emit-value
        :options="options"
        hide-bottom-space
      >
        <template v-slot:label>
          <div class="text-h5">
            {{ title }}
          </div>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

defineOptions({
  name: 'HomeSelect',
});

interface Props {
  title: string;
  placeholder: string;
  options: string[];
  icon: string;
}

const props = withDefaults(defineProps<Props>(), {});
const model = ref('');

watch(
  () => props.options,
  () => (model.value = !!model.value ? model.value : props.placeholder),
  { immediate: true }
);
</script>
<style lang="scss" scoped></style>
