var _qC=false;var art_inDrag=false;var _qD;var _qE=null;var _q11=null;var _qF;var _q10;var _q12;var _qA;var _q2E;var _q2F;var _q31;function art_InitDraggable(_1,_2,_3){var _4=art_GetInstance(_1);_4.AllowHorizontal=(_2=="FreeStyle"||_2=="Horizontal");_4.AllowVertical=(_2=="FreeStyle"||_2=="Vertical");_4.DraggingStyle=_3;}function _q4C(e,o){if(art_inDrag){return false;}art_inDrag=true;_q5=false;_q7=null;_q8=-1;_qD=false;if(cart_browser_ie){e.cancelBubble=true;}else{e.preventDefault();e.stopPropagation();}var _7=o;var _8=_7.Frame;_q11=_7;var _9=_7.DockingContainers;if(!_9){_9=new Array();_7.DockingContainers=_9;}_q12=_7.DraggingStyle;_qA=_7.DockingStyle;if(_7.BringToTopOnClick){_q23++;_8.style.zIndex=_q23;}var _a=cart_browser_ie?event.clientX+(document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft):e.pageX;var _b=cart_browser_ie?event.clientY+(document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop):e.pageY;_qF=_a-_q85(_8);_q10=_b-_q86(_8);if(_7.IsDockable){_q0(_9);}_q1(_7);_q2E=document.onmousedown;_q2F=document.onmousemove;_q31=document.onmouseup;document.onmousedown=_q13;document.onmousemove=_qB;document.onmouseup=_q13;return false;}function _qB(e){if(cart_browser_ie){event.cancelBubble=true;}else{e.preventDefault();e.stopPropagation();}if(!_qD){_qD=true;_qC=true;_qE=_q26(_q11,_q12,_qA);if(_qE==_q11.Frame&&_q11.IsDocked){_q4F(_q11,_q34(_q11.Frame),_q35(_q11.Frame));}if(_q12=="Original"&&_qA!="Original"){_q11.Frame.style.visibility="hidden";}}var _d=cart_browser_ie?event.clientX+(document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft):e.pageX;var _e=cart_browser_ie?event.clientY+(document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop):e.pageY;if(!_q11.AllowHorizontal){_d=_q34(_qE)+parseInt(_qE.style.width)/2;}if(!_q11.AllowVertical){_e=_q35(_qE)+parseInt(_qE.style.height)/2;}if(_q11.IsDockable){var _f=false;for(var i=0;i<_q9.length;i++){if(_e>_q4E[i]&&_e<_q4E[i]+_q21[i]&&_d>_q25[i]&&_d<_q25[i]+_q53[i]){var _11=_q18(_qE,_q9[i],_d,_e);if((!_q5||_q7!=_q9[i]||_q8!=_11)){if(_qA=="Original"){_q4(_q11.Id,_q9[i],_11);}else{_q4A(_q11,i,_11);}_q7=_q9[i];_q8=_11;_q5=true;}_f=true;break;}}if(!_f){_q22(_q11);_q5=false;}}var _12=_d-_qF;var _13=_e-_q10;_qE.style.position="absolute";if(_q11.AllowHorizontal){_qE.style.left=_12+"px";}if(_q11.AllowVertical){_qE.style.top=_13+"px";}_q40(_q11,_12,_13,_qE.offsetWidth,_qE.offsetHeight);return false;}function _q13(e){if(!art_inDrag){return false;}art_inDrag=false;_qC=false;document.onmousedown=_q2E;document.onmousemove=_q2F;document.onmouseup=_q31;if(!_qD){return false;}var _15=_q11.Frame;var _16=_q34(_qE);var _17=_q35(_qE);if(_qE!=_15){_q3(_qE);}else{if(_q11.IsDocked){_15.style.position="relative";_15.style.top="";_15.style.left="0px";}}_q36(_q11,_16,_17);_q4B();_15.style.visibility="visible";_15.style.visibility="";_q52(_q11);return false;}function _q36(_18,_19,_1a){var _1b=_18.Frame;if(_18.MustBeDocked&&!_q5){if(_18.IsDocked){return false;}else{if(_18.LastDockElement){_q4(_18.Id,_18.LastDockElement,_18.LastDockIndex);return false;}}}if(_18.IsDocked){_q4F(_18,_19,_1a);}else{_1b.style.left=_19+"px";_1b.style.top=_1a+"px";}if(_q5){var _1c=document.getElementById(_q7);if(_q8>_1c.childNodes.length){_q8=_1c.childNodes.length;}_q4(_18.Id,_q7,_q8);}else{_1b.style.height=_18.OriginalHeight+"px";_1b.style.height="";_1b.style.width=_18.OriginalWidth+"px";if(_18.EnableFloating){if(_18.FloatAlignment=="Default"){var _1d=window.document.body.scrollLeft;var _1e=window.document.body.scrollTop;_18.FloatOffsetX=_19-_1d;_18.FloatOffsetY=_1a-_1e;}art_RepositionFloater(_18);}}}function _q4A(_1f,_20,_21){var _22=false;var _23=_1f.OutlineElement;if(_23!=null){_q22(_1f);_23=_1f.OutlineElement;}if(_23==null){_23=document.createElement("div");_23.style.position="absolute";_23.style.fontSize="1px";_23.style.visibility="hidden";document.body.insertBefore(_23,document.body.firstChild);_22=true;}var _24=document.getElementById(_q9[_20]);if(_1f.IsDocked&&_1f.LastDockElement==_q9[_20]&&_21>=_24.childNodes.length){_21=_q1F(_q9[_20],_21);}if(_21==-1){_23.style.top=_q4E[_20]+"px";_23.style.left=_q25[_20]+"px";_23.style.height=Math.min(_qE.offsetHeight,_q21[_20])+"px";_23.style.width=_q53[_20]+"px";}else{if(_21>=_24.childNodes.length){_21=_q1F(_q9[_20],_24.childNodes.length);var _25=_24.childNodes[_21];var _26=_q35(_25)+_25.offsetHeight;var _27=Math.min(_q4E[_20]+_q21[_20]-_26,_qE.offsetHeight);_23.style.top=_26+"px";_23.style.left=_q25[_20]+"px";_23.style.height=_qE.offsetHeight+"px";_23.style.width=_q53[_20]+"px";}else{var _25=_24.childNodes[_21];_23.style.top=_q35(_25)+"px";_23.style.left=_q25[_20]+"px";_23.style.height=_25.offsetHeight+"px";_23.style.width=_q53[_20]+"px";}}if(_22){_q4D(_23,_qA);}_23.style.zIndex=_q23+1;_23.style.visibility="visible";_1f.OutlineElement=_23;}function _q22(_28){var _29=_28.OutlineElement;if(_29!=null){if(_qA=="TransparentRectangle"||_qA=="Shadow"){_q3(_29);_28.OutlineElement=null;}else{_29.style.visibility="hidden";}}}function _q26(_2a,_2b,_2c){var _2d=_2a.Frame;if(_2b=="Original"&&_2c=="Original"){return _2d;}var _2e=document.createElement("DIV");_2e.style.position="absolute";_2e.style.left=_q34(_2d)+"px";_2e.style.top=_q35(_2d)+"px";_2e.style.height=_2d.offsetHeight+"px";_2e.style.width=_2d.offsetWidth+"px";_2e.style.zIndex=_q23+1;switch(_2b){case "SolidOutline":_2e.style.borderStyle="solid";_2e.style.borderWidth="2px";document.body.insertBefore(_2e,document.body.firstChild);_2e.style.visibility="visible";break;case "DashedOutline":_2e.style.borderStyle="dashed";_2e.style.borderWidth="1px";_2e.style.borderColor="#ffffff";var _2f=document.createElement("div");_2f.style.borderWidth="1px";_2f.style.borderColor="#000000";_2f.style.borderStyle="dashed";_2f.style.width="100%";_2f.style.height="100%";_2e.appendChild(_2f);document.body.insertBefore(_2e,document.body.firstChild);_2e.style.visibility="visible";break;case "GhostCopy":var _30=_2d.cloneNode(true);_30.id="tempDrag_"+_2a.Id;if(cart_browser_ie){_30.style.filter="alpha(opacity=50)";}else{_30.style.opacity=0.5;_30.style.setProperty("-moz-opacity",0.5,"");}_30.style.position="absolute";_30.style.top="0px";_30.style.left="0px";_30.style.height="100%";_30.style.width="100%";if(_2a.RenderOverWindowedObjects){var _31=_q1D(_30);if(_31){_30.removeChild(_31);}}_2e.appendChild(_30);document.body.insertBefore(_2e,document.body.firstChild);break;case "Original":var _30=_2d.cloneNode(true);_30.id="tempDrag_"+_2a.Id;_30.style.position="absolute";_30.style.top="0px";_30.style.left="0px";_30.style.height="100%";_30.style.width="100%";if(_2a.RenderOverWindowedObjects){var _31=_q1D(_30);if(_31){_30.removeChild(_31);}}_2e.appendChild(_30);document.body.appendChild(_2e);break;case "TransparentRectangle":document.body.insertBefore(_2e,document.body.firstChild);_q27(_2e,"#000000","#505050");break;case "Shadow":document.body.insertBefore(_2e,document.body.firstChild);_q28(_2e,"#202020");break;default:_2e.style.display="none";document.body.insertBefore(_2e,document.body.firstChild);break;}if(cart_browser_ie&&_2a.RenderOverWindowedObjects&&(_2b=="Shadow"||_2b=="GhostCopy"||_2b=="TransparentRectangle")){var _32=document.createElement("iframe");_32.style.position="absolute";_32.style.top="0px";_32.style.left="0px";_32.style.width="100%";_32.style.height="100%";_32.style.display="block";_32.style.zIndex=-1;if(cart_browser_ie){_32.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";}else{_30.style.opacity=0;_30.style.setProperty("-moz-opacity",0,"");}_2e.appendChild(_32);}return _2e;}var ComponentArt_Snap_Drag_Loaded=true;
