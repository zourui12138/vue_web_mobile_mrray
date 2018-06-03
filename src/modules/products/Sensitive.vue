<template>
    <div>
        <Banner
            :banner="img.banner"
            :banner-logo="img.product_logo"
            banner-title='迅鳐Baas平台-敏感数据与免泄露系统'/>
        <div class="overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section>
                <p>迅鳐敏感信息与免泄露系统是面向企业、政府等机构推出的一款敏感数据去隐私化产品。系统内置敏感信息搜索引擎，自动检索敏感信息，基础算法+可扩充模式、自定义脱敏策略，满足不同业务场景。支持数据类型多样：PostgreSQL、MySQL、Oracle、Greenplumn、Hive、SQL SERVER、DB2等数据库，Excel、csv等结构化数据，智能、灵活、高效工作，满足企业、政府敏感信息管理与保护需求。</p>
                <div><img :src="img.overview_icon" alt=""/></div>
            </section>
        </div>
        <div class="function">
            <header class="title">
                <h1>产品功能</h1>
                <h2>Product&nbsp;Function</h2>
            </header>
            <section>
                <ul>
                    <li>
                        <h1>脱敏方式可选择</h1>
                        <p>可根据客户业务的需要，同一敏感数据能进行不同方式脱敏。</p>
                    </li>
                    <li>
                        <h1>整库脱敏</h1>
                        <p>支持整库脱敏，并能保证脱敏的关联性，使其保留数据的分析价值。</p>
                    </li>
                    <li>
                        <h1>任务一对多</h1>
                        <p>可根据用户需要选择相同源后，配置不同的规则，不同的装载目标，同时新建多条任务。</p>
                    </li>
                    <li>
                        <h1>多种类型算法</h1>
                        <p>支持可逆算法和不可逆算法，用户能根据业务要求选择使用可逆算法或不可逆算法。</p>
                    </li>
                    <li>
                        <h1>脱敏效果对比</h1>
                        <p>支持展示脱敏前后实际效果对比。</p>
                    </li>
                    <li>
                        <h1>任务管理</h1>
                        <p>能对各种任务进行管理，包括启停任务、任务重做等。</p>
                    </li>
                    <li>
                        <h1>算法拓展</h1>
                        <p>能根据用户需要提供算法包，用户只需要按几个键傻瓜式操作就能拓展新算法。</p>
                    </li>
                    <li>
                        <h1>操作/访问监控</h1>
                        <p>对系统内各用户访问/操作记录进行监控并整理反映出来。</p>
                    </li>
                    <li style="width: 100%;">
                        <h1>数据装载</h1>
                        <p>可将脱敏后数据根据客户需求装载到不同环境中，包括文件到文件（同格式/不同格式），数据库到数据库（同数据库/不同数据库），文件到数据库，反之相同。</p>
                    </li>
                </ul>
                <footer><img :src="img.function_icon" alt=""/></footer>
            </section>
        </div>
    </div>
</template>

<script>
    import Banner from './components/Banner'
    // 图片
    import banner from '../../assets/img/products/sensitive/banner.png'
    import product_logo from '../../assets/img/products/sensitive/product_logo.png'
    import overview_icon from '../../assets/img/products/sensitive/overview.png'
    import function_icon from '../../assets/img/products/sensitive/function.png'

    export default {
        name: "Sensitive",
        components:{Banner},
        data() {
            return{
                img: {
                    banner: banner,
                    product_logo: product_logo,
                    overview_icon: overview_icon,
                    function_icon: function_icon
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/compatibility";
    .overview{
        section{
            padding: 40px;
            p{
                font-size: 24px;
                margin-bottom: 40px;
                text-align: justify;
                text-indent: 2em;
                line-height: 36px;
                height: 252px;
            }
            div{
                @include flex;
                @include flex-direction;
                @include align-items(center);
                img{
                    width: 554px;
                }
            }
        }
    }
    .function{
        section{
            padding: 40px;
            ul{
                @include flex;
                @include justify-content(space-between);
                @include flex-wrap(wrap);
                li{
                    width: 320px;
                    margin-bottom: 40px;
                    h1{
                        width: 200px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        background-color: #2e95ee;
                        color: #fff;
                        border-radius: 5px;
                        font-size: 24px;
                        margin-bottom:16px;
                    }
                    p{
                        text-indent: 2em;
                        font-size: 24px;
                        line-height: 30px;
                        height: 120px;
                    }
                }
            }
            footer{
                @include flex;
                @include justify-content(center);
                img{
                    width: 426px;
                }
            }
        }
    }
</style>
