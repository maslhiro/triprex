<template>
  <header-cover title="Package Grid" />
  <div class="container content">
    <div class="row q-col-gutter-md">
      <package-card
        class="col-12 col-md-6 col-lg-4"
        v-for="item in paginatedData"
        :key="item.name"
        :data="item"
      />
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="current"
        :max="maxPages"
        :ellipses="false"
        :boundary-numbers="false"
      />
    </div>
  </div>

  <div style="width: 100%; min-height: 20em"></div>
</template>
<script setup lang="ts">
import HeaderCover from 'src/components/HeaderCover.vue';
import PackageCard from 'src/components/PackageCard.vue';
import { computed, ref } from 'vue';
import { useTourStore } from 'src/stores/tours';
defineOptions({
  name: 'PackageGrid',
});

const store = useTourStore();
const current = ref(1);
const itemsPerPage = 6;

// Compute total pages dynamically
const maxPages = computed(() => Math.ceil(store.list.length / itemsPerPage));

// Compute paginated data based on the current page
const paginatedData = computed(() =>
  store.list.slice(
    (current.value - 1) * itemsPerPage,
    current.value * itemsPerPage
  )
);
</script>
<style scoped lang="scss">
@import '../css/app.scss';

.content {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
