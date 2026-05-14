import {
    v as f
} from "./validation-a50df0b1.js";
import {
    _ as g,
    o as r,
    c as o,
    a,
    g as u,
    N as h,
    t as m,
    b as I,
    w as v,
    i as p,
    F as w,
    j as y,
    T as V,
    n as L,
    v as T,
    d as S
} from "./index-d46d43cb.js";
const b = {
        name: "BaseInput",
        data() {
            return {
                dropdownOpen: !1,
                vmodel: "",
                filterValueItemList: "",
                itemName: ""
            }
        },
        mixins: [f],
        watch: {
            resetValue: {
                handler(e) {
                    this.vmodel = e
                },
                immediate: !0
            },
            vmodel: {
                handler(e) {
                    this.$emit("update:modelValue", e)
                },
                immediate: !0
            },
            listItems: {
                clearField() {
                    this.vmodel = ""
                }
            },
            setDisabled: {
                setDisabled(e) {
                    this.setDisabled = e
                }
            },
            isInvalid: {
                setisInvalid(e) {
                    this.isInvalid = e
                }
            }
        },
        props: {
            gapTop: String,
            gapRight: String,
            gapBottom: String,
            gapLeft: String,
            resetValue: String,
            searchItems: {
                type: Boolean,
                default: !0
            },
            listItems: {
                type: Array,
                required: !0
            },
            itemTemplate: {
                type: Function,
                default: e => e.name
            },
            itemName: String,
            dropdownId: {
                type: String,
                required: !0
            },
            required: Boolean,
            setLabel: String,
            setPlaceholder: String,
            allProducts: Boolean,
            setDisabled: Boolean,
            isInvalid: Boolean,
            defaultText: String,
            validations: Array,
            predefinedValue: Object
        },
        computed: {
            filteredItemList() {
                if (this.filterValueItemList.trim() == "") return this.listItems;
                const e = this.filterValueItemList.trim().toLowerCase();
                return this.listItems.filter(t => t.name.toLowerCase().includes(e))
            }
        },
        methods: {
            updateValue(e) {
                this.$emit("update:modelValue", e.target.value)
            },
            transformValidations(e) {
                return e && e.length > 0 ? e.map(t => (typeof t.type == "string" && (t.type = [t.type]), t)) : e
            },
            validateInput() {
                const e = this.transformValidations(this.validations);
                return this.errorMessage = this.validateField(e, this.itemName), !!this.errorMessage
            },
            statusList(e) {
                const t = this.getFormattedItem(e);
                document.getElementById(this.dropdownId).value = t, this.vmodel = t
            },
            closeDropdown(e) {
                const t = this.$el.querySelector(`#${this.dropdownId}`);
                t && !t.contains(e.target) && (this.dropdownOpen = !1)
            },
            getFormattedItem(e) {
                return this.itemTemplate(e)
            },
            onItemClick(e) {
                this.dropdownOpen = !this.dropdownOpen, this.statusList(e), this.itemName = e, this.$emit("item-clicked", e), this.validateInput()
            },
            handleFocus() {
                this.$emit("focus")
            },
            focus() {
                this.$refs.inputField.focus()
            },
            setStyle() {
                return {
                    marginTop: this.gapTop,
                    marginRight: this.gapRight,
                    marginBottom: this.gapBottom,
                    marginLeft: this.gapLeft
                }
            },
            bluActive() {
                this.$emit("blurActive", !1), this.validateInput()
            }
        },
        mounted() {
            document.addEventListener("click", this.closeDropdown), this.vmodel = this.defaultText, this.predefinedValue && (this.onItemClick(this.predefinedValue), this.dropdownOpen = !this.dropdownOpen)
        }
    },
    k = ["id"],
    _ = ["for"],
    B = ["id", "name", "disabled", "required"],
    F = {
        class: "label"
    },
    O = {
        key: 0,
        class: "dropdown-menu"
    },
    x = ["onClick", "innerHTML"];

function C(e, t, i, D, s, d) {
    return r(), o("div", {
        style: S(d.setStyle()),
        class: "dropdown-content"
    }, [a("div", {
        class: L([
            [s.dropdownOpen == !0 ? "open" : "", {
                "is-invalid": i.isInvalid
            }], "dropdownButton"
        ]),
        id: i.dropdownId
    }, [a("label", {
        class: "input",
        for: `id${i.dropdownId}`
    }, [u(a("input", {
        onClick: t[0] || (t[0] = n => s.dropdownOpen = !s.dropdownOpen),
        type: "text",
        onInput: t[1] || (t[1] = (...n) => d.updateValue && d.updateValue(...n)),
        "onUpdate:modelValue": t[2] || (t[2] = n => s.vmodel = n),
        id: `id${i.dropdownId}`,
        Placeholder: "",
        name: i.dropdownId,
        ref: "inputField",
        disabled: i.setDisabled,
        onBlur: t[3] || (t[3] = n => d.bluActive()),
        onFocus: t[4] || (t[4] = (...n) => d.handleFocus && d.handleFocus(...n)),
        required: i.required,
        readonly: ""
    }, null, 40, B), [
        [h, s.vmodel]
    ]), a("span", F, m(i.setLabel), 1)], 8, _), I(V, null, {
        default: v(() => {
            var n;
            return [s.dropdownOpen ? (r(), o("ul", O, [((n = i.listItems) == null ? void 0 : n.length) > 5 && i.searchItems ? u((r(), o("input", {
                key: 0,
                type: "text",
                "onUpdate:modelValue": t[5] || (t[5] = l => s.filterValueItemList = l)
            }, null, 512)), [
                [h, s.filterValueItemList]
            ]) : p("", !0), i.allProducts ? (r(), o("li", {
                key: 1,
                onClick: t[6] || (t[6] = l => {
                    s.dropdownOpen = !s.dropdownOpen, d.statusList({
                        name: i.defaultText ? ? "Todos os produtos",
                        id: null
                    }), e.$emit("item-clicked", {
                        index: null,
                        id: null,
                        name: i.defaultText ? ? "Todos os produtos"
                    })
                })
            }, m(i.defaultText ? ? "Todos os produtos"), 1)) : p("", !0), (r(!0), o(w, null, y(d.filteredItemList, (l, c) => (r(), o("li", {
                key: c,
                onClick: N => d.onItemClick(l),
                innerHTML: d.getFormattedItem(l)
            }, null, 8, x))), 128))])) : p("", !0)]
        }),
        _: 1
    })], 10, k), u(a("span", {
        class: "error-message"
    }, m(e.errorMessage), 513), [
        [T, e.errorMessage]
    ])], 4)
}
const A = g(b, [
    ["render", C],
    ["__scopeId", "data-v-72935751"]
]);
export {
    A as D
};