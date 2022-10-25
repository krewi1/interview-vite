<script setup lang="ts">
import type { TreeType } from "@/data/exampleTree";

defineProps<{
  tree: TreeType[];
}>();
</script>

<template>
  <div v-text="tree" />
</template>
