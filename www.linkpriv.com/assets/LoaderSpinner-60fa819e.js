import {
    _ as d,
    o as r,
    c as p,
    e as c,
    t as m,
    H as l,
    n as u,
    d as _,
    C as i,
    S as f,
    f as h,
    w as S,
    U as y,
    i as B
} from "./index-d46d43cb.js";
const b = {
        name: "BaseButton",
        props: {
            gapTop: String,
            gapRight: String,
            gapBottom: String,
            gapLeft: String,
            borderRadius: String,
            fontSize: String,
            text: String,
            padding: String,
            width: String,
            type: {
                type: String,
                default: "button"
            },
            typeButton: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            clickHandle: {
                type: Function
            },
            redirect: {
                type: String,
                default: null
            }
        },
        methods: {
            setStyle() {
                return {
                    marginTop: this.gapTop,
                    marginRight: this.gapRight,
                    marginBottom: this.gapBottom,
                    marginLeft: this.gapLeft,
                    borderRadius: this.borderRadius,
                    fontSize: this.fontSize,
                    padding: this.padding,
                    width: this.width
                }
            }
        }
    },
    L = ["type", "disabled"];

function C(e, n, t, s, o, a) {
    return r(), p("button", {
        class: u(t.typeButton),
        style: _(a.setStyle()),
        type: t.type,
        disabled: t.disabled,
        onClick: n[0] || (n[0] = (...g) => t.clickHandle && t.clickHandle(...g))
    }, [c(m(t.text) + " ", 1), l(e.$slots, "default", {}, void 0, !0)], 14, L)
}
const k = d(b, [
        ["render", C],
        ["__scopeId", "data-v-e9dcd70f"]
    ]),
    R = {
        props: {
            padding: String,
            border: Boolean,
            setId: String,
            type: {
                type: String,
                default: "simple"
            }
        },
        data() {
            return {
                componentMap: {
                    card: () => i(() =>
                        import ("./ContainerCard-be097f66.js"), ["assets/ContainerCard-be097f66.js", "assets/index-d46d43cb.js", "assets/index-b89d1a2c.css", "assets/ContainerCard-cdac1015.css"]),
                    simple: () => i(() =>
                        import ("./ContainerSimple-9eecd826.js"), ["assets/ContainerSimple-9eecd826.js", "assets/index-d46d43cb.js", "assets/index-b89d1a2c.css", "assets/ContainerSimple-abe96331.css"]),
                    authForm: () => i(() =>
                        import ("./ContainerAuthForm-db9e0782.js"), ["assets/ContainerAuthForm-db9e0782.js", "assets/LinkButton-a4a550d1.js", "assets/index-d46d43cb.js", "assets/index-b89d1a2c.css", "assets/LinkButton-c35351ce.css", "assets/ContainerAuthForm-1e44a957.css"]),
                    amount: () => i(() =>
                        import ("./ContainerAmount-ec07c079.js").then(e => e.a), ["assets/ContainerAmount-ec07c079.js", "assets/formattings-2053e446.js", "assets/index-d46d43cb.js", "assets/index-b89d1a2c.css", "assets/ContainerAmount-b5eccf34.css"])
                },
                loadedComponent: null
            }
        },
        methods: {
            async loadComponent() {
                const e = this.componentMap[this.type];
                f(this.componentMap[this.type]), e && (this.loadedComponent = (await e()).default)
            }
        },
        mounted() {
            this.loadComponent()
        }
    };

function v(e, n, t, s, o, a) {
    return o.loadedComponent ? (r(), h(y({ ...o.loadedComponent
    }), {
        key: 0,
        id: t.setId,
        border: t.border,
        padding: t.padding
    }, {
        default: S(() => [l(e.$slots, "default")]),
        _: 3
    }, 8, ["id", "border", "padding"])) : B("", !0)
}
const I = d(R, [
    ["render", v]
]);
const x = {
    name: "LoaderSpinners",
    props: {
        gapTop: String,
        gapRight: String,
        gapBottom: String,
        gapLeft: String,
        fontSize: String
    },
    methods: {
        setStyle() {
            return {
                marginTop: this.gapTop,
                marginRight: this.gapRight,
                marginBottom: this.gapBottom,
                marginLeft: this.gapLeft,
                fontSize: this.gapLeft
            }
        }
    }
};

function T(e, n, t, s, o, a) {
    return r(), p("i", {
        style: _(a.setStyle()),
        class: "bx bx-spin bx-loader-circle"
    }, null, 4)
}
const w = d(x, [
    ["render", T],
    ["__scopeId", "data-v-5456cded"]
]);
export {
    k as B, I as C, w as L
};