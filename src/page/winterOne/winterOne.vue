<template>
<keep-alive>
  <div class="winter-box">
    <div class="header">
       冬日1元票
    </div> 
    <div class="winter-country-outer">
        <ul>
          <li class="winter-country-actived-left">国内场</li>
          <li class="winter-country-actived-right">海外场</li>
        </ul>
    </div>
    <div class="winter-banner">
      <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/banner.jpg" alt="">
    </div>
    <div class="winter-city-container">
       <ul>
         <li>北京</li>
         <li>成都</li>
         <li>重庆</li>
         <li>广州</li>
         <li>></li>
       </ul>
    </div>
    <div class="winter-anchor-container">
      <ul class="winter-anchor-list">
        <li class="winter-anchor-item">一元秒杀</li>
        <li class="winter-anchor-item">免排队</li>
        <li class="winter-anchor-item">人文古迹</li>
        <li class="winter-anchor-item">自然风光</li>
      <!--   <li class="winter-anchor-item">主题乐园</li>  
        <li class="winter-anchor-item">一日游</li>  -->
      </ul>
    </div>
    <div class="winter-modules-outer">
      <div class="winter-modules-outer-img">
          <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/caption_1.jpg" alt="">
       </div>
    </div>
   
  </div>
</keep-alive>
</template>
<script>
  export default {
    name: 'winterOne'
  }
</script>
<style scoped>
.winter-box {
  color: #212121;
  /*background-color: yellow;*/
}
.header{
    background: #1ba9ba;
    text-align: center;
    color: #fff;
    border-bottom: #1b7a8b .02rem solid;
    height: .88rem;
    line-height: .88rem;
}
.winter-country-outer{
  width: 100%;
  height: .96rem;
  background-color: 
}
.winter-country-outer ul{
  overflow: hidden;
}
.winter-country-outer ul li{
  float: left;
  color: #fff;
  font-size: .32rem;
  line-height: .96rem;
  text-align: center;
}
.winter-country-actived-left {
  width: 50%;
 background-color: #4482f6;
}
.winter-country-actived-right {
  width: 50%;
    background-color: #86b0ff;
  
}
.winter-banner{
  width: 100%;
  height: 5rem;
}
.winter-banner img{
  width: 100%;
  height: 100%;
}
.winter-city-container ul {
  width: 100%;
  min-height: .76rem;
  background: #4482f6;
} 
.winter-anchor-list{
  width: 100%;
  height: 100%;
}
.winter-anchor-container{
  background-color: #7bdafe;
  height: 1.5rem;
  border: 1px solid yellow;
}
.winter-anchor-container ul{
  min-height: 1.5rem;
  line-height: 1.5rem;
}
.winter-city-container ul li{
  width: 19%;
  height: .76rem;
  line-height: .76rem;
  display: inline-block;
  text-align: center;
  font-size: 0.32rem;
  color: #fff;
    
}

.winter-anchor-item{
    display: inline-block;
    position: relative;
    margin: 0 .12rem;
    padding-top: .12rem;
    width: 1.7rem;
    height: .78rem;
    background: url(//s.qunarzz.com/piao_topic/image/touch/custom/2017/2390nationalday09/winter/anchor_odd.png) center bottom/contain no-repeat;
    color: #05857e;
    font-size: .34rem;
    line-height: .78rem;
    text-align: center;
}
.winter-modules-outer{
  box-sizing: border-box;
  width: 100%;
  height: 6.3rem;
  border: 1px solid red;
}
.winter-modules-outer-img{
  width: 100%;
  height: 19rem;
  text-align: center;
}
.winter-modules-outer-img img{
  width: 100%;
}


</style>
