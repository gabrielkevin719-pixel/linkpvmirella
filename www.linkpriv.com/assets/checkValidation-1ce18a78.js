import {
    v as m
} from "./validation-a50df0b1.js";
import {
    _ as g,
    o,
    c as r,
    a as l,
    t as d,
    n as p,
    g as h,
    v as f,
    H as c,
    i as y,
    d as v
} from "./index-d46d43cb.js";
const _ = {
        name: "BaseInput",
        data() {
            return {
                vision: !1,
                errorMessage: ""
            }
        },
        props: {
            maxWidth: String,
            type: String,
            label: String,
            gapTop: String,
            gapRight: String,
            gapBottom: String,
            gapLeft: String,
            name: String,
            autocomplete: String,
            modelValue: [String, Number],
            maxlength: [String, Number],
            inputMode: {
                type: [String, Number],
                default: "text"
            },
            validations: Array,
            disabled: Boolean
        },
        mixins: [m],
        methods: {
            updateValue(a) {
                this.$emit("update:modelValue", a.target.value)
            },
            transformValidations(a) {
                return a && a.length > 0 ? a.map(t => (typeof t.type == "string" && (t.type = [t.type]), t)) : a
            },
            validateInput() {
                const a = this.transformValidations(this.validations);
                return this.errorMessage = this.validateField(a, this.modelValue), !!this.errorMessage
            },
            setStyle() {
                return {
                    maxWidth: this.maxWidth,
                    marginTop: this.gapTop,
                    marginRight: this.gapRight,
                    marginBottom: this.gapBottom,
                    marginLeft: this.gapLeft
                }
            }
        }
    },
    S = ["for"],
    V = ["type", "inputmode", "value", "name", "autocomplete", "id", "maxlength", "disabled"],
    b = {
        class: "label"
    },
    B = ["for"],
    x = ["type", "inputmode", "value", "name", "id"],
    I = {
        class: "label"
    },
    k = {
        key: 2,
        style: {
            "margin-top": "0.25rem"
        }
    };

function M(a, t, e, u, s, n) {
    return o(), r("div", {
        style: v([n.setStyle(), {
            width: "100%"
        }])
    }, [e.label && e.type !== "password" ? (o(), r("label", {
        key: 0,
        class: "input",
        for: e.name
    }, [l("input", {
        type: e.type,
        placeholder: "",
        inputmode: e.inputMode,
        value: e.modelValue,
        name: e.name,
        autocomplete: e.autocomplete,
        id: e.name,
        onInput: t[0] || (t[0] = (...i) => n.updateValue && n.updateValue(...i)),
        onBlur: t[1] || (t[1] = i => n.validateInput()),
        maxlength: e.maxlength,
        disabled: e.disabled
    }, null, 40, V), l("span", b, d(e.label), 1)], 8, S)) : (o(), r("label", {
        key: 1,
        class: "input",
        for: e.name
    }, [l("input", {
        type: [s.vision ? "text" : "password"],
        placeholder: "",
        inputmode: e.inputMode,
        value: e.modelValue,
        name: e.name,
        id: e.name,
        onInput: t[2] || (t[2] = (...i) => n.updateValue && n.updateValue(...i)),
        onBlur: t[3] || (t[3] = i => n.validateInput())
    }, null, 40, x), l("span", I, d(e.label), 1), l("span", {
        onClick: t[4] || (t[4] = i => s.vision = !s.vision),
        class: p([s.vision ? "eye" : "eye-off"])
    }, null, 2)], 8, B)), h(l("span", {
        class: "error-message"
    }, d(s.errorMessage), 513), [
        [f, s.errorMessage]
    ]), a.$slots ? (o(), r("div", k, [c(a.$slots, "default", {}, void 0, !0)])) : y("", !0)], 4)
}
const C = g(_, [
        ["render", M],
        ["__scopeId", "data-v-8131d7c1"]
    ]),
    L = {
        methods: {
            checkValidation() {
                let a = !0;
                return Object.keys(this.$refs).forEach(t => {
                    var e;
                    ((e = this.$refs[t]) == null ? void 0 : e.$options.name) == "BaseInput" && this.$refs[t].validateInput() && (a = !1)
                }), a
            }
        }
    };
export {
    C as B, L as c
};