<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { ContactShadows } from '@tresjs/cientos';
import TheHeader from './components/TheHeader.vue';
import BaseColors from './components/BaseColors.vue';
import CushionColors from './components/CushionColors.vue';
import Headphones from './components/Headphones.vue';
</script>

<template>
  <TheHeader />
  <main class="relative mx-auto container h-screen flex items-center">
    <div class="w-full grid grid-cols-1 sm:grid-cols-2">
      <section class="min-h-400px">
        <TresCanvas alpha>
          <TresPerspectiveCamera :position="[0,0,11]" />
          <Suspense>
            <Headphones />
          </Suspense>
          <ContactShadows
            :opacity="0.2"
            :blur="3"
            :position="[0, -2, 0]" 
          />
          <TresAmbientLight :args="['#fff', 1]" />
          <TresDirectionalLight :intensity="2" :position="[4,4,4]" />
        </TresCanvas>
      </section>
      <aside class="ml-16">
        <h2 class="mb-16">
          🥚-headphones
        </h2>
        <BaseColors />
        <CushionColors />
      </aside>
    </div>
  </main>
</template>
