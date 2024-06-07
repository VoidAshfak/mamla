<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'
import CreateMamla from '../mamla/CreateMamla.vue';


const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Create Mamla')

useHead({
    title: 'Mamla | Create Mamla',
})
</script>

<template>
    <div class="page-content-inner">
        <CreateMamla />
    </div>
</template>
