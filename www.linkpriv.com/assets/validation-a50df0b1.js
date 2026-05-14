import {
    c as H
} from "./formattings-2053e446.js";
import {
    M as o,
    k as te
} from "./index-d46d43cb.js";
/*!
 * cpf-cnpj-validator v1.0.3
 * (c) 2020-present Carvalho, Vinicius Luiz <carvalho.viniciusluiz@gmail.com>
 * Released under the MIT License.
 */
const ne = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999", "12345678909"],
    ae = /[.-]/g,
    ie = /[^\d]/g,
    _ = e => {
        const r = e.split("").map(i => parseInt(i, 10)),
            t = r.length + 1,
            a = r.map((i, s) => i * (t - s)).reduce((i, s) => i + s) % 11;
        return a < 2 ? 0 : 11 - a
    },
    S = (e, r) => {
        const t = r ? ae : ie;
        return (e || "").replace(t, "")
    },
    Z = e => S(e).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4"),
    se = (e, r) => {
        const t = S(e, r);
        if (!t || t.length !== 11 || ne.includes(t)) return !1;
        let n = t.substr(0, 9);
        return n += _(n), n += _(n), n.substr(-2) === t.substr(-2)
    },
    le = e => {
        let r = "";
        for (let t = 0; t < 9; t += 1) r += Math.floor(Math.random() * 9);
        return r += _(r), r += _(r), e ? Z(r) : r
    };
var G = {
    verifierDigit: _,
    strip: S,
    format: Z,
    isValid: se,
    generate: le
};
const ue = ["00000000000000", "11111111111111", "22222222222222", "33333333333333", "44444444444444", "55555555555555", "66666666666666", "77777777777777", "88888888888888", "99999999999999"],
    oe = /[-\\/.]/g,
    ce = /[^\d]/g,
    b = e => {
        let r = 2;
        const a = e.split("").reduce((i, s) => [parseInt(s, 10)].concat(i), []).reduce((i, s) => (i += s * r, r = r === 9 ? 2 : r + 1, i), 0) % 11;
        return a < 2 ? 0 : 11 - a
    },
    D = (e, r) => {
        const t = r ? oe : ce;
        return (e || "").replace(t, "")
    },
    q = e => D(e).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5"),
    fe = (e, r) => {
        const t = D(e, r);
        if (!t || t.length !== 14 || ue.includes(t)) return !1;
        let n = t.substr(0, 12);
        return n += b(n), n += b(n), n.substr(-2) === t.substr(-2)
    },
    de = e => {
        let r = "";
        for (let t = 0; t < 12; t += 1) r += Math.floor(Math.random() * 9);
        return r += b(r), r += b(r), e ? q(r) : r
    };
var J = {
        verifierDigit: b,
        strip: D,
        format: q,
        isValid: fe,
        generate: de
    },
    K = {},
    pe = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
