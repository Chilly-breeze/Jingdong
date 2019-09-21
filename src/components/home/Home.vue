<template>
  <div class="home1" ref="home">
    <!-- 首页搜索 -->
    <Navbar :isShowBack="false" :navStyle="navStyle" :isDefault="false">
      <template slot="left">
        <img :src="navIconStyle.leftIcon" alt />
      </template>
      <template slot="center">
        <Search
          :bgColor="navIconStyle.search.bgColor"
          :hintColor="navIconStyle.search.hintColor"
          :icon="navIconStyle.search.icon"
        ></Search>
      </template>
      <template slot="right">
        <img :src="navIconStyle.rightIcon" alt />
      </template>
    </Navbar>
    <div class="home-content">
      <!-- 轮播图 -->
      <Swiper :imgList="imgList" :height="height"></Swiper>
      <!-- 活动页 -->
      <Active>
        <div class="activity-520">
          <img :src="item.icon" alt v-for="(item,index) in activeList" :key="index" />
        </div>
      </Active>
      <!-- 九宫格 -->
      <ModelOptions @goback="goback"></ModelOptions>
      <!-- 秒杀 -->
      <Secondes :dataSource="dataSource"></Secondes>
      <!-- 广告 -->
      <Active>
        <div class="activity-ping-gou-jie">
          <img src="@img/haoHuoQiang.gif" alt @click.prevent />
        </div>
      </Active>
      <!-- 列表(瀑布流) -->
      <Pubu :sortGoodsData="goods" :layoutType="'3'"></Pubu>
    </div>
  </div>
</template>

