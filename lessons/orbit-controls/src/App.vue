<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos';
</script>

<template>
  <TresCanvas window-size clear-color="#82DBC5">
    <TresPerspectiveCamera 
      :position="[5,5,5]" :look-at="[0,0,0]"
    />
    <OrbitControls />
    <TresMesh :position="[0,2,0]">
      <TresBoxGeometry :args="[1,1,1]"/>
      <TresMeshNormalMaterial />
    </TresMesh>
    <TresAxesHelper :args="[5]" />
  </TresCanvas>
</template>

