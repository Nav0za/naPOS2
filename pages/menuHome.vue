<template>
    <div>
        <UButton label="back" @click="() => useRouter().back()" />
        <div class="grid grid-cols-3 container max-w-lg mx-auto">
            <div class="border p-5 rounded border-neutral-300" @click="() => useRouter().push('cashier')">
                <label>คิดเงิน</label>
            </div>
            <div class="border p-5 rounded border-neutral-300" @click="() => useRouter().push('report')">
                <label>รายงาน</label>
            </div>
            <div class="border p-5 rounded border-neutral-300" @click="() => useRouter().push('setting')">
                <label>ตั้งค่า</label>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>