<script type="text/javascript">
import Swiper from "@b/swiper/Swiper.vue";
import Active from "@b/active/active.vue";
import ModelOptions from "../modelOptions/ModelOptions.vue";
import Secondes from "../seconde/Seconde";
import Pubu from '@b/pubu/Pubu.vue';
import Navbar from '@b/navigation/Navigation.vue';
import Search from '@b/search/Search.vue';
import { getSwiper } from "@/api/swiper.js";
export default {
  name:'home',
  data() {
    return {
      ///swiper
      imgList: [
        require("@img/swiper-1.jpg"),
        require("@img/swiper-2.jpg"),
        require("@img/swiper-3.jpg"),
        require("@img/swiper-4.jpg"),
        require("@img/swiper-5.jpg"),
        require("@img/swiper-6.jpg"),
        require("@img/swiper-7.jpg"),
      ],
      height: "184px",
      activeList: [
        {
          id: "1",
          icon: "http://imooc.res.lgdsunday.club/520-1.gif"
        },
        {
          id: "2",
          icon: "http://imooc.res.lgdsunday.club/520-2.gif"
        },
        {
          id: "3",
          icon: "http://imooc.res.lgdsunday.club/520-3.gif"
        }
      ],
      dataSource: [
        {
          id: "1",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-1.jpg",
          price: "119",
          oldPrice: "169"
        },
        {
          id: "2",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-2.jpg",
          price: "1191",
          oldPrice: "1900"
        },
        {
          id: "3",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-3.jpg",
          price: "199",
          oldPrice: "289"
        },
        {
          id: "4",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-4.jpg",
          price: "79",
          oldPrice: "108"
        },
        {
          id: "5",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-5.jpg",
          price: "588",
          oldPrice: "1950"
        },
        {
          id: "6",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-6.jpg",
          price: "99.9",
          oldPrice: "316"
        },
        {
          id: "7",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-7.jpg",
          price: "239",
          oldPrice: "278"
        },
        {
          id: "8",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-8.jpg",
          price: "1499",
          oldPrice: "2199"
        },
        {
          id: "9",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-9.jpg",
          price: "2069",
          oldPrice: "4299"
        },
        {
          id: "10",
          icon: "http://imooc.res.lgdsunday.club/jingDongMiaoSha-10.jpg",
          price: "138.5",
          oldPrice: "245"
        }
      ],
      goods: [
        {
          "id": "0",
          "img": "http://imooc.res.lgdsunday.club/goods-1.jpg",
          "name": "【二手95新】劳力士 日志型系列 奢侈品18K白金男腕表 自动机械男士手表 116264 白色表盘",
          "price": "38000",
          "volume": "143",
          "isHave": true,
          "isDirect": false,
          "swiperImgs": [
            "http://imooc.res.lgdsunday.club/goods-swiper-1-1.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-1-2.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-1-3.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-1-4.webp.jpg"
          ],
          "detailImgs": [
            "http://imooc.res.lgdsunday.club/goods-detail-1-1.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-1-2.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-1-3.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-1-4.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-1-5.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-1-6.jpg"
          ]
        },
        {
          "id": "1",
          "img": "http://imooc.res.lgdsunday.club/goods-2.jpg",
          "name": "Apple iPhone X (A1865) 64GB 黑色 移动联通电信4G手机",
          "price": "5999",
          "volume": "7356",
          "isHave": true,
          "isDirect": true,
          "swiperImgs": [
            "http://imooc.res.lgdsunday.club/goods-swiper-2-1.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-2-2.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-2-3.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-2-4.webp.jpg"
          ],
          "detailImgs": [
            "http://imooc.res.lgdsunday.club/goods-detail-2-1.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-2-2.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-2-3.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-2-4.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-2-5.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-2-6.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-2-7.jpg"
          ]
        },
        {
          "id": "2",
          "img": "http://imooc.res.lgdsunday.club/goods-3.jpg",
          "name": "坚果（JmGO）G7 家庭投影仪 投影机家用（1080P全高清 四方梯形校正 16GB存储 全玻璃镜头）",
          "price": "2698",
          "volume": "4876",
          "isHave": true,
          "isDirect": false,
          "swiperImgs": [
            "http://imooc.res.lgdsunday.club/goods-swiper-3-1.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-3-2.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-3-3.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-3-4.webp.jpg"
          ],
          "detailImgs": [
            "http://imooc.res.lgdsunday.club/goods-detail-3-1.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-3-2.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-3-3.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-3-4.gif",
            "http://imooc.res.lgdsunday.club/goods-detail-3-5.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-3-6.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-3-7.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-3-8.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-3-9.jpg"
          ]
        },
        {
          "id": "3",
          "img": "http://imooc.res.lgdsunday.club/goods-4.jpg",
          "name": "三只松鼠 坚果炒货 孕妇坚果每日坚果干果零食奶油味夏威夷果160g/袋",
          "price": "29.8",
          "volume": "734",
          "isHave": true,
          "isDirect": false,
          "swiperImgs": [
            "http://imooc.res.lgdsunday.club/goods-swiper-4-1.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-4-2.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-4-3.webp.jpg"
          ],
          "detailImgs": [
            "http://imooc.res.lgdsunday.club/goods-detail-4-1.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-4-2.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-4-3.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-4-4.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-4-5.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-4-6.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-4-7.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-4-8.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-4-9.jpg"
          ]
        },
        {
          "id": "4",
          "img": "http://imooc.res.lgdsunday.club/goods-5.jpg",
          "name": "劳力士 潜航者型系列 男士绿水鬼手表 自动机械男腕表 116610LV-97200",
          "price": "96000",
          "volume": "9983",
          "isHave": false,
          "isDirect": false,
          "swiperImgs": [],
          "detailImgs": []
        },
        {
          "id": "5",
          "img": "http://imooc.res.lgdsunday.club/goods-6.jpg",
          "name": "光明 纯牛奶 PURE MILK 250ml*16 礼盒装",
          "price": "37.9",
          "volume": "10234",
          "isHave": true,
          "isDirect": false,
          "swiperImgs": [
            "http://imooc.res.lgdsunday.club/goods-swiper-6-1.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-6-2.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-6-3.webp.jpg"
          ],
          "detailImgs": [
            "http://imooc.res.lgdsunday.club/goods-detail-6-1.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-6-2.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-6-3.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-6-4.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-6-5.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-6-6.jpg"
          ]
        },
        {
          "id": "6",
          "img": "http://imooc.res.lgdsunday.club/goods-7.jpg",
          "name": "瑞士欧米茄(OMEGA)手表 海马系列300米潜水表钢带自动机械男表防水 210.30.42.20.06.001灰盘男表",
          "price": "31599",
          "volume": "234",
          "isHave": false,
          "isDirect": true,
          "swiperImgs": [],
          "detailImgs": []
        },
        {
          "id": "7",
          "img": "http://imooc.res.lgdsunday.club/goods-8.jpg",
          "name": "简易迷你手动榨汁机儿童榨汁水果挤压汁机橙子语家用压柠檬汁器 粉色",
          "price": "10",
          "volume": "8642",
          "isHave": true,
          "isDirect": false,
          "swiperImgs": [
            "http://imooc.res.lgdsunday.club/goods-swiper-8-1.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-8-2.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-8-3.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-8-4.webp.jpg"
          ],
          "detailImgs": [
            "http://imooc.res.lgdsunday.club/goods-detail-8-1.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-8-2.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-8-3.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-8-4.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-8-5.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-8-6.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-8-7.jpg"
          ]
        },
        {
          "id": "8",
          "img": "http://imooc.res.lgdsunday.club/goods-9.jpg",
          "name": "澜杉 短袖t恤男2019新款衬衫领打底衫潮流polo衫修身男士半袖纯棉丅恤夏季潮牌衣服五分袖体恤 W7012藏青色 XL",
          "price": "88",
          "volume": "28362",
          "isHave": true,
          "isDirect": false,
          "swiperImgs": [
            "http://imooc.res.lgdsunday.club/goods-swiper-9-1.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-9-2.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-9-3.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-9-4.webp.jpg"
          ],
          "detailImgs": [
            "http://imooc.res.lgdsunday.club/goods-detail-9-1.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-9-2.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-9-3.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-9-4.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-9-5.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-9-6.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-9-7.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-9-7.jpg"
          ]
        },
        {
          "id": "9",
          "img": "http://imooc.res.lgdsunday.club/goods-10.jpg",
          "name": "三只松鼠营养早餐口袋面包网红零食饼干蛋糕乳酸菌小伴侣面包520g整箱装",
          "price": "26.9",
          "volume": "43892",
          "isHave": false,
          "isDirect": true,
          "swiperImgs": [],
          "detailImgs": []
        },
        {
          "id": "10",
          "img": "http://imooc.res.lgdsunday.club/goods-11.jpg",
          "name": "微麦m200微型手机投影仪家用迷你全高清投影机便携式掌上电脑办公智能无线无屏电视4K家庭影院 星耀红",
          "price": "1899",
          "volume": "989",
          "isHave": false,
          "isDirect": false,
          "swiperImgs": [],
          "detailImgs": []
        },
        {
          "id": "11",
          "img": "http://imooc.res.lgdsunday.club/goods-12.jpg",
          "name": "伊利 安慕希希腊风味常温酸奶原味205g*16盒",
          "price": "59.9",
          "volume": "7654",
          "isHave": false,
          "isDirect": false,
          "swiperImgs": [],
          "detailImgs": []
        },
        {
          "id": "12",
          "img": "http://imooc.res.lgdsunday.club/goods-13.jpg",
          "name": "图拉斯（TORRAS）汽车香水 车载香水空调出风口车用香水摆件 汽车用品饰品香薰 车内除异味香膏棒 黑色",
          "price": "50.8",
          "volume": "876",
          "isHave": true,
          "isDirect": false,
          "swiperImgs": [
            "http://imooc.res.lgdsunday.club/goods-swiper-13-1.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-13-2.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-13-3.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-13-4.webp.jpg",
            "http://imooc.res.lgdsunday.club/goods-swiper-13-5.webp.jpg"
          ],
          "detailImgs": [
            "http://imooc.res.lgdsunday.club/goods-detail-13-1.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-13-2.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-13-3.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-13-4.jpg",
            "http://imooc.res.lgdsunday.club/goods-detail-13-5.jpg"
          ]
        },
        {
          "id": "13",
          "img": "http://imooc.res.lgdsunday.club/goods-14.jpg",
          "name": "满199减120 三只松鼠 蜀香牛肉100g 休闲零食肉脯手撕牛肉麻辣味 牛肉粒牛肉片 麻辣味",
          "price": "25.8",
          "volume": "57356",
          "isHave": false,
          "isDirect": true,
          "swiperImgs": [],
          "detailImgs": []
        }
      ],
      navBarSlotData: {
        normal: {
          leftIcon: require('@img/more-white.svg'),
          search: {
            bgColor: '#ffffff',
            hintColor: '#999999',
            icon: require('@img/search.svg')
          },
          rightIcon: require('@img/message-white.svg')
        },
        highlight: {
          leftIcon: require('@img/more.svg'),
          search: {
            bgColor: '#d7d7d7',
            hintColor: '#ffffff',
            icon: require('@img/search-white.svg')
          },
          rightIcon: require('@img/message.svg')
        }
      },
      navIconStyle: {},
      NAV_HEIGHT: 100,
      navStyle: {
        background: '',
        position: 'fixed'
      },
      // 滑动高度
      scrolltop:-1
    };
  },
  components: {
    Swiper,
    Active,
    ModelOptions,
    Secondes,
    Pubu,
    Navbar,
    Search
  },
  created() {
    // this._getSwiper();
    // this.onscroll()
    // this._getGoods();
    this.navIconStyle = this.navBarSlotData.normal
  },
  mounted(){
    this.$nextTick(()=>{
      this.windowScroll()
    })
  },
  activated(){
    this.$refs.home.scrollTop = this.scrolltop
  },
  methods: {
    _getSwiper() {
      getSwiper()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getGoods() {
      // getGoods().then(res => {
      //   console.log(res)
      // })
    },
    // 有兼容问题
    // onScrollChange(e) {
    //   // console.log(e)
    //   let scrolltop = e.target.scrollTop;
    //   let opacity = scrolltop / this.NAV_HEIGHT
    //   if (opacity >= 1) {
    //     this.navIconStyle = this.navBarSlotData.highlight
    //   } else {
    //     this.navIconStyle = this.navBarSlotData.normal
    //   }
    //   this.navStyle.backgroundColor = `rgba(255, 255, 255,${opacity})`
    // },
    windowScroll(){
       window.addEventListener('scroll',(e)=>{
         this.scrolltop = e.target.documentElement.scrollTop
        //  console.log(scrolltop)
         let opacity =this.scrolltop / this.NAV_HEIGHT
         if(opacity >= 1) {
           this.navIconStyle = this.navBarSlotData.highlight
         }else{
           this.navIconStyle = this.navBarSlotData.normal
         }
       this.navStyle.background = `rgba(255, 255, 255,${opacity})`
      // console.log(opacity)
      })
    },
    goback(){
      this.$router.push({
        name:'goodList',
        params:{
          routerType:'push'
        }
      })
      // console.log(index)
    }
  },
  // beforDestroy(){
  //   window.removeEventListener('scroll')
  // }
};
</script>

<style scoped lang="scss">
.home1 {
  position: absolute;
  width: 100%;
  height: 100%;
  &-content {
    height: 100%;
  }
  .activity-520 {
    background: #f5f5f5;
    margin-top: -0.266667rem;
    border-radius: -0.213333rem -0.213333rem 0 0;
    img {
      display: inline-block;
      width: 33.33%;
    }
  }
  .activity-ping-gou-jie {
    background-color: white;
    margin-top: -0.266667rem;
    img {
      width: 100%;
    }
  }
}
</style>
