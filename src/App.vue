<template>
    <div id="app">
        <header class="header">
            <img class="logo" :src="img.Logo" alt=""/>
            <img class="breadCrumbs" :src="img.BreadCrumbs" alt=""/>
        </header>
        <section class="section">
            <router-view/>
            <footer class="footer">
                <div>
                    <img :src="img.QrCode" alt=""/>
                    <ul>
                        <li>公司网址：www.mrray.cn</li>
                        <li>公司电话：028—87827621</li>
                        <li>西区地址：成都市郫都区菁蓉镇静园东路28号优易数据大厦5F</li>
                        <li>南区地址：成都市高新区菁蓉国际广场1栋A区3楼</li>
                    </ul>
                </div>
                <h1>Copyright © 2015-2035 迅鳐成都科技有限公司 版权所有 蜀ICP备16007868号</h1>
            </footer>
        </section>
    </div>
</template>

<script>
    // 图片
    import Logo from './assets/img/logo.png'
    import BreadCrumbs from './assets/img/breadCrumbs.png'
    import QrCode from './assets/img/QrCode.png'

    export default {
        name: 'App',
        data() {
            return{
                img: {
                    Logo: Logo,
                    BreadCrumbs: BreadCrumbs,
                    QrCode: QrCode
                }
            }
        },
        mounted() {
            // Navigator对象包含了有关浏览器的信息
            // 下面的userAgent属性是一个只读的字符串，声明了浏览器用于HTTP请求的用户代理头的值
            console.log(navigator.userAgent);
        }
    }
</script>

<style lang="scss">@import "./assets/css/base";</style>
<style lang="scss" scoped>
    @import "./assets/css/compatibility";
    #app{
        padding-top: 100px;
        height: calc(100% - 100px);
        overflow: auto;
        .header{
            @include flex;
            @include justify-content(space-between);
            @include align-items(center);
            border-bottom:1px solid #d7d7d7;
            background-color: #fff;
            height: 99px;
            padding: 0 40px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            img.logo{
                width: 227px;
            }
            img.breadCrumbs{
                width: 30px;
            }
        }
        .section{
            height:100%;
            overflow: auto;
            .footer{
                background-color: #333;
                padding-top: 75px;
                color: #fff;
                div{
                    @include flex;
                    @include justify-content(space-between);
                    @include align-items(center);
                    padding: 0 40px;
                    img{
                        width: 156px;
                    }
                    ul{
                        width: 500px;
                        li{
                            font-size: 20px;
                            line-height: 36px;
                            text-align: justify;
                        }
                    }
                }
                h1{
                    text-align: center;
                    height: 90px;
                    line-height: 90px;
                    font-size: 20px;
                }
            }
        }
    }
</style>