K.validate = function(e) {
    if (!e || e.length > 254) return !1;
    var r = pe.test(e);
    if (!r) return !1;
    var t = e.split("@");
    if (t[0].length > 64) return !1;
    var n = t[1].split(".");
    return !n.some(function(a) {
        return a.length > 63
    })
};
var ge = {
        visa: {
            niceType: "Visa",
            type: "visa",
            patterns: [4],
            gaps: [4, 8, 12],
            lengths: [16, 18, 19],
            code: {
                name: "CVV",
                size: 3
            }
        },
        mastercard: {
            niceType: "Mastercard",
            type: "mastercard",
            patterns: [
                [51, 55],
                [2221, 2229],
                [223, 229],
                [23, 26],
                [270, 271], 2720
            ],
            gaps: [4, 8, 12],
            lengths: [16],
            code: {
                name: "CVC",
                size: 3
            }
        },
        "american-express": {
            niceType: "American Express",
            type: "american-express",
            patterns: [34, 37],
            gaps: [4, 10],
            lengths: [15],
            code: {
                name: "CID",
                size: 4
            }
        },
        "diners-club": {
            niceType: "Diners Club",
            type: "diners-club",
            patterns: [
                [300, 305], 36, 38, 39
            ],
            gaps: [4, 10],
            lengths: [14, 16, 19],
            code: {
                name: "CVV",
                size: 3
            }
        },
        discover: {
            niceType: "Discover",
            type: "discover",
            patterns: [6011, [644, 649], 65],
            gaps: [4, 8, 12],
            lengths: [16, 19],
            code: {
                name: "CID",
                size: 3
            }
        },
        jcb: {
            niceType: "JCB",
            type: "jcb",
            patterns: [2131, 1800, [3528, 3589]],
            gaps: [4, 8, 12],
            lengths: [16, 17, 18, 19],
            code: {
                name: "CVV",
                size: 3
            }
        },
        unionpay: {
            niceType: "UnionPay",
            type: "unionpay",
            patterns: [620, [62100, 62182],
                [62184, 62187],
                [62185, 62197],
                [62200, 62205],
                [622010, 622999], 622018, [62207, 62209],
                [623, 626], 6270, 6272, 6276, [627700, 627779],
                [627781, 627799],
                [6282, 6289], 6291, 6292, 810, [8110, 8131],
                [8132, 8151],
                [8152, 8163],
                [8164, 8171]
            ],
            gaps: [4, 8, 12],
            lengths: [14, 15, 16, 17, 18, 19],
            code: {
                name: "CVN",
                size: 3
            }
        },
        maestro: {
            niceType: "Maestro",
            type: "maestro",
            patterns: [493698, [5e5, 504174],
                [504176, 506698],
                [506779, 508999],
                [56, 59], 63, 67, 6
            ],
            gaps: [4, 8, 12],
            lengths: [12, 13, 14, 15, 16, 17, 18, 19],
            code: {
                name: "CVC",
                size: 3
            }
        },
        elo: {
            niceType: "Elo",
            type: "elo",
            patterns: [401178, 401179, 438935, 457631, 457632, 431274, 451416, 457393, 504175, [506699, 506778],
                [509e3, 509999], 627780, 636297, 636368, [650031, 650033],
                [650035, 650051],
                [650405, 650439],
                [650485, 650538],
                [650541, 650598],
                [650700, 650718],
                [650720, 650727],
                [650901, 650978],
                [651652, 651679],
                [655e3, 655019],
                [655021, 655058]
            ],
            gaps: [4, 8, 12],
            lengths: [16],
            code: {
                name: "CVE",
                size: 3
            }
        },
        mir: {
            niceType: "Mir",
            type: "mir",
            patterns: [
                [2200, 2204]
            ],
            gaps: [4, 8, 12],
            lengths: [16, 17, 18, 19],
            code: {
                name: "CVP2",
                size: 3
            }
        },
        hiper: {
            niceType: "Hiper",
            type: "hiper",
            patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
            gaps: [4, 8, 12],
            lengths: [16],
            code: {
                name: "CVC",
                size: 3
            }
        },
        hipercard: {
            niceType: "Hipercard",
            type: "hipercard",
            patterns: [606282],
            gaps: [4, 8, 12],
            lengths: [16],
            code: {
                name: "CVC",
                size: 3
            }
        },
        verve: {
            niceType: "Verve",
            type: "verve",
            patterns: [
                [506099, 506127], 506129, [506133, 506150],
                [506158, 506163], 506166, 506168, 506170, 506173, [506176, 506180], 506184, [506187, 506188], 506191, 506195, 506197, 507865, 507866, [507868, 507877],
                [507880, 507888], 507900, 507941
            ],
            gaps: [4, 8, 12],
            lengths: [16, 18, 19],
            code: {
                name: "CVV",
                size: 3
            }
        }
    },
    ve = ge,
    I = {},
    T = {};
Object.defineProperty(T, "__esModule", {
    value: !0
});
T.clone = he;

function he(e) {
    return e ? JSON.parse(JSON.stringify(e)) : null
}
var N = {};
Object.defineProperty(N, "__esModule", {
    value: !0
});
N.matches = _e;

function me(e, r, t) {
    var n = String(r).length,
        a = e.substr(0, n),
        i = parseInt(a, 10);
    return r = parseInt(String(r).substr(0, a.length), 10), t = parseInt(String(t).substr(0, a.length), 10), i >= r && i <= t
}

function ye(e, r) {
    return r = String(r), r.substring(0, e.length) === e.substring(0, r.length)
}

