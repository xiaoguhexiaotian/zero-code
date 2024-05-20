<template>
  <ElContainer>
    <ElHeader>
      <slot name="header" />
    </Elheader>
    <ElContainer>
      <ElAside>
        <slot name="aside" />
      </ElAside>
      <el-main>
        <slot name="main" />
      </el-main>
    </ElContainer>
  </ElContainer>
</template>
<script setup lang="ts">
</script>
