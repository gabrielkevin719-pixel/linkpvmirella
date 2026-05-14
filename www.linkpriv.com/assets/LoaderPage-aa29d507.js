import {
    _ as s,
    o as t,
    c as r,
    d as _,
    L as l,
    f as i,
    w as p,
    a as u,
    i as m,
    T as f
} from "./index-d46d43cb.js";
import {
    l as g
} from "./linkpriv-logo-de3f7b5e.js";
const v = {
    name: "LoaderSpinners",
    props: {
        color: {
            type: String,
            default: "var(--primary-color)"
        }
    }
};

function $(e, a, o, n, d, c) {
    return t(), r("div", {
        style: _({
            "--color-spinner": o.color
        }),
        class: "loader"
    }, null, 4)
}
const L = s(v, [
    ["render", $],
    ["__scopeId", "data-v-345f5c36"]
]);
const y = {
        components: {
            LoaderSpinnerPage: L
        },
        data() {
            return {
                showLoader: !0
            }
        },
        name: "LoaderPage",
        watch: {
            "$store.state.saveStates.loaderPage" (e) {
                this.$store.state.saveStates.loaderPage = e, l.methods.handleOverflow(e)
            }
        }
    },
    P = {
        key: 0,
        id: "LoaderPage"
    };

function S(e, a, o, n, d, c) {
    return t(), i(f, {
        name: "loader-page"
    }, {
        default: p(() => [e.$store.state.saveStates.loaderPage ? (t(), r("div", P, [...a[0] || (a[0] = [u("img", {
            src: g
        }, null, -1)])])) : m("", !0)]),
        _: 1
    })
}
const b = s(y, [
    ["render", S],
    ["__scopeId", "data-v-2be1b15d"]
]);
export {
    b as L
};