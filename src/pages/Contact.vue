<template>
  <q-img
    src="https://cdn.quasar.dev/img/parallax2.jpg"
    no-native-menu
    height="25em"
  >
    <div class="absolute-center cursor-pointer bg-transparent">
      <div class="text-h2 text-center text-weight-bold">Contact</div>
      <div class="text-subtitle1 text-center text-weight-medium">
        Home
        <q-icon name="trending_flat" />
        Contact
      </div>
    </div>
  </q-img>

  <div class="q-ma-lg row">
    <!-- Contact Info -->
    <div class="q-mt-xl col-12 col-md-5 row">
      <div class="col-12 col-md-11">
        <contact-info
          title="Phone"
          icon="phone"
          :descriptions="['+990-737 621 432', '+990-137 324 465']"
        />
        <contact-info
          title="Email Now"
          icon="email"
          :descriptions="['info@example.come', 'xample@example.com']"
          class="q-mt-xl"
        />
        <contact-info
          title="Location"
          icon="location_on"
          :descriptions="[
            '68/170, Avenue 01, Old York Drive Rich Mirpur DOHS, Bangladesh',
          ]"
          class="q-mt-xl"
        />
        <contact-info
          title="Open Time"
          icon="date_range"
          :descriptions="['8:00Am - 10:Pm, Friday Close']"
          class="q-mt-xl"
        />
      </div>
      <div class="col-md-1" />
    </div>

    <!-- Contact Form -->
    <div class="q-mt-xl col-12 col-md-7">
      <div class="bg-accent form-container q-px-lg q-py-lg">
        <h4 class="text-weight-bolder">Reach Us Anytime</h4>
        <custom-input title="Name*" placeholder="Daniel Scott" />
        <div class="row q-my-sm">
          <div class="col">
            <custom-input title="Phone*" placeholder="Phone Number" />
          </div>
          <div style="width: 20px" />
          <div class="col">
            <custom-input title="Email*" placeholder="Email us..." />
          </div>
        </div>
        <custom-input
          title="Write Your Massage*"
          placeholder="What's on your mind"
          type="textarea"
        />
        <q-btn color="primary" label="Submit Now" class="q-mt-lg" />
      </div>
    </div>
  </div>

  <div class="bg-accent" style="width: 100%; min-height: 40em" />
</template>

<script setup lang="ts">
import ContactInfo from 'src/components/ContactInfo.vue';
import CustomInput from 'src/components/Input.vue';

defineOptions({
  name: 'App',
});
</script>

<style scoped lang="scss">
.form-container {
  border-radius: 12px;
}
</style>
