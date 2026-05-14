import {
    C as Rr,
    L as Ar,
    B as Fr
} from "./LoaderSpinner-60fa819e.js";
import {
    P as Lr
} from "./ProfileIcon-bd4c34f2.js";
import {
    B as zr,
    c as Er
} from "./checkValidation-1ce18a78.js";
import {
    f as Vr
} from "./formattings-2053e446.js";
import {
    L as Ur
} from "./Conteudinhos-49f21eab.js";
import {
    l as jr
} from "./linkpriv-logo-de3f7b5e.js";
import {
    _ as Hn,
    r as ht,
    o as kt,
    c as Qn,
    b as Y,
    w as nt,
    T as fe,
    a as U,
    e as it,
    E as Hr,
    f as Nt,
    t as he,
    g as bt,
    i as Ut,
    v as jt,
    h as Qr
} from "./index-d46d43cb.js";
import {
    s as Yr
} from "./toast-2bb17fdf.js";
import {
    w as Sn
} from "./loaderPage-5f9e888f.js";
import {
    D as Jr
} from "./DropdownSearch-373ab233.js";
import {
    L as Wr
} from "./LoaderDots-87f59677.js";
import "./validation-a50df0b1.js";
var Gr = Object.defineProperty,
    Xr = (t, e, n) => e in t ? Gr(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n,
    ot = (t, e, n) => (Xr(t, typeof e != "symbol" ? e + "" : e, n), n);
/**
 * @vue/shared v3.5.3
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Kr(t, e) {
    const n = new Set(t.split(","));
    return e ? o => n.has(o.toLowerCase()) : o => n.has(o)
}
const on = {},
    Zr = [],
    _t = () => {},
    $r = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
    xt = Object.assign,
    to = (t, e) => {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
    },
    eo = Object.prototype.hasOwnProperty,
    Xe = (t, e) => eo.call(t, e),
    E = Array.isArray,
    Jt = t => qe(t) === "[object Map]",
    Yn = t => qe(t) === "[object Set]",
    V = t => typeof t == "function",
    yt = t => typeof t == "string",
    zt = t => typeof t == "symbol",
    tt = t => t !== null && typeof t == "object",
    Jn = t => (tt(t) || V(t)) && V(t.then) && V(t.catch),
    Wn = Object.prototype.toString,
    qe = t => Wn.call(t),
    no = t => qe(t).slice(8, -1),
    Gn = t => qe(t) === "[object Object]",
    sn = t => yt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    Lt = (t, e) => !Object.is(t, e),
    ro = t => {
        const e = yt(t) ? Number(t) : NaN;
        return isNaN(e) ? t : e
    };
let kn;
const oo = () => kn || (kn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function an(t) {
    if (E(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const o = t[n],
                r = yt(o) ? lo(o) : an(o);
            if (r)
                for (const i in r) e[i] = r[i]
        }
        return e
    } else if (yt(t) || tt(t)) return t
}
const io = /;(?![^(]*\))/g,
    so = /:([^]+)/,
    ao = /\/\*[^]*?\*\//g;

function lo(t) {
    const e = {};
    return t.replace(ao, "").split(io).forEach(n => {
        if (n) {
            const o = n.split(so);
            o.length > 1 && (e[o[0].trim()] = o[1].trim())
        }
    }), e
}

function Wt(t) {
    let e = "";
    if (yt(t)) e = t;
    else if (E(t))
        for (let n = 0; n < t.length; n++) {
            const o = Wt(t[n]);
            o && (e += o + " ")
        } else if (tt(t))
            for (const n in t) t[n] && (e += n + " ");
    return e.trim()
}
const Xn = t => !!(t && t.__v_isRef === !0),
    Kn = t => yt(t) ? t : t == null ? "" : E(t) || tt(t) && (t.toString === Wn || !V(t.toString)) ? Xn(t) ? Kn(t.value) : JSON.stringify(t, Zn, 2) : String(t),
    Zn = (t, e) => Xn(e) ? Zn(t, e.value) : Jt(e) ? {
        [`Map(${e.size})`]: [...e.entries()].reduce((n, [o, r], i) => (n[Ee(o, i) + " =>"] = r, n), {})
    } : Yn(e) ? {
        [`Set(${e.size})`]: [...e.values()].map(n => Ee(n))
    } : zt(e) ? Ee(e) : tt(e) && !E(e) && !Gn(e) ? String(e) : e,
    Ee = (t, e = "") => {
        var n;
        return zt(t) ? `Symbol(${(n=t.description)!=null?n:e})` : t
    };
let j;
const Ve = new WeakSet;
class co {
    constructor(e) {
        this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, Ve.has(this) && (Ve.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = re, re = this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, Mn(this), tr(this);
        const e = j,
            n = vt;
        j = this, vt = !0;
        try {
            return this.fn()
        } finally {
            er(this), j = e, vt = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let e = this.deps; e; e = e.nextDep) un(e);
            this.deps = this.depsTail = void 0, Mn(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Ve.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Ke(this) && this.run()
    }
    get dirty() {
        return Ke(this)
    }
}
let $n = 0,
    re;

function ln() {
    $n++
}

function cn() {
    if (--$n > 0) return;
    let t;
    for (; re;) {
        let e = re;
        for (re = void 0; e;) {
            const n = e.nextEffect;
            if (e.nextEffect = void 0, e.flags &= -9, e.flags & 1) try {
                e.trigger()
            } catch (o) {
                t || (t = o)
            }
            e = n
        }
    }
    if (t) throw t
}

function tr(t) {
    for (let e = t.deps; e; e = e.nextDep) e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e
}

function er(t) {
    let e, n = t.depsTail;
    for (let o = n; o; o = o.prevDep) o.version === -1 ? (o === n && (n = o.prevDep), un(o), uo(o)) : e = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0;
    t.deps = e, t.depsTail = n
}

function Ke(t) {
    for (let e = t.deps; e; e = e.nextDep)
        if (e.dep.version !== e.version || e.dep.computed && nr(e.dep.computed) === !1 || e.dep.version !== e.version) return !0;
    return !!t._dirty
}

function nr(t) {
    if (t.flags & 2) return !1;
    if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === ie)) return;
    t.globalVersion = ie;
    const e = t.dep;
    if (t.flags |= 2, e.version > 0 && !t.isSSR && !Ke(t)) {
        t.flags &= -3;
        return
    }
    const n = j,
        o = vt;
    j = t, vt = !0;
    try {
        tr(t);
        const r = t.fn(t._value);
        (e.version === 0 || Lt(r, t._value)) && (t._value = r, e.version++)
    } catch (r) {
        throw e.version++, r
    } finally {
        j = n, vt = o, er(t), t.flags &= -3
    }
}

function un(t) {
    const {
        dep: e,
        prevSub: n,
        nextSub: o
    } = t;
    if (n && (n.nextSub = o, t.prevSub = void 0), o && (o.prevSub = n, t.nextSub = void 0), e.subs === t && (e.subs = n), !e.subs && e.computed) {
        e.computed.flags &= -5;
        for (let r = e.computed.deps; r; r = r.nextDep) un(r)
    }
}

function uo(t) {
    const {
        prevDep: e,
        nextDep: n
    } = t;
    e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0)
}
let vt = !0;
const rr = [];

function ce() {
    rr.push(vt), vt = !1
}

function ue() {
    const t = rr.pop();
    vt = t === void 0 ? !0 : t
}

function Mn(t) {
    const {
        cleanup: e
    } = t;
    if (t.cleanup = void 0, e) {
        const n = j;
        j = void 0;
        try {
            e()
        } finally {
            j = n
        }
    }
}
let ie = 0;
class or {
    constructor(e) {
        this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0
    }
    track(e) {
        if (!j || !vt || j === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== j) n = this.activeLink = {
            dep: this,
            sub: j,
            version: this.version,
            nextDep: void 0,
            prevDep: void 0,
            nextSub: void 0,
            prevSub: void 0,
            prevActiveLink: void 0
        }, j.deps ? (n.prevDep = j.depsTail, j.depsTail.nextDep = n, j.depsTail = n) : j.deps = j.depsTail = n, j.flags & 4 && ir(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const o = n.nextDep;
            o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = j.depsTail, n.nextDep = void 0, j.depsTail.nextDep = n, j.depsTail = n, j.deps === n && (j.deps = o)
        }
        return n
    }
    trigger(e) {
        this.version++, ie++, this.notify(e)
    }
    notify(e) {
        ln();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify()
        } finally {
            cn()
        }
    }
}

function ir(t) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
        e.flags |= 20;
        for (let o = e.deps; o; o = o.nextDep) ir(o)
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t
}
const Ze = new WeakMap,
    Ft = Symbol(""),
    $e = Symbol(""),
    se = Symbol("");

function at(t, e, n) {
    if (vt && j) {
        let o = Ze.get(t);
        o || Ze.set(t, o = new Map);
        let r = o.get(n);
        r || o.set(n, r = new or), r.track()
    }
}

function Tt(t, e, n, o, r, i) {
    const s = Ze.get(t);
    if (!s) {
        ie++;
        return
    }
    let a = [];
    if (e === "clear") a = [...s.values()];
    else {
        const c = E(t),
            C = c && sn(n);
        if (c && n === "length") {
            const m = Number(o);
            s.forEach((d, D) => {
                (D === "length" || D === se || !zt(D) && D >= m) && a.push(d)
            })
        } else {
            const m = d => d && a.push(d);
            switch (n !== void 0 && m(s.get(n)), C && m(s.get(se)), e) {
                case "add":
                    c ? C && m(s.get("length")) : (m(s.get(Ft)), Jt(t) && m(s.get($e)));
                    break;
                case "delete":
                    c || (m(s.get(Ft)), Jt(t) && m(s.get($e)));
                    break;
                case "set":
                    Jt(t) && m(s.get(Ft));
                    break
            }
        }
    }
    ln();
    for (const c of a) c.trigger();
    cn()
}

function Ht(t) {
    const e = J(t);
    return e === t ? e : (at(e, "iterate", se), wt(t) ? e : e.map(ct))
}

function dn(t) {
    return at(t = J(t), "iterate", se), t
}
const fo = {
    __proto__: null,
    [Symbol.iterator]() {
        return Ue(this, Symbol.iterator, ct)
    },
    concat(...t) {
        return Ht(this).concat(...t.map(e => E(e) ? Ht(e) : e))
    },
    entries() {
        return Ue(this, "entries", t => (t[1] = ct(t[1]), t))
    },
    every(t, e) {
        return St(this, "every", t, e, void 0, arguments)
    },
    filter(t, e) {
        return St(this, "filter", t, e, n => n.map(ct), arguments)
    },
    find(t, e) {
        return St(this, "find", t, e, ct, arguments)
    },
    findIndex(t, e) {
        return St(this, "findIndex", t, e, void 0, arguments)
    },
    findLast(t, e) {
        return St(this, "findLast", t, e, ct, arguments)
    },
    findLastIndex(t, e) {
        return St(this, "findLastIndex", t, e, void 0, arguments)
    },
    forEach(t, e) {
        return St(this, "forEach", t, e, void 0, arguments)
    },
    includes(...t) {
        return je(this, "includes", t)
    },
    indexOf(...t) {
        return je(this, "indexOf", t)
    },
    join(t) {
        return Ht(this).join(t)
    },
    lastIndexOf(...t) {
        return je(this, "lastIndexOf", t)
    },
    map(t, e) {
        return St(this, "map", t, e, void 0, arguments)
    },
    pop() {
        return ee(this, "pop")
    },
    push(...t) {
        return ee(this, "push", t)
    },
    reduce(t, ...e) {
        return In(this, "reduce", t, e)
    },
    reduceRight(t, ...e) {
        return In(this, "reduceRight", t, e)
    },
    shift() {
        return ee(this, "shift")
    },
    some(t, e) {
        return St(this, "some", t, e, void 0, arguments)
    },
    splice(...t) {
        return ee(this, "splice", t)
    },
    toReversed() {
        return Ht(this).toReversed()
    },
    toSorted(t) {
        return Ht(this).toSorted(t)
    },
    toSpliced(...t) {
        return Ht(this).toSpliced(...t)
    },
    unshift(...t) {
        return ee(this, "unshift", t)
    },
    values() {
        return Ue(this, "values", ct)
    }
};

function Ue(t, e, n) {
    const o = dn(t),
        r = o[e]();
    return o !== t && !wt(t) && (r._next = r.next, r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)), i
    }), r
}
const ho = Array.prototype;

function St(t, e, n, o, r, i) {
    const s = dn(t),
        a = s !== t && !wt(t),
        c = s[e];
    if (c !== ho[e]) {
        const d = c.apply(t, i);
        return a ? ct(d) : d
    }
    let C = n;
    s !== t && (a ? C = function(d, D) {
        return n.call(this, ct(d), D, t)
    } : n.length > 2 && (C = function(d, D) {
        return n.call(this, d, D, t)
    }));
    const m = c.call(s, C, o);
    return a && r ? r(m) : m
}

function In(t, e, n, o) {
    const r = dn(t);
    let i = n;
    return r !== t && (wt(t) ? n.length > 3 && (i = function(s, a, c) {
        return n.call(this, s, a, c, t)
    }) : i = function(s, a, c) {
        return n.call(this, s, ct(a), c, t)
    }), r[e](i, ...o)
}

function je(t, e, n) {
    const o = J(t);
    at(o, "iterate", se);
    const r = o[e](...n);
    return (r === -1 || r === !1) && pn(n[0]) ? (n[0] = J(n[0]), o[e](...n)) : r
}

function ee(t, e, n = []) {
    ce(), ln();
    const o = J(t)[e].apply(t, n);
    return cn(), ue(), o
}
const po = Kr("__proto__,__v_isRef,__isVue"),
    sr = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(zt));

function go(t) {
    zt(t) || (t = String(t));
    const e = J(this);
    return at(e, "has", t), e.hasOwnProperty(t)
}
class ar {
    constructor(e = !1, n = !1) {
        this._isReadonly = e, this._isShallow = n
    }
    get(e, n, o) {
        const r = this._isReadonly,
            i = this._isShallow;
        if (n === "__v_isReactive") return !r;
        if (n === "__v_isReadonly") return r;
        if (n === "__v_isShallow") return i;
        if (n === "__v_raw") return o === (r ? i ? Do : ur : i ? Io : cr).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(o) ? e : void 0;
        const s = E(e);
        if (!r) {
            let c;
            if (s && (c = fo[n])) return c;
            if (n === "hasOwnProperty") return go
        }
        const a = Reflect.get(e, n, ut(e) ? e : o);
        return (zt(n) ? sr.has(n) : po(n)) || (r || at(e, "get", n), i) ? a : ut(a) ? s && sn(n) ? a : a.value : tt(a) ? r ? dr(a) : hn(a) : a
    }
}
class mo extends ar {
    constructor(e = !1) {
        super(!1, e)
    }
    set(e, n, o, r) {
        let i = e[n];
        if (!this._isShallow) {
            const c = Zt(i);
            if (!wt(o) && !Zt(o) && (i = J(i), o = J(o)), !E(e) && ut(i) && !ut(o)) return c ? !1 : (i.value = o, !0)
        }
        const s = E(e) && sn(n) ? Number(n) < e.length : Xe(e, n),
            a = Reflect.set(e, n, o, ut(e) ? e : r);
        return e === J(r) && (s ? Lt(o, i) && Tt(e, "set", n, o) : Tt(e, "add", n, o)), a
    }
    deleteProperty(e, n) {
        const o = Xe(e, n);
        e[n];
        const r = Reflect.deleteProperty(e, n);
        return r && o && Tt(e, "delete", n, void 0), r
    }
    has(e, n) {
        const o = Reflect.has(e, n);
        return (!zt(n) || !sr.has(n)) && at(e, "has", n), o
    }
    ownKeys(e) {
        return at(e, "iterate", E(e) ? "length" : Ft), Reflect.ownKeys(e)
    }
}
class vo extends ar {
    constructor(e = !1) {
        super(!0, e)
    }
    set(e, n) {
        return !0
    }
    deleteProperty(e, n) {
        return !0
    }
}
const yo = new mo,
    bo = new vo,
    fn = t => t,
    Re = t => Reflect.getPrototypeOf(t);

function pe(t, e, n = !1, o = !1) {
    t = t.__v_raw;
    const r = J(t),
        i = J(e);
    n || (Lt(e, i) && at(r, "get", e), at(r, "get", i));
    const {
        has: s
    } = Re(r), a = o ? fn : n ? gn : ct;
    if (s.call(r, e)) return a(t.get(e));
    if (s.call(r, i)) return a(t.get(i));
    t !== r && t.get(e)
}

function ge(t, e = !1) {
    const n = this.__v_raw,
        o = J(n),
        r = J(t);
    return e || (Lt(t, r) && at(o, "has", t), at(o, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r)
}

function me(t, e = !1) {
    return t = t.__v_raw, !e && at(J(t), "iterate", Ft), Reflect.get(t, "size", t)
}

function Dn(t, e = !1) {
    !e && !wt(t) && !Zt(t) && (t = J(t));
    const n = J(this);
    return Re(n).has.call(n, t) || (n.add(t), Tt(n, "add", t, t)), this
}

function On(t, e, n = !1) {
    !n && !wt(e) && !Zt(e) && (e = J(e));
    const o = J(this),
        {
            has: r,
            get: i
        } = Re(o);
    let s = r.call(o, t);
    s || (t = J(t), s = r.call(o, t));
    const a = i.call(o, t);
    return o.set(t, e), s ? Lt(e, a) && Tt(o, "set", t, e) : Tt(o, "add", t, e), this
}

function Pn(t) {
    const e = J(this),
        {
            has: n,
            get: o
        } = Re(e);
    let r = n.call(e, t);
    r || (t = J(t), r = n.call(e, t)), o && o.call(e, t);
    const i = e.delete(t);
    return r && Tt(e, "delete", t, void 0), i
}

function Tn() {
    const t = J(this),
        e = t.size !== 0,
        n = t.clear();
    return e && Tt(t, "clear", void 0, void 0), n
}

function ve(t, e) {
    return function(n, o) {
        const r = this,
            i = r.__v_raw,
            s = J(i),
            a = e ? fn : t ? gn : ct;
        return !t && at(s, "iterate", Ft), i.forEach((c, C) => n.call(o, a(c), a(C), r))
    }
}

function ye(t, e, n) {
    return function(...o) {
        const r = this.__v_raw,
            i = J(r),
            s = Jt(i),
            a = t === "entries" || t === Symbol.iterator && s,
            c = t === "keys" && s,
            C = r[t](...o),
            m = n ? fn : e ? gn : ct;
        return !e && at(i, "iterate", c ? $e : Ft), {
            next() {
                const {
                    value: d,
                    done: D
                } = C.next();
                return D ? {
                    value: d,
                    done: D
                } : {
                    value: a ? [m(d[0]), m(d[1])] : m(d),
                    done: D
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Dt(t) {
    return function(...e) {
        return t === "delete" ? !1 : t === "clear" ? void 0 : this
    }
}

function _o() {
    const t = {
            get(r) {
                return pe(this, r)
            },
            get size() {
                return me(this)
            },
            has: ge,
            add: Dn,
            set: On,
            delete: Pn,
            clear: Tn,
            forEach: ve(!1, !1)
        },
        e = {
            get(r) {
                return pe(this, r, !1, !0)
            },
            get size() {
                return me(this)
            },
            has: ge,
            add(r) {
                return Dn.call(this, r, !0)
            },
            set(r, i) {
                return On.call(this, r, i, !0)
            },
            delete: Pn,
            clear: Tn,
            forEach: ve(!1, !0)
        },
        n = {
            get(r) {
                return pe(this, r, !0)
            },
            get size() {
                return me(this, !0)
            },
            has(r) {
                return ge.call(this, r, !0)
            },
            add: Dt("add"),
            set: Dt("set"),
            delete: Dt("delete"),
            clear: Dt("clear"),
            forEach: ve(!0, !1)
        },
        o = {
            get(r) {
                return pe(this, r, !0, !0)
            },
            get size() {
                return me(this, !0)
            },
            has(r) {
                return ge.call(this, r, !0)
            },
            add: Dt("add"),
            set: Dt("set"),
            delete: Dt("delete"),
            clear: Dt("clear"),
            forEach: ve(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        t[r] = ye(r, !1, !1), n[r] = ye(r, !0, !1), e[r] = ye(r, !1, !0), o[r] = ye(r, !0, !0)
    }), [t, n, e, o]
}
const [wo, xo, Co, So] = _o();

function lr(t, e) {
    const n = e ? t ? So : Co : t ? xo : wo;
    return (o, r, i) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? o : Reflect.get(Xe(n, r) && r in o ? n : o, r, i)
}
const ko = {
        get: lr(!1, !1)
    },
    Mo = {
        get: lr(!0, !1)
    },
    cr = new WeakMap,
    Io = new WeakMap,
    ur = new WeakMap,
    Do = new WeakMap;

function Oo(t) {
    switch (t) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function Po(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : Oo(no(t))
}

function hn(t) {
    return Zt(t) ? t : fr(t, !1, yo, ko, cr)
}

function dr(t) {
    return fr(t, !0, bo, Mo, ur)
}

function fr(t, e, n, o, r) {
    if (!tt(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
    const i = r.get(t);
    if (i) return i;
    const s = Po(t);
    if (s === 0) return t;
    const a = new Proxy(t, s === 2 ? o : n);
    return r.set(t, a), a
}

function oe(t) {
    return Zt(t) ? oe(t.__v_raw) : !!(t && t.__v_isReactive)
}

function Zt(t) {
    return !!(t && t.__v_isReadonly)
}

function wt(t) {
    return !!(t && t.__v_isShallow)
}

function pn(t) {
    return t ? !!t.__v_raw : !1
}

function J(t) {
    const e = t && t.__v_raw;
    return e ? J(e) : t
}
const ct = t => tt(t) ? hn(t) : t,
    gn = t => tt(t) ? dr(t) : t;

function ut(t) {
    return t ? t.__v_isRef === !0 : !1
}

function xe(t) {
    return ut(t) ? t.value : t
}
const To = {
    get: (t, e, n) => e === "__v_raw" ? t : xe(Reflect.get(t, e, n)),
    set: (t, e, n, o) => {
        const r = t[e];
        return ut(r) && !ut(n) ? (r.value = n, !0) : Reflect.set(t, e, n, o)
    }
};

function Bo(t) {
    return oe(t) ? t : new Proxy(t, To)
}
class No {
    constructor(e, n, o) {
        this.fn = e, this.setter = n, this._value = void 0, this.dep = new or(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ie - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o
    }
    notify() {
        j !== this && (this.flags |= 16, this.dep.notify())
    }
    get value() {
        const e = this.dep.track();
        return nr(this), e && (e.version = this.dep.version), this._value
    }
    set value(e) {
        this.setter && this.setter(e)
    }
}

function qo(t, e, n = !1) {
    let o, r;
    return V(t) ? o = t : (o = t.get, r = t.set), new No(o, r, n)
}
const be = {},
    Me = new WeakMap;
let At;

function Ro(t, e = !1, n = At) {
    if (n) {
        let o = Me.get(n);
        o || Me.set(n, o = []), o.push(t)
    }
}

function Ao(t, e, n = on) {
    const {
        immediate: o,
        deep: r,
        once: i,
        scheduler: s,
        augmentJob: a,
        call: c
    } = n, C = L => r ? L : wt(L) || r === !1 || r === 0 ? Pt(L, 1) : Pt(L);
    let m, d, D, B, z = !1,
        G = !1;
    if (ut(t) ? (d = () => t.value, z = wt(t)) : oe(t) ? (d = () => C(t), z = !0) : E(t) ? (G = !0, z = t.some(L => oe(L) || wt(L)), d = () => t.map(L => {
            if (ut(L)) return L.value;
            if (oe(L)) return C(L);
            if (V(L)) return c ? c(L, 2) : L()
        })) : V(t) ? e ? d = c ? () => c(t, 2) : t : d = () => {
            if (D) {
                ce();
                try {
                    D()
                } finally {
                    ue()
                }
            }
            const L = At;
            At = m;
            try {
                return c ? c(t, 3, [B]) : t(B)
            } finally {
                At = L
            }
        } : d = _t, e && r) {
        const L = d,
            K = r === !0 ? 1 / 0 : r;
        d = () => Pt(L(), K)
    }
    const X = () => {
        m.stop()
    };
    if (i)
        if (e) {
            const L = e;
            e = (...K) => {
                L(...K), X()
            }
        } else {
            const L = d;
            d = () => {
                L(), X()
            }
        }
    let W = G ? new Array(t.length).fill(be) : be;
    const A = L => {
        if (!(!(m.flags & 1) || !m.dirty && !L))
            if (e) {
                const K = m.run();
                if (r || z || (G ? K.some((v, I) => Lt(v, W[I])) : Lt(K, W))) {
                    D && D();
                    const v = At;
                    At = m;
                    try {
                        const I = [K, W === be ? void 0 : G && W[0] === be ? [] : W, B];
                        c ? c(e, 3, I) : e(...I), W = K
                    } finally {
                        At = v
                    }
                }
            } else m.run()
    };
    return a && a(A), m = new co(d), m.scheduler = s ? () => s(A, !1) : A, B = L => Ro(L, !1, m), D = m.onStop = () => {
        const L = Me.get(m);
        if (L) {
            if (c) c(L, 4);
            else
                for (const K of L) K();
            Me.delete(m)
        }
    }, e ? o ? A(!0) : W = m.run() : s ? s(A.bind(null, !0), !0) : m.run(), X.pause = m.pause.bind(m), X.resume = m.resume.bind(m), X.stop = X, X
}

function Pt(t, e = 1 / 0, n) {
    if (e <= 0 || !tt(t) || t.__v_skip || (n = n || new Set, n.has(t))) return t;
    if (n.add(t), e--, ut(t)) Pt(t.value, e, n);
    else if (E(t))
        for (let o = 0; o < t.length; o++) Pt(t[o], e, n);
    else if (Yn(t) || Jt(t)) t.forEach(o => {
        Pt(o, e, n)
    });
    else if (Gn(t)) {
        for (const o in t) Pt(t[o], e, n);
        for (const o of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, o) && Pt(t[o], e, n)
    }
    return t
}

function mn(t, e, n, o) {
    try {
        return o ? t(...o) : t()
    } catch (r) {
        vn(r, e, n)
    }
}

function Ae(t, e, n, o) {
    if (V(t)) {
        const r = mn(t, e, n, o);
        return r && Jn(r) && r.catch(i => {
            vn(i, e, n)
        }), r
    }
    if (E(t)) {
        const r = [];
        for (let i = 0; i < t.length; i++) r.push(Ae(t[i], e, n, o));
        return r
    }
}

function vn(t, e, n, o = !0) {
    const r = e ? e.vnode : null,
        {
            errorHandler: i,
            throwUnhandledErrorInProduction: s
        } = e && e.appContext.config || on;
    if (e) {
        let a = e.parent;
        const c = e.proxy,
            C = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a;) {
            const m = a.ec;
            if (m) {
                for (let d = 0; d < m.length; d++)
                    if (m[d](t, c, C) === !1) return
            }
            a = a.parent
        }
        if (i) {
            ce(), mn(i, null, 10, [t, c, C]), ue();
            return
        }
    }
    Fo(t, n, r, o, s)
}

function Fo(t, e, n, o = !0, r = !1) {
    {
        if (r) throw t;
        console.error(t)
    }
}
let Ie = !1,
    tn = !1;
const pt = [];
let Mt = 0;
const Gt = [];
let Ot = null,
    Yt = 0;
const Lo = Promise.resolve();

function zo(t) {
    let e = Ie ? Mt + 1 : 0,
        n = pt.length;
    for (; e < n;) {
        const o = e + n >>> 1,
            r = pt[o],
            i = ae(r);
        i < t || i === t && r.flags & 2 ? e = o + 1 : n = o
    }
    return e
}

function Eo(t) {
    if (!(t.flags & 1)) {
        const e = ae(t),
            n = pt[pt.length - 1];
        !n || !(t.flags & 2) && e >= ae(n) ? pt.push(t) : pt.splice(zo(e), 0, t), t.flags |= 1, hr()
    }
}

function hr() {
    !Ie && !tn && (tn = !0, Lo.then(pr))
}

function en(t) {
    E(t) ? Gt.push(...t) : Ot && t.id === -1 ? Ot.splice(Yt + 1, 0, t) : t.flags & 1 || (Gt.push(t), t.flags |= 1), hr()
}

function Vo(t) {
    if (Gt.length) {
        const e = [...new Set(Gt)].sort((n, o) => ae(n) - ae(o));
        if (Gt.length = 0, Ot) {
            Ot.push(...e);
            return
        }
        for (Ot = e, Yt = 0; Yt < Ot.length; Yt++) {
            const n = Ot[Yt];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        Ot = null, Yt = 0
    }
}
const ae = t => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;

function pr(t) {
    tn = !1, Ie = !0;
    const e = _t;
    try {
        for (Mt = 0; Mt < pt.length; Mt++) {
            const n = pt[Mt];
            n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), mn(n, n.i, n.i ? 15 : 14), n.flags &= -2)
        }
    } finally {
        for (; Mt < pt.length; Mt++) {
            const n = pt[Mt];
            n && (n.flags &= -2)
        }
        Mt = 0, pt.length = 0, Vo(), Ie = !1, (pt.length || Gt.length) && pr()
    }
}
let mt = null,
    gr = null;

function Bn(t) {
    const e = mt;
    return mt = t, gr = t && t.type.__scopeId || null, e
}

function Uo(t, e = mt, n) {
    if (!e || t._n) return t;
    const o = (...r) => {
        o._d && Ln(-1);
        const i = Bn(e);
        let s;
        try {
            s = t(...r)
        } finally {
            Bn(i), o._d && Ln(1)
        }
        return s
    };
    return o._n = !0, o._c = !0, o._d = !0, o
}
const jo = t => t.__isTeleport;

function mr(t, e) {
    t.shapeFlag & 6 && t.component ? (t.transition = e, mr(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e
} /*! #__NO_SIDE_EFFECTS__ */
function vr(t, e) {
    return V(t) ? (() => xt({
        name: t.name
    }, e, {
        setup: t
    }))() : t
}

function Ho(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0]
}
const Qo = t => t.type.__isKeepAlive;

