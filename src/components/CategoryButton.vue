<template>
  <div class="col row q-mb-lg"></div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { Location } from 'src/types';

defineOptions({
  name: 'CategoryButton',
});

interface Props {
  data?: Location[];
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
});

const currentIndex = ref(0);

const visibleData = computed(() => props.data?.[currentIndex.value]?.images);
</script>
<style lang="scss" scoped></style>
