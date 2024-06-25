<template>
  <div class="container">
    <div class="row q-py-lg q-px-sm">
      <div class="col-lg-3 col-md-6 col-sm-6 q-py-lg">
        <div class="flex self-start justify-start items-start row">
          <img
            src="../assets/logo_white.svg"
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
</template>
<script setup lang="ts">
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

interface ContactInformation {
  title: string;
  icon?: string;
  desc: string;
}

interface Widget {
  title: string;
  tabs: string[];
}

interface Props {
  title: string;
  btnTitle: string;
  contact: ContactInformation[];
  widget: Widget;
  extra: ContactInformation;
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
</script>
<style lang="scss" scoped>
.text-hover {
  transition: color 0.3s;
  color: grey;
}

.text-hover:hover {
  color: var(--q-secondary);
}
</style>
