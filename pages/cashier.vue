<template>
    <div>
        <BackBtn />
        <div class="container max-w-7xl mx-auto flex flex-row justify-between">
            <div class="border p-3 w-1/2">
                <p>item</p>
            </div>
            <div class="w-1/2 border p-4">
                <div v-if="cateSelectstate === ''" class="grid grid-cols-4">
                    <div v-for="(cg, i) in category" :key="i" class="p-3 border border-neutral-300 rounded" @click="() => {
                        cateSelectstate = cg.name
                        console.log(cateSelectstate)
                    }">
                        <p>{{ cg.name }}</p>
                    </div>
                </div>
                <div v-else>
                    <UButton label="Back" @click="cateSelectstate = ''" />
                    <div v-for="item in category.filter(cate => cate.name === cateSelectstate)" :key="item.id"
                        class="grid grid-cols-4">
                        <div v-for="name in item.items" class="border p-3 border-neutral-300 rounded">
                            <p>
                                {{ name.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const cateSelectstate = ref('')
const category = ref([
    {
        id: 1,
        name: 'Hot',
        items: [
            {
                id: 1,
                name: 'Hot americano'
            },
            {
                id: 2,
                name: 'Hot latte'
            },
            {
                id: 3,
                name: 'Hot cappucino'
            },
            {
                id: 4,
                name: 'Hot mocha'
            }
        ]
    },
    {
        id: 2,
        name: 'Iced',
        items: [
            {
                id: 1,
                name: 'Iced americano'
            },
            {
                id: 2,
                name: 'Iced latte'
            },
            {
                id: 3,
                name: 'Iced cappucino'
            },
            {
                id: 4,
                name: 'Iced mocha'
            }
        ]
    },
    {
        id: 3,
        name: 'Frappe',
        items: [
            {
                id: 1,
                name: 'Coffee frappe'
            },
            {
                id: 2,
                name: 'Mocha frappe'
            },
            {
                id: 3,
                name: 'Thai tea frappe'
            },
            {
                id: 4,
                name: 'Green tea frappe'
            }
        ]
    },
    {
        id: 4,
        name: 'Smoothie',
        items: [
            {
                id: 1,
                name: 'Strawberry smoothie yoghurt'
            },
            {
                id: 2,
                name: 'Lime smoothie'
            },
            {
                id: 3,
                name: 'Watermelon smoothie'
            },
            {
                id: 4,
                name: 'Mango smoothie'
            }
        ]
    }

])
</script>

<style lang="scss" scoped></style>