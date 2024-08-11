<template>
  <div>
    <img
      fit="cover"
      src="banner_left.png"
      class="gt-sm absolute-left full-height"
    />
    <div class="text-black text-center col">
      <h3 class="text-bold q-my-xs">Join The Newsletter</h3>
      <div class="text-subtitle1 q-mb-md">
        To receive our best monthly deals
      </div>

      <q-input
        placeholder="Enter Your Email Address..."
        borderless
        class="q-pl-lg form"
        v-model="email"
      >
        <template v-slot:after>
          <q-icon
            name="fa-solid fa-arrow-right bg-primary full-height q-px-md"
            size="16px"
            color="secondary"
          />
        </template>
      </q-input>
    </div>
    <img
      src="banner_right.png"
      fit="cover"
      class="gt-sm absolute-right full-height"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

defineOptions({
  name: 'FooterBanner',
});
</script>
<style lang="scss" scoped>
.form {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid;
  border-color: var(--q-primary);
  border-radius: 10px;
  overflow: hidden;
}
</style>
