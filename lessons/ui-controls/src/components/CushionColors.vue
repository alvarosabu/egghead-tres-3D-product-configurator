<script setup lang="ts">
import { ref, reactive } from 'vue'

const selectedCushionColor = ref('#F2F2F2')
const cushionColors = reactive(['#e5abb6', '#F2F2F2', '#f5f1eb', '#050505'])
</script>

<template>
  <div class="mb-8">
    <h3>Cushion Color</h3>
    <ul class="flex gap-4 flex-wrap list-none justify-start ml-0 pl-0">
      <li class="relative" v-for="(color, index) in cushionColors" :key="index">
        <span v-show="selectedCushionColor === color" 
          class="absolute -top-2 -right-1 bg-gray-200 text-xs w-18px h-18px flex items-center justify-center rounded-full">
          <i class="i-carbon-checkmark "  />
        </span>
        <button
        :style="{ backgroundColor: color}"
        @click="selectedCushionColor = color" 
        class="w-8 h-8 rounded-full border-2 border-white border-solid cursor-pointer">
          
        </button>
      </li>
    </ul>
  </div>
</template>