function Yo(t, e) {
    yr(t, "a", e)
}

function Jo(t, e) {
    yr(t, "da", e)
}

function yr(t, e, n = et) {
    const o = t.__wdc || (t.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return t()
    });
    if (Fe(e, o, n), n) {
        let r = n.parent;
        for (; r && r.parent;) Qo(r.parent.vnode) && Wo(o, e, n, r), r = r.parent
    }
}

function Wo(t, e, n, o) {
    const r = Fe(e, t, o, !0);
    br(() => {
        to(o[e], r)
    }, n)
}

function Fe(t, e, n = et, o = !1) {
    if (n) {
        const r = n[t] || (n[t] = []),
            i = e.__weh || (e.__weh = (...s) => {
                ce();
                const a = Be(n),
                    c = Ae(e, n, t, s);
                return a(), ue(), c
            });
        return o ? r.unshift(i) : r.push(i), i
    }
}
const It = t => (e, n = et) => {
        (!Le || t === "sp") && Fe(t, (...o) => e(...o), n)
    },
    Go = It("bm"),
    Xo = It("m"),
    Ko = It("bu"),
    Zo = It("u"),
    $o = It("bum"),
    br = It("um"),
    ti = It("sp"),
    ei = It("rtg"),
    ni = It("rtc");

function ri(t, e = et) {
    Fe("ec", t, e)
}
const oi = Symbol.for("v-ndc");

function Nn(t) {
    return E(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t
}

function ii(t) {
    const e = Ri();
    let n = t();
    return Ai(), Jn(n) && (n = n.catch(o => {
        throw Be(e), o
    })), [n, () => Be(e)]
}

function si(t) {
    const e = wr(t),
        n = t.proxy,
        o = t.ctx;
    e.beforeCreate && qn(e.beforeCreate, t, "bc");
    const {
        data: r,
        computed: i,
        methods: s,
        watch: a,
        provide: c,
        inject: C,
        created: m,
        beforeMount: d,
        mounted: D,
        beforeUpdate: B,
        updated: z,
        activated: G,
        deactivated: X,
        beforeDestroy: W,
        beforeUnmount: A,
        destroyed: L,
        unmounted: K,
        render: v,
        renderTracked: I,
        renderTriggered: b,
        errorCaptured: k,
        serverPrefetch: f,
        expose: p,
        inheritAttrs: u,
        components: l,
        directives: x,
        filters: _
    } = e;
    if (C && ai(C, o, null), s)
        for (const P in s) {
            const q = s[P];
            V(q) && (o[P] = q.bind(n))
        }
    if (r) {
        const P = r.call(n, n);
        tt(P) && (t.data = hn(P))
    }
    if (i)
        for (const P in i) {
            const q = i[P],
                H = V(q) ? q.bind(n, n) : V(q.get) ? q.get.bind(n, n) : _t,
                $ = !V(q) && V(q.set) ? q.set.bind(n) : _t,
                lt = Ei({
                    get: H,
                    set: $
                });
            Object.defineProperty(o, P, {
                enumerable: !0,
                configurable: !0,
                get: () => lt.value,
                set: gt => lt.value = gt
            })
        }
    if (a)
        for (const P in a) _r(a[P], o, n, P);
    if (c) {
        const P = V(c) ? c.call(n) : c;
        Reflect.ownKeys(P).forEach(q => {
            fi(q, P[q])
        })
    }
    m && qn(m, t, "c");

    function T(P, q) {
        E(q) ? q.forEach(H => P(H.bind(n))) : q && P(q.bind(n))
    }
    if (T(Go, d), T(Xo, D), T(Ko, B), T(Zo, z), T(Yo, G), T(Jo, X), T(ri, k), T(ni, I), T(ei, b), T($o, A), T(br, K), T(ti, f), E(p))
        if (p.length) {
            const P = t.exposed || (t.exposed = {});
            p.forEach(q => {
                Object.defineProperty(P, q, {
                    get: () => n[q],
                    set: H => n[q] = H
                })
            })
        } else t.exposed || (t.exposed = {});
    v && t.render === _t && (t.render = v), u != null && (t.inheritAttrs = u), l && (t.components = l), x && (t.directives = x), f && Ho(t)
}

function ai(t, e, n = _t) {
    E(t) && (t = nn(t));
    for (const o in t) {
        const r = t[o];
        let i;
        tt(r) ? "default" in r ? i = Ce(r.from || o, r.default, !0) : i = Ce(r.from || o) : i = Ce(r), ut(i) ? Object.defineProperty(e, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: s => i.value = s
        }) : e[o] = i
    }
}

function qn(t, e, n) {
    Ae(E(t) ? t.map(o => o.bind(e.proxy)) : t.bind(e.proxy), e, n)
}

function _r(t, e, n, o) {
    let r = o.includes(".") ? yi(n, o) : () => n[o];
    if (yt(t)) {
        const i = e[t];
        V(i) && He(r, i)
    } else if (V(t)) He(r, t.bind(n));
    else if (tt(t))
        if (E(t)) t.forEach(i => _r(i, e, n, o));
        else {
            const i = V(t.handler) ? t.handler.bind(n) : e[t.handler];
            V(i) && He(r, i, t)
        }
}

function wr(t) {
    const e = t.type,
        {
            mixins: n,
            extends: o
        } = e,
        {
            mixins: r,
            optionsCache: i,
            config: {
                optionMergeStrategies: s
            }
        } = t.appContext,
        a = i.get(e);
    let c;
    return a ? c = a : !r.length && !n && !o ? c = e : (c = {}, r.length && r.forEach(C => De(c, C, s, !0)), De(c, e, s)), tt(e) && i.set(e, c), c
}

function De(t, e, n, o = !1) {
    const {
        mixins: r,
        extends: i
    } = e;
    i && De(t, i, n, !0), r && r.forEach(s => De(t, s, n, !0));
    for (const s in e)
        if (!(o && s === "expose")) {
            const a = li[s] || n && n[s];
            t[s] = a ? a(t[s], e[s]) : e[s]
        }
    return t
}
const li = {
    data: Rn,
    props: An,
    emits: An,
    methods: ne,
    computed: ne,
    beforeCreate: rt,
    created: rt,
    beforeMount: rt,
    mounted: rt,
    beforeUpdate: rt,
    updated: rt,
    beforeDestroy: rt,
    beforeUnmount: rt,
    destroyed: rt,
    unmounted: rt,
    activated: rt,
    deactivated: rt,
    errorCaptured: rt,
    serverPrefetch: rt,
    components: ne,
    directives: ne,
    watch: ui,
    provide: Rn,
    inject: ci
};

function Rn(t, e) {
    return e ? t ? function() {
        return xt(V(t) ? t.call(this, this) : t, V(e) ? e.call(this, this) : e)
    } : e : t
}

function ci(t, e) {
    return ne(nn(t), nn(e))
}

