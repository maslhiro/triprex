<template>
  <q-layout view="lHr lpr lfr">
    <custom-header
      @profile-click="onProfileClick"
      @menu-click="drawerRightVisible = !drawerRightVisible"
      :data="[
        {
          title: 'HOME',
          submenu: [
            { title: 'HOME 1', href: '' },
            { title: 'HOME 2', href: '' },
            { title: 'HOME 3', href: '' },
            { title: 'HOME 4', href: '' },
            { title: 'HOME 5', href: '' },
            { title: 'HOME 6', href: '' },
          ],
        },
        { title: 'ABOUT' },
        {
          title: 'TOURS',
          submenu: [
            {
              title: 'PACKAGE GRID',
              href: '',
            },
            { title: 'PACKAGE SIDEBAR', href: '' },
            {
              title: 'PACKAGE CATEGORY',
              href: '',
            },
            { title: 'PACKAGE DETAIL', href: '' },
          ],
        },
        {
          title: 'DESTINATION',
          href: '/destination',
          submenu: [
            { title: 'INDIA', href: '/destination/india' },
            { title: 'BRAZIL', href: '/destination/brazil' },
            { title: 'INDONESIA', href: '/destination/indonesia' },
            { title: 'DESTINATION 4', href: '/destination' },
            { title: 'DESTINATION 5', href: '/destination' },
            { title: 'DESTINATION 6', href: '/destination' },
            { title: 'DESTINATION DETAIL', href: '/destination' },
          ],
        },
        {
          title: 'PAGES',
          submenu: [
            { title: 'HOTEL', href: '' },
            { title: 'TOUR GUIDE', href: '' },
            { title: 'VISA', href: '' },
            { title: 'FAQ', href: '' },
          ],
        },
        { title: 'CONTACT', href: 'contact' },
      ]"
      :contact="{
        title: 'To More Inquiry',
        desc: '+880 123 456 789',
      }"
    />

    <drawer-right
      :visible="drawerRightVisible"
      @close="drawerRightVisible = !drawerRightVisible"
      tourTitle="Tour Style"
      destination-title="Our
    Destinations"
      :tour-data="[
        { title: 'adventure tours', icon: 'adventure_tour.svg', href: '' },
        { title: 'cultural tours', icon: 'cultural_tour.svg', href: '' },
        { title: 'group tours', icon: 'group_tour.svg', href: '' },
        { title: 'historical tours', icon: 'historical_tour.svg', href: '' },
        { title: 'honey moon tours', icon: 'honeymoon_tour.svg', href: '' },
        { title: 'luxury tours', icon: 'luxury_tour.svg', href: '' },
      ]"
      :contact="[
        { title: 'More Inquiry', icon: 'phone', desc: '+999-858 624 984' },
        { title: 'Send Mail', icon: 'mail', desc: 'info@example.com' },
      ]"
    />

    <q-drawer v-model="drawerLeft" side="left" overlay>
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
        </div>
      </q-scroll-area>
    </q-drawer>

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
import DrawerRight from 'src/components/DrawerRight.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineOptions({
  name: 'MainLayout',
});

const drawerLeft = ref(false);
const drawerRightVisible = ref(false);

const onProfileClick = () => {
  router.push('/my-account');
};
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
