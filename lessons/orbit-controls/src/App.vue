<script setup lang="ts">
import { TresCanvas, useRenderLoop } from '@tresjs/core'
import { ref, watchEffect } from 'vue';

const { onLoop } = useRenderLoop()

const boxRef = ref()

watchEffect(()=> {
  console.log(boxRef.value)
})
onLoop(({ delta, elapsed })=> {
  if(!boxRef.value) return

  boxRef.value.rotation.y += delta
  boxRef.value.rotation.z = elapsed
})
</script>

<template>
  <TresCanvas window-size clear-color="#82DBC5">
    <TresPerspectiveCamera 
      :position="[5,5,5]" :look-at="[0,0,0]"
    />
    <TresMesh ref="boxRef" :position="[0,2,0]">
      <TresBoxGeometry :args="[1,1,1]"/>
      <TresMeshNormalMaterial />
    </TresMesh>
    <TresAxesHelper :args="[5]" />
  </TresCanvas>
</template>