function _e(e, r) {
    return Array.isArray(r) ? me(e, r[0], r[1]) : ye(e, r)
}
Object.defineProperty(I, "__esModule", {
    value: !0
});
I.addMatchingCardsToResults = Ve;
var be = T,
    Ce = N;

function Ve(e, r, t) {
    var n, a;
    for (n = 0; n < r.patterns.length; n++) {
        var i = r.patterns[n];
        if ((0, Ce.matches)(e, i)) {
            var s = (0, be.clone)(r);
            Array.isArray(i) ? a = String(i[0]).length : a = String(i).length, e.length >= a && (s.matchStrength = a), t.push(s);
            break
        }
    }
}
var x = {};
Object.defineProperty(x, "__esModule", {
    value: !0
});
x.isValidInputType = Pe;

function Pe(e) {
    return typeof e == "string" || e instanceof String
}
var j = {};
Object.defineProperty(j, "__esModule", {
    value: !0
});
j.findBestMatch = Oe;

function Me(e) {
    var r = e.filter(function(t) {
        return t.matchStrength
    }).length;
    return r > 0 && r === e.length
}

function Oe(e) {
    return Me(e) ? e.reduce(function(r, t) {
        return !r || Number(r.matchStrength) < Number(t.matchStrength) ? t : r
    }) : null
}
var $ = o && o.__assign || function() {
        return $ = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++) {
                r = arguments[t];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
            }
            return e
        }, $.apply(this, arguments)
    },
    W = ve,
    $e = I,
    Te = x,
    Ee = j,
    V = T,
    C = {},
    u = {
        VISA: "visa",
        MASTERCARD: "mastercard",
        AMERICAN_EXPRESS: "american-express",
        DINERS_CLUB: "diners-club",
        DISCOVER: "discover",
        JCB: "jcb",
        UNIONPAY: "unionpay",
        VERVE: "verve",
        MAESTRO: "maestro",
        ELO: "elo",
        MIR: "mir",
        HIPER: "hiper",
        HIPERCARD: "hipercard"
    },
    Q = [u.VISA, u.MASTERCARD, u.AMERICAN_EXPRESS, u.DINERS_CLUB, u.DISCOVER, u.JCB, u.UNIONPAY, u.VERVE, u.MAESTRO, u.ELO, u.MIR, u.HIPER, u.HIPERCARD],
    f = (0, V.clone)(Q);

function w(e) {
    return C[e] || W[e]
}

function Re() {
    return f.map(function(e) {
        return (0, V.clone)(w(e))
    })
}

function L(e, r) {
    r === void 0 && (r = !1);
    var t = f.indexOf(e);
    if (!r && t === -1) throw new Error('"' + e + '" is not a supported card type.');
    return t
}

function d(e) {
    var r = [];
    if (!(0, Te.isValidInputType)(e)) return r;
    if (e.length === 0) return Re();
    f.forEach(function(n) {
        var a = w(n);
        (0, $e.addMatchingCardsToResults)(e, a, r)
    });
    var t = (0, Ee.findBestMatch)(r);
    return t ? [t] : r
}
d.getTypeInfo = function(e) {
    return (0, V.clone)(w(e))
};
d.removeCard = function(e) {
    var r = L(e);
    f.splice(r, 1)
};
d.addCard = function(e) {
    var r = L(e.type, !0);
    C[e.type] = e, r === -1 && f.push(e.type)
};
d.updateCard = function(e, r) {
    var t = C[e] || W[e];
    if (!t) throw new Error('"'.concat(e, "\" is not a recognized type. Use `addCard` instead.'"));
    if (r.type && t.type !== r.type) throw new Error("Cannot overwrite type parameter.");
    var n = (0, V.clone)(t);
    n = $($({}, n), r), C[n.type] = n
};
d.changeOrder = function(e, r) {
    var t = L(e);
    f.splice(t, 1), f.splice(r, 0, e)
};
d.resetModifications = function() {
    f = (0, V.clone)(Q), C = {}
};
d.types = u;
var ee = d,
    z = {};
Object.defineProperty(z, "__esModule", {
    value: !0
});
z.cardholderName = De;
var Ae = /^[\d\s-]*$/,
    Se = 255;

function h(e, r) {
    return {
        isValid: e,
        isPotentiallyValid: r
    }
}

