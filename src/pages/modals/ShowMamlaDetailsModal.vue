<script setup lang="ts">
import { ref, toRef } from 'vue'

const props = defineProps({
    showModal: {
        type: Boolean,
        default: false,
    },
    item: {
        type: Object,
        required: true,
    }
});

const openModalRef = toRef(props, 'showModal');
const itemRef = toRef(props, 'item');
const emit = defineEmits(['update:showModal']);

function dateFormatter(date: string) {
    return new Date(date).toLocaleDateString('en-IN');
}



</script>

<template>
    <VModal title="Mamla Details" :open="openModalRef" actions="center" @close="$emit('update:showModal', false)">
        <template #content>
            <VTabs align="centered" selected="details" :tabs="[
                { label: 'Details', value: 'details' },
                { label: 'Notes', value: 'notes' },
                // { label: 'Tasks', value: 'tasks' },
            ]">
                <template #tab="{ activeValue }">
                    <p v-if="activeValue === 'details'" style="display: block;">
                    <p> <span>MGR No:</span> {{ item.mgr }}</p>
                    <p> <span>ST:</span> {{ item.st }}</p>
                    <p> <span>Thana: </span> {{ item.thana }}</p>
                    <p> <span>Date:</span> {{ dateFormatter(item.date) }}</p>
                    <p> <span>Mamla No:</span> {{ item.mamla_no }}</p>
                    </p>
                    <p v-else-if="activeValue === 'notes'">
                        {{ itemRef.note }}
                    </p>
                </template>
            </VTabs>
        </template>
        <template #action>
            <VButton color="primary" raised @click="$emit('update:showModal', false)">
                Confirm
            </VButton>
        </template>
    </VModal>
</template>