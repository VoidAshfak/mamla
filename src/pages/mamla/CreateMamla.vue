<script setup lang="ts">
import { ref, toRef } from 'vue'
import authService from '/@src/backend/auth';
import service from '/@src/backend/mamlas';
import { useNotyf } from '/@src/composable/useNotyf';


const notyf = useNotyf()
const router = useRouter();

const mgr = ref('')
const st = ref('')
const mamlaNumber = ref('')
const date = ref(new Date())
const thana = ref('')
const note = ref('')
const { y } = useWindowScroll()

const isStuck = computed(() => {
    return y.value > 30
})
const onSubmit = async () => {
    const mamlaDetails = {
        mgr: mgr.value,
        st: st.value,
        mamla_no: mamlaNumber.value,
        date: date.value.toLocaleString(),
        thana: thana.value,
        note: note.value,
    }
    console.log(mamlaDetails)
    if (mgr.value && st.value && mamlaNumber.value && date.value && thana.value) {
        const res = await service.createMamla(mamlaDetails);
        console.log(res);
        notyf.success("Mamla Created")
        router.push('/app')
    } else {
        notyf.error("Please fill all data!")
    }
}

const userLabel = await authService.getUserLabel();

onMounted(() => {
    authService.getCurrentUser()
        .then((res) => {
            if (!res?.targets[0].userId) {
                router.push('/')
            } else {
                console.log(res.email);
            }
        })


})

</script>

<template>

    <VPlaceholderPage v-if="userLabel?.length === 0" title="Only admin can access this feature"
        subtitle="Sorry! you are not an admin. To create a mamla, you have to be an admin." larger>
        <template #image>
            <img class="light-image" src="/src/assets/illustrations/hammer.webp" alt="">
            <img class="dark-image" src="/src/assets/illustrations/hammer.webp" alt="">
        </template>
    </VPlaceholderPage>

    <div v-else class="business-dashboard flights-dashboard">
        <div class="columns">
            <div class="column is-12">
                <form method="post" novalidate class="form-layout" @submit.prevent="onSubmit">
                    <div class="form-outer">
                        <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
                            <div class="form-header-inner">
                                <div class="left">
                                    <h3>Create New Mamla</h3>
                                </div>
                                <div class="right">
                                    <div class="buttons">
                                        <VButton icon="lnir lnir-arrow-left rem-100" to="/app/MamlaList" light
                                            dark-outlined>
                                            Cancel
                                        </VButton>
                                        <VButton type="submit" color="primary" raised>
                                            Save
                                        </VButton>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="form-body">
                            <!--Fieldset-->
                            <div class="form-fieldset">
                                <div class="fieldset-heading">
                                    <h4>Mamla Info</h4>
                                    <p>Star (*) marked fields are required to create a mamla</p>
                                </div>

                                <div class="columns is-multiline">
                                    <div class="column is-6">
                                        <VField>
                                            <VLabel>MGR No. *</VLabel>
                                            <VControl icon="lucide:user">
                                                <VInput v-model="mgr" type="text" placeholder=""
                                                    autocomplete="organization" />
                                            </VControl>
                                        </VField>
                                    </div>
                                    <div class="column is-6">
                                        <VField>
                                            <VLabel>ST *</VLabel>
                                            <VControl icon="lucide:corner-down-right">
                                                <VInput v-model="st" type="tel" placeholder="" autocomplete="tel"
                                                    inputmode="tel" />
                                            </VControl>
                                        </VField>
                                    </div>
                                    <div class="column is-6">
                                        <VField>
                                            <VLabel>Mamla No *</VLabel>
                                            <VControl icon="lucide:corner-down-right">
                                                <VInput v-model="mamlaNumber" type="tel" placeholder=""
                                                    autocomplete="tel" inputmode="tel" />
                                            </VControl>
                                        </VField>
                                    </div>
                                    <div class="column is-6">
                                        <VField>
                                            <VLabel>Thana *</VLabel>
                                            <VControl icon="lucide:map-pin">
                                                <VInput v-model="thana" type="tel" placeholder="" autocomplete="tel"
                                                    inputmode="tel" />
                                            </VControl>
                                        </VField>
                                    </div>
                                    <div class="column is-6">
                                        <!-- <VField v-slot="{ id }">
                                            <VLabel>Business Type</VLabel>
                                            <VControl>
                                                <Multiselect v-model="businessType" :attrs="{ id }"
                                                    placeholder="Select a type" :options="[
                                                        'Government',
                                                        'Medical',
                                                        'Finance',
                                                        'Services',
                                                        'Technology',
                                                    ]" />
                                            </VControl>
                                        </VField> -->
                                        <ClientOnly>
                                            <VDatePicker v-model="date" color="green" trim-weeks>
                                                <template #default="{ inputValue, inputEvents }">
                                                    <VField>
                                                        <VLabel>Date *</VLabel>
                                                        <VControl icon="feather:calendar">
                                                            <input class="input v-input" type="text"
                                                                placeholder="Select a date" :value="inputValue"
                                                                v-on="inputEvents">
                                                        </VControl>
                                                    </VField>
                                                </template>
                                            </VDatePicker>
                                        </ClientOnly>
                                    </div>
                                    <div class="column is-12">
                                        <VField>
                                            <VLabel>Note</VLabel>
                                            <VControl>
                                                <VTextarea v-model="note" class="textarea" rows="10"
                                                    placeholder="Keep a note of any details that might associated with this mamla..."
                                                    autocomplete="off" autocapitalize="off" spellcheck="true" />
                                            </VControl>
                                        </VField>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/components/forms-outer';

.form-layout {
    max-width: 740px;
    margin: 0 auto;
}
</style>