function De(e) {
    return typeof e != "string" ? h(!1, !1) : e.length === 0 ? h(!1, !0) : e.length > Se ? h(!1, !1) : Ae.test(e) ? h(!1, !0) : h(!0, !0)
}
var k = {};

function Ie(e) {
    for (var r = 0, t = !1, n = e.length - 1, a; n >= 0;) a = parseInt(e.charAt(n), 10), t && (a *= 2, a > 9 && (a = a % 10 + 1)), t = !t, r += a, n--;
    return r % 10 === 0
}
var Ne = Ie;
Object.defineProperty(k, "__esModule", {
    value: !0
});
k.cardNumber = je;
var xe = Ne,
    X = ee;

function g(e, r, t) {
    return {
        card: e,
        isPotentiallyValid: r,
        isValid: t
    }
}

function je(e, r) {
    r === void 0 && (r = {});
    var t, n, a;
    if (typeof e != "string" && typeof e != "number") return g(null, !1, !1);
    var i = String(e).replace(/-|\s/g, "");
    if (!/^\d*$/.test(i)) return g(null, !1, !1);
    var s = X(i);
    if (s.length === 0) return g(null, !1, !1);
    if (s.length !== 1) return g(null, !0, !1);
    var l = s[0];
    if (r.maxLength && i.length > r.maxLength) return g(l, !1, !1);
    r.skipLuhnValidation === !0 || l.type === X.types.UNIONPAY && r.luhnValidateUnionPay !== !0 ? n = !0 : n = xe(i), a = Math.max.apply(null, l.lengths), r.maxLength && (a = Math.min(r.maxLength, a));
    for (var p = 0; p < l.lengths.length; p++)
        if (l.lengths[p] === i.length) return t = i.length < a || n, g(l, t, n);
    return g(l, i.length < a, !1)
}
var B = {},
    U = {},
    P = {};
Object.defineProperty(P, "__esModule", {
    value: !0
});
P.expirationYear = Le;
var we = 19;

function c(e, r, t) {
    return {
        isValid: e,
        isPotentiallyValid: r,
        isCurrentYear: t || !1
    }
}

function Le(e, r) {
    r === void 0 && (r = we);
    var t;
    if (typeof e != "string") return c(!1, !1);
    if (e.replace(/\s/g, "") === "") return c(!1, !0);
    if (!/^\d*$/.test(e)) return c(!1, !1);
    var n = e.length;
    if (n < 2) return c(!1, !0);
    var a = new Date().getFullYear();
    if (n === 3) {
        var i = e.slice(0, 2),
            s = String(a).slice(0, 2);
        return c(!1, i === s)
    }
    if (n > 4) return c(!1, !1);
    var l = parseInt(e, 10),
        p = Number(String(a).substr(2, 2)),
        M = !1;
    if (n === 2) {
        if (String(a).substr(0, 2) === e) return c(!1, !0);
        t = p === l, M = l >= p && l <= p + r
    } else n === 4 && (t = a === l, M = l >= a && l <= a + r);
    return c(M, M, t)
}
var E = {};
Object.defineProperty(E, "__esModule", {
    value: !0
});
E.isArray = void 0;
E.isArray = Array.isArray || function(e) {
    return Object.prototype.toString.call(e) === "[object Array]"
};
Object.defineProperty(U, "__esModule", {
    value: !0
});
U.parseDate = Ue;
var ze = P,
    ke = E;

function Be(e) {
    var r = Number(e[0]),
        t;
    return r === 0 ? 2 : r > 1 || r === 1 && Number(e[1]) > 2 ? 1 : r === 1 ? (t = e.substr(1), (0, ze.expirationYear)(t).isPotentiallyValid ? 1 : 2) : e.length === 5 ? 1 : e.length > 5 ? 2 : 1
}

function Ue(e) {
    var r;
    if (/^\d{4}-\d{1,2}$/.test(e) ? r = e.split("-").reverse() : /\//.test(e) ? r = e.split(/\s*\/\s*/g) : /\s/.test(e) && (r = e.split(/ +/g)), (0, ke.isArray)(r)) return {
        month: r[0] || "",
        year: r.slice(1).join()
    };
    var t = Be(e),
        n = e.substr(0, t);
    return {
        month: n,
        year: e.substr(n.length)
    }
}
var R = {};
Object.defineProperty(R, "__esModule", {
    value: !0
});
R.expirationMonth = Ye;

