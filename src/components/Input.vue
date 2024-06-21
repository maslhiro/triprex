<template>
  <div class="text-subtitle2 text-weight-medium q-pb-xs">{{ title }}</div>
  <q-input
    v-model="text"
    stack-label
    outlined
    bg-color="white"
    :type="type"
    :placeholder="placeholder"
  />
</template>
<script setup lang="ts">
import { QInput, QInputProps } from 'quasar';
import { ref } from 'vue';

defineOptions({
  name: 'CustomInput',
});

interface Props {
  title: string;
  placeholder: string;
  type: QInputProps['type'];
}

withDefaults(defineProps<Props>(), {
  title: 'Title',
  placeholder: 'placeholder',
  type: 'text',
});

const text = ref();
</script>
<style lang="scss"></style>
