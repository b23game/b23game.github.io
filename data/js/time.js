function time() {
	t_div = document.getElementById('time');
	var now = new Date()
	setTimeout(time, 1000);
	var dangqian = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() ;
	t_div.innerHTML="本站已经在线运行了 "+ DateDiff("2021-08-28",dangqian) +" 天";
}

function  DateDiff(sDate1,  sDate2){
	var  aDate,  oDate1,  oDate2,  iDays  
	aDate  =  sDate1.split("-")  
	oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])
	aDate  =  sDate2.split("-")  
	oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])  
	iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)
	return  iDays  
}