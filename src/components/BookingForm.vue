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

  <div v-else class="bg-amber">dsadsad</div>
</template>
<script setup lang="ts">
import { QInput, QInputProps } from 'quasar';
import { ref } from 'vue';

defineOptions({
  name: 'BookingForm',
});

interface Props {
  type: 'booking' | 'inquiry';
}

withDefaults(defineProps<Props>(), {
  type: 'inquiry',
});

const name = ref(null);
const age = ref(null);
const phoneNumber = ref(null);
const message = ref(null);
</script>
<style lang="scss"></style>
