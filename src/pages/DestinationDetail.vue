<template>
  <header-cover :title="id" root="Destination" />
  <div class="container content">
    <div
      class="row q-col-gutter-x-md q-col-gutter-y-md"
      style="min-height: 100px"
    >
      <div class="col-lg-8 detail-body" v-html="data?.body"></div>
      <div class="col-lg-4 col">
        <div class="destination-info">
          <span>Destination</span>
          <div class="text-h6 text-weight-bolder q-pb-sm">
            {{ data?.name }}
          </div>
          <q-separator />
          <span>Population</span>
          <div class="text-h6 text-weight-bolder q-pb-sm">
            {{ data?.population }}
          </div>
          <q-separator />
          <span>Capital City</span>
          <div class="text-h6 text-weight-bolder q-pb-sm">
            {{ data?.capitalCity }}
          </div>
          <q-separator />
          <span>Language</span>
          <div class="text-h6 text-weight-bolder q-pb-sm">
            {{ data?.language }}
          </div>
          <q-separator />
          <span>Currency</span>
          <div class="text-h6 text-weight-bolder q-pb-sm">
            {{ data?.currency }}
          </div>
        </div>
      </div>
    </div>

    <h3 class="text-weight-bold">{{ data?.name }} Location.</h3>
    <image-gallery :data="data?.location" />
  </div>

  <div style="width: 100%; min-height: 20em"></div>
</template>
<script setup lang="ts">
import ImageGallery from 'src/components/ImageGallery.vue';
import HeaderCover from 'src/components/HeaderCover.vue';
import DestinationCard from 'src/components/DestinationCard.vue';
import { computed, ref, watch } from 'vue';
import { useDestinationStore } from 'src/stores/destination';
import { useRoute, useRouter } from 'vue-router';
import { Destination, DestinationDetail } from 'src/types';
import { getDetails } from 'src/apis/destination';
defineOptions({
  name: 'DestinationPage',
});

const store = useDestinationStore();
const route = useRoute();
const id = computed(() => route.params.id as string);

const data = ref<DestinationDetail>();

const fetchData = async () => {
  data.value = await getDetails(id.value);
};

watch(() => route.params.id, fetchData, { immediate: true });
</script>
<style scoped lang="scss">
@import '../css/app.scss';

.content {
  margin-top: 100px;
  margin-bottom: 100px;
}

.destination-info {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid rgba(16, 12, 8, 0.1);
  background: #fff;
  padding: 20px;
}

.destination-info span {
  position: relative;
  padding-left: 24px;
  color: gray;
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0.48px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.destination-info span::after {
  content: '';
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 1px solid var(--q-primary);
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.destination-info span::before {
  content: '';
  height: 11px;
  width: 11px;
  border-radius: 50%;
  background-color: var(--q-primary);
  position: absolute;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
}

.detail-body ::v-deep h2 {
  font-weight: 600;
  margin-top: 0;
}

.detail-body ::v-deep h3 {
  font-weight: 600;
}

.detail-body ::v-deep p {
  color: gray;
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0.48px;
}

.detail-body ::v-deep ul {
  -moz-columns: 2;
  columns: 2;
  padding-left: unset;
  list-style: none;
}

.detail-body ::v-deep ul li {
  color: black;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.51px;
  padding-top: 10px;
  padding-left: 17px;
  position: relative;
}

.detail-body ::v-deep ul li::before {
  content: '';
  height: 9px;
  width: 9px;
  border-radius: 50%;
  background-color: green;
  position: absolute;
  left: 0;
  top: 17px;
}

.detail-body ::v-deep div img {
  height: 300px;
  object-fit: cover;
}
</style>
