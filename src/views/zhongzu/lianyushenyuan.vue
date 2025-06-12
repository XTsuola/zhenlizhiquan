<template>
    <div class="search">
        <div class="search_select">
            <a-select v-model:value="formState.quality" style="width: 100%;" placeholder="请选择品质">
                <a-select-option v-for="item in qualityList" :key="item.value" :value="item.value">{{
                    item.label
                }}</a-select-option>
            </a-select>
        </div>
        <div class="search_select">
            <a-select v-model:value="formState.cost" style="width: 100%;" placeholder="请选择费用">
                <a-select-option v-for="item in costList" :key="item.value" :value="item.value">{{
                    item.label
                }}</a-select-option>
            </a-select>
        </div>
    </div>
    <div class="search">
        <div class="search_input">
            <a-input v-model:value="formState.name" placeholder="请输入名称" />
        </div>
        <div class="search_btn">
            <a-button style="margin-right: 12px;" type="primary" @click="search">查询</a-button>
            <a-button style="margin-right: 8px;" @click="reset">清空</a-button>
            <a-button @click="goBack">返回</a-button>
        </div>
    </div>
    <div class="card">
        <a-table :columns="columns" :data-source="data" :pagination="false">
            <template #bodyCell="{ column, record }">
                <span v-if="column.key === 'headImg'" slot="pic">
                    <img style="width: 50px;height: 50px;" :src="record.img" />
                </span>
                <template v-if="column.key === 'action'">
                    <span style="display: flex;flex-wrap: nowrap;white-space: nowrap;align-items: center;">
                        <a-button size="small" @click="showDetail(record)">详情</a-button>
                    </span>
                </template>
            </template>
        </a-table>
    </div>
    <a-modal v-model:visible="visible" destroyOnClose title="详细信息" :maskClosable="false">
        <Detail :detailData="detailData"></Detail>
        <template #footer>
            <a-button key="back" @click="cancel">关闭</a-button>
        </template>
    </a-modal>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { qualityList, costList } from "@/utils/fuc"
import Detail from "../model/detail.vue";
import cardData from "../card/lianyushenyuan";
import router from "@/router";

const formState = reactive({
    name: "",
    quality: undefined,
    cost: undefined
});
const detailData = reactive({
    zhongzu: "炼狱",
    name: '',
    quality: '',
    cost: null,
    type: null,
    img: '',
    data: []
})
const visible = ref(false);
const data = ref<any>([]);
const columns = ref<any>([
    {
        title: "头像",
        dataIndex: "headImg",
        key: "headImg",
        width: 50,
        scopedSlots: { customRender: "pic" }
    },
    {
        title: "名称",
        dataIndex: "name",
        key: "name",
        width: 160
    },
    {
        title: "操作",
        key: "action",
        width: 50
    },
]);

function getList() {
    let allData = cardData;
    if (formState.name) {
        allData = allData.filter((item: any) => item.name.includes(formState.name));
    }
    if (formState.quality) {
        allData = allData.filter((item: any) => item.quality == formState.quality);
    }
    if (formState.cost != undefined && formState.cost != "") {
        allData = allData.filter((item: any) => item.cost == formState.cost);
    }
    data.value = allData;
}

function search() {
    getList();
}

function reset() {
    formState.name = "";
    formState.quality = formState.cost = undefined;
    getList();
}

function goBack() {
    router.go(-1)
}

function showDetail(record: any) {
    visible.value = true;
    detailData.name = record.name;
    detailData.cost = record.cost;
    detailData.img = record.img;
    detailData.type = record.type;
    detailData.quality = record.quality;
    detailData.data = record.data;
}

function cancel() {
    visible.value = false;
}

onMounted(() => {
    getList();
})

</script>
<style lang="less" scoped>
.search {
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    padding: 5px 10px;
    margin-bottom: 5px;

    .search_input {
        width: 40%;
        margin-right: 10px;
    }

    .search_select {
        width: 40%;
        margin-right: 10px;
    }

    .search_btn {
        display: flex;
        justify-content: flex-start;
        width: 40%;
    }
}
</style>