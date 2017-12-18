<template>
<keep-alive>
  <div class="palace-box">
    <div class="header">
      <div class="palace-header">
        <img class="header-wrap-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      </div>
      <div class="headerfigure">
        <div class="headerfigure-list">
          <p class="headerfigure-list-address">
            北京市东城区景山前街4号
          </p>
          <i>></i>
        </div>
        <div class="headerfigure-list">
          <p class="headerfigure-list-address">
            查看景点简介及开放时间
          </p>
          <i>></i>
        </div>
      </div>
      <div class="commentsinfo-con">
        <div class="commentsinfo-grade">
          <p class="commentsinfo-grade-scores">
            5.0分
          </p>
          <i class="commentsinfo-grade-numbers">
	  	   			   	169950评论>
	  	   			   	</i>
        </div>
      </div>
      <div class="announce-inner pink">
        <p class="announce-icon">
          除法定节假日，故宫博物院实行周一闭馆。
        </p>
        <i>></i>
      </div>
    </div>
    <div class="content">
      <div class="con-title">
        <h3 class="con-title-text">
  	   			 		去哪儿推荐
  	   			 	</h3>
      </div>
      <div class="con-ticket">
        <div class="con-ticket-item" v-for="item in recommendInfo" :key="item.id">
          <h6 class="con-ticket-onedaytitle">
                            <!-- {{item.news}} -->
                  </h6>
          <div class="con-ticket-onedaymore">
            <span class="con-ticket-desctag">
                                可订明日
                            </span>
            <span class="con-ticket-desctag">
                                无购物
                            </span>
            <span class="con-ticket-desctag">
                                无自费
                            </span>
          </div>
        </div>
        <div class="con-ticket-side">
          <i>&yen;27</i><span>起</span>
          <div class="con-ticket-btn">
            查看
          </div>
        </div>
      </div>
      <div class="con-ticket">
        <div class="con-ticket-item" v-for="item in recommendInfo" :key="item.id">
          <h6 class="con-ticket-onedaytitle">
                            <!-- {{item.news}} -->
                        </h6>
          <div class="con-ticket-onedaymore">
            <span class="con-ticket-desctag">
                                可订明日
                            </span>
            <span class="con-ticket-desctag">
                                无购物
                            </span>
            <span class="con-ticket-desctag">
                                无自费
                            </span>
          </div>
        </div>
        <div class="con-ticket-side">
          <i>&yen;27</i><span>起</span>
          <div class="con-ticket-btn">
            查看
          </div>
        </div>
      </div>
      <div class="con-ticket-group">
        <h3 class="con-title-text">
                        去哪儿推荐
                    </h3>
        <div class="headerfigure white">
          <div class="headerfigure-list">
            <p class="headerfigure-list-address">
              北京市东城区景山前街4号
            </p>
            <i>></i>
          </div>
          <div class="headerfigure-list">
            <p class="headerfigure-list-address">
              查看景点简介及开放时间
            </p>
            <i>></i>
          </div>
          <div class="headerfigure-list">
            <p class="headerfigure-list-address">
              查看景点简介及开放时间
            </p>
            <i>></i>
          </div>
        </div>
        <div class="cen-button">
          <a href="">查看剩余产品</a>
        </div>
      </div>
    </div>
  </div>
</keep-alive>
</template>
<script>
export default {

  name: 'Palace',

  data () {
    return {
      figureInfo: [],
      recommendInfo: [],
      adultInfo: [],
      studentInfo: [],
      oldInfo: [],
      combinationInfo: [],
      selfHelpGuideInfo: [],
      jewelryInfo: [],
      tourServiceInfo: [],
      MuseumGiftInfo: [],
      dayTourInfo: []
    }
  },

  methods: {

    getIndexData () {
      this.$http.get('/static/palace.json')
        .then(this.handleGetDataSucc.bind(this))
    },

    handleGetDataSucc (res) {
      const body = res.body
      if (body && body.data && body.data.figure) {
        this.figureInfo = body.data.figure
        this.recommendInfo = body.data.recommend
        this.adultInfo = body.data.adult
        this.studentInfo = body.data.student
        this.oldInfo = body.data.old
        this.combinationInfo = body.data.combination
        this.selfHelpGuideInfo = body.data.selfHelpGuide
        this.jewelryInfo = body.data.jewelry
        this.tourServiceInfo = body.data.tourService
        this.MuseumGiftInfo = body.data.MuseumGift
        this.dayTourInfo = body.data.dayTour
      }
    }

  },

  created () {
    this.getIndexData()
  }
}
</script>
<style scoped>
.palace-box {
  color: #212121;
}

