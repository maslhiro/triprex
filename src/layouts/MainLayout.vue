<template>
  <q-layout view="lHh lpr lff">
    <q-header elevated>
      <div class="row q-pa-sm bg-white text-dark">
        <div class="row flex-center content-center col-2">
          <q-img
            src="../assets/logo.svg"
            height="56px"
            fit="contain"
            ratio="1"
          />
        </div>
        <div class="col-8 row flex-center">
          <menu-hover
            title="HOME +"
            :sub-menu="[
              { title: 'HOME 1', href: '' },
              { title: 'HOME 2', href: '' },
              { title: 'HOME 3', href: '' },
              { title: 'HOME 4', href: '' },
              { title: 'HOME 5', href: '' },
              { title: 'HOME 6', href: '' },
            ]"
          />
          <menu-hover title="ABOUT" />
          <menu-hover
            title="TOURS +"
            :sub-menu="[
              { title: 'PACKAGE GRID', href: '' },
              { title: 'PACKAGE SIDEBAR', href: '' },
              { title: 'PACKAGE CATEGORY', href: '' },
              { title: 'PACKAGE DETAIL', href: '' },
            ]"
          />
          <menu-hover
            title="DESTINATION +"
            :sub-menu="[
              { title: 'PACKAGE GRID', href: '' },
              { title: 'PACKAGE SIDEBAR', href: '' },
              { title: 'PACKAGE CATEGORY', href: '' },
              { title: 'PACKAGE DETAIL', href: '' },
            ]"
          />
          <menu-hover
            title="PAGES +"
            :sub-menu="[
              { title: 'HOTEL', href: '' },
              { title: 'TOUR GUIDE', href: '' },
              { title: 'VISA', href: '' },
              { title: 'FAQ', href: '' },
            ]"
          />
          <menu-hover title="CONTACT" />
        </div>
        <div class="flex-center content-center col-2 row">
          <q-btn flat round icon="account_circle" />
          <q-btn flat icon="widgets" />
        </div>
      </div>
    </q-header>

    <q-footer elevated class="bg-dark">
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
      />
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MenuHover from 'src/components/MenuHover.vue';
import CustomFooter from 'src/components/Footer.vue';

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
