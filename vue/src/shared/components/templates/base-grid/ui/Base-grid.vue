<template>
    <div class="u-base-grid">
        <template v-if="slot.top">
            <div class="u-base-grid__top">
                <slot name="top" />
            </div>
        </template>
        <template v-if="slot.content">
            <div class="u-base-grid__content">
                <slot name="content" />
            </div>
        </template>
        <template v-if="slot.bottom">
            <div class="u-base-grid__bottom">
                <slot name="bottom" />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import type { IBaseGridSlots } from '../model/type'

const slot = defineSlots<IBaseGridSlots>()
</script>

<style>
.u-base-grid {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.u-base-grid__content {
    flex: 1 1 auto;
}
</style>