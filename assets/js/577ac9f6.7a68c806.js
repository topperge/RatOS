"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6510],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7959:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905));const i={},o="Slicer Configuration",l={unversionedId:"slicers",id:"version-1.2.x/slicers",title:"Slicer Configuration",description:"RatOS comes with STARTPRINT and ENDPRINT macros that you can call directly from your slicers. This way the printer knows how to start a print, and you can there easily switch between slicers without worrying if you changed anything in another slicer.",source:"@site/versioned_docs/version-1.2.x/slicers.md",sourceDirName:".",slug:"/slicers",permalink:"/docs/1.2.x/slicers",draft:!1,editUrl:"https://github.com/Rat-OS/RatOS/edit/v2.x/site/versioned_docs/version-1.2.x/slicers.md",tags:[],version:"1.2.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Initial Configuration",permalink:"/docs/1.2.x/configuration"},next:{title:"Troubleshooting",permalink:"/docs/1.2.x/troubleshooting"}},s={},p=[{value:"Cura",id:"cura",level:2},{value:"PrusaSlicer",id:"prusaslicer",level:2},{value:"SuperSlicer",id:"superslicer",level:2},{value:"Simplify 3D",id:"simplify-3d",level:2},{value:"IdeaMaker",id:"ideamaker",level:2},{value:"Slicer thumbnails",id:"slicer-thumbnails",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slicer-configuration"},"Slicer Configuration"),(0,a.kt)("h1",{id:"macros"},"Macros"),(0,a.kt)("p",null,"RatOS comes with START_PRINT and END_PRINT macros that you can call directly from your slicers. This way the printer knows how to start a print, and you can there easily switch between slicers without worrying if you changed anything in another slicer.\nThe g-code for these macros are found in ",(0,a.kt)("inlineCode",{parentName:"p"},"config/printers/[PRINTER_NAME]/macros.cfg")),(0,a.kt)("h2",{id:"cura"},"Cura"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is the ONLY gcode you need, delete everything else. Copy paste the following ",(0,a.kt)("strong",{parentName:"p"},"as is"),".")),(0,a.kt)("p",null,"Machine start gcode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"START_PRINT EXTRUDER_TEMP={material_print_temperature_layer_0} BED_TEMP={material_bed_temperature_layer_0}\n")),(0,a.kt)("p",null,"machine end gcode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"END_PRINT\n")),(0,a.kt)("h2",{id:"prusaslicer"},"PrusaSlicer"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is the ONLY gcode you need, delete everything else. Copy paste the following ",(0,a.kt)("strong",{parentName:"p"},"as is"),".")),(0,a.kt)("p",null,"Start GCode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"M190 S0 ; Prevents prusaslicer from prepending m190 to the gcode ruining our macro\nM109 S0 ; Prevents prusaslicer from prepending m109 to the gcode ruining our macro\nSTART_PRINT EXTRUDER_TEMP=[first_layer_temperature] BED_TEMP=[first_layer_bed_temperature]\n")),(0,a.kt)("p",null,"End GCode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"END_PRINT\n")),(0,a.kt)("h2",{id:"superslicer"},"SuperSlicer"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'You should be using "Klipper" as the gcode flavor and have the "Only custom Start G-Code" box checked in Printer Settings -> Custom G-Code')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is the ONLY gcode you need, delete everything else. Copy paste the following ",(0,a.kt)("strong",{parentName:"p"},"as is"),".")),(0,a.kt)("p",null,"Start GCode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"START_PRINT EXTRUDER_TEMP=[first_layer_temperature] BED_TEMP=[first_layer_bed_temperature]\n")),(0,a.kt)("p",null,"End GCode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"END_PRINT\n")),(0,a.kt)("h2",{id:"simplify-3d"},"Simplify 3D"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is the ONLY gcode you need, delete everything else. Copy paste the following ",(0,a.kt)("strong",{parentName:"p"},"as is"),".")),(0,a.kt)("p",null,"Start GCode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"START_PRINT EXTRUDER_TEMP=[extruder0_temperature] BED_TEMP=[bed0_temperature]\n")),(0,a.kt)("p",null,"End GCode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"END_PRINT\n")),(0,a.kt)("h2",{id:"ideamaker"},"IdeaMaker"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is the ONLY gcode you need, delete everything else. Copy paste the following ",(0,a.kt)("strong",{parentName:"p"},"as is"),".")),(0,a.kt)("p",null,"Start GCode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"START_PRINT EXTRUDER_TEMP={temperature_extruder1} BED_TEMP={temperature_heatbed}\n")),(0,a.kt)("p",null,"End GCode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"END_PRINT\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"IdeaMaker will complain there's no heating commands, you can safely ignore this.")),(0,a.kt)("h2",{id:"slicer-thumbnails"},"Slicer thumbnails"),(0,a.kt)("p",null,"See the Mainsail documentation: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mainsail.xyz/quicktips/thumbnails"},"G-Code Thumbnails in Mainsail")))}u.isMDXComponent=!0}}]);