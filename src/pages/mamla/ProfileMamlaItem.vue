<script setup>
import { ref, toRef } from 'vue'
import ShowMamlaDetailsModal from '../modals/ShowMamlaDetailsModal.vue';



const mgrFilter = ref('')
const thanaFilter = ref('')

const props = defineProps(['mamlas']);

const mamlasRef = toRef(props, 'mamlas');
const showModal = ref(false);
const selectedMamla = ref({});
const showDetailsModal = (item) => {
    showModal.value = true;
    selectedMamla.value = item;
}

function dateFormatter(date) {
    return new Date(date).toLocaleDateString('en-IN');
}

function getBackgroundColor(date) {
    const currentDate = new Date();
    const fiveDaysInMilliseconds = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds
    const oneDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000; // 1 days in milliseconds
    const difference = Math.abs(currentDate - new Date(date));
    if (difference <= oneDaysInMilliseconds) {
        return "var(--danger)"
    } else if (difference <= fiveDaysInMilliseconds) {
        return "var(--warning)"
    }
    return ""
}

const filteredData = computed(() => {
    if (!mgrFilter.value && !thanaFilter.value) {
        return mamlasRef.value
    } else {
        return mamlasRef.value.filter((item) => {
            return (
                item.mgr.match(new RegExp(mgrFilter.value, 'i')) &&
                item.thana.match(new RegExp(thanaFilter.value, 'i'))
            )
        })
    }
})
</script>

<template>
    <div>
        <div class="user-grid-toolbar">
            <VControl icon="feather:search">
                <input v-model="mgrFilter" class="input custom-text-filter" placeholder="MGR...">
            </VControl>
            <VControl icon="feather:search">
                <input v-model="thanaFilter" class="input custom-text-filter" placeholder="Thana...">
            </VControl>
        </div>
        <!-- {{ selectedMamla }} -->

        <div class="user-grid user-grid-v4">
            <!--List Empty Search Placeholder -->
            <VPlaceholderPage :class="[filteredData.length !== 0 && 'is-hidden']"
                title="We couldn't find any matching results." subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try again later." larger>
                <template #image>
                    <img class="light-image" src="/src/assets/illustrations/hammer.webp" alt="">
                    <img class="dark-image" src="/src/assets/illustrations/hammer.webp" alt="">
                </template>
            </VPlaceholderPage>

            <TransitionGroup name="list" tag="div" class="columns is-multiline is-flex-tablet-p is-half-tablet-p">
                <!--Grid item-->
                <div v-for="item in filteredData" :key="item.id" class="column is-3">
                    <div class="grid-item" :style="{ backgroundColor: getBackgroundColor(item.date) }">
                        <h3>
                            Mamla No: <span class="data">{{ item.mamla_no }}</span>
                        </h3>
                        <hr>
                        <h3>
                            Thana: <span class="data">{{ item.thana }}</span>
                        </h3>
                        <hr>
                        <h3 class="dark-inverted">
                            Date: <span class="data">{{ dateFormatter(item.date) }}</span>
                        </h3>
                        <hr>
                        <div class="button-wrap has-text-centered">
                            <div>
                                <a @click="showDetailsModal(item)" class="dark-inverted-hover">See Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        </div>
        <ShowMamlaDetailsModal v-model:showModal="showModal" :item="selectedMamla" />
    </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.user-grid-v4 {
    .columns {
        margin-inline-start: -0.5rem !important;
        margin-inline-end: -0.5rem !important;
        margin-top: -0.5rem !important;
    }

    .column {
        padding: 0.5rem !important;
    }

    .grid-item {
        position: relative;

        @include vuero-s-card;

        text-align: justify;
        // background-color: var(--warning);

        &:hover,
        &:focus {
            .button-wrap {
                >div {
                    a {
                        opacity: 1;
                        pointer-events: all;
                    }
                }
            }
        }

        .dropdown {
            position: absolute;
            top: 10px;
            inset-inline-end: 10px;
            text-align: inset-inline-start;
        }

        >.v-avatar {
            display: block;
            margin: 0 auto 4px;
        }

        h3 {
            font-family: var(--font-alt);
            font-size: 1rem;
            font-weight: 600;
            color: var(--dark-text);
        }

        p {
            font-size: 0.95rem;
            color: var(--light-text);
            font-weight: 600;
        }

        .data {
            color: var(--primary);
            font-size: 1.2rem;
        }

        .button-wrap {
            margin: 20px 0 0;

            .v-button {
                width: 100%;
                max-width: 140px;
                margin: 0 auto;
            }

            >div {
                margin: 6px 0 0;

                a {
                    opacity: 0;
                    pointer-events: none;
                    color: var(--light-text);
                    font-weight: 500;
                    font-size: 0.9rem;
                    transition:
                        opacity 0.3s,
                        color 0.3s;

                    &:hover,
                    &:focus {
                        color: var(--primary);
                    }
                }
            }
        }
    }
}

.is-dark {
    .user-grid-v4 {
        .grid-item {
            @include vuero-card--dark;
        }
    }
}
</style>
