/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/ValueStateSupport'],function(q,V){"use strict";var O={};O.render=function(r,o){if(!o._isEmpty()){var s=o.getState();var t=o.getTextDirection();r.write("<div");r.writeControlData(o);var T=o.getTooltip_AsString();if(T){r.writeAttributeEscaped("title",T);}r.addClass("sapMObjStatus");r.addClass("sapMObjStatus"+s);r.writeClasses();if(s!=sap.ui.core.ValueState.None){r.writeAccessibilityState(o,{describedby:{value:o.getId()+"sapSRH",append:true}});}r.write(">");if(o.getTitle()){r.write("<span");r.writeAttributeEscaped("id",o.getId()+"-title");r.addClass("sapMObjStatusTitle");r.writeClasses();r.write(">");r.writeEscaped(o.getTitle()+":");r.write("</span>");}if(o.getIcon()){r.write("<span");r.writeAttributeEscaped("id",o.getId()+"-icon");r.addClass("sapMObjStatusIcon");r.writeClasses();r.write(">");r.renderControl(o._getImageControl());r.write("</span>");}if(o.getText()){r.write("<span");r.writeAttributeEscaped("id",o.getId()+"-text");r.addClass("sapMObjStatusText");if(t&&t!==sap.ui.core.TextDirection.Inherit){r.writeAttribute("dir",t.toLowerCase());}r.writeClasses();r.write(">");r.writeEscaped(o.getText());r.write("</span>");}if(s!=sap.ui.core.ValueState.None){r.write("<span");r.writeAttributeEscaped("id",o.getId()+"sapSRH");r.addClass("sapUiInvisibleText");r.writeClasses();r.writeAccessibilityState({hidden:false});r.write(">");r.writeEscaped(V.getAdditionalText(s));r.write("</span>");}r.write("</div>");}};return O;},true);
