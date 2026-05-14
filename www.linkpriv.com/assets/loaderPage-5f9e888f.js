import {
    I as o
} from "./index-d46d43cb.js";
async function s(e) {
    o.commit("showLoaderPage", !0);
    try {
        return await e
    } finally {
        o.commit("showLoaderPage", !1)
    }
}
export {
    s as w
};