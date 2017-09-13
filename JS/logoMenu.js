/*
 * touchSwipe - jQuery Plugin
 * https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * http://labs.skinkers.com/touchSwipe/
 * http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * $version: 1.3.3
 */
(function(g) {
    function P(c) {
        if (c && void 0 === c.allowPageScroll && (void 0 !== c.swipe || void 0 !== c.swipeStatus)) c.allowPageScroll = G;
        c || (c = {});
        c = g.extend({}, g.fn.swipe.defaults, c);
        return this.each(function() {
            var b = g(this),
                f = b.data(w);
            f || (f = new W(this, c), b.data(w, f))
        })
    }

    function W(c, b) {
        var f, p, r, s;

        function H(a) {
            var a = a.originalEvent,
                c, Q = n ? a.touches[0] : a;
            d = R;
            n ? h = a.touches.length : a.preventDefault();
            i = 0;
            j = null;
            k = 0;
            !n || h === b.fingers || b.fingers === x ? (r = f = Q.pageX, s = p = Q.pageY, y = (new Date).getTime(), b.swipeStatus && (c = l(a, d))) : t(a);
            if (!1 === c) return d = m, l(a, d), c;
            e.bind(I, J);
            e.bind(K, L)
        }

        function J(a) {
            a = a.originalEvent;
            if (!(d === q || d === m)) {
                var c, e = n ? a.touches[0] : a;
                f = e.pageX;
                p = e.pageY;
                u = (new Date).getTime();
                j = S();
                n && (h = a.touches.length);
                d = z;
                var e = a,
                    g = j;
                if (b.allowPageScroll === G) e.preventDefault();
                else {
                    var o = b.allowPageScroll === T;
                    switch (g) {
                        case v:
                            (b.swipeLeft && o || !o && b.allowPageScroll != M) && e.preventDefault();
                            break;
                        case A:
                            (b.swipeRight && o || !o && b.allowPageScroll != M) && e.preventDefault();
                            break;
                        case B:
                            (b.swipeUp && o || !o && b.allowPageScroll != N) && e.preventDefault();
                            break;
                        case C:
                            (b.swipeDown && o || !o && b.allowPageScroll != N) && e.preventDefault()
                    }
                }
                h === b.fingers || b.fingers === x || !n ? (i = U(), k = u - y, b.swipeStatus && (c = l(a, d, j, i, k)), b.triggerOnTouchEnd || (e = !(b.maxTimeThreshold ? !(k >= b.maxTimeThreshold) : 1), !0 === D() ? (d = q, c = l(a, d)) : e && (d = m, l(a, d)))) : (d = m, l(a, d));
                !1 === c && (d = m, l(a, d))
            }
        }

        function L(a) {
            a = a.originalEvent;
            a.preventDefault();
            u = (new Date).getTime();
            i = U();
            j = S();
            k = u - y;
            if (b.triggerOnTouchEnd || !1 === b.triggerOnTouchEnd && d === z)
                if (d = q, (h === b.fingers || b.fingers === x || !n) && 0 !== f) {
                    var c = !(b.maxTimeThreshold ? !(k >= b.maxTimeThreshold) : 1);
                    if ((!0 === D() || null === D()) && !c) l(a, d);
                    else if (c || !1 === D()) d = m, l(a, d)
                } else d = m, l(a, d);
            else d === z && (d = m, l(a, d));
            e.unbind(I, J, !1);
            e.unbind(K, L, !1)
        }

        function t() {
            y = u = p = f = s = r = h = 0
        }

        function l(a, c) {
            var d = void 0;
            b.swipeStatus && (d = b.swipeStatus.call(e, a, c, j || null, i || 0, k || 0, h));
            if (c === m && b.click && (1 === h || !n) && (isNaN(i) || 0 === i)) d = b.click.call(e, a, a.target);
            if (c == q) switch (b.swipe && (d = b.swipe.call(e, a, j, i, k, h)), j) {
                case v:
                    b.swipeLeft && (d = b.swipeLeft.call(e, a, j, i, k, h));
                    break;
                case A:
                    b.swipeRight && (d = b.swipeRight.call(e, a, j, i, k, h));
                    break;
                case B:
                    b.swipeUp && (d = b.swipeUp.call(e, a, j, i, k, h));
                    break;
                case C:
                    b.swipeDown && (d = b.swipeDown.call(e, a, j, i, k, h))
            }(c === m || c === q) && t(a);
            return d
        }

        function D() {
            return null !== b.threshold ? i >= b.threshold : null
        }

        function U() {
            return Math.round(Math.sqrt(Math.pow(f - r, 2) + Math.pow(p - s, 2)))
        }

        function S() {
            var a;
            a = Math.atan2(p - s, r - f);
            a = Math.round(180 * a / Math.PI);
            0 > a && (a = 360 - Math.abs(a));
            return 45 >= a && 0 <= a ? v : 360 >= a && 315 <= a ? v : 135 <= a && 225 >= a ? A : 45 < a && 135 > a ? C : B
        }

        function V() {
            e.unbind(E, H);
            e.unbind(F, t);
            e.unbind(I, J);
            e.unbind(K, L)
        }
        var O = n || !b.fallbackToMouseEvents,
            E = O ? "touchstart" : "mousedown",
            I = O ? "touchmove" : "mousemove",
            K = O ? "touchend" : "mouseup",
            F = "touchcancel",
            i = 0,
            j = null,
            k = 0,
            e = g(c),
            d = "start",
            h = 0,
            y = p = f = s = r = 0,
            u = 0;
        try {
            e.bind(E, H), e.bind(F, t)
        } catch (P) {
            g.error("events not supported " + E + "," + F + " on jQuery.swipe")
        }
        this.enable = function() {
            e.bind(E, H);
            e.bind(F, t);
            return e
        };
        this.disable = function() {
            V();
            return e
        };
        this.destroy = function() {
            V();
            e.data(w, null);
            return e
        }
    }
    var v = "left",
        A = "right",
        B = "up",
        C = "down",
        G = "none",
        T = "auto",
        M = "horizontal",
        N = "vertical",
        x = "all",
        R = "start",
        z = "move",
        q = "end",
        m = "cancel",
        n = "ontouchstart" in window,
        w = "TouchSwipe";
    g.fn.swipe = function(c) {
        var b = g(this),
            f = b.data(w);
        if (f && "string" === typeof c) {
            if (f[c]) return f[c].apply(this, Array.prototype.slice.call(arguments, 1));
            g.error("Method " + c + " does not exist on jQuery.swipe")
        } else if (!f && ("object" === typeof c || !c)) return P.apply(this, arguments);
        return b
    };
    g.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        maxTimeThreshold: null,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        click: null,
        triggerOnTouchEnd: !0,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0
    };
    g.fn.swipe.phases = {
        PHASE_START: R,
        PHASE_MOVE: z,
        PHASE_END: q,
        PHASE_CANCEL: m
    };
    g.fn.swipe.directions = {
        LEFT: v,
        RIGHT: A,
        UP: B,
        DOWN: C
    };
    g.fn.swipe.pageScroll = {
        NONE: G,
        HORIZONTAL: M,
        VERTICAL: N,
        AUTO: T
    };
    g.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: x
    }
})(jQuery);