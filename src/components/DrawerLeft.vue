<template>
  <q-drawer side="left" :model-value="visible" overlay bordered :width="width">
    <div class="row justify-between q-py-lg q-px-md divider">
      <img src="logo.svg" height="40px" fit="contain" ratio="1" />
      <q-btn color="dark" round icon="close" @click="onClose" size="md" />
    </div>

    <q-list class="q-px-md">
      <q-item
        clickable
        v-close-popup
        v-for="item in menu"
        :key="item.title"
        :to="item.href"
      >
        <q-item-section>
          <div class="text-subtitle1 text-weight-medium text-hover">
            {{ item.title }}
          </div>
        </q-item-section>
        <q-item-section side v-if="item?.submenu">
          <q-icon name="keyboard_arrow_right" v-if="item?.submenu" />
        </q-item-section>

        <q-menu v-if="item?.submenu" anchor="top end" self="top start">
          <q-list class="q-px-md">
            <q-item
              v-for="subItem in item.submenu"
              :key="subItem.title"
              :to="subItem.href"
              clickable
              v-close-popup
            >
              <q-item-section>
                <div class="text-subtitle1 text-weight-medium text-hover">
                  {{ subItem.title }}
                </div></q-item-section
              >
            </q-item>
          </q-list>
        </q-menu>
      </q-item>
    </q-list>

    <div class="q-pb-lg q-mx-md divider" />

    <div class="q-py-lg q-px-md">
      <extra-info
        class="col-6"
        :title="contact.title"
        :desc="contact.desc"
        :icon="contact.icon"
        size="medium"
      />
    </div>
  </q-drawer>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';
import ExtraInfo from './ExtraInfo.vue';
import { Contact, Menu } from 'src/types';
import { useContactStore } from 'src/stores/contact';

const q = useQuasar();

defineOptions({
  name: 'DrawerLeft',
});

export interface Props {
  visible: boolean;
  onClose: () => void;
  menu: Menu[];
}

const contactStore = useContactStore();

const contact: Contact = contactStore.phone;

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  onClose: () => null,
});

const DEFAULT_WIDTH_1 = 300;
const DEFAULT_WIDTH_2 = 200;
const width = computed(() =>
  q.screen?.width / 2 > DEFAULT_WIDTH_1 ? DEFAULT_WIDTH_1 : DEFAULT_WIDTH_2
);
</script>
<style lang="scss" scoped>
@import '../css/app.scss';

.divider {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: aquamarine;
}

.text-hover {
  transition: color 0.3s;
  color: black;
}

.text-hover:hover {
  color: var(--q-secondary);
}
</style>
