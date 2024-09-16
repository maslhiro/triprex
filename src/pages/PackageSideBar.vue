<template>
  <header-cover title="Tour" />
  <div class="container content row">
    <div class="col-md-4 col-12 q-col-gutter-y-md">
      <div class="q-pa-md bg-white box">
        <q-input
          v-model="search"
          outlined
          type="search"
          placeholder="Search"
          dense
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <q-space />

      <div class="row q-pa-md box justify-between">
        <q-btn
          color="primary"
          label="Apply "
          @click="onReset"
          class="self-center"
        />
        <q-btn
          outline
          label="Reset Filter Options"
          @click="onReset"
          class="self-center"
        />
      </div>
      <q-space />

      <div class="q-pa-md box">
        <div class="q-my-sm text-h6 text-weight-bold">Price Filter</div>
        <q-range v-model="price" :min="0" :max="1000" :step="50" snap />
        <div class="row justify-between">
          <div class="text-body1 text-weight-bold">{{ price.min }}</div>
          <div class="text-body1 text-weight-bold">{{ price.max }}</div>
        </div>
      </div>
      <q-space />

      <div class="q-pa-md box">
        <div class="q-my-sm text-h6 text-weight-bold no-padding">
          Destination
        </div>

        <q-option-group
          :options="destinations"
          v-model="destinationSelected"
          style="margin-left: -16px"
        />
      </div>
      <q-space />

      <div class="q-pa-md box">
        <div class="q-my-sm text-h6 text-weight-bold no-padding">Tour Type</div>

        <q-option-group
          :options="categoryType"
          type="checkbox"
          v-model="categorySelected"
          style="margin-left: -16px"
        />
      </div>
      <q-space />
    </div>
    <div class="col-md-8 col-12 q-px-md q-col-gutter-y-md cursor-pointer">
      <div
        v-if="data.length"
        class="q-ml-lg text-body2 no-padding text-grey no-margin"
        style="margin-left: 16px"
      >
        Showing {{ Math.min(data.length, itemsPerPage) }} of
        {{ data.length }} Results
      </div>
      <div v-else class="flex column col-12 items-center q-col-gutter-md">
        <q-icon name="search_off" size="5rem" color="grey" />
        <div class="text-h6 text-grey">No results!</div>
      </div>

      <div class="row q-col-gutter-md">
        <package-card
          class="col-md-6 col-12"
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
  </div>
  <div style="width: 100%; min-height: 20em"></div>
</template>
<script setup lang="ts">
import HeaderCover from 'src/components/HeaderCover.vue';
import PackageCard from 'src/components/PackageCard.vue';
import { computed, ref } from 'vue';
import { useDestinationStore } from 'src/stores/destination';
import { useCategoryStore } from 'src/stores/category';
import { useTourStore } from 'src/stores/tours';
defineOptions({
  name: 'PackageSidebar',
});

const tourStore = useTourStore();
const categoryStore = useCategoryStore();
const destinationStore = useDestinationStore();

const categorySelected = ref<string[]>([]);
const destinationSelected = ref('');
const search = ref('');
const price = ref({
  min: 0,
  max: 1000,
});

const current = ref(1);
const itemsPerPage = 6;

const destinations = computed(() =>
  destinationStore.list.map((i) => ({
    label: i.name,
    value: i.name,
  }))
);

const categoryType = computed(() =>
  categoryStore.list.map((i) => ({
    label: i.name,
    value: i.id,
  }))
);

const data = computed(() =>
  tourStore.list.filter((i) => {
    if (i.price > price.value.max || i.price < price.value.min) return false;
    if (
      !!destinationSelected.value &&
      i.location.toLowerCase() != destinationSelected.value.toLowerCase()
    )
      return false;

    const searchValue = search.value.toLowerCase();
    if (
      !!searchValue &&
      !i.name.toLowerCase().includes(searchValue) &&
      !i.date.toLowerCase().includes(searchValue) &&
      !i.location.toLowerCase().includes(searchValue) &&
      !i.price.toString().toLowerCase().includes(searchValue) &&
      !i.originalPrice.toString().toLowerCase().includes(searchValue)
    )
      return false;

    if (
      categorySelected.value.length &&
      !categorySelected.value.some((j) => i.category.find((c) => c.id == j))
    )
      return false;

    return true;
  })
);

const maxPages = computed(() => Math.ceil(data.value.length / itemsPerPage));

const paginatedData = computed(() =>
  data.value.slice(
    (current.value - 1) * itemsPerPage,
    current.value * itemsPerPage
  )
);

const onReset = () => {
  current.value = 1;
  search.value = '';
  categorySelected.value = [];
  destinationSelected.value = '';
  price.value = { min: 0, max: 1000 };
};
</script>
<style scoped lang="scss">
@import '../css/app.scss';

.content {
  margin-top: 100px;
  margin-bottom: 100px;
}

.box {
  border-radius: 5px;
  box-shadow: 0 0 25px 0 rgba(16, 16, 16, 0.05);
}
</style>
