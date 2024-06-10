<template>
    <VModal is="form" :open="openModalRef" title="Update Mamla" size="big" actions="right"
        @submit.prevent="openModalRef = false" @close="$emit('update:openEditModal', false)">
        <template #content>
            <div class="modal-form columns">
                <div class="column">
                    <div class="field">
                        <VDatePicker v-model="date" color="green" trim-weeks>
                            <template #default="{ inputValue, inputEvents }">
                                <VField>
                                    <VLabel>Date</VLabel>
                                    <VControl icon="feather:calendar">
                                        <input class="input v-input" type="text" placeholder="New Date"
                                            :value="inputValue" v-on="inputEvents">
                                    </VControl>
                                </VField>
                            </template>
                        </VDatePicker>
                    </div>
                    <div class="field">
                        <label>MGR</label>
                        <div class="control">
                            <input v-model="mgr" type="text" class="input" placeholder="MGR No">
                        </div>
                    </div>
                    <div class="field">
                        <label>Thana</label>
                        <div class="control">
                            <input v-model="thana" type="text" class="input" placeholder="Thana">
                        </div>
                    </div>

                </div>
                <div class="column">
                    <div class="field">
                        <label>ST</label>
                        <div class="control">
                            <input v-model="st" type="text" class="input" placeholder="ST">
                        </div>
                    </div>
                    <div class="field">
                        <label>Mamla Number</label>
                        <div class="control">
                            <input v-model="mamlaNumber" type="text" class="input" placeholder="Mamla Number">
                        </div>
                    </div>
                    <div class="field">
                        <label>Note</label>
                        <div class="control">
                            <textarea v-model="note" class="textarea" rows="4" placeholder="Notes" />
                        </div>
                    </div>
                    <!-- {{ itemRef }} -->
                </div>
            </div>
        </template>
        <template #action>
            <VButton @click="update" type="submit" color="primary" raised>
                Update
            </VButton>
        </template>
    </VModal>
</template>




<script setup>
import authService from '/@src/backend/auth';
import service from '/@src/backend/mamlas';

const props = defineProps({
    openEditModal: {
        type: Boolean,
        default: false,
    },
    item: {
        type: Object,
        required: true,
    }
});

const openModalRef = toRef(props, 'openEditModal');
const emit = defineEmits(['update:openEditModal', 'on-update']);


const itemRef = toRef(props, 'item');
const mgr = ref(itemRef.value.mgr)
const st = ref(itemRef.value.st)
const thana = ref(itemRef.value.thana)
const date = ref(itemRef.value.date)
const note = ref(itemRef.value.note)
const mamlaNumber = ref(itemRef.value.mamla_no)


// const currentUser = await authService.getCurrentUser();

const update = async () => {
    const res = await service.updateMamla(
        itemRef.value.$id,
        {
            mgr: mgr.value,
            st: st.value,
            mamla_no: mamlaNumber.value,
            date: date.value,
            thana: thana.value,
            note: note.value
        }
    )

    console.log("Update Success", res);
    emit('on-update');
}

</script>