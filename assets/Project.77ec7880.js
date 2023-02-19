import{_ as d,a as g}from"./index.c0cb20fe.js";import{o as s,c as a,a as e,t as l,F as _,i as p,j as c,n as f,r as w,b as i}from"./vendor.bfb1cb06.js";var v="/assets/gradient-animator.49086c96.mp4",x="/assets/clean-tab.16263372.png",y="/assets/faceit.aebbb14f.png",S="/assets/memoji_1.bcc2a194.png",k="/assets/portfolio.31f26c21.png",C="/assets/study-app.97dbbaf3.png";const j={name:"Project",props:["title","description","techs","image","video","github","demo"],data(){return{techColorMap:{TailwindCSS:["bg-cyan-300","shadow-cyan-400/50","text-white"],"Vue.JS":["bg-green-400","shadow-green-500/50","text-green-50"],"Node.JS":["bg-yellow-400","shadow-yellow-500/50","text-yellow-700"]},buttonColor:"white"}},mounted(){setInterval(()=>{localStorage.theme==="dark"?this.buttonColor="white":localStorage.theme==="light"&&(this.buttonColor="#1C1C1C")},10)},computed:{imageUrl(){return new URL({"../assets/clean-tab.png":x,"../assets/faceit.png":y,"../assets/memoji_1.png":S,"../assets/memoji_hey.png":g,"../assets/portfolio.png":k,"../assets/study-app.png":C}[`../assets/${this.image}.png`],self.location).href},videoUrl(){return new URL({"../assets/gradient-animator.mp4":v}[`../assets/${this.video}.mp4`],self.location).href}}},D={class:"flex flex-col xl:flex-row justify-between items-center w-3/4 bg-neutral-200 text-neutral-700 dark:bg-neutral-700 rounded-xl dark:text-white"},I={class:"pl-4 xl:w-4/6 font-semibold flex flex-col h-5/6 justify-around"},P={class:"mb-3"},V={class:"text-4xl font-semibold py-4 pr-8"},T={class:"mt-2 w-full pr-8 font-light"},J={class:"font-semibold border-b-2 border-green-400 w-fit mb-3"},U=["href"],N={class:"font-semibold border-b-2 border-green-400 w-fit"},A=["href"],B={class:"mt-6 pb-4 flex items-center w-3/4 flex-wrap lg:flex-nowrap"},F=["src","alt"],$={key:1,muted:"",autoplay:"",loop:"",width:"480",height:"270",class:"w-full xl:w-[30rem] xl:my-4 rounded-b-xl md:rounded-xl xl:mr-4"},G=["src"];function L(m,h,t,b,n,r){return s(),a("div",D,[e("aside",I,[e("div",P,[e("p",V,l(t.title),1),e("p",T,l(t.description),1)]),e("div",null,[e("p",J,[e("a",{href:t.demo,target:"_blank"}," Open Website ",8,U)]),e("p",N,[e("a",{href:t.github,target:"_blank"}," View the source-code ",8,A)])]),e("ul",B,[(s(!0),a(_,null,p(t.techs,(o,u)=>(s(),a("div",{class:"flex",key:u},[e("li",{class:f(["shadow-lg px-3 py-1 rounded-xl mr-3 lg:mb-0 my-2",n.techColorMap[o]])},l(o),3)]))),128))])]),t.image?(s(),a("img",{key:0,src:r.imageUrl,alt:t.image,width:"480",height:"270",class:"w-full xl:w-[30rem] xl:my-4 rounded-b-xl md:rounded-xl xl:mr-4"},null,8,F)):c("",!0),t.video?(s(),a("video",$,[e("source",{src:r.videoUrl,type:"video/mp4"},null,8,G)])):c("",!0)])}var M=d(j,[["render",L]]);const O={name:"Projects",components:{ProjectItem:M}},R={class:"flex flex-col md:w-10/12 py-12 md:my-0 items-center md:items-start overflow-y-scroll md:overflow-y-visible lg:w-4/5 lg:ml-16 m-auto md:ml-0 text-neutral-900 dark:text-white"},z=e("h1",{class:"text-6xl mb-12 font-bold font-serif"},"Projects",-1),E={id:"hero",class:"font-serif flex flex-col items-center md:items-start w-fit overflow-x-hidden"};function W(m,h,t,b,n,r){const o=w("ProjectItem");return s(),a("div",R,[z,e("div",E,[i(o,{class:"mb-12",title:"Gradient Animator",description:"Gradient Animator allows you to create and animate those cool looking modern gradients and get the CSS code right away or pick one of the pre-made gradients.",techs:["Vue.JS","TailwindCSS"],github:"https://github.com/DavidDrob/gradient-animator",demo:"https://gradient-tool-daviddrob.vercel.app/",video:"gradient-animator"},null,8,["techs"]),i(o,{class:"mb-12",title:"Clean Tab",description:"Clean Tab is a chromium extension that allows you to style a new tab in your chromium browser. It also shows the current weather in you area.",techs:["Vue.JS"],github:"https://github.com/DavidDrob/clean-tab",demo:"https://github.com/DavidDrob/clean-tab",image:"clean-tab"},null,8,["techs"]),i(o,{class:"mb-12",title:"Faceit Bot",description:"This discord bot fetches the data about a users CS:GO statistics, like his/her region rank, win rate, statistics on a specific map, etc ... The bot uses the Faceit API to fetch data and can be added by anyone to their discord server for free.",techs:["Node.JS"],github:"https://github.com/DavidDrob/faceit-discord-bot",demo:"https://top.gg/bot/816070908782575656",image:"faceit"},null,8,["techs"]),i(o,{class:"mb-12",title:"Study App",description:"This (old) Single-page application I made allows you to study maths with the 10 provided problems. You can draw on the canvas, check if you have the correct solution, search for problems (from 0 to 9) or get a new random problem.",techs:["Vue.JS"],github:"https://github.com/DavidDrob/study-app",demo:"https://daviddrob.github.io/study-app/",image:"study-app"},null,8,["techs"]),i(o,{title:"Personal Portfolio",description:"It's the website you are looking at right now. I made this to brush up my UI design skills and to also have a website for presenting my projects in a simple and modern way.",techs:["Vue.JS","TailwindCSS"],github:"https://github.com/DavidDrob/DavidDrob.github.io",demo:"/",image:"portfolio"},null,8,["techs"])])])}var H=d(O,[["render",W]]);export{H as default};
