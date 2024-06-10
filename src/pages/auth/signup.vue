<script setup lang="ts">
import { ref, toRef, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z as zod } from 'zod'
import { useDarkmode } from '/@src/stores/darkmode'
import { useNotyf } from '/@src/composable/useNotyf'
import authService from '/@src/backend/auth'



const darkmode = useDarkmode()
const router = useRouter()
const notyf = useNotyf()
const isLoading = ref(false)
const { t } = useI18n()


const email = ref("")
const password = ref("")
// const mobileNumber = ref()

// const create = () => {
//     let user_info = {
//         email: email.value,
//         password: password.value,
//         name: "user"
//     }
//     authService.createAccount(user_info);
// }


// Define a validation schema
const validationSchema = toTypedSchema(
    zod
        .object({
            email: zod
                .string({
                    required_error: t('auth.errors.email.required'),
                })
                .email(t('auth.errors.email.format')),
            password: zod
                .string({
                    required_error: t('auth.errors.password.required'),
                })
                .min(8, t('auth.errors.password.length')),
            passwordCheck: zod.string({
                required_error: t('auth.errors.passwordCheck.required'),
            }),
            // mobileNumber: zod
            //     .number({
            //         required_error: t('auth.errors.mobileNumber.required'),
            //     })
        })
        .refine((data) => data.password === data.passwordCheck, {
            message: t('auth.errors.passwordCheck.match'),
            path: ['passwordCheck'],
        })
)

const { handleSubmit } = useForm({
    validationSchema,
    initialValues: {
        email: '',
        password: '',
        passwordCheck: '',
        // mobileNumber: +880,
    },
})

const onSignup = handleSubmit(async (values) => {
    console.log('Signup values:')
    console.table(values)

    if (!isLoading.value) {
        isLoading.value = true
        let user_info = {
            email: email.value,
            password: password.value,
            // mobileNumber: mobileNumber.value
        }
        const res = await authService.createAccount(user_info);
        console.log(res);
        await authService.login({ email, password });
        router.push('/app')
        isLoading.value = false
    }
})

useHead({
    title: 'Sign Up | Mamla',
})
</script>

<template>
    <div class="auth-wrapper-inner columns is-gapless">
        <!-- Form section -->
        <div class="column is-5">
            <div class="hero is-fullheight is-white">
                <div class="hero-heading">
                    <label class="dark-mode ml-auto" tabindex="0" role="button"
                        @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()">
                        <input type="checkbox" :checked="!darkmode.isDark" @change="darkmode.onChange">
                        <span />
                    </label>
                    <div class="auth-logo">
                        <RouterLink to="/">
                            <AnimatedLogo />
                        </RouterLink>
                    </div>
                </div>




                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-12">
                                <div class="auth-content">
                                    <h2>{{ t('auth.title') }}</h2>
                                    <p>{{ t('auth.subtitle') }}</p>
                                    <!-- <RouterLink to="/auth/login-2">
                                        {{ t('auth.action.login') }}
                                    </RouterLink> -->
                                </div>
                                <div class="auth-form-wrapper">
                                    <!-- Login Form -->
                                    <form method="post" novalidate @submit="onSignup">
                                        <div id="signin-form" class="login-form">
                                            <!-- Input -->
                                            <!-- <VField id="name" v-slot="{ field }">
                                                <VControl icon="feather:user">
                                                    <VInput type="text" :placeholder="t('auth.placeholder.name')"
                                                        autocomplete="name" />
                                                    <p v-if="field?.errorMessage" class="help is-danger">
                                                        {{ field.errorMessage }}
                                                    </p>
                                                </VControl>
                                            </VField> -->

                                            <!-- Input -->
                                            <VField id="email" v-slot="{ field }">
                                                <VControl icon="feather:mail">
                                                    <VInput v-model="email" type="text"
                                                        :placeholder="t('auth.placeholder.email')"
                                                        autocomplete="email" />
                                                    <p v-if="field?.errorMessage" class="help is-danger">
                                                        {{ field.errorMessage }}
                                                    </p>
                                                </VControl>
                                            </VField>

                                            <!-- Input -->
                                            <VField id="password" v-slot="{ field }">
                                                <VControl icon="feather:lock">
                                                    <VInput v-model="password" type="password"
                                                        :placeholder="t('auth.placeholder.password')"
                                                        autocomplete="new-password" />
                                                    <p v-if="field?.errorMessage" class="help is-danger">
                                                        {{ field.errorMessage }}
                                                    </p>
                                                </VControl>
                                            </VField>

                                            <!-- Input -->
                                            <VField id="passwordCheck" v-slot="{ field }">
                                                <VControl icon="feather:lock">
                                                    <VInput type="password"
                                                        :placeholder="t('auth.placeholder.passwordCheck')" />
                                                    <p v-if="field?.errorMessage" class="help is-danger">
                                                        {{ field.errorMessage }}
                                                    </p>
                                                </VControl>
                                            </VField>

                                            <!-- <VField id="mobileNumber" v-slot="{ field }">
                                                <VControl icon="feather:phone">
                                                    <VInput v-model="mobileNumber" type="number"
                                                        :placeholder="t('auth.errors.mobileNumber.required')" />
                                                    <p v-if="field?.errorMessage" class="help is-danger">
                                                        {{ field.errorMessage }}
                                                    </p>
                                                </VControl>
                                            </VField> -->
                                            <!-- <VField id="promitional">
                                                <VControl class="setting-item">
                                                    <VCheckbox color="primary" :label="t('auth.label.promotional')"
                                                        paddingless />
                                                </VControl>
                                            </VField> -->

                                            <!-- Submit -->

                                            <div class="login">
                                                <VButton type="submit" color="primary" bold fullwidth raised>
                                                    {{ t('auth.action.signup') }}
                                                </VButton>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>

        <!-- Image section (hidden on mobile) -->
        <div class="column login-column is-7 is-hidden-mobile hero-banner">
            <div class="hero login-hero is-fullheight is-app-grey">
                <div class="hero-body">
                    <div class="columns">
                        <div class="column is-10 is-offset-1">
                            <img class="light-image" src="/src/assets/illustrations/signup.png" alt="">
                            <img class="dark-image" src="/src/assets/illustrations/signup.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="hero-footer">
                    <p class="has-text-centered" />
                </div>
            </div>
        </div>
    </div>
</template>