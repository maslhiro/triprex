<template>
  <div class="q-px-md" @mouseover="mouseOver" @mouseleave="mouseLeave">
    <div
      class="text-subtitle1 title-hover cursor-pointer text-weight-medium non-selectable"
      @click="onMenuClick"
    >
      {{ title }}
    </div>
    <q-menu
      v-model="showMenu"
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
      transition-hide="fade"
      transition-show="fade"
      anchor="bottom start"
      class="q-ma-xl no-box-shadow"
    >
      <q-list>
        <div
          class="text-subtitle2 title-hover cursor-pointer q-pa-md non-selectable"
          clickable
          style="min-width: 200px"
          v-for="item in subMenu"
          @click="() => router.push({ path: item.href, replace: true })"
          :key="item.href"
        >
          {{ item.title }}
        </div>
      </q-list>
    </q-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { debounce } from 'quasar';
import { useRouter } from 'vue-router';

import { SubMenu } from '../types';

const router = useRouter();

defineOptions({
  name: 'MenuHover',
});

interface Props {
  title: string;
  subMenu?: SubMenu[];
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: () => 'New tab',
  subMenu: () => [],
});

const showMenu = ref(false);

const debouncedMouseOver = debounce(() => {
  showMenu.value = true;
}, 100);

const debouncedMouseLeave = debounce(() => {
  showMenu.value = false;
}, 100);

function mouseOver() {
  debouncedMouseLeave.cancel();
  debouncedMouseOver();
}

function mouseLeave() {
  debouncedMouseLeave();
}

const onMenuClick = () => {
  if (props?.href) {
    router.push({ path: props.href, replace: true });
  }
};
</script>

<style scoped>
.content {
  z-index: 99;
}

.title-hover {
  transition: color 0.3s;
  color: var(--q-dark);
}

.title-hover:hover {
  color: var(--q-primary);
}
</style>
