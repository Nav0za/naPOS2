<template>
  <div>
    <div class="grid grid-cols-3 container max-w-lg mx-auto">
      <UButton class="h-20 justify-center text-5xl" label="1" />
      <UButton class="h-20 justify-center text-5xl" label="2" />
      <UButton class="h-20 justify-center text-5xl" label="3" />
      <UButton class="h-20 justify-center text-5xl" label="4" />
      <UButton class="h-20 justify-center text-5xl" label="5" />
      <UButton class="h-20 justify-center text-5xl" label="6" />
      <UButton class="h-20 justify-center text-5xl" label="7" />
      <UButton class="h-20 justify-center text-5xl" label="8" />
      <UButton class="h-20 justify-center text-5xl" label="9" />
      <UButton class="h-20 justify-center text-5xl" label="10" />
    </div>
    <div class="mx-auto container max-w-lg">
      <UButton label="Login" variant="outline" class="p-8" @click="login" />
    </div>
  </div>
</template>

<script setup>
const login = () => {
  const router = useRouter()
  router.push('menuHome')
};
</script>

<style scoped>

</style>
