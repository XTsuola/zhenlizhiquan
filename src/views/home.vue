<template>
    <div class="home">
        <div class="zhongzu simangdiguo">
            <div>四芒帝国</div>
            <div class="center" @click="goCard(1)">部下</div>
            <div class="center" @click="goShenqi(1)">神器</div>
        </div>
        <div class="zhongzu yinmizhe">
            <div>隐秘者</div>
            <div class="center" @click="goCard(2)">部下</div>
            <div class="center" @click="goShenqi(2)">神器</div>
        </div>
        <div class="zhongzu chanyigu">
            <div>禅意谷</div>
            <div class="center" @click="goCard(3)">部下</div>
            <div class="center" @click="goShenqi(3)">神器</div>
        </div>
        <div class="zhongzu tiantanggang">
            <div>天堂港</div>
            <div class="center" @click="goCard(4)">部下</div>
            <div class="center" @click="goShenqi(4)">神器</div>
        </div>
        <div class="zhongzu lianyushenyuan">
            <div>炼狱深渊</div>
            <div class="center" @click="goCard(5)">部下</div>
            <div class="center" @click="goShenqi(5)">神器</div>
        </div>
        <div class="zhongzu manshikuangye">
            <div>蛮石旷野</div>
            <div class="center" @click="goCard(6)">部下</div>
            <div class="center" @click="goShenqi(6)">神器</div>
        </div>
        <div class="zhongzu dongshenshitu">
            <div>冬神使徒</div>
            <div class="center" @click="goCard(7)">部下</div>
            <div class="center" @click="goShenqi(7)">神器</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';


const cardList = [{
    id: 1,
    name: "帝国",
    url: "/simangdiguo",
    url2: "/sqsimangdiguo"
}, {
    id: 2,
    name: "隐秘",
    url: "/yinmizhe",
    url2: "/sqyinmizhe"
}, {
    id: 3,
    name: "禅意",
    url: "/chanyigu",
    url2: "/sqchanyigu"
}, {
    id: 4,
    name: "港口",
    url: "/tiantanggang",
    url2: "/sqtiantanggang"
}, {
    id: 5,
    name: "炼狱",
    url: "/lianyushenyuan",
    url2: "/sqlianyushenyuan"
}, {
    id: 6,
    name: "蛮石",
    url: "/manshikuangye",
    url2: "/sqmanshikuangye"
}, {
    id: 7,
    name: "冬神",
    url: "/dongshenshitu",
    url2: "/sqdongshenshitu"
}]

function goCard(id: number) {
    const index = cardList.findIndex((e: any) => e.id == id)
    const url = cardList[index].url
    router.push(url)
}

function goShenqi(id: number) {
    const index = cardList.findIndex((e: any) => e.id == id)
    const url = cardList[index].url2
    router.push(url)
}

</script>

<style lang="less" scoped>
.home {
    .zhongzu {
        width: 100%;
        height: 5em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin-bottom: 10px;
    }
}

.center {
    height: 100%;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
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