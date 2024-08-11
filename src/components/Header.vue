<template>
  <q-header elevated>
    <div class="row content bg-white text-dark">
      <img src="logo.svg" height="40px" fit="contain" ratio="1" />
      <div class="gt-md col row flex-center">
        <menu-hover
          v-for="item in data"
          :key="item.title"
          :title="item.title"
          :sub-menu="item.submenu"
          style="z-index: 100000"
        />
      </div>
      <div class="flex-center content-center row">
        <q-btn flat round icon="account_circle" @click="onProfileClick" />
        <q-btn flat icon="widgets" @click="onMenuClick" />
        <extra-info
          :title="contact?.title"
          :desc="contact?.desc"
          icon="phone"
          class="gt-md row q-pl-sm q-gutter-x-sm"
        />
      </div>
    </div>
  </q-header>
</template>
<script setup lang="ts">
import MenuHover from 'src/components/MenuHover.vue';
import { SubMenu } from 'src/types';
import ExtraInfo from './ExtraInfo.vue';
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
  onProfileClick?: () => void;
  onMenuClick?: () => void;
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
</style>
