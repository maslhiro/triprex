<template>
  <div>
    <q-card>
      <div class="q-mt-lg col wrap location-container">
        <q-btn color="black" square :label="data?.date" />
        <q-space />
        <q-btn
          color="white"
          text-color="primary"
          square
          icon="location_on"
          :label="data?.location"
        />
      </div>

      <div class="q-pa-md col overflow-hidden img-container">
        <q-img :src="data?.previewImg" />
      </div>

      <q-card-section>
        <div class="text-h5 text-weight-bold">
          {{ data?.name }}
        </div>
      </q-card-section>

      <q-card-section>
        <q-separator />
      </q-card-section>

      <q-card-section class="row">
        <div class="col">
          <div class="text-subtitle1 text-weight-medium">Starting From:</div>
          <div class="text-h5 text-weight-bold text-primary price">
            ${{ data?.price }}
            <del class="text-h6 text-weight-bold"
              >${{ data?.originalPrice }}</del
            >
          </div>
          <div class="text-caption">TAXES INCL/PERS</div>
        </div>
        <div class="self-center">
          <q-btn
            color="primary"
            label="Book A Trip"
            icon-right="flight_takeoff"
            size="md"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { Tour } from 'src/types';

interface Props {
  data?: Tour;
}

defineOptions({
  name: 'PackageGrid',
});

withDefaults(defineProps<Props>(), {});
</script>
<style scoped lang="scss">
.location-container {
  position: absolute;
  z-index: 90;
  border-radius: 0;
}

.img-container {
  height: 250px;
}

.img-container .q-img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.price {
  position: relative;
}

.price del {
  color: gray;
}
</style>
