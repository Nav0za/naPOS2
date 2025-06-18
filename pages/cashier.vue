<template>
    <div>
        <BackBtn />
        <div class="container max-w-7xl mx-auto flex flex-row justify-between gap-4">
            <div class="flex flex-col w-1/2 gap-4">
                <div class="border p-3 flex flex-col justify-between gap-3 max-h-100 overflow-y-auto">
                    <p v-for="item in bills()" :key="item.id">
                        {{ item.name }} : {{ item.amount }} ({{ item.price }}) THB
                    </p>
                </div>
                <div class="border p-5">
                    <p>Total: {{bills().reduce((sum, item) => sum + item.price, 0)}}</p>
                </div>
            </div>
            <div class="flex flex-col justify-between gap-4 w-1/2 border p-4">
                <div v-if="checkOutstate === false">
                    <div v-if="cateSelectstate === ''" class="grid grid-cols-4">
                        <div v-for="(category, i) in proDucts" :key="i" class="p-3 border border-neutral-300 rounded"
                            @click="() => {
                                cateSelectstate = category.name
                            }">
                            <p>{{ category.name }}</p>
                        </div>
                    </div>
                    <div v-else>
                        <UButton label="Back" @click="cateSelectstate = ''" />
                        <div v-for="item in proDucts.filter(cate => cate.name === cateSelectstate)" :key="item.id"
                            class="grid grid-cols-4">
                            <UButton v-for="name in item.items" :key="name.id" :label="name.name" variant="subtle"
                                @click="addToBill(name.name, name.price)" />
                        </div>
                    </div>
                </div>
                <div v-else class="flex flex-col">
                    <div class="border-2 p-6">
                        <span>{{ giveMoney }}</span>
                    </div>
                    <div class="p-0 grid grid-cols-3">
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="7" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('7')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="8" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('8')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="9" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('9')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="4" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('4')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="5" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('5')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="6" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('6')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="1" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('1')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="2" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('2')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="3" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('3')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="Delete" icon="i-lucide-arrow-left"
                                class="w-full h-full py-5 justify-center" @click="deleteInput" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="0" class="w-full h-full py-5 justify-center"
                                @click="inputMoney('0')" />
                        </div>
                        <div class="flex justify-center items-center">
                            <UButton variant="outline" label="Clear" class="w-full h-full py-5 justify-center"
                                @click="clearInput" />
                        </div>
                        <p>{{ payOPtion }}</p>
                        <div class="inline-flex rounded-md shadow-xs" role="group">
                            <button type="button"
                                class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                @focus="changePayOption('Cash')">
                                Cash
                            </button>
                            <button type="button"
                                class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                @focus="changePayOption('QR Code')">
                                QR Code
                            </button>
                            <button type="button"
                                class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                                @focus="changePayOption('Card')">
                                Card
                            </button>
                        </div>
                    </div>
                </div>
                <div v-if="checkOutstate === false">
                    <UButton label="Checkout" @click="checkOutstate = true" />
                </div>
                <div v-else>
                    <UButton label="Checkout" @click="checkOutstate = true" disabled />
                    <UButton label="Back" color="neutral" variant="subtle" @click="() => {
                        checkOutstate = false
                        clearInput()
                        cateSelectstate = ''
                    }" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const proDucts = products()
const cateSelectstate = ref('')
const checkOutstate = ref(false)
const giveMoney = ref('0')
const payOPtion = ref('Cash')

// ลบเลขเงินทีละตัว
function deleteInput() {
    if (giveMoney.value.length > 1) {
        giveMoney.value = giveMoney.value.slice(0, -1)
    } else {
        giveMoney.value = '0'
    }
}
// เคลียร์เงินให้เป็น 0
function clearInput() {
    giveMoney.value = '0'
}
// เพิ่มตัวเลขเงิน
function inputMoney(num) {
    if (giveMoney.value === '0') {
        giveMoney.value = num
    } else {
        giveMoney.value += num
    }
}
// เพิ่มสินค้าในบิล
function addToBill(itemName, price) {
    const item = bills().find(bill => bill.name === itemName) // หาสินค้าในบิลที่มีชื่อเดียวกัน
    // ถ้ามีสินค้าในบิลแล้ว ให้เพิ่มจำนวนและราคา
    if (item) {
        item.amount++
        item.price += price
    } else {
        // push object ลงใน state array ชื่อว่า bills
        bills().push(
            {
                id: bills().length + 1,
                name: itemName,
                price: price,
                amount: 1
            }
        )
    }
}
// เปลี่ยนวิธีการชำระเงิน
function changePayOption(option) {
    if (payOPtion.value === option) {
        return // ถ้าเลือกแล้วไม่ต้องทำอะไร
    }else {
        payOPtion.value = option // เปลี่ยนวิธีการชำระเงิน
    }
    clearInput()
}
</script>

<style lang="scss" scoped></style>