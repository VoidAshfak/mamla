<script setup>
import service from '/@src/backend/mamlas';
import AddMamlaToProfileModal from '../modals/AddMamlaToProfileModal.vue'
import MamlaEditModal from '/@src/pages/modals/MamlaEditModal.vue'
import YseNoModal from '../modals/YseNoModal.vue';

import authService from '/@src/backend/auth';
import { useNotyf } from '/@src/composable/useNotyf'


const notyf = useNotyf();

const openModal = ref(false);
const openEditModal = ref(false);
const visible = ref(false);

const toggleModal = () => {
    openModal.value = true;
}
const toggleEditModal = () => {
    openEditModal.value = !openEditModal.value;
}

const toggleVisible = () => {
    visible.value = true;
}

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

const itemRef = toRef(props, 'item');
const isAdminRef = toRef(props, 'isAdmin');

const addToProfile = async () => {
    const user = await authService.getCurrentUser();
    const res = await service.addUser(itemRef.value.$id, user.$id);
    console.log(res);
    notyf.success("Mamla added to profile")
}

const deleteMamla = async () => {
    const res = await service.deleteMamla(itemRef.value.$id);
    visible.value = false
}



</script>


<template>
    <VDropdown icon="feather:more-vertical" spaced right>
        <template #content>
            <a @click="toggleModal" style="cursor: pointer;" role="menuitem" class="dropdown-item is-media">
                <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-plus" />
                </div>
                <div class="meta">
                    <span>Add</span>
                    <span>Add this case to my profile</span>
                </div>
            </a>

            <div v-if="isAdminRef">
                <hr class="dropdown-divider">
                <a @click="toggleEditModal" role="menuitem" class="dropdown-item is-media">
                    <div class="icon">
                        <i aria-hidden="true" class="lnil lnil-save" />
                    </div>
                    <div class="meta">
                        <span>Edit</span>
                        <span>Edit this case (Admin)</span>
                    </div>
                </a>
                <hr class="dropdown-divider">
                <a @click="toggleVisible" role="menuitem" class="dropdown-item is-media">
                    <div class="icon">
                        <i aria-hidden="true" class="lnil lnil-trash" />
                    </div>
                    <div class="meta">
                        <span>Delete</span>
                        <span>Delete this case (Admin)</span>
                    </div>
                </a>
            </div>



            <!-- <hr class="dropdown-divider"> -->

            <!-- <a role="menuitem" href="#" class="dropdown-item is-media">
                <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-cog" />
                </div>
                <div class="meta">
                    <span>Settings</span>
                    <span>configuration options</span>
                </div>
            </a> -->
        </template>
    </VDropdown>

    <AddMamlaToProfileModal v-model:openModal="openModal" @on-confirm="addToProfile" />
    <MamlaEditModal v-model:openEditModal="openEditModal" :item="itemRef" @on-update="toggleEditModal" />
    <YseNoModal v-model:visible="visible" @on-confirm-delete="deleteMamla" />


</template>
