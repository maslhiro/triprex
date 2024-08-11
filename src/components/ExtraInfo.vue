<template>
  <div class="row items-center">
    <q-icon :name="icon" color="primary" size="1.5rem" />
    <div class="divider q-ml-sm" />
    <div class="q-pl-sm">
      <div class="text-subtitle2 text-weight-bold">
        {{ title }}
      </div>
      <div
        :class="`text-${descTextTypo} text-weight-bolder text cursor-pointer`"
      >
        {{ desc }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'ExtraInfo',
});

interface Props {
  title: string;
  desc?: string;
  type: 'phone' | 'email';
  icon: string;
  size?: 'small' | 'medium';
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Title',
  desc: 'Description',
  type: 'email',
  icon: 'help',
  size: 'medium',
});

const descTextTypo = computed(() =>
  props.size == 'small' ? 'subtitle1' : 'h6'
);
</script>
<style lang="scss" scoped>
.divider {
  height: 2.5rem;
  width: 1px;
  background-color: grey;
}

.text {
  transition: color 0.3s;
  color: var(--q-primary);
}

.text:hover {
  color: var(--q-dark);
}
</style>
