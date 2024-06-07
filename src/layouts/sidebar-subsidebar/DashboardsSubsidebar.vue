<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
    <div class="sidebar-panel is-generic">
        <div class="subpanel-header">
            <h3 class="no-mb">
                Menu
            </h3>
            <div class="panel-close" tabindex="0" role="button" @keydown.space.prevent="emit('close')"
                @click="emit('close')">
                <i aria-hidden="true" class="iconify" data-icon="feather:x" />
            </div>
        </div>
        <div class="inner" data-simplebar>
            <ul>
                <li>
                    <RouterLink to="/app">
                        <i aria-hidden="true" class="lnil lnil-home pr-2" />
                        Home
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/app/MamlaList">
                        <i aria-hidden="true" class="lnil lnil-list pr-2" />
                        Mamla List
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/app/create-mamla">
                        <i aria-hidden="true" class="lnil lnil-plus pr-2" />
                        Create Mamla
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '/@src/scss/layout/sidebar-panel';
</style>
