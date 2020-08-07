(function () {
	function av(q, p, t) {
		return q.call.apply(q.bind, arguments)
	}

	function a0(q, p, u) {
		if (!q) {
			throw Error()
		}
		if (2 < arguments.length) {
			var t = Array.prototype.slice.call(arguments, 2);
			return function () {
				var v = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(v, t);
				return q.apply(p, v)
			}
		}
		return function () {
			return q.apply(p, arguments)
		}
	}

	function aZ(q, p, t) {
		aZ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? av : a0;
		return aZ.apply(null, arguments)
	}
	var aX = Date.now || function () {
		return +new Date
	};

	function aH(q, p) {
		this.a = q;
		this.m = p || q;
		this.c = this.m.document
	}
	var aw = !!window.FontFace;

	function aT(q, p, v, u) {
		p = q.c.createElement(p);
		if (v) {
			for (var t in v) {
				v.hasOwnProperty(t) && ("style" == t ? p.style.cssText = v[t] : p.setAttribute(t, v[t]))
			}
		}
		u && p.appendChild(q.c.createTextNode(u));
		return p
	}

	function aR(q, p, t) {
		q = q.c.getElementsByTagName(p)[0];
		q || (q = document.documentElement);
		q.insertBefore(t, q.lastChild)
	}

	function aP(p) {
		p.parentNode && p.parentNode.removeChild(p)
	}

	function aN(q, p, y) {
		p = p || [];
		y = y || [];
		for (var w = q.className.split(/\s+/), v = 0; v < p.length; v += 1) {
			for (var u = !1, t = 0; t < w.length; t += 1) {
				if (p[v] === w[t]) {
					u = !0;
					break
				}
			}
			u || w.push(p[v])
		}
		p = [];
		for (v = 0; v < w.length; v += 1) {
			u = !1;
			for (t = 0; t < y.length; t += 1) {
				if (w[v] === y[t]) {
					u = !0;
					break
				}
			}
			u || p.push(w[v])
		}
		q.className = p.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
	}

	function aL(q, p) {
		for (var v = q.className.split(/\s+/), u = 0, t = v.length; u < t; u++) {
			if (v[u] == p) {
				return !0
			}
		}
		return !1
	}

	function aK(q) {
		if ("string" === typeof q.f) {
			return q.f
		}
		var p = q.m.location.protocol;
		"about:" == p && (p = q.a.location.protocol);
		return "https:" == p ? "https:" : "http:"
	}

	function a(p) {
		return p.m.location.hostname || p.a.location.hostname
	}

	function au(q, p, z) {
		function y() {
			t && w && v && (t(u), t = null)
		}
		p = aT(q, "link", {
			rel: "stylesheet",
			href: p,
			media: "all"
		});
		var w = !1,
			v = !0,
			u = null,
			t = z || null;
		aw ? (p.onload = function () {
			w = !0;
			y()
		}, p.onerror = function () {
			w = !0;
			u = Error("Stylesheet failed to load");
			y()
		}) : setTimeout(function () {
			w = !0;
			y()
		}, 0);
		aR(q, "head", p)
	}

	function at(q, p, y, w) {
		var v = q.c.getElementsByTagName("head")[0];
		if (v) {
			var u = aT(q, "script", {
					src: p
				}),
				t = !1;
			u.onload = u.onreadystatechange = function () {
				t || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (t = !0, y && y(null), u.onload = u.onreadystatechange = null, "HEAD" == u.parentNode.tagName && v.removeChild(u))
			};
			v.appendChild(u);
			setTimeout(function () {
				t || (t = !0, y && y(Error("Script load timeout")))
			}, w || 5000);
			return u
		}
		return null
	}

	function ar() {
		this.a = 0;
		this.c = null
	}

	function aq(p) {
		p.a++;
		return function () {
			p.a--;
			ap(p)
		}
	}

	function ao(q, p) {
		q.c = p;
		ap(q)
	}

	function ap(p) {
		0 == p.a && p.c && (p.c(), p.c = null)
	}

	function an(p) {
		this.a = p || "-"
	}
	an.prototype.c = function (q) {
		for (var p = [], t = 0; t < arguments.length; t++) {
			p.push(arguments[t].replace(/[\W_]+/g, "").toLowerCase())
		}
		return p.join(this.a)
	};

	function am(q, p) {
		this.c = q;
		this.f = 4;
		this.a = "n";
		var t = (p || "n4").match(/^([nio])([1-9])$/i);
		t && (this.a = t[1], this.f = parseInt(t[2], 10))
	}

	function aI(p) {
		return al(p) + " " + (p.f + "00") + " 300px " + ak(p.c)
	}

	function ak(q) {
		var p = [];
		q = q.split(/,\s*/);
		for (var u = 0; u < q.length; u++) {
			var t = q[u].replace(/['"]/g, ""); - 1 != t.indexOf(" ") || /^\d/.test(t) ? p.push("'" + t + "'") : p.push(t)
		}
		return p.join(",")
	}

	function aj(p) {
		return p.a + p.f
	}

	function al(q) {
		var p = "normal";
		"o" === q.a ? p = "oblique" : "i" === q.a && (p = "italic");
		return p
	}

	function ax(q) {
		var p = 4,
			u = "n",
			t = null;
		q && ((t = q.match(/(normal|oblique|italic)/i)) && t[1] && (u = t[1].substr(0, 1).toLowerCase()), (t = q.match(/([1-9]00|normal|bold)/i)) && t[1] && (/bold/i.test(t[1]) ? p = 7 : /[1-9]00/.test(t[1]) && (p = parseInt(t[1].substr(0, 1), 10))));
		return u + p
	}

	function b(q, p) {
		this.c = q;
		this.f = q.m.document.documentElement;
		this.h = p;
		this.a = new an("-");
		this.j = !1 !== p.events;
		this.g = !1 !== p.classes
	}

	function aJ(p) {
		p.g && aN(p.f, [p.a.c("wf", "loading")]);
		ai(p, "loading")
	}

	function ah(q) {
		if (q.g) {
			var p = aL(q.f, q.a.c("wf", "active")),
				u = [],
				t = [q.a.c("wf", "loading")];
			p || u.push(q.a.c("wf", "inactive"));
			aN(q.f, u, t)
		}
		ai(q, "inactive")
	}

	function ai(q, p, t) {
		if (q.j && q.h[p]) {
			if (t) {
				q.h[p](t.c, aj(t))
			} else {
				q.h[p]()
			}
		}
	}

	function ay() {
		this.c = {}
	}

	function e(q, p, w) {
		var v = [],
			u;
		for (u in p) {
			if (p.hasOwnProperty(u)) {
				var t = q.c[u];
				t && v.push(t(p[u], w))
			}
		}
		return v
	}

	function ag(q, p) {
		this.c = q;
		this.f = p;
		this.a = aT(this.c, "span", {
			"aria-hidden": "true"
		}, this.f)
	}

	function af(p) {
		aR(p.c, "body", p.a)
	}

	function ad(p) {
		return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + ak(p.c) + ";" + ("font-style:" + al(p) + ";font-weight:" + (p.f + "00") + ";")
	}

	function ab(q, p, w, v, u, t) {
		this.g = q;
		this.j = p;
		this.a = v;
		this.c = w;
		this.f = u || 3000;
		this.h = t || void 0
	}
	ab.prototype.start = function () {
		var q = this.c.m.document,
			p = this,
			v = aX(),
			u = new Promise(function (z, y) {
				function w() {
					aX() - v >= p.f ? y() : q.fonts.load(aI(p.a), p.h).then(function (A) {
						1 <= A.length ? z() : setTimeout(w, 25)
					}, function () {
						y()
					})
				}
				w()
			}),
			t = new Promise(function (w, y) {
				setTimeout(y, p.f)
			});
		Promise.race([t, u]).then(function () {
			p.g(p.a)
		}, function () {
			p.j(p.a)
		})
	};

	function s(q, p, y, w, v, u, t) {
		this.v = q;
		this.B = p;
		this.c = y;
		this.a = w;
		this.s = t || "BESbswy";
		this.f = {};
		this.w = v || 3000;
		this.u = u || null;
		this.o = this.j = this.h = this.g = null;
		this.g = new ag(this.c, this.s);
		this.h = new ag(this.c, this.s);
		this.j = new ag(this.c, this.s);
		this.o = new ag(this.c, this.s);
		q = new am(this.a.c + ",serif", aj(this.a));
		q = ad(q);
		this.g.a.style.cssText = q;
		q = new am(this.a.c + ",sans-serif", aj(this.a));
		q = ad(q);
		this.h.a.style.cssText = q;
		q = new am("serif", aj(this.a));
		q = ad(q);
		this.j.a.style.cssText = q;
		q = new am("sans-serif", aj(this.a));
		q = ad(q);
		this.o.a.style.cssText = q;
		af(this.g);
		af(this.h);
		af(this.j);
		af(this.o)
	}
	var o = {
			D: "serif",
			C: "sans-serif"
		},
		m = null;

	function k() {
		if (null === m) {
			var p = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
			m = !!p && (536 > parseInt(p[1], 10) || 536 === parseInt(p[1], 10) && 11 >= parseInt(p[2], 10))
		}
		return m
	}
	s.prototype.start = function () {
		this.f.serif = this.j.a.offsetWidth;
		this.f["sans-serif"] = this.o.a.offsetWidth;
		this.A = aX();
		aM(this)
	};

	function az(q, p, u) {
		for (var t in o) {
			if (o.hasOwnProperty(t) && p === q.f[o[t]] && u === q.f[o[t]]) {
				return !0
			}
		}
		return !1
	}

	function aM(q) {
		var p = q.g.a.offsetWidth,
			u = q.h.a.offsetWidth,
			t;
		(t = p === q.f.serif && u === q.f["sans-serif"]) || (t = k() && az(q, p, u));
		t ? aX() - q.A >= q.w ? k() && az(q, p, u) && (null === q.u || q.u.hasOwnProperty(q.a.c)) ? i(q, q.v) : i(q, q.B) : h(q) : i(q, q.v)
	}

	function h(p) {
		setTimeout(aZ(function () {
			aM(this)
		}, p), 50)
	}

	function i(q, p) {
		setTimeout(aZ(function () {
			aP(this.g.a);
			aP(this.h.a);
			aP(this.j.a);
			aP(this.o.a);
			p(this.a)
		}, q), 0)
	}

	function g(q, p, t) {
		this.c = q;
		this.a = p;
		this.f = 0;
		this.o = this.j = !1;
		this.s = t
	}
	var f = null;
	g.prototype.g = function (q) {
		var p = this.a;
		p.g && aN(p.f, [p.a.c("wf", q.c, aj(q).toString(), "active")], [p.a.c("wf", q.c, aj(q).toString(), "loading"), p.a.c("wf", q.c, aj(q).toString(), "inactive")]);
		ai(p, "fontactive", q);
		this.o = !0;
		aO(this)
	};
	g.prototype.h = function (q) {
		var p = this.a;
		if (p.g) {
			var v = aL(p.f, p.a.c("wf", q.c, aj(q).toString(), "active")),
				u = [],
				t = [p.a.c("wf", q.c, aj(q).toString(), "loading")];
			v || u.push(p.a.c("wf", q.c, aj(q).toString(), "inactive"));
			aN(p.f, u, t)
		}
		ai(p, "fontinactive", q);
		aO(this)
	};

	function aO(p) {
		0 == --p.f && p.j && (p.o ? (p = p.a, p.g && aN(p.f, [p.a.c("wf", "active")], [p.a.c("wf", "loading"), p.a.c("wf", "inactive")]), ai(p, "active")) : ah(p.a))
	}

	function aA(p) {
		this.j = p;
		this.a = new ay;
		this.h = 0;
		this.f = this.g = !0
	}
	aA.prototype.load = function (p) {
		this.c = new aH(this.j, p.context || this.j);
		this.g = !1 !== p.events;
		this.f = !1 !== p.classes;
		j(this, new b(this.c, p), p)
	};

	function aS(q, p, w, v, u) {
		var t = 0 == --q.h;
		(q.f || q.g) && setTimeout(function () {
			var B = u || null,
				C = v || null || {};
			if (0 === w.length && t) {
				ah(p.a)
			} else {
				p.f += w.length;
				t && (p.j = t);
				var D, z = [];
				for (D = 0; D < w.length; D++) {
					var A = w[D],
						F = C[A.c],
						E = p.a,
						y = A;
					E.g && aN(E.f, [E.a.c("wf", y.c, aj(y).toString(), "loading")]);
					ai(E, "fontloading", y);
					E = null;
					null === f && (f = window.FontFace ? (y = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(y[1], 10) : !0 : !1);
					f ? E = new ab(aZ(p.g, p), aZ(p.h, p), p.c, A, p.s, F) : E = new s(aZ(p.g, p), aZ(p.h, p), p.c, A, p.s, B, F);
					z.push(E)
				}
				for (D = 0; D < z.length; D++) {
					z[D].start()
				}
			}
		}, 0)
	}

	function j(q, p, w) {
		var v = [],
			u = w.timeout;
		aJ(p);
		var v = e(q.a, w, q.c),
			t = new g(q.c, p, u);
		q.h = v.length;
		p = 0;
		for (w = v.length; p < w; p++) {
			v[p].load(function (y, z, A) {
				aS(q, t, y, z, A)
			})
		}
	}

	function aC(q, p) {
		this.c = q;
		this.a = p
	}

	function n(q, p, u) {
		var t = aK(q.c);
		q = (q.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
		return t + "//" + q + "/" + p + ".js" + (u ? "?v=" + u : "")
	}
	aC.prototype.load = function (q) {
		function p() {
			if (t["__mti_fntLst" + v]) {
				var C = t["__mti_fntLst" + v](),
					B = [],
					A;
				if (C) {
					for (var y = 0; y < C.length; y++) {
						var z = C[y].fontfamily;
						void 0 != C[y].fontStyle && void 0 != C[y].fontWeight ? (A = C[y].fontStyle + C[y].fontWeight, B.push(new am(z, A))) : B.push(new am(z))
					}
				}
				q(B)
			} else {
				setTimeout(function () {
					p()
				}, 50)
			}
		}
		var w = this,
			v = w.a.projectId,
			u = w.a.version;
		if (v) {
			var t = w.c.m;
			at(this.c, n(w, v, u), function (y) {
				y ? q([]) : (t["__MonotypeConfiguration__" + v] = function () {
					return w.a
				}, p())
			}).id = "__MonotypeAPIScript__" + v
		} else {
			q([])
		}
	};

	function aV(q, p) {
		this.c = q;
		this.a = p
	}
	aV.prototype.load = function (B) {
		var A, z, y = this.a.urls || [],
			w = this.a.families || [],
			v = this.a.testStrings || {},
			u = new ar;
		A = 0;
		for (z = y.length; A < z; A++) {
			au(this.c, y[A], aq(u))
		}
		var q = [];
		A = 0;
		for (z = w.length; A < z; A++) {
			if (y = w[A].split(":"), y[1]) {
				for (var t = y[1].split(","), p = 0; p < t.length; p += 1) {
					q.push(new am(y[0], t[p]))
				}
			} else {
				q.push(new am(y[0]))
			}
		}
		ao(u, function () {
			B(q, v)
		})
	};

	function aE(q, p, t) {
		q ? this.c = q : this.c = p + x;
		this.a = [];
		this.f = [];
		this.g = t || ""
	}
	var x = "//fonts.googleapis.com/css";

	function aY(q, p) {
		for (var w = p.length, v = 0; v < w; v++) {
			var u = p[v].split(":");
			3 == u.length && q.f.push(u.pop());
			var t = "";
			2 == u.length && "" != u[1] && (t = ":");
			q.a.push(u.join(t))
		}
	}

	function aG(q) {
		if (0 == q.a.length) {
			throw Error("No fonts to load!")
		}
		if (-1 != q.c.indexOf("kit=")) {
			return q.c
		}
		for (var p = q.a.length, u = [], t = 0; t < p; t++) {
			u.push(q.a[t].replace(/ /g, "+"))
		}
		p = q.c + "?family=" + u.join("%7C");
		0 < q.f.length && (p += "&subset=" + q.f.join(","));
		0 < q.g.length && (p += "&text=" + encodeURIComponent(q.g));
		return p
	}

	function ae(p) {
		this.f = p;
		this.a = [];
		this.c = {}
	}
	var aQ = {
			latin: "BESbswy",
			"latin-ext": "\u00e7\u00f6\u00fc\u011f\u015f",
			cyrillic: "\u0439\u044f\u0416",
			greek: "\u03b1\u03b2\u03a3",
			khmer: "\u1780\u1781\u1782",
			Hanuman: "\u1780\u1781\u1782"
		},
		aB = {
			thin: "1",
			extralight: "2",
			"extra-light": "2",
			ultralight: "2",
			"ultra-light": "2",
			light: "3",
			regular: "4",
			book: "4",
			medium: "5",
			"semi-bold": "6",
			semibold: "6",
			"demi-bold": "6",
			demibold: "6",
			bold: "7",
			"extra-bold": "8",
			extrabold: "8",
			"ultra-bold": "8",
			ultrabold: "8",
			black: "9",
			heavy: "9",
			l: "3",
			r: "4",
			b: "7"
		},
		l = {
			i: "i",
			italic: "i",
			n: "n",
			normal: "n"
		},
		aU = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

	function aD(E) {
		for (var D = E.f.length, C = 0; C < D; C++) {
			var B = E.f[C].split(":"),
				A = B[0].replace(/\+/g, " "),
				z = ["n4"];
			if (2 <= B.length) {
				var y;
				var v = B[1];
				y = [];
				if (v) {
					for (var v = v.split(","), w = v.length, t = 0; t < w; t++) {
						var u;
						u = v[t];
						if (u.match(/^[\w-]+$/)) {
							var q = aU.exec(u.toLowerCase());
							if (null == q) {
								u = ""
							} else {
								u = q[2];
								u = null == u || "" == u ? "n" : l[u];
								q = q[1];
								if (null == q || "" == q) {
									q = "4"
								} else {
									var p = aB[q],
										q = p ? p : isNaN(q) ? "4" : q.substr(0, 1)
								}
								u = [u, q].join("")
							}
						} else {
							u = ""
						}
						u && y.push(u)
					}
				}
				0 < y.length && (z = y);
				3 == B.length && (B = B[2], y = [], B = B ? B.split(",") : y, 0 < B.length && (B = aQ[B[0]]) && (E.c[A] = B))
			}
			E.c[A] || (B = aQ[A]) && (E.c[A] = B);
			for (B = 0; B < z.length; B += 1) {
				E.a.push(new am(A, z[B]))
			}
		}
	}

	function r(q, p) {
		this.c = q;
		this.a = p
	}
	var aW = {
		Arimo: !0,
		Cousine: !0,
		Tinos: !0
	};
	r.prototype.load = function (q) {
		var p = new ar,
			w = this.c,
			v = new aE(this.a.api, aK(w), this.a.text),
			u = this.a.families;
		aY(v, u);
		var t = new ae(u);
		aD(t);
		au(w, aG(v), aq(p));
		ao(p, function () {
			q(t.a, t.c, aW)
		})
	};

	function aF(q, p) {
		this.c = q;
		this.a = p
	}
	aF.prototype.load = function (q) {
		var p = this.a.id,
			t = this.c.m;
		p ? at(this.c, (this.a.api || "https://use.typekit.net") + "/" + p + ".js", function (v) {
			if (v) {
				q([])
			} else {
				if (t.Typekit && t.Typekit.config && t.Typekit.config.fn) {
					v = t.Typekit.config.fn;
					for (var B = [], A = 0; A < v.length; A += 2) {
						for (var z = v[A], w = v[A + 1], y = 0; y < w.length; y++) {
							B.push(new am(z, w[y]))
						}
					}
					try {
						t.Typekit.load({
							events: !1,
							classes: !1,
							async: !0
						})
					} catch (u) {}
					q(B)
				}
			}
		}, 2000) : q([])
	};

	function ac(q, p) {
		this.c = q;
		this.f = p;
		this.a = []
	}
	ac.prototype.load = function (q) {
		var p = this.f.id,
			u = this.c.m,
			t = this;
		p ? (u.__webfontfontdeckmodule__ || (u.__webfontfontdeckmodule__ = {}), u.__webfontfontdeckmodule__[p] = function (v, A) {
			for (var z = 0, w = A.fonts.length; z < w; ++z) {
				var y = A.fonts[z];
				t.a.push(new am(y.name, ax("font-weight:" + y.weight + ";font-style:" + y.style)))
			}
			q(t.a)
		}, at(this.c, aK(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + a(this.c) + "/" + p + ".js", function (v) {
			v && q([])
		})) : q([])
	};
	var d = new aA(window);
	d.a.c.custom = function (q, p) {
		return new aV(p, q)
	};
	d.a.c.fontdeck = function (q, p) {
		return new ac(p, q)
	};
	d.a.c.monotype = function (q, p) {
		return new aC(p, q)
	};
	d.a.c.typekit = function (q, p) {
		return new aF(p, q)
	};
	d.a.c.google = function (q, p) {
		return new r(p, q)
	};
	var c = {
		load: aZ(d.load, d)
	};
	"function" === typeof define && define.amd ? define(function () {
		return c
	}) : "undefined" !== typeof module && module.exports ? module.exports = c : (window.WebFont = c, window.WebFontConfig && d.load(window.WebFontConfig))
}());