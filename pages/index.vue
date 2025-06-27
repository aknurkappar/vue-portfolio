<template>
 <div>
    dkfkdj
    <AreaChart
      :data="[
        { name: 'Jan', blue: 10, pink: 20 },
        { name: 'Feb', blue: 15, pink: 25 }
      ]"
      :colors="['blue', 'pink']"
      :categories="['Jan', 'Feb']"
    />
    <Button>gfgf</Button>
 </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped>
</style>