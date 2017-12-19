  <template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="search"><a href="#" class="prompt">输入城市/景点/游玩主题</a></div>
      <router-link to='/palace' class="city">城市</router-link>
    </header>

    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <swiper>
      <swiper-slide v-for="(pageInfo, index) in pages" :key="index">
        <div class="icon-wrapper">
          <div v-for="item in pageInfo" :key="item.id" class="icon-item">
            <div class="icon-img-con">
              <img  class="icon-img" :src="item.imgUrl"/>
              <p class="icon-news">{{item.news}}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="content">
      <ul class="location ">  
        <li>定位失败</li>
        <li>五折泡温泉</li>
      </ul>
      <div class="nav">
        <li>
            <div>
              <div><a href="" class="red">精品温泉</a></div>
              <div><a href="" class="gray">五折开泡</a></div>
            </div>
            <div>
              <img src="../../assets/img/xiao1.png" alt="">
            </div>
        </li>
        <li>
            <div>
              <div><a href="" class="red">冬季大促</a></div>
              <div><a href="" class="gray">门票一元秒</a></div>
            </div>
            <div>
              <img src="../../assets/img/xiao2.png" alt="">
            </div>
            
        </li>
    </div>
  </div>
  <div class="center">
    <div class="center-top">
        <p>热销推荐</p>
    </div>
    <ul>
      <li class="center-list" v-for="item in centerListInfo" :key="item.id">
          <div class="cen-list-left">
             <img  class="cen-list-img" :src="item.imgUrl"/>
          </div>
          <div class="cen-list-right">
             <div class="cen-list-details">{{item.details}}</div>
            <div class="cen-list-news">{{item.news}}</div>
            <div class="cen-list-price"><span>{{item.price}}</span>起</div>
          </div>
      </li>
    </ul>
    <div class="center-button">
      <a href="">查看所有产品</a>
    </div>
  </div>
  <div class="menu">
      <div class="menu-top">
        <p>周末去哪儿</p>
      </div>
      <ul>
        <li class="menu-list" v-for="item in menuInfo" :key="item.id">
           <div class="menu-list-top">
              <img  class="menu-list-img" :src="item.imgUrl" alt="">
           </div> 
           <div class="menu-list-bottom">
              <p class="menu-list-details">{{item.details}}</p>
              <p class="menu-list-news">{{item.news}}</p>
           </div>
        </li>
      </ul>
      <div class="menu-bottom">
         <i>票面价</i><span>是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
      </div>
  </div>
  <div class="footer">
      <ul  class="footer-top">
        <li><a href="">机票</a></li>
        <li><a href="">酒店</a></li>
        <li><a href="">公寓</a></li>
        <li><a href="">更多</a></li>
      </ul>
      <ul class="footer-bottom">
        <li><a href="">登录</a></li>
        <li><a href="">我的订单</a></li>
        <li><a href="">公寓</a></li>
        <li><a href="">关于我们</a></li>
      </ul>
        
  </div>
  </div>
  
</template>

