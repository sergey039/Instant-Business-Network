if(!window.ComponentArt_ComboBox_Support_Loaded||window.ComponentArt_ComboBox_ReLoad){window.ComponentArt_SetSelectionRange=function(_1,_2,_3){if(cart_browser_ie){var _4=_1.createTextRange();_4.collapse(true);_4.moveStart("character",_2);_4.moveEnd("character",_3-_2);_4.select();}else{_1.setSelectionRange(_2,_3);}};window._q113=function(_5){var _6=0;if(_5.setSelectionRange){_6=_5.selectionStart;}else{if(document.selection&&document.selection.createRange){var _7=document.selection.createRange();var r2=_7.duplicate();_6=0-r2.moveStart("character",-100000);}}return _6;};window._q110=function(_9){var _a=0;if(_9.setSelectionRange){_a=_9.selectionEnd;}else{if(document.selection&&document.selection.createRange){var _b=document.selection.createRange();var r2=_b.duplicate();var _d=0-r2.moveStart("character",-100000);var _a=_d+_b.text.length;}}return _a;};window.ComponentArt_ComboBox_SlideDelay=20;window.ComponentArt_ComboBox_CollapseStep=function(_e,_f){if(!_e.CollapseElement){return;}var _10=(new Date()).getTime()-_e.CollapseStartTime;var _11=ComponentArt_SlidePortionCompleted(_10,_e.CollapseDuration,_e.CollapseSlide);if(_11==1){_e.CollapseElement.style.display="none";_e.CollapseElement=null;_e.HideOverlay();var _12=_e.get_events().getHandler("collapse");if(_12){_12(_e,Sys.EventArgs.Empty);}}else{var _13=Math.ceil((1-_11)*_f);if(_e.ExpandDirection==1){_e.CollapseElement.style.top=(_e.ExpandBaseLine-_13)+"px";}_e.CollapseElement.style.height=_13+"px";setTimeout("ComponentArt_ComboBox_CollapseStep("+_e.Id+","+_f+");",ComponentArt_ComboBox_SlideDelay);}};window.ComponentArt_ComboBox_ExpandStep=function(_14,_15){if(!_14.ExpandElement){return;}var _16=(new Date()).getTime()-_14.ExpandStartTime;var _17=ComponentArt_SlidePortionCompleted(_16,_14.ExpandDuration,_14.ExpandSlide);if(_17==1){if(_14.ExpandDirection==1){_14.ExpandElement.style.top=(_14.ExpandBaseLine-_15)+"px";}_14.ExpandElement.style.height=_15+"px";_14.ExpandElement.overflow="visible";_14.ExpandElement.style.height="";_14.ExpandElement=null;_14.ShowOverlay();var _18=document.getElementById(_14.Id+"_CacheMap");if(_18){_14.RenderCacheMap(_18);}if(_14.SelectedIndex>=0){_14.ScrollIntoView(_14.SelectedIndex);}var _19=_14.get_events().getHandler("expand");if(_19){_19(_14,Sys.EventArgs.Empty);}}else{var _1a=Math.max(1,Math.floor(_15*_17));_14.ExpandElement.style.height=_1a+"px";if(_14.ExpandDirection==1){_14.ExpandElement.style.top=(_14.ExpandBaseLine-_1a)+"px";}setTimeout("ComponentArt_ComboBox_ExpandStep("+_14.Id+","+_15+");",ComponentArt_ComboBox_SlideDelay);}};window._qE7;window._qED;window._qEB;window._qEC;window._qE5=function(e){ComponentArt_CancelEvent(e);var _1c=cart_browser_ie?event.clientX+(document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft):e.pageX;var _1d=cart_browser_ie?event.clientY+(document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop):e.pageY;var _1e=_1c-_qEB;var _1f=_1d-_qEC;_qEB=_1c;_qEC=_1d;_qE8.style.left=(_1c-100)+"px";_qE8.style.top=(_1d-100)+"px";if(_qE7.DropDownResizingStyle=="Outline"){var _20=Math.max(0,ComponentArt_GetAdjustedWidth(_qEA)+_1e);var _21=Math.max(0,ComponentArt_GetAdjustedHeight(_qEA)+_1f);_qEA.style.height=_21+"px";if(_qE7.DropDownResizingMode=="Corner"){_qEA.style.width=_20+"px";}}else{_qE9.style.height=Math.max(0,(ComponentArt_GetAdjustedHeight(_qE9)+_1f))+"px";if(_qE7.DropDownResizingMode=="Corner"){var _22=Math.max(0,ComponentArt_GetAdjustedWidth(_qE9)+_1e);var _20=_22+(_qE7.CacheMapWidth?_qE7.CacheMapWidth:0);_qEA.style.width=_20+"px";_qE9.style.width=_22+"px";}}return false;};window._qE6=function(e){_qE7.DropDownHeight=ComponentArt_GetAdjustedHeight(_qEA);_qE7.DropDownWidth=ComponentArt_GetAdjustedWidth(_qEA);_qE7.Resizing=false;_qE7.ResizeArea=false;_qF2(_qE8);if(_qE7.DropDownResizingStyle=="Outline"){var _24=document.getElementById(_qE7.Id+"_DropDown");var _25=document.getElementById(_qE7.Id+"_DropDownContent");var _26=_qE7.DropDownWidth-ComponentArt_GetAdjustedWidth(_24);var _27=_qE7.DropDownHeight-ComponentArt_GetAdjustedHeight(_24);_25.style.height=(ComponentArt_GetAdjustedHeight(_25)+_27)+"px";if(_qE7.DropDownResizingMode=="Corner"){var _28=ComponentArt_GetAdjustedWidth(_25)+_26;var _29=_28+(_qE7.CacheMapWidth?_qE7.CacheMapWidth:0);_24.style.width=_29+"px";_25.style.width=_28+"px";}_qF2(_qEA);}var _2a=document.getElementById(_qE7.Id+"_CacheMap");if(_2a){_qE7.RenderCacheMap(_2a);}_qE7=_qE9=_qEA=null;};window.ComponentArt_ComboBox_GetOffsetX=function(o,_2c){while(o.parentNode&&o.parentNode!=document.body){if(cart_browser_ie&&o.currentStyle){if(o.currentStyle.position==_2c){return _2c=="absolute"?parseInt(o.currentStyle.left):_q85(o);}}else{if(document.defaultView&&document.defaultView.getComputedStyle){var _2d=document.defaultView.getComputedStyle(o,"");if(_2d.position==_2c){return _2c=="absolute"?parseInt(_2d.getPropertyValue("left")):_q85(o);}}}o=o.parentNode;}return 0;};window.ComponentArt_ComboBox_GetOffsetY=function(o,_2f){while(o.parentNode&&o.parentNode!=document.body){if(cart_browser_ie&&o.currentStyle){if(o.currentStyle.position==_2f){return _2f=="absolute"?parseInt(o.currentStyle.top):_q86(o);}}else{if(document.defaultView&&document.defaultView.getComputedStyle){var _30=document.defaultView.getComputedStyle(o,"");if(_30.position==_2f){return _2f=="absolute"?parseInt(_30.getPropertyValue("top")):_q86(o);}}}o=o.parentNode;}return 0;};window.ComponentArt_ComboBox_Support_Loaded=true;}
