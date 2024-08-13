<template>
  <q-img class="bg-container" no-native-menu height="25em">
    <div class="absolute-center cursor-pointer bg-transparent">
      <div class="text-h2 text-center text-weight-bold">My Account</div>
      <div class="text-subtitle1 text-center text-weight-medium">
        Home
        <q-icon name="trending_flat" />
        My Account
      </div>
    </div>
  </q-img>

  <div class="container row contact-info q-gutter-y-md">
    <!-- Contact Info -->
    <div
      class="col-12 col-md-5 q-pa-lg"
      style="
        border-style: solid;
        border: 1px solid var(--q-dark);
        border-radius: 4px;
      "
    >
      <div class="text-h4 text-bold q-py-lg">Login</div>
      <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-lg">
        <q-input
          filled
          v-model="name"
          label="Username or email address *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          v-model="pass"
          label="Password *"
          lazy-rules
          :rules="[
            (val) => val?.length > 8 || 'Minimum 8 character',
            (val) => /\d/.test(val) || 'At least one number',
          ]"
        />

        <q-toggle v-model="accept" label="Remember me" />

        <div>
          <q-btn
            label="Login"
            type="submit"
            color="primary"
            :loading="submitting"
          >
            <template v-slot:loading>
              <q-spinner-facebook />
            </template>
          </q-btn>
          <q-btn
            label="Lost your password ?"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
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
  <div style="width: 100%; min-height: 20em"></div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import CustomInput from 'src/components/Input.vue';
import { computed, ref } from 'vue';
import { useUserStore } from 'stores/user';

defineOptions({
  name: 'MyAccountPage',
});

const $q = useQuasar();

const name = ref('');
const pass = ref('');
const accept = ref(false);
const submitting = ref(false);
const store = useUserStore();

const onSubmit = () => {
  submitting.value = true;
  store.login(name.value, pass.value, () => {
    submitting.value = false;
  });
};

const onReset = () => {
  name.value = '';
  pass.value = '';
  accept.value = false;
  submitting.value = false;
};
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

.bg-container {
  background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3) 101.02%
    ),
    url(https://triprex.egenslab.com/wp-content/plugins/triprex-core//inc/theme-options/images/breadcrumb/inner-banner-bg.jpg);
}
</style>
