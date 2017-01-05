<template>
  <div>
    <!-- 导航条 -->
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <ul v-if="loginedStatus" class="nav navbar-nav nav-list">
          <li   v-for="(item,index) in tabs" 
          :class="{active:item.isActive}" 
          @click="setActive(index)">
          <a>{{item.tabName}}</a></li>
        </ul>
        <ul v-else class="nav navbar-nav nav-list">
          <li         
          :class="{active:tabs[0].isActive}" 
          @click="setActive(0)">
          <a>{{tabs[0].tabName}}</a></li>
        </ul>
        
        <form class="navbar-form navbar-left" role="search">
          <input type="text" class="form-control" placeholder="Search">
          <button type="submit" class="btn btn-default">搜索</button>
        </form>
        <ul v-if="loginedStatus" class="nav navbar-nav navbar-right">
          <li><a>你好：{{userName}}</a></li>
          
        </ul>
        <ul v-else class="nav navbar-nav navbar-right">
          <li @click="login(true)"><a>登陆</a></li>
          <li @click="login(false)"><a>注册</a></li>
        </ul>
      </div>
    </nav>  
  </div>

</template>

<script>
import plAjax from '../assets/js/plAjax';
import toolKit from '../assets/js/plCommon'
import bus from '../assets/js/plBus';
import cookieTool from 'cookie_js';

  export default {
    name: 'app',
    mounted(){
      // var obj={
      //   url:"http://localhost:1971/Account/CheckLogin",
      //   data:"",
      //   successFunc:function(data){
      //     console.log("login status is: "+data.Status+" UserName is: "+data.UserName);
      //   }
      // };
      // plAjax.ajaxer(obj);
      if(cookieTool.cookie.get("UserName")!=undefined){
        this.loginedStatus=true;
        this.userName=cookieTool.cookie.get("UserName");
        console.log(cookieTool.cookie.get("UserName"));
      }
      bus.$on("userLogined",this.logined);
    },
    data:function () {
      return {
        loginedStatus:false,
        userName:"未知用户",
        tabs:[
        {tabName:"发现",isActive:true,status:false},
        {tabName:"写故事",isActive:false,status:this.loginedStatus},
        {tabName:"个人中心",isActive:false,status:this.loginedStatus}
        ]
      }
    },
    methods:{
      setActive:function (index) {
        toolKit.setActive(index,this.tabs)
        this.$emit("navIschanging",index);

      },
      login:function(isLogin){
        bus.$emit("loginTabsSwitch",isLogin);
      },
      logined:function(loginObj){
        console.log("登陆名： "+loginObj.UserName+" 状态为： "+loginObj.status);
        this.loginedStatus=loginObj.status;
        this.userName=loginObj.UserName;
        cookieTool.cookie.set("UserName",loginObj.UserName);
        console.log(loginObj.UserName+" 已经被写入cookie");
      }
    }
  }
</script>

<style lang="scss">
  // .pl-nav-fixed{
  //   width:100%;
  //   z-index:20 !important;
  //   position:fixed;
  //   top:0;
  //   left:0;
  //   right:0;

  // }
  // 对bootstrap的导航条的默认margin-bottom进行更改
  .navbar{
    margin-bottom: 5px;
  }
  .nav li a{
    cursor:pointer;
    font-size:18px;
    color:#000 !important;
    &:hover{
      font-weight:bold;
    }
  }
  .pl-hide{
    display: none!important;
  }
  
</style>
