import {
    l as s
} from "./linkpriv-logo-de3f7b5e.js";
import {
    _ as a,
    o as n,
    c as r,
    a as g,
    d as o,
    e as p
} from "./index-d46d43cb.js";
const l = {
    name: "logo",
    props: {
        size: {
            type: String,
            default: "24px"
        },
        gapTop: String,
        gapRight: String,
        gapBottom: String,
        gapLeft: String
    },
    methods: {
        setStyle() {
            return {
                marginTop: this.gapTop,
                marginRight: this.gapRight,
                marginBottom: this.gapBottom,
                marginLeft: this.gapLeft,
                fontSize: this.size
            }
        }
    }
};

function _(m, t, e, d, c, i) {
    return n(), r("h2", {
        style: o(i.setStyle())
    }, [g("img", {
        style: o({
            width: e.size,
            height: e.size
        }),
        src: s,
        alt: "LinkPriv"
    }, null, 4), t[0] || (t[0] = p("LinkPriv ", -1))], 4)
}
const u = a(l, [
    ["render", _],
    ["__scopeId", "data-v-1d7e9968"]
]);
export {
    u as L
};