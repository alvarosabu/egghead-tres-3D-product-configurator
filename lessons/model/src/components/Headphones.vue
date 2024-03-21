<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos';

const { nodes } = await useGLTF('/models/headphones/headphones.gltf')

const model = nodes['Headphones_7']

</script>

<template>
  <primitive :object="model" />
</template>