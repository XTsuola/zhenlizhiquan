<template>
    <div class="home">
        <div class="zhongzu simangdiguo" @click="goCard(1)">
            四芒帝国
        </div>
        <div class="zhongzu yinmizhe" @click="goCard(2)">
            隐秘者
        </div>
        <div class="zhongzu chanyigu" @click="goCard(3)">
            禅意谷
        </div>
        <div class="zhongzu tiantanggang" @click="goCard(4)">
            天堂港
        </div>
        <div class="zhongzu lianyushenyuan" @click="goCard(5)">
            炼狱深渊
        </div>
        <div class="zhongzu manshikuangye" @click="goCard(6)">
            蛮石旷野
        </div>
        <div class="zhongzu dongshenshitu" @click="goCard(7)">
            冬神使徒
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';


const cardList = [{
    id: 1,
    name: "帝国",
    url: "/simangdiguo"
}, {
    id: 2,
    name: "隐秘",
    url: "/yinmizhe"
}, {
    id: 3,
    name: "禅意",
    url: "/chanyigu"
}, {
    id: 4,
    name: "港口",
    url: "/tiantanggang"
}, {
    id: 5,
    name: "炼狱",
    url: "/lianyushenyuan"
}, {
    id: 6,
    name: "蛮石",
    url: "/manshikuangye"
}, {
    id: 7,
    name: "冬神",
    url: "/dongshenshitu"
}]

function goCard(id: number) {
    const index = cardList.findIndex((e: any) => e.id == id)
    const url = cardList[index].url
    router.push(url)
}

</script>

<style lang="less" scoped>
.home {
    .zhongzu {
        width: 50%;
        height: 5em;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
}

.simangdiguo {
    background-color: orange;
}

.chanyigu {
    background-color: green;
}

.yinmizhe {
    background-color: purple;
}

.manshikuangye {
    background-color: rgb(128, 68, 0);
}

.dongshenshitu {
    background-color: rgb(3, 161, 201);
}

.tiantanggang {
    background-color: rgb(14, 93, 146);
}

.lianyushenyuan {
    background-color: rgb(192, 27, 16);
}

</style>