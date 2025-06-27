<template>
 <div class="main">
    <div class="header">
        <div></div>
        <div class="menu">
            <h5>my skills</h5>
            <h5>my experience</h5>
            <h5>my goals</h5>
        </div>
        <NuxtImg src="/icons/language.svg" width="24" class="filter-white"/>
    </div>
    <div class="greating">
        <div class="greating-name">
            <h1 class="text-italic">hi, i'm</h1>
            <span class="text-alternates text-name">aknur</span>
        </div>
        <div class="bg-text">speed, clean code and great UX – I balance all three
            <h6 class="text-encode">FRONTEND DEVELOPER</h6>
        </div>
    </div>
    <div class="footer filter-grey">
        <div class="footer-items">
            <NuxtImg v-for="item in contacts" :src="`/icons/${item.id}.svg`" class="filter-grey" height="24" width="24"/>
        </div>
        <div class="footer-items">
            Scroll to explore
            <NuxtImg src="/icons/arrow-down.svg" width="24" class="filter-white"/>
        </div>
    </div>
</div>
<slot></slot>
</template>

<script setup>
const contacts = [
    {id: 'instagram', link: ''},
    {id: 'telegram', link: ''},
    {id: 'linkedin', link: ''},
    {id: 'github', link: ''},
    {id: 'mail', link: ''},
]
</script>

<style lang="scss" scoped>
.main{
    background: linear-gradient(180deg, #171E21 5.02%, #253538 43.58%, #1F2B2F 58.55%, #171E21 85%);
    height: 100%;
    min-height: calc(100vh - 6rem);
    width: calc(100vw - 8rem);
    overflow-x: hidden;
    background-image: url('/public/images/texture.svg');
    background-size: contain;
    background-repeat: repeat-y;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 4rem;
    box-sizing: unset;
}
.header{
    display: flex;
    align-items: center;
    min-height: 24px;
    justify-content: space-between;
}
.menu{
    display: flex;
    gap: 8rem;
}
.text-name{
    font-size: 6rem;
    line-height: 3rem;
    font-weight: 800;
}
.greating{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
    &-name{
        display: flex;
        flex-direction: column;
        position: relative;
        bottom: -1rem;
        h1{
            font-size: 4rem;
            line-height: 3rem;
            font-weight: 800;
            position: relative;
            left: -4rem;
            bottom: 0.8rem;
        }
    }
}
.bg-text{
    display: flex;
    flex-direction: column;
    color: rgba(40, 54, 58, 1);
    text-shadow: rgba(0, 0, 0, 0.25) 0px 0px 40px;
    font-weight: 800;
    font-size: 5rem;
    width: 85%;
    line-height: 4rem;
    letter-spacing: -10%;
    text-align: center;
    h6{
        color: #e4e4e482;
        line-height: normals;
        font-weight: 400;
        position: relative;
        bottom: -5rem;
    }
}
.footer{
    display: flex;
    justify-content: space-between;
    &-items{
        display: flex;
        align-items: center;
        gap: 0.4rem;
        height: 100%;
    }
}
</style>