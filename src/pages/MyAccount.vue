<template>
  <header-cover title="My Account" />

  <div v-show="!store.name" class="container row contact-info q-gutter-lg">
    <!-- Login Form -->
    <div class="col-12 col-md-5 q-pa-lg form-container">
      <div class="text-h4 text-bold q-py-lg">Login</div>
      <q-form @submit.prevent="onLogin" @reset="onReset" class="q-gutter-lg">
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

        <q-toggle v-model="remember" label="Remember me" />

        <div>
          <q-btn
            label="Login"
            type="submit"
            color="primary"
            :loading="loadingLogin"
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
    <div class="col-12 col-md-6 q-pa-lg form-container">
      <div class="text-h4 text-bold q-py-lg">Register</div>
      <q-form @submit.prevent="onRegister" class="q-gutter-lg">
        <q-input
          filled
          v-model="userName"
          label="Username"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type something',
            (val) =>
              !!val.includes('@.com.vn') ||
              'Please enter a valid email address',
          ]"
        />

        <q-input
          filled
          v-model="registerPass"
          label="Password *"
          lazy-rules
          :rules="[
            (val) => val?.length > 8 || 'Minimum 8 character',
            (val) => /\d/.test(val) || 'At least one number',
          ]"
        />

        <div class="text-subtit">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <a href="#">privacy policy</a>.
        </div>

        <q-btn
          label="Register"
          type="submit"
          color="primary"
          :loading="loadingRegister"
        >
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
      </q-form>
    </div>
  </div>

  <div
    v-show="store.name"
    class="container contact-info q-gutter-lg text-center"
  >
    <div class="text-h3 text-bold">Welcome, {{ store.name }} :3</div>
    <q-btn color="primary" label="Logout" @click="onLogout" />
  </div>
  <div style="width: 100%; min-height: 20em"></div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import HeaderCover from 'src/components/HeaderCover.vue';
import { computed, ref } from 'vue';
import { useUserStore } from 'stores/user';

defineOptions({
  name: 'MyAccountPage',
});

const $q = useQuasar();

const name = ref('');
const pass = ref('');

const userName = ref('');
const email = ref('');
const registerPass = ref('');

const remember = ref(false);

const mode = ref<'login' | 'register'>('login');
const loading = ref(false);

const store = useUserStore();

const onLogin = () => {
  loading.value = true;
  mode.value = 'login';
  store.login(name.value, pass.value, () => {
    loading.value = false;
  });
};

const onRegister = () => {
  loading.value = true;
  mode.value = 'register';
  store.register(userName.value, email.value, registerPass.value, () => {
    loading.value = false;
  });
};

const onReset = () => {
  name.value = '';
  pass.value = '';
  remember.value = false;
  loading.value = false;
};

const onLogout = () => {
  store.logout();
};

const loadingLogin = computed(() => loading.value && mode.value === 'login');
const loadingRegister = computed(
  () => loading.value && mode.value === 'register'
);
</script>

<style scoped lang="scss">
.form-container {
  border-style: solid;
  border: 1px solid gray;
  border-radius: 4px;
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
