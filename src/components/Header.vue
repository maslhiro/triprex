<template>
  <q-header elevated>
    <div class="row content bg-white text-dark cursor-pointer">
      <img
        src="logo.svg"
        height="40px"
        fit="contain"
        ratio="1"
        @click="router.push('/')"
      />
      <div class="gt-md col row flex-center">
        <menu-hover
          v-for="item in data"
          :key="item.title"
          :title="item.title"
          :sub-menu="item.submenu"
          :href="item.href"
          style="z-index: 99"
        />
      </div>
      <div class="flex-center content-center row">
        <q-btn class="lt-lg" flat icon="menu" @click="onMenuClick" />
        <q-btn
          class="gt-md"
          flat
          round
          icon="account_circle"
          @click="onProfileClick"
        />
        <q-btn flat icon="widgets" @click="onWidgetClick" />
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
import { Menu } from 'src/types';
import ExtraInfo from './ExtraInfo.vue';
import { useContactStore } from 'src/stores/contact';
import { useRouter } from 'vue-router';
defineOptions({
  name: 'CustomHeader',
});

const router = useRouter();

interface Props {
  data: Menu[];
  onProfileClick?: () => void;
  onMenuClick?: () => void;
  onWidgetClick?: () => void;
}

withDefaults(defineProps<Props>(), {
  data: () => [],
});

const contactStore = useContactStore();

const contact = contactStore.phone;
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
