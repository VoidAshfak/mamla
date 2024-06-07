<script setup>
import service from '/@src/backend/mamlas';
import AddMamlaToProfileModal from '../modals/AddMamlaToProfileModal.vue';
import authService from '/@src/backend/auth';
import { useNotyf } from '/@src/composable/useNotyf'



const notyf = useNotyf();

const openModal = ref(false);

const toggleModal = () => {
    openModal.value = true;
}

const props = defineProps({
    item: {
        type: Object,
        required: true,
    }
})

const itemRef = toRef(props, 'item');

const addToProfile = async () => {
    const user = await authService.getCurrentUser();
    const res = await service.addUser(itemRef.value.$id, user.$id);

    console.log(res);
    notyf.success("Mamla added to profile")
}


</script>


<template>
    <VDropdown icon="feather:more-vertical" spaced right>
        <template #content>
            <p @click="toggleModal" style="cursor: pointer;" role="menuitem" class="dropdown-item is-media">
            <div class="icon">
                <i aria-hidden="true" class="lnil lnil-plus" />
            </div>
            <div class="meta">
                <span>Add</span>
                <span>Add this case to my profile</span>
            </div>
            </p>

            <hr class="dropdown-divider">
            <a role="menuitem" href="#" class="dropdown-item is-media">
                <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-save" />
                </div>
                <div class="meta">
                    <span>Edit</span>
                    <span>Edit this case (Admin)</span>
                </div>
            </a>



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


</template>
