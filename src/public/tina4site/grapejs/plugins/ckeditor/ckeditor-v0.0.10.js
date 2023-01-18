/*! grapesjs-plugin-ckeditor - 0.0.10 */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("grapesjs")) : "function" == typeof define && define.amd ? define(["grapesjs"], t) : "object" == typeof exports ? exports["grapesjs-plugin-ckeditor"] = t(require("grapesjs")) : e["grapesjs-plugin-ckeditor"] = t(e.grapesjs)
}("undefined" != typeof self ? self : this, function(e) {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 0)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(1),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            a = function(e) {
                return e.stopPropagation()
            };
        t.default = r.default.plugins.add("gjs-plugin-ckeditor", function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t,
                o = {
                    options: {},
                    position: "left"
                };
            for (var i in o) i in n || (n[i] = o[i]);
            if (!CKEDITOR) throw new Error("CKEDITOR instance not found");
            e.setCustomRte({
                enable: function(t, o) {
                    if (o && "destroyed" != o.status) return this.focus(t, o), o;
                    t.contentEditable = !0;
                    var i = e.RichTextEditor.getToolbarEl();
                    [].forEach.call(i.children, function(e) {
                        e.style.display = "none"
                    });
                    var s = n.options;
                    return s.extraPlugins ? "string" == typeof s.extraPlugins ? s.extraPlugins += ",sharedspace" : s.extraPlugins.push("sharedspace") : s.extraPlugins = "sharedspace", n.options.sharedSpaces || (n.options.sharedSpaces = {
                        top: i
                    }), o = CKEDITOR.inline(t, n.options), o.getContent = o.getData, o.on("contentDom", function() {
                        var e = o.editable();
                        e.attachListener(e, "click", function() {
                            t.click()
                        })
                    }), o.on("instanceReady", function(t) {
                        var n = i.querySelector("#cke_" + o.name);
                        n && (n.style.display = "block"), e.trigger("canvasScroll")
                    }), o.on("dialogShow", function(e) {
                        var t = r.default.$(".cke_dialog_background_cover, .cke_dialog");
                        ["off", "on"].forEach(function(e) {
                            return t[e]("mousedown", a)
                        })
                    }), this.focus(t, o), o
                },
                disable: function(e, t) {
                    e.contentEditable = !1, t && t.focusManager && t.focusManager.blur(!0)
                },
                focus: function(e, t) {
                    t && t.focusManager.hasFocus || (e.contentEditable = !0, t && t.focus())
                }
            }), e.on("rteToolbarPosUpdate", function(e) {
                switch (n.position) {
                    case "center":
                        var t = e.elementWidth / 2 - e.targetWidth / 2;
                        e.left = e.elementLeft + t;
                        break;
                    case "right":
                        var o = e.targetWidth;
                        e.left = e.elementLeft + e.elementWidth - o
                }
                e.top <= e.canvasTop && (e.top = e.elementTop + e.elementHeight), e.left < e.canvasLeft && (e.left = e.canvasLeft)
            })
        })
    }, function(t, n) {
        t.exports = e
    }])
});