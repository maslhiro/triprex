<template>
  <q-header elevated>
    <div class="row content bg-white text-dark">
      <img src="../assets/logo.svg" height="40px" fit="contain" ratio="1" />
      <div class="gt-md col row flex-center">
        <menu-hover
          v-for="item in data"
          :key="item.title"
          :title="item.title"
          :sub-menu="item.submenu"
        />
      </div>
      <div class="flex-center content-center row">
        <q-btn flat round icon="account_circle" />
        <q-btn flat icon="widgets" />
        <div class="gt-md row q-pl-sm q-gutter-x-sm items-center">
          <q-icon name="phone" color="primary" size="1.5rem" />
          <div class="divider" />
          <div class="q-pl-sm">
            <div class="text-subtitle2 text-weight-bold">
              {{ contact?.title }}
            </div>
            <div class="text-h6 text-weight-bolder text cursor-pointer">
              {{ contact?.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-header>
</template>
<script setup lang="ts">
import MenuHover from 'src/components/MenuHover.vue';
import { SubMenu } from 'src/types';

defineOptions({
  name: 'CustomHeader',
});

interface MenuItem {
  title: string;
  submenu?: SubMenu[];
}

interface Props {
  data: MenuItem[];
  contact?: {
    title: string;
    desc: string;
  };
}

withDefaults(defineProps<Props>(), {
  data: () => [],
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

.text {
  transition: color 0.3s;
  color: var(--q-primary);
}

.text:hover {
  color: var(--q-dark);
}

.divider {
  height: 2.5rem;
  width: 1px;
  background-color: grey;
}
</style>
