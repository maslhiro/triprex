<template>
  <q-img class="bg-container" no-native-menu height="25em">
    <div class="absolute-center cursor-pointer bg-transparent text-transform">
      <div class="text-h2 text-center text-weight-bold">
        {{ title }}
      </div>
      <div class="text-subtitle1 text-center text-weight-medium">
        <span class="text-primary">
          {{ root }}
        </span>
        <q-icon name="trending_flat" />
        {{ title }}
      </div>
    </div>
  </q-img>
</template>
<script setup lang="ts">
defineOptions({
  name: 'HeaderCover',
});

interface Props {
  title: string;
  root?: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
  root: 'Home',
});
</script>
<style scoped lang="scss">
.bg-container {
  background-size: cover;
  background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3) 101.02%
    ),
    url(https://triprex.egenslab.com/wp-content/plugins/triprex-core//inc/theme-options/images/breadcrumb/inner-banner-bg.jpg);
}

.text-transform {
  text-transform: capitalize;
}
</style>