function nn(t) {
    if (E(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
        return e
    }
    return t
}

function rt(t, e) {
    return t ? [...new Set([].concat(t, e))] : e
}

function ne(t, e) {
    return t ? xt(Object.create(null), t, e) : e
}

function An(t, e) {
    return t ? E(t) && E(e) ? [...new Set([...t, ...e])] : xt(Object.create(null), Nn(t), Nn(e ? ? {})) : e
}

function ui(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = xt(Object.create(null), t);
    for (const o in e) n[o] = rt(t[o], e[o]);
    return n
}
let di = null;

function fi(t, e) {
    if (et) {
        let n = et.provides;
        const o = et.parent && et.parent.provides;
        o === n && (n = et.provides = Object.create(o)), n[t] = e
    }
}

function Ce(t, e, n = !1) {
    const o = et || mt;
    if (o || di) {
        const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
        if (r && t in r) return r[t];
        if (arguments.length > 1) return n && V(e) ? e.call(o && o.proxy) : e
    }
}
const hi = {},
    xr = t => Object.getPrototypeOf(t) === hi,
    pi = Ii,
    gi = Symbol.for("v-scx"),
    mi = () => Ce(gi);

function He(t, e, n) {
    return vi(t, e, n)
}

function vi(t, e, n = on) {
    const {
        immediate: o,
        deep: r,
        flush: i,
        once: s
    } = n, a = xt({}, n);
    let c;
    if (Le)
        if (i === "sync") {
            const D = mi();
            c = D.__watcherHandles || (D.__watcherHandles = [])
        } else if (!e || o) a.once = !0;
    else return {
        stop: _t,
        resume: _t,
        pause: _t
    };
    const C = et;
    a.call = (D, B, z) => Ae(D, C, B, z);
    let m = !1;
    i === "post" ? a.scheduler = D => {
        pi(D, C && C.suspense)
    } : i !== "sync" && (m = !0, a.scheduler = (D, B) => {
        B ? D() : Eo(D)
    }), a.augmentJob = D => {
        e && (D.flags |= 4), m && (D.flags |= 2, C && (D.id = C.uid, D.i = C))
    };
    const d = Ao(t, e, a);
    return c && c.push(d), d
}

function yi(t, e) {
    const n = e.split(".");
    return () => {
        let o = t;
        for (let r = 0; r < n.length && o; r++) o = o[n[r]];
        return o
    }
}

function bi(t, e = !0) {
    let n;
    for (let o = 0; o < t.length; o++) {
        const r = t[o];
        if (Or(r)) {
            if (r.type !== $t || r.children === "v-if") {
                if (n) return;
                n = r
            }
        } else return
    }
    return n
}

function Cr({
    vnode: t,
    parent: e
}, n) {
    for (; e;) {
        const o = e.subTree;
        if (o.suspense && o.suspense.activeBranch === t && (o.el = t.el), o === t)(t = e.vnode).el = n, e = e.parent;
        else break
    }
}
const _i = t => t.__isSuspense;
let rn = 0;
const wi = {
        name: "Suspense",
        __isSuspense: !0,
        process(t, e, n, o, r, i, s, a, c, C) {
            if (t == null) Ci(e, n, o, r, i, s, a, c, C);
            else {
                if (i && i.deps > 0 && !t.suspense.isInFallback) {
                    e.suspense = t.suspense, e.suspense.vnode = e, e.el = t.el;
                    return
                }
                Si(t, e, n, o, r, s, a, c, C)
            }
        },
        hydrate: ki,
        normalize: Mi
    },
    xi = wi;

function le(t, e) {
    const n = t.props && t.props[e];
    V(n) && n()
}

function Ci(t, e, n, o, r, i, s, a, c) {
    const {
        p: C,
        o: {
            createElement: m
        }
    } = c, d = m("div"), D = t.suspense = Sr(t, r, o, e, d, n, i, s, a, c);
    C(null, D.pendingBranch = t.ssContent, d, null, o, D, i, s), D.deps > 0 ? (le(t, "onPending"), le(t, "onFallback"), C(null, t.ssFallback, e, n, o, null, i, s), Xt(D, t.ssFallback)) : D.resolve(!1, !0)
}

function Si(t, e, n, o, r, i, s, a, {
    p: c,
    um: C,
    o: {
        createElement: m
    }
}) {
    const d = e.suspense = t.suspense;
    d.vnode = e, e.el = t.el;
    const D = e.ssContent,
        B = e.ssFallback,
        {
            activeBranch: z,
            pendingBranch: G,
            isInFallback: X,
            isHydrating: W
        } = d;
    if (G) d.pendingBranch = D, Ye(D, G) ? (c(G, D, d.hiddenContainer, null, r, d, i, s, a), d.deps <= 0 ? d.resolve() : X && (W || (c(z, B, n, o, r, null, i, s, a), Xt(d, B)))) : (d.pendingId = rn++, W ? (d.isHydrating = !1, d.activeBranch = G) : C(G, r, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = m("div"), X ? (c(null, D, d.hiddenContainer, null, r, d, i, s, a), d.deps <= 0 ? d.resolve() : (c(z, B, n, o, r, null, i, s, a), Xt(d, B))) : z && Ye(D, z) ? (c(z, D, n, o, r, d, i, s, a), d.resolve(!0)) : (c(null, D, d.hiddenContainer, null, r, d, i, s, a), d.deps <= 0 && d.resolve()));
    else if (z && Ye(D, z)) c(z, D, n, o, r, d, i, s, a), Xt(d, D);
    else if (le(e, "onPending"), d.pendingBranch = D, D.shapeFlag & 512 ? d.pendingId = D.component.suspenseId : d.pendingId = rn++, c(null, D, d.hiddenContainer, null, r, d, i, s, a), d.deps <= 0) d.resolve();
    else {
        const {
            timeout: A,
            pendingId: L
        } = d;
        A > 0 ? setTimeout(() => {
            d.pendingId === L && d.fallback(B)
        }, A) : A === 0 && d.fallback(B)
    }
}

function Sr(t, e, n, o, r, i, s, a, c, C, m = !1) {
    const {
        p: d,
        m: D,
        um: B,
        n: z,
        o: {
            parentNode: G,
            remove: X
        }
    } = C;
    let W;
    const A = Di(t);
    A && e && e.pendingBranch && (W = e.pendingId, e.deps++);
    const L = t.props ? ro(t.props.timeout) : void 0,
        K = i,
        v = {
            vnode: t,
            parent: e,
            parentComponent: n,
            namespace: s,
            container: o,
            hiddenContainer: r,
            deps: 0,
            pendingId: rn++,
            timeout: typeof L == "number" ? L : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !m,
            isHydrating: m,
            isUnmounted: !1,
            effects: [],
            resolve(I = !1, b = !1) {
                const {
                    vnode: k,
                    activeBranch: f,
                    pendingBranch: p,
                    pendingId: u,
                    effects: l,
                    parentComponent: x,
                    container: _
                } = v;
                let S = !1;
                v.isHydrating ? v.isHydrating = !1 : I || (S = f && p.transition && p.transition.mode === "out-in", S && (f.transition.afterLeave = () => {
                    u === v.pendingId && (D(p, _, i === K ? z(f) : i, 0), en(l))
                }), f && (G(f.el) === _ && (i = z(f)), B(f, x, v, !0)), S || D(p, _, i, 0)), Xt(v, p), v.pendingBranch = null, v.isInFallback = !1;
                let T = v.parent,
                    P = !1;
                for (; T;) {
                    if (T.pendingBranch) {
                        T.effects.push(...l), P = !0;
                        break
                    }
                    T = T.parent
                }!P && !S && en(l), v.effects = [], A && e && e.pendingBranch && W === e.pendingId && (e.deps--, e.deps === 0 && !b && e.resolve()), le(k, "onResolve")
            },
            fallback(I) {
                if (!v.pendingBranch) return;
                const {
                    vnode: b,
                    activeBranch: k,
                    parentComponent: f,
                    container: p,
                    namespace: u
                } = v;
                le(b, "onFallback");
                const l = z(k),
                    x = () => {
                        v.isInFallback && (d(null, I, p, l, f, null, u, a, c), Xt(v, I))
                    },
                    _ = I.transition && I.transition.mode === "out-in";
                _ && (k.transition.afterLeave = x), v.isInFallback = !0, B(k, f, null, !0), _ || x()
            },
            move(I, b, k) {
                v.activeBranch && D(v.activeBranch, I, b, k), v.container = I
            },
            next() {
                return v.activeBranch && z(v.activeBranch)
            },
            registerDep(I, b, k) {
                const f = !!v.pendingBranch;
                f && v.deps++;
                const p = I.vnode.el;
                I.asyncDep.catch(u => {
                    vn(u, I, 0)
                }).then(u => {
                    if (I.isUnmounted || v.isUnmounted || v.pendingId !== I.suspenseId) return;
                    I.asyncResolved = !0;
                    const {
                        vnode: l
                    } = I;
                    Fi(I, u, !1), p && (l.el = p);
                    const x = !p && I.subTree.el;
                    b(I, l, G(p || I.subTree.el), p ? null : z(I.subTree), v, s, k), x && X(x), Cr(I, l.el), f && --v.deps === 0 && v.resolve()
                })
            },
            unmount(I, b) {
                v.isUnmounted = !0, v.activeBranch && B(v.activeBranch, n, I, b), v.pendingBranch && B(v.pendingBranch, n, I, b)
            }
        };
    return v
}

function ki(t, e, n, o, r, i, s, a, c) {
    const C = e.suspense = Sr(e, o, n, t.parentNode, document.createElement("div"), null, r, i, s, a, !0),
        m = c(t, C.pendingBranch = e.ssContent, n, C, i, s);
    return C.deps === 0 && C.resolve(!1, !0), m
}

function Mi(t) {
    const {
        shapeFlag: e,
        children: n
    } = t, o = e & 32;
    t.ssContent = Fn(o ? n.default : n), t.ssFallback = o ? Fn(n.fallback) : Bt($t)
}

function Fn(t) {
    let e;
    if (V(t)) {
        const n = te && t._c;
        n && (t._d = !1, Kt()), t = t(), n && (t._d = !0, e = st, Mr())
    }
    return E(t) && (t = bi(t)), t = Bi(t), e && !t.dynamicChildren && (t.dynamicChildren = e.filter(n => n !== t)), t
}

function Ii(t, e) {
    e && e.pendingBranch ? E(t) ? e.effects.push(...t) : e.effects.push(t) : en(t)
}

function Xt(t, e) {
    t.activeBranch = e;
    const {
        vnode: n,
        parentComponent: o
    } = t;
    let r = e.el;
    for (; !r && e.component;) e = e.component.subTree, r = e.el;
    n.el = r, o && o.subTree === n && (o.vnode.el = r, Cr(o, r))
}

function Di(t) {
    const e = t.props && t.props.suspensible;
    return e != null && e !== !1
}
const yn = Symbol.for("v-fgt"),
    kr = Symbol.for("v-txt"),
    $t = Symbol.for("v-cmt"),
    Se = [];
let st = null;

function Kt(t = !1) {
    Se.push(st = t ? null : [])
}

function Mr() {
    Se.pop(), st = Se[Se.length - 1] || null
}
let te = 1;

function Ln(t) {
    te += t, t < 0 && st && (st.hasOnce = !0)
}

function Ir(t) {
    return t.dynamicChildren = te > 0 ? st || Zr : null, Mr(), te > 0 && st && st.push(t), t
}

function Qe(t, e, n, o, r, i) {
    return Ir(Oe(t, e, n, o, r, i, !0))
}

function Dr(t, e, n, o, r) {
    return Ir(Bt(t, e, n, o, r, !0))
}

function Or(t) {
    return t ? t.__v_isVNode === !0 : !1
}

function Ye(t, e) {
    return t.type === e.type && t.key === e.key
}
const Pr = ({
        key: t
    }) => t ? ? null,
    ke = ({
        ref: t,
        ref_key: e,
        ref_for: n
    }) => (typeof t == "number" && (t = "" + t), t != null ? yt(t) || ut(t) || V(t) ? {
        i: mt,
        r: t,
        k: e,
        f: !!n
    } : t : null);

function Oe(t, e = null, n = null, o = 0, r = null, i = t === yn ? 0 : 1, s = !1, a = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && Pr(e),
        ref: e && ke(e),
        scopeId: gr,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: o,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: mt
    };
    return a ? (bn(c, n), i & 128 && t.normalize(c)) : n && (c.shapeFlag |= yt(n) ? 8 : 16), te > 0 && !s && st && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && st.push(c), c
}
const Bt = Oi;

function Oi(t, e = null, n = null, o = 0, r = null, i = !1) {
    if ((!t || t === oi) && (t = $t), Or(t)) {
        const a = Pe(t, e, !0);
        return n && bn(a, n), te > 0 && !i && st && (a.shapeFlag & 6 ? st[st.indexOf(t)] = a : st.push(a)), a.patchFlag = -2, a
    }
    if (zi(t) && (t = t.__vccOpts), e) {
        e = Pi(e);
        let {
            class: a,
            style: c
        } = e;
        a && !yt(a) && (e.class = Wt(a)), tt(c) && (pn(c) && !E(c) && (c = xt({}, c)), e.style = an(c))
    }
    const s = yt(t) ? 1 : _i(t) ? 128 : jo(t) ? 64 : tt(t) ? 4 : V(t) ? 2 : 0;
    return Oe(t, e, n, o, r, s, i, !0)
}

function Pi(t) {
    return t ? pn(t) || xr(t) ? xt({}, t) : t : null
}

function Pe(t, e, n = !1, o = !1) {
    const {
        props: r,
        ref: i,
        patchFlag: s,
        children: a,
        transition: c
    } = t, C = e ? qi(r || {}, e) : r, m = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: C,
        key: C && Pr(C),
        ref: e && e.ref ? n && i ? E(i) ? i.concat(ke(e)) : [i, ke(e)] : ke(e) : i,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: a,
        target: t.target,
        targetStart: t.targetStart,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== yn ? s === -1 ? 16 : s | 16 : s,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: c,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && Pe(t.ssContent),
        ssFallback: t.ssFallback && Pe(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce
    };
    return c && o && mr(m, c.clone(m)), m
}

function Ti(t = " ", e = 0) {
    return Bt(kr, null, t, e)
}

function zn(t = "", e = !1) {
    return e ? (Kt(), Dr($t, null, t)) : Bt($t, null, t)
}

function Bi(t) {
    return t == null || typeof t == "boolean" ? Bt($t) : E(t) ? Bt(yn, null, t.slice()) : typeof t == "object" ? Ni(t) : Bt(kr, null, String(t))
}

function Ni(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : Pe(t)
}

function bn(t, e) {
    let n = 0;
    const {
        shapeFlag: o
    } = t;
    if (e == null) e = null;
    else if (E(e)) n = 16;
    else if (typeof e == "object")
        if (o & 65) {
            const r = e.default;
            r && (r._c && (r._d = !1), bn(t, r()), r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = e._;
            !r && !xr(e) ? e._ctx = mt : r === 3 && mt && (mt.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
        }
    else V(e) ? (e = {
        default: e,
        _ctx: mt
    }, n = 32) : (e = String(e), o & 64 ? (n = 16, e = [Ti(e)]) : n = 8);
    t.children = e, t.shapeFlag |= n
}

function qi(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const o = t[n];
        for (const r in o)
            if (r === "class") e.class !== o.class && (e.class = Wt([e.class, o.class]));
            else if (r === "style") e.style = an([e.style, o.style]);
        else if ($r(r)) {
            const i = e[r],
                s = o[r];
            s && i !== s && !(E(i) && i.includes(s)) && (e[r] = i ? [].concat(i, s) : s)
        } else r !== "" && (e[r] = o[r])
    }
    return e
}
let et = null;
const Ri = () => et || mt;
let Te; {
    const t = oo(),
        e = (n, o) => {
            let r;
            return (r = t[n]) || (r = t[n] = []), r.push(o), i => {
                r.length > 1 ? r.forEach(s => s(i)) : r[0](i)
            }
        };
    Te = e("__VUE_INSTANCE_SETTERS__", n => et = n), e("__VUE_SSR_SETTERS__", n => Le = n)
}
const Be = t => {
        const e = et;
        return Te(t), t.scope.on(), () => {
            t.scope.off(), Te(e)
        }
    },
    Ai = () => {
        et && et.scope.off(), Te(null)
    };
let Le = !1;

function Fi(t, e, n) {
    V(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : tt(e) && (t.setupState = Bo(e)), Li(t, n)
}
let En;

function Li(t, e, n) {
    const o = t.type;
    if (!t.render) {
        if (!e && En && !o.render) {
            const r = o.template || wr(t).template;
            if (r) {
                const {
                    isCustomElement: i,
                    compilerOptions: s
                } = t.appContext.config, {
                    delimiters: a,
                    compilerOptions: c
                } = o, C = xt(xt({
                    isCustomElement: i,
                    delimiters: a
                }, s), c);
                o.render = En(r, C)
            }
        }
        t.render = o.render || _t
    } {
        const r = Be(t);
        ce();
        try {
            si(t)
        } finally {
            ue(), r()
        }
    }
}

function zi(t) {
    return V(t) && "__vccOpts" in t
}
const Ei = (t, e) => qo(t, e, Le),
    Je = {
        numeric: "Numeric",
        alphanumeric: "Alphanumeric",
        byte: "Byte",
        kanji: "Kanji"
    };

function Vi(t) {
    switch (!0) {
        case /^[0-9]*$/.test(t):
            return Je.numeric;
        case /^[0-9A-Z $%*+\-./:]*$/.test(t):
            return Je.alphanumeric;
        default:
            return Je.byte
    }
}
const _e = t => !!t && typeof t == "object" && !Array.isArray(t);

function Ne(t, ...e) {
    if (!e.length) return t;
    const n = e.shift();
    return n === void 0 || !_e(t) || !_e(n) ? t : (t = { ...t
    }, Object.keys(n).forEach(o => {
        const r = t[o],
            i = n[o];
        Array.isArray(r) && Array.isArray(i) ? t[o] = i : _e(r) && _e(i) ? t[o] = Ne(Object.assign({}, r), i) : t[o] = i
    }), Ne(t, ...e))
}

function Ui(t, e) {
    const n = document.createElement("a");
    n.download = e, n.href = t, document.body.appendChild(n), n.click(), document.body.removeChild(n)
}

function ji({
    originalHeight: t,
    originalWidth: e,
    maxHiddenDots: n,
    maxHiddenAxisDots: o,
    dotSize: r
}) {
    const i = {
            x: 0,
            y: 0
        },
        s = {
            x: 0,
            y: 0
        };
    if (t <= 0 || e <= 0 || n <= 0 || r <= 0) return {
        height: 0,
        width: 0,
        hideYDots: 0,
        hideXDots: 0
    };
    const a = t / e;
    return i.x = Math.floor(Math.sqrt(n / a)), i.x <= 0 && (i.x = 1), o && o < i.x && (i.x = o), i.x % 2 === 0 && i.x--, s.x = i.x * r, i.y = 1 + 2 * Math.ceil((i.x * a - 1) / 2), s.y = Math.round(s.x * a), (i.y * i.x > n || o && o < i.y) && (o && o < i.y ? (i.y = o, i.y % 2 === 0 && i.x--) : i.y -= 2, s.y = i.y * r, i.x = 1 + 2 * Math.ceil((i.y / a - 1) / 2), s.x = Math.round(s.y / a)), {
        height: s.y,
        width: s.x,
        hideYDots: i.y,
        hideXDots: i.x
    }
}
const Hi = {
        L: .07,
        M: .15,
        Q: .25,
        H: .3
    },
    Qt = {
        dots: "dots",
        rounded: "rounded",
        classy: "classy",
        classyRounded: "classy-rounded",
        square: "square",
        extraRounded: "extra-rounded"
    };
class We {
    constructor({
        context: e,
        type: n
    }) {
        ot(this, "_context"), ot(this, "_type"), this._context = e, this._type = n
    }
    draw(e, n, o, r) {
        const i = this._context,
            s = this._type;
        let a;
        switch (s) {
            case Qt.dots:
                a = this._drawDot;
                break;
            case Qt.classy:
                a = this._drawClassy;
                break;
            case Qt.classyRounded:
                a = this._drawClassyRounded;
                break;
            case Qt.rounded:
                a = this._drawRounded;
                break;
            case Qt.extraRounded:
                a = this._drawExtraRounded;
                break;
            case Qt.square:
            default:
                a = this._drawSquare
        }
        a.call(this, {
            x: e,
            y: n,
            size: o,
            context: i,
            getNeighbor: r
        })
    }
    _rotateFigure({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: i,
        draw: s
    }) {
        const a = e + o / 2,
            c = n + o / 2;
        r.translate(a, c), i && r.rotate(i), s(), r.closePath(), i && r.rotate(-i), r.translate(-a, -c)
    }
    _basicDot(e) {
        const {
            size: n,
            context: o
        } = e;
        this._rotateFigure({ ...e,
            draw: () => {
                o.moveTo(0, 0), o.arc(0, 0, n / 2, 0, Math.PI * 2)
            }
        })
    }
    _basicSquare(e) {
        const {
            size: n,
            context: o
        } = e;
        this._rotateFigure({ ...e,
            draw: () => {
                o.moveTo(0, 0), o.rect(-n / 2, -n / 2, n, n)
            }
        })
    }
    _basicSideRounded(e) {
        const {
            size: n,
            context: o
        } = e;
        this._rotateFigure({ ...e,
            draw: () => {
                o.moveTo(0, 0), o.arc(0, 0, n / 2, -Math.PI / 2, Math.PI / 2), o.lineTo(-n / 2, n / 2), o.lineTo(-n / 2, -n / 2), o.lineTo(0, -n / 2)
            }
        })
    }
    _basicCornerRounded(e) {
        const {
            size: n,
            context: o
        } = e;
        this._rotateFigure({ ...e,
            draw: () => {
                o.moveTo(0, 0), o.arc(0, 0, n / 2, -Math.PI / 2, 0), o.lineTo(n / 2, n / 2), o.lineTo(-n / 2, n / 2), o.lineTo(-n / 2, -n / 2), o.lineTo(0, -n / 2)
            }
        })
    }
    _basicCornerExtraRounded(e) {
        const {
            size: n,
            context: o
        } = e;
        this._rotateFigure({ ...e,
            draw: () => {
                o.moveTo(0, 0), o.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), o.lineTo(-n / 2, n / 2), o.lineTo(-n / 2, -n / 2)
            }
        })
    }
    _basicCornersRounded(e) {
        const {
            size: n,
            context: o
        } = e;
        this._rotateFigure({ ...e,
            draw: () => {
                o.moveTo(0, 0), o.arc(0, 0, n / 2, -Math.PI / 2, 0), o.lineTo(n / 2, n / 2), o.lineTo(0, n / 2), o.arc(0, 0, n / 2, Math.PI / 2, Math.PI), o.lineTo(-n / 2, -n / 2), o.lineTo(0, -n / 2)
            }
        })
    }
    _basicCornersExtraRounded(e) {
        const {
            size: n,
            context: o
        } = e;
        this._rotateFigure({ ...e,
            draw: () => {
                o.moveTo(0, 0), o.arc(-n / 2, n / 2, n, -Math.PI / 2, 0), o.arc(n / 2, -n / 2, n, Math.PI / 2, Math.PI)
            }
        })
    }
    _drawDot({
        x: e,
        y: n,
        size: o,
        context: r
    }) {
        this._basicDot({
            x: e,
            y: n,
            size: o,
            context: r,
            rotation: 0
        })
    }
    _drawSquare({
        x: e,
        y: n,
        size: o,
        context: r
    }) {
        this._basicSquare({
            x: e,
            y: n,
            size: o,
            context: r,
            rotation: 0
        })
    }
    _drawRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        getNeighbor: i
    }) {
        const s = +i(-1, 0),
            a = +i(1, 0),
            c = +i(0, -1),
            C = +i(0, 1),
            m = s + a + c + C;
        if (m === 0) {
            this._basicDot({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: 0
            });
            return
        }
        if (m > 2 || s && a || c && C) {
            this._basicSquare({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: 0
            });
            return
        }
        if (m === 2) {
            let d = 0;
            s && c ? d = Math.PI / 2 : c && a ? d = Math.PI : a && C && (d = -Math.PI / 2), this._basicCornerRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: d
            });
            return
        }
        if (m === 1) {
            let d = 0;
            c ? d = Math.PI / 2 : a ? d = Math.PI : C && (d = -Math.PI / 2), this._basicSideRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: d
            })
        }
    }
    _drawExtraRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        getNeighbor: i
    }) {
        const s = +i(-1, 0),
            a = +i(1, 0),
            c = +i(0, -1),
            C = +i(0, 1),
            m = s + a + c + C;
        if (m === 0) {
            this._basicDot({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: 0
            });
            return
        }
        if (m > 2 || s && a || c && C) {
            this._basicSquare({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: 0
            });
            return
        }
        if (m === 2) {
            let d = 0;
            s && c ? d = Math.PI / 2 : c && a ? d = Math.PI : a && C && (d = -Math.PI / 2), this._basicCornerExtraRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: d
            });
            return
        }
        if (m === 1) {
            let d = 0;
            c ? d = Math.PI / 2 : a ? d = Math.PI : C && (d = -Math.PI / 2), this._basicSideRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: d
            })
        }
    }
    _drawClassy({
        x: e,
        y: n,
        size: o,
        context: r,
        getNeighbor: i
    }) {
        const s = +i(-1, 0),
            a = +i(1, 0),
            c = +i(0, -1),
            C = +i(0, 1);
        if (s + a + c + C === 0) {
            this._basicCornersRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: Math.PI / 2
            });
            return
        }
        if (!s && !c) {
            this._basicCornerRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: -Math.PI / 2
            });
            return
        }
        if (!a && !C) {
            this._basicCornerRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: Math.PI / 2
            });
            return
        }
        this._basicSquare({
            x: e,
            y: n,
            size: o,
            context: r,
            rotation: 0
        })
    }
    _drawClassyRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        getNeighbor: i
    }) {
        const s = +i(-1, 0),
            a = +i(1, 0),
            c = +i(0, -1),
            C = +i(0, 1);
        if (s + a + c + C === 0) {
            this._basicCornersRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: Math.PI / 2
            });
            return
        }
        if (!s && !c) {
            this._basicCornerExtraRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: -Math.PI / 2
            });
            return
        }
        if (!a && !C) {
            this._basicCornerExtraRounded({
                x: e,
                y: n,
                size: o,
                context: r,
                rotation: Math.PI / 2
            });
            return
        }
        this._basicSquare({
            x: e,
            y: n,
            size: o,
            context: r,
            rotation: 0
        })
    }
}
const Ge = {
    dot: "dot",
    square: "square",
    extraRounded: "extra-rounded"
};
class Qi {
    constructor({
        context: e,
        type: n
    }) {
        ot(this, "_context"), ot(this, "_type"), this._context = e, this._type = n
    }
    draw(e, n, o, r) {
        const i = this._context,
            s = this._type;
        let a;
        switch (s) {
            case Ge.square:
                a = this._drawSquare;
                break;
            case Ge.extraRounded:
                a = this._drawExtraRounded;
                break;
            case Ge.dot:
            default:
                a = this._drawDot
        }
        a.call(this, {
            x: e,
            y: n,
            size: o,
            context: i,
            rotation: r
        })
    }
    _rotateFigure({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: i,
        draw: s
    }) {
        const a = e + o / 2,
            c = n + o / 2;
        r.translate(a, c), i && r.rotate(i), s(), r.closePath(), i && r.rotate(-i), r.translate(-a, -c)
    }
    _basicDot(e) {
        const {
            size: n,
            context: o
        } = e, r = n / 7;
        this._rotateFigure({ ...e,
            draw: () => {
                o.arc(0, 0, n / 2, 0, Math.PI * 2), o.arc(0, 0, n / 2 - r, 0, Math.PI * 2)
            }
        })
    }
    _basicSquare(e) {
        const {
            size: n,
            context: o
        } = e, r = n / 7;
        this._rotateFigure({ ...e,
            draw: () => {
                o.rect(-n / 2, -n / 2, n, n), o.rect(-n / 2 + r, -n / 2 + r, n - 2 * r, n - 2 * r)
            }
        })
    }
    _basicExtraRounded(e) {
        const {
            size: n,
            context: o
        } = e, r = n / 7;
        this._rotateFigure({ ...e,
            draw: () => {
                o.arc(-r, -r, 2.5 * r, Math.PI, -Math.PI / 2), o.lineTo(r, -3.5 * r), o.arc(r, -r, 2.5 * r, -Math.PI / 2, 0), o.lineTo(3.5 * r, -r), o.arc(r, r, 2.5 * r, 0, Math.PI / 2), o.lineTo(-r, 3.5 * r), o.arc(-r, r, 2.5 * r, Math.PI / 2, Math.PI), o.lineTo(-3.5 * r, -r), o.arc(-r, -r, 1.5 * r, Math.PI, -Math.PI / 2), o.lineTo(r, -2.5 * r), o.arc(r, -r, 1.5 * r, -Math.PI / 2, 0), o.lineTo(2.5 * r, -r), o.arc(r, r, 1.5 * r, 0, Math.PI / 2), o.lineTo(-r, 2.5 * r), o.arc(-r, r, 1.5 * r, Math.PI / 2, Math.PI), o.lineTo(-2.5 * r, -r)
            }
        })
    }
    _drawDot({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: i
    }) {
        this._basicDot({
            x: e,
            y: n,
            size: o,
            context: r,
            rotation: i
        })
    }
    _drawSquare({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: i
    }) {
        this._basicSquare({
            x: e,
            y: n,
            size: o,
            context: r,
            rotation: i
        })
    }
    _drawExtraRounded({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: i
    }) {
        this._basicExtraRounded({
            x: e,
            y: n,
            size: o,
            context: r,
            rotation: i
        })
    }
}
const Vn = {
    dot: "dot",
    square: "square"
};
class Yi {
    constructor({
        context: e,
        type: n
    }) {
        ot(this, "_context"), ot(this, "_type"), this._context = e, this._type = n
    }
    draw(e, n, o, r) {
        const i = this._context;
        switch (this._type) {
            case Vn.square:
                this._drawSquare({
                    x: e,
                    y: n,
                    size: o,
                    context: i,
                    rotation: r
                });
                break;
            case Vn.dot:
            default:
                this._drawDot({
                    x: e,
                    y: n,
                    size: o,
                    context: i,
                    rotation: r
                })
        }
    }
    _rotateFigure({
        x: e,
        y: n,
        size: o,
        context: r,
        rotation: i,
        draw: s
    }) {
        const a = e + o / 2,
            c = n + o / 2;
        r.moveTo(0, 0), r.translate(a, c), i && r.rotate(i), s(), r.closePath(), i && r.rotate(-i), r.translate(-a, -c)
    }
    _drawDot(e) {
        const {
            size: n,
            context: o
        } = e;
        this._rotateFigure({ ...e,
            draw: () => {
                o.moveTo(0, 0), o.arc(0, 0, n / 2, 0, Math.PI * 2)
            }
        })
    }
    _drawSquare(e) {
        const {
            size: n,
            context: o
        } = e;
        this._rotateFigure({ ...e,
            draw: () => {
                o.moveTo(0, 0), o.rect(-n / 2, -n / 2, n, n)
            }
        })
    }
}
const Ji = {
        radial: "radial",
        linear: "linear"
    },
    qt = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1]
    ],
    Rt = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];
