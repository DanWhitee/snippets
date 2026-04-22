<template>
    <div class="u-container">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { IContainerSlots } from '../model/type'

defineSlots<IContainerSlots>()
</script>

<style>
.u-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
</style>
