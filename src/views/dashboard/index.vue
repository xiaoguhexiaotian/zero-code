<template>
  <GuLayout :class="style['gu-layout-demo']">
    <template #header>
      头部
    </template>
    <template #aside>
      侧边
    </template>
    <template #main>
      主体
    </template>
  </GuLayout>
</template>
<script setup lang="ts">
import { GuLayout } from "/@/components/Layout/index";
import style from "./index.module.scss";

console.log(style);
</script>