class Wi {
    constructor(e) {
        ot(this, "_canvas"), ot(this, "_options"), ot(this, "_qr"), ot(this, "_image"), this._canvas = document.createElement("canvas"), this._canvas.width = e.width, this._canvas.height = e.height, this._options = e
    }
    get context() {
        return this._canvas.getContext("2d")
    }
    get width() {
        return this._canvas.width
    }
    get height() {
        return this._canvas.height
    }
    getCanvas() {
        return this._canvas
    }
    clear() {
        const e = this.context;
        e && e.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
    async drawQR(e) {
        const n = e.getModuleCount(),
            o = Math.min(this._options.width, this._options.height) - this._options.margin * 2,
            r = Math.floor(o / n);
        let i = {
            hideXDots: 0,
            hideYDots: 0,
            width: 0,
            height: 0
        };
        if (this._qr = e, this._options.image) {
            if (await this.loadImage(), !this._image) return;
            const {
                imageOptions: s,
                qrOptions: a
            } = this._options, c = s.imageSize * Hi[a.errorCorrectionLevel], C = Math.floor(c * n * n);
            i = ji({
                originalWidth: this._image.width,
                originalHeight: this._image.height,
                maxHiddenDots: C,
                maxHiddenAxisDots: n - 14,
                dotSize: r
            })
        }
        this.clear(), this.drawBackground(), this.drawDots((s, a) => {
            var c, C, m, d, D, B;
            return !(this._options.imageOptions.hideBackgroundDots && s >= (n - i.hideXDots) / 2 && s < (n + i.hideXDots) / 2 && a >= (n - i.hideYDots) / 2 && a < (n + i.hideYDots) / 2 || (c = qt[s]) != null && c[a] || (C = qt[s - n + 7]) != null && C[a] || (m = qt[s]) != null && m[a - n + 7] || (d = Rt[s]) != null && d[a] || (D = Rt[s - n + 7]) != null && D[a] || (B = Rt[s]) != null && B[a - n + 7])
        }), this.drawCorners(), this._options.image && this.drawImage({
            width: i.width,
            height: i.height,
            count: n,
            dotSize: r
        })
    }
    drawBackground() {
        const e = this.context,
            n = this._options;
        if (e) {
            if (n.backgroundOptions.gradient) {
                const o = n.backgroundOptions.gradient,
                    r = this._createGradient({
                        context: e,
                        options: o,
                        additionalRotation: 0,
                        x: 0,
                        y: 0,
                        size: this._canvas.width > this._canvas.height ? this._canvas.width : this._canvas.height
                    });
                o.colorStops.forEach(({
                    offset: i,
                    color: s
                }) => {
                    r.addColorStop(i, s)
                }), e.fillStyle = r
            } else n.backgroundOptions.color && (e.fillStyle = n.backgroundOptions.color);
            e.fillRect(0, 0, this._canvas.width, this._canvas.height)
        }
    }
    drawDots(e) {
        if (!this._qr) throw "QR code is not defined";
        const n = this.context;
        if (!n) throw "QR code is not defined";
        const o = this._options,
            r = this._qr.getModuleCount();
        if (r > o.width || r > o.height) throw "The canvas is too small.";
        const i = Math.min(o.width, o.height) - o.margin * 2,
            s = Math.floor(i / r),
            a = Math.floor((o.width - r * s) / 2),
            c = Math.floor((o.height - r * s) / 2),
            C = new We({
                context: n,
                type: o.dotsOptions.type
            });
        n.beginPath();
        for (let m = 0; m < r; m++)
            for (let d = 0; d < r; d++) e && !e(m, d) || this._qr.isDark(m, d) && C.draw(a + m * s, c + d * s, s, (D, B) => m + D < 0 || d + B < 0 || m + D >= r || d + B >= r || e && !e(m + D, d + B) ? !1 : !!this._qr && this._qr.isDark(m + D, d + B));
        if (o.dotsOptions.gradient) {
            const m = o.dotsOptions.gradient,
                d = this._createGradient({
                    context: n,
                    options: m,
                    additionalRotation: 0,
                    x: a,
                    y: c,
                    size: r * s
                });
            m.colorStops.forEach(({
                offset: D,
                color: B
            }) => {
                d.addColorStop(D, B)
            }), n.fillStyle = n.strokeStyle = d
        } else o.dotsOptions.color && (n.fillStyle = n.strokeStyle = o.dotsOptions.color);
        n.fill("evenodd")
    }
    drawCorners(e) {
        if (!this._qr) throw "QR code is not defined";
        const n = this.context;
        if (!n) throw "QR code is not defined";
        const o = this._options,
            r = this._qr.getModuleCount(),
            i = Math.min(o.width, o.height) - o.margin * 2,
            s = Math.floor(i / r),
            a = s * 7,
            c = s * 3,
            C = Math.floor((o.width - r * s) / 2),
            m = Math.floor((o.height - r * s) / 2);
        [
            [0, 0, 0],
            [1, 0, Math.PI / 2],
            [0, 1, -Math.PI / 2]
        ].forEach(([d, D, B]) => {
            var z, G, X, W, A, L, K, v, I, b;
            if (e && !e(d, D)) return;
            const k = C + d * s * (r - 7),
                f = m + D * s * (r - 7);
            if ((z = o.cornersSquareOptions) != null && z.type) {
                const p = new Qi({
                    context: n,
                    type: (G = o.cornersSquareOptions) == null ? void 0 : G.type
                });
                n.beginPath(), p.draw(k, f, a, B)
            } else {
                const p = new We({
                    context: n,
                    type: o.dotsOptions.type
                });
                n.beginPath();
                for (let u = 0; u < qt.length; u++)
                    for (let l = 0; l < qt[u].length; l++)(X = qt[u]) != null && X[l] && p.draw(k + u * s, f + l * s, s, (x, _) => {
                        var S;
                        return !!((S = qt[u + x]) != null && S[l + _])
                    })
            }
            if ((W = o.cornersSquareOptions) != null && W.gradient) {
                const p = o.cornersSquareOptions.gradient,
                    u = this._createGradient({
                        context: n,
                        options: p,
                        additionalRotation: B,
                        x: k,
                        y: f,
                        size: a
                    });
                p.colorStops.forEach(({
                    offset: l,
                    color: x
                }) => {
                    u.addColorStop(l, x)
                }), n.fillStyle = n.strokeStyle = u
            } else(A = o.cornersSquareOptions) != null && A.color && (n.fillStyle = n.strokeStyle = o.cornersSquareOptions.color);
            if (n.fill("evenodd"), (L = o.cornersDotOptions) != null && L.type) {
                const p = new Yi({
                    context: n,
                    type: (K = o.cornersDotOptions) == null ? void 0 : K.type
                });
                n.beginPath(), p.draw(k + s * 2, f + s * 2, c, B)
            } else {
                const p = new We({
                    context: n,
                    type: o.dotsOptions.type
                });
                n.beginPath();
                for (let u = 0; u < Rt.length; u++)
                    for (let l = 0; l < Rt[u].length; l++)(v = Rt[u]) != null && v[l] && p.draw(k + u * s, f + l * s, s, (x, _) => {
                        var S;
                        return !!((S = Rt[u + x]) != null && S[l + _])
                    })
            }
            if ((I = o.cornersDotOptions) != null && I.gradient) {
                const p = o.cornersDotOptions.gradient,
                    u = this._createGradient({
                        context: n,
                        options: p,
                        additionalRotation: B,
                        x: k + s * 2,
                        y: f + s * 2,
                        size: c
                    });
                p.colorStops.forEach(({
                    offset: l,
                    color: x
                }) => {
                    u.addColorStop(l, x)
                }), n.fillStyle = n.strokeStyle = u
            } else(b = o.cornersDotOptions) != null && b.color && (n.fillStyle = n.strokeStyle = o.cornersDotOptions.color);
            n.fill("evenodd")
        })
    }
    loadImage() {
        return new Promise((e, n) => {
            const o = this._options,
                r = new Image;
            if (!o.image) return n("Image is not defined");
            typeof o.imageOptions.crossOrigin == "string" && (r.crossOrigin = o.imageOptions.crossOrigin), this._image = r, r.onload = () => {
                e()
            }, r.src = o.image
        })
    }
    drawImage({
        width: e,
        height: n,
        count: o,
        dotSize: r
    }) {
        const i = this.context;
        if (!i) throw "canvasContext is not defined";
        if (!this._image) throw "image is not defined";
        const s = this._options,
            a = Math.floor((s.width - o * r) / 2),
            c = Math.floor((s.height - o * r) / 2),
            C = a + s.imageOptions.margin + (o * r - e) / 2,
            m = c + s.imageOptions.margin + (o * r - n) / 2,
            d = e - s.imageOptions.margin * 2,
            D = n - s.imageOptions.margin * 2;
        i.drawImage(this._image, C, m, d < 0 ? 0 : d, D < 0 ? 0 : D)
    }
    _createGradient({
        context: e,
        options: n,
        additionalRotation: o,
        x: r,
        y: i,
        size: s
    }) {
        let a;
        if (n.type === Ji.radial) a = e.createRadialGradient(r + s / 2, i + s / 2, 0, r + s / 2, i + s / 2, s / 2);
        else {
            const c = ((n.rotation || 0) + o) % (2 * Math.PI),
                C = (c + 2 * Math.PI) % (2 * Math.PI);
            let m = r + s / 2,
                d = i + s / 2,
                D = r + s / 2,
                B = i + s / 2;
            C >= 0 && C <= .25 * Math.PI || C > 1.75 * Math.PI && C <= 2 * Math.PI ? (m = m - s / 2, d = d - s / 2 * Math.tan(c), D = D + s / 2, B = B + s / 2 * Math.tan(c)) : C > .25 * Math.PI && C <= .75 * Math.PI ? (d = d - s / 2, m = m - s / 2 / Math.tan(c), B = B + s / 2, D = D + s / 2 / Math.tan(c)) : C > .75 * Math.PI && C <= 1.25 * Math.PI ? (m = m + s / 2, d = d + s / 2 * Math.tan(c), D = D - s / 2, B = B - s / 2 * Math.tan(c)) : C > 1.25 * Math.PI && C <= 1.75 * Math.PI && (d = d + s / 2, m = m + s / 2 / Math.tan(c), B = B - s / 2, D = D - s / 2 / Math.tan(c)), a = e.createLinearGradient(Math.round(m), Math.round(d), Math.round(D), Math.round(B))
        }
        return a
    }
}
const Tr = {};
for (let t = 0; t <= 40; t++) Tr[t] = t;
const Gi = {
        L: "L",
        M: "M",
        Q: "Q",
        H: "H"
    },
    Un = {
        width: 300,
        height: 300,
        data: "",
        margin: 0,
        qrOptions: {
            typeNumber: Tr[0],
            mode: void 0,
            errorCorrectionLevel: Gi.Q
        },
        imageOptions: {
            hideBackgroundDots: !0,
            imageSize: .4,
            crossOrigin: void 0,
            margin: 0
        },
        dotsOptions: {
            type: "square",
            color: "#000"
        },
        backgroundOptions: {
            color: "#fff"
        }
    };

function we(t) {
    const e = { ...t
    };
    if (!e.colorStops || !e.colorStops.length) throw "Field 'colorStops' is required in gradient";
    return e.rotation ? e.rotation = Number(e.rotation) : e.rotation = 0, e.colorStops = e.colorStops.map(n => ({ ...n,
        offset: Number(n.offset)
    })), e
}

function jn(t) {
    const e = { ...t
    };
    return e.width = Number(e.width), e.height = Number(e.height), e.margin = Number(e.margin), e.imageOptions = { ...e.imageOptions,
        hideBackgroundDots: !!e.imageOptions.hideBackgroundDots,
        imageSize: Number(e.imageOptions.imageSize),
        margin: Number(e.imageOptions.margin)
    }, e.margin > Math.min(e.width, e.height) && (e.margin = Math.min(e.width, e.height)), e.dotsOptions = { ...e.dotsOptions
    }, e.dotsOptions.gradient && (e.dotsOptions.gradient = we(e.dotsOptions.gradient)), e.cornersSquareOptions && (e.cornersSquareOptions = { ...e.cornersSquareOptions
    }, e.cornersSquareOptions.gradient && (e.cornersSquareOptions.gradient = we(e.cornersSquareOptions.gradient))), e.cornersDotOptions && (e.cornersDotOptions = { ...e.cornersDotOptions
    }, e.cornersDotOptions.gradient && (e.cornersDotOptions.gradient = we(e.cornersDotOptions.gradient))), e.backgroundOptions && (e.backgroundOptions = { ...e.backgroundOptions
    }, e.backgroundOptions.gradient && (e.backgroundOptions.gradient = we(e.backgroundOptions.gradient))), e
}

function Xi(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Br = {
    exports: {}
};
(function(t, e) {
    var n = function() {
        var o = function(v, I) {
            var b = 236,
                k = 17,
                f = v,
                p = i[I],
                u = null,
                l = 0,
                x = null,
                _ = [],
                S = {},
                T = function(g, y) {
                    l = f * 4 + 17, u = function(h) {
                        for (var w = new Array(h), M = 0; M < h; M += 1) {
                            w[M] = new Array(h);
                            for (var O = 0; O < h; O += 1) w[M][O] = null
                        }
                        return w
                    }(l), P(0, 0), P(l - 7, 0), P(0, l - 7), $(), H(), gt(g, y), f >= 7 && lt(g), x == null && (x = Nr(f, p, _)), Ct(x, y)
                },
                P = function(g, y) {
                    for (var h = -1; h <= 7; h += 1)
                        if (!(g + h <= -1 || l <= g + h))
                            for (var w = -1; w <= 7; w += 1) y + w <= -1 || l <= y + w || (0 <= h && h <= 6 && (w == 0 || w == 6) || 0 <= w && w <= 6 && (h == 0 || h == 6) || 2 <= h && h <= 4 && 2 <= w && w <= 4 ? u[g + h][y + w] = !0 : u[g + h][y + w] = !1)
                },
                q = function() {
                    for (var g = 0, y = 0, h = 0; h < 8; h += 1) {
                        T(!0, h);
                        var w = a.getLostPoint(S);
                        (h == 0 || g > w) && (g = w, y = h)
                    }
                    return y
                },
                H = function() {
                    for (var g = 8; g < l - 8; g += 1) u[g][6] == null && (u[g][6] = g % 2 == 0);
                    for (var y = 8; y < l - 8; y += 1) u[6][y] == null && (u[6][y] = y % 2 == 0)
                },
                $ = function() {
                    for (var g = a.getPatternPosition(f), y = 0; y < g.length; y += 1)
                        for (var h = 0; h < g.length; h += 1) {
                            var w = g[y],
                                M = g[h];
                            if (u[w][M] == null)
                                for (var O = -2; O <= 2; O += 1)
                                    for (var R = -2; R <= 2; R += 1) O == -2 || O == 2 || R == -2 || R == 2 || O == 0 && R == 0 ? u[w + O][M + R] = !0 : u[w + O][M + R] = !1
                        }
                },
                lt = function(g) {
                    for (var y = a.getBCHTypeNumber(f), h = 0; h < 18; h += 1) {
                        var w = !g && (y >> h & 1) == 1;
                        u[Math.floor(h / 3)][h % 3 + l - 8 - 3] = w
                    }
                    for (var h = 0; h < 18; h += 1) {
                        var w = !g && (y >> h & 1) == 1;
                        u[h % 3 + l - 8 - 3][Math.floor(h / 3)] = w
                    }
                },
                gt = function(g, y) {
                    for (var h = p << 3 | y, w = a.getBCHTypeInfo(h), M = 0; M < 15; M += 1) {
                        var O = !g && (w >> M & 1) == 1;
                        M < 6 ? u[M][8] = O : M < 8 ? u[M + 1][8] = O : u[l - 15 + M][8] = O
                    }
                    for (var M = 0; M < 15; M += 1) {
                        var O = !g && (w >> M & 1) == 1;
                        M < 8 ? u[8][l - M - 1] = O : M < 9 ? u[8][15 - M - 1 + 1] = O : u[8][15 - M - 1] = O
                    }
                    u[l - 8][8] = !g
                },
                Ct = function(g, y) {
                    for (var h = -1, w = l - 1, M = 7, O = 0, R = a.getMaskFunction(y), N = l - 1; N > 0; N -= 2)
                        for (N == 6 && (N -= 1);;) {
                            for (var Q = 0; Q < 2; Q += 1)
                                if (u[w][N - Q] == null) {
                                    var Z = !1;
                                    O < g.length && (Z = (g[O] >>> M & 1) == 1);
                                    var F = R(w, N - Q);
                                    F && (Z = !Z), u[w][N - Q] = Z, M -= 1, M == -1 && (O += 1, M = 7)
                                }
                            if (w += h, w < 0 || l <= w) {
                                w -= h, h = -h;
                                break
                            }
                        }
                },
                Et = function(g, y) {
                    for (var h = 0, w = 0, M = 0, O = new Array(y.length), R = new Array(y.length), N = 0; N < y.length; N += 1) {
                        var Q = y[N].dataCount,
                            Z = y[N].totalCount - Q;
                        w = Math.max(w, Q), M = Math.max(M, Z), O[N] = new Array(Q);
                        for (var F = 0; F < O[N].length; F += 1) O[N][F] = 255 & g.getBuffer()[F + h];
                        h += Q;
                        var dt = a.getErrorCorrectPolynomial(Z),
                            ft = C(O[N], dt.getLength() - 1),
                            wn = ft.mod(dt);
                        R[N] = new Array(dt.getLength() - 1);
                        for (var F = 0; F < R[N].length; F += 1) {
                            var xn = F + wn.getLength() - R[N].length;
                            R[N][F] = xn >= 0 ? wn.getAt(xn) : 0
                        }
                    }
                    for (var Cn = 0, F = 0; F < y.length; F += 1) Cn += y[F].totalCount;
                    for (var ze = new Array(Cn), de = 0, F = 0; F < w; F += 1)
                        for (var N = 0; N < y.length; N += 1) F < O[N].length && (ze[de] = O[N][F], de += 1);
                    for (var F = 0; F < M; F += 1)
                        for (var N = 0; N < y.length; N += 1) F < R[N].length && (ze[de] = R[N][F], de += 1);
                    return ze
                },
                Nr = function(g, y, h) {
                    for (var w = m.getRSBlocks(g, y), M = d(), O = 0; O < h.length; O += 1) {
                        var R = h[O];
                        M.put(R.getMode(), 4), M.put(R.getLength(), a.getLengthInBits(R.getMode(), g)), R.write(M)
                    }
                    for (var N = 0, O = 0; O < w.length; O += 1) N += w[O].dataCount;
                    if (M.getLengthInBits() > N * 8) throw "code length overflow. (" + M.getLengthInBits() + ">" + N * 8 + ")";
                    for (M.getLengthInBits() + 4 <= N * 8 && M.put(0, 4); M.getLengthInBits() % 8 != 0;) M.putBit(!1);
                    for (; !(M.getLengthInBits() >= N * 8 || (M.put(b, 8), M.getLengthInBits() >= N * 8));) M.put(k, 8);
                    return Et(M, w)
                };
            S.addData = function(g, y) {
                y = y || "Byte";
                var h = null;
                switch (y) {
                    case "Numeric":
                        h = D(g);
                        break;
                    case "Alphanumeric":
                        h = B(g);
                        break;
                    case "Byte":
                        h = z(g);
                        break;
                    case "Kanji":
                        h = G(g);
                        break;
                    default:
                        throw "mode:" + y
                }
                _.push(h), x = null
            }, S.isDark = function(g, y) {
                if (g < 0 || l <= g || y < 0 || l <= y) throw g + "," + y;
                return u[g][y]
            }, S.getModuleCount = function() {
                return l
            }, S.make = function() {
                if (f < 1) {
                    for (var g = 1; g < 40; g++) {
                        for (var y = m.getRSBlocks(g, p), h = d(), w = 0; w < _.length; w++) {
                            var M = _[w];
                            h.put(M.getMode(), 4), h.put(M.getLength(), a.getLengthInBits(M.getMode(), g)), M.write(h)
                        }
                        for (var O = 0, w = 0; w < y.length; w++) O += y[w].dataCount;
                        if (h.getLengthInBits() <= O * 8) break
                    }
                    f = g
                }
                T(!1, q())
            }, S.createTableTag = function(g, y) {
                g = g || 2, y = typeof y > "u" ? g * 4 : y;
                var h = "";
                h += '<table style="', h += " border-width: 0px; border-style: none;", h += " border-collapse: collapse;", h += " padding: 0px; margin: " + y + "px;", h += '">', h += "<tbody>";
                for (var w = 0; w < S.getModuleCount(); w += 1) {
                    h += "<tr>";
                    for (var M = 0; M < S.getModuleCount(); M += 1) h += '<td style="', h += " border-width: 0px; border-style: none;", h += " border-collapse: collapse;", h += " padding: 0px; margin: 0px;", h += " width: " + g + "px;", h += " height: " + g + "px;", h += " background-color: ", h += S.isDark(w, M) ? "#000000" : "#ffffff", h += ";", h += '"/>';
                    h += "</tr>"
                }
                return h += "</tbody>", h += "</table>", h
            }, S.createSvgTag = function(g, y, h, w) {
                var M = {};
                typeof arguments[0] == "object" && (M = arguments[0], g = M.cellSize, y = M.margin, h = M.alt, w = M.title), g = g || 2, y = typeof y > "u" ? g * 4 : y, h = typeof h == "string" ? {
                    text: h
                } : h || {}, h.text = h.text || null, h.id = h.text ? h.id || "qrcode-description" : null, w = typeof w == "string" ? {
                    text: w
                } : w || {}, w.text = w.text || null, w.id = w.text ? w.id || "qrcode-title" : null;
                var O = S.getModuleCount() * g + y * 2,
                    R, N, Q, Z, F = "",
                    dt;
                for (dt = "l" + g + ",0 0," + g + " -" + g + ",0 0,-" + g + "z ", F += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', F += M.scalable ? "" : ' width="' + O + 'px" height="' + O + 'px"', F += ' viewBox="0 0 ' + O + " " + O + '" ', F += ' preserveAspectRatio="xMinYMin meet"', F += w.text || h.text ? ' role="img" aria-labelledby="' + Vt([w.id, h.id].join(" ").trim()) + '"' : "", F += ">", F += w.text ? '<title id="' + Vt(w.id) + '">' + Vt(w.text) + "</title>" : "", F += h.text ? '<description id="' + Vt(h.id) + '">' + Vt(h.text) + "</description>" : "", F += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', F += '<path d="', Q = 0; Q < S.getModuleCount(); Q += 1)
                    for (Z = Q * g + y, R = 0; R < S.getModuleCount(); R += 1) S.isDark(Q, R) && (N = R * g + y, F += "M" + N + "," + Z + dt);
                return F += '" stroke="transparent" fill="black"/>', F += "</svg>", F
            }, S.createDataURL = function(g, y) {
                g = g || 2, y = typeof y > "u" ? g * 4 : y;
                var h = S.getModuleCount() * g + y * 2,
                    w = y,
                    M = h - y;
                return K(h, h, function(O, R) {
                    if (w <= O && O < M && w <= R && R < M) {
                        var N = Math.floor((O - w) / g),
                            Q = Math.floor((R - w) / g);
                        return S.isDark(Q, N) ? 0 : 1
                    } else return 1
                })
            }, S.createImgTag = function(g, y, h) {
                g = g || 2, y = typeof y > "u" ? g * 4 : y;
                var w = S.getModuleCount() * g + y * 2,
                    M = "";
                return M += "<img", M += ' src="', M += S.createDataURL(g, y), M += '"', M += ' width="', M += w, M += '"', M += ' height="', M += w, M += '"', h && (M += ' alt="', M += Vt(h), M += '"'), M += "/>", M
            };
            var Vt = function(g) {
                    for (var y = "", h = 0; h < g.length; h += 1) {
                        var w = g.charAt(h);
                        switch (w) {
                            case "<":
                                y += "&lt;";
                                break;
                            case ">":
                                y += "&gt;";
                                break;
                            case "&":
                                y += "&amp;";
                                break;
                            case '"':
                                y += "&quot;";
                                break;
                            default:
                                y += w;
                                break
                        }
                    }
                    return y
                },
                qr = function(g) {
                    var y = 1;
                    g = typeof g > "u" ? y * 2 : g;
                    var h = S.getModuleCount() * y + g * 2,
                        w = g,
                        M = h - g,
                        O, R, N, Q, Z, F = {
                            "██": "█",
                            "█ ": "▀",
                            " █": "▄",
                            "  ": " "
                        },
                        dt = {
                            "██": "▀",
                            "█ ": "▀",
                            " █": " ",
                            "  ": " "
                        },
                        ft = "";
                    for (O = 0; O < h; O += 2) {
                        for (N = Math.floor((O - w) / y), Q = Math.floor((O + 1 - w) / y), R = 0; R < h; R += 1) Z = "█", w <= R && R < M && w <= O && O < M && S.isDark(N, Math.floor((R - w) / y)) && (Z = " "), w <= R && R < M && w <= O + 1 && O + 1 < M && S.isDark(Q, Math.floor((R - w) / y)) ? Z += " " : Z += "█", ft += g < 1 && O + 1 >= M ? dt[Z] : F[Z];
                        ft += `
`
                    }
                    return h % 2 && g > 0 ? ft.substring(0, ft.length - h - 1) + Array(h + 1).join("▀") : ft.substring(0, ft.length - 1)
                };
            return S.createASCII = function(g, y) {
                if (g = g || 1, g < 2) return qr(y);
                g -= 1, y = typeof y > "u" ? g * 2 : y;
                var h = S.getModuleCount() * g + y * 2,
                    w = y,
                    M = h - y,
                    O, R, N, Q, Z = Array(g + 1).join("██"),
                    F = Array(g + 1).join("  "),
                    dt = "",
                    ft = "";
                for (O = 0; O < h; O += 1) {
                    for (N = Math.floor((O - w) / g), ft = "", R = 0; R < h; R += 1) Q = 1, w <= R && R < M && w <= O && O < M && S.isDark(N, Math.floor((R - w) / g)) && (Q = 0), ft += Q ? Z : F;
                    for (N = 0; N < g; N += 1) dt += ft + `
`
                }
                return dt.substring(0, dt.length - 1)
            }, S.renderTo2dContext = function(g, y) {
                y = y || 2;
                for (var h = S.getModuleCount(), w = 0; w < h; w++)
                    for (var M = 0; M < h; M++) g.fillStyle = S.isDark(w, M) ? "black" : "white", g.fillRect(w * y, M * y, y, y)
            }, S
        };
        o.stringToBytesFuncs = {
            default: function(v) {
                for (var I = [], b = 0; b < v.length; b += 1) {
                    var k = v.charCodeAt(b);
                    I.push(k & 255)
                }
                return I
            }
        }, o.stringToBytes = o.stringToBytesFuncs.default, o.createStringToBytes = function(v, I) {
            var b = function() {
                    for (var f = A(v), p = function() {
                            var H = f.read();
                            if (H == -1) throw "eof";
                            return H
                        }, u = 0, l = {};;) {
                        var x = f.read();
                        if (x == -1) break;
                        var _ = p(),
                            S = p(),
                            T = p(),
                            P = String.fromCharCode(x << 8 | _),
                            q = S << 8 | T;
                        l[P] = q, u += 1
                    }
                    if (u != I) throw u + " != " + I;
                    return l
                }(),
                k = "?".charCodeAt(0);
            return function(f) {
                for (var p = [], u = 0; u < f.length; u += 1) {
                    var l = f.charCodeAt(u);
                    if (l < 128) p.push(l);
                    else {
                        var x = b[f.charAt(u)];
                        typeof x == "number" ? (x & 255) == x ? p.push(x) : (p.push(x >>> 8), p.push(x & 255)) : p.push(k)
                    }
                }
                return p
            }
        };
        var r = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            },
            i = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            },
            s = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            },
            a = function() {
                var v = [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    I = 1335,
                    b = 7973,
                    k = 21522,
                    f = {},
                    p = function(u) {
                        for (var l = 0; u != 0;) l += 1, u >>>= 1;
                        return l
                    };
                return f.getBCHTypeInfo = function(u) {
                    for (var l = u << 10; p(l) - p(I) >= 0;) l ^= I << p(l) - p(I);
                    return (u << 10 | l) ^ k
                }, f.getBCHTypeNumber = function(u) {
                    for (var l = u << 12; p(l) - p(b) >= 0;) l ^= b << p(l) - p(b);
                    return u << 12 | l
                }, f.getPatternPosition = function(u) {
                    return v[u - 1]
                }, f.getMaskFunction = function(u) {
                    switch (u) {
                        case s.PATTERN000:
                            return function(l, x) {
                                return (l + x) % 2 == 0
                            };
                        case s.PATTERN001:
                            return function(l, x) {
                                return l % 2 == 0
                            };
                        case s.PATTERN010:
                            return function(l, x) {
                                return x % 3 == 0
                            };
                        case s.PATTERN011:
                            return function(l, x) {
                                return (l + x) % 3 == 0
                            };
                        case s.PATTERN100:
                            return function(l, x) {
                                return (Math.floor(l / 2) + Math.floor(x / 3)) % 2 == 0
                            };
                        case s.PATTERN101:
                            return function(l, x) {
                                return l * x % 2 + l * x % 3 == 0
                            };
                        case s.PATTERN110:
                            return function(l, x) {
                                return (l * x % 2 + l * x % 3) % 2 == 0
                            };
                        case s.PATTERN111:
                            return function(l, x) {
                                return (l * x % 3 + (l + x) % 2) % 2 == 0
                            };
                        default:
                            throw "bad maskPattern:" + u
                    }
                }, f.getErrorCorrectPolynomial = function(u) {
                    for (var l = C([1], 0), x = 0; x < u; x += 1) l = l.multiply(C([1, c.gexp(x)], 0));
                    return l
                }, f.getLengthInBits = function(u, l) {
                    if (1 <= l && l < 10) switch (u) {
                        case r.MODE_NUMBER:
                            return 10;
                        case r.MODE_ALPHA_NUM:
                            return 9;
                        case r.MODE_8BIT_BYTE:
                            return 8;
                        case r.MODE_KANJI:
                            return 8;
                        default:
                            throw "mode:" + u
                    } else if (l < 27) switch (u) {
                        case r.MODE_NUMBER:
                            return 12;
                        case r.MODE_ALPHA_NUM:
                            return 11;
                        case r.MODE_8BIT_BYTE:
                            return 16;
                        case r.MODE_KANJI:
                            return 10;
                        default:
                            throw "mode:" + u
                    } else if (l < 41) switch (u) {
                        case r.MODE_NUMBER:
                            return 14;
                        case r.MODE_ALPHA_NUM:
                            return 13;
                        case r.MODE_8BIT_BYTE:
                            return 16;
                        case r.MODE_KANJI:
                            return 12;
                        default:
                            throw "mode:" + u
                    } else throw "type:" + l
                }, f.getLostPoint = function(u) {
                    for (var l = u.getModuleCount(), x = 0, _ = 0; _ < l; _ += 1)
                        for (var S = 0; S < l; S += 1) {
                            for (var T = 0, P = u.isDark(_, S), q = -1; q <= 1; q += 1)
                                if (!(_ + q < 0 || l <= _ + q))
                                    for (var H = -1; H <= 1; H += 1) S + H < 0 || l <= S + H || q == 0 && H == 0 || P == u.isDark(_ + q, S + H) && (T += 1);
                            T > 5 && (x += 3 + T - 5)
                        }
                    for (var _ = 0; _ < l - 1; _ += 1)
                        for (var S = 0; S < l - 1; S += 1) {
                            var $ = 0;
                            u.isDark(_, S) && ($ += 1), u.isDark(_ + 1, S) && ($ += 1), u.isDark(_, S + 1) && ($ += 1), u.isDark(_ + 1, S + 1) && ($ += 1), ($ == 0 || $ == 4) && (x += 3)
                        }
                    for (var _ = 0; _ < l; _ += 1)
                        for (var S = 0; S < l - 6; S += 1) u.isDark(_, S) && !u.isDark(_, S + 1) && u.isDark(_, S + 2) && u.isDark(_, S + 3) && u.isDark(_, S + 4) && !u.isDark(_, S + 5) && u.isDark(_, S + 6) && (x += 40);
                    for (var S = 0; S < l; S += 1)
                        for (var _ = 0; _ < l - 6; _ += 1) u.isDark(_, S) && !u.isDark(_ + 1, S) && u.isDark(_ + 2, S) && u.isDark(_ + 3, S) && u.isDark(_ + 4, S) && !u.isDark(_ + 5, S) && u.isDark(_ + 6, S) && (x += 40);
                    for (var lt = 0, S = 0; S < l; S += 1)
                        for (var _ = 0; _ < l; _ += 1) u.isDark(_, S) && (lt += 1);
                    var gt = Math.abs(100 * lt / l / l - 50) / 5;
                    return x += gt * 10, x
                }, f
            }(),
            c = function() {
                for (var v = new Array(256), I = new Array(256), b = 0; b < 8; b += 1) v[b] = 1 << b;
                for (var b = 8; b < 256; b += 1) v[b] = v[b - 4] ^ v[b - 5] ^ v[b - 6] ^ v[b - 8];
                for (var b = 0; b < 255; b += 1) I[v[b]] = b;
                var k = {};
                return k.glog = function(f) {
                    if (f < 1) throw "glog(" + f + ")";
                    return I[f]
                }, k.gexp = function(f) {
                    for (; f < 0;) f += 255;
                    for (; f >= 256;) f -= 255;
                    return v[f]
                }, k
            }();

        function C(v, I) {
            if (typeof v.length > "u") throw v.length + "/" + I;
            var b = function() {
                    for (var f = 0; f < v.length && v[f] == 0;) f += 1;
                    for (var p = new Array(v.length - f + I), u = 0; u < v.length - f; u += 1) p[u] = v[u + f];
                    return p
                }(),
                k = {};
            return k.getAt = function(f) {
                return b[f]
            }, k.getLength = function() {
                return b.length
            }, k.multiply = function(f) {
                for (var p = new Array(k.getLength() + f.getLength() - 1), u = 0; u < k.getLength(); u += 1)
                    for (var l = 0; l < f.getLength(); l += 1) p[u + l] ^= c.gexp(c.glog(k.getAt(u)) + c.glog(f.getAt(l)));
                return C(p, 0)
            }, k.mod = function(f) {
                if (k.getLength() - f.getLength() < 0) return k;
                for (var p = c.glog(k.getAt(0)) - c.glog(f.getAt(0)), u = new Array(k.getLength()), l = 0; l < k.getLength(); l += 1) u[l] = k.getAt(l);
                for (var l = 0; l < f.getLength(); l += 1) u[l] ^= c.gexp(c.glog(f.getAt(l)) + p);
                return C(u, 0).mod(f)
            }, k
        }
        var m = function() {
                var v = [
                        [1, 26, 19],
                        [1, 26, 16],
                        [1, 26, 13],
                        [1, 26, 9],
                        [1, 44, 34],
                        [1, 44, 28],
                        [1, 44, 22],
                        [1, 44, 16],
                        [1, 70, 55],
                        [1, 70, 44],
                        [2, 35, 17],
                        [2, 35, 13],
                        [1, 100, 80],
                        [2, 50, 32],
                        [2, 50, 24],
                        [4, 25, 9],
                        [1, 134, 108],
                        [2, 67, 43],
                        [2, 33, 15, 2, 34, 16],
                        [2, 33, 11, 2, 34, 12],
                        [2, 86, 68],
                        [4, 43, 27],
                        [4, 43, 19],
                        [4, 43, 15],
                        [2, 98, 78],
                        [4, 49, 31],
                        [2, 32, 14, 4, 33, 15],
                        [4, 39, 13, 1, 40, 14],
                        [2, 121, 97],
                        [2, 60, 38, 2, 61, 39],
                        [4, 40, 18, 2, 41, 19],
                        [4, 40, 14, 2, 41, 15],
                        [2, 146, 116],
                        [3, 58, 36, 2, 59, 37],
                        [4, 36, 16, 4, 37, 17],
                        [4, 36, 12, 4, 37, 13],
                        [2, 86, 68, 2, 87, 69],
                        [4, 69, 43, 1, 70, 44],
                        [6, 43, 19, 2, 44, 20],
                        [6, 43, 15, 2, 44, 16],
                        [4, 101, 81],
                        [1, 80, 50, 4, 81, 51],
                        [4, 50, 22, 4, 51, 23],
                        [3, 36, 12, 8, 37, 13],
                        [2, 116, 92, 2, 117, 93],
                        [6, 58, 36, 2, 59, 37],
                        [4, 46, 20, 6, 47, 21],
                        [7, 42, 14, 4, 43, 15],
                        [4, 133, 107],
                        [8, 59, 37, 1, 60, 38],
                        [8, 44, 20, 4, 45, 21],
                        [12, 33, 11, 4, 34, 12],
                        [3, 145, 115, 1, 146, 116],
                        [4, 64, 40, 5, 65, 41],
                        [11, 36, 16, 5, 37, 17],
                        [11, 36, 12, 5, 37, 13],
                        [5, 109, 87, 1, 110, 88],
                        [5, 65, 41, 5, 66, 42],
                        [5, 54, 24, 7, 55, 25],
                        [11, 36, 12, 7, 37, 13],
                        [5, 122, 98, 1, 123, 99],
                        [7, 73, 45, 3, 74, 46],
                        [15, 43, 19, 2, 44, 20],
                        [3, 45, 15, 13, 46, 16],
                        [1, 135, 107, 5, 136, 108],
                        [10, 74, 46, 1, 75, 47],
                        [1, 50, 22, 15, 51, 23],
                        [2, 42, 14, 17, 43, 15],
                        [5, 150, 120, 1, 151, 121],
                        [9, 69, 43, 4, 70, 44],
                        [17, 50, 22, 1, 51, 23],
                        [2, 42, 14, 19, 43, 15],
                        [3, 141, 113, 4, 142, 114],
                        [3, 70, 44, 11, 71, 45],
                        [17, 47, 21, 4, 48, 22],
                        [9, 39, 13, 16, 40, 14],
                        [3, 135, 107, 5, 136, 108],
                        [3, 67, 41, 13, 68, 42],
                        [15, 54, 24, 5, 55, 25],
                        [15, 43, 15, 10, 44, 16],
                        [4, 144, 116, 4, 145, 117],
                        [17, 68, 42],
                        [17, 50, 22, 6, 51, 23],
                        [19, 46, 16, 6, 47, 17],
                        [2, 139, 111, 7, 140, 112],
                        [17, 74, 46],
                        [7, 54, 24, 16, 55, 25],
                        [34, 37, 13],
                        [4, 151, 121, 5, 152, 122],
                        [4, 75, 47, 14, 76, 48],
                        [11, 54, 24, 14, 55, 25],
                        [16, 45, 15, 14, 46, 16],
                        [6, 147, 117, 4, 148, 118],
                        [6, 73, 45, 14, 74, 46],
                        [11, 54, 24, 16, 55, 25],
                        [30, 46, 16, 2, 47, 17],
                        [8, 132, 106, 4, 133, 107],
                        [8, 75, 47, 13, 76, 48],
                        [7, 54, 24, 22, 55, 25],
                        [22, 45, 15, 13, 46, 16],
                        [10, 142, 114, 2, 143, 115],
                        [19, 74, 46, 4, 75, 47],
                        [28, 50, 22, 6, 51, 23],
                        [33, 46, 16, 4, 47, 17],
                        [8, 152, 122, 4, 153, 123],
                        [22, 73, 45, 3, 74, 46],
                        [8, 53, 23, 26, 54, 24],
                        [12, 45, 15, 28, 46, 16],
                        [3, 147, 117, 10, 148, 118],
                        [3, 73, 45, 23, 74, 46],
                        [4, 54, 24, 31, 55, 25],
                        [11, 45, 15, 31, 46, 16],
                        [7, 146, 116, 7, 147, 117],
                        [21, 73, 45, 7, 74, 46],
                        [1, 53, 23, 37, 54, 24],
                        [19, 45, 15, 26, 46, 16],
                        [5, 145, 115, 10, 146, 116],
                        [19, 75, 47, 10, 76, 48],
                        [15, 54, 24, 25, 55, 25],
                        [23, 45, 15, 25, 46, 16],
                        [13, 145, 115, 3, 146, 116],
                        [2, 74, 46, 29, 75, 47],
                        [42, 54, 24, 1, 55, 25],
                        [23, 45, 15, 28, 46, 16],
                        [17, 145, 115],
                        [10, 74, 46, 23, 75, 47],
                        [10, 54, 24, 35, 55, 25],
                        [19, 45, 15, 35, 46, 16],
                        [17, 145, 115, 1, 146, 116],
                        [14, 74, 46, 21, 75, 47],
                        [29, 54, 24, 19, 55, 25],
                        [11, 45, 15, 46, 46, 16],
                        [13, 145, 115, 6, 146, 116],
                        [14, 74, 46, 23, 75, 47],
                        [44, 54, 24, 7, 55, 25],
                        [59, 46, 16, 1, 47, 17],
                        [12, 151, 121, 7, 152, 122],
                        [12, 75, 47, 26, 76, 48],
                        [39, 54, 24, 14, 55, 25],
                        [22, 45, 15, 41, 46, 16],
                        [6, 151, 121, 14, 152, 122],
                        [6, 75, 47, 34, 76, 48],
                        [46, 54, 24, 10, 55, 25],
                        [2, 45, 15, 64, 46, 16],
                        [17, 152, 122, 4, 153, 123],
                        [29, 74, 46, 14, 75, 47],
                        [49, 54, 24, 10, 55, 25],
                        [24, 45, 15, 46, 46, 16],
                        [4, 152, 122, 18, 153, 123],
                        [13, 74, 46, 32, 75, 47],
                        [48, 54, 24, 14, 55, 25],
                        [42, 45, 15, 32, 46, 16],
                        [20, 147, 117, 4, 148, 118],
                        [40, 75, 47, 7, 76, 48],
                        [43, 54, 24, 22, 55, 25],
                        [10, 45, 15, 67, 46, 16],
                        [19, 148, 118, 6, 149, 119],
                        [18, 75, 47, 31, 76, 48],
                        [34, 54, 24, 34, 55, 25],
                        [20, 45, 15, 61, 46, 16]
                    ],
                    I = function(f, p) {
                        var u = {};
                        return u.totalCount = f, u.dataCount = p, u
                    },
                    b = {},
                    k = function(f, p) {
                        switch (p) {
                            case i.L:
                                return v[(f - 1) * 4 + 0];
                            case i.M:
                                return v[(f - 1) * 4 + 1];
                            case i.Q:
                                return v[(f - 1) * 4 + 2];
                            case i.H:
                                return v[(f - 1) * 4 + 3];
                            default:
                                return
                        }
                    };
                return b.getRSBlocks = function(f, p) {
                    var u = k(f, p);
                    if (typeof u > "u") throw "bad rs block @ typeNumber:" + f + "/errorCorrectionLevel:" + p;
                    for (var l = u.length / 3, x = [], _ = 0; _ < l; _ += 1)
                        for (var S = u[_ * 3 + 0], T = u[_ * 3 + 1], P = u[_ * 3 + 2], q = 0; q < S; q += 1) x.push(I(T, P));
                    return x
                }, b
            }(),
            d = function() {
                var v = [],
                    I = 0,
                    b = {};
                return b.getBuffer = function() {
                    return v
                }, b.getAt = function(k) {
                    var f = Math.floor(k / 8);
                    return (v[f] >>> 7 - k % 8 & 1) == 1
                }, b.put = function(k, f) {
                    for (var p = 0; p < f; p += 1) b.putBit((k >>> f - p - 1 & 1) == 1)
                }, b.getLengthInBits = function() {
                    return I
                }, b.putBit = function(k) {
                    var f = Math.floor(I / 8);
                    v.length <= f && v.push(0), k && (v[f] |= 128 >>> I % 8), I += 1
                }, b
            },
            D = function(v) {
                var I = r.MODE_NUMBER,
                    b = v,
                    k = {};
                k.getMode = function() {
                    return I
                }, k.getLength = function(u) {
                    return b.length
                }, k.write = function(u) {
                    for (var l = b, x = 0; x + 2 < l.length;) u.put(f(l.substring(x, x + 3)), 10), x += 3;
                    x < l.length && (l.length - x == 1 ? u.put(f(l.substring(x, x + 1)), 4) : l.length - x == 2 && u.put(f(l.substring(x, x + 2)), 7))
                };
                var f = function(u) {
                        for (var l = 0, x = 0; x < u.length; x += 1) l = l * 10 + p(u.charAt(x));
                        return l
                    },
                    p = function(u) {
                        if ("0" <= u && u <= "9") return u.charCodeAt(0) - "0".charCodeAt(0);
                        throw "illegal char :" + u
                    };
                return k
            },
            B = function(v) {
                var I = r.MODE_ALPHA_NUM,
                    b = v,
                    k = {};
                k.getMode = function() {
                    return I
                }, k.getLength = function(p) {
                    return b.length
                }, k.write = function(p) {
                    for (var u = b, l = 0; l + 1 < u.length;) p.put(f(u.charAt(l)) * 45 + f(u.charAt(l + 1)), 11), l += 2;
                    l < u.length && p.put(f(u.charAt(l)), 6)
                };
                var f = function(p) {
                    if ("0" <= p && p <= "9") return p.charCodeAt(0) - "0".charCodeAt(0);
                    if ("A" <= p && p <= "Z") return p.charCodeAt(0) - "A".charCodeAt(0) + 10;
                    switch (p) {
                        case " ":
                            return 36;
                        case "$":
                            return 37;
                        case "%":
                            return 38;
                        case "*":
                            return 39;
                        case "+":
                            return 40;
                        case "-":
                            return 41;
                        case ".":
                            return 42;
                        case "/":
                            return 43;
                        case ":":
                            return 44;
                        default:
                            throw "illegal char :" + p
                    }
                };
                return k
            },
            z = function(v) {
                var I = r.MODE_8BIT_BYTE,
                    b = o.stringToBytes(v),
                    k = {};
                return k.getMode = function() {
                    return I
                }, k.getLength = function(f) {
                    return b.length
                }, k.write = function(f) {
                    for (var p = 0; p < b.length; p += 1) f.put(b[p], 8)
                }, k
            },
            G = function(v) {
                var I = r.MODE_KANJI,
                    b = o.stringToBytesFuncs.SJIS;
                if (!b) throw "sjis not supported.";
                (function(p, u) {
                    var l = b(p);
                    if (l.length != 2 || (l[0] << 8 | l[1]) != u) throw "sjis not supported."
                })("友", 38726);
                var k = b(v),
                    f = {};
                return f.getMode = function() {
                    return I
                }, f.getLength = function(p) {
                    return ~~(k.length / 2)
                }, f.write = function(p) {
                    for (var u = k, l = 0; l + 1 < u.length;) {
                        var x = (255 & u[l]) << 8 | 255 & u[l + 1];
                        if (33088 <= x && x <= 40956) x -= 33088;
                        else if (57408 <= x && x <= 60351) x -= 49472;
                        else throw "illegal char at " + (l + 1) + "/" + x;
                        x = (x >>> 8 & 255) * 192 + (x & 255), p.put(x, 13), l += 2
                    }
                    if (l < u.length) throw "illegal char at " + (l + 1)
                }, f
            },
            X = function() {
                var v = [],
                    I = {};
                return I.writeByte = function(b) {
                    v.push(b & 255)
                }, I.writeShort = function(b) {
                    I.writeByte(b), I.writeByte(b >>> 8)
                }, I.writeBytes = function(b, k, f) {
                    k = k || 0, f = f || b.length;
                    for (var p = 0; p < f; p += 1) I.writeByte(b[p + k])
                }, I.writeString = function(b) {
                    for (var k = 0; k < b.length; k += 1) I.writeByte(b.charCodeAt(k))
                }, I.toByteArray = function() {
                    return v
                }, I.toString = function() {
                    var b = "";
                    b += "[";
                    for (var k = 0; k < v.length; k += 1) k > 0 && (b += ","), b += v[k];
                    return b += "]", b
                }, I
            },
            W = function() {
                var v = 0,
                    I = 0,
                    b = 0,
                    k = "",
                    f = {},
                    p = function(l) {
                        k += String.fromCharCode(u(l & 63))
                    },
                    u = function(l) {
                        if (!(l < 0)) {
                            if (l < 26) return 65 + l;
                            if (l < 52) return 97 + (l - 26);
                            if (l < 62) return 48 + (l - 52);
                            if (l == 62) return 43;
                            if (l == 63) return 47
                        }
                        throw "n:" + l
                    };
                return f.writeByte = function(l) {
                    for (v = v << 8 | l & 255, I += 8, b += 1; I >= 6;) p(v >>> I - 6), I -= 6
                }, f.flush = function() {
                    if (I > 0 && (p(v << 6 - I), v = 0, I = 0), b % 3 != 0)
                        for (var l = 3 - b % 3, x = 0; x < l; x += 1) k += "="
                }, f.toString = function() {
                    return k
                }, f
            },
            A = function(v) {
                var I = v,
                    b = 0,
                    k = 0,
                    f = 0,
                    p = {};
                p.read = function() {
                    for (; f < 8;) {
                        if (b >= I.length) {
                            if (f == 0) return -1;
                            throw "unexpected end of file./" + f
                        }
                        var l = I.charAt(b);
                        if (b += 1, l == "=") return f = 0, -1;
                        l.match(/^\s$/) || (k = k << 6 | u(l.charCodeAt(0)), f += 6)
                    }
                    var x = k >>> f - 8 & 255;
                    return f -= 8, x
                };
                var u = function(l) {
                    if (65 <= l && l <= 90) return l - 65;
                    if (97 <= l && l <= 122) return l - 97 + 26;
                    if (48 <= l && l <= 57) return l - 48 + 52;
                    if (l == 43) return 62;
                    if (l == 47) return 63;
                    throw "c:" + l
                };
                return p
            },
            L = function(v, I) {
                var b = v,
                    k = I,
                    f = new Array(v * I),
                    p = {};
                p.setPixel = function(_, S, T) {
                    f[S * b + _] = T
                }, p.write = function(_) {
                    _.writeString("GIF87a"), _.writeShort(b), _.writeShort(k), _.writeByte(128), _.writeByte(0), _.writeByte(0), _.writeByte(0), _.writeByte(0), _.writeByte(0), _.writeByte(255), _.writeByte(255), _.writeByte(255), _.writeString(","), _.writeShort(0), _.writeShort(0), _.writeShort(b), _.writeShort(k), _.writeByte(0);
                    var S = 2,
                        T = l(S);
                    _.writeByte(S);
                    for (var P = 0; T.length - P > 255;) _.writeByte(255), _.writeBytes(T, P, 255), P += 255;
                    _.writeByte(T.length - P), _.writeBytes(T, P, T.length - P), _.writeByte(0), _.writeString(";")
                };
                var u = function(_) {
                        var S = _,
                            T = 0,
                            P = 0,
                            q = {};
                        return q.write = function(H, $) {
                            if (H >>> $) throw "length over";
                            for (; T + $ >= 8;) S.writeByte(255 & (H << T | P)), $ -= 8 - T, H >>>= 8 - T, P = 0, T = 0;
                            P = H << T | P, T = T + $
                        }, q.flush = function() {
                            T > 0 && S.writeByte(P)
                        }, q
                    },
                    l = function(_) {
                        for (var S = 1 << _, T = (1 << _) + 1, P = _ + 1, q = x(), H = 0; H < S; H += 1) q.add(String.fromCharCode(H));
                        q.add(String.fromCharCode(S)), q.add(String.fromCharCode(T));
                        var $ = X(),
                            lt = u($);
                        lt.write(S, P);
                        var gt = 0,
                            Ct = String.fromCharCode(f[gt]);
                        for (gt += 1; gt < f.length;) {
                            var Et = String.fromCharCode(f[gt]);
                            gt += 1, q.contains(Ct + Et) ? Ct = Ct + Et : (lt.write(q.indexOf(Ct), P), q.size() < 4095 && (q.size() == 1 << P && (P += 1), q.add(Ct + Et)), Ct = Et)
                        }
                        return lt.write(q.indexOf(Ct), P), lt.write(T, P), lt.flush(), $.toByteArray()
                    },
                    x = function() {
                        var _ = {},
                            S = 0,
                            T = {};
                        return T.add = function(P) {
                            if (T.contains(P)) throw "dup key:" + P;
                            _[P] = S, S += 1
                        }, T.size = function() {
                            return S
                        }, T.indexOf = function(P) {
                            return _[P]
                        }, T.contains = function(P) {
                            return typeof _[P] < "u"
                        }, T
                    };
                return p
            },
            K = function(v, I, b) {
                for (var k = L(v, I), f = 0; f < I; f += 1)
                    for (var p = 0; p < v; p += 1) k.setPixel(p, f, b(p, f));
                var u = X();
                k.write(u);
                for (var l = W(), x = u.toByteArray(), _ = 0; _ < x.length; _ += 1) l.writeByte(x[_]);
                return l.flush(), "data:image/gif;base64," + l
            };
        return o
    }();
    (function() {
        n.stringToBytesFuncs["UTF-8"] = function(o) {
            function r(i) {
                for (var s = [], a = 0; a < i.length; a++) {
                    var c = i.charCodeAt(a);
                    c < 128 ? s.push(c) : c < 2048 ? s.push(192 | c >> 6, 128 | c & 63) : c < 55296 || c >= 57344 ? s.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63) : (a++, c = 65536 + ((c & 1023) << 10 | i.charCodeAt(a) & 1023), s.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63))
                }
                return s
            }
            return r(o)
        }
    })(),
    function(o) {
        t.exports = o()
    }(function() {
        return n
    })
})(Br);
var Ki = Br.exports;
const Zi = Xi(Ki);
class _n {
    constructor(e) {
        ot(this, "_options"), ot(this, "_container"), ot(this, "_canvas"), ot(this, "_qr"), ot(this, "_drawingPromise"), this._options = e ? jn(Ne(Un, e)) : Un, this.update()
    }
    static _clearContainer(e) {
        e && (e.innerHTML = "")
    }
    update(e) {
        _n._clearContainer(this._container), this._options = e ? jn(Ne(this._options, e)) : this._options, this._options.data && (this._qr = Zi(this._options.qrOptions.typeNumber, this._options.qrOptions.errorCorrectionLevel), this._qr.addData(this._options.data, this._options.qrOptions.mode || Vi(this._options.data)), this._qr.make(), this._canvas = new Wi(this._options), this._drawingPromise = this._canvas.drawQR(this._qr), this.append(this._container))
    }
    append(e) {
        if (e) {
            if (typeof e.appendChild != "function") throw "Container should be a single DOM node";
            this._canvas && e.appendChild(this._canvas.getCanvas()), this._container = e
        }
    }
    async getImageUrl(e) {
        return this._drawingPromise && await this._drawingPromise === void 0 && this._canvas ? this._canvas.getCanvas().toDataURL(`image/${e}`) : ""
    }
    download(e) {
        this._drawingPromise && this._drawingPromise.then(() => {
            if (!this._canvas) return;
            const n = e,
                o = n.extension || "png",
                r = n.name || "qr",
                i = this._canvas.getCanvas().toDataURL(`image/${o}`);
            Ui(i, `${r}.${o}`)
        })
    }
}
const $i = ["src"],
    ts = {
        key: 1
    },
    es = vr({
        __name: "QRCodeVue3Async",
        props: {
            value: {
                default: ""
            },
            width: {
                default: 300
            },
            height: {
                default: 300
            },
            margin: {
                default: 0
            },
            imgclass: {
                default: ""
            },
            myclass: {
                default: ""
            },
            downloadButton: {
                default: ""
            },
            buttonName: {
                default: "Download"
            },
            qrOptions: {
                default: {
                    typeNumber: 0,
                    mode: "Byte",
                    errorCorrectionLevel: "Q"
                }
            },
            imageOptions: {
                default: {
                    hideBackgroundDots: !0,
                    imageSize: .4,
                    margin: 0
                }
            },
            dotsOptions: {
                default: {
                    type: "dots",
                    color: "#6a1a4c",
                    gradient: {
                        type: "linear",
                        rotation: 0,
                        colorStops: [{
                            offset: 0,
                            color: "#6a1a4c"
                        }, {
                            offset: 1,
                            color: "#6a1a4c"
                        }]
                    }
                }
            },
            backgroundOptions: {
                default: {
                    color: "#ffffff"
                }
            },
            cornersSquareOptions: {
                default: {
                    type: "dot",
                    color: "#000000"
                }
            },
            cornersDotOptions: {
                default: {
                    type: void 0,
                    color: "#000000"
                }
            },
            fileExt: {
                default: "png"
            },
            image: {
                default: ""
            },
            download: {
                type: Boolean,
                default: !1
            },
            downloadOptions: {
                default: {
                    name: "vqr",
                    extension: "png"
                }
            }
        },
        async setup(t) {
            let e, n;
            const o = t,
                r = new _n({
                    data: o.value,
                    width: o.width,
                    height: o.height,
                    margin: o.margin,
                    qrOptions: o.qrOptions,
                    imageOptions: o.imageOptions,
                    dotsOptions: o.dotsOptions,
                    backgroundOptions: o.backgroundOptions,
                    image: o.image,
                    cornersSquareOptions: o.cornersSquareOptions,
                    cornersDotOptions: o.cornersDotOptions
                });
            let i = ([e, n] = ii(() => r.getImageUrl(o.fileExt)), e = await e, n(), e);

            function s() {
                r.download(o.downloadOptions)
            }
            return (a, c) => (Kt(), Qe("div", null, [xe(i) ? (Kt(), Qe("div", {
                key: 0,
                class: Wt(a.myclass)
            }, [Oe("img", {
                src: xe(i),
                class: Wt(a.imgclass),
                crossorigin: "anonymous"
            }, null, 10, $i)], 2)) : zn("", !0), xe(i) && a.download ? (Kt(), Qe("div", ts, [Oe("button", {
                onClick: s,
                class: Wt(a.downloadButton)
            }, Kn(a.buttonName), 3)])) : zn("", !0)]))
        }
    }),
    ns = vr({
        __name: "QRCodeVue3",
        props: {
            value: {
                default: ""
            },
            width: {
                default: 300
            },
            height: {
                default: 300
            },
            margin: {
                default: 0
            },
            imgclass: {
                default: ""
            },
            myclass: {
                default: ""
            },
            downloadButton: {
                default: ""
            },
            buttonName: {
                default: "Download"
            },
            qrOptions: {
                default: {
                    typeNumber: 0,
                    mode: "Byte",
                    errorCorrectionLevel: "Q"
                }
            },
            imageOptions: {
                default: {
                    hideBackgroundDots: !0,
                    imageSize: .4,
                    margin: 0
                }
            },
            dotsOptions: {
                default: {
                    type: "dots",
                    color: "#6a1a4c",
                    gradient: {
                        type: "linear",
                        rotation: 0,
                        colorStops: [{
                            offset: 0,
                            color: "#6a1a4c"
                        }, {
                            offset: 1,
                            color: "#6a1a4c"
                        }]
                    }
                }
            },
            backgroundOptions: {
                default: {
                    color: "#ffffff"
                }
            },
            cornersSquareOptions: {
                default: {
                    type: "dot",
                    color: "#000000"
                }
            },
            cornersDotOptions: {
                default: {
                    type: void 0,
                    color: "#000000"
                }
            },
            fileExt: {
                default: "png"
            },
            image: {
                default: ""
            },
            download: {
                type: Boolean,
                default: !1
            },
            downloadOptions: {
                default: {
                    name: "vqr",
                    extension: "png"
                }
            }
        },
        setup(t) {
            const e = t;
            return (n, o) => (Kt(), Dr(xi, null, {
                default: Uo(() => [Bt(es, {
                    "background-options": e.backgroundOptions,
                    "button-name": e.buttonName,
                    "corners-dot-options": e.cornersDotOptions,
                    "corners-square-options": e.cornersSquareOptions,
                    "dots-options": e.dotsOptions,
                    download: e.download,
                    "download-button": e.downloadButton,
                    "download-options": e.downloadOptions,
                    "file-ext": e.fileExt,
                    height: e.height,
                    image: e.image,
                    "image-options": e.imageOptions,
                    imgclass: e.imgclass,
                    margin: e.margin,
                    value: e.value,
                    myclass: e.myclass,
                    "qr-options": e.qrOptions,
                    width: e.width
                }, null, 8, ["background-options", "button-name", "corners-dot-options", "corners-square-options", "dots-options", "download", "download-button", "download-options", "file-ext", "height", "image", "image-options", "imgclass", "margin", "value", "myclass", "qr-options", "width"])]),
                _: 1
            }))
        }
    });
