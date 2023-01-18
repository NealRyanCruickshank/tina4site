/***********************************************************************************************************************
 MessageBox - A jQuery Plugin to replace Javascript's window.alert(), window.confirm() and window.prompt() functions
 Author          : Gaspare Sganga
 Version         : 3.2.2
 License         : MIT
 Documentation   : https://gasparesganga.com/labs/jquery-message-box/
 ***********************************************************************************************************************/
!function(p,b){"use strict";var n={buttonDone:"OK",buttonFail:b,buttonsOrder:"done fail",customClass:"",customOverlayClass:"",filterDone:b,filterFail:b,input:!1,message:"",queue:!0,speed:200,title:"",top:"25%",width:"auto"},x={overlay:{"box-sizing":"border-box",display:"flex","flex-flow":"column nowrap","align-items":"center",position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},spacer:{"box-sizing":"border-box",flex:"0 1 auto"},messagebox:{"box-sizing":"border-box",flex:"0 1 auto",display:"flex","flex-flow":"column nowrap",overflow:"hidden"},title:{"box-sizing":"border-box",width:"100%",flex:"0 0 auto"},content_wrapper:{"box-sizing":"border-box",width:"100%",flex:"0 1 auto",overflow:"auto"},content:{"box-sizing":"border-box",display:"table",width:"100%"},label:{"box-sizing":"border-box",display:"block"},input:{"box-sizing":"border-box",display:"block"},checkbox_wrapper:{"box-sizing":"border-box",display:"block"},checkbox:{"box-sizing":"border-box",display:"inline"},caption:{"box-sizing":"border-box",display:"block"},buttons:{"box-sizing":"border-box",width:"100%",flex:"0 0 auto"},boxSizing:{"box-sizing":"border-box"}},f=b,u=[],a=[],g={buttonDoneName:"buttonDone",buttonFailName:"buttonFail",errorSpeed:200,keyCodeDone:[13],keyCodeFail:[27],maxHeightCoefficient:1.5,topBuffer:100};function m(){!f&&a.length&&i(a.shift())}function i(o){var e=o.settings;f=o;var t=p("<div>",{class:"messagebox_overlay"}).addClass(e.customOverlayClass).css(x.overlay).appendTo("body"),s=p("<div>",{class:"messagebox_spacer"}).css(x.spacer).appendTo(t),n=p("<div>",{class:"messagebox"}).addClass(e.customClass).css(x.messagebox).data("instance",o).appendTo(t);e.width&&n.outerWidth(e.width),e.title&&p("<div>",{class:"messagebox_title",text:e.title}).css(x.title).appendTo(n);var a,i=p("<div>",{class:"messagebox_content_wrapper"}).css(x.content_wrapper).appendTo(n),r=p("<div>",{class:"messagebox_content",html:e.message}).css(x.content).appendTo(i);!1!==e.input&&e.input!==b&&null!==e.input&&(a=p("<div>",{class:"messagebox_content_inputs"}).css(x.boxSizing).appendTo(r),function(e){if(!0===e||"string"==typeof e)return _(p("<input>",{value:!0===e?"":e,type:"text"}),{autotrim:!0});if(p.isArray(e)){var n=p([]);return p.each(e,function(e,t){n=n.add(_(p("<input>",{value:t,type:"text"}),{autotrim:!0}))}),n}if(p.isPlainObject(e)){n=p([]);return p.each(e,function(e,t){var o,s=function(e,s){var t=p.trim(s.type).toLowerCase();switch(t){case"caption":return delete s.label,p("<div>",{class:"messagebox_content_caption",html:s.message}).css(x.caption).addClass(s.customClass);case"check":case"checkbox":var o=p("<label>",{class:"messagebox_content_checkbox_wrapper",text:s.title,title:s.title}).css(x.checkbox_wrapper);return p("<input>",{type:"checkbox",class:"messagebox_content_checkbox",name:e,title:s.title}).addClass(s.customClass).css(x.checkbox).prop("checked",!!s.defaultValue).prependTo(o),o;case"select":var n=_(p("<select>"),{name:e,title:s.title,customClass:s.customClass,autotrim:!1}),a=p.isArray(s.options)?s.options.reduce(function(e,t){return e[t]=t,e},{}):s.options;a||(function(e){e="jQuery MessageBox Warning: "+e,window.console.warn?console.warn(e):window.console.log&&console.log(e)}('No options provided for "'+e+'"'),a={"":"&nbsp;"});var i=!1;return p.each(a,function(e,t){var o=p("<option>",{value:e,html:t}).appendTo(n);s.defaultValue===e&&(o.prop("selected",!0),i=!0)}),i||(p("<option>",{value:"",text:s.title}).prop({disabled:!0,selected:!0,hidden:!0}).prependTo(n),n.find("option").css("color",n.css("color")),n.addClass("messagebox_content_input_selectplaceholder").prop("selectedIndex",0).one("change",function(){n.find("option").css("color",""),n.removeClass("messagebox_content_input_selectplaceholder")})),n;case"textarea":case"memo":return _(p("<textarea>",{maxlength:s.maxlength,placeholder:s.title,class:"messagebox_content_input_textarea",rows:s.rows}).css({resize:s.resize?"vertical":"none"}).val(s.defaultValue),{name:e,title:s.title,customClass:s.customClass,autotrim:s.autotrim});default:return-1===["text","password","date","time","number","color","email"].indexOf(t)&&(t="text"),_(p("<input>",p.extend(!0,{},s.htmlAttributes||{},{type:t,maxlength:s.maxlength,placeholder:s.title,value:s.defaultValue})),{name:e,title:s.title,customClass:s.customClass,autotrim:s.autotrim})}}(e,t);t.label!==b&&(o=p("<div>",{class:"messagebox_content_label",text:t.label}).css(x.label),n=n.add(o)),n=n.add(s)}),n}return p(e)}(e.input).appendTo(a),a.children(".messagebox_content_input").first().trigger("focus")),p("<div>",{class:"messagebox_content_error"}).css(x.boxSizing).hide().appendTo(r);var c,l=p("<div>",{class:"messagebox_buttons"}).css(x.buttons).appendTo(n);e.buttonDone&&(c=p([]),"string"==typeof e.buttonDone?c=c.add(h("messagebox_button_done",g.buttonDoneName,{text:e.buttonDone,keyCode:g.keyCodeDone.concat(e.buttonFail?[]:g.keyCodeFail)},o)):p.each(e.buttonDone,function(e,t){c=c.add(h("messagebox_button_done",e,t,o))}),c.appendTo(l)),e.buttonFail&&(c=p([]),"string"==typeof e.buttonFail?c=c.add(h("messagebox_button_fail",g.buttonFailName,{text:e.buttonFail,keyCode:g.keyCodeFail},o)):p.each(e.buttonFail,function(e,t){c=c.add(h("messagebox_button_fail",e,t,o))}),0===p.trim(e.buttonsOrder).toLowerCase().indexOf("d")?c.appendTo(l):c.prependTo(l));var d=0,u=0-n.outerHeight()-g.topBuffer;"auto"===p.trim(e.top).toLowerCase()?(t.css("justify-content","center"),u-=p(window).height()):(t.css("justify-content","flex-start"),d=e.top,"%"===p.trim(e.top).toLowerCase().slice(-1)?n.css("max-height",100-parseInt(e.top,10)*g.maxHeightCoefficient+"%"):n.data("fRefreshMaxHeight",!0)),s.data("spacerTopMargin",u).css({height:0,"margin-top":u}).animate({height:d,"margin-top":0},e.speed,function(){v(n,p(window).height())})}function h(e,t,o,s){"string"==typeof o&&(o={text:o});var n=p("<button>",{class:"messagebox_buttons_button "+e,text:o.text||""}).addClass(o.customClass).css(x.boxSizing).on("click",{name:t},r);return p.each(function(e){"number"!=typeof e&&"string"!=typeof e||(e=[e]);var t=[];p.isArray(e)&&(t=p.map(e,function(e){return parseInt(e,10)||b}));return t}(o.keyCode),function(e,t){s.keyCodes[t]=n}),n}function _(e,t){return!t.autotrim&&t.autotrim!==b||e.on("blur",o),e.addClass("messagebox_content_input").addClass(t.customClass).css(x.input).attr({name:t.name,title:t.title})}function v(e,t){e.data("fRefreshMaxHeight")&&e.css("max-height",t-e.offset().top*g.maxHeightCoefficient)}function o(e){var t=p(e.currentTarget);t.val(p.trim(t.val()))}function r(e){var t=p(e.currentTarget),o=e.data.name,s=t.closest(".messagebox"),n=s.closest(".messagebox_overlay"),a=n.children(".messagebox_spacer").first(),i=s.find(".messagebox_content").first(),r=i.children(".messagebox_content_error").first(),c=s.data("instance"),l=function(e){var t=[],o=[];if(e.find(".messagebox_content_inputs").find("input, select, textarea").each(function(){var e=p(this);t.push(e.attr("name")),o.push(e.is(":checkbox")?e.is(":checked"):e.val())}),!o.length)return b;var s={},n=!1;return p.each(t,function(e,t){return t===b?!(n=!0):void(s[t]=o[e])}),n&&1===o.length?o[0]:n?o:s}(s),d=t.hasClass("messagebox_button_done")?c.settings.filterDone:c.settings.filterFail;r.hide().empty(),("function"!==p.type(d)?p.Deferred().resolve():p.when(d(l,o)).then(function(e){if(!1===e)return p.Deferred().reject();var t=p.type(e);return"error"===t?p.Deferred().reject(e.message):"string"===t||"object"===t||"array"===t?p.Deferred().reject(e):p.Deferred().resolve()})).then(function(){a.animate({height:0,"margin-top":a.data("spacerTopMargin")},c.settings.speed,function(){n.remove(),t.hasClass("messagebox_button_done")?c.deferred.resolve(l,o):c.deferred.reject(l,o),u.length?f=u.pop():(f=b,m())})},function(e){var t=p.type(e);"string"!==t&&"object"!==t&&"array"!==t||r.css("max-width",i.width()).append(e).slideDown(g.errorSpeed,function(){i.scrollTop(i.height())})})}function e(e){var t,o;f&&(t=p(e.currentTarget).width(),o=p(e.currentTarget).height(),p(document).find(".messagebox").each(function(){var e=p(this);e.find(".messagebox_content_wrapper").css("overflow","unset"),e.css("min-width",e.outerWidth()>t?t:""),v(e,o),e.find(".messagebox_content_wrapper").css("overflow","auto")}))}function t(e){if(f){var t=f.keyCodes[e.which];if(t){var o=t.closest(".messagebox");if(13===e.which&&o.find(".messagebox_content_input_textarea:focus").length)return;o.find(".messagebox_content_input").trigger("blur"),t.trigger("click")}}}p.MessageBoxSetup=function(e){p.extend(!0,n,e)},p.MessageBox=function(e){p.isPlainObject(e)||(e={message:e});var t=p.Deferred(),o=p.extend(!0,{},n,e);o.top=p.trim(o.top).toLowerCase(),p(document.activeElement).not(".messagebox_content_input").trigger("blur");var s={deferred:t,keyCodes:{},settings:o};return o.queue?(a.push(s),m()):(f&&u.push(f),i(s)),t.promise()},p(function(){p(window).on("resize",e).on("keydown",t)})}(jQuery);