// build time:Sun May 24 2020 22:25:34 GMT+0800 (China Standard Time)
if(window.$&&window.$.Velocity)window.Velocity=window.$.Velocity;NexT.motion={};NexT.motion.integrator={queue:[],cursor:-1,init:function(){this.queue=[];this.cursor=-1;return this},add:function(t){this.queue.push(t);return this},next:function(){this.cursor++;var t=this.queue[this.cursor];typeof t==="function"&&t(NexT.motion.integrator)},bootstrap:function(){this.next()}};NexT.motion.middleWares={logo:function(t){var e=[];var o=document.querySelector(".brand");var i=document.querySelector(".custom-logo-image");var n=document.querySelector(".site-title");var r=document.querySelector(".site-subtitle");var c=document.querySelector(".logo-line-before i");var s=document.querySelector(".logo-line-after i");o&&e.push({e:o,p:{opacity:1},o:{duration:200}});function u(t,e){return{e:t,p:{translateX:e},o:{duration:500,sequenceQueue:false}}}function a(){e.push({e:i,p:{opacity:1,top:0},o:{duration:200}})}CONFIG.scheme==="Mist"&&c&&s&&e.push(u(c,"100%"),u(s,"-100%"));CONFIG.scheme==="Muse"&&i&&a();n&&e.push({e:n,p:{opacity:1,top:0},o:{duration:200}});r&&e.push({e:r,p:{opacity:1,top:0},o:{duration:200}});(CONFIG.scheme==="Pisces"||CONFIG.scheme==="Gemini")&&i&&a();if(e.length>0){e[e.length-1].o.complete=function(){t.next()};Velocity.RunSequence(e)}else{t.next()}if(CONFIG.motion.async){t.next()}},menu:function(t){Velocity(document.querySelectorAll(".menu-item"),"transition.slideDownIn",{display:null,duration:200,complete:function(){t.next()}});if(CONFIG.motion.async){t.next()}},postList:function(t){var e=document.querySelectorAll(".post-block, .pagination, .comments");var o=CONFIG.motion.transition.post_block;var i=document.querySelectorAll(".post-header");var n=CONFIG.motion.transition.post_header;var r=document.querySelectorAll(".post-body");var c=CONFIG.motion.transition.post_body;var s=document.querySelectorAll(".collection-header");var u=CONFIG.motion.transition.coll_header;var a=e.length>0;if(a){var l=window.postMotionOptions||{stagger:100,drag:true,complete:function(){t.next()}};if(CONFIG.motion.transition.post_block){Velocity(e,"transition."+o,l)}if(CONFIG.motion.transition.post_header){Velocity(i,"transition."+n,l)}if(CONFIG.motion.transition.post_body){Velocity(r,"transition."+c,l)}if(CONFIG.motion.transition.coll_header){Velocity(s,"transition."+u,l)}}if(CONFIG.scheme==="Pisces"||CONFIG.scheme==="Gemini"){t.next()}},sidebar:function(t){var e=document.querySelector(".sidebar-inner");var o=CONFIG.motion.transition.sidebar;if(o&&(CONFIG.scheme==="Pisces"||CONFIG.scheme==="Gemini")){Velocity(e,"transition."+o,{display:null,duration:200,complete:function(){e.style.transform="initial"}})}t.next()}};
//rebuild by neat 