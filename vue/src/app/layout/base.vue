<template>
  <u-base-grid>
    <template #top>
      <slot name="top" />
    </template>
    <template #content>
      <slot />
    </template>
    <template #bottom>
      <slot name="bottom" />
    </template>
  </u-base-grid>
</template>

<script setup lang="ts">
import { UBaseGrid } from '@/shared/components/templates/base-grid'
import type { IBaseGridSlots } from '@/shared/components/templates/base-grid/model/type'

type BaseGridSlots = Pick<IBaseGridSlots, 'top' | 'bottom'>
type LayoutSlots = BaseGridSlots & { default: () => void }

defineSlots<LayoutSlots>()
</script>