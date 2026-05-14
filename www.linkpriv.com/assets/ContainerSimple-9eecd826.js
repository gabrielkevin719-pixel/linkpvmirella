import {
    _ as a,
    o as n,
    c as r,
    H as d,
    d as o
} from "./index-d46d43cb.js";
const s = {
    name: "ContainerSimple",
    props: {
        padding: String,
        maxWidth: String,
        border: Boolean
    },
    methods: {
        setStyle() {
            return {
                padding: this.padding,
                maxWidth: this.maxWidth,
                border: this.border ? "1px solid var(--white-1)" : ""
            }
        }
    }
};

function i(e, l, p, _, c, t) {
    return n(), r("div", {
        style: o(t.setStyle()),
        class: "containerSimple"
    }, [d(e.$slots, "default", {}, void 0, !0)], 4)
}
const f = a(s, [
    ["render", i],
    ["__scopeId", "data-v-33a8fd3e"]
]);
export {
    f as
    default
};