const rs = console.log;
console.log = function() {
    arguments[0] !== "<Suspense> is an experimental feature and its API will likely change." && rs.apply(console, arguments)
};
const os = {
    name: "qrcode",
    components: {
        QRCodeVue3: ns
    },
    data() {
        return {
            margin: 0,
            qrOptions: {
                typeNumber: 16,
                mode: "Byte",
                errorCorrectionLevel: "Q"
            },
            imageOptions: {
                hideBackgroundDots: !0,
                imageSize: .4,
                margin: 5
            },
            dotsOptions: {
                type: "extra-rounded",
                color: "#6a1a4c",
                gradient: {
                    type: "linear",
                    rotation: 1.57,
                    colorStops: [{
                        offset: 0,
                        color: "#fc01d2"
                    }, {
                        offset: 1,
                        color: "#ff0113"
                    }]
                }
            },
            backgroundOptions: {
                color: "#ffffff"
            },
            image: jr,
            dotsOptionsHelper: {
                colorType: {
                    single: !0,
                    gradient: !1
                },
                gradient: {
                    linear: !0,
                    radial: !1,
                    color1: "#6a1a4c",
                    color2: "#6a1a4c",
                    rotation: "0"
                }
            },
            cornersSquareOptions: {
                type: "extra-rounded",
                color: "#5b1515",
                gradient: {
                    type: "linear",
                    rotation: 0,
                    colorStops: [{
                        offset: 0,
                        color: "#fc01d2"
                    }, {
                        offset: 1,
                        color: "#ff0113"
                    }]
                }
            },
            cornersSquareOptionsHelper: {
                colorType: {
                    single: !0,
                    gradient: !1
                },
                gradient: {
                    linear: !0,
                    radial: !1,
                    color1: "#000000",
                    color2: "#000000",
                    rotation: "0"
                }
            },
            cornersDotOptions: {
                type: "",
                color: "#fc01d2"
            },
            cornersDotOptionsHelper: {
                colorType: {
                    single: !0,
                    gradient: !1
                },
                gradient: {
                    linear: !0,
                    radial: !1,
                    color1: "#000000",
                    color2: "#000000",
                    rotation: "0"
                }
            },
            backgroundOptionsHelper: {
                colorType: {
                    single: !0,
                    gradient: !1
                },
                gradient: {
                    linear: !0,
                    radial: !1,
                    color1: "#ffffff",
                    color2: "#ffffff",
                    rotation: 0
                }
            }
        }
    },
    props: {
        qrCodeValue: String,
        key: String
    }
};

