var nav_list=document.getElementById('nav_list_r');
var lis=nav_list.getElementsByTagName('li');
var a=nav_list.getElementsByTagName('a');
for(var i=0;i<a.length;i++){
	a[i].index=i;
	a[i].onmouseover=function() {
		clear();
		this.className="active";
		lis[this.index].className="active1";
	
	}
	a[i].onmouseout=function(){
		clear();
		a[index].className="active";
		lis[index].className="active1";
	}
}
function clear(){
//遍历所有的li标签并清除类名
for(var i=0;i<lis.length;i++){
	lis[i].className="";
	a[i].className="";
	}
}
 var mySwiper = new Swiper ('.swiper-container', {
    autoplay:1500,
    loop: true,
  })     
 var showdate=document.getElementById('showdate');
 var time=null;
 function getTime(){
 	var Mydate=new Date();
 	var year=Mydate.getFullYear();
	var month=Mydate.getMonth()+1; 
	var day=Mydate.getDate(); 
	showdate.innerHTML=year+"年"+month+"月"+day+"日";
 }
time=setInterval(getTime(),2000);