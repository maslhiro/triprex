<template>
  <q-form v-if="type == 'inquiry'" class="q-mt-md q-gutter-md">
    <q-input
      filled
      dense
      v-model="name"
      label="Full name *"
      placeholder="Enter your full name"
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Please type something']"
    />

    <q-input
      filled
      type="email"
      dense
      v-model="age"
      label="Your email *"
      placeholder="Enter your email"
      lazy-rules
      :rules="[
        (val) => (val !== null && val !== '') || 'Please type your email',
      ]"
    />

    <q-input
      filled
      type="number"
      dense
      v-model="phoneNumber"
      label="Your phone number *"
      placeholder="Enter your phone number"
      lazy-rules
      :rules="[
        (val) =>
          (val !== null && val !== '') || 'Please type your phone number',
      ]"
    />

    <q-input
      filled
      type="textarea"
      dense
      v-model="message"
      label="Write Your Message *"
      placeholder="Write your message"
      lazy-rules
      :rules="[
        (val) => (val !== null && val !== '') || 'Please type your message',
      ]"
    />

    <div>
      <q-btn
        class="full-width"
        label="Submit Now"
        no-caps
        type="submit"
        color="primary"
      />
    </div>
  </q-form>

  <div v-else class="q-mt-md q-gutter-md">
    <div class="text-subtitle1 text-weight-bold q-mb-sm">
      Select Booking Date
    </div>
    <q-option-group
      v-model="bookingDateSelected"
      :options="bookingDateOpts"
      color="primary"
      class="no-margin booking-date"
    >
      <template v-slot:label="opt">
        <div class="row items-center non-selectable">
          <div class="col-5">
            <div class="text-subtitle2">Check In</div>
            <div class="text-body2">{{ opt.data?.start }}</div>
          </div>
          <div class="col-2">
            <q-icon name="trending_flat" color="teal" size="1.5em" />
          </div>
          <div class="col-5 text-right">
            <div class="text-subtitle2">Check Out</div>
            <div class="text-body2">{{ opt.data?.end }}</div>
          </div>
        </div>
      </template>
    </q-option-group>

    <div class="row justify-between items-center">
      <div class="text-subtitle1 text-weight-medium">Adult</div>
      <div class="text-subtitle1 text-weight-bold">
        ${{ packageInfo?.price }}
        <del class="text-subtitle2 text-grey"
          >${{ packageInfo?.originalPrice }}</del
        >
      </div>
      <vue-number-input
        v-model="adult"
        inline
        controls
        :min="1"
        :max="99"
        size="small"
        center
      ></vue-number-input>
    </div>

    <div class="row justify-between items-center">
      <div class="text-subtitle1 text-weight-medium">Children</div>
      <div class="text-subtitle1 text-weight-bold">${{ childrenPrice }}</div>
      <vue-number-input
        v-model="children"
        inline
        controls
        :min="0"
        :max="99"
        size="small"
        center
      ></vue-number-input>
    </div>

    <div class="text-subtitle1 text-weight-bold">Other Extra Services</div>

    <q-option-group
      v-model="extraServicesSelected"
      :options="extraServices"
      color="primary"
      type="checkbox"
      class="no-margin extra-services"
    >
      <template v-slot:label="opt">
        <div
          class="col-12 row items-center justify-between non-selectable text-subtitle2"
        >
          {{ opt.label }}
          <span>${{ opt.value }}</span>
        </div>
      </template>
    </q-option-group>

    <q-separator />
    <div class="single-total q-my-lg non-selectable">
      <span class="text-subtitle1">Adult</span>
      <div class="text-body1 text-bold text-grey-14">
        <div>${{ packageInfo?.price }}</div>
        <div class="text-caption">PRICE</div>
      </div>

      <q-icon name="close" size="1.5rem" color="grey-14" />

      <div class="text-body1 text-bold text-grey-14">
        <div>{{ adult }}</div>
        <div class="text-caption">QTY</div>
      </div>

      <img src="arrow.svg" />

      <div class="text-subtitle1 text-weight-bold">
        ${{ adult * (packageInfo?.price || 0) }}
      </div>
    </div>

    <div v-if="children > 0" class="single-total q-my-lg non-selectable">
      <span class="text-subtitle1">Children</span>
      <div class="text-body1 text-bold text-grey-14">
        <div>${{ childrenPrice }}</div>
        <div class="text-caption">PRICE</div>
      </div>

      <q-icon name="close" size="1.5rem" color="grey-14" />

      <div class="text-body1 text-bold text-grey-14">
        <div>{{ children }}</div>
        <div class="text-caption">QTY</div>
      </div>

      <img src="arrow.svg" />

      <div class="text-subtitle1 text-weight-bold">
        ${{ children * childrenPrice }}
      </div>
    </div>

    <q-separator />
    <div
      class="text-body1 text-bold items-center text-center justify-center flex"
    >
      Total Price :
      <span class="q-pl-sm text-h5 text-weight-bolder">${{ totalPrice }}</span>
    </div>

    <div>
      <q-btn
        class="full-width"
        label="Book Now"
        no-caps
        type="submit"
        color="primary"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { QInput } from 'quasar';
import { computed, ref } from 'vue';
import VueNumberInput from '@chenfengyuan/vue-number-input';
import { TourDetail } from 'src/types';

defineOptions({
  name: 'BookingForm',
});

interface Props {
  type: 'booking' | 'inquiry';
  packageInfo?: TourDetail;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'inquiry',
});

const childrenPrice = 20;

const name = ref(null);
const age = ref(null);
const phoneNumber = ref(null);
const message = ref(null);
const adult = ref(1);
const children = ref(0);

const bookingDateSelected = ref('op1');
const extraServicesSelected = ref([]);

const bookingDateOpts = [
  {
    label: 'Option 1',
    value: 'op1',
    data: {
      start: '25 Feb, 2024',
      end: '29 Feb, 2024',
    },
  },
  {
    label: 'Option 2',
    value: 'op2',
    data: {
      start: '05 Apr, 2024',
      end: '19 Apr, 2024',
    },
  },
  {
    label: 'Option 3',
    value: 'op3',
    data: {
      start: '10 Oct, 2024',
      end: '20 Oct, 2024',
    },
  },
];

const extraServices = [
  {
    label: 'Home Pickup',
    value: '10',
  },
  {
    label: 'Night Food',
    value: '15',
  },
  {
    label: 'Seaplane Feeding',
    value: '20',
  },
];

const totalPrice = computed(
  () =>
    (props?.packageInfo?.price || 0) * adult.value +
    childrenPrice * children.value +
    extraServicesSelected.value.reduce((sum, cur) => (sum += Number(cur)), 0)
);
</script>
<style lang="scss">
.booking-date {
  position: relative;
}

.booking-date > div > div {
  display: flex !important;
}

.booking-date > div > div {
  display: flex !important;
  margin-bottom: 16px;
}

.extra-services {
  position: relative;
}

.extra-services > div > div {
  display: flex !important;
}

.extra-services > div > div {
  display: flex !important;
}

.single-total {
  border: 1px solid #ddd;
  padding: 20px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.single-total > span {
  position: absolute;
  left: 12px;
  top: -10px;
  font-weight: 500;
  line-height: 1;
  padding: 0 8px;
  background-color: #f7f6eb;
}
</style>
