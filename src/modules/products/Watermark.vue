<template>
    <div>
        <Banner
            :banner="img.banner"
            :banner-logo="img.product_logo"
            banner-title='迅鳐Baas平台-数字水印系统'/>
        <div class="overview">
            <header class="title">
                <h1>产品概述</h1>
                <h2>Product&nbsp;Overview</h2>
            </header>
            <section>
                <p>迅鳐水印与追溯服务系统，采用基于人类视觉系统（HGWF）的数字水印框架，内置自主研制的FluxLabel海量数据高速标记引擎，解决了大数据环境下数据频繁使用所面临的版权问题、数据泄露后的追责问题、数据质量以及完整性等数据传播使用中的诸多问题。</p>
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
                        <h1>可视化界面</h1>
                        <p>经过大量用户调研，系统页面设计符合易用性、规范性、合理性、美观与协调性，大大方便用户快捷地使用系统。</p>
                    </li>
                    <li>
                        <h1>多类型水印共存</h1>
                        <p>同一文件可同时打上多种类型水印，如某一文件可同时携带普通文本信息亦可进行传播路径追踪。</p>
                    </li>
                    <li>
                        <h1>文件完整性水印</h1>
                        <p>能根据用户设置的完整性阈值判断该文件是否完整的无视觉感知水印。</p>
                    </li>
                    <li>
                        <h1>物理轨迹跟踪水印</h1>
                        <p>能识别文件传播路径，并绘制出传播路径图的无视觉感知水印。</p>
                    </li>
                    <li>
                        <h1>支持多种格式文件</h1>
                        <p>支持多种办公软件、视频、图片、音频格式文件。</p>
                    </li>
                    <li>
                        <h1>官方认证水印</h1>
                        <p>能携带官方唯一认证信息的无视觉感知水印。</p>
                    </li>
                    <li>
                        <h1>普通信息水印</h1>
                        <p>能携带普通文本信息的无视觉感知水印。</p>
                    </li>
                    <li>
                        <h1>水印溯源</h1>
                        <p>能对打上水印的文件进行溯源，展示其中包含的水印信息。</p>
                    </li>
                    <li style="width: 100%;">
                        <h1>云存储、云处理</h1>
                        <p>所有数据全部采用云存储，所有任务采用云处理，用户可根据企业自身使用情况，选择升级存储空间与处理主机性能，大大节省企业成本。</p>
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
    import banner from '../../assets/img/products/watermark/banner.png'
    import product_logo from '../../assets/img/products/watermark/product_logo.png'
    import overview_icon from '../../assets/img/products/watermark/overview.png'
    import function_icon from '../../assets/img/products/watermark/function.png'

    export default {
        name: "Watermark",
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
                height: 180px;
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
                        height: 150px;
                    }
                }
            }
            footer{
                @include flex;
                @include justify-content(center);
                img{
                    width: 424px;
                }
            }
        }
    }
</style>
