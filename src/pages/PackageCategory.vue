<template>
  <header-cover title="Package Category" />
  <div class="container content">
    <div class="q-pb-lg row q-gutter-md justify-center">
      <q-btn
        class="q-pa-lg text-center category-btn"
        v-for="(item, index) in categoryStore.list"
        :key="item.id"
        no-caps
        @click="currentIndex = index"
        :text-color="currentIndex === index ? 'white' : 'black'"
        :color="currentIndex === index ? 'primary' : 'white'"
      >
        <div
          :style="{
            height: '50px',
            width: '50px',
            backgroundColor: currentIndex === index ? 'white' : 'black',
            WebkitMask: `url(${item.icon}) no-repeat center / contain`,
            mask: `url(${item.icon}) no-repeat center / contain`,
            aspectRatio: '1',
          }"
        ></div>
        <div class="q-pl-lg text-h6 text-weight-bold">{{ item.name }}</div>
      </q-btn>
    </div>

    <div class="row q-col-gutter-md">
      <package-card
        class="col-4"
        v-for="item in tours"
        :key="item.name"
        :data="item"
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
import { useCategoryStore } from 'src/stores/category';

defineOptions({
  name: 'PackageCategory',
});

const tourStore = useTourStore();
const categoryStore = useCategoryStore();
const currentIndex = ref(0);

const tours = computed(() =>
  tourStore.list?.filter((i) =>
    i.category?.find((i) => i.id == categoryStore.list[currentIndex.value]?.id)
  )
);
</script>
<style scoped lang="scss">
@import '../css/app.scss';

.content {
  margin-top: 100px;
  margin-bottom: 100px;
}

.category-btn {
  border-color: $grey-4;
  border-style: solid;
  border-width: 1px;
  border-radius: 12px;
}

.img-category {
  background-color: red;
  -webkit-mask: url(logo.svg) no-repeat center;
  mask: url(logo.svg) no-repeat center;
}
</style>
