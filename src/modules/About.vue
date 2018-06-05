<template>
    <div>
        <div class="banner">
            <img :src="img.banner_icon" alt=""/>
        </div>
        <div class="profile">
            <header class="title">
                <h1>公司简介</h1>
                <h2>Company&nbsp;Profile</h2>
            </header>
            <section>
                <img :src="img.profile" alt=""/>
                <p>迅鳐成都科技有限公司（简称‘迅鳐科技’）成立于2015年，由国内首位网络安全长江学者领头创办，是国内第一批大数据安全基础设施制造商与服务商，直接服务于国家信息中心重点筹建的政务数据支撑平台，具有国家级数据资源安全视角。</p>
            </section>
        </div>
        <div class="events">
            <header class="title">
                <h1>企业大事记</h1>
                <h2>Company&nbsp;Events</h2>
            </header>
            <section>
                <ul>
                    <li>
                        <div class="year">
                            <span></span>
                            <img :src="img.yearPoint" alt=""/>
                            <p>2015</p>
                        </div>
                        <div>
                            <span>10月09日</span>
                            <img :src="img.dayPoint" alt=""/>
                            <p>迅鳐成都科技有限公司成立</p>
                        </div>
                        <div>
                            <span>12月</span>
                            <img :src="img.dayPoint" alt=""/>
                            <p>与电子科大、成都优易数据有限公司联合申报《大数据安全与共享四川省实验室》</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
        <div class="partner">
            <header class="title">
                <h1>合作伙伴</h1>
                <h2>Company&nbsp;Partner</h2>
            </header>
            <section>
                <ul>
                    <li><img :src="img.partner1" alt=""/></li>
                    <li><img :src="img.partner2" alt=""/></li>
                    <li><img :src="img.partner3" alt=""/></li>
                    <li><img :src="img.partner4" alt=""/></li>
                    <li><img :src="img.partner5" alt=""/></li>
                    <li><img :src="img.partner6" alt=""/></li>
                    <li><img :src="img.partner7" alt=""/></li>
                    <li><img :src="img.partner8" alt=""/></li>
                    <li><img :src="img.partner9" alt=""/></li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
    // 图片
    import banner_icon from '../assets/img/about/banner_icon.png'
    import profile from '../assets/img/about/profile.png'
    import yearPoint from '../assets/img/about/yearPoint.png'
    import dayPoint from '../assets/img/about/dayPoint.png'
    import partner1 from '../assets/img/about/partner1.png'
    import partner2 from '../assets/img/about/partner2.png'
    import partner3 from '../assets/img/about/partner3.png'
    import partner4 from '../assets/img/about/partner4.png'
    import partner5 from '../assets/img/about/partner5.png'
    import partner6 from '../assets/img/about/partner6.png'
    import partner7 from '../assets/img/about/partner7.png'
    import partner8 from '../assets/img/about/partner8.png'
    import partner9 from '../assets/img/about/partner9.png'

    export default {
        name: "About",
        data() {
            return{
                img: {
                    banner_icon: banner_icon,
                    profile: profile,
                    yearPoint: yearPoint,
                    dayPoint: dayPoint,
                    partner1: partner1,
                    partner2: partner2,
                    partner3: partner3,
                    partner4: partner4,
                    partner5: partner5,
                    partner6: partner6,
                    partner7: partner7,
                    partner8: partner8,
                    partner9: partner9,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/compatibility";
    @function imgUrl($name){
        @return '../assets/img/about/'+$name
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
    .profile{
        section{
            @include flex;
            @include justify-content(space-between);
            @include align-items(center);
            padding: 40px;
            img{
                width: 350px;
            }
            p{
                text-indent: 2em;
                text-align: justify;
                font-size: 24px;
                width: 300px;
                line-height: 36px;
            }
        }
    }
    .events{
        section{
            padding: 20px 40px;
            background: url(imgUrl('timeline.png')) no-repeat 192px center;
            background-size: 2px;
            ul{
                li{
                    div{
                        @include flex;
                        @include align-items(center);
                        @include justify-content(space-between);
                        padding: 20px 0;
                        span{
                            font-size: 24px;
                            width: 110px;
                            line-height: 36px;
                            padding-right: 16px;
                            text-align: right;
                        }
                        img{
                            width: 16px;
                        }
                        p{
                            font-size: 24px;
                            line-height: 36px;
                            width: 474px;
                            padding-left: 16px;
                        }
                        &.year{
                            p{
                                font-size: 36px;
                            }
                            img{
                                width: 40px;
                            }
                        }
                    }
                }
            }
        }
    }
    .partner{
        section{
            padding: 20px 40px;
            ul{
                @include flex;
                @include justify-content(space-between);
                @include flex-wrap(wrap);
                padding: 20px 0;
                li{
                    @include flex;
                    @include justify-content(center);
                    @include align-items(flex-end);
                    height: 134px;
                    &:nth-child(1){
                        width: 134px;
                        img{width: 80px;}
                    }
                    &:nth-child(2){
                        width: 134px;
                        img{width: 89px;}
                    }
                    &:nth-child(3){
                        width: 134px;
                        img{width: 114px;}
                    }
                    &:nth-child(4){
                        width: 134px;
                        img{width: 91px;}
                    }
                    &:nth-child(5){
                        width: 134px;
                        img{width: 101px;}
                    }
                    &:nth-child(6) img{width: 102px;}
                    &:nth-child(7) img{width: 104px;}
                    &:nth-child(8) img{width: 124px;}
                    &:nth-child(9) img{width: 239px;}
                }
            }
        }
    }
</style>
