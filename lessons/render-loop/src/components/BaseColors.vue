<script setup lang="ts">
import { ref, reactive } from 'vue'

const selectedBaseColor = ref('#903345')
const baseColors = reactive(['#903345', '#F2D3AC', '#F2F2F2', '#000000'])
</script>

<template>
  <div class="mb-8">
    <h3>Base Color</h3>
    <ul class="flex gap-4 flex-wrap list-none justify-start ml-0 pl-0">
      <li v-for="(color, index) in baseColors" :key="index" class="relative">
        <span v-show="selectedBaseColor === color" 
          class="absolute -top-2 -right-1 bg-gray-200 text-xs w-18px h-18px flex items-center justify-center rounded-full">
          <i class="i-carbon-checkmark "  />
        </span>
        <button
        :style="{ backgroundColor: color}"
        @click="selectedBaseColor = color" 
        class="w-8 h-8 rounded-full border-2 border-white border-solid cursor-pointer">
         
        </button>
      </li>
    </ul>
  </div>
</template>