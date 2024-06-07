<script setup lang="ts">
import { ref, toRef, watch, computed } from 'vue'
import { useDarkmode } from '/@src/stores/darkmode'
import { useNotyf } from '/@src/composable/useNotyf'
import authService from '/@src/backend/auth'

const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const notyf = useNotyf()

const email = ref("")
const password = ref("")

const handleLogin = async () => {
    if (!isLoading.value) {
        isLoading.value = true
        let credentials = {
            email: email.value,
            password: password.value
        }
        authService.login(credentials).then((res) => {
            console.log(res?.userId);
            if (res?.userId) {
                router.push('/app')
                notyf.dismissAll()
                notyf.success(`Welcome ${res?.clientName}`)
            } else {
                notyf.error("Wrong email or password")
            }

        })

        isLoading.value = false
    }
}

useHead({
    title: 'Login | Mamla',
})
</script>

<template>
    <div class="auth-wrapper-inner columns is-gapless">
        <!-- Image section (hidden on mobile) -->
        <div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner">
            <div class="hero login-hero is-fullheight is-app-grey">
                <div class="hero-body">
                    <div class="columns">
                        <div class="column is-10 is-offset-1 vector-image">
                            <img class="light-image" src="/src/assets/illustrations/Login-amico.png" alt="">
                            <img class="dark-image" src="/src/assets/illustrations/Login-amico.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="hero-footer">
                    <p class="has-text-centered" />
                </div>
            </div>
        </div>

        <!-- Form section -->
        <div class="column is-4">
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
                                    <h2>Welcome Back.</h2>
                                    <p>Please sign in to your account</p>
                                    <RouterLink to="/auth/signup">
                                        I do not have an account yet
                                    </RouterLink>
                                </div>
                                <div class="auth-form-wrapper">
                                    <!-- Login Form -->
                                    <form method="post" novalidate @submit.prevent="handleLogin">
                                        <div class="login-form">
                                            <!-- Username -->
                                            <VField>
                                                <VControl icon="feather:user">
                                                    <VInput v-model="email" type="text" placeholder="Username"
                                                        autocomplete="username" />
                                                </VControl>
                                            </VField>

                                            <!-- Password -->
                                            <VField>
                                                <VControl icon="feather:lock">
                                                    <VInput v-model="password" type="password" placeholder="Password"
                                                        autocomplete="current-password" />
                                                </VControl>
                                            </VField>

                                            <!-- Switch -->
                                            <!-- <VField>
                                                <VControl class="setting-item">
                                                    <VCheckbox label="Remember me" paddingless />
                                                </VControl>
                                            </VField> -->

                                            <!-- Submit -->
                                            <div class="login">
                                                <VButton :loading="isLoading" color="primary" type="submit" bold
                                                    fullwidth raised>
                                                    Sign In
                                                </VButton>
                                            </div>

                                            <div class="forgot-link has-text-centered">
                                                <a>Forgot Password?</a>
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
    </div>
</template>

<style lang="scss" scoped>
.vector-image {
    width: 65%;
}
</style>