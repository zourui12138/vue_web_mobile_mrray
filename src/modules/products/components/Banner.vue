<template>
    <div class="productBanner" :style="background">
        <img :src="bannerLogo" alt=""/>
        <h1>{{bannerTitle}}</h1>
        <button type="button">申请试用</button>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        props: ['banner','bannerLogo','bannerTitle'],
        computed: {
            background() {
                return{
                    background: 'url('+ this.banner +') no-repeat center',
                    backgroundSize: '100%'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/css/compatibility";
    .productBanner{
        @include flex;
        @include flex-direction;
        @include justify-content(center);
        @include align-items(center);
        height: 298px;
        img{
            width: 72px;
        }
        h1{
            font-size: 30px;
            height: 80px;
            line-height: 80px;
            color: #fff;
        }
        button{
            background-color: #2388d8;
            color: #fff;
            height: 60px;
            line-height: 60px;
            width: 207px;
            border-radius: 12px;
            font-size: 24px;
        }
    }
</style>
