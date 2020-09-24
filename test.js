/*! For license information please see sdk.js.LICENSE.txt */ ! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("liff", [], t) : "object" == typeof exports ? exports.liff = t() : e.liff = t()
}(window, (function() {
    return function(e) {
        function t(t) {
            for (var n, i, o = t[0], s = t[1], a = 0, u = []; a < o.length; a++) i = o[a], Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]), r[i] = 0;
            for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
            for (c && c(t); u.length;) u.shift()()
        }
        var n = {},
            r = {
                1: 0
            };

        function i(t) {
            if (n[t]) return n[t].exports;
            var r = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
        }
        i.e = function(e) {
            var t = [],
                n = r[e];
            if (0 !== n)
                if (n) t.push(n[2]);
                else {
                    var o = new Promise((function(t, i) {
                        n = r[e] = [t, i]
                    }));
                    t.push(n[2] = o);
                    var s, a = document.createElement("script");
                    a.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.src = function(e) {
                        return i.p + "" + ({
                            0: "js-crypto-ec",
                            2: "vendors_js-crypto-ec"
                        } [e] || e) + ".09a0f2aedbcaa790e2b9.js"
                    }(e);
                    var c = new Error;
                    s = function(t) {
                        a.onerror = a.onload = null, clearTimeout(u);
                        var n = r[e];
                        if (0 !== n) {
                            if (n) {
                                var i = t && ("load" === t.type ? "missing" : t.type),
                                    o = t && t.target && t.target.src;
                                c.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")", c.name = "ChunkLoadError", c.type = i, c.request = o, n[1](c)
                            }
                            r[e] = void 0
                        }
                    };
                    var u = setTimeout((function() {
                        s({
                            type: "timeout",
                            target: a
                        })
                    }), 12e4);
                    a.onerror = a.onload = s, document.head.appendChild(a)
                } return Promise.all(t)
        }, i.m = e, i.c = n, i.d = function(e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var r in e) i.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "https://static.line-scdn.net/liff/edge/2/", i.oe = function(e) {
            throw e
        };
        var o = window.webpackJsonpliff = window.webpackJsonpliff || [],
            s = o.push.bind(o);
        o.push = t, o = o.slice();
        for (var a = 0; a < o.length; a++) t(o[a]);
        var c = s;
        return i(i.s = 11)
    }([function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = this.constructor;
            return this.then((function(n) {
                return t.resolve(e()).then((function() {
                    return n
                }))
            }), (function(n) {
                return t.resolve(e()).then((function() {
                    return t.reject(n)
                }))
            }))
        }
    }, function(e, t, n) {
        var r, i, o;
        i = [], void 0 === (o = "function" == typeof(r = function() {
            var e = function e(t) {
                function n(e, t) {
                    return e >>> t | e << 32 - t
                }
                for (var r, i, o = Math.pow, s = o(2, 32), a = "", c = [], u = 8 * t.length, l = e.h = e.h || [], f = e.k = e.k || [], d = f.length, h = {}, p = 2; d < 64; p++)
                    if (!h[p]) {
                        for (r = 0; r < 313; r += p) h[r] = p;
                        l[d] = o(p, .5) * s | 0, f[d++] = o(p, 1 / 3) * s | 0
                    } for (t += "Â€"; t.length % 64 - 56;) t += "\0";
                for (r = 0; r < t.length; r++) {
                    if ((i = t.charCodeAt(r)) >> 8) return;
                    c[r >> 2] |= i << (3 - r) % 4 * 8
                }
                for (c[c.length] = u / s | 0, c[c.length] = u, i = 0; i < c.length;) {
                    var y = c.slice(i, i += 16),
                        v = l;
                    for (l = l.slice(0, 8), r = 0; r < 64; r++) {
                        var w = y[r - 15],
                            m = y[r - 2],
                            g = l[0],
                            b = l[4],
                            I = l[7] + (n(b, 6) ^ n(b, 11) ^ n(b, 25)) + (b & l[5] ^ ~b & l[6]) + f[r] + (y[r] = r < 16 ? y[r] : y[r - 16] + (n(w, 7) ^ n(w, 18) ^ w >>> 3) + y[r - 7] + (n(m, 17) ^ n(m, 19) ^ m >>> 10) | 0);
                        (l = [I + ((n(g, 2) ^ n(g, 13) ^ n(g, 22)) + (g & l[1] ^ g & l[2] ^ l[1] & l[2])) | 0].concat(l))[4] = l[4] + I | 0
                    }
                    for (r = 0; r < 8; r++) l[r] = l[r] + v[r] | 0
                }
                for (r = 0; r < 8; r++)
                    for (i = 3; i + 1; i--) {
                        var _ = l[r] >> 8 * i & 255;
                        a += (_ < 16 ? 0 : "") + _.toString(16)
                    }
                return a
            };
            return e.code = 'var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\\x80";b[h]%64-56;)b+="\\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};', e
        }) ? r.apply(t, i) : r) || (e.exports = o)
    }, function(e, t, n) {
        (function(t) {
            var r = n(10),
                i = "production",
                o = t.env.PORT || 8080,
                s = t.env.CIRCLE_BRANCH || "",
                a = r.version.match(/\d+/g)[0],
                c = t.env.SERVER_END_POINT || "line.me",
                u = t.env.LIFF_END_POINT || null,
                l = t.env.CDN || "https://static.line-scdn.net/liff/edge/" + a + "/";
            e.exports = {
                CDN: l,
                ENV: i,
                PORT: o,
                SERVER_END_POINT: c,
                LIFF_END_POINT: u,
                VERSION: r.version,
                IOS_HOMESCREEN_SHORTCUT_URL: "https://line.me/channel/shortcut",
                SHARE_TARGET_PICKER_SCHEME_URL: "line://picker",
                BRANCH: s
            }
        }).call(this, n(4))
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (r) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t) {
        var n, r, i = e.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                n = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                r = s
            }
        }();
        var c, u = [],
            l = !1,
            f = -1;

        function d() {
            l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && h())
        }

        function h() {
            if (!l) {
                var e = a(d);
                l = !0;
                for (var t = u.length; t;) {
                    for (c = u, u = []; ++f < t;) c && c[f].run();
                    f = -1, t = u.length
                }
                c = null, l = !1,
                    function(e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function p(e, t) {
            this.fun = e, this.array = t
        }

        function y() {}
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new p(e, t)), 1 !== u.length || l || a(h)
        }, p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off = y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener = y, i.prependOnceListener = y, i.listeners = function(e) {
            return []
        }, i.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n(0),
                i = setTimeout;

            function o(e) {
                return Boolean(e && void 0 !== e.length)
            }

            function s() {}

            function a(e) {
                if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(e, this)
            }

            function c(e, t) {
                for (; 3 === e._state;) e = e._value;
                0 !== e._state ? (e._handled = !0, a._immediateFn((function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                        var r;
                        try {
                            r = n(e._value)
                        } catch (i) {
                            return void l(t.promise, i)
                        }
                        u(t.promise, r)
                    } else(1 === e._state ? u : l)(t.promise, e._value)
                }))) : e._deferreds.push(t)
            }

            function u(e, t) {
                try {
                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof a) return e._state = 3, e._value = t, void f(e);
                        if ("function" == typeof n) return void h((r = n, i = t, function() {
                            r.apply(i, arguments)
                        }), e)
                    }
                    e._state = 1, e._value = t, f(e)
                } catch (o) {
                    l(e, o)
                }
                var r, i
            }

            function l(e, t) {
                e._state = 2, e._value = t, f(e)
            }

            function f(e) {
                2 === e._state && 0 === e._deferreds.length && a._immediateFn((function() {
                    e._handled || a._unhandledRejectionFn(e._value)
                }));
                for (var t = 0, n = e._deferreds.length; t < n; t++) c(e, e._deferreds[t]);
                e._deferreds = null
            }

            function d(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }

            function h(e, t) {
                var n = !1;
                try {
                    e((function(e) {
                        n || (n = !0, u(t, e))
                    }), (function(e) {
                        n || (n = !0, l(t, e))
                    }))
                } catch (r) {
                    if (n) return;
                    n = !0, l(t, r)
                }
            }
            a.prototype.catch = function(e) {
                return this.then(null, e)
            }, a.prototype.then = function(e, t) {
                var n = new this.constructor(s);
                return c(this, new d(e, t, n)), n
            }, a.prototype.finally = r.a, a.all = function(e) {
                return new a((function(t, n) {
                    if (!o(e)) return n(new TypeError("Promise.all accepts an array"));
                    var r = Array.prototype.slice.call(e);
                    if (0 === r.length) return t([]);
                    var i = r.length;

                    function s(e, o) {
                        try {
                            if (o && ("object" == typeof o || "function" == typeof o)) {
                                var a = o.then;
                                if ("function" == typeof a) return void a.call(o, (function(t) {
                                    s(e, t)
                                }), n)
                            }
                            r[e] = o, 0 == --i && t(r)
                        } catch (c) {
                            n(c)
                        }
                    }
                    for (var a = 0; a < r.length; a++) s(a, r[a])
                }))
            }, a.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === a ? e : new a((function(t) {
                    t(e)
                }))
            }, a.reject = function(e) {
                return new a((function(t, n) {
                    n(e)
                }))
            }, a.race = function(e) {
                return new a((function(t, n) {
                    if (!o(e)) return n(new TypeError("Promise.race accepts an array"));
                    for (var r = 0, i = e.length; r < i; r++) a.resolve(e[r]).then(t, n)
                }))
            }, a._immediateFn = "function" == typeof e && function(t) {
                e(t)
            } || function(e) {
                i(e, 0)
            }, a._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console
            }, t.a = a
        }).call(this, n(6).setImmediate)
    }, function(e, t, n) {
        (function(e) {
            var r = void 0 !== e && e || "undefined" != typeof self && self || window,
                i = Function.prototype.apply;

            function o(e, t) {
                this._id = e, this._clearFn = t
            }
            t.setTimeout = function() {
                return new o(i.call(setTimeout, r, arguments), clearTimeout)
            }, t.setInterval = function() {
                return new o(i.call(setInterval, r, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                this._clearFn.call(r, this._id)
            }, t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                    e._onTimeout && e._onTimeout()
                }), t))
            }, n(8), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(this, n(3))
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            var t = n(5),
                r = n(0),
                i = function() {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if (void 0 !== e) return e;
                    throw new Error("unable to locate global object")
                }();
            "Promise" in i ? i.Promise.prototype.finally || (i.Promise.prototype.finally = r.a) : i.Promise = t.a
        }).call(this, n(3))
    }, function(e, t, n) {
        (function(e, t) {
            ! function(e, n) {
                "use strict";
                if (!e.setImmediate) {
                    var r, i, o, s, a, c = 1,
                        u = {},
                        l = !1,
                        f = e.document,
                        d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    d = d && d.setTimeout ? d : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                        t.nextTick((function() {
                            p(e)
                        }))
                    } : ! function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = n, t
                        }
                    }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
                        p(e.data)
                    }, r = function(e) {
                        o.port2.postMessage(e)
                    }) : f && "onreadystatechange" in f.createElement("script") ? (i = f.documentElement, r = function(e) {
                        var t = f.createElement("script");
                        t.onreadystatechange = function() {
                            p(e), t.onreadystatechange = null, i.removeChild(t), t = null
                        }, i.appendChild(t)
                    }) : r = function(e) {
                        setTimeout(p, 0, e)
                    } : (s = "setImmediate$" + Math.random() + "$", a = function(t) {
                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && p(+t.data.slice(s.length))
                    }, e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a), r = function(t) {
                        e.postMessage(s + t, "*")
                    }), d.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                        var i = {
                            callback: e,
                            args: t
                        };
                        return u[c] = i, r(c), c++
                    }, d.clearImmediate = h
                }

                function h(e) {
                    delete u[e]
                }

                function p(e) {
                    if (l) setTimeout(p, 0, e);
                    else {
                        var t = u[e];
                        if (t) {
                            l = !0;
                            try {
                                ! function(e) {
                                    var t = e.callback,
                                        n = e.args;
                                    switch (n.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(n[0]);
                                            break;
                                        case 2:
                                            t(n[0], n[1]);
                                            break;
                                        case 3:
                                            t(n[0], n[1], n[2]);
                                            break;
                                        default:
                                            t.apply(void 0, n)
                                    }
                                }(t)
                            } finally {
                                h(e), l = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(this, n(3), n(4))
    }, function(e, t) {
        ! function() {
            if ("function" != typeof window.CustomEvent) {
                function e(e, t) {
                    var n = t || {},
                        r = n.bubbles,
                        i = void 0 !== r && r,
                        o = n.cancelable,
                        s = void 0 !== o && o,
                        a = n.detail,
                        c = void 0 === a ? void 0 : a,
                        u = document.createEvent("CustomEvent");
                    return u.initCustomEvent(e, i, s, c), u
                }
                e.prototype = Event.prototype, window.CustomEvent = e
            }
        }()
    }, function(e) {
        e.exports = JSON.parse('{"name":"@line/liff","version":"2.3.2","main":"dist/lib/index.js","types":"dist/lib","files":["dist/lib","package.json","README.md"],"homepage":"https://developers.line.biz/en/docs/liff/overview/","license":"SEE THE LICENSE SECTION IN README.md","scripts":{"test":"jest","dev:watch:sdk":"webpack -w -c ./webpack.config.js","check:forbidden-urls":"node .circleci/check-forbidden-url.js","prettier":"prettier \'./lib/**\' -c","lint":"eslint \'./lib/**\' --ext .ts --ext .test.js","build:test":"NODE_ENV=test webpack --c ./webpack.config.js","build:beta":"NODE_ENV=beta yarn build_for_deploy","build:rc":"NODE_ENV=rc yarn build_for_deploy","build:master":"NODE_ENV=production yarn build_for_deploy","build:branch":"NODE_ENV=branch yarn build_for_deploy","build_for_deploy":"webpack --c ./webpack.config.js && cp -r dist/${NODE_ENV}/ dist/${NODE_ENV}-copied","deploy:test":"reg test --noTag","deploy:beta":"npm run deploy:beta-edge && npm run deploy:beta-versions","deploy:beta-edge":"reg beta-edge --noTag","deploy:beta-versions":"reg beta-versions --noTag","deploy:rc":"npm run deploy:rc-edge && npm run deploy:rc-versions","deploy:rc-edge":"reg rc-edge --noTag","deploy:rc-versions":"reg rc-versions --noTag","deploy:master":"npm run deploy:master-edge && npm run deploy:master-versions","deploy:master-edge":"reg -r master-edge --noTag","deploy:master-versions":"reg -r master-versions --noTag","deploy:branch":"reg branch --noTag","prepublishOnly":"./build-package.sh"},"dependencies":{"@line/bot-sdk":"^7.0.0","js-crypto-ec":"^0.5.6","promise-polyfill":"^8.1.0","tiny-sha256":"^1.0.2","whatwg-fetch":"^3.0.0"},"devDependencies":{"@babel/core":"^7.7.7","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/plugin-syntax-dynamic-import":"^7.7.4","@babel/preset-env":"^7.7.7","@babel/preset-typescript":"^7.7.7","@linecorp/reg":"^1.7.0","@types/jest":"^24.0.25","@typescript-eslint/eslint-plugin":"^2.13.0","@typescript-eslint/parser":"^2.13.0","babel-jest":"^24.6.0","babel-loader":"^8.0.6","body-parser":"^1.18.3","chalk":"^3.0.0","concurrently":"^5.0.2","css-loader":"^3.3.2","eslint":"^6.8.0","eslint-config-prettier":"^6.8.0","eslint-loader":"^3.0.3","eslint-plugin-jest":"^23.1.1","express":"^4.16.4","fast-check":"^1.21.0","http-proxy-middleware":"^0.20.0","husky":"^3.1.0","jest":"^24.6.0","lint-staged":">=9.5.0","nodemon":"^2.0.2","prettier":"^1.19.1","qs":"^6.9.1","request":"^2.88.0","request-promise":"^4.2.5","serve-handler":"^6.1.2","shelljs":"^0.8.3","terser-webpack-plugin":"^2.3.1","ts-loader":"^6.2.1","tslib":"^1.9.3","typescript":"^3.7.4","vconsole":"^3.3.4","vue":"^2.6.11","vue-loader":"^15.8.1","vue-style-loader":"^4.1.2","vue-template-compiler":"^2.6.11","webpack":"^4.41.4","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.10"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.ts":["prettier --write","eslint --fix","git add"],"*.test.js":["prettier --write","eslint --fix","git add"]}}')
    }, function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "liff", (function() {
            return Tt
        }));
        var r = "URLSearchParams" in self,
            i = "Symbol" in self && "iterator" in Symbol,
            o = "FileReader" in self && "Blob" in self && function() {
                try {
                    return new Blob, !0
                } catch (e) {
                    return !1
                }
            }(),
            s = "FormData" in self,
            a = "ArrayBuffer" in self;
        if (a) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            u = ArrayBuffer.isView || function(e) {
                return e && c.indexOf(Object.prototype.toString.call(e)) > -1
            };

        function l(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function f(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function d(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return i && (t[Symbol.iterator] = function() {
                return t
            }), t
        }

        function h(e) {
            this.map = {}, e instanceof h ? e.forEach((function(e, t) {
                this.append(t, e)
            }), this) : Array.isArray(e) ? e.forEach((function(e) {
                this.append(e[0], e[1])
            }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                this.append(t, e[t])
            }), this)
        }

        function p(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function y(e) {
            return new Promise((function(t, n) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    n(e.error)
                }
            }))
        }

        function v(e) {
            var t = new FileReader,
                n = y(t);
            return t.readAsArrayBuffer(e), n
        }

        function w(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function m() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                var t;
                this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : o && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : s && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : a && o && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = w(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a && (ArrayBuffer.prototype.isPrototypeOf(e) || u(e)) ? this._bodyArrayBuffer = w(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, o && (this.blob = function() {
                var e = p(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v)
            }), this.text = function() {
                var e, t, n, r = p(this);
                if (r) return r;
                if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = y(t), t.readAsText(e), n;
                if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, s && (this.formData = function() {
                return this.text().then(I)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }
        h.prototype.append = function(e, t) {
            e = l(e), t = f(t);
            var n = this.map[e];
            this.map[e] = n ? n + ", " + t : t
        }, h.prototype.delete = function(e) {
            delete this.map[l(e)]
        }, h.prototype.get = function(e) {
            return e = l(e), this.has(e) ? this.map[e] : null
        }, h.prototype.has = function(e) {
            return this.map.hasOwnProperty(l(e))
        }, h.prototype.set = function(e, t) {
            this.map[l(e)] = f(t)
        }, h.prototype.forEach = function(e, t) {
            for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
        }, h.prototype.keys = function() {
            var e = [];
            return this.forEach((function(t, n) {
                e.push(n)
            })), d(e)
        }, h.prototype.values = function() {
            var e = [];
            return this.forEach((function(t) {
                e.push(t)
            })), d(e)
        }, h.prototype.entries = function() {
            var e = [];
            return this.forEach((function(t, n) {
                e.push([n, t])
            })), d(e)
        }, i && (h.prototype[Symbol.iterator] = h.prototype.entries);
        var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

        function b(e, t) {
            var n, r, i = (t = t || {}).body;
            if (e instanceof b) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new h(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new h(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), g.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }

        function I(e) {
            var t = new FormData;
            return e.trim().split("&").forEach((function(e) {
                if (e) {
                    var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        i = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(i))
                }
            })), t
        }

        function _(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new h(t.headers), this.url = t.url || "", this._initBody(e)
        }
        b.prototype.clone = function() {
            return new b(this, {
                body: this._bodyInit
            })
        }, m.call(b.prototype), m.call(_.prototype), _.prototype.clone = function() {
            return new _(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new h(this.headers),
                url: this.url
            })
        }, _.error = function() {
            var e = new _(null, {
                status: 0,
                statusText: ""
            });
            return e.type = "error", e
        };
        var T = [301, 302, 303, 307, 308];
        _.redirect = function(e, t) {
            if (-1 === T.indexOf(t)) throw new RangeError("Invalid status code");
            return new _(null, {
                status: t,
                headers: {
                    location: e
                }
            })
        };
        var E = self.DOMException;
        try {
            new E
        } catch (Et) {
            (E = function(e, t) {
                this.message = e, this.name = t;
                var n = Error(e);
                this.stack = n.stack
            }).prototype = Object.create(Error.prototype), E.prototype.constructor = E
        }

        function k(e, t) {
            return new Promise((function(n, r) {
                var i = new b(e, t);
                if (i.signal && i.signal.aborted) return r(new E("Aborted", "AbortError"));
                var s = new XMLHttpRequest;

                function a() {
                    s.abort()
                }
                s.onload = function() {
                    var e, t, r = {
                        status: s.status,
                        statusText: s.statusText,
                        headers: (e = s.getAllResponseHeaders() || "", t = new h, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                            var n = e.split(":"),
                                r = n.shift().trim();
                            if (r) {
                                var i = n.join(":").trim();
                                t.append(r, i)
                            }
                        })), t)
                    };
                    r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
                    var i = "response" in s ? s.response : s.responseText;
                    n(new _(i, r))
                }, s.onerror = function() {
                    r(new TypeError("Network request failed"))
                }, s.ontimeout = function() {
                    r(new TypeError("Network request failed"))
                }, s.onabort = function() {
                    r(new E("Aborted", "AbortError"))
                }, s.open(i.method, i.url, !0), "include" === i.credentials ? s.withCredentials = !0 : "omit" === i.credentials && (s.withCredentials = !1), "responseType" in s && o && (s.responseType = "blob"), i.headers.forEach((function(e, t) {
                    s.setRequestHeader(t, e)
                })), i.signal && (i.signal.addEventListener("abort", a), s.onreadystatechange = function() {
                    4 === s.readyState && i.signal.removeEventListener("abort", a)
                }), s.send(void 0 === i._bodyInit ? null : i._bodyInit)
            }))
        }
        k.polyfill = !0, self.fetch || (self.fetch = k, self.Headers = h, self.Request = b, self.Response = _);
        n(7);
        var A = function(e, t) {
            return (A = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        };

        function O(e, t) {
            function n() {
                this.constructor = e
            }
            A(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var N, P = function() {
            return (P = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };

        function D(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function s(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        o(t)
                    }
                }

                function a(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        o(t)
                    }
                }

                function c(e) {
                    e.done ? i(e.value) : new n((function(t) {
                        t(e.value)
                    })).then(s, a)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        }

        function C(e, t) {
            var n, r, i, o, s = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(o) {
                return function(a) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < i[1]) {
                                        s.label = i[1], i = o;
                                        break
                                    }
                                    if (i && s.label < i[2]) {
                                        s.label = i[2], s.ops.push(o);
                                        break
                                    }
                                    i[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            o = t.call(e, s)
                        } catch (a) {
                            o = [6, a], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        }

        function S() {
            if (!N) {
                var e = window.navigator.userAgent.toLowerCase();
                N = /iphone|ipad|ipod/.test(e) ? "ios" : /android/.test(e) ? "android" : "web"
            }
            return N
        }

        function x(e, t) {
            if (e === t) return 0;
            for (var n = e.split("."), r = t.split("."), i = Math.max(n.length, r.length), o = 0; o < i; o++) {
                n[o] || (n[o] = "0"), r[o] || (r[o] = "0");
                var s = parseInt(n[o]) - parseInt(r[o]);
                if (0 !== s) return s > 0 ? 1 : -1
            }
            return 0
        }

        function j() {
            var e = navigator.userAgent.match(/Line\/\d+(\.\d+)*/i);
            return e ? e[0].slice(5) : null
        }
        var R, L = "LIFF_STORE",
            F = {
                ACCESS_TOKEN: "accessToken",
                ID_TOKEN: "IDToken",
                DECODED_ID_TOKEN: "decodedIDToken",
                FEATURE_TOKEN: "featureToken",
                FEATURES: "features",
                LOGIN_TMP: "loginTmp",
                CONFIG: "config",
                CONTEXT: "context",
                EXPIRES: "expires",
                RAW_CONTEXT: "rawContext",
                CLIENT_ID: "clientId"
            };
        ! function(e) {
            e.NONE = "none", e.HASH = "hash", e.HISTORY = "history"
        }(R || (R = {}));
        var M = ["context_token", "feature_token", "access_token", "id_token", "client_id"];
        var U = null;

        function B() {
            var e;
            return null === U && (void 0 === e && (e = window.navigator.userAgent), U = /Line\/\d+\.\d+\.\d+ LIFF/.test(e) || function(e) {
                return void 0 === e && (e = window.navigator.userAgent), /Line\/\d+\.\d+\.\d+/.test(e)
            }() && /[\#|\&]access_token=/.test(location.hash) || "1" === sessionStorage.getItem(L + ":isInClient"), sessionStorage.setItem(L + ":isInClient", U ? "1" : "0")), !!U
        }
        var H = new Set(["400", "401", "403", "404", "429", "500"]),
            W = function(e) {
                function t(t, n) {
                    var r = e.call(this, n) || this;
                    return r.code = t, r
                }
                return O(t, e), t
            }(Error);

        function V(e, t) {
            return new W(e, t || "")
        }

        function K(e) {
            return function(e, t) {
                if (!t) throw V("INVALID_CONFIG", "liffId is necessary for liff.init()");
                var n = (B() ? sessionStorage : localStorage).getItem(L + ":" + t + ":" + e);
                try {
                    return null === n ? null : JSON.parse(n)
                } catch (r) {
                    return null
                }
            }(e, Y().liffId)
        }

        function G(e, t) {
            var n = Y().liffId;
            if (!n) throw V("INVALID_CONFIG", "liffId is necessary for liff.init()");
            (B() ? sessionStorage : localStorage).setItem(L + ":" + n + ":" + e, JSON.stringify(t))
        }

        function q(e) {
            var t = Y().liffId;
            if (!t) throw V("INVALID_CONFIG", "liffId is necessary for liff.init()");
            (B() ? sessionStorage : localStorage).removeItem(L + ":" + t + ":" + e)
        }
        var z = {
                set: function(e, t, n) {
                    var r = e + "=" + t;
                    if (n)
                        for (var i in n) {
                            r += "; " + i + (n[i] ? "=" + n[i] : "")
                        }
                    document.cookie = r
                },
                get: function(e) {
                    var t = new RegExp("(?:(?:^|.*;\\s*)" + e + "\\s*\\=\\s*([^;]*).*$)|^.*$");
                    return document.cookie.replace(t, "$1")
                },
                remove: function(e, t) {
                    var n = e + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    if (t)
                        for (var r in t) n += "; " + r + "=" + t[r];
                    document.cookie = n
                }
            },
            J = {
                get: K,
                set: G,
                remove: q,
                clean: function() {
                    var e;
                    Object.keys(F).forEach((function(e) {
                        q(F[e])
                    })), e = Y(), z.remove(L + ":" + F.EXPIRES + ":" + e.liffId, {
                        path: "/"
                    })
                }
            },
            X = {};

        function Y() {
            return X
        }
        var $ = [];

        function Z() {
            return $
        }

        function Q(e) {
            $ = e
        }

        function ee() {
            return K(F.LOGIN_TMP)
        }

        function te() {
            q(F.LOGIN_TMP)
        }

        function ne() {
            return K(F.ACCESS_TOKEN)
        }

        function re(e) {
            G(F.ACCESS_TOKEN, e)
        }

        function ie() {
            return K(F.ID_TOKEN)
        }

        function oe(e) {
            G(F.ID_TOKEN, e)
        }

        function se() {
            return K(F.DECODED_ID_TOKEN)
        }

        function ae(e) {
            G(F.DECODED_ID_TOKEN, e)
        }

        function ce() {
            return K(F.FEATURE_TOKEN)
        }

        function ue() {
            return K(F.CONTEXT)
        }

        function le(e) {
            G(F.CONTEXT, e)
        }

        function fe() {
            return !!ne()
        }

        function de() {
            var e;
            return !(e = Y(), z.get(L + ":" + F.EXPIRES + ":" + e.liffId))
        }

        function he() {
            J.clean()
        }

        function pe(e) {
            return Object.keys(e).map((function(t) {
                var n = e[t],
                    r = function(e) {
                        return void 0 !== e ? encodeURIComponent(t) + "=" + encodeURIComponent(e) : encodeURIComponent(t)
                    };
                return Array.isArray(n) ? n.map((function(e) {
                    return r(e)
                })).join("&") : r(n)
            })).join("&")
        }
        var ye = {
                parse: function(e) {
                    return e.replace(/^\?/, "").replace(/^#\/?/, "").split(/&+/).filter((function(e) {
                        return e.length > 0
                    })).reduce((function(e, t) {
                        var n = t.split("=").map(decodeURIComponent),
                            r = n[0],
                            i = n[1],
                            o = e[r];
                        return Array.isArray(o) ? o.push(i) : e.hasOwnProperty(r) ? e[r] = [o, i] : e[r] = i, e
                    }), {})
                },
                stringify: pe
            },
            ve = "",
            we = function() {
                var e = ue();
                if (!e) throw V("INIT_FAILED", "Could not get Context from server.");
                if (!e.endpointUrl) throw V("INIT_FAILED", "Could not get endpointUrl from server.");
                if (!e.permanentLinkPattern) throw V("INIT_FAILED", "Could not get permanentLinkPattern from server.");
                return e
            };

        function me(e) {
            try {
                var t = location.href,
                    n = function(e) {
                        var t = we(),
                            n = decodeURIComponent(e),
                            r = new URL(t.endpointUrl),
                            i = r.origin,
                            o = r.pathname,
                            s = r.search,
                            a = t.permanentLinkPattern,
                            c = n.indexOf("?"),
                            u = n.indexOf("#", c + 1),
                            l = n.substring(0, c >= 0 ? c : u >= 0 ? u : n.length),
                            f = u > -1 ? "#" + n.substring(u + 1) : "",
                            d = c > -1 ? n.substring(c + 1, u < 0 ? void 0 : u) : "";
                        if ("replace" === a) {
                            if (!l && !d && !f) return window.location.href;
                            var h = function(e) {
                                return e.replace(/\/{2,}/g, "/")
                            }("/" + (l || "/"));
                            return "" + window.location.origin + h + (d ? "?" + d : "") + f
                        }
                        return l.length > 0 && ("/" === l ? l = "" : n.startsWith("/") || (l = "/" + l)), "" + i + ("/" === o ? "" : o) + (n = d ? l + "?" + (s ? s.substring(1) + "&" : "") + d + f : "" + l + s + f)
                    }(e);
                n !== t && location.replace(n)
            } catch (r) {
                if ("INIT_FAILED" === r.code) throw r
            }
        }
        var ge = n(1),
            be = n.n(ge);

        function Ie(e) {
            return (t = be()(e), n = "", t.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").forEach((function(e) {
                n += String.fromCharCode(parseInt(e))
            })), window.btoa(n)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
            var t, n
        }
        var _e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        function Te(e) {
            for (var t = "", n = 0; n < e; n++) t += _e[Math.floor(Math.random() * _e.length)];
            return t
        }

        function Ee(e) {
            var t = e.subdomain;
            return "https://" + (void 0 === t ? "api" : t) + ".line.me/" + e.pathname
        }
        var ke = {
            token: Ee({
                pathname: "oauth2/v2.1/token"
            }),
            certs: Ee({
                pathname: "oauth2/v2.1/certs"
            }),
            "openid-configuration": Ee({
                subdomain: "access",
                pathname: ".well-known/openid-configuration"
            }),
            authorize: Ee({
                subdomain: "access",
                pathname: "liff/v1/authorize"
            }),
            profile: Ee({
                pathname: "v2/profile"
            }),
            message: Ee({
                pathname: "message/v3/share"
            }),
            messageOTT: Ee({
                pathname: "message/v3/multisend?type=ott"
            }),
            friendship: Ee({
                pathname: "friendship/v1/status"
            }),
            userPicker: Ee({
                subdomain: "access",
                pathname: "oauth2/v2.1/liff/userPicker"
            }),
            shareTargetPicker: Ee({
                subdomain: "access",
                pathname: "oauth2/v2.1/liff/shareTargetPicker"
            }),
            shareTargetPickerOtt: Ee({
                pathname: "v2/liff/ott"
            }),
            userPickerDomain: Ee({
                subdomain: "access",
                pathname: ""
            }),
            shareTargetPickerResult: Ee({
                subdomain: "access",
                pathname: "oauth2/v2.1/liff/shareTargetPicker/result"
            }),
            apps: Ee({
                pathname: "liff/v2/apps"
            })
        };

        function Ae(e) {
            return ke[e] || ""
        }

        function Oe(e) {
            var t = Te(43),
                n = Ie(t),
                r = Y();
            if (!r || !r.liffId) throw V("INVALID_CONFIG", "You need to define `liffId` for liff.login()");
            var i = {
                app_id: r.liffId,
                state: Te(12),
                response_type: "code",
                code_challenge_method: "S256",
                code_challenge: n
            };
            e && e.redirectUri && (i.redirect_uri = e.redirectUri), G(F.LOGIN_TMP, {
                codeVerifier: t
            });
            var o = Ae("authorize") + "?" + ye.stringify(i);
            window.location.href = o
        }
        var Ne = {},
            Pe = !1;

        function De(e, t) {
            Pe || (Pe = !0, window.addEventListener("liffEvent", (function(e) {
                e && e.detail && e.detail.type && Ne[e.detail.type] && Ne[e.detail.type].forEach((function(t) {
                    return t(e)
                }))
            }))), Ne[e] ? Ne[e].push(t) : Ne[e] = [t]
        }

        function Ce(e, t) {
            var n = Ne[e];
            if (n && Array.isArray(n)) {
                var r = n.indexOf(t);
                r >= 0 && n.splice(r, 1)
            }
        }
        var Se = function(e) {
            return Object.entries(e).map((function(e) {
                var t = e[0],
                    n = e[1];
                return encodeURIComponent(t) + "=" + encodeURIComponent(function(t) {
                    if ("object" == typeof t) try {
                        return JSON.stringify(t)
                    } catch (e) {
                        return "" + t
                    }
                    return "" + t
                }(n))
            })).join("&")
        };

        function xe(e, t) {
            ! function(e, t) {
                var n = !1,
                    r = document.createElement("img");
                if (r.width = 1, r.height = 1, "function" == typeof t) {
                    var i = function() {
                        n || (t(r), n = !0)
                    };
                    r.onload = i, setTimeout(i, 1500)
                }
                r.src = "https://torimochi.line-apps.com/1/req?" + Se(e)
            }({
                cid: "liff",
                eventType: "debug",
                timestamp: Date.now(),
                logVersion: "1.6.9",
                threshold: 0,
                productKey: "liff-real",
                productVersion: "latest",
                url: location.href,
                host: location.hostname,
                path: location.pathname,
                query: location.search,
                hash: location.hash,
                referrer: document.referrer,
                userId: "liff",
                sessionId: "none",
                sessionPath: "",
                sessionQuery: "",
                sessionTime: "0",
                sessionDuration: "0",
                sessionParams: {},
                touchX: "0",
                touchY: "0",
                scrollX: "0",
                scrollY: "0",
                windowX: "0",
                windowY: "0",
                targets: [],
                content: {
                    debug: {
                        message: e
                    }
                }
            }, t)
        }

        function je(e) {
            var t = e.split(".");
            if (t[1]) try {
                var n = t[1].replace(/-/g, "+").replace(/_/g, "/");
                return JSON.parse(window.atob(n))
            } catch (r) {
                return null
            }
            return null
        }

        function Re(e) {
            return window.atob(e.replace(/\-/g, "+").replace(/_/g, "/"))
        }

        function Le(e) {
            for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), i = 0; i < t; i++) r[i] = e.charCodeAt(i);
            return n
        }
        var Fe = function(e) {
                return D(void 0, void 0, void 0, (function() {
                    var t, n, r;
                    return C(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (!e.ok) return [3, 4];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, e.json()];
                            case 2:
                                return [2, i.sent()];
                            case 3:
                                return i.sent(), [2, e];
                            case 4:
                                return t = String(e.status), n = H.has(t) ? t : "UNKNOWN", [4, e.json().catch((function() {
                                    throw V(n, e.statusText)
                                }))];
                            case 5:
                                throw V((r = i.sent()).error || n, r.error_description || r.message)
                        }
                    }))
                }))
            },
            Me = function(e, t) {
                var n = {};
                if (!t || !t.headers) {
                    var r = ne();
                    if (!r) return Promise.reject(V("UNAUTHORIZED", "Need access_token for api call, Please login first"));
                    n = {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + r
                    }
                }
                return fetch(e, P({
                    headers: n
                }, t)).then(Fe)
            };
        var Ue = function() {
                return D(this, void 0, void 0, (function() {
                    return C(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, Me(Ae("certs"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    }))
                }))
            },
            Be = function() {
                return "ios" === S() && (null !== (e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) && parseInt(e[1], 10) <= 10);
                var e
            };

        function He(e, t, r) {
            return D(this, void 0, void 0, (function() {
                var i, o, s, a;
                return C(this, (function(c) {
                    switch (c.label) {
                        case 0:
                            return Be() ? [4, Promise.all([n.e(2), n.e(0)]).then(n.t.bind(null, 243, 7))] : [3, 2];
                        case 1:
                            return o = c.sent(), s = o.default, i = s.verify(t, r, e, "SHA-256", "raw"), [3, 5];
                        case 2:
                            return [4, crypto.subtle.importKey("jwk", e, {
                                name: "ECDSA",
                                namedCurve: "P-256"
                            }, !1, ["verify"])];
                        case 3:
                            return a = c.sent(), [4, crypto.subtle.verify({
                                name: "ECDSA",
                                hash: {
                                    name: "SHA-256"
                                }
                            }, a, r, t)];
                        case 4:
                            i = c.sent(), c.label = 5;
                        case 5:
                            return [2, i]
                    }
                }))
            }))
        }

        function We(e, t) {
            return D(this, void 0, void 0, (function() {
                var n, r, i, o, s, a, c, u, l, f, d, h, p, y;
                return C(this, (function(v) {
                    switch (v.label) {
                        case 0:
                            return n = e.split("."), r = n[0], i = n[1], o = n[2], s = JSON.parse(Re(r)), a = JSON.parse(Re(i)), c = Le(Re(o)), u = Le(r + "." + i), [4, Ue()];
                        case 1:
                            if (l = v.sent(), !(f = l.keys.find((function(e) {
                                    return e.kid === s.kid
                                })))) return [3, 6];
                            if (delete f.alg, "ES256" !== s.alg) throw V("INVALID_ID_TOKEN", 'Invalid "alg" value in ID_TOKEN');
                            d = void 0, v.label = 2;
                        case 2:
                            return v.trys.push([2, 4, , 5]), [4, He(f, u, c)];
                        case 3:
                            return d = v.sent(), [3, 5];
                        case 4:
                            throw V("INVALID_ID_TOKEN", "Failed to use Crypto API to verify ID_TOKEN: " + v.sent());
                        case 5:
                            if (d) {
                                if (h = "https://access.line.me" !== a.iss, p = a.aud !== t, y = 1e3 * a.exp < Date.now(), h) throw V("INVALID_ID_TOKEN", 'Invalid "iss" value in ID_TOKEN');
                                if (p) throw V("INVALID_ID_TOKEN", 'Invalid "aud" value in ID_TOKEN');
                                if (y) throw V("INVALID_ID_TOKEN", 'Invalid "exp" value in ID_TOKEN');
                                return [2, a]
                            }
                            throw V("INVALID_ID_TOKEN", "Invalid signature in ID_TOKEN");
                        case 6:
                            throw V("INVALID_ID_TOKEN", 'Invalid "kid" value in ID_TOKEN');
                        case 7:
                            return [2]
                    }
                }))
            }))
        }
        var Ve;

        function Ke(e) {
            return D(this, void 0, void 0, (function() {
                var t, n, r, i, o, s, a, c, u;
                return C(this, (function(l) {
                    switch (l.label) {
                        case 0:
                            return [4, new Promise((function(e) {
                                var t = j();
                                if (!t || x(t, "9.5.0") < 0) Q(["openWindow", "closeWindow"]), e();
                                else if (window._liff && window._liff.features) Q(window._liff.features), e();
                                else {
                                    var n = function(t) {
                                        Ce("ready", n), t && t.detail && t.detail.data && t.detail.data.features && Q(t.detail.data.features), e()
                                    };
                                    De("ready", n)
                                }
                            }))];
                        case 1:
                            if (l.sent(), t = ye.parse(window.location.hash), n = function(e) {
                                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                    for (var r = function(t) {
                                            Object.keys(t).filter((function(e) {
                                                return null !== t[e] && void 0 !== t[e]
                                            })).forEach((function(n) {
                                                e[n] = t[n]
                                            }))
                                        }, i = 0, o = t; i < o.length; i++) {
                                        var s = o[i];
                                        r(s)
                                    }
                                    return e
                                }({
                                    access_token: ne(),
                                    context_token: K(F.RAW_CONTEXT),
                                    feature_token: ce(),
                                    id_token: ie(),
                                    client_id: K(F.CLIENT_ID)
                                }, t), r = n.access_token, i = n.context_token, o = n.feature_token, s = n.id_token, a = n.client_id, c = "function" == typeof window._liff.validateFeatureToken, i && le(je(i)), !fe()) {
                                if (!o || !r) throw Oe(), V("INIT_FAILED", "Failed to parse feature_token or access_token");
                                if (c && ! function(e, t) {
                                        return window._liff.makeFeatureTokenHash = function(e, t) {
                                            return be()(e + "-" + t)
                                        }, !!window._liff.validateFeatureToken(e, t)
                                    }(e.liffId, o)) throw Oe(), V("INIT_FAILED", "Failed to validate feature_token");
                                !c && window.history.length > 1 ? xe("potential abuser") : (G(F.FEATURE_TOKEN, o), re(r))
                            }
                            return s && !ie() && oe(s), s && a && !se() ? [4, We(s, a)] : [3, 3];
                        case 2:
                            (u = l.sent()) && ae(u), l.label = 3;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }

        function Ge(e) {
            return D(this, void 0, void 0, (function() {
                var t, n, r, i, o, s, a;
                return C(this, (function(c) {
                    switch (c.label) {
                        case 0:
                            return t = Ae("apps"), n = t + "/" + e + "/contextToken", r = ne(), i = {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            }, r && (i.Authorization = "Bearer " + r), [4, Me(n, {
                                headers: i
                            })];
                        case 1:
                            if (o = c.sent(), !(s = o.contextToken)) throw V("INIT_FAILED", "Can not get context from server.");
                            if (!(a = je(s))) throw V("INIT_FAILED", "Invalid context token.");
                            return [2, a]
                    }
                }))
            }))
        }

        function qe() {
            return D(this, void 0, void 0, (function() {
                var e;
                return C(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            if (!(e = Y().liffId)) throw V("INIT_FAILED", "Invalid LIFF ID.");
                            return [4, Ge(e)];
                        case 1:
                            return le(t.sent()), [2]
                    }
                }))
            }))
        }

        function ze(e) {
            return D(this, void 0, void 0, (function() {
                var t, n, r, i = this;
                return C(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            t = function() {
                                return D(i, void 0, void 0, (function() {
                                    var t, n, r, i, o;
                                    return C(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return [4, (a = Y(), c = ye.parse(window.location.search), u = ee(), l = {
                                                    grant_type: "authorization_code",
                                                    client_id: c.liffClientId,
                                                    appId: a.liffId,
                                                    code: c.code,
                                                    code_verifier: u.codeVerifier,
                                                    redirect_uri: a.redirectUri || c.liffRedirectUri,
                                                    id_token_key_type: "JWK"
                                                }, f = ye.stringify(l), Me(Ae("token"), {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                                                    },
                                                    body: f
                                                }))];
                                            case 1:
                                                return t = s.sent(), n = t.access_token, r = t.id_token, i = t.expires_in, re(n),
                                                    function(e) {
                                                        var t = Y();
                                                        z.set(L + ":" + F.EXPIRES + ":" + t.liffId, e.getTime(), {
                                                            expires: e.toUTCString(),
                                                            path: "/",
                                                            secure: null
                                                        })
                                                    }(new Date(Date.now() + 1e3 * i)), te(), r ? (oe(r), [4, We(r, e)]) : [3, 3];
                                            case 2:
                                                (o = s.sent()) && ae(o), s.label = 3;
                                            case 3:
                                                return [4, qe()];
                                            case 4:
                                                return s.sent(), [2]
                                        }
                                        var a, c, u, l, f
                                    }))
                                }))
                            }, o.label = 1;
                        case 1:
                            return o.trys.push([1, 3, , 4]), [4, t()];
                        case 2:
                            return o.sent(), [3, 4];
                        case 3:
                            throw n = o.sent(), r = n, te(), r;
                        case 4:
                            return [2]
                    }
                }))
            }))
        }

        function Je(e) {
            return D(this, void 0, void 0, (function() {
                var t;
                return C(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            if (!e.liffId) throw V("INVALID_CONFIG", "liffId is necessary for liff.init()");
                            return X = e, t = ye.parse(window.location.search), o = t.code, s = ee(), Boolean(o && !fe() && s && s.codeVerifier) ? [4, ze(t.liffClientId)] : [3, 2];
                        case 1:
                            return [2, n.sent()];
                        case 2:
                            if (t.error && t.liffOAuth2Error) throw r = t.error, i = t.error_description, V("INIT_FAILED", r + ": " + i.replace(/\+/g, " "));
                            return B() ? [4, Ke(e)] : [3, 4];
                        case 3:
                            n.sent(), n.label = 4;
                        case 4:
                            return fe() ? [3, 6] : [4, qe()];
                        case 5:
                            n.sent(), n.label = 6;
                        case 6:
                            return t["liff.state"] && me(t["liff.state"]), B() || !fe() ? [2] : de() ? (he(), [2]) : [2, qe()]
                    }
                    var r, i, o, s
                }))
            }))
        }
        var Xe = new Promise((function(e) {
            Ve = e
        }));

        function Ye() {
            var e;
            return "ios" === S() ? (e = j()) && x(e, "9.19.0") < 0 ? "https://static.line-scdn.net/liff/edge/2/ios-918-extensions.js" : "https://static.line-scdn.net/liff/edge/2/ios-extensions.js" : "https://static.line-scdn.net/liff/edge/2/non-ios-extensions.js"
        }

        function $e(e, t, n) {
            var r = this;
            return function() {
                return D(this, void 0, void 0, (function() {
                    return C(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [3, 2];
                            case 1:
                                return [2, e.sent().default];
                            case 2:
                                return [2, new Promise((function(e, t) {
                                    var n = document.createElement("script"),
                                        r = Ye();
                                    n.onload = function() {
                                        var n = window.liffClientExtension;
                                        n ? e(n) : t(V("INIT_FAILED", "Unable to load client features. (Extension is empty)"))
                                    }, n.onerror = function() {
                                        t(V("INIT_FAILED", "Unable to load client features."))
                                    }, n.src = r, n.type = "text/javascript", document.body.appendChild(n)
                                }))]
                        }
                    }))
                }))
            }().then((function(t) {
                return function(e) {
                    window && !window.liff && (window.liff = e)
                }(r), t.install(r), Je(e)
            })).then((function() {
                "function" == typeof t && t(), Ve()
            })).catch((function(e) {
                return "function" == typeof n && n(e), Promise.reject(e)
            }))
        }
        var Ze = ["shareTargetPicker"],
            Qe = {
                shareTargetPicker: function() {
                    if (!fe()) return !1;
                    var e = ue();
                    if (!e) return !1;
                    var t = e.availability.shareTargetPicker,
                        n = t.permission,
                        r = t.minVer;
                    if (!n) return !1;
                    if (B()) {
                        var i = j();
                        return null !== i && x(i, r) >= 0
                    }
                    return !0
                }
            },
            et = function(e) {
                if (!Ze.includes(e)) throw V("INVALID_ARGUMENT", "Unexpected API name.");
                var t = Qe[e];
                return !t || t()
            };
        n(9);

        function tt(e, t, n) {
            void 0 === t && (t = {}), void 0 === n && (n = "");
            var r = ce();
            if (!r) throw V("FORBIDDEN", "Invalid featureToken for client features");
            if (!window._liff || !window._liff.postMessage) throw V("INVALID_ARGUMENT", "postMessage is not available from client");
            window._liff.postMessage(e, r, n, JSON.stringify(t))
        }

        function nt(e, t, n) {
            return void 0 === t && (t = {}), void 0 === n && (n = {
                once: !0
            }), ce() ? (n = P({
                callbackId: Te(12),
                once: !0
            }, n), new Promise((function(r, i) {
                var o = function(t) {
                    if (t && t.detail) {
                        var s = t.detail.callbackId === n.callbackId,
                            a = "string" != typeof t.detail.callbackId;
                        (s || a) && (n.once && Ce(e, o), t.detail.error ? i(t.detail.error) : t.detail.data ? r(t.detail.data) : i(t.detail))
                    }
                    i()
                };
                De(e, o), tt(e, t, n.callbackId)
            }))) : Promise.reject(V("FORBIDDEN", "Invalid featureToken for client features"))
        }
        var rt;
        ! function(e) {
            e.none = "none", e.ott = "ott"
        }(rt || (rt = {}));
        var it = function(e) {
            return "object" == typeof e && null !== e && function(e) {
                return "string" == typeof e || e instanceof String
            }(e.type)
        };

        function ot(e) {
            return Promise.reject(V("INVALID_ARGUMENT", e))
        }

        function st(e, t) {
            var n = at,
                r = t.split(".")[0];
            e.removeEventListener(r, n[t]), n[t] = null
        }
        var at = {},
            ct = !1,
            ut = !1;

        function lt(e, t, n, r) {
            ct || (ut = function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
                } catch (Et) {
                    e = !1
                }
                return e
            }(), ct = !0);
            var i = t.split(".")[0];
            return new Promise((function(o) {
                var s = function(i) {
                    o(i), n && n(i), r && r.once && st(e, t)
                };
                at[t] = s, e.addEventListener(i, s, !!ut && r)
            }))
        }
        var ft = function() {
                function e() {
                    this.listenKeyName = "message.liff"
                }
                return e.prototype.init = function(e, t, n) {
                    var r = this;
                    this.receiver = e, this.destination = t, this.destroy(), lt(this.receiver, this.listenKeyName, (function(e) {
                        return D(r, void 0, void 0, (function() {
                            return C(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e && e.data && e.data.name ? [4, n(e)] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    }))
                }, e.prototype.send = function(e, t) {
                    void 0 === t && (t = {});
                    var n = Ae("userPickerDomain"),
                        r = {
                            name: e,
                            body: t
                        };
                    this.destination.postMessage(r, n)
                }, e.prototype.destroy = function() {
                    st(this.receiver, this.listenKeyName)
                }, e
            }(),
            dt = function() {
                function e(e, t, n) {
                    void 0 === n && (n = window), this.url = e || "", this.uniqAttr = "", this.accessToken = t, this.namespace = n, this.windowPostMessage = new ft
                }
                return e.prototype.init = function() {
                    return D(this, void 0, void 0, (function() {
                        var e = this;
                        return C(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.prepareWindow()];
                                case 1:
                                    return t.sent(), this.windowPostMessage.init(this.namespace, this.postmessageDestination, this.postMessageCallback), this.pingHandler = setInterval((function() {
                                        e.windowPostMessage.send("ping")
                                    }), 1e3), this.healthcheckHandler = setInterval((function() {
                                        e.postmessageDestination.closed && e.resolve && e.resolve(null)
                                    }), 1e3), [2]
                            }
                        }))
                    }))
                }, e.prototype.start = function() {
                    return D(this, void 0, void 0, (function() {
                        var e = this;
                        return C(this, (function(t) {
                            return [2, new Promise((function(t, n) {
                                e.resolve = t, e.reject = n
                            }))]
                        }))
                    }))
                }, e.prototype.destroy = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(e) {
                            return clearInterval(this.pingHandler), clearInterval(this.healthcheckHandler), this.breakWindow(), this.windowPostMessage.destroy(), [2]
                        }))
                    }))
                }, e.prototype.postMessageCallback = function(e) {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(t) {
                            switch (e.data.name) {
                                case "ping":
                                    clearInterval(this.pingHandler), this.windowPostMessage.send("pong", {
                                        accessToken: this.accessToken
                                    });
                                    break;
                                case "exception":
                                    this.destroy(), this.reject(e.data.body)
                            }
                            return [2]
                        }))
                    }))
                }, e
            }();
        var ht = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return O(t, e), Object.defineProperty(t.prototype, "postmessageDestination", {
                get: function() {
                    return this.iframe.contentWindow
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.init = function() {
                return D(this, void 0, void 0, (function() {
                    return C(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, e.prototype.init.call(this)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, t.prototype.prepareWindow = function() {
                return D(this, void 0, void 0, (function() {
                    return C(this, (function(e) {
                        return this.uniqAttr = function(e) {
                            void 0 === e && (e = window);
                            for (var t, n = 1; n <= 100; n++) {
                                var r = "data-l-{0}".replace("{0}", Te(6));
                                if (t = r, !e.document.body.querySelector("[" + t + "]")) return r
                            }
                            throw new Error("can't make a relavent name space for LIFF on HTML")
                        }(), this.contentElm = this.prepareDom(), this.styleElm = this.prepareStyle(), this.changeBodyStyle(), this.namespace.document.body.appendChild(this.contentElm), this.namespace.document.head.appendChild(this.styleElm), [2]
                    }))
                }))
            }, t.prototype.breakWindow = function() {
                return D(this, void 0, void 0, (function() {
                    return C(this, (function(e) {
                        return this.namespace.document.body.removeChild(this.contentElm), this.namespace.document.head.removeChild(this.styleElm), [2]
                    }))
                }))
            }, t.prototype.prepareDom = function() {
                var e = this.namespace.document.createElement("iframe");
                return e.setAttribute("sandbox", "allow-scripts allow-same-origin"), e.setAttribute("name", "LIFF-iframe-" + this.uniqAttr), e.setAttribute("src", this.url), e.setAttribute("class", "liff-iframe"), e.setAttribute(this.uniqAttr, ""), this.iframe = e, e
            }, t.prototype.prepareStyle = function() {
                return this.namespace.document.createElement("style")
            }, t
        }(dt);
        var pt = function(e) {
                var t = e.match(/^(https?:\/\/.*?)\//);
                return t && t[1] || ""
            },
            yt = function() {
                return pt(Ae("userPicker"))
            },
            vt = function(e) {
                function t(t, n, r) {
                    void 0 === r && (r = window);
                    var i = e.call(this, t, n, r) || this;
                    return i.submittedData = !1, i.originalBodyStyle = "", i.orgDocumentStyle = "", i.originalBodyPos = {
                        x: 0,
                        y: 0
                    }, i.postMessageCallback = i.postMessageCallback.bind(i), i
                }
                return O(t, e), t.prototype.init = function(t) {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return t !== R.HASH && t !== R.HISTORY && (t = R.NONE), this.routerMode = t, [4, e.prototype.init.call(this)];
                                case 1:
                                    return n.sent(), [4, this.historyAdd()];
                                case 2:
                                    return n.sent(), this.startWatchingHistoryChange(), [2]
                            }
                        }))
                    }))
                }, t.prototype.prepareDom = function() {
                    var t = e.prototype.prepareDom.call(this),
                        n = this.namespace.document.createElement("div");
                    n.setAttribute("class", "liff-wrap"), n.setAttribute(this.uniqAttr, "");
                    var r = this.namespace.document.createElement("div");
                    return r.setAttribute("class", "liff-wrap_in isOpening"), r.setAttribute(this.uniqAttr, ""), r.appendChild(t), n.appendChild(r), this.wrapperIn = r, n
                }, t.prototype.prepareStyle = function() {
                    var t, n, r = e.prototype.prepareStyle.call(this);
                    return r.textContent = function e(t, n) {
                        void 0 === n && (n = !0);
                        var r = "";
                        for (var i in t) "object" == typeof t[i] ? (i.indexOf("@keyframes") >= 0 && (n = !1), r += i + "{" + e(t[i], n) + "}") : r += i + ":" + t[i] + (n ? "!important" : "") + ";";
                        return r
                    }((t = this.uniqAttr, (n = {})["[" + t + "]"] = {
                        margin: 0,
                        padding: 0,
                        border: 0,
                        width: "100vw",
                        "font-size": "100%",
                        font: "inherit",
                        "vertical-align": "baseline",
                        "box-size": "border-box",
                        display: "block",
                        position: "initial",
                        all: "initial"
                    }, n[".liff-wrap[" + t + "]"] = {
                        position: "relative",
                        "z-index": 1e4
                    }, n[".liff-wrap_in[" + t + "]"] = {
                        position: "fixed",
                        width: "100vw",
                        border: "none",
                        "overflow-x": "hidden",
                        "overflow-y": "auto",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        "z-index": 1e4,
                        "-webkit-overflow-scrolling": "touch",
                        "background-color": "white"
                    }, n[".liff-button-area[" + t + "]"] = {
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "8px 16px",
                        background: "#ffffff",
                        "background-color": "white",
                        "z-index": 10001,
                        display: "flex",
                        "justify-content": "center"
                    }, n[".liff-button-area[" + t + "] > button"] = {
                        flex: "0 1 100%",
                        height: "45px",
                        "margin-right": "7.5px",
                        border: "none",
                        "border-radius": "5px",
                        color: "#6c7985",
                        "background-color": "#dee5ec",
                        "font-weight": 600,
                        "line-height": "20px",
                        "font-size": "16px",
                        "text-decoration": "none",
                        "word-break": "break-all",
                        "text-align": "center",
                        opacity: 0
                    }, n[".liff-button-area[" + t + "] > button.liff-isDisp"] = {
                        transition: "opacity .4s ease-in",
                        opacity: 1
                    }, n[".liff-button-area[" + t + "] > .liff-button-submit"] = {
                        color: "#ffffff",
                        "background-color": "#00b900"
                    }, n[".liff-button-area[" + t + "] > button:disabled"] = {
                        color: "rgba(255,255,255, 0.5)",
                        cursor: "initial"
                    }, n[".liff-button-area[" + t + "] > button:last-of-type"] = {
                        "margin-right": 0
                    }, n[".liff-wrap_in[" + t + "].isOpening"] = {
                        animation: "fadein-" + t + " 0.4s forwards ease-out"
                    }, n[".liff-wrap_in[" + t + "].isClosing"] = {
                        animation: "fadein-" + t + "reverse 0.4s forwards ease-in"
                    }, n[".liff-iframe[" + t + "]"] = {
                        width: "100%",
                        height: "100%",
                        border: "none"
                    }, n["@keyframes fadein-" + t] = {
                        from: {
                            opacity: 0,
                            transform: "translateY(100vh)"
                        },
                        to: {
                            opacity: 1,
                            transform: "translateY(0)"
                        }
                    }, n["@keyframes fadein-" + t + "reverse"] = {
                        from: {
                            opacity: 1,
                            transform: "translateY(0)"
                        },
                        to: {
                            opacity: 0,
                            transform: "translateY(100vh)"
                        }
                    }, n)), r
                }, t.prototype.cancel = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.resolve(null), [4, this.destroy()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype.submit = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.resolve(this.submittedData), [4, this.destroy()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype.destroy = function() {
                    return D(this, void 0, void 0, (function() {
                        var t = this;
                        return C(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.revertBodyStyle(), [4, new Promise((function(e) {
                                        "onanimationend" in window ? (t.wrapperIn.classList.remove("isOpening"), setTimeout((function() {
                                            t.wrapperIn.classList.add("isClosing"), lt(t.wrapperIn, "animationend.iframe", void 0, {
                                                once: !0
                                            }).then(e), setTimeout((function() {
                                                st(t.wrapperIn, "animationend.iframe"), e()
                                            }), 480)
                                        }), 0)) : e()
                                    }))];
                                case 1:
                                    return n.sent(), [4, e.prototype.destroy.call(this)];
                                case 2:
                                    return n.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype.changeBodyStyle = function() {
                    this.originalBodyPos.x = window.scrollX, this.originalBodyPos.y = window.scrollY, this.originalBodyStyle = this.namespace.document.body.style.cssText, this.orgDocumentStyle = this.namespace.document.documentElement.style.cssText, this.namespace.document.body.style.cssText = this.originalBodyStyle + "overflow:hidden!important;height: 100%!important;", this.namespace.document.documentElement.style.cssText = "overflow:hidden!important;height: 100%!important;", lt(this.namespace, "scroll.liff.iframe", (function() {
                        window.scrollTo(0, 0)
                    }), {
                        passive: !1
                    })
                }, t.prototype.revertBodyStyle = function() {
                    this.namespace.document.body.style.cssText = this.originalBodyStyle, this.namespace.document.documentElement.style.cssText = this.orgDocumentStyle, window.scrollTo(this.originalBodyPos.x, this.originalBodyPos.y), st(this.namespace, "scroll.liff.iframe")
                }, t.prototype.filter = function(e) {
                    var t = {};
                    for (var n in e) e.hasOwnProperty(n) && e[n] && n.length && (t[n] = e[n]);
                    return t
                }, t.prototype.postMessageCallback = function(t) {
                    return D(this, void 0, void 0, (function() {
                        var n;
                        return C(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.allowPostMessageOrigin || (this.allowPostMessageOrigin = yt()), t.origin !== this.allowPostMessageOrigin ? [2] : [4, e.prototype.postMessageCallback.call(this, t)];
                                case 1:
                                    switch (r.sent(), t.data.name) {
                                        case "cancel":
                                            return [3, 2];
                                        case "submit":
                                            return [3, 6]
                                    }
                                    return [3, 10];
                                case 2:
                                    return this.routerMode !== R.NONE ? [3, 4] : [4, this.cancel()];
                                case 3:
                                    return r.sent(), [3, 5];
                                case 4:
                                    this.namespace.history.back(), r.label = 5;
                                case 5:
                                    return [3, 10];
                                case 6:
                                    if (!((n = t.data) && n.body && n.body.token)) throw new Error("submitted without data");
                                    return this.submittedData = n.body.token, this.routerMode !== R.NONE ? [3, 8] : [4, this.submit()];
                                case 7:
                                    return r.sent(), [3, 9];
                                case 8:
                                    this.namespace.history.back(), r.label = 9;
                                case 9:
                                    return [3, 10];
                                case 10:
                                    return [2]
                            }
                        }))
                    }))
                }, t.prototype.historyAdd = function() {
                    if (this.routerMode === R.NONE) return Promise.resolve();
                    switch (this.routerMode) {
                        case R.HASH:
                            return this.namespace.location.hash = ye.stringify(P(P({}, ye.parse(this.namespace.location.hash)), {
                                userpicker: !0
                            })), new Promise((function(e) {
                                setTimeout(e, 0)
                            }));
                        case R.HISTORY:
                            return this.namespace.history.pushState({
                                userpicker: !0
                            }, "liff userpicker", ""), Promise.resolve()
                    }
                }, t.prototype.startWatchingHistoryChange = function() {
                    var e = this,
                        t = function() {
                            return D(e, void 0, void 0, (function() {
                                return C(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.submittedData ? [4, this.submit()] : [3, 2];
                                        case 1:
                                            return e.sent(), [3, 4];
                                        case 2:
                                            return [4, this.cancel()];
                                        case 3:
                                            e.sent(), e.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        };
                    switch (this.routerMode) {
                        case R.HASH:
                            lt(this.namespace, "hashchange.liff.iframe", t, {
                                once: !0
                            });
                            break;
                        case R.HISTORY:
                            lt(this.namespace, "popstate.liff.iframe", t, {
                                once: !0
                            })
                    }
                }, t.prototype.historyRemove = function() {
                    switch (this.routerMode) {
                        case R.HASH:
                            st(this.namespace, "hashchange.liff.iframe");
                            var e = ye.parse(window.location.hash);
                            delete e.userpicker, window.location.hash = ye.stringify(this.filter(e));
                            break;
                        case R.HISTORY:
                            st(this.namespace, "popstate.liff.iframe"), window.history.replaceState({
                                userpicker: !1
                            }, "liff userpicker", "")
                    }
                }, t
            }(ht),
            wt = function(e) {
                function t(t, n, r) {
                    void 0 === r && (r = window);
                    var i = e.call(this, t, n, r) || this;
                    return i.submittedData = !1, i.postMessageCallback = i.postMessageCallback.bind(i), i
                }
                return O(t, e), t.prototype.init = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, e.prototype.init.call(this)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype.cancel = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.resolve(null), [4, this.destroy()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype.submit = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.resolve(this.submittedData), [4, this.destroy()];
                                case 1:
                                    return e.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype.destroy = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, e.prototype.destroy.call(this)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype.postMessageCallback = function(t) {
                    return D(this, void 0, void 0, (function() {
                        var n;
                        return C(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.allowPostMessageOrigin || (this.allowPostMessageOrigin = yt()), t.origin !== this.allowPostMessageOrigin ? [2] : [4, e.prototype.postMessageCallback.call(this, t)];
                                case 1:
                                    switch (r.sent(), t.data.name) {
                                        case "cancel":
                                            return [3, 2];
                                        case "submit":
                                            return [3, 4]
                                    }
                                    return [3, 6];
                                case 2:
                                    return [4, this.cancel()];
                                case 3:
                                    return r.sent(), [3, 6];
                                case 4:
                                    if (!((n = t.data) && n.body && n.body.token)) throw new Error("submitted without data");
                                    return this.submittedData = n.body.token, [4, this.submit()];
                                case 5:
                                    return r.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }, t
            }(function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return O(t, e), Object.defineProperty(t.prototype, "postmessageDestination", {
                    get: function() {
                        return this.windowProxy
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.init = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, e.prototype.init.call(this)];
                                case 1:
                                    return t.sent(), [2]
                            }
                        }))
                    }))
                }, t.prototype.prepareWindow = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(e) {
                            return this.windowProxy = window.open(this.url, "liffpopup", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes"), [2]
                        }))
                    }))
                }, t.prototype.breakWindow = function() {
                    return D(this, void 0, void 0, (function() {
                        return C(this, (function(e) {
                            return this.windowProxy.close(), [2]
                        }))
                    }))
                }, t
            }(dt));
        var mt = n(2);

        function gt(e, t, n, r) {
            if (void 0 === n && (n = {}), "object" != typeof e || !e.postMessage) throw V("INVALID_ARGUMENT", "target must be window object");
            if ("string" != typeof t) throw V("INVALID_ARGUMENT", "keyname must be string");
            if ("object" != typeof n) throw V("INVALID_ARGUMENT", "incorrect body format. It should be Object or Array comprised of Object");
            if (!r) throw V("INVALID_ARGUMENT", "serverEndPointUrl isn't passed. please fill up with proper url");
            if ("development" !== mt.ENV && "*" === r) throw new Error("serverEndPointUrl doesn't allow to set '*'");
            var i = {
                name: t,
                body: n
            };
            e.postMessage(i, r)
        }

        function bt(e, t) {
            var n;
            lt(window, "message." + (n = "receivedHealthcheck"), function(e, t, n) {
                return function(r) {
                    r.origin === n && r.data.name === e && t(r)
                }
            }(n, e, t))
        }
        var It = function() {
            function e() {
                this.payloadToShareTargetPicker = null, this.popupWindow = null, this.doesWaitForSubwindowResult = !1
            }
            return e.getInstance = function() {
                return e.instance ? e.instance.reset() : e.instance = new e, e.instance
            }, e.prototype.init = function(e) {
                return D(this, void 0, void 0, (function() {
                    var t, n;
                    return C(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 5, , 6]), this.liffId = e.referrer.liffId, this.doesWaitForSubwindowResult = !(!e.options || !e.options.waitForSubwindowResult), this.allowPostMessageOrigin = this.initAllowPostMessageOrigin(), this.payloadToShareTargetPicker = this.buildPayloadToShareTargetPicker(e), window.AbortController && (this.abortController = new window.AbortController), this.prepareAnotherWindow(), [4, this.initOtt()];
                            case 1:
                                return r.sent(), this.initListener(), this.openAnotherWindow(), this.doesWaitForSubwindowResult ? [4, this.pollingShareResult()] : [3, 3];
                            case 2:
                                return t = r.sent(), this.finalize(), [2, t];
                            case 3:
                                return [2];
                            case 4:
                                return [3, 6];
                            case 5:
                                if (n = r.sent(), this.finalize(), "AbortError" !== n.name) throw n;
                                return [3, 6];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.resetAllVariables = function() {
                this.liffId = "", this.allowPostMessageOrigin = "", this.payloadToShareTargetPicker = null, this.ott = "", this.popupWindow = null, this.timeoutIDForHealthCheck = null, this.abortController = null, this.internalError = null, this.doesWaitForSubwindowResult = !1
            }, e.prototype.reset = function() {
                this.finalize(), this.resetAllVariables()
            }, e.prototype.finalize = function() {
                var e, t;
                this.abortController && this.abortController.abort(), B() || (e = this.timeoutIDForHealthCheck, t = this.popupWindow, st(window, "message.receivedHealthcheck"), e && clearTimeout(e), t && !t.closed && t.close())
            }, e.prototype.buildPayloadToShareTargetPicker = function(e) {
                return {
                    messages: e.messages,
                    referrer: e.referrer
                }
            }, e.prototype.initAllowPostMessageOrigin = function(e) {
                return void 0 === e && (e = Ae("shareTargetPicker")), pt(e)
            }, e.prototype.initOtt = function() {
                return D(this, void 0, void 0, (function() {
                    var e, t, n;
                    return C(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return this.abortController && (e = this.abortController.signal), t = Ae("shareTargetPickerOtt") + "?" + pe({
                                    liffId: this.liffId
                                }), n = this, [4, Me(t, {
                                    method: "GET",
                                    signal: e
                                }).then((function(e) {
                                    return e.ott
                                }))];
                            case 1:
                                return n.ott = r.sent(), [2]
                        }
                    }))
                }))
            }, e.prototype.prepareAnotherWindow = function() {
                var e;
                B() || ("ios" !== S() || (void 0 === e && (e = window.navigator.userAgent), /ipad/.test(e.toLowerCase())) ? this.popupWindow = window.open("", "liffpopup", "width=480, height=640, menubar=no, toolbar=no, scrollbars=yes") : this.popupWindow = window.open())
            }, e.prototype.openAnotherWindow = function() {
                if (B() && this.payloadToShareTargetPicker) e = this.liffId, t = this.ott, n = this.payloadToShareTargetPicker, r = {
                    liffId: e,
                    ott: t,
                    data: JSON.stringify(n)
                }, location.href = mt.SHARE_TARGET_PICKER_SCHEME_URL + "?" + pe(r);
                else {
                    if (this.timeoutIDForHealthCheck = window.setTimeout(this.healthCheck.bind(this), 1e3), !this.popupWindow) throw V("CREATE_SUBWINDOW_FAILED");
                    ! function(e, t, n) {
                        var r = {
                            liffId: t,
                            ott: n
                        };
                        e.location.href = Ae("shareTargetPicker") + "?" + pe(r)
                    }(this.popupWindow, this.liffId, this.ott)
                }
                var e, t, n, r
            }, e.prototype.initListener = function() {
                B() || bt(this.onReceivedHealthcheck.bind(this), this.allowPostMessageOrigin)
            }, e.prototype.healthCheck = function() {
                return D(this, void 0, void 0, (function() {
                    var e;
                    return C(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                if (this.popupWindow && !this.popupWindow.closed) return [3, 7];
                                if (!this.doesWaitForSubwindowResult) return [3, 5];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, this.onCanceled()];
                            case 2:
                                return t.sent(), [3, 4];
                            case 3:
                                return e = t.sent(), this.internalError = e, [3, 4];
                            case 4:
                                return [3, 6];
                            case 5:
                                this.finalize(), t.label = 6;
                            case 6:
                                return [3, 8];
                            case 7:
                                n = this.popupWindow, r = this.allowPostMessageOrigin, gt(n, "healthcheck", void 0, r), this.timeoutIDForHealthCheck = window.setTimeout(this.healthCheck.bind(this), 1e3), t.label = 8;
                            case 8:
                                return [2]
                        }
                        var n, r
                    }))
                }))
            }, e.prototype.onReceivedHealthcheck = function() {
                if (!this.popupWindow || !this.payloadToShareTargetPicker) throw V("CREATE_SUBWINDOW_FAILED");
                var e, t, n;
                e = this.popupWindow, t = this.payloadToShareTargetPicker, n = this.allowPostMessageOrigin, gt(e, "ready", t, n)
            }, e.prototype.onCanceled = function() {
                return D(this, void 0, void 0, (function() {
                    var e, t;
                    return C(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                if (B() || !this.ott) throw new Error("need to call with ott in client");
                                return this.abortController && (e = this.abortController.signal), t = {
                                    liffId: this.liffId,
                                    ott: this.ott
                                }, [4, Me(Ae("shareTargetPickerResult") + "?" + pe(t), {
                                    method: "POST",
                                    signal: e,
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    },
                                    body: "result=CANCEL"
                                })];
                            case 1:
                                return [2, "ok" === n.sent().status]
                        }
                    }))
                }))
            }, e.prototype.getShareResult = function() {
                return D(this, void 0, void 0, (function() {
                    var e, t;
                    return C(this, (function(n) {
                        if (!this.ott) throw new Error("need to call with ott in client");
                        return this.abortController && (e = this.abortController.signal), t = {
                            liffId: this.liffId,
                            ott: this.ott
                        }, [2, Me(Ae("shareTargetPickerResult") + "?" + pe(t), {
                            method: "GET",
                            headers: {
                                Accept: "application/json"
                            },
                            signal: e
                        })]
                    }))
                }))
            }, e.isPollingTimeOut = function(e, t) {
                return (t - e) / 6e4 >= 10
            }, e.prototype.pollingShareResult = function() {
                return D(this, void 0, void 0, (function() {
                    var t, n;
                    return C(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                t = Date.now(), r.label = 1;
                            case 1:
                                if (e.isPollingTimeOut(t, Date.now())) return [3, 4];
                                if (this.internalError) throw this.internalError;
                                return [4, this.getShareResult()];
                            case 2:
                                if ((n = r.sent()) && n.result) switch (n.result) {
                                    case "SUCCESS":
                                        return [2, {
                                            status: "success"
                                        }];
                                    case "CANCEL":
                                        return [2];
                                    case "FAILURE":
                                    default:
                                        throw new Error(n.resultDescription)
                                }
                                return [4, new Promise((function(e) {
                                    setTimeout(e, 500)
                                }))];
                            case 3:
                                return r.sent(), [3, 1];
                            case 4:
                                throw new Error("Timeout: not finished within 10min")
                        }
                    }))
                }))
            }, e
        }();
        var _t = {
            init: $e,
            getOS: S,
            getVersion: function() {
                return "2.3.2"
            },
            getLanguage: function() {
                return navigator.language
            },
            isInClient: B,
            isLoggedIn: fe,
            login: Oe,
            logout: he,
            getAccessToken: ne,
            getIDToken: ie,
            getDecodedIDToken: se,
            getContext: ue,
            openWindow: function(e) {
                if (! function(e) {
                        if (!e || "object" != typeof e) return !1;
                        var t = e,
                            n = t.url,
                            r = [typeof n, typeof t.external],
                            i = r[1];
                        return "string" === r[0] && "" !== n && ("undefined" === i || "boolean" === i)
                    }(e)) throw V("INVALID_ARGUMENT", "Invalid parameters for liff.openWindow()");
                if (B())
                    if (window._liff.postMessage) nt("openWindow", e);
                    else {
                        var t = e.url,
                            n = e.external,
                            r = void 0 !== n && n;
                        window.open(function(e, t) {
                            var n = e.split("?"),
                                r = n[0],
                                i = n[1],
                                o = (void 0 === i ? "" : i).split("#"),
                                s = o[0],
                                a = o[1];
                            return r + "?is_liff_external_open_window=" + !!t + (s ? "&" + s.split("&").map(decodeURIComponent).filter((function(e) {
                                return -1 === e.indexOf("is_liff_external_open_window")
                            })).join("&").concat(a ? "#" + a : "") : "")
                        }(t, r))
                    }
                else window.open(e.url, "_blank")
            },
            closeWindow: function() {
                window._liff && window._liff.postMessage ? nt("closeWindow") : window.close()
            },
            getFeatures: Z,
            getFriendship: function() {
                return Me(Ae("friendship"))
            },
            checkFeature: function(e) {
                return Z().indexOf(e) > -1
            },
            getAId: function() {
                return ((ue() || {}).d || {}).aId
            },
            getProfilePlus: function() {
                return (ue() || {}).profilePlus
            },
            getIsVideoAutoPlay: function() {
                return ((ue() || {}).d || {}).autoplay || !1
            },
            getLineVersion: j,
            isApiAvailable: et,
            getProfile: function() {
                return Me(Ae("profile"))
            },
            sendMessages: function(e, t) {
                if (! function(e) {
                        return Array.isArray(e) && e.every(it)
                    }(e)) return ot("Parameter 'messages' must be an array of { type, ... }");
                var n = e.length;
                return n < 1 || n > 5 ? ot("Number of messages should be in range 1 to 5.") : function(e) {
                    return Boolean(e && e.type !== rt.none)
                }(t) ? function(e) {
                    return e.type === rt.ott && Boolean(e.token && 0 !== e.token.length)
                }(t) ? Me(Ae("messageOTT"), {
                    method: "POST",
                    body: JSON.stringify({
                        token: t.token,
                        messages: e
                    })
                }) : ot("incorrect options") : Me(Ae("message"), {
                    method: "POST",
                    body: JSON.stringify({
                        messages: e
                    })
                })
            },
            userPicker: function(e) {
                return void 0 === e && (e = {
                    routerMode: R.NONE
                }), D(this, void 0, void 0, (function() {
                    var t, n, r;
                    return C(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (t = Ae("userPicker") + "?liffId=" + Y().liffId, !fe()) throw V("UNAUTHORIZED", "Need access_token for api call, Please login first");
                                i.label = 1;
                            case 1:
                                if (i.trys.push([1, 6, , 7]), !(r = ne())) throw new Error("AccessToken is empty");
                                return "web" !== S() || function(e) {
                                    void 0 === e && (e = window.navigator.userAgent);
                                    var t = e.toLowerCase();
                                    return -1 != t.indexOf("msie") || -1 != t.indexOf("trident")
                                }() ? [3, 3] : [4, (n = new wt(t, r, window)).init()];
                            case 2:
                                return i.sent(), [3, 5];
                            case 3:
                                return [4, (n = new vt(t, r, window)).init(e.routerMode)];
                            case 4:
                                i.sent(), i.label = 5;
                            case 5:
                                return [3, 7];
                            case 6:
                                throw V("CREATE_SUBWINDOW_FAILED", i.sent().message);
                            case 7:
                                return i.trys.push([7, 9, , 10]), [4, n.start()];
                            case 8:
                                return [2, i.sent()];
                            case 9:
                                throw V("EXCEPTION_IN_SUBWINDOW", i.sent().message);
                            case 10:
                                return [2]
                        }
                    }))
                }))
            },
            shareTargetPicker: function(e) {
                return D(this, void 0, void 0, (function() {
                    var t, n, r, i, o, s, a, c, u, l;
                    return C(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                if (t = (ue() || {}).availability, n = (t || {}).shareTargetPicker, i = (r = n || {}).permission, o = r.minVer, !i) throw B() ? V("FORBIDDEN", "Need LINE App " + o + " at least or consent on shareTargetPicker usage on LINE developer site") : V("FORBIDDEN", "Need consent on shareTargetPicker usage on LINE developer site");
                                if (!fe()) throw V("UNAUTHORIZED", "Need access_token for api call, Please login first");
                                if (!e || !Array.isArray(e) || 0 === e.length) throw V("INVALID_ARGUMENT", "no proper argument");
                                if (e.length > 5) throw V("INVALID_ARGUMENT", "exceed the limit of num of messages");
                                if (!(s = Y().liffId)) throw V("INVALID_CONFIG");
                                f.label = 1;
                            case 1:
                                return f.trys.push([1, 3, , 4]), a = It.getInstance(), c = j(), u = {
                                    waitForSubwindowResult: !0
                                }, B() && c && x(c, "10.11.0") < 0 && (u.waitForSubwindowResult = !1), [4, a.init({
                                    messages: e,
                                    referrer: {
                                        liffId: s,
                                        url: location.origin
                                    },
                                    options: u
                                })];
                            case 2:
                                return [2, f.sent()];
                            case 3:
                                throw (l = f.sent()) instanceof W ? l : V("EXCEPTION_IN_SUBWINDOW", l.message);
                            case 4:
                                return [2]
                        }
                    }))
                }))
            },
            permanentLink: {
                createUrl: function() {
                    var e = we(),
                        t = window.location,
                        n = t.pathname,
                        r = t.search,
                        i = t.hash,
                        o = t.origin,
                        s = new URL(e.endpointUrl);
                    if (s.origin !== o || ! function(e, t) {
                            return 0 === t.indexOf(e) && (e.endsWith("/") && (e = e.substring(0, e.length - 1)), void 0 === t[e.length] || "/" === t[e.length])
                        }(s.pathname, n)) throw V("INVALID_CONFIG", "Current page is not under entrypoint.");
                    var a = n.substring(s.pathname.length);
                    a.length > 0 && "/" !== a[0] && (a = "/" + a);
                    var c = new RegExp("^" + M.join("|")),
                        u = i.substring(1).split("&").filter((function(e) {
                            return !c.test(e) && Boolean(e)
                        })).join("&"),
                        l = u === s.hash.substring(1) ? "" : u,
                        f = function(e) {
                            return e.substring(1).split("&").filter((function(e) {
                                return !/liff\.state/.test(e) && Boolean(e)
                            }))
                        },
                        d = f(r),
                        h = f(s.search);
                    ve && d.push(ve);
                    for (var p = 0; p < h.length; p++) {
                        var y = h[p],
                            v = d.indexOf(y);
                        v > -1 && d.splice(v, 1)
                    }
                    var w = d.join("&"),
                        m = a + ("" !== w ? "?" + w : "") + (l ? "#" + l : "");
                    return "replace" === e.permanentLinkPattern && "" !== m && (m = "" + n + r + (l ? "#" + l : "")), "https://liff.line.me/" + Y().liffId + m
                },
                setExtraQueryParam: function(e) {
                    ve = e
                }
            },
            ready: Xe,
            get id() {
                return Y().liffId || null
            },
            _dispatchEvent: function(e) {
                var t = {};
                try {
                    t = JSON.parse(e)
                } catch (r) {
                    throw V("INVALID_ARGUMENT", r.message)
                }
                var n = function(e) {
                    return new CustomEvent("liffEvent", {
                        detail: e
                    })
                }(t);
                window.dispatchEvent(n)
            },
            _call: nt,
            _addListener: De,
            _removeListener: Ce,
            _postMessage: tt
        };
        _t.init = $e.bind(_t);
        var Tt = _t;
        t.default = Tt
    }]).default
}));