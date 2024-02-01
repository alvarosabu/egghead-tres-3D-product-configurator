<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas shadows window-size clear-color="#000">
    <TresPerspectiveCamera 
      :position="[5,5,5]" :look-at="[0,0,0]" 
    />
    <TresMesh 
      :position="[0, 2, 0]"
      receive-shadow
      cast-shadow 
    >
      <TresBoxGeometry/>
      <TresMeshStandardMaterial color="gray" />
    </TresMesh>
    <TresAmbientLight :args="['white', 2]" />
    <TresDirectionalLight 
      :position="[4,6,0]"
      :color="'cyan'"
      :intensity="1"
      cast-shadow
    />
    <TresMesh 
      :position="[2, 4, 0]" 
      cast-shadow
    >
      <TresSphereGeometry/>
      <TresMeshStandardMaterial color="pink" />
    </TresMesh>
    <TresMesh receive-shadow  :rotation-x="-Math.PI / 2">
      <TresPlaneGeometry :args="[10,10]" />
      <TresMeshStandardMaterial color="white" />
    </TresMesh>
    <TresAxesHelper :args="[5]" />
  </TresCanvas>
</template>
