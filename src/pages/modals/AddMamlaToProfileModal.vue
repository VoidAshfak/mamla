<script setup lang="ts">
import { ref, toRef } from 'vue'

const props = defineProps({
    openModal: {
        type: Boolean,
        default: false,
    }
});

const openModalRef = toRef(props, 'openModal');
const emit = defineEmits(['update:openModal', 'on-confirm']);

const onConfirmClick = () => {
    emit('on-confirm');
    emit('update:openModal', false);
}


</script>

<template>
    <VModal title="Add Mamla" :open="openModalRef" actions="center" @close="$emit('update:openModal', false)">
        <template #content>
            <VPlaceholderSection key="1" title="Add to profile?"
                subtitle="This Mamla will be added to your profile. You can check details there." />
        </template>
        <template #action>
            <VButton color="primary" raised @click="onConfirmClick">
                Confirm
            </VButton>
        </template>
    </VModal>
</template>