function m(e, r, t) {
    return {
        isValid: e,
        isPotentiallyValid: r,
        isValidForThisYear: t || !1
    }
}

function Ye(e) {
    var r = new Date().getMonth() + 1;
    if (typeof e != "string") return m(!1, !1);
    if (e.replace(/\s/g, "") === "" || e === "0") return m(!1, !0);
    if (!/^\d*$/.test(e)) return m(!1, !1);
    var t = parseInt(e, 10);
    if (isNaN(Number(e))) return m(!1, !1);
    var n = t > 0 && t < 13;
    return m(n, n, n && t >= r)
}
var A = o && o.__assign || function() {
    return A = Object.assign || function(e) {
        for (var r, t = 1, n = arguments.length; t < n; t++) {
            r = arguments[t];
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
        }
        return e
    }, A.apply(this, arguments)
};
Object.defineProperty(B, "__esModule", {
    value: !0
});
B.expirationDate = Je;
var Fe = U,
    He = R,
    Ge = P;

function y(e, r, t, n) {
    return {
        isValid: e,
        isPotentiallyValid: r,
        month: t,
        year: n
    }
}

function Je(e, r) {
    var t;
    if (typeof e == "string") e = e.replace(/^(\d\d) (\d\d(\d\d)?)$/, "$1/$2"), t = (0, Fe.parseDate)(String(e));
    else if (e !== null && typeof e == "object") {
        var n = A({}, e);
        t = {
            month: String(n.month),
            year: String(n.year)
        }
    } else return y(!1, !1, null, null);
    var a = (0, He.expirationMonth)(t.month),
        i = (0, Ge.expirationYear)(t.year, r);
    if (a.isValid) {
        if (i.isCurrentYear) {
            var s = a.isValidForThisYear;
            return y(s, s, t.month, t.year)
        }
        if (i.isValid) return y(!0, !0, t.month, t.year)
    }
    return a.isPotentiallyValid && i.isPotentiallyValid ? y(!1, !0, null, null) : y(!1, !1, null, null)
}
var Y = {};
Object.defineProperty(Y, "__esModule", {
    value: !0
});
Y.cvv = qe;
var re = 3;

function Xe(e, r) {
    for (var t = 0; t < e.length; t++)
        if (r === e[t]) return !0;
    return !1
}

function Ze(e) {
    for (var r = re, t = 0; t < e.length; t++) r = e[t] > r ? e[t] : r;
    return r
}

function v(e, r) {
    return {
        isValid: e,
        isPotentiallyValid: r
    }
}

function qe(e, r) {
    return r === void 0 && (r = re), r = r instanceof Array ? r : [r], typeof e != "string" || !/^\d*$/.test(e) ? v(!1, !1) : Xe(r, e.length) ? v(!0, !0) : e.length < Math.min.apply(null, r) ? v(!1, !0) : e.length > Ze(r) ? v(!1, !1) : v(!0, !0)
}
var F = {};
Object.defineProperty(F, "__esModule", {
    value: !0
});
F.postalCode = Qe;
var Ke = 2,
    We = new RegExp(/^[a-z0-9]+$/i);

function O(e, r) {
    return {
        isValid: e,
        isPotentiallyValid: r
    }
}

