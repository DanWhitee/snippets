<template>
  <l-base>
    <template #top>
      <u-header />
    </template>
    <template #default>
      <r-view />
    </template>
    <template #bottom>
      <u-footer />
    </template>
  </l-base>
</template>

<script setup lang="ts">
import { LBase } from './layout'
import { RouterView as RView } from 'vue-router'
import { UHeader } from '@/widgets/header'
import { UFooter } from '@/widgets/footer'
</script>