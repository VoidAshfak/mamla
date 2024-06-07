<script setup lang="ts">
const props = defineProps<{
    light?: boolean
}>()

const router = useRouter()
const isLoading = ref(false)

router.beforeEach(() => {
    isLoading.value = true
})
router.afterEach(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 200)
})
</script>

<template>
    <img src="/src/assets/illustrations/hammer.webp" class="top-logo" alt="">
</template>

<style lang="scss" scoped></style>