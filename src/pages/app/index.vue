<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'



const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('My Profile')

useHead({
    title: 'Mamla | Dashboard',
})
</script>

<template>
    <div class="page-content-inner">
        <FlightsDashboard />
    </div>
</template>
