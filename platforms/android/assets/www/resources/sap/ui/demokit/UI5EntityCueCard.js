/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/commons/Link','sap/ui/core/Control','./EntityInfo','./library'],function(q,L,C,E,l){"use strict";var U=C.extend("sap.ui.demokit.UI5EntityCueCard",{metadata:{library:"sap.ui.demokit",properties:{collapsible:{type:"boolean",group:"Misc",defaultValue:true},expanded:{type:"boolean",group:"Misc",defaultValue:false},navigable:{type:"boolean",group:"Misc",defaultValue:false},entityName:{type:"string",group:"Misc",defaultValue:null},style:{type:"sap.ui.demokit.UI5EntityCueCardStyle",group:"Misc",defaultValue:null}},events:{navigate:{allowPreventDefault:true,parameters:{entityName:{type:"string"}}}}}});U.prototype.init=function(){this._oShowCueCardLink=new L({text:"Show All Settings",press:[this._toggleExpanded,this]});this._oShowCueCardLink.setParent(this);this._aHistory=[];this._iHistory=-1;};U.prototype.setEntityName=function(e){if(e!==this.getEntityName()){this.setProperty("entityName",e);this._aHistory[++this._iHistory]=e;this._aHistory.length=this._iHistory+1;}};U.prototype.back=function(){if(this._iHistory>0){this.setProperty("entityName",this._aHistory[--this._iHistory]);}};U.prototype.forward=function(){if(this._iHistory+1<this._aHistory.length){this.setProperty("entityName",this._aHistory[++this._iHistory]);}};U.prototype.setExpanded=function(e){this.setProperty("expanded",e);this._oShowCueCardLink&&this._oShowCueCardLink.setText(this.getExpanded()?"Hide Settings":"Show All Settings");};U.prototype.onclick=function(e){if(this.getNavigable()){var s=q(e.target).attr("data-sap-ui-entity");if(s&&this.fireNavigate({entityName:s})){this.setEntityName(s);}}};U.prototype._toggleExpanded=function(){this.setExpanded(!this.getExpanded());};U.prototype._getDoc=function(){var n=this.getEntityName();return E.getEntityDocu(n);};U.createDialog=function(){q.sap.require("sap.ui.commons.Button");q.sap.require("sap.ui.commons.Dialog");q.sap.require("sap.ui.commons.Toolbar");var c=new U({collapsible:false,expanded:true,navigable:true});var d=new sap.ui.commons.Dialog({title:"Cue Card",minWidth:"200px",minHeight:"200px",maxWidth:"75%",maxHeight:"75%",content:[new sap.ui.commons.Toolbar({standalone:false,items:[new sap.ui.commons.Button({text:"Back",press:function(){c.back();}}),new sap.ui.commons.Button({text:"Fwd",press:function(){c.forward();}})]}),c]});d.openForClass=function(s){c.setEntityName(s);this.rerender();this.open();};return d;};U.attachToContextMenu=function(n){var d;q(n||window.document).bind("contextmenu.sapDkCueCd",function(e){if(e.shiftKey&&e.ctrlKey){var c=q(e.target).control(0);if(c&&(!d||!d.getDomRef()||(d.getDomRef()!==e.target&&!q.contains(d.getDomRef(),e.target)))){d=d||U.createDialog();d.openForClass(c.getMetadata().getName());e.preventDefault();e.stopPropagation();}}});};U.detachFromContextMenu=function(n){q(n||window.document).unbind("contextmenu.sapDkCueCd");};return U;},true);
