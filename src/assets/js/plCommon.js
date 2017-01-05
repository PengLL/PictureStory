function setActive (index,arr){
	for(var i=0;i<arr.length;i++){
		if(i==index)
			arr[i].isActive=true;
		else
			arr[i].isActive=false;
	}
}
module.exports={
	setActive:setActive
};
