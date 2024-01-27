<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas window-size clear-color="#82DBC5">
    <TresPerspectiveCamera 
      :position="[5,5,5]" :look-at="[0,0,0]" 
    />
    <TresMesh 
      :position="[0, 2, 0]"  
    >
      <TresBoxGeometry/>
      <TresMeshNormalMaterial />
    </TresMesh>
    <TresAxesHelper :args="[5]" />
  </TresCanvas>
</template>
