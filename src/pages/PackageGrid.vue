<template>
  <header-cover title="Package Grid" />
  <div class="container content">
    <div class="row q-col-gutter-md">
      <package-card
        class="col-4"
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

.destination-card {
  width: 70%;
  height: 400px;
}

@media (min-width: $xs-breakpoint) {
  .destination-card {
    width: 45%;
    height: 350px;
  }
}

@media (min-width: $sm-breakpoint) {
  .destination-card {
    width: 30%;
    height: 350px;
  }
}

@media (min-width: $md-breakpoint) {
  .destination-card {
    width: 22%;
    height: 350px;
  }
}

@media (min-width: $lg-breakpoint) {
  .destination-card {
    width: 20%;
    height: 350px;
  }
}
</style>
