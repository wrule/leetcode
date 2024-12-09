<script setup lang="ts">
import { ref } from 'vue';

interface MenuItem {
  title: string;
  subItems?: string[];
}

const current = ref('');

const handleClick = (newValue: string) => {
  if (newValue === current.value) {
    current.value = '';
  } else {
    current.value = newValue;
  }
}

defineProps<{
  menuconfig: MenuItem[]
}>()
</script>

<template>
  <div class="menu-wrapper">
    <div
      v-for="item in menuconfig"
      :data-testid="`first-level-${item.title.toLowerCase()}`">
      <button
        v-if="item.subItems && item.subItems.length >= 1"
        @click="() => handleClick(item.title)"
        :data-testid="`button-${item.title.toLowerCase()}`">
        {{ current === item.title ? 'Hide' : 'Expand' }}
      </button>
      <span>{{ item.title }}</span>
      <ul v-if="current === item.title" :data-testid="`ul-${item.title.toLowerCase()}`">
        <li
          v-for="subItem in item.subItems"
          :data-testid="`li-${item.title.toLowerCase()}-${subItem.toLowerCase()}`">
          {{ subItem }}
        </li>
      </ul>
    </div>
  </div>
</template>