<script>
  export default {

    name: 'Index',

    data () {
      return {
        swiperInfo: [],
        iconInfo: [],
        centerListInfo: [],
        menuInfo: [],
        swiperOption: {
          autoplay: 10000,
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },

    computed: {
      pages () {
        const pages = []
        this.iconInfo.forEach((value, index) => {
          let page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
        })
        return pages
      }
    },

    methods: {

      getIndexData () {
        this.$http.get('/static/index.json')
          .then(this.handleGetDataSucc.bind(this))
      },

      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data && body.data.swiper) {
          this.swiperInfo = body.data.swiper
          this.iconInfo = body.data.icons
          this.centerListInfo = body.data.centerlist
          this.menuInfo = body.data.menu
        }
      }

    },

    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    background: #05bad5;
    color: #fff;
  }
  .back {
    width: .64rem;
    line-height: .86rem;
    text-align: center;
  }
  .search {
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
  }
  .icon-shuaxin {
    color: #ccc;font-size: 0.26rem;padding:0 0.15rem;
  }
  .prompt {
    font-size: 0.26rem;color: #ccc;line-height: 0.6rem;
  }
  .city {
    width: 1.14rem;
    line-height: .86rem;
    text-align: left;
  }
  .city::after{
    content:"";
    display: block;
    width: 0px;
    height: 0px;
    border: 0.1rem solid #fff;
    border-color: white transparent transparent transparent;
    position: absolute;
    right: 0.3rem;
    top: 0.36rem;
  }
  .swiper-img-con {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
  }
  .swiper-img {
    width: 100%;
  }
  .icon-wrapper {

  }
  .icon-item {
    width: 25%;
    padding: .4rem;
    box-sizing: border-box;
    float: left;
   
  }
  .icon-img-con {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    text-align: center;
  }
  .icon-img {
    width: 60%;
    margin-bottom: 0.2rem; 
  }

  .location {
    height: 1rem;
    font-size: 0.32rem;
    background-color: #fff;
    border-top: 0.001rem solid #ccc;
    padding:0 0.15rem;
    margin-bottom: 0.5rem; 
   justify-content: space-between;
  }
  .location li{
    width: 49%;
    display: inline-block;
    line-height: 1rem;
    text-align: center;
  }
  .content{
    background-color: #f5f5f5;
    /*height: 4rem;*/
    overflow: hidden;
  }
  .nav{
    width: 100%;
    height: 1.4rem;
    background-color: #fff;
   }
  .red{
    color: red;
  }
  .gray{
    color: gray;
  }
  .nav li{
    display: inline-block;
    height: 1.4rem;
    text-align: center;
    width: 48%; 
  }
  .nav li>div{
    display: inline-block;
  }
  .nav li>div div{
    line-height: 0.7rem;
  }
  .nav li img{
   float: left;
   margin-left: 0.25rem; 
  }
  .center-top{
    width: 100%;
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
    background-color: #f5f5f5;
  }
  .center-list{
    width: 100%;
    overflow: hidden;
    height: 1.4rem;
    padding: .24rem;
    border:1px solid #f5f5f5; 
  }
  .cen-list-item>div{
    display: inline-block;
    font-size: 0.35rem;
  }
   .cen-list-left{
    width: 20%;
    float: left;
   }
   .cen-list-img{
      width: 90%;
      height: 90%;
   }
   .cen-list-right{
    width: 70%;
    float: left;
   }
   .cen-list-details{
    font-size: 0.35rem;
    margin-top:0.1rem; 
   }
   .cen-list-news{
    font-size: 0.3rem;
    margin: .1rem 0rem;
    height: .4rem;
    line-height: .4rem;
    color: #9e9e9e;
    white-space: nowrap;
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;

   }
   .cen-list-price span{
    font-size: 0.35rem;
    color: red;
   }
   .center-button{
    width: 100%;
    height: 1rem;
    font-size: 0.3rem;
    line-height: 1rem;
    text-align: center;
    border-top: 1px solid #f5f5f5;
    box-sizing: border-box;
   }
   .menu{
    background-color: #f5f5f5;
   }
   .menu-top{
      width: 100%;
     height: 0.8rem;
     font-size: 0.3rem;
     line-height: 0.8rem;
     padding-left: 0.26rem;
     background-color: #f1f1f1;
   }
   .menu ul{
    overflow: hidden;
   }
   .menu-list-top{
    width: 100%;
    height: 3rem;
    border: 1px solid #f5f5f5;
   }
   .menu-list-top img{
    width: 100%;
    height: 100%;
   }
   .menu-list-bottom{
    width: 100%;
    height: 1.6rem;
    background-color: #fff;
   }
    .menu-list-bottom p{
      height: 0.5rem;
      padding-left: 0.36rem;
    }
    .menu-list-bottom p:nth-of-type(1){
      font-size: 0.32rem;
      padding-top:0.4rem; 
    }
    .menu-bottom{
      margin-top:0.3rem; 
      height: 0.32rem;
      line-height: 0.32rem; 
      background-color: #fff; 
      padding: .14rem .26rem;
    }
    .menu-bottom i{
     color: #616161;
     font-weight: bold;
    }
    .footer{
      background-color: #f5f5f5;
    }
    .footer-top,.footer-bottom{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
    }
    .footer-top li{
      display: inline-block;
      width: 18%;
    }
    .footer-bottom li{
      float: left;
      margin-left:0.5rem; 
      display: inline-block;
    }
 
</style>
