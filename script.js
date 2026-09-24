var $=function(q){return document.querySelector(q)};
var S=[
{k:"shoot",t:"Video shoot & editing",c:"#ff4d8d",d:"Cinematic shoots, sharp cuts, colour grading and sound design for reels, ads and long form.",i:'<path d="M3 7h12v10H3zM15 10l6-3v10l-6-3"/>'},
{k:"ai",t:"AI video generation",c:"#4de1ff",d:"Text and image to video, AI actors and animated worlds built in days instead of weeks.",i:'<path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"/>'},
{k:"web",t:"Web development",c:"#ffb84d",d:"Fast, responsive, animated sites and landing pages that turn viewers into customers.",i:'<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>'},
{k:"collab",t:"Collaborations",c:"#b04dff",d:"Co-create with brands and creators: campaigns, series and launches with a shared goal.",i:'<circle cx="9" cy="9" r="4"/><circle cx="15" cy="15" r="4"/>'}];
var W=[
{s:"shoot",t:"Sunrise Street Reel",d:"Documentary-style travel reel shot handheld, graded warm.",g:["#ff4d8d","#ffb84d"]},
{s:"shoot",t:"Studio Product Spot",d:"30 second product ad with macro lighting and sound design.",g:["#ff4d8d","#7a4dff"]},
{s:"shoot",t:"Podcast Highlights",d:"Multi-cam edit cut into vertical clips with captions.",g:["#ffb84d","#ff4d8d"]},
{s:"ai",t:"Neon City Dreams",d:"Fully AI-generated sci-fi short with consistent characters.",g:["#4de1ff","#b04dff"]},
{s:"ai",t:"AI Brand Mascot",d:"Animated mascot that speaks in ten languages.",g:["#4de1ff","#4dff9b"]},
{s:"ai",t:"Fantasy Trailer",d:"Concept trailer generated from a script in two days.",g:["#b04dff","#ff4d8d"]},
{s:"web",t:"Creator Portfolio Site",d:"Animated single-page site with a video showreel.",g:["#ffb84d","#4de1ff"],code:'<section class="hero">\n  <h1>Hello</h1>\n</section>'},
{s:"web",t:"Launch Landing Page",d:"Conversion-focused page with interactive product demo.",g:["#4dff9b","#4de1ff"],code:"const cta = $('.buy');\ncta.onclick = launch;"},
{s:"collab",t:"Brand x Creator Series",d:"Six-episode branded series co-produced with a startup.",g:["#b04dff","#ffb84d"]},
{s:"collab",t:"Music Visual Collab",d:"AI visuals and live footage for an indie artist's release.",g:["#ff4d8d","#4de1ff"]}];
var K=[["Video editing",95],["Colour grading",88],["AI video tools",90],["Front-end development",85],["Motion graphics",78]];
var T=["Premiere Pro","DaVinci Resolve","After Effects","Runway","Kling","Midjourney","HTML","CSS","JavaScript","React","Figma","Sound design"];
var C=[
{n:"Nova Coffee",t:"Brand film",v:120,u:"K views",d:"A 60 second launch film for a local roastery.",g:["#ffb84d","#ff4d8d"]},
{n:"Pixel Pulse Games",t:"AI trailer",v:48,u:"K views",d:"AI-generated trailer for an indie game announcement.",g:["#4de1ff","#b04dff"]},
{n:"Fit Tribe",t:"Creator series",v:8,u:" episodes",d:"Weekly fitness series shot, edited and captioned.",g:["#4dff9b","#4de1ff"]},
{n:"Loom Studio",t:"Website",v:35,u:"% more leads",d:"New animated site with a booking flow.",g:["#b04dff","#ff4d8d"]}];
var L={all:"All",shoot:"Shoot & edit",ai:"AI video",web:"Web",collab:"Collabs"};
function thumb(w){var g=w.g;return '<div class="thumb" style="background:linear-gradient(135deg,'+g[0]+'33,'+g[1]+'33),#0f0d1c"><div class="sh" style="background:'+g[0]+';left:-10%;top:-20%"></div><div class="sh" style="background:'+g[1]+';right:-10%;bottom:-30%;animation-delay:2s"></div>'+(w.code?'<div class="code">'+w.code.replace(/</g,"&lt;")+'</div>':'')+'<div class="play"></div></div>'}
function openM(h){$("#mbox").innerHTML=h;$("#modal").classList.add("open")}
var page=document.body.dataset.page;
document.querySelectorAll(".links a[data-p]").forEach(function(a){a.classList.toggle("on",a.dataset.p==page)});

