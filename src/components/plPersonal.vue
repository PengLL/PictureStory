<template>
    <div class="container">
        <ul class="list-group pl-tab-group">
            <li class="list-group-item" v-for="(item,index) in tabs" :class="{active:item.isActive}" @click="activeTab(index)">
                {{item.name}}
            </li>      
        </ul>
        <div class="pl-list container pl-perosnal-li">
            <ul>
                <li class="pl-li-basic">
                    <img src="../assets/images/4.jpg" />
                    <h3><a>凌晨四点的太阳</a></h3>
                    <div class="pl-li-info">
                        <span class="glyphicon glyphicon-star"></span>125&nbsp; &nbsp;<span class="glyphicon glyphicon-eye-open"></span>18&nbsp;&nbsp;
                        <span class="pl-li-gap">&nbsp;&nbsp;作者：PengL&nbsp;&nbsp;</span><span class="pl-li-gap">&nbsp;&nbsp;日期：2016-10-1</span>
                    </div>
                </li>
                <li class="pl-li-basic">
                    <img src="../assets/images/4.jpg" />
                    <h3><a>凌晨四点的太阳</a></h3>
                    <div class="pl-li-info">
                        <span class="glyphicon glyphicon-star"></span>125&nbsp; &nbsp;<span class="glyphicon glyphicon-eye-open"></span>18&nbsp;&nbsp;
                        <span class="pl-li-gap">&nbsp;&nbsp;作者：PengL&nbsp;&nbsp;</span><span class="pl-li-gap">&nbsp;&nbsp;日期：2016-10-1</span>
                    </div>
                </li>
                <li class="pl-li-basic">
                    <img src="../assets/images/4.jpg" />
                    <h3><a>凌晨四点的太阳</a></h3>
                    <div class="pl-li-info">
                        <span class="glyphicon glyphicon-star"></span>125&nbsp; &nbsp;<span class="glyphicon glyphicon-eye-open"></span>18&nbsp;&nbsp;
                        <span class="pl-li-gap">&nbsp;&nbsp;作者：PengL&nbsp;&nbsp;</span><span class="pl-li-gap">&nbsp;&nbsp;日期：2016-10-1</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import toolkit from '../assets/js/plCommon';

    export default{
        data(){
            return {
                tabs:[
                {name:"我的故事",isActive:true,index:0},
                {name:"喜欢的故事",isActive:false,index:1},
                {name:"粉丝",isActive:false,index:2},
                {name:"关注",isActive:false,index:3},
                {name:"获得的喜欢",isActive:false,index:4}
                ]
            }
        },
        methods:{
            activeTab:function(index){               
                toolkit.setActive(index,this.tabs);             
            }
        }
    }
</script>
<style scoped lang="scss">

    @import '../assets/css/common.scss';

    .pl-tab-group {
        width:20%;
        float:left;
        li{
            cursor: pointer;
        }
    }
    .pl-perosnal-li{
        width:75%;
        float:right;
        margin:0;
    }
</style>