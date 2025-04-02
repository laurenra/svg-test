var svga;(()=>{"use strict";var e,t,l,i,o,n,s,r,g,c,d,a,u;const m=new class{constructor(){this.isShowSvg=!1,this.fileLocation="",this.circleFillAttrRGB={originalColor:"",isSaved:!1},this.circleFillStyleRGB={originalColor:"",isSaved:!1},this.svgCountryStyleRGB={originalColor:"",isSaved:!1},this.svgRoomStyleRGB={originalColor:"",isSaved:!1},this.svgBeckhamRoomStyleRGB={originalColor:"",isSaved:!1}}setDefaults(){this.isShowSvg=!1}svgCircleFillAttr(e){const t=document.getElementById(e);if(t){getComputedStyle(t).fill;let e=t.getAttribute("fill");this.circleFillAttrRGB.isSaved||(this.circleFillAttrRGB={originalColor:null!=e?e:"",isSaved:!0}),e==this.circleFillAttrRGB.originalColor?t.setAttribute("fill","green"):t.setAttribute("fill",this.circleFillAttrRGB.originalColor)}}svgCircleFillStyle(e){const t=document.getElementById(e);if(t){const e=getComputedStyle(t).fill;t.getAttribute("fill"),this.circleFillStyleRGB.isSaved||(this.circleFillStyleRGB={originalColor:null!=e?e:"",isSaved:!0}),e==this.circleFillStyleRGB.originalColor?t.style.fill="blue":t.style.fill=this.circleFillStyleRGB.originalColor}}svgTriangle(){const e=document.getElementById("triangle1");e&&(getComputedStyle(e).fill,"lime"==e.getAttribute("fill")?e.setAttribute("fill","lightskyblue"):e.setAttribute("fill","lime"))}svgHexagon(e){const t=document.getElementById(e);t&&(getComputedStyle(t).fill,"orchid"==t.getAttribute("fill")?t.setAttribute("fill","aqua"):t.setAttribute("fill","orchid"))}svgStar(){const e=document.getElementById("star1");e&&(getComputedStyle(e).fill,"coral"==e.getAttribute("fill")?e.setAttribute("fill","yellow"):e.setAttribute("fill","coral"))}svgCountryStyle(e){const t=document.getElementById(e);if(t){const e=getComputedStyle(t).fill;t.getAttribute("fill"),this.svgCountryStyleRGB.isSaved||(this.svgCountryStyleRGB={originalColor:null!=e?e:"",isSaved:!0}),e==this.svgCountryStyleRGB.originalColor?t.style.fill="blue":t.style.fill=this.svgCountryStyleRGB.originalColor}}svgRoom(e){const t=document.getElementById(e);if(t){const e=t.querySelector(".room-fill");if(e){const l=getComputedStyle(e).fill;e.getAttribute("fill"),this.svgRoomStyleRGB.isSaved||(this.svgRoomStyleRGB={originalColor:null!=l?l:"",isSaved:!0}),l==this.svgRoomStyleRGB.originalColor?e.setAttribute("fill","blue"):t.setAttribute("fill",this.svgRoomStyleRGB.originalColor)}}}svgBeckhamRoom(e){const t=document.getElementById(e);if(t){const e=getComputedStyle(t).fill;t.getAttribute("fill"),this.svgBeckhamRoomStyleRGB.isSaved||(this.svgBeckhamRoomStyleRGB={originalColor:null!=e?e:"",isSaved:!0}),e==this.svgBeckhamRoomStyleRGB.originalColor?t.style.fill="rgb(204, 255, 204)":t.style.fill=this.svgBeckhamRoomStyleRGB.originalColor}}svgBeckhamMouseOver(e){if(document.getElementById(e)){const e=document.getElementById("name-large-1");e&&(e.style.display="none");const t=document.getElementById("name-large-1-popup");t&&(t.style.display="block")}}svgBeckhamMouseOut(e){if(document.getElementById(e)){const e=document.getElementById("name-large-1");e&&(e.style.display="block");const t=document.getElementById("name-large-1-popup");t&&(t.style.display="none")}}};null===(e=document.getElementById("circleFillAttr"))||void 0===e||e.addEventListener("click",(function(){m.svgCircleFillAttr("circleFillAttr")})),null===(t=document.getElementById("circleFillStyle"))||void 0===t||t.addEventListener("click",(function(){m.svgCircleFillStyle("circleFillStyle")})),null===(l=document.getElementById("triangle1"))||void 0===l||l.addEventListener("click",m.svgTriangle),null===(i=document.getElementById("hexagon1"))||void 0===i||i.addEventListener("click",(function(){m.svgHexagon("hexagon1")})),null===(o=document.getElementById("star1"))||void 0===o||o.addEventListener("click",m.svgStar),null===(n=document.getElementById("hexagon2"))||void 0===n||n.addEventListener("click",(function(){m.svgHexagon("hexagon2")})),null===(s=document.getElementById("hexagon3"))||void 0===s||s.addEventListener("click",(function(){m.svgHexagon("hexagon3")})),null===(r=document.getElementById("Room1"))||void 0===r||r.addEventListener("click",(function(){m.svgRoom("Room1")})),null===(g=document.getElementById("room-large-1"))||void 0===g||g.addEventListener("click",(function(){m.svgBeckhamRoom("room-large-1")})),null===(c=document.getElementById("room-large-2"))||void 0===c||c.addEventListener("click",(function(){m.svgBeckhamRoom("room-large-2")})),null===(d=document.getElementById("room-large-1"))||void 0===d||d.addEventListener("mouseover",(function(){m.svgBeckhamMouseOver("room-large-1")})),null===(a=document.getElementById("room-large-1"))||void 0===a||a.addEventListener("mouseout",(function(){m.svgBeckhamMouseOut("room-large-1")})),null===(u=document.getElementById("Marokko"))||void 0===u||u.addEventListener("click",(function(){m.svgCountryStyle("Marokko")})),console.info("svg-test page is loaded..."),svga={}})();
//# sourceMappingURL=main.js.map