/* home */
if($("#svc")){
$("#svc").innerHTML=S.map(function(x){return '<a class="card rv" href="portfolio.html?f='+x.k+'" style="--cc:'+x.c+';display:block"><div class="ico"><svg viewBox="0 0 24 24">'+x.i+'</svg></div><h3>'+x.t+'</h3><p>'+x.d+'</p></a>'}).join("");
$("#bars").innerHTML=K.map(function(k){return '<div class="sk"><div><span>'+k[0]+'</span><span>'+k[1]+'%</span></div><div class="bar"><i style="--w:'+k[1]+'%"></i></div></div>'}).join("");
$("#tools").innerHTML=T.map(function(t){return '<span>'+t+'</span>'}).join("");
$("#cl").innerHTML=C.map(function(c){return '<div class="work rv" style="animation:none">'+thumb(c)+'<div class="meta"><small>'+c.t+' with '+c.n+'</small><div class="stat" data-n="'+c.v+'" data-u="'+c.u+'">0'+c.u+'</div><p style="color:var(--mu);font-size:.9rem;margin-top:6px">'+c.d+'</p></div></div>'}).join("");
var wv=$("#wave");for(var i=0;i<44;i++){var e=document.createElement("i");e.style.setProperty("--h",(25+Math.abs(Math.sin(i*.55))*70)+"%");e.style.animationDelay=(i*.06)+"s";wv.appendChild(e)}
var words=["cinematic videos","AI-generated worlds","fast websites","great collaborations"],wi=0,ci=0,del=false,tp=$("#typed");
(function tick(){var w=words[wi];tp.textContent=w.slice(0,ci);
if(!del&&ci==w.length){del=true;return setTimeout(tick,1400)}
if(del&&ci==0){del=false;wi=(wi+1)%words.length}
ci+=del?-1:1;setTimeout(tick,del?35:75)})();
$("#form").addEventListener("submit",function(e){e.preventDefault();
var b="Name: "+$("#n").value+"\nEmail: "+$("#e").value+"\nService: "+$("#s").value+"\n\n"+$("#m").value;
$("#ok").classList.add("show");
location.href="mailto:hello@veeruspeaks.com?subject="+encodeURIComponent("New project: "+$("#s").value)+"&body="+encodeURIComponent(b)});
}

/* portfolio */
if($("#works")){
var f=new URLSearchParams(location.search).get("f");if(!L[f])f="all";
$("#filters").innerHTML=Object.keys(L).map(function(k){return '<button class="chip'+(k==f?" on":"")+'" data-f="'+k+'">'+L[k]+'</button>'}).join("");
var draw=function(){$("#works").innerHTML=W.map(function(w,i){return '<div class="work'+(f!="all"&&w.s!=f?" hide":"")+'" style="animation-delay:'+(i*.05)+'s" data-w="'+i+'" tabindex="0">'+thumb(w)+'<div class="meta"><small>'+L[w.s]+'</small><h3>'+w.t+'</h3></div></div>'}).join("")};
draw();
document.addEventListener("click",function(e){
var c=e.target.closest("[data-f]");if(c){f=c.dataset.f;document.querySelectorAll(".chip").forEach(function(x){x.classList.toggle("on",x==c)});draw();return}
var w=e.target.closest("[data-w]");if(w){var x=W[w.dataset.w];openM(thumb(x)+'<div class="meta"><small>'+L[x.s]+'</small><h3>'+x.t+'</h3><p>'+x.d+'</p><a class="btn p" style="display:inline-block" href="index.html#contact">Get something like this</a></div>')}});
document.addEventListener("keydown",function(e){if(e.key=="Enter"&&e.target.dataset&&e.target.dataset.w)e.target.click()});
}
document.addEventListener("click",function(e){if(e.target.id=="modal")$("#modal").classList.remove("open")});
document.addEventListener("keydown",function(e){if(e.key=="Escape")$("#modal").classList.remove("open")});

/* reveal + count-up */
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(!x.isIntersecting)return;var t=x.target;t.classList.add("in");io.unobserve(t);
t.querySelectorAll(".stat").forEach(function(s){var n=+s.dataset.n,st=performance.now();(function up(now){var p=Math.min((now-st)/1400,1);s.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s.dataset.u;if(p<1)requestAnimationFrame(up)})(st)})})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});

/* tilt + glow */
document.addEventListener("pointermove",function(e){var g=$("#glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px";
var c=e.target.closest&&e.target.closest(".card");if(c){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(700px) rotateY("+x*14+"deg) rotateX("+-y*14+"deg) scale(1.03)"}});
document.addEventListener("pointerout",function(e){var c=e.target.closest&&e.target.closest(".card");if(c)c.style.transform=""});

/* particles */
var cv=$("#bg"),cx=cv.getContext("2d"),P=[],mq=matchMedia("(prefers-reduced-motion:reduce)");
function rs(){cv.width=innerWidth;cv.height=innerHeight}rs();addEventListener("resize",rs);
for(var i=0;i<60;i++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*2+.5,a:Math.random()*6.28,s:Math.random()*.4+.1,h:[340,190,38][i%3]});
(function loop(){cx.clearRect(0,0,cv.width,cv.height);P.forEach(function(p){p.a+=.004;p.x+=Math.cos(p.a)*p.s;p.y+=Math.sin(p.a)*p.s;
if(p.x<0)p.x=cv.width;if(p.x>cv.width)p.x=0;if(p.y<0)p.y=cv.height;if(p.y>cv.height)p.y=0;
cx.beginPath();cx.arc(p.x,p.y,p.r+Math.sin(p.a*6)*.6,0,6.28);cx.fillStyle="hsla("+p.h+",90%,65%,.55)";cx.fill()});
if(!mq.matches)requestAnimationFrame(loop)})();
