function ajaxer(paramObj) {
	$.ajax({
		url:paramObj.url,
		dataType:"json",
		type:"GET",
		data:paramObj.data,
		success:paramObj.successFunc,
		error:function (xhr,status,error) {
			console.log("ajax请求错误提示：status is: "+xhr.status+"  status text is: "+xhr.statusText);
		}
	})
}
function formAjaxer(paramObj){
	$.ajax({
		url:paramObj.url,
		dataType:"json",
		type:"POST",
		data:paramObj.formData,
		processData:false,
		contentType:false,
		success:paramObj.successFunc,
		error:function(){
			console.log("form Ajax is wrong");
		}
	})
}
module.exports={
	ajaxer:ajaxer,
	formAjaxer:formAjaxer
};