function is(t, e, n, o, r, i) {
    const s = ht("QRCodeVue3");
    return kt(), Qn("div", {
        key: n.qrCodeValue
    }, [Y(s, {
        margin: r.margin,
        width: 304,
        height: 304,
        value: n.qrCodeValue,
        qrOptions: r.qrOptions,
        imageOptions: r.imageOptions,
        dotsOptions: r.dotsOptions,
        backgroundOptions: r.backgroundOptions,
        image: r.image,
        cornersSquareOptions: r.cornersSquareOptions,
        cornersDotOptions: r.cornersDotOptions,
        imgclass: "imgclass"
    }, null, 8, ["margin", "value", "qrOptions", "imageOptions", "dotsOptions", "backgroundOptions", "image", "cornersSquareOptions", "cornersDotOptions"])])
}
const ss = Hn(os, [
    ["render", is]
]);
const as = {
        components: {
            ContainerTemplate: Rr,
            ProfileIcon: Lr,
            BaseInput: zr,
            LoaderSpinner: Ar,
            BaseButton: Fr,
            Logo: Ur,
            QrCode: ss,
            DropdownSearch: Jr,
            LoaderDots: Wr
        },
        name: "Checkout",
        data() {
            return {
                paymentType: "pix",
                deliverableId: null,
                publicTransactionId: null,
                facebookIntegrations: [],
                transactionForm: {
                    deliverableId: null,
                    buyerEmail: null,
                    buyerDocument: null,
                    buyerName: null,
                    country: "Brazil",
                    paymentType: 1,
                    creditCard: {
                        phone: "",
                        number: "",
                        cvv: "",
                        month: 0,
                        year: 0,
                        holderDocumentNumber: "",
                        holderName: ""
                    }
                },
                name: "",
                description: null,
                price: 0,
                coverImage: "",
                loaders: {
                    construct: !0,
                    transaction: !1,
                    checkingPaidStatus: !1
                },
                transactionData: {
                    transactionId: null,
                    pixUrl: null
                },
                show: {
                    qrcode: !1,
                    cardContent: !1
                },
                isPusherOpen: !1,
                showAlreadyPaidButton: !1,
                waitingPayment: !1,
                isPixelStarted: !1,
                monthsList: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                yearList: [],
                isCardAvailable: !1,
                isVerified: !1,
                requireBuyerDocument: !1
            }
        },
        mixins: [Er],
        methods: {
            formatPrice: Vr,
            getAssociatedUrl(t) {
                var e = {
                        core: "https://linkpriv.com/",
                        profile: "https://linkpriv.app/",
                        buyers: "https://app.linkpriv.com/"
                    },
                    n = {
                        core: "https://conteudinhos.com/",
                        profile: "https://conteudinhos.app/",
                        buyers: "https://app.conteudinhos.com/"
                    },
                    o = {
                        core: "https://d2gxm00730609y.cloudfront.net/",
                        profile: "https://d1zpytnsc31xfy.cloudfront.net/",
                        buyers: "https://d3tdmvhtizh7ch.cloudfront.net/"
                    };
                return t.toLowerCase().includes("linkpriv") ? e : t.toLowerCase().includes("conteudinho") ? n : o
            },
            construct() {
                this.loaders.construct = !0, Sn(this.$axios.get(`deliverables/${this.deliverableId}`).then(t => {
                    t.data.requireBuyerDocument && (this.requireBuyerDocument = t.data.requireBuyerDocument), this.isVerified = t.data.isVerified, this.isCardAvailable = t.data.isCardAvailable, this.coverImage = t.data.coverImage, this.name = t.data.name, this.description = t.data.description, this.price = t.data.price, this.facebookIntegrations = t.data.facebookIntegrations, this.startFacebookPixels()
                }).catch(t => {
                    console.log(t), this.$router.push("/404")
                }).finally(() => {
                    this.loaders.construct = !1
                }))
            },
            setCardYear(t) {
                this.transactionForm.creditCard.year = t.toString()
            },
            setCardMonth(t) {
                this.transactionForm.creditCard.month = t.toString().slice(-2)
            },
            refreshPage() {
                window.location.reload()
            },
            handleNewTransactionSubmit(t = !1) {
                this.checkValidation() && (this.transactionForm.paymentType = this.paymentType == "card" ? 0 : 1, this.loaders.transaction = !0, this.transactionForm.deliverableId = this.deliverableId, this.$axios.post("transactions", this.transactionForm).then(e => {
                    if (this.transactionData = e.data, this.show.qrcode = !0, this.publicTransactionId = this.transactionData.transactionId, this.getTransactionStatus(), e.data.payment == 0 && e.data.paymentLink) return window.location.href = e.data.paymentLink;
                    e.data.pixUrl && (this.show.cardContent = !1), this.$router.push(`/pay/${this.transactionData.transactionId}`)
                }).catch(e => {
                    console.log(e)
                }).finally(() => {
                    this.loaders.transaction = !1
                }))
            },
            getTransactionStatus(t = !0) {
                this.loaders.construct = !0, this.loaders.checkingPaidStatus = !0, Sn(this.$axios.get(`transactions/${this.publicTransactionId}/public-access`)).then(e => {
                    var n = null,
                        o = this.$route.query.isrenewing;
                    if (e.data.deliverable && e.data.deliverable.id) var n = e.data.deliverable.id;
                    else n = this.deliverableId;
                    if (this.facebookIntegrations = e.data.facebookIntegrations, this.price = e.data.price, this.isPixelStarted || this.startFacebookPixels(!1), window.localStorage && window.localStorage.getItem(`tr_${n}`) && !o) {
                        var r = JSON.parse(window.localStorage.getItem(`tr_${n}`));
                        if (r && r.transaction_id) return this.$router.push(`/access/${r.transaction_id}`)
                    }
                    var i = {
                        deliverable_id: n,
                        transaction_id: this.publicTransactionId
                    };
                    if (e.data.transactionStatus == 3)
                        if (window.localStorage.setItem(`tr_${e.data.deliverable.id}`, JSON.stringify(i)), o) {
                            var s = this.getAssociatedUrl(window.location.hostname);
                            return window.location.href = `${s.buyers}${e.data.deliverable.id}`
                        } else return window.location.href = `/access/${this.publicTransactionId}`;
                    if (e.data.transactionPayment == 0 && e.data.transactionPaymentLink) return window.location.href = e.data.transactionPaymentLink;
                    if (o || (history.pushState(null, null, location.href), window.onpopstate = function() {
                            history.go(1)
                        }), this.transactionData.transactionStatus = e.data.transactionStatus, this.transactionData.paymentType = e.data.transactionPayment, this.show.qrcode = !0, this.transactionData.transactionId = this.publicTransactionId, this.transactionData.pixUrl = e.data.qrCode, t) {
                        var a = new Pusher("e7ca876e3d365a9eec1f", {
                                cluster: "sa1"
                            }),
                            c = a.subscribe(this.publicTransactionId),
                            C = this;
                        c.bind("transaction-paid", function(m) {
                            if (C.fireFacebookPaidEvent(), window.localStorage.setItem(`tr_${n}`, JSON.stringify(i)), o) {
                                var d = C.getAssociatedUrl(window.location.hostname);
                                window.location.href = `${d.buyers}${e.data.deliverable.id}`
                            } else window.location.href = `/access/${C.publicTransactionId}`
                        })
                    }
                }).catch(e => {
                    console.log(e), this.$router.push("/404")
                }).finally(() => {
                    this.loaders.construct = !1, setTimeout(() => {
                        this.loaders.checkingPaidStatus = !1
                    }, 1e3)
                })
            },
            copyText(t) {
                navigator.clipboard && navigator.clipboard.writeText(t).then(() => {
                    this.waitingPayment = !0, Yr("success", "Link copiado com sucesso!")
                }), setTimeout(() => {
                    this.showAlreadyPaidButton = !0
                }, 3e3)
            },
            startFacebookPixels(t = !0) {
                for (var e of this.facebookIntegrations)(function(n, o, r, i, s, a, c) {
                    n.fbq || (s = n.fbq = function() {
                        s.callMethod ? s.callMethod.apply(s, arguments) : s.queue.push(arguments)
                    }, n._fbq || (n._fbq = s), s.push = s, s.loaded = !0, s.version = "2.0", s.queue = [], a = o.createElement(r), a.async = !0, a.src = i, c = o.getElementsByTagName(r)[0], c.parentNode.insertBefore(a, c))
                })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", e.pixelId), fbq("trackSingle", e.pixelId, "PageView"), e.hasInitiateCheckout && t && fbq("trackSingle", e.pixelId, "InitiateCheckout");
                this.isPixelStarted = !0
            },
            fireFacebookPaidEvent() {
                this.isPixelStarted || this.startFacebookPixels(!1);
                for (var t of this.facebookIntegrations) t.hasPurchase && fbq("trackSingle", t.pixelId, "Purchase", {
                    value: this.price,
                    currency: "BRL"
                })
            },
            getIpLocation() {
                this.$axios.get("https://yotmohfuxsn63kovsomw4wexbi0qcyqz.lambda-url.us-east-1.on.aws/ip-location").then(t => {
                    var e = t.data.country.replace(" ", "");
                    console.log(e), (e == "UnitedStates" || e == "Portugal" || e == "Mexico" || e == "India" || e == "Spain" || e == "Argentina" || e == "Colombia" || e == "France" || e == "Italy" || e == "UnitedKingdom") && (this.transactionForm.country = e)
                }).catch(t => !1)
            }
        },
        mounted() {
            for (let r = 0; r < 11; r++) this.yearList[r] = new Date().getFullYear() + r;
            this.deliverableId = this.$route.params.id, this.publicTransactionId = this.$route.params.publicId;
            var t = this.$route.query.isrenewing;
            this.deliverableId ? this.construct() : this.publicTransactionId && this.getTransactionStatus();
            var e = this.$route.query.name,
                n = this.$route.query.email;
            if (e && n && (this.transactionForm.buyerName = e, this.transactionForm.buyerEmail = n, this.transactionForm.tag = "Renew", this.handleNewTransactionSubmit()), window.localStorage && window.localStorage.getItem(`tr_${this.deliverableId}`) && !t) {
                var o = JSON.parse(window.localStorage.getItem(`tr_${this.deliverableId}`));
                if (o && o.transaction_id) return this.$router.push(`/access/${o.transaction_id}`)
            }
        }
    },
    ls = {
        class: "wrapperContainer"
    },
    cs = {
        class: "userWrapper"
    },
    us = {
        class: "userInfo"
    },
    ds = {
        class: "text-ellipsis"
    },
    fs = {
        class: "content-wrapper"
    },
    hs = {
        class: "amountValue"
    },
    ps = {
        style: {
            "text-align": "center",
            "margin-bottom": "8px"
        }
    },
    gs = {
        class: "form-card-wrapper"
    },
    ms = {
        class: "dropdown-wrapper"
    },
    vs = {
        id: "logo"
    };

