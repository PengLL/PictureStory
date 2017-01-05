<template>
  <div id="app">
    <pl-nav @navIschanging="setActive"></pl-nav>
    <pl-find :class="{'pl-fadeOut' : containers[0].isActive}" class="pl-fadeIn"></pl-find>
    <pl-write :class="{'pl-fadeOut' : containers[1].isActive}" class="pl-fadeIn"></pl-write>
    <pl-personal :class="{'pl-fadeOut' : containers[2].isActive}" class="pl-fadeIn"></pl-personal>
    <pl-dialog></pl-dialog>
  </div>
</template>

<script>
  import 'bootstrap'
  import plNav from './components/plNav'
  import plFind from './components/plFind'
  import plWrite from './components/plWrite'
  import plPersonal from './components/plPersonal'
  import plDialog from './components/plDialog'
  export default {
    name: 'app',
    data() {
      return {
        containers:[
        {index:0,isActive:false},
        {index:1,isActive:true},
        {index:2,isActive:true}
        ]     
      }
    },
    methods:{
      setActive:function (index) {
        for(var i=0;i<this.containers.length;i++){
          if(i==index)
            this.containers[i].isActive=false;
          else
            this.containers[i].isActive=true;
        }
      }
    },
    components:{
      plNav,
      plFind,
      plWrite,
      plPersonal,
      plDialog
    }
  }
</script>

<style lang="scss">
// 整个页面的基本样式，由于引入了bootstrap，所以无需重置样式
html,body{
  width:100%;
  height:100%;
  font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
  background-color:#F3F6F7;
}
.pl-fadeOut{
  //animation: fade 1s;
  display: none;
}
.pl-fadeIn{
  animation: fade 0.5s ease-out;
}

@keyframes fade{
  from{
    opacity: 0;
  }
  to{
    opacity:1;
  }
}
</style>
