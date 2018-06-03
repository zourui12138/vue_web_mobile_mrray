<template>
    <div>
        <div class="banner">
            <img :src="img.banner_icon" alt=""/>
        </div>
        <div class="newsList">
            <ul>
                <li>
                    <img :src="img.newsImg" alt=""/>
                    <div>
                        <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流通助力</span><strong></strong></h1>
                        <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                    </div>
                </li>
                <li>
                    <img :src="img.newsImg" alt=""/>
                    <div>
                        <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流通助力</span><strong></strong></h1>
                        <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                    </div>
                </li>
                <li>
                    <img :src="img.newsImg" alt=""/>
                    <div>
                        <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流通助力</span><strong></strong></h1>
                        <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                    </div>
                </li>
                <li>
                    <img :src="img.newsImg" alt=""/>
                    <div>
                        <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流通助力</span><strong></strong></h1>
                        <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                    </div>
                </li>
                <li>
                    <img :src="img.newsImg" alt=""/>
                    <div>
                        <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流通助力</span><strong></strong></h1>
                        <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    // 图片
    import banner_icon from '../assets/img/news/banner_icon.png'
    import newsImg from '../assets/img/news/newsImg.png'

    export default {
        name: "News",
        data() {
            return{
                img: {
                    banner_icon: banner_icon,
                    newsImg: newsImg
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/compatibility";
    @function imgUrl($name){
        @return '../assets/img/news/'+$name
    }
    .banner{
        height: 298px;
        background: url(imgUrl('banner.png')) no-repeat center;
        background-size: 100%;
        color: #fff;
        @include flex;
        @include align-items(center);
        @include justify-content(center);
        img{
            width: 300px;
        }
    }
    .newsList{
        ul{
            padding: 0 40px;
            li{
                @include flex;
                @include align-items(center);
                @include justify-content(space-between);
                padding: 30px 0;
                border-bottom:1px solid #e5e5e5;
                img{
                    width: 210px;
                    height: 140px;
                }
                div{
                    @include flex;
                    @include flex-direction;
                    @include justify-content(space-between);
                    width: 400px;
                    height: 140px;
                    h1{
                        font-size: 24px;
                        line-height: 30px;
                        text-align: justify;
                        color: #2e95ee;
                        strong{
                            display: inline-block;
                            width: 22px;
                            height: 30px;
                            margin-left: 20px;
                            vertical-align: top;
                            background: url(imgUrl('hot.png')) no-repeat center;
                        }
                    }
                    h2{
                        @include flex;
                        @include align-items(center);
                        @include justify-content(space-between);
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>
