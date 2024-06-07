<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'
import MamlaList from '/@src/pages/mamla/MamlaList.vue'



const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Mamla List')

useHead({
    title: 'Mamla | Mamla List',
})
</script>

<template>
    <div class="page-content-inner">
        <MamlaList />
    </div>
</template>
