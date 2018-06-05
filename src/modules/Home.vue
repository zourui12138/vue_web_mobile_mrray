<template>
    <div>
        <div class="banner">
            <p>用安全和区块链</p>
            <p>构建可信体系的领军企业</p>
            <button type="button">联系我们</button>
        </div>
        <div class="emphasis">
            <header>两个重点发展方向</header>
            <section>
                <div>
                    <h1>区块链</h1>
                    <p>助力各企事业等行业用户的区块链布局，为企业定制区块链技术，建立应用场景，提升行业服务效能，致力成为行业应用解决方案提供服务商。</p>
                </div>
                <img :src="img.emphasis_blockChain" alt=""/>
            </section>
            <section>
                <img :src="img.emphasis_dataSecurity" alt=""/>
                <div>
                    <h1>区块链</h1>
                    <p>助力各企事业等行业用户的区块链布局，为企业定制区块链技术，建立应用场景，提升行业服务效能，致力成为行业应用解决方案提供服务商。</p>
                </div>
            </section>
        </div>
        <div class="core_product">
            <header>一个核心平台级产品</header>
            <section>
                <p>迅鳐区块链即服务(RayBlockchain as a Service)是拥有自主知识产权的分布式账本系统，其功能和性能均优于其他同类平台。客户可以通过灵活、可扩展的API接口，简便、快捷、高效、低成本的构建基于区块链的服务和应用，推动企业实现业务运行和商业模式创新。</p>
                <img :src="img.core_product_icon" alt=""/>
            </section>
        </div>
        <div class="field">
            <header>五个扩展领域</header>
            <section>
                <ul>
                    <li><span>大数据</span><strong>区块链</strong></li>
                    <li><strong>区块链</strong><span>人工智能</span></li>
                    <li><span>芯片</span><strong>区块链</strong></li>
                    <li><strong>区块链</strong><span>与计算</span></li>
                    <li><span>数据安全</span><strong>区块链</strong></li>
                </ul>
            </section>
        </div>
        <div class="solution">
            <header>十二大行业解决方案</header>
            <h1>针对各行业的特点，RBaaS提供定制化的应用，比如：物流也可以通过区块链实现快速、可信的的车货匹配，做到零成本运维；政务方面可以通过区块链实现不同部门间数据的打通，且可控的流通。</h1>
            <ul>
                <li>
                    <img :src="img.solution_icon_1" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_2" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_3" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_4" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_5" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_6" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_7" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_8" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_9" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_10" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_11" alt=""/>
                    <p>电子证照</p>
                </li>
                <li>
                    <img :src="img.solution_icon_12" alt=""/>
                    <p>电子证照</p>
                </li>
            </ul>
        </div>
        <div class="partner">
            <header>三个联合发起单位</header>
            <h1>迅鳐科技凝结电子科技大学大数据研究中心、网络空间安全研究中心等重磅级机构1０余载技术积淀。努力成为最先“将安全基因注入信息社会”的行业领导企业。</h1>
            <ul>
                <li><img :src="img.partner1" alt=""/></li>
                <li><img :src="img.partner2" alt=""/></li>
                <li><img :src="img.partner3" alt=""/></li>
            </ul>
        </div>
    </div>
</template>

