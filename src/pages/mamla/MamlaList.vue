<script setup lang="ts">
import { ref, toRef } from 'vue'
import authService from '/@src/backend/auth';
import service from '/@src/backend/mamlas';
import OptionsDropdown from '../dropdowns/OptionsDropdown.vue';

const router = useRouter();


const filterForThana = ref('');
const filterForMGR = ref('');
// const selectedKeys = ['mgr', 'st', 'thana', 'mamla_no', 'date']

const mamlaList = ref();

const getMamlas = async () => {
    const mamlas = await service.getMamlaList();
    console.log(mamlas?.documents);
    mamlaList.value = mamlas?.documents;
}




const filteredData = computed(() => {
    if (!filterForThana.value && !filterForMGR.value) {
        return mamlaList.value ? mamlaList.value : []
    } else {
        const filterReMGR = new RegExp(filterForMGR.value, 'i')
        const filterReThana = new RegExp(filterForThana.value, 'i')

        return mamlaList.value.filter((item: { mgr: string, thana: string }) => {
            return (
                item.mgr.match(filterReMGR) &&
                item.thana.match(filterReThana)
            )
        })
    }
})

const column = {
    mgr: {
        label: 'MGR No.',
    },
    st: {
        label: 'ST',
    },
    thana: {
        label: 'Thana',
    },
    mamla_no: {
        label: 'Mamla No.',
        bold: true,
    },
    date: {
        label: 'Date',
    },
    Opt: {
        label: 'Options'
    }

}

function dateFormatter(date: string) {
    return new Date(date).toLocaleDateString('en-IN');
}

const isAdmin = ref(false);


onMounted(async () => {
    getMamlas()
    const res = await authService.getCurrentUser();
    if (!res) {
        router.push('/')
    }

    const label = await authService.getUserLabel();
    isAdmin.value = label?.length ? true : false

    // console.log("Admin Check: ", label);


})

</script>

<template>
    <div class="business-dashboard flights-dashboard">
        <div class="columns">
            <div class="column is-12">
                <div class="list-flex-toolbar">
                    <VControl icon="feather:search">
                        <input v-model="filterForMGR" class="input custom-text-filter" placeholder="MGR...">
                    </VControl>
                    <VControl icon="feather:search">
                        <input v-model="filterForThana" class="input custom-text-filter" placeholder="Thana...">
                    </VControl>
                </div>

                <VFlexTable :data="filteredData" :columns="column" rounded :separators="true" class="cell-center">
                    <template #body>
                        <TransitionGroup name="list" tag="div" class="flex-list-inner">
                            <!--Table item-->
                            <div v-for="item in filteredData" :key="item.$id" class="flex-table-item">

                                <!-- <VFlexTableCell :column="{ media: true, grow: true }">
                                    <VAvatar :picture="item.picture" />
                                    <div>
                                        <span class="item-name dark-inverted">{{ item.name }}</span>
                                        <span class="item-meta">
                                            <span>
                                                <i aria-hidden="true" class="iconify" data-icon="feather:clock" />{{
                                                    item.duration }}</span>
                                        </span>
                                    </div>
                                </VFlexTableCell> -->
                                <VFlexTableCell>
                                    <span>{{ item.mgr }}</span>
                                </VFlexTableCell>


                                <VFlexTableCell>
                                    <span>{{ item.st }}</span>
                                </VFlexTableCell>


                                <VFlexTableCell>
                                    <span>{{ item.thana }}</span>
                                </VFlexTableCell>


                                <VFlexTableCell>
                                    <span>{{ item.mamla_no }}</span>
                                </VFlexTableCell>


                                <VFlexTableCell :column="{ align: 'start' }">
                                    <span>{{ dateFormatter(item.date) }}</span>
                                </VFlexTableCell>


                                <VFlexTableCell :column="{ align: 'end' }">
                                    <OptionsDropdown :item="item" :isAdmin="isAdmin" />
                                </VFlexTableCell>


                            </div>
                        </TransitionGroup>
                    </template>
                </VFlexTable>
                <!-- <AddMamlaToProfileModal v-model:openModal="openModal" /> -->
                <!--Table Pagination-->
                <!-- <VFlexPagination v-if="filteredData?.length > 10" :item-per-page="2" :total-items="1000"
                    :current-page="1" :max-links-displayed="5" /> -->
            </div>
        </div>
    </div>
</template>
