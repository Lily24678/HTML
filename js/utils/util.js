var Util=new Object();

Util.addListener=function(document,event,myFunction){
	if (document.addEventListener) {//所有主流浏览器，除了 IE 8 及更早 IE版本
	    document.addEventListener(event, myFunction);
	} else if (document.attachEvent) {//IE 8 及更早 IE 版本
	    document.attachEvent(event, myFunction);
	}
}

