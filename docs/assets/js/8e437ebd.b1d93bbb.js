"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[264],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||n;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6836:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return h}});var o=r(7462),a=r(3366),n=(r(7294),r(3905)),i=["components"],s={slug:"ratos-v1-0-released",title:"RatOS V1.0 Released!",authors:["miklschmidt"],tags:["RatOS","Releases"]},l=void 0,u={permalink:"/blog/ratos-v1-0-released",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-11-14-ratos-v1-0-released.mdx",source:"@site/blog/2021-11-14-ratos-v1-0-released.mdx",title:"RatOS V1.0 Released!",description:"RatOS V1.0 is here!",date:"2021-11-14T00:00:00.000Z",formattedDate:"November 14, 2021",tags:[{label:"RatOS",permalink:"/blog/tags/rat-os"},{label:"Releases",permalink:"/blog/tags/releases"}],readingTime:2.295,truncated:!1,authors:[{name:"Mikkel Schmidt",title:"Creator of RatOS",url:"https://github.com/miklschmidt",imageURL:"https://github.com/miklschmidt.png",key:"miklschmidt"}]},p={authorsImageUrls:[void 0]},c=[{value:"RatOS V1.0 is here!",id:"ratos-v10-is-here",children:[{value:"Mainsail is here!",id:"mainsail-is-here",children:[],level:3},{value:"Automated firmware updates",id:"automated-firmware-updates",children:[],level:3},{value:"RPi as additional MCU.",id:"rpi-as-additional-mcu",children:[],level:3},{value:"More powerful macros",id:"more-powerful-macros",children:[],level:3},{value:"More flexible macros",id:"more-flexible-macros",children:[],level:3},{value:"Updating from V-CoreOS RC 2",id:"updating-from-v-coreos-rc-2",children:[],level:3},{value:"THANK YOU for your support",id:"thank-you-for-your-support",children:[],level:3}],level:2}],d={toc:c};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ratos-v10-is-here"},"RatOS V1.0 is here!"),(0,n.kt)("p",null,"RatOS V1.0 is finally released, it's been a long road to get here, thank you everyone who has been testing and supporting me get this release completed.\nThere's a lot of new exciting features that i'm dying to share with you all."),(0,n.kt)("h3",{id:"mainsail-is-here"},"Mainsail is here!"),(0,n.kt)("p",null,"RatOS now ships with Mainsail as the default UI. The Mainsail team has been teasing a lot of awesome features lately and now RatOS users get them too."),(0,n.kt)("h3",{id:"automated-firmware-updates"},"Automated firmware updates"),(0,n.kt)("p",null,"That's right. RatOS will now flash your board for you everytime klipper is updated.\nThis has been a high priority for me, since much of my time has been spent answering questions about the infamous version mismatch error.\nIt hasn't been very clear to beginners, what they need to do to get things working again, after having updated klipper and getting presented with an error.\nThis is now a thing of the past!"),(0,n.kt)("p",null,"Unfortunately there's an exception for the Octopus Pro 429, since there's currently no way to flash that board automatically.\nRead more about that in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-pro-429#firmware-installation"},"Octopus Pro 429 Board Documentation")),(0,n.kt)("h3",{id:"rpi-as-additional-mcu"},"RPi as additional MCU."),(0,n.kt)("p",null,"Automated firmware updates made it possible to add the RPi as an additional mcu, it's now preconfigured and automatically updated, so you can use\nit for additional GPIO's, ADXL345 or other sensors if you need to. This also opens up for using dual ADXL345's on bed slingers."),(0,n.kt)("h3",{id:"more-powerful-macros"},"More powerful macros"),(0,n.kt)("p",null,"RatOS now ships with the gcode_shell_command.py klipper extension, this allows for macros to compile binaries, pick your printer configuration, generate input shaper graphs and more without you ever having to SSH into your pi. It's been the primary design principle of RatOS from the start that running klipper on your printer should not require knowledge of SSH or Linux, so this is another step in the right direction!"),(0,n.kt)("h3",{id:"more-flexible-macros"},"More flexible macros"),(0,n.kt)("p",null,"We've added a bunch of parameters you can configure for changing the behavior of the built-in RatOS macro's, what your START_PRINT to skip the bed mesh calibration? No problem. Want the carriage to park in the front during pauses? Easy! How about starting your print with a primeline? You've got it! Read more in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/macros"},"Macro Configuration documentation")),(0,n.kt)("h3",{id:"updating-from-v-coreos-rc-2"},"Updating from V-CoreOS RC 2"),(0,n.kt)("p",null,"If you're using V-CoreOS RC 2, take a look at the ",(0,n.kt)("a",{parentName:"p",href:"/changelog#updating-from-v-coreos-rc2"},"Update Guide")," for a smooth transition."),(0,n.kt)("h3",{id:"thank-you-for-your-support"},"THANK YOU for your support"),(0,n.kt)("p",null,"The amount of support and encouragement i've recieved from the community has been heartwarming, and totally makes the long nights worth it!\nThank you for helping and thank you for using RatOS!"),(0,n.kt)("p",null,"If you wish to donate towards a new spool of filament or a cup of coffee you can do so here: ",(0,n.kt)("a",{parentName:"p",href:"https://paypal.me/miklschmidt"},"paypal.me/miklschmidt"),". Thank you very much!"))}h.isMDXComponent=!0}}]);