<script>
    // 图片
    import emphasis_blockChain from '../assets/img/home/emphasis_blockChain.png'
    import emphasis_dataSecurity from '../assets/img/home/emphasis_dataSecurity.png'
    import core_product_icon from '../assets/img/home/core_product_icon.png'
    import solution_icon_1 from '../assets/img/home/solution_icon_1.png'
    import solution_icon_2 from '../assets/img/home/solution_icon_2.png'
    import solution_icon_3 from '../assets/img/home/solution_icon_3.png'
    import solution_icon_4 from '../assets/img/home/solution_icon_4.png'
    import solution_icon_5 from '../assets/img/home/solution_icon_5.png'
    import solution_icon_6 from '../assets/img/home/solution_icon_6.png'
    import solution_icon_7 from '../assets/img/home/solution_icon_7.png'
    import solution_icon_8 from '../assets/img/home/solution_icon_8.png'
    import solution_icon_9 from '../assets/img/home/solution_icon_9.png'
    import solution_icon_10 from '../assets/img/home/solution_icon_10.png'
    import solution_icon_11 from '../assets/img/home/solution_icon_11.png'
    import solution_icon_12 from '../assets/img/home/solution_icon_12.png'
    import partner1 from '../assets/img/home/partner1.png'
    import partner2 from '../assets/img/home/partner2.png'
    import partner3 from '../assets/img/home/partner3.png'

    export default {
        name: "Home",
        data() {
            return{
                img: {
                    emphasis_blockChain: emphasis_blockChain,
                    emphasis_dataSecurity: emphasis_dataSecurity,
                    core_product_icon: core_product_icon,
                    solution_icon_1: solution_icon_1,
                    solution_icon_2: solution_icon_2,
                    solution_icon_3: solution_icon_3,
                    solution_icon_4: solution_icon_4,
                    solution_icon_5: solution_icon_5,
                    solution_icon_6: solution_icon_6,
                    solution_icon_7: solution_icon_7,
                    solution_icon_8: solution_icon_8,
                    solution_icon_9: solution_icon_9,
                    solution_icon_10: solution_icon_10,
                    solution_icon_11: solution_icon_11,
                    solution_icon_12: solution_icon_12,
                    partner1: partner1,
                    partner2: partner2,
                    partner3: partner3,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/compatibility";
    @function imgUrl($name){
        @return '../assets/img/home/'+$name
    }
    @mixin title{
        text-align: center;
        font-size: 30px;
        height: 100px;
        line-height: 100px;
    }
    @mixin subTitle{
        text-align: justify;
        line-height: 36px;
        height: 144px;
        font-size: 24px;
        padding-bottom: 30px;
    }
    .banner{
        height: 381px;
        background: url(imgUrl('banner.png')) no-repeat center;
        background-size: 100%;
        color: #fff;
        @include flex;
        @include flex-direction;
        @include justify-content(center);
        @include align-items(center);
        p{
            height: 60px;
            line-height: 60px;
            font-size: 30px;
        }
        button{
            height: 60px;
            line-height: 60px;
            width: 207px;
            border-radius: 12px;
            font-size: 24px;
            margin-top: 24px;
            background-color: #2388d8;
            color: #fff;
        }
    }
    .emphasis{
        padding-bottom: 84px;
        header{
            @include title;
            background-color: #fcfcfc;
        }
        section{
            @include flex;
            @include justify-content(space-around);
            @include align-items(center);
            padding: 0 40px;
            height: 264px;
            margin-top: 30px;
            div{
                width: 290px;
                text-align: center;
                h1{
                    font-size: 24px;
                    height: 60px;
                    line-height: 60px;
                }
                p{
                    text-align: justify;
                    line-height: 36px;
                    font-size: 20px;
                }
            }
            img{
                width: 290px;
            }
        }
    }
    .core_product{
        height: 385px;
        background: url(imgUrl('core_product.png')) no-repeat center;
        background-size: 100%;
        color: #fff;
        header{
            font-size: 30px;
            height: 100px;
            line-height: 100px;
            text-align: center;
        }
        section{
            @include flex;
            @include justify-content(space-between);
            @include align-items(center);
            padding: 0 40px;
            p{
                font-size: 20px;
                line-height: 36px;
                width: 400px;
                text-align: justify;
            }
            img{
                width: 253px;
            }
        }
    }
    .field{
        header{
            @include title;
        }
        section{
            padding: 20px 69px 90px;
            background: url(imgUrl('field_bg.png')) no-repeat top center;
            background-size: 100%;
            ul{
                li{
                    font-size: 20px;
                    height: 34px;
                    line-height: 34px;
                    margin-bottom: 10px;
                    color: #fff;
                    text-align: center;
                    @include flex;
                    &:nth-child(odd){
                        background: url(imgUrl('field_left_box.png')) no-repeat center left;
                        background-size: auto 100%;
                    }
                    &:nth-child(even){
                        background: url(imgUrl('field_right_box.png')) no-repeat center right;
                        background-size: auto 100%;
                        @include justify-content(flex-end);
                    }
                    span{
                        width: 160px;
                    }
                    strong{
                        width: 74px;
                    }
                }
            }
        }
    }
    .solution{
        background-color: #fcfcfc;
        padding: 0 40px 40px;
        header{
            @include title;
        }
        h1{
            @include subTitle;
        }
        ul{
            @include flex;
            @include justify-content(space-between);
            @include flex-wrap(wrap);
            padding-top: 30px;
            li{
                width: 167px;
                text-align: center;
                margin-bottom: 20px;
                img{
                    width: 97px;
                }
                p{
                    height: 50px;
                    line-height: 50px;
                    font-size: 20px;
                    text-align: center;
                }
            }
        }
    }
    .partner{
        padding: 40px;
        header{
            @include title;
        }
        h1{
            @include subTitle;
        }
        ul{
            @include flex;
            @include justify-content(space-between);
            li{
                img{
                    width: 200px;
                }
            }
        }
    }
</style>
