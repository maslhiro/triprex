<template>
  <div class="row q-py-lg q-px-sm justify-center container">
    <div class="col-12 col-lg-2 col-md-3 col-sm-6 q-py-lg">
      <div class="flex self-start justify-start items-start row">
        <img
          src="../assets/logo_white.svg"
          fit="scale-down"
          style="height: 60px; width: 210px"
        />
      </div>
      <h4 class="text-weight-bolder">
        {{ title }}
      </h4>
      <q-btn
        color="secondary"
        no-caps
        label="Book A Tour"
        size="md"
        class="text-weight-bold"
      />
    </div>
    <div class="col-12 col-lg-1 col-md-3 col-sm-6 q-py-lg q-px-sm">
      <div class="text-h6 text-weight-bolder">{{ widget.title }}</div>
      <div
        class="text-subtitle1 text-weight-medium q-mt-sm cursor-pointer text-hover"
        v-for="(item, index) in widget.tabs"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div class="col-12 col-lg-1 col-md-3 col-sm-6 q-py-lg q-px-sm">
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
    <div class="col-12 col-lg-2 col-md-3 col-sm-6 q-py-lg q-px-sm">
      <div class="text-h6 text-weight-bolder">{{ extra.title }}</div>
      <div class="text-subtitle1 text-weight-medium q-my-lg text-grey">
        {{ extra.desc }}
      </div>

      <div class="text-h5 text-weight-bolder">Payment Partner</div>

      <div class="row q-my-lg">
        <q-icon name="fa-brands fa-cc-visa" size="30px" class="col-2 q-py-sm" />
        <div class="col-1" />
        <q-icon
          name="fa-brands fa-cc-mastercard"
          size="30px"
          class="col-2 q-py-sm"
        />
        <div class="col-1" />
        <q-icon
          name="fa-brands fa-cc-paypal"
          size="30px"
          class="col-2 q-py-sm"
        />
        <div class="col-1 bg" />
        <q-icon
          name="fa-brands fa-cc-apple-pay"
          size="30px"
          class="col-2 q-py-sm"
        />
        <div class="col-1" />
        <q-icon
          name="fa-brands fa-cc-stripe"
          size="30px"
          class="col-2 q-py-sm"
        />
        <div class="col-1" />
        <q-icon name="fa-brands fa-cc-jcb" size="30px" class="col-2 q-py-sm" />
        <div class="col-1" />
        <q-icon name="fa-brands fa-cc-amex" size="30px" class="col-2 q-py-sm" />
      </div>
    </div>
  </div>

  <div class="row flex-center">
    <div class="col-12 col-lg-6 col-md-12">
      <hr class="solid text-grey-11" />
    </div>
  </div>

  <div class="row self-start justify-center">
    <div class="col-12 col-lg-2 col-md-4 q-py-sm">
      <a
        :href="item.href"
        v-for="item in [
          {
            href: 'http://www.facebook.com',
            icon: 'fa-facebook',
          },
          {
            href: 'http://www.x.com',
            icon: 'fa-twitter',
          },
          {
            href: 'http://www.linkedin.com',
            icon: 'fa-linkedin',
          },
          {
            href: 'http://www.instagram.com',
            icon: 'fa-instagram',
          },
        ]"
        :key="item.href"
      >
        <i
          :class="
            item.icon.concat(
              ' ',
              'fa-brands',
              ' ',
              'text-hover',
              ' ',
              'q-pr-lg'
            )
          "
          style="font-size: 1.5em"
        />
      </a>
    </div>
    <div class="col-12 col-lg-2 col-md-4">
      <div class="text-subtitle1 text-grey text-center">
        ©Copyright 2024 TripRex | niiviie
      </div>
    </div>
    <div class="col-12 col-lg-2 col-md-4 row justify-end">
      <div class="text-subtitle1 text-weight-medium text-hover cursor-pointer">
        Privacy Policy
      </div>
      <span class="text-subtitle1 text-grey text-weight-medium"
        >&nbsp;-&nbsp;</span
      >
      <div class="text-subtitle1 text-weight-medium text-hover cursor-pointer">
        Terms & Condition
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'CustomFooter',
});

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
