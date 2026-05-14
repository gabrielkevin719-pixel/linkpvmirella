import {
    _ as i,
    r as l,
    o as e,
    c as s,
    f as c,
    d as t
} from "./index-d46d43cb.js";
const n = {
        name: "Profile-icon",
        props: {
            image: String,
            size: {
                type: String,
                default: "38px"
            },
            border: Boolean,
            borderColor: String,
            online: Boolean,
            borderRadius: String,
            boxShadow: Boolean,
            lazyLoading: {
                type: Boolean,
                default: !0
            }
        },
        methods: {
            setStyle() {
                return {
                    width: this.size,
                    minWidth: this.size,
                    height: this.size,
                    border: this.border ? "2px solid #fff" : "",
                    borderColor: this.borderColor,
                    borderRadius: this.borderRadius,
                    boxShadow: this.boxShadow ? "0px 0px 11px -5px rgba(0,0,0, 0.5)" : ""
                }
            }
        }
    },
    d = {
        key: 1,
        class: "bx bxs-user bx-sm",
        style: {
            color: "var(--grey)"
        }
    },
    _ = ["src"],
    g = {
        key: 1,
        class: "bx bxs-user bx-sm",
        style: {
            color: "var(--grey)"
        }
    };

function y(m, b, o, h, x, r) {
    const a = l("ProgressiveImage");
    return o.lazyLoading ? (e(), s("div", {
        key: 0,
        style: t(r.setStyle()),
        class: "profileIcon"
    }, [o.image ? (e(), c(a, {
        key: 0,
        "lazy-placeholder": "",
        "object-cover": "",
        class: "contentImage",
        alt: "Foto de perfil",
        src: o.image
    }, null, 8, ["src"])) : (e(), s("i", d))], 4)) : (e(), s("div", {
        key: 1,
        style: t(r.setStyle()),
        class: "profileIcon"
    }, [o.image ? (e(), s("img", {
        key: 0,
        class: "contentImage",
        src: o.image,
        alt: "Foto do perfil"
    }, null, 8, _)) : (e(), s("i", g))], 4))
}
const p = i(n, [
    ["render", y],
    ["__scopeId", "data-v-1aca1000"]
]);
export {
    p as P
};