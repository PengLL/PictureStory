<template>
	<div class="container-fluid">
		<div class="container pl-writeForm">
			
			<div class="form-group">
				<input type="text" class="form-control" placeholder="标题" name="Title" v-model="title">
			</div>
			<div class="form-group">
				<label class="pl-date-label">照片日期</label>
				<input type="date" class="form-control" name="Date" v-model="date">
			</div>
			<div class="form-group">
				<img id="pl-previewImg" />
				<button type="button" class="btn btn-primary" id="uploadBn">
					<span class="glyphicon glyphicon-plus">
					</span>
					&nbsp;&nbsp;添加图片
				</button>
				<input type="file" id="pl-uploadInput" name="image" >
			</div>
			<div class="checkbox">
				<textarea class="form-control" placeholder="你的故事..." rows="15" name="Con" v-model="con"></textarea>
			</div>
			
			<button  class="btn btn-primary" v-on:click="uploadStory">完成</button>
		</div>
	</div>
</template>

<script>
	import con from '../assets/js/plAjax';
	export default{
		data:function () {
			return {
				title:"",
				date:"",
				con:""				
			}
		},
		methods:{
			uploadStory:function () {
				var formdata=new FormData();

				formdata.append("image",$("#uploadInput")[0].files[0]);
				formdata.append("Title",this.title);
				formdata.append("Date",this.date);
				formdata.append("Con",this.con);
				
				$.ajax({
					url:"http://localhost:1971/Find/AddStory",
					type:"POST",
					data:formdata,
					dataType:"json",
					processData:false,
					contentType:false,
					success:function (data) {
						alert(data);
					},
					error:function () {
						alert("something is wrong");
					}
				})
			}
		},
		// 给部分按钮进行初始化，绑定一些事件
		mounted:function () {
			function getURL(file) {
				var url = null;
		        if (window.createObjectURL != undefined) { // basic
		        	url = window.createObjectURL(file);
		        } else if (window.URL != undefined) { // mozilla(firefox)
		        	url = window.URL.createObjectURL(file);
		        } else if (window.webkitURL != undefined) { // webkit or chrome
		        	url = window.webkitURL.createObjectURL(file);
		        }
		        return url;
		    }
		    $("#uploadInput").change(function () {
		    	var path,
		    	extension;
		    	path = getURL(this.files[0]);
		    	extension = $(this).val().substring($(this).val().lastIndexOf('.'), $(this).val().length);
		    	extension = extension.toLocaleLowerCase();
		    	if (extension != ".jpg" && extension != ".png" && extension != ".bmp" && extension != ".jpeg")
		    		alert("上传图片格式不正确，请重新上传");
		    	else {
		    		$("#previewImg").attr("src", path);
		    	}
		    }) 
		    $("#uploadBn").click(function () {
		    	$("#uploadInput").click();
		    })
		}
	}
</script>

<style lang="scss" scoped>
	.pl-writeForm{
		padding-top:20px;
		padding-bottom:20px;
		border:1px #ddd solid;
		background-color:#fff;
		input
		{
			width:40%;
			display:inline-block;
		}
		input[type="date"]
		{
			width:27%;
			margin-left:6px;
		}
	}
	.pl-date-label{
		display:inline-block;
		border:1px solid #ccc;
		width:12%;
		padding:5px 0;
		text-align:center;
		font-size: 14px;
		font-weight: 400;
	}
	#pl-previewImg{
		display:block;
		margin-bottom:20px;
		box-shadow:4px 4px 8px #aaa;
	}
	#pl-uploadInput{
		display:none;
	}
</style>