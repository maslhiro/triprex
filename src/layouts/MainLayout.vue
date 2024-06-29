<template>
  <q-layout view="lHh lpr lff">
    <custom-header />

    <custom-footer
      title="Want To Take Tour Packages?"
      btn-title="Book A Tour"
      :contact="[
        {
          title: 'More Inquiry',
          icon: 'phone',
          desc: '+999-858 624 984',
        },
        {
          title: 'Send Mail',
          icon: 'mail',
          desc: 'info@example.com',
        },
        {
          title: 'Address',
          icon: 'location_on',
          desc: 'House 168/170, Avenue 01, Mirpur DOHS, Dhaka Bangladesh',
        },
      ]"
      :widget="{
        title: 'Quick Link',
        tabs: [
          'About Us',
          'Destinations',
          'Tour Package',
          'Article',
          'Contact Us',
        ],
      }"
      :extra="{
        title: 'We Are Here',
        desc: 'Quisque purus augue, facilisis andi neque idont accumsan fringilla massa. Vivamusol id nibhom condimentum.',
      }"
      :social="[
        {
          href: 'http://www.facebook.com',
          icon: 'fa-brands fa-facebook',
        },
        {
          href: 'http://www.x.com',
          icon: 'fa-brands fa-twitter',
        },
        {
          href: 'http://www.linkedin.com',
          icon: 'fa-brands fa-linkedin',
        },
        {
          href: 'http://www.instagram.com',
          icon: 'fa-brands fa-instagram',
        },
      ]"
      :payment="{
        title: 'Payment Partner',
        icons: [
          'fa-brands fa-cc-visa',
          'fa-brands fa-cc-mastercard',
          'fa-brands fa-cc-paypal',
          'fa-brands fa-cc-apple-pay',
          'fa-brands fa-cc-stripe',
          'fa-brands fa-cc-jcb',
          'fa-brands fa-cc-amex',
        ],
      }"
    />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import CustomFooter from 'src/components/Footer.vue';
import CustomHeader from 'src/components/Header.vue';

defineOptions({
  name: 'MainLayout',
});
</script>

<style scoped>
.text-hover {
  transition: color 0.3s;
  color: grey;
}

.text-hover:hover {
  color: var(--q-secondary);
}
</style>
