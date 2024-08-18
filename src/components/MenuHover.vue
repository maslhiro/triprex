<template>
  <div class="q-px-md" @mouseover="mouseOver" @mouseleave="mouseLeave">
    <div class="text-subtitle1 title-hover cursor-pointer text-weight-medium">
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
          class="text-subtitle2 title-hover cursor-pointer q-pa-md"
          clickable
          style="min-width: 200px"
          v-for="item in subMenu"
          @click="() => router.push(item.href)"
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
}

withDefaults(defineProps<Props>(), {
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
</script>

<style scoped>
.content {
  z-index: 9999;
}

.title-hover {
  transition: color 0.3s;
  color: var(--q-dark);
}

.title-hover:hover {
  color: var(--q-primary);
}
</style>
