<template>
	<div class="pl-dialog " :class="{'pl-dialog-hide':dialogHide}">
		<div class="pl-dialog-mask" @click="hide"></div>
		<div class="pl-dialog-content">
			<div class="pl-dialog-header">
				<ul>
					<li :class="{'pl-dialog-active':isLogin}" @click="isLogin=true">登陆</li>
					<li :class="{'pl-dialog-active':!isLogin}" @click="isLogin=false">注册</li>
				</ul>
				<span class="pl-dialog-close" @click="hide">X</span>
			</div>
			<div class="pl-dialog-body">							
					<input type="text" class="form-control" placeholder="请输入用户名" v-model="user.UserName" name="UserName">
					<input type="password" class="form-control" placeholder="请输入密码" v-model="user.Pwd" name="Pwd" />
					<div :class="{'pl-input-hide':isLogin}">
						<input type="password" class="form-control" placeholder="请再次输入密码" v-model="ensurePwd" />
						<input type="text" class="form-control pl-short-input"   placeholder="请输入验证码">
					</div>
					<div :class="{'pl-input-hide':!isLogin}">
						<a href="/Login" >修改密码</a>
					</div>
					<button v-if="isLogin" @click="postloginForm" class="btn btn-info">登陆</button>
					<button v-else class="btn btn-info">注册</button>				
			</div>
		</div>
	</div>
</template>

<script>
	import bus from '../assets/js/plBus';
	import plAjax from '../assets/js/plAjax';
	
	export default{
		mounted(){
			var self=this;
			bus.$on("loginTabsSwitch",self.tabSwitch);
		},
		data(){
			return {
				isLogin:true,
				dialogHide:true,				
				user:{UserName:"",Pwd:""},
				ensurePwd:""
			}
		},
		methods:{
			tabSwitch:function(isLogin){				
				this.isLogin=isLogin;
				this.dialogHide=false;
			},
			hide:function(){
				this.dialogHide=true;
			},
			postloginForm:function(){
				var self=this;
				var formData=new FormData();
				console.log(this.user.UserName);
				formData.append("UserName",this.user.UserName);
				formData.append("Pwd",this.user.Pwd);
				var obj={
					url:"http://localhost:1971/Account/Login",
					formData:formData,
					successFunc:function(data){
						var loginObj={};
						if(data=="登陆成功"){
							loginObj={status:true,UserName:self.user.UserName};	
							self.dialogHide=true;				
							
						}
						else
							loginObj={status:false,UserName:self.user.UserName};
						bus.$emit("userLogined",loginObj);
					}
				};
				plAjax.formAjaxer(obj);
			}
		}
		
	}
</script>

<style lang="scss" scoped>

	@import '../assets/css/common.scss'; 
	.pl-dialog-hide{
		display: none;
	}
	.pl-dialog-show{
		animation: fadeIn 0.5s ease-out;
	}
	.pl-dialog{
		width:100%;
		height:100%;
		position:fixed;
		top:0;
		left:0;
		z-index:99;
		.pl-dialog-mask{
			width:100%;
			height:100%;
			background: rgba(0, 0, 0, $opacity-small);
		}
		.pl-dialog-content{
			position:fixed;
			z-index:100;
			background-color:#fff;
			top: $distance-huge;
			width: 30%;
			margin-left: 35%;
			button{
				width:80%;
				display:block;
				margin:0 auto;
				margin-top:$distance-huge;
				margin-bottom:$distance-huge;
				border-radius:1px;
			}
			ul{
				display:-webkit-flex;
				justify-content:space-around;
				list-style:none;
				flex-flow:row wrap;
				width:100%;				
				padding:$distance-min;
				li{
					cursor:pointer;
					display:inline-block;
					font-size:18px;
					text-align:center;
					flex:1;
					height:100%;
				}
				li:first-child{
					border-right:1px solid #ccc;
				}
			}
			input{
				width:80%;
				margin-left:10%;
				margin-top:20px;
				border-radius:1px;
			}
			a{
				display:block;
				float:right;
				margin-right:10%;
				margin-top:10px;
				margin-bottom:20px;
			}
		}
		.pl-dialog-active{
			color:rgb(197,31,31);
			font-weight:400;
		}
	}
	.pl-dialog-close{
		position:absolute;
		right: -8px;
		padding:0 8px 0 8px;
		border-radius:50%;
		font-size: 20px;
		top:-10px;
		background:#fff;
		cursor: pointer;
		&:hover{
			color:rgb(197,31,31);
		}
	}
	.pl-input-hide{
		display: none;
	}
	.pl-short-input{
		width: 50% !important;
	}
	@keyframes fadeIn{
		from{
			opacity:0;
		}
		to{
			opacity:1;
		}
	}
</style>