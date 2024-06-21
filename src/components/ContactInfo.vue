<template>
  <div
    class="row q-px-lg q-py-md group flex-center cursor-pointer relative-position rounded-borders"
  >
    <q-avatar color="primary" text-color="white" :icon="icon" />
    <div class="col q-ml-lg">
      <div
        v-for="item in descriptions"
        class="text-h6 text-weight-bold text-hover"
        :key="item"
      >
        {{ item }}
      </div>
    </div>
    <div class="bg-white group-title q-ml-lg">
      <div class="text-subtitle1 q-px-lg text-weight-bold text-teal-9">
        {{ title }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'ContactInfo',
});

interface Props {
  title: string;
  descriptions?: string[];
  type: 'phone' | 'email';
  icon: string;
}

withDefaults(defineProps<Props>(), {
  title: 'Title',
  descriptions: () => ['Description', 'Description'],
  type: 'email',
  icon: 'help',
});
</script>
<style lang="scss" scoped>
.group-title {
  position: absolute;
  top: -18%;
  left: 0;
}
.text-hover {
  transition: color 0.3s;
  color: var(--q-dark);
}

.text-hover:hover {
  color: var(--q-primary);
}

.group {
  border-color: $grey-4;
  border-style: solid;
  border-width: 1px;
  border-radius: 12px;
}
</style>