function Qe(e, r) {
    r === void 0 && (r = {});
    var t = r.minLength || Ke;
    return typeof e != "string" ? O(!1, !1) : e.length < t ? O(!1, !0) : We.test(e.trim().slice(0, t)) ? O(!0, !0) : O(!1, !0)
}
var er = o && o.__createBinding || (Object.create ? function(e, r, t, n) {
        n === void 0 && (n = t);
        var a = Object.getOwnPropertyDescriptor(r, t);
        (!a || ("get" in a ? !r.__esModule : a.writable || a.configurable)) && (a = {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        }), Object.defineProperty(e, n, a)
    } : function(e, r, t, n) {
        n === void 0 && (n = t), e[n] = r[t]
    }),
    rr = o && o.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    tr = o && o.__importStar || function() {
        var e = function(r) {
            return e = Object.getOwnPropertyNames || function(t) {
                var n = [];
                for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (n[n.length] = a);
                return n
            }, e(r)
        };
        return function(r) {
            if (r && r.__esModule) return r;
            var t = {};
            if (r != null)
                for (var n = e(r), a = 0; a < n.length; a++) n[a] !== "default" && er(t, r, n[a]);
            return rr(t, r), t
        }
    }(),
    nr = tr(ee),
    ar = z,
    ir = k,
    sr = B,
    lr = R,
    ur = P,
    or = Y,
    cr = F,
    fr = {
        creditCardType: nr,
        cardholderName: ar.cardholderName,
        number: ir.cardNumber,
        expirationDate: sr.expirationDate,
        expirationMonth: lr.expirationMonth,
        expirationYear: ur.expirationYear,
        cvv: or.cvv,
        postalCode: cr.postalCode
    },
    dr = fr;
const pr = te(dr),
    hr = {
        methods: {
            validateField(e, r) {
                let t = null;
                if (e && e.length > 0)
                    for (const n of e)
                        for (const a of n.type) {
                            let i = null;
                            switch (a) {
                                case "required":
                                    i = this.validateRequired(r, n.message);
                                    break;
                                case "email":
                                    i = this.validateEmail(r, n.message);
                                    break;
                                case "link":
                                    i = this.validateLink(r, n.message);
                                    break;
                                case "agency":
                                    i = this.validateAgency(r, n.message);
                                    break;
                                case "digit":
                                    i = this.validateDigit(r, n.message);
                                    break;
                                case "accountBank":
                                    i = this.validateAccountBank(r, n.message);
                                    break;
                                case "packageValue":
                                    i = this.validatePackageValue(r, n.message);
                                    break;
                                case "withdrawals":
                                    i = this.validateWithdrawals(r, n.message);
                                    break;
                                case "phone":
                                    i = this.validatePhone(r, n.message);
                                    break;
                                case "CPF":
                                    i = this.validateCPF(r, n.message);
                                    break;
                                case "CNPJ":
                                    i = this.validateCNPJ(r, n.message);
                                    break;
                                case "Document":
                                    i = this.validateDocument(r, n.message);
                                    break;
                                case "slug":
                                    i = this.validateSlug(r, n.message);
                                    break;
                                case "card-number":
                                    i = this.validateCardNumber(r, n.message);
                                    break;
                                case "cardNumber":
                                    i = this.validateCardNumber(r, n.message);
                                    break
                            }
                            if (i) return i
                        }
                return t
            },
            validateRequired(e, r) {
                return e ? null : r || "Este campo é obrigatório."
            },
            validateEmail(e, r) {
                return K.validate(e) ? null : r || "E-mail inválido."
            },
            validateLink(e, r) {
                return /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(e) ? null : r || "Link inválido."
            },
            validateAgency(e, r) {
                return e.length != 4 ? "O número da agência deve ter exatamente 4 dígitos." : null
            },
            validateDigit(e, r) {
                return e.lenght != 1 ? "O número do dígito deve ter no exatamente 1 dígito." : null
            },
            validateAccountBank(e, r) {
                return e.lenght > 13 ? "O conta bancária pode ter no máximo 13 dígitos." : null
            },
            validatePackageValue(e, r) {
                return e = H(e), e < 4.9 ? "O valor precisa ser maior que 4,90" : null
            },
            validateWithdrawals(e, r) {
                return e = H(e), e < 10 ? "O valor mínimo para saque é R$ 10,00" : null
            },
            validatePhone(e, r) {
                return e.length !== 15 ? "Complete o número de celular." : null
            },
            validateCPF(e, r) {
                return G.isValid(e) ? null : "CPF inválido."
            },
            validateCNPJ(e, r) {
                return J.isValid(e) ? null : "CNPJ inválido."
            },
            validateDocument(e, r) {
                return !G.isValid(e) && !J.isValid(e) ? "Documento inválido." : null
            },
            validateSlug(e, r) {
                return e.includes(" ") ? "Por favor, digite o nome de usuário sem espaços." : null
            },
            validateCardNumber(e, r) {
                return pr.number(e).isValid ? null : "Número de cartão inválido."
            }
        }
    };
export {
    hr as v
};