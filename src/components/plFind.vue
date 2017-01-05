<template>
	<div >
	<!-- 轮播图 -->
		<div class="container carouselDiv">
	        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
	            <!-- Indicators -->
	            <ol class="carousel-indicators">
	                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
	                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
	                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
	            </ol>

	            <!-- Wrapper for slides -->
	            <div class="carousel-inner" role="listbox">
	                <div class="item active">
	                    <img src="../assets/images/1.jpg"  class="pl-carousel-img" alt="...">
	                </div>
	                <div class="item">
	                    <img src="../assets/images/2.jpg" class="pl-carousel-img" alt="...">
	                </div>
	                <div class="item">
	                    <img src="../assets/images/3.jpg" class="pl-carousel-img" alt="...">
	                </div>
	            </div>

	            <!-- Controls -->
	            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
	                <span class="glyphicon glyphicon-chevron-left"></span>
	                <span class="sr-only">Previous</span>
	            </a>

	            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
	                <span class="glyphicon glyphicon-chevron-right"></span>
	                <span class="sr-only">Next</span>
	            </a>
	        </div>
	    </div>
	<!--故事列表-->
		<div class="pl-list container">
			<ul>
	            <li  v-for="item in storyList" class="pl-li-basic pl-li-dialog">
	                <img src="../assets/images/4.jpg" />
	                <h3><a id="1">{{item.Title}}</a></h3>
	                <div class="pl-li-info">
	                    <span class="glyphicon glyphicon-star"></span>
	                    {{item.Star}}&nbsp; &nbsp;
	                    <span class="glyphicon glyphicon-eye-open"></span>
	                    {{item.PViews}}&nbsp;&nbsp;
	                    <span class="pl-li-gap">&nbsp;&nbsp;作者：{{item.Author}}&nbsp;&nbsp;</span>
	                    <span class="pl-li-gap">&nbsp;&nbsp;日期：{{item.Date.substring(0,10)}}</span>
	                </div>
	            </li>
	        </ul>
        </div>
	</div>
</template>

<script>
	import plAjax from '../assets/js/plAjax';
	

	export default{
		data() {
			return {
				storyList:[]
			}
		},
		methods:{
			show:function () {
				alert(plAjax.name);
			},
			solveJson:function (jsondata){
				this.storyList=jsondata;
			}
		},
		mounted:function () {
			
			var ajaxParam={
				url:"http://localhost:1971/api/Main/GetStories",
				data:"page=0",
				successFunc:this.solveJson
			};
			plAjax.ajaxer(ajaxParam);
		}
	}

</script>

<style lang="scss" scoped>
@import '../assets/css/common.scss';

.pl-carousel-img{
	width:100%;
	height:450px !important;
}

</style>