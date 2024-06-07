<script setup>
import { ref } from 'vue'
import authService from '/@src/backend/auth';
import service from '/@src/backend/mamlas';
import ProfileMamlaItem from '/@src/pages/mamla/ProfileMamlaItem.vue';


const router = useRouter();


const profileMamla = ref();
onMounted(async () => {
    const res = await authService.getCurrentUser();
    if (!res) {
        router.push('/')
    } else {
        const list = await service.getProfileMamlaList(res?.$id);
        console.log(list);
        profileMamla.value = list;

    }
})

</script>

<template>
    <div class="business-dashboard flights-dashboard">
        <div class="columns">
            <div class="column is-12">
                <ProfileMamlaItem v-if="profileMamla" :mamlas="profileMamla" />
            </div>
        </div>
    </div>
</template>
