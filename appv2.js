/*
     ©CopyRight 2013-2022 by OpenSpeedTest.COM. All Rights Reserved. 
     Official Website : https://OpenSpeedTest.COM | Email: support@openspeedtest.com
     Developed by : Vishnu | https://Vishnu.Pro | Email : me@vishnu.pro 
            
     HTML5 Network Performance Estimation Tool -> [JS,XHR,SVG,HTML,CSS]
     Started in 2011 and Moved to OpenSpeedTest.COM Dedicated Project/Domain Name in 2013.
     SpeedTest Script -> 2013 -> Beta | 2015 -> V1 | 2019 ->V2 | 2020 V2.1 | 2021 V2.12 | 2022 V2.5.

     Self-Hosted OpenSpeedTest-Server (iFrame/Nginx) -> 2014.
     OpenSpeedTest-Server (On-premises)
     [Docker] -> V1 2019 | V2 2020 | V2.1 2021 | V2.2 2022
     [Node.js/Electron JS] -> 2020 V1 | 2021 V2 & V2.1 | 2.2 2022
     Android and iOS OpenSpeedTest-Server App V1.2 2022 
     Download -> https://go.openspeedtest.com/Server

     Like this Project? Please Donate NOW & Keep us Alive -> https://go.openspeedtest.com/Donate

     Share — copy and redistribute the material in any medium or format for any purpose, even commercially.
     Read full license terms @ http://go.openspeedtest.com/License
     If you have any Questions, ideas or Comments Please Send it via -> https://go.openspeedtest.com/SendMessage

*/
window.onload=function(){OpenSpeedTest.Start();ostOnload()};
(function(Ta){function g(a){if(!(this instanceof g))return new g(a);this.el=document.getElementById(a)}var n,Aa=function(a){a&&"function"===typeof a&&a()};g.prototype.fade=function(a,c,d){var f="in"===a,q=f?0:1,t=14/c,l=this;f&&(l.el.style.display="block",l.el.style.opacity=q);var m=window.setInterval(function(){q=f?q+t:q-t;l.el.style.opacity=q;0>=q&&(l.el.style.display="none");(0>=q||1<=q)&&window.clearInterval(m,Aa(d))},14)};var Ba=function(a,c,d,f){a/=f;a--;return d*(a*a*a+1)+c},p=function(){this.YourIP=
g("YourIP");this.ipDesk=g("ipDesk");this.ipMob=g("ipMob");this.downSymbolDesk=g("downSymbolDesk");this.upSymbolDesk=g("upSymbolDesk");this.upSymbolMob=g("upSymbolMob");this.downSymbolMob=g("downSymbolMob");this.settingsMob=g("settingsMob");this.settingsDesk=g("settingsDesk");this.oDoLiveStatus=g("oDoLiveStatus");this.ConnectErrorMob=g("ConnectErrorMob");this.ConnectErrorDesk=g("ConnectErrorDesk");this.downResult=g("downResult");this.upRestxt=g("upRestxt");this.pingResult=g("pingResult");this.jitterDesk=
g("jitterDesk");this.pingMobres=g("pingMobres");this.JitterResultMon=g("JitterResultMon");this.JitterResultms=g("JitterResultms");this.UI_Desk=g("UI-Desk");this.UI_Mob=g("UI-Mob");this.oDoTopSpeed=g("oDoTopSpeed");this.startButtonMob=g("startButtonMob");this.startButtonDesk=g("startButtonDesk");this.intro_Desk=g("intro-Desk");this.intro_Mob=g("intro-Mob");this.loader=g("loading_app");this.OpenSpeedtest=g("OpenSpeedtest");this.mainGuagebg_Desk=g("mainGuagebg-Desk");this.mainGuageBlue_Desk=g("mainGuageBlue-Desk");
this.mainGuageWhite_Desk=g("mainGuageWhite-Desk");this.mainGuagebg_Mob=g("mainGuagebg-Mob");this.mainGuageBlue_Mob=g("mainGuageBlue-Mob");this.mainGuageWhite_Mob=g("mainGuageWhite-Mob");this.oDoLiveSpeed=g("oDoLiveSpeed");this.progressStatus_Mob=g("progressStatus-Mob");this.progressStatus_Desk=g("progressStatus-Desk");this.graphc1=g("graphc1");this.graphc2=g("graphc2");this.graphMob2=g("graphMob2");this.graphMob1=g("graphMob1");this.text=g("text");this.scale=[{degree:680,value:0},{degree:570,value:.5},
{degree:460,value:1},{degree:337,value:10},{degree:220,value:100},{degree:115,value:500},{degree:0,value:1E3}];this.polygon=this.chart=this.element="";this.width=200;this.height=50;this.maxValue=0;this.values=[];this.vSteps=5;this.measurements=[];this.points=[]};p.prototype.reset=function(){this.polygon=this.chart=this.element="";this.width=200;this.height=50;this.maxValue=0;this.values=[];this.vSteps=5;this.measurements=[];this.points=[]};p.prototype.ip=function(){"block"===this.ipDesk.el.style.display?
(this.ipDesk.el.style.display="none",this.ipMob.el.style.display="none"):(this.ipDesk.el.style.display="block",this.ipMob.el.style.display="block")};p.prototype.prePing=function(){this.loader.fade("out",500);this.OpenSpeedtest.fade("in",1E3)};p.prototype.app=function(){this.loader.fade("out",500,this.ShowAppIntro())};p.prototype.ShowAppIntro=function(){this.OpenSpeedtest.fade("in",1E3)};p.prototype.userInterface=function(){this.intro_Desk.fade("out",1E3);this.intro_Mob.fade("out",1E3,this.ShowUI())};
p.prototype.ShowUI=function(){this.UI_Desk.fade("in",1E3);this.UI_Mob.fade("in",1E3,function(a){n="Loaded";console.log("Developed by Vishnu. Email --\x3e me@vishnu.pro")})};p.prototype.Symbol=function(a){0==a&&(this.downSymbolMob.el.style.display="block",this.downSymbolDesk.el.style.display="block",this.upSymbolMob.el.style.display="none",this.upSymbolDesk.el.style.display="none");1==a&&(this.downSymbolMob.el.style.display="none",this.downSymbolDesk.el.style.display="none",this.upSymbolMob.el.style.display=
"block",this.upSymbolDesk.el.style.display="block");2==a&&(this.downSymbolMob.el.style.display="none",this.downSymbolDesk.el.style.display="none",this.upSymbolMob.el.style.display="none",this.upSymbolDesk.el.style.display="none")};p.prototype.Graph=function(a,c){function d(m,x){for(l=f.maxValue=0;l<f.values.length;l++)f.values[l]>f.maxValue&&(f.maxValue=f.values[l]);f.maxValue=Math.ceil(f.maxValue);if(1<f.values.length){m="0,"+f.height+" ";for(l=0;l<f.values.length;l++)x=f.values[l]/f.maxValue,x=
(130/(f.values.length-1)*l).toFixed(2)+","+(f.height-f.height*x).toFixed(2)+" ",m+=x;m+="130,"+f.height;f.points=m}for(l=0;l<f.vSteps;l++)f.measurements.push(Math.ceil(f.maxValue/f.vSteps*(l+1)));f.measurements.reverse();for(m=document.getElementsByClassName(t);0<m.length;)m[0].remove();f.polygon=document.createElementNS("http://www.w3.org/2000/svg","polygon");f.polygon.setAttribute("points",f.points);f.polygon.setAttribute("class",t);1<f.values.length&&q.appendChild(f.polygon)}"remove"in Element.prototype||
(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var f=this;if(0===c){var q=this.graphc1.el;var t="line";this.graphMob2.el.style.display="none";this.graphMob1.el.style.display="block"}else q=this.graphc2.el,t="line2",this.graphMob1.el.style.display="none",this.graphMob2.el.style.display="block";isNaN(a)?this.values.push(""):this.values.push(a);var l;0<a&&d(q,a)};p.prototype.progress=function(a,c){var d=this,f=Date.now(),q=setInterval(function(){var t=(Date.now()-
f)/1E3,l=Ba(t,400,400,c),m=Ba(t,400,-400,c);a?(d.progressStatus_Desk.el.style.strokeDashoffset=l,d.progressStatus_Mob.el.style.strokeDashoffset=l):(d.progressStatus_Desk.el.style.strokeDashoffset=m,d.progressStatus_Mob.el.style.strokeDashoffset=m);t>=c&&(clearInterval(q),d.progressStatus_Desk.el.style.strokeDashoffset=800,d.progressStatus_Mob.el.style.strokeDashoffset=800)},14)};p.prototype.mainGuageProgress=function(a){var c=a;0>c&&(c=0);var d=this.getNonlinearDegree(c);0<a&&(this.mainGuageBlue_Desk.el.style.strokeOpacity=
1,this.mainGuageWhite_Desk.el.style.strokeOpacity=1,this.mainGuageBlue_Mob.el.style.strokeOpacity=1,this.mainGuageWhite_Mob.el.style.strokeOpacity=1,this.mainGuageBlue_Desk.el.style.strokeDashoffset=d,this.mainGuageWhite_Desk.el.style.strokeDashoffset=0==d?1:d+1,this.mainGuageBlue_Mob.el.style.strokeDashoffset=d,this.mainGuageWhite_Mob.el.style.strokeDashoffset=0==d?1:d+1);0==d&&1E3<c?(this.mainGuageBlue_Mob.el.style.strokeDashoffset=681<=d?681:d,this.mainGuageWhite_Mob.el.style.strokeDashoffset=
0==d?1:d+1,this.mainGuageWhite_Desk.el.style.strokeDashoffset=0==d?1:d+1,this.mainGuageBlue_Desk.el.style.strokeDashoffset=681<=d?681:d):0==d&&0>=c&&(this.mainGuageBlue_Mob.el.style.strokeDashoffset=681.1,this.mainGuageWhite_Mob.el.style.strokeDashoffset=.1,this.mainGuageWhite_Desk.el.style.strokeDashoffset=.1,this.mainGuageBlue_Desk.el.style.strokeDashoffset=681.1)};p.prototype.showStatus=function(a){this.oDoLiveStatus.el.textContent=a};p.prototype.ConnectionError=function(){this.ConnectErrorMob.el.style.display=
"block";this.ConnectErrorDesk.el.style.display="block"};p.prototype.uploadResult=function(a){1>a&&(this.upRestxt.el.textContent=a.toFixed(3));1<=a&&(this.upRestxt.el.textContent=a.toFixed(1))};p.prototype.pingResults=function(a,c){"Ping"===c&&(1<=a&&1E4>a?(this.pingResult.el.textContent=Math.floor(a),this.pingMobres.el.textContent=Math.floor(a)):0<=a&&1>a&&(this.pingResult.el.textContent=a,this.pingMobres.el.textContent=a));"Error"===c&&(this.oDoLiveSpeed.el.textContent=a)};p.prototype.downloadResult=
function(a){1>a&&(this.downResult.el.textContent=a.toFixed(3));1<=a&&(this.downResult.el.textContent=a.toFixed(1))};p.prototype.jitterResult=function(a,c){"Jitter"===c&&(1<=a&&1E4>a?(this.jitterDesk.el.textContent=Math.floor(a),1<=a&&100>a&&(this.JitterResultMon.el.textContent=Math.floor(a)),100<=a&&((a/1E3).toFixed(1),this.JitterResultMon.el.textContent=1.1)):0<=a&&1>a&&(this.jitterDesk.el.textContent=a,this.JitterResultMon.el.textContent=a))};p.prototype.LiveSpeed=function(a,c){"countDown"===c?
(c=a.toFixed(0),this.oDoLiveSpeed.el.textContent=c):"speedToZero"===c?(c=a.toFixed(1),this.oDoLiveSpeed.el.textContent=c,this.oDoTopSpeed.el.textContent="1000+",this.oDoTopSpeed.el.style.fontSize=16.9,this.oDoTopSpeed.el.style.fill="gray"):"Ping"===c?1<=a&&1E4>a?this.oDoLiveSpeed.el.textContent=Math.floor(a):0<=a&&1>a&&(this.oDoLiveSpeed.el.textContent=a):(0==a&&(c=a.toFixed(1),this.oDoLiveSpeed.el.textContent=c),1>=a&&0<a&&(c=a.toFixed(3),this.oDoLiveSpeed.el.textContent=c),1<a&&(c=a.toFixed(1),
this.oDoLiveSpeed.el.textContent=c),1E3>=a&&(this.oDoTopSpeed.el.textContent="1000+",this.oDoTopSpeed.el.style.fontSize=16.9,this.oDoTopSpeed.el.style.fill="gray"),1001<=a&&(1001<=a&&5E3>a&&(this.oDoTopSpeed.el.textContent="5000+"),5E3<=a&&1E4>a&&(this.oDoTopSpeed.el.textContent="10000+"),1E4<=a&&25E3>a&&(this.oDoTopSpeed.el.textContent="25000+"),25E3<=a&&5E4>a&&(this.oDoTopSpeed.el.textContent="50000+"),5E4<=a&&(this.oDoTopSpeed.el.textContent="100000+"),this.oDoTopSpeed.el.style.fill="#434040",
this.oDoTopSpeed.el.style.fontSize="20px"))};p.prototype.GuageProgresstoZero=function(a,c){var d=this;if(0<=a)var f=Date.now(),q=0-a,t=setInterval(function(){var l=(Date.now()-f)/1E3;var m=l/3;m--;m=q*(m*m*m*m*m+1)+a;d.LiveSpeed(m,"speedToZero");d.mainGuageProgress(m);if(3<=l||0>=m)clearInterval(t),d.LiveSpeed(0,"speedToZero"),d.mainGuageProgress(0),n=c},16)};p.prototype.getNonlinearDegree=function(a){var c=0;if(0==a||0>=a||isNaN(a))return 0;for(;c<this.scale.length;)if(a>this.scale[c].value)c++;
else return this.scale[c-1].degree+(a-this.scale[c-1].value)*(this.scale[c].degree-this.scale[c-1].degree)/(this.scale[c].value-this.scale[c-1].value);return this.scale[this.scale.length-1].degree};var L=function(){this.OverAllTimeAvg=window.performance.now();this.SpeedSamples=[];this.FinalSpeed};L.prototype.reset=function(){this.OverAllTimeAvg=window.performance.now();this.SpeedSamples=[];this.FinalSpeed=0};L.prototype.ArraySum=function(a){return a?a.reduce(function(c,d){if("number"===typeof c&&
"number"===typeof d)return c+d},0):0};L.prototype.AvgSpeed=function(a,c,d){this.timeNow=(window.performance.now()-this.OverAllTimeAvg)/1E3;this.FinalSpeed;this.timeNow>=d-c&&(0<a&&this.SpeedSamples.push(a),this.FinalSpeed=this.ArraySum(this.SpeedSamples)/this.SpeedSamples.length);return this.FinalSpeed};L.prototype.uRandom=function(a,c){for(var d=new Uint32Array(262144),f=[],q=Blob,t=0;t<a;t++){for(var l=t,m=d.length,x=0;x<m;x++)d[x]=4294967296*Math.random();f[l]=d}return new q(f,{type:"application/octet-stream"},
Aa(c))};var $a=function(){function a(){1<=O?(--O,e.LiveSpeed(O,"countDown")):0>=O&&(clearInterval(Ua),17==(I.toLowerCase()+P).length&&f())}function c(){e.ip()}function d(){"openspeedtest.com"===I.toLowerCase()+P?(f(),e.userInterface()):55==Ca&&(f(),e.userInterface())}function f(){function b(){ea=window.performance.now();4===Va&&t()}"widget"!==openChannel&&"web"!==openChannel||fa(1);e.startButtonDesk.el.removeEventListener("click",d);e.startButtonMob.el.removeEventListener("click",d);var k=setInterval(function(){"Loaded"===
n&&(n="busy",Da());"Ping"===n&&(n="busy",e.showStatus("Microseconds"));"Download"===n&&(e.showStatus("Initializing.."),J.reset(),w=Q=0,e.reset(),ha=window.performance.now(),q(),n="initDown");if("Downloading"===n){e.Symbol(0);if(0==R){R=1;e.showStatus("Testing download speed..");var h=(window.performance.now()-ha)/1E3;Ea=h;e.progress(1,dlDuration+2.5);dlDuration+=h}ia=(window.performance.now()-ha)/1E3;l("dl");e.showStatus("Mbps download");e.mainGuageProgress(w);e.LiveSpeed(w);e.Graph(w,0);S=J.AvgSpeed(w,
ja,dlDuration);ia>=dlDuration&&(e.GuageProgresstoZero(w,"Upload"),e.downloadResult(S),ka=K,F=1,n="busy",w=Q=0,J.reset())}"Upload"==n&&1===F&&(e.Symbol(1),n="initup",e.showStatus("Initializing.."),la=J.uRandom(ulDataSize,b));"Uploading"===n&&(1==R&&(R=2,e.showStatus("Testing upload speed.."),w=0,J.reset(),e.reset(),Fa=h=(window.performance.now()-ea)/1E3,e.progress(!1,ulDuration+2.5),ulDuration+=h),e.showStatus("Mbps upload"),G=(window.performance.now()-ea)/1E3,l("up"),e.mainGuageProgress(w),e.LiveSpeed(w),
e.Graph(w,1),T=J.AvgSpeed(w,ma,ulDuration),G>=ulDuration&&1==F&&(na=H,e.uploadResult(T),e.GuageProgresstoZero(w,"SendR"),la=void 0,e.showStatus("All done"),e.Symbol(2),n="busy",F=0));if("SendR"===n){h=document.createElement("div");h.innerHTML='<a xlink:href="https://openspeedtest.com?ref=Offline-Outro&run=5" style="cursor: pointer" target="_blank"></a>';var u=h.querySelector("a");e.oDoLiveSpeed.el.textContent=Ga;var C=document.getElementById("oDoLiveSpeed");u.innerHTML=C.innerHTML;C.innerHTML=h.innerHTML;
location.hostname!=I.toLowerCase()+P?(oa="https://ims.net.id/"+I.toLowerCase()+P+"https://ims.net.id/"+S.toFixed(3)+"&u="+T.toFixed(3)+"&p="+pa+"&j="+qa+"&dd="+(ka/1048576).toFixed(3)+"&ud="+(na/1048576).toFixed(3),h=document.getElementById("resultsData"),h.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",oa),h.setAttribute("target","_blank"),saveData&&fa(5)):fa(3);n="busy";clearInterval(k)}},100)}function q(){for(var b=0;b<dlThreads;b++)setTimeout(function(k){m(k)},dlDelay*b,b)}function t(){for(var b=
0;b<ulThreads;b++)setTimeout(function(k){x(k)},ulDelay*b,b)}function l(b){if("dl"===b){var k=1E3*ia;k>1E3*Ea+ja/2*1E3&&0===Ha&&(Ha=1,U*=.01,M*=.01,V=k+1E4);k>=V&&V<Wa&&(V+=1E4,U*=.01,M*=.01);Ia=0>=K?0:K-Ja;Ja=K;M+=Ia;Ka=ra=k-ra;ra=k;U+=Ka;0<M&&(w=Q=M/U/125*upAdjust)}"up"===b&&(b=1E3*G,b>1E3*Fa+ma/2*1E3&&0===La&&(La=1,W*=.1,N*=.1,X=b+1E4),b>=X&&X<Xa&&(X+=1E4,W*=.1,N*=.1),Ma=0>=H?0:H-Na,Na=H,N+=Ma,Oa=sa=b-sa,sa=b,W+=Oa,0<N&&(w=Q=N/W/125*upAdjust))}function m(b){var k=0;v[b]=new XMLHttpRequest;v[b].open("GET",
ta.Download+"?n="+Math.random(),!0);v[b].onprogress=function(h){if(1===F)return v[b].abort(),v[b]=null,v[b]=void 0,delete v[b],!1;"initDown"==n&&(n="Downloading");var u=0>=h.loaded?0:h.loaded-k;if(isNaN(u)||!isFinite(u)||0>u)return!1;K+=u;k=h.loaded};v[b].onload=function(h){0===k&&(K+=h.total);"initDown"==n&&(n="Downloading");v[b]&&(v[b].abort(),v[b]=null,v[b]=void 0,delete v[b]);0===F&&m(b)};v[b].onerror=function(h){0===F&&m(b)};v[b].responseType="arraybuffer";v[b].send()}function x(b){var k=0;r[b]=
new XMLHttpRequest;r[b].open("POST",ta.Upload+"?n="+Math.random(),!0);r[b].upload.onprogress=function(h){"initup"==n&&void 0===u&&(n="Uploading");if(G>=ulDuration)return r[b].abort(),r[b]=null,r[b]=void 0,delete r[b],!1;var u=0>=h.loaded?0:h.loaded-k;if(isNaN(u)||!isFinite(u)||0>u)return!1;H+=u;k=h.loaded};r[b].onload=function(){if(0===k&&(H+=1048576*ulDataSize,G>=ulDuration))return r[b].abort(),r[b]=null,r[b]=void 0,delete r[b],!1;if("initup"==n&&void 0===h){var h;n="Uploading"}r[b]&&(r[b].abort(),
r[b]=null,r[b]=void 0,delete r[b]);G<=ulDuration&&x(b)};r[b].onerror=function(h){G<=ulDuration&&x(b)};r[b].setRequestHeader("Content-Type","application/octet-stream");0<b&&17E3>=H||r[b].send(la)}function Da(){n="Ping";performance.clearResourceTimings();if(ua<Ya-1)ua++,"Stop"!=Y&&Za(openSpeedTestServerList[ua],Da);else if(1<=Z.length){var b=Math.min.apply(Math,va),k=va.indexOf(b);ta=Z[k];aa=b;wa=Pa[k];Y="Busy";e.LiveSpeed(aa,"Ping");e.pingResults(aa,"Ping");e.jitterResult(wa,"Jitter");pa=aa;qa=wa;
n="Download"}else Z.Download||(e.ConnectionError(),e.pingResults("Network Error","Error"))}function Za(b,k){function h(){if(C<pingSamples)C++,"Stop"!=Y&&u();else{if(1<A.length){var B=Math.min.apply(Math,Qa),xa=Math.min.apply(Math,A);va.push(xa);Z.push(b);Pa.push(B)}"function"===typeof k&&k()}}function u(){var B=new XMLHttpRequest;"Stop"!=Y&&B.abort();B.open(pingMethod,b[pingFile]+"?n="+Math.random(),!0);B.timeout=5E3;var xa=window.performance.now();B.send();B.onload=function(){if(200===this.status&&
4===this.readyState){var D=Math.floor(window.performance.now()-xa),E=performance.getEntries();E=E[E.length-1];D="xmlhttprequest"===E.initiatorType?parseFloat(E.duration.toFixed(1)):D;0>=D?A.push(.1):A.push(D);1<A.length&&(E=Math.abs(A[A.length-1]-A[A.length-2]).toFixed(1),Qa.push(E),e.LiveSpeed(D,"Ping"),e.pingResults(D,"Ping"),e.jitterResult(E,"Jitter"));h()}404===this.status&&4===this.readyState&&(C++,console.log("404 error"),h())};B.onerror=function(D){C++;console.log("error");h()};B.ontimeout=
function(D){C++;console.log("error");h()}}var C=0,A=[],Qa=[];u()}var J=new L,e=new p;e.app();var la,Ra=location.hostname,Sa,ya,S,T,ka,na,pa,qa,ba,ca,v=[],Q,K=0,H=0,w=0,G,ia,ha,ea,oa,F=0,ma=.6*ulDuration,ja=.6*dlDuration;7<=.6*ulDuration&&(ma=7);7<=.6*dlDuration&&(ja=7);var y=function(b){var k={},h=document.createElement("a");h.href=b;b=h.search.substring(1).split("&");for(h=0;h<b.length;h++){var u=b[h].split("=");k[u[0]]=decodeURIComponent(u[1])}return k}(window.location.href),z=parseInt(y.stress);
y.stress&&stressTest&&("low"===y.stress&&(ulDuration=dlDuration=300),"medium"===y.stress&&(ulDuration=dlDuration=600),"high"===y.stress&&(ulDuration=dlDuration=900),"veryhigh"===y.stress&&(ulDuration=dlDuration=1800),"extreem"===y.stress&&(ulDuration=dlDuration=3600),12<z&&(ulDuration=dlDuration=z));z=parseInt(y.run);var za;"string"===typeof y.run&&(za=0<=z?z:0);z=parseInt(y.clean);"string"===typeof y.clean&&(0<=z?5>z&&(upAdjust=1+z/100,dlAdjust=1+z/100):dlAdjust=upAdjust=1);var R=0;if("undefined"!==
typeof za){e.userInterface();var O=Math.ceil(Math.abs(za));e.showStatus("Automatic Test Starts in ...");var Ua=setInterval(a,1E3)}e.settingsMob.el.addEventListener("click",c);e.settingsDesk.el.addEventListener("click",c);var I="OpenSpeedTest",P=".com",Ga=I+"\u2122",Ca;e.startButtonDesk.el.addEventListener("click",d);e.startButtonMob.el.addEventListener("click",d);var Va=I.indexOf("S"),da=0;"web"===openChannel&&(da="https://ims.net.id/");"widget"===openChannel&&(da="https://ims.net.id/");
"selfwidget"===openChannel&&(da="https://ims.net.id/",Ra=ya=domainx);"dev"===openChannel&&(Ca=e.text.el.href.length+Ga.length);var Ia=0,Ja=0,M=0,Ka=0,ra=0,U=0,Ha=0,Ea,Fa,Ma=0,Na=0,N=0,Oa=0,sa=0,W=0,La=0,V,Wa=1E3*dlDuration-6E3,X,Xa=1E3*ulDuration-6E3,r=[],ta,aa,wa,Y,ua=-1,va=[],Z=[],Pa=[],Ya=openSpeedTestServerList.length,fa=function(b){var k=new XMLHttpRequest,h="//openspeedtest.com/connect.php";1==b&&(h="//openspeedtest.scdn1.secure.raxcdn.com/get_ip.php");5==b&&(h=saveDataURL);
k.open("POST",h,!0);k.setRequestHeader("Content-type","application/x-www-form-urlencoded");k.onreadystatechange=function(){4==k.readyState&&200==k.status&&(ca=k.responseText.trim(),2==b&&(Sa=ca),1==b&&(ya=ca),3==b&&setTimeout(function(){location.href=da+ca},1500))};2==b&&(ba="r=n");3==b&&(ba="r=l&d="+S+"&u="+T+"&dd="+ka/1048576+"&ud="+na/1048576+"&p="+pa+"&do="+Ra+"&S="+Sa+"&sip="+ya+"&jit="+qa);5==b&&(ba=oa);k.send(ba)}};Ta.Start=function(){new $a}})(window.OpenSpeedTest=window.OpenSpeedTest||{});
