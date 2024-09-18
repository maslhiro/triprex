<template>
  <div class="column">
    <span :class="_sessionClass">
      <img src="session_path.svg" height="16px" />
      {{ session }}
      <img
        src="session_path.svg"
        style="transform: rotate(180deg)"
        height="16px"
      />
    </span>

    <div :class="_titleClass">{{ title }}</div>
    <p class="text-h6 q-py-md text-grey text-weight-regular">
      {{ desc }}
    </p>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';

defineOptions({
  name: 'HomeSession',
});

interface Props {
  session: string;
  title: string;
  desc?: string;
  sessionClass?: string;
  titleClass?: string;
}
const props = withDefaults(defineProps<Props>(), {});

const _sessionClass = computed(() =>
  'satisfy-font text-h5 items-center justify-center text-primary'.concat(
    ' ',
    props.sessionClass || ''
  )
);

const _titleClass = computed(() =>
  'text-h3 text-weight-bolder q-py-lg'.concat(' ', props.titleClass || '')
);

const model = ref(null);
</script>
<style lang="scss" scoped></style>
