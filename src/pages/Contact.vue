<template>
  <header-cover title="Contact" />

  <div class="container row contact-info q-gutter-y-md">
    <!-- Contact Info -->
    <div class="col-12 col-md-5 q-pa-sm">
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
    <!-- Contact Form -->
    <div class="col-12 col-md-6 q-pa-sm">
      <div class="col bg-lime-1 form-container q-gutter-y-md">
        <h4 class="text-weight-bolder">Reach Us Anytime</h4>
        <custom-input title="Name*" placeholder="Daniel Scott" />
        <div class="col-12 row justify-between q-gutter-y-xs">
          <div class="col-12 col-lg-5">
            <custom-input title="Phone*" placeholder="Phone Number" />
          </div>
          <div class="col-12 col-lg-6">
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

  <div
    style="
      width: 100%;
      min-height: 40em;
      /* justify-items: center;
      align-items: center;
      text-align: center; */
      background-size: cover;
      background-image: url(https://bacsyphauthuatsurgeon.wordpress.com/wp-content/uploads/2021/09/ban-phung-525.webp?w=1280);
    "
  ></div>
</template>

<script setup lang="ts">
import ContactInfo from 'src/components/ContactInfo.vue';
import CustomInput from 'src/components/Input.vue';
import HeaderCover from 'src/components/HeaderCover.vue';

defineOptions({
  name: 'ContactPage',
});
</script>

<style scoped lang="scss">
.form-container {
  border-radius: 12px;
  padding: 60px 30px;
}

.contact-info {
  margin-top: 100px;
  margin-bottom: 100px;
  justify-content: center;
}
</style>
