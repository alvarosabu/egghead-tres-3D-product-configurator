<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'

</script>

<template>
  <TresCanvas window-size clear-color="#82DBC5">
    <TresMesh 
      :position="[0, 1, 0]" 
      :scale="[2, 0.5, 1]" 
      :rotation="[Math.PI / 4, -Math.PI / 3,0]"
    >
      <TresBoxGeometry :args="[1,1,1]"/>
      <TresMeshNormalMaterial />
    </TresMesh>
    <TresAxesHelper :args="[5]" />
  </TresCanvas>
</template>
