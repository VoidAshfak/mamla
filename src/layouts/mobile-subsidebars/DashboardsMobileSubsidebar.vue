<template>
    <div class="mobile-subsidebar">
        <div class="inner">
            <div class="sidebar-title">
                <h3>Menu</h3>
            </div>

            <ul class="submenu" data-simplebar>
                <VCollapseLinks>
                    <template #header>
                        Personal
                        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
                    </template>

                    <RouterLink to="app" class="is-submenu">
                        <i aria-hidden="true" class="lnil lnil-home" />
                        <span>Home</span>
                    </RouterLink>
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
                </VCollapseLinks>
            </ul>
        </div>
    </div>
</template>
