<template>
  <q-footer class="bg-transparent">
    <div class="q-px-md banner-container">
      <banner
        class="container content row overflow-hidden justify-between bg-white shadow-3 relative-position"
      />
    </div>

    <div class="bg-dark shadow-3 footer-container">
      <div class="bg-dark container">
        <div class="row q-py-lg q-px-sm">
          <div class="col-lg-3 col-md-6 col-sm-6 q-py-lg q-px-sm">
            <div class="flex self-start justify-start items-start row">
              <img
                src="logo_white.svg"
                fit="scale-down"
                style="height: 50px; width: 170px"
              />
            </div>
            <h4 class="text-weight-bolder">
              {{ title }}
            </h4>
            <q-btn
              color="secondary"
              no-caps
              :label="btnTitle"
              size="md"
              class="text-weight-bold"
            />
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6 q-py-lg q-px-sm">
            <div class="text-h6 text-weight-bolder">{{ widget.title }}</div>
            <div
              class="text-subtitle1 text-weight-medium q-mt-sm cursor-pointer text-hover"
              v-for="(item, index) in widget.tabs"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 q-py-lg q-px-sm">
            <div
              class="text-h6 text-weight-bolder q-mb-lg"
              v-for="(item, index) in contact"
              :key="index"
            >
              <q-icon :name="item.icon" color="primary" /> {{ item.title }}
              <div
                class="text-subtitle1 text-weight-medium q-my-sm cursor-pointer text-hover"
              >
                {{ item.desc }}
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 q-py-lg q-px-sm">
            <div class="text-h6 text-weight-bolder">{{ extra.title }}</div>
            <div class="text-subtitle1 text-weight-medium q-my-lg text-grey">
              {{ extra.desc }}
            </div>

            <div class="text-h5 text-weight-bolder">{{ payment.title }}</div>

            <div class="row q-my-lg q-gutter-x-xl">
              <q-icon
                v-for="(item, index) in payment.icons"
                :key="index"
                :name="item"
                size="30px"
                class="q-py-sm"
              />
            </div>
          </div>
        </div>
        <div
          class="row self-start col-12 q-py-lg content-center text-center justify-center items-center"
          style="border-top: 1px solid rgba(255, 255, 255, 0.1)"
        >
          <div class="q-gutter-x-sm">
            <a :href="item.href" v-for="item in social" :key="item.href">
              <i
                :class="[item.icon, 'text-hover', 'q-pa-sm']"
                style="font-size: 1.5em"
              />
            </a>
          </div>
          <div class="col-md-6 col-lg-7 text-subtitle1 text-grey q-pa-xs">
            ©Copyright {{ new Date().getFullYear() }} TripRex |
            <span class="text-subtitle1 text-weight-bold"
              >| Developed by niiviie</span
            >
          </div>
          <ul
            class="q-gutter-x-sm"
            style="
              display: inline-block;
              margin: inherit;
              padding-inline-start: 0px;
            "
          >
            <li
              class="inline-block text-subtitle1 text-weight-bold text-hover cursor-pointer"
            >
              Privacy Policy
            </li>
            <li class="inline-block">&#9900;</li>
            <li
              class="inline-block text-subtitle1 text-weight-bold text-hover cursor-pointer"
            >
              Terms & Condition
            </li>
          </ul>
        </div>
      </div>
    </div>
  </q-footer>
</template>
<script setup lang="ts">
import { Contact } from 'src/types';
import Banner from './FooterBanner.vue';
import { useContactStore } from 'src/stores/contact';

defineOptions({
  name: 'CustomFooter',
});

interface PaymentInformation {
  icons: string[];
  title: string;
}

interface SocialInformation {
  href: string;
  icon: string;
}

interface Widget {
  title: string;
  tabs: string[];
}

interface Props {
  title: string;
  btnTitle: string;
  widget: Widget;
  extra: Contact;
  social: SocialInformation[];
  payment: PaymentInformation;
}

withDefaults(defineProps<Props>(), {
  contact: () => [
    {
      title: '',
      icon: '',
      desc: '',
    },
  ],
  widget: () => ({
    title: 'Example',
    tabs: [],
  }),
});

const contactStore = useContactStore();

const contact = contactStore.data;
</script>
<style lang="scss" scoped>
@import '../css/app.scss';

.text-hover {
  transition: color 0.3s;
  color: grey;
}

.text-hover:hover {
  color: var(--q-secondary);
}

.banner-container {
  margin-top: -180px;
  z-index: 2;
  width: 100%;
  position: absolute;
}

.footer-container {
  padding-top: 140px;
}

@media (min-width: $md-breakpoint) {
  .banner-container {
    margin-top: -240px;
  }

  .footer-container {
    padding-top: 70px;
  }
}

.banner-container .content {
  border-radius: 30px;
  padding: 70px 20px;
}
</style>
