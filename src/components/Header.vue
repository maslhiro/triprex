<template>
  <q-header elevated>
    <div class="row content bg-white text-dark">
      <img src="../assets/logo.svg" height="40px" fit="contain" ratio="1" />
      <div class="gt-md col row flex-center">
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
      <div class="flex-center content-center row">
        <q-btn flat round icon="account_circle" />
        <q-btn flat icon="widgets" />
      </div>
    </div>
  </q-header>
</template>
<script setup lang="ts">
import MenuHover from 'src/components/MenuHover.vue';

defineOptions({
  name: 'CustomHeader',
});
</script>

<style scoped lang="scss">
@import '../css/app.scss';

.content {
  padding: 12px 12%;
  align-items: center;
  justify-content: space-between;
  transition: all 0.8s ease-out 0s;
}

@media (max-width: $xs-breakpoint) {
  .content {
    padding: 12px;
  }
}
</style>
