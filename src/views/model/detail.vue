<template>
    <div style="border: 1px solid #ccc;">
        <div>
            <div
                style="background: #efefef;padding: 10px 0 10px 15px;border-bottom: 1px solid #ccc;display: flex;justify-content: space-between;">
                <div style="font-weight: bold">{{ prop.detailData.name }}</div>
                <div style="margin-right: 10px;">
                    <a-button size="small" style="margin-right: 8px;" :disabled="nowlevel == 0"
                        @click="nowlevel--">上一级</a-button>
                    <a-button size="small" :disabled="nowlevel == 8" @click="nowlevel++">下一级</a-button>
                </div>
            </div>
            <a-row type="flex" style="border-bottom: 1px solid #ccc;">
                <a-col class="aCol" :span="6" style="border-right: 1px solid #ccc;">
                    种族
                </a-col>
                <a-col class="aCol" :span="18">
                    {{ prop.detailData.zhongzu }}
                </a-col>
            </a-row>
            <a-row type="flex" style="border-bottom: 1px solid #ccc;">
                <a-col class="aCol" :span="6" style="border-right: 1px solid #ccc;">
                    等级
                </a-col>
                <a-col class="aCol" :span="18">
                    {{ nowlevel + 12 }}
                </a-col>
            </a-row>
            <a-row type="flex" style="border-bottom: 1px solid #ccc;">
                <a-col class="aCol" :span="6" style="border-right: 1px solid #ccc;">
                    消耗
                </a-col>
                <a-col class="aCol" :span="18">
                    {{ prop.detailData.cost }}
                </a-col>
            </a-row>
            <a-row type="flex" style="border-bottom: 1px solid #ccc;">
                <a-col class="aCol" :span="6" style="border-right: 1px solid #ccc;">
                    图片
                </a-col>
                <a-col class="aCol" :span="18">
                    <img :src="prop.detailData.img" />
                </a-col>
            </a-row>
            <a-row type="flex" style="border-bottom: 1px solid #ccc;">
                <a-col class="aCol" :span="6" style="border-right: 1px solid #ccc;">
                    攻击
                </a-col>
                <a-col class="aCol" :span="18">
                    <span v-if="prop.detailData.type == 2 || prop.detailData.type == 3">/</span>
                    <span v-else>{{ prop.detailData.data[nowlevel][0] }}</span>
                </a-col>
            </a-row>
            <a-row type="flex" style="border-bottom: 1px solid #ccc;">
                <a-col class="aCol" :span="6" style="border-right: 1px solid #ccc;">
                    生命
                </a-col>
                <a-col class="aCol" :span="18">
                    <span v-if="prop.detailData.type == 2 || prop.detailData.type == 3">/</span>
                    <span v-else>{{ prop.detailData.data[nowlevel][1] }}</span>
                </a-col>
            </a-row>
            <a-row type="flex" style="border-bottom: 1px solid #ccc;">
                <a-col class="aCol" :span="6" style="border-right: 1px solid #ccc;">
                    效果描述
                </a-col>
                <a-col class="aCol" :span="18">
                    {{ prop.detailData.data[nowlevel][2] }}
                </a-col>
            </a-row>
            <a-row type="flex">
                <a-col class="aCol" :span="6" style="border-right: 1px solid #ccc;">
                    卡牌品质
                </a-col>
                <a-col class="aCol" :span="18">
                    {{ prop.detailData.quality }}
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue"

const prop = defineProps<{
    detailData: any
}>();

const nowlevel = ref(8)

</script>
<style lang="less" scoped>
.aCol {
    padding: 5px;
    display: flex;
    align-items: center;
}

.blank {
    width: 30px;
    height: 100%;
}
</style>