function ys(t, e, n, o, r, i) {
    const s = ht("ProfileIcon"),
        a = ht("BaseInput"),
        c = ht("BaseButton"),
        C = ht("LoaderSpinner"),
        m = ht("container-template"),
        d = ht("QrCode"),
        D = ht("loader-spinner"),
        B = ht("base-button"),
        z = ht("DropdownSearch"),
        G = ht("LoaderDots"),
        X = ht("Logo"),
        W = Hr("mask");
    return kt(), Qn("div", ls, [Y(fe, {
        name: "slide-right"
    }, {
        default: nt(() => [!r.show.qrcode && !r.show.cardContent ? (kt(), Nt(m, {
            key: 0,
            class: "contentCenter",
            maxWidth: "492px"
        }, {
            default: nt(() => [U("div", cs, [Y(s, {
                size: "84px",
                border: !0,
                boxShadow: !0,
                borderColor: "#fff",
                borderRadius: "var(--border-radius-medium)",
                image: r.coverImage
            }, null, 8, ["image"]), U("div", us, [U("h2", ds, he(r.name ? ? "-"), 1), U("p", null, he(r.description ? ? " "), 1)])]), e[21] || (e[21] = U("h3", null, "Dados de acesso", -1)), U("form", {
                onSubmit: e[6] || (e[6] = Qr(A => i.handleNewTransactionSubmit(), ["prevent"]))
            }, [Y(a, {
                type: "text",
                name: "setName",
                ref: "setName",
                label: "Digite o seu nome",
                modelValue: r.transactionForm.buyerName,
                "onUpdate:modelValue": e[0] || (e[0] = A => r.transactionForm.buyerName = A),
                validations: [{
                    type: ["required"],
                    message: "Por favor, digite seu nome completo."
                }],
                inputmode: "text"
            }, null, 8, ["modelValue"]), r.requireBuyerDocument && r.transactionForm.country == "Brazil" ? bt((kt(), Nt(a, {
                key: 0,
                type: "tel",
                name: "document",
                ref: "document",
                label: "Digite seu CPF/CNPJ",
                modelValue: r.transactionForm.buyerDocument,
                "onUpdate:modelValue": e[1] || (e[1] = A => r.transactionForm.buyerDocument = A),
                validations: [{
                    type: ["required", "Document"],
                    message: "Por favor, digite seu CPF ou CNPJ."
                }],
                inputMode: "tel"
            }, null, 8, ["modelValue"])), [
                [W, ["###.###.###-##", "##.###.###/####-##"]]
            ]) : Ut("", !0), Y(a, {
                type: "email",
                name: "setEmail",
                ref: "setEmail",
                label: "Digite seu e-mail",
                modelValue: r.transactionForm.buyerEmail,
                "onUpdate:modelValue": e[2] || (e[2] = A => r.transactionForm.buyerEmail = A),
                validations: [{
                    type: ["required", "email"],
                    message: "Por favor, digite seu e-mail."
                }],
                inputMode: "email"
            }, null, 8, ["modelValue"]), U("div", fs, [bt(Y(c, {
                onClick: e[3] || (e[3] = A => r.paymentType = "pix"),
                typeButton: `smallButton  ${r.paymentType=="pix"?"":"default"}`
            }, {
                default: nt(() => [...e[16] || (e[16] = [U("span", {
                    class: "pix-icon"
                }, null, -1), it(" Pagar com PIX ", -1)])]),
                _: 1
            }, 8, ["typeButton"]), [
                [jt, r.isCardAvailable && r.isVerified && r.transactionForm.country == "Brazil" && r.price >= 6]
            ]), bt(Y(c, {
                onClick: e[4] || (e[4] = A => r.paymentType = "card"),
                typeButton: `smallButton  ${r.paymentType=="card"?"":"default"}`
            }, {
                default: nt(() => [...e[17] || (e[17] = [U("i", {
                    class: "bx bx-credit-card"
                }, null, -1), it(" Cartão de crédito ", -1)])]),
                _: 1
            }, 8, ["typeButton"]), [
                [jt, r.isCardAvailable && r.isVerified && r.transactionForm.country == "Brazil" && r.price >= 6]
            ]), U("span", hs, [e[18] || (e[18] = U("i", {
                class: "bx bx-dollar-circle"
            }, null, -1)), e[19] || (e[19] = U("span", {
                class: "spacing-icon"
            }, null, -1)), it(" " + he(i.formatPrice(r.price) ? ? "0,00"), 1)])]), Y(c, {
                type: "submit",
                onClick: e[5] || (e[5] = A => i.handleNewTransactionSubmit()),
                disabled: r.loaders.transaction,
                gapTop: "10px"
            }, {
                default: nt(() => [bt(Y(C, {
                    color: "white"
                }, null, 512), [
                    [jt, r.loaders.transaction]
                ]), e[20] || (e[20] = it(" Acessar Agora ", -1))]),
                _: 1
            }, 8, ["disabled"])], 32)]),
            _: 1
        })) : Ut("", !0)]),
        _: 1
    }), Y(fe, {
        name: "slide-left"
    }, {
        default: nt(() => [r.show.qrcode && !r.show.cardContent && r.transactionData.pixUrl ? (kt(), Nt(m, {
            key: 0,
            class: "contentCenter",
            maxWidth: "492px"
        }, {
            default: nt(() => [bt(U("h4", ps, [...e[22] || (e[22] = [it("Infelizmente, a transação no cartão não foi possível. ", -1), U("br", null, null, -1), it("mas você ainda pode finalizar o pagamento no Pix!", -1)])], 512), [
                [jt, r.transactionData.paymentType == 0]
            ]), e[24] || (e[24] = U("p", null, "Este código PIX será válido por 15 minutos", -1)), e[25] || (e[25] = U("p", null, " Não saia da página até a confirmação do pagamento. Após o pagamento verifique seu email. ", -1)), (kt(), Nt(d, {
                id: "qrCode",
                key: r.transactionData.pixUrl,
                qrCodeValue: r.transactionData.pixUrl
            }, null, 8, ["qrCodeValue"])), Y(B, {
                style: {
                    width: "100%"
                },
                onClick: e[7] || (e[7] = A => i.copyText(r.transactionData.pixUrl))
            }, {
                default: nt(() => [bt(Y(D, null, null, 512), [
                    [jt, r.waitingPayment]
                ]), it(" " + he(r.waitingPayment ? "Aguardando pagamento" : "Copiar"), 1)]),
                _: 1
            }), r.showAlreadyPaidButton ? (kt(), Nt(B, {
                key: 0,
                class: "fadeDown",
                disabled: r.loaders.checkingPaidStatus,
                style: {
                    width: "100%",
                    "margin-top": "10px"
                },
                onClick: e[8] || (e[8] = A => i.getTransactionStatus(!1))
            }, {
                default: nt(() => [...e[23] || (e[23] = [it(" Já fiz o pagamento ", -1)])]),
                _: 1
            }, 8, ["disabled"])) : Ut("", !0)]),
            _: 1
        })) : Ut("", !0)]),
        _: 1
    }), Y(fe, {
        name: "slide-left"
    }, {
        default: nt(() => [r.show.cardContent && !r.show.qrcode ? (kt(), Nt(m, {
            key: 0,
            class: "contentCenter",
            maxWidth: "492px"
        }, {
            default: nt(() => [U("h3", {
                onClick: e[9] || (e[9] = A => (r.show.cardContent = !1, r.show.qrcode = !1))
            }, [...e[26] || (e[26] = [U("i", {
                class: "bx bx-arrow-back"
            }, null, -1), it("Cartão de crédito ", -1)])]), U("div", gs, [Y(a, {
                type: "text",
                name: "setCardName",
                ref: "setCardName",
                label: "Nome no cartão",
                modelValue: r.transactionForm.creditCard.holderName,
                "onUpdate:modelValue": e[10] || (e[10] = A => r.transactionForm.creditCard.holderName = A),
                validations: [{
                    type: ["required"]
                }],
                inputmode: "text"
            }, null, 8, ["modelValue"]), bt(Y(a, {
                type: "text",
                name: "setCPF",
                ref: "setCPF",
                label: "Documento (CPF)",
                modelValue: r.transactionForm.creditCard.holderDocumentNumber,
                "onUpdate:modelValue": e[11] || (e[11] = A => r.transactionForm.creditCard.holderDocumentNumber = A),
                validations: [{
                    type: ["required", "CPF"]
                }]
            }, null, 8, ["modelValue"]), [
                [W, "###.###.###-##"]
            ]), bt(Y(a, {
                type: "text",
                name: "cardNumber",
                ref: "cardNumber",
                label: "Número do Cartão",
                modelValue: r.transactionForm.creditCard.number,
                "onUpdate:modelValue": e[12] || (e[12] = A => r.transactionForm.creditCard.number = A),
                validations: [{
                    type: ["required", "cardNumber"]
                }]
            }, null, 8, ["modelValue"]), [
                [W, "#### #### #### ####"]
            ]), U("div", ms, [Y(z, {
                onItemClicked: i.setCardMonth,
                "list-items": r.monthsList,
                "item-template": A => A,
                dropdownId: "expirationMonths",
                setLabel: "Mês",
                ref: "expirationMonths",
                validations: [{
                    type: ["required"]
                }]
            }, null, 8, ["onItemClicked", "list-items", "item-template"]), Y(z, {
                onItemClicked: i.setCardYear,
                "list-items": r.yearList,
                "item-template": A => `${A}`,
                dropdownId: "expirationYear",
                setLabel: "Ano",
                ref: "expirationYear",
                validations: [{
                    type: ["required"]
                }]
            }, null, 8, ["onItemClicked", "list-items", "item-template"]), bt(Y(a, {
                maxWidth: "100px",
                type: "text",
                name: "setCVV",
                ref: "setCVV",
                label: "CVV",
                modelValue: r.transactionForm.creditCard.cvv,
                "onUpdate:modelValue": e[13] || (e[13] = A => r.transactionForm.creditCard.cvv = A),
                validations: [{
                    type: ["required"]
                }]
            }, null, 8, ["modelValue"]), [
                [W, "###"]
            ])])]), Y(c, {
                style: {
                    width: "100%"
                },
                type: "submit",
                onClick: e[14] || (e[14] = A => i.handleNewTransactionSubmit(!0)),
                disabled: r.loaders.transaction,
                gapTop: "10px"
            }, {
                default: nt(() => [bt(Y(C, {
                    color: "white"
                }, null, 512), [
                    [jt, r.loaders.transaction]
                ]), e[27] || (e[27] = it(" Acessar Agora ", -1))]),
                _: 1
            }, 8, ["disabled"])]),
            _: 1
        })) : Ut("", !0)]),
        _: 1
    }), Y(fe, {
        name: "slide-left"
    }, {
        default: nt(() => [r.transactionData.paymentType == 0 && r.transactionData.transactionStatus == 5 && !r.transactionData.pixUrl ? (kt(), Nt(m, {
            key: 0,
            class: "contentCenter",
            maxWidth: "492px"
        }, {
            default: nt(() => [Y(G, {
                id: "paymentLoader",
                margin: "auto"
            }), e[29] || (e[29] = U("p", null, "Aguardando a confirmação do pagamento", -1)), e[30] || (e[30] = U("br", null, null, -1)), e[31] || (e[31] = U("br", null, null, -1)), Y(c, {
                style: {
                    width: "100%"
                },
                type: "submit",
                onClick: e[15] || (e[15] = A => i.handleNewTransactionSubmit(!0)),
                disabled: r.loaders.transaction,
                gapTop: "10px"
            }, {
                default: nt(() => [...e[28] || (e[28] = [it(" Já fiz o pagamento ", -1)])]),
                _: 1
            }, 8, ["disabled"])]),
            _: 1
        })) : Ut("", !0)]),
        _: 1
    }), U("div", vs, [Y(X), e[32] || (e[32] = U("p", {
        class: "termsMiniText"
    }, [it(" Ao continuar, você concorda com os "), U("a", {
        href: "/tos",
        target: "_blank"
    }, "Termos de Uso"), it(" e com a "), U("a", {
        href: "/pcr",
        target: "_blank"
    }, "Política de Chargeback e Reembolso"), it(". ")], -1))])])
}
const Ts = Hn(as, [
    ["render", ys],
    ["__scopeId", "data-v-5e76d85c"]
]);
export {
    Ts as
    default
};