.palace-header {
  width: 100%;
  height: 4rem;
}

.palace-header img {
  width: 100%;
  height: 100%;
}

.headerfigure {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  padding: .1rem .2rem 0 .2rem;
}

.headerfigure-list {
  width: 100%;
  height: 0.78rem;
  font-size: 0.28rem;
  display: inline-block;
  background-color: #fff;
  overflow: hidden;
}

.headerfigure-list p {
  width: 70%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.headerfigure-list i {
  display: block;
  width: 5%;
  line-height: 0.78rem;
  float: right;
}

.headerfigure-grade {
  width: 100%;
  height: 0.78rem;
  font-size: 0.28rem;
  display: inline-block;
  margin-top: 0.1rem;
  overflow: hidden;
}

.headerfigure-grade-scores {
  width: 60%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.headerfigure-grade-numbers {
  display: block;
  width: 40%;
  line-height: 0.78rem;
  float: right;
}

.commentsinfo-con {
  box-sizing: border-box;
  background-color: #e8e8e8;
  width: 100%;
  height: 1.3rem;
  padding-top: 0.2rem;
}

.commentsinfo-grade {
  box-sizing: border-box;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #fff;
  padding: .1rem .2rem 0 .2rem;
}

.commentsinfo-grade p {
  width: 75%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.commentsinfo-grade i {
  display: block;
  width: 25%;
  line-height: 0.78rem;
  float: right;
}

.announce-inner {
  box-sizing: border-box;
  width: 100%;
  height: 0.8rem;
}

.pink {
  background-color: #fdeede;
}

.announce-inner {
  color: #f1441a;
  padding: 0rem .2rem 0 .2rem;
}

.announce-inner p {
  width: 75%;
  float: left;
  line-height: 0.78rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.announce-inner i {
  display: block;
  width: 5%;
  line-height: 0.78rem;
  float: right;
}

.con-title-text {
  height: .88rem;
  background: #fff;
  color: #333;
  font-size: .32rem;
  padding: 0 .2rem;
  text-indent: .7rem;
  margin-bottom: -.02rem;
  line-height: .88rem;
  text-indent: .4rem;
}

.con-ticket {
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  background-color: #fff;
  padding: .2rem .2rem .24rem .2rem;
}

.con-ticket-item {
  width: 70%;
  height: 100%;
  float: left;
}

.con-ticket-onedaytitle {
  display: inline;
  width: 100%;
  color: #212121;
  font-size: .28rem;
  line-height: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.con-ticket-desctag {
  display: inline;
  color: #616161;
  font-size: .24rem;
  line-height: .32rem;
  white-space: nowrap;
}

.con-ticket-side {
  width: 25%;
  height: 85%;
  text-align: center;
  float: right;
  padding-top: 0.25rem;
}

.con-ticket-side i {
  color: #ff9800;
  font-size: .28rem;
  margin-left: .04rem;
  line-height: .3rem;
}

.con-ticket-side span {
  font-size: 0.24rem;
  color: #B8B8B8;
}

.con-ticket-btn {
  width: 1.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #ff9800;
  color: #fff;
  font-size: .32rem;
  text-align: center;
  margin-left: .04rem;
  border-radius: .06rem;
}

.content {
  background-color: #e8e8e8;
}

.white {
  background-color: #fff;
}

.con-ticket-group {
  margin-top: 0.2rem;
}

.con-ticket-group .cen-button {
  width: 100%;
  height: 1rem;
  color: gray!important;
  background-color: #fff;
  font-size: 0.3rem;
  line-height: 1rem;
  text-align: center;
  border-top: 1px solid #f5f5f5;
  box-sizing: border-box;
}
</style>
