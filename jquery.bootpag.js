/*

 bootpag - jQuery plugin for dynamic pagination

 Copyright (c) 2015 botmonster@7items.com

 Licensed under the MIT license:
   http://www.opensource.org/licenses/mit-license.php

 Project home:
   http://botmonster.com/jquery-bootpag/

 Version:  1.0.6

*/
(function(g,q){g.fn.bootpag=function(p){function l(k,b){b=parseInt(b,10);var d,c=0==a.maxVisible?1:a.maxVisible,h=1==a.maxVisible?0:1,n=Math.floor((b-1)/c)*c,f=k.find("li");a.page=b=0>b?0:b>a.total?a.total:b;f.removeClass(a.activeClass);d=1>b-1?1:a.leaps&&b-1>=a.maxVisible?Math.floor((b-1)/c)*c:b-1;a.firstLastUse&&f.first().toggleClass(a.disabledClass,1===b);c=f.first();a.firstLastUse&&(c=c.next());c.toggleClass(a.disabledClass,1===b).attr("data-lp",d).find("a").attr("href",e(d));h=1==a.maxVisible?
0:1;d=b+1>a.total?a.total:a.leaps&&b+1<a.total-a.maxVisible?n+a.maxVisible+h:b+1;c=f.last();a.firstLastUse&&(c=c.prev());c.toggleClass(a.disabledClass,b===a.total).attr("data-lp",d).find("a").attr("href",e(d));f.last().toggleClass(a.disabledClass,b===a.total);c=f.filter("[data-lp="+b+"]");h="."+[a.nextClass,a.prevClass,a.firstClass,a.lastClass].join(",.");if(!c.not(h).length){var l=b<=n?-a.maxVisible:0;f.not(h).each(function(b){d=b+1+n+l;g(this).attr("data-lp",d).toggle(d<=a.total).find("a").html(d).attr("href",
e(d))});c=f.filter("[data-lp="+b+"]")}c.not(h).addClass(a.activeClass);m.data("settings",a)}function e(e){return a.href.replace(a.hrefVariable,e)}var m=this,a=g.extend({total:0,page:1,maxVisible:null,leaps:!0,href:"javascript:void(0);",hrefVariable:"{{number}}",next:"&raquo;",prev:"&laquo;",firstLastUse:!1,first:"First",last:"Last",wrapClass:"pagination",activeClass:"active",disabledClass:"disabled",nextClass:"next",prevClass:"prev",lastClass:"last",firstClass:"first"},m.data("settings")||{},p||{});
if(0>=a.total)return this;g.isNumeric(a.maxVisible)||a.maxVisible||(a.maxVisible=parseInt(a.total,10));m.data("settings",a);return this.each(function(){var k,b,d=g(this),c=['<ul class="',a.wrapClass,' bootpag">'];a.firstLastUse&&(c=c.concat(['<li data-lp="1" class="',a.firstClass,'"><a href="',e(1),'">',a.first,"</a></li>"]));a.prev&&(c=c.concat(['<li data-lp="1" class="',a.prevClass,'"><a href="',e(1),'">',a.prev,"</a></li>"]));for(b=1;b<=Math.min(a.total,a.maxVisible);b++)c=c.concat(['<li data-lp="',
b,'"><a href="',e(b),'">',b,"</a></li>"]);a.next&&(b=a.leaps&&a.total>a.maxVisible?Math.min(a.maxVisible+1,a.total):2,c=c.concat(['<li data-lp="',b,'" class="',a.nextClass,'"><a href="',e(b),'">',a.next,"</a></li>"]));a.firstLastUse&&(c=c.concat(['<li data-lp="',a.total,'" class="last"><a href="',e(a.total),'">',a.last,"</a></li>"]));c.push("</ul>");d.find("ul.bootpag").remove();d.append(c.join(""));k=d.find("ul.bootpag");d.find("li").click(function(){var b=g(this);b.hasClass(a.disabledClass)||b.hasClass(a.activeClass)||
(b=parseInt(b.attr("data-lp"),10),l(k,b),m.trigger("page",b))});l(k,a.page)})}})(jQuery,window);
