<template>
  <l-base>
    <template #top>
      <div>
        Header
      </div>
    </template>
    <template #default>
      <r-view />
    </template>
    <template #bottom>
      <div>
        Footer
      </div>
    </template>
  </l-base>
</template>

<script setup lang="ts">
import { LBase } from './layout'
import { RouterView as RView } from 'vue-router'
</script>