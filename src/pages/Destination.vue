<template>
  <header-cover title="Destination" />
  <div class="container content">
    <div class="row q-gutter-md justify-center">
      <destination-card
        class="destination-card"
        v-for="item in paginatedData"
        :key="item.name"
        :name="item.name"
        :desc="item.desc"
        :image="item.image"
        :href="item.href"
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
import DestinationCard from 'src/components/DestinationCard.vue';
import { computed, ref } from 'vue';
import { useDestinationStore } from 'src/stores/destination';
defineOptions({
  name: 'DestinationPage',
});

const store = useDestinationStore();
const current = ref(1);
const itemsPerPage = 8;

// Compute total pages dynamically
const maxPages = computed(() =>
  Math.ceil(store.destinationList.length / itemsPerPage)
);

// Compute paginated data based on the current page
const paginatedData = computed(() =>
  store.destinationList.slice(
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
