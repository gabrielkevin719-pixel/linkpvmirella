function u(t) {
    if (t) return t.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        currency: "BRL"
    })
}

function f(t, o) {
    if (!t) return "";
    const n = {
        BRL: "pt-BR",
        USD: "en-US",
        EUR: "fr-FR",
        GBP: "en-GB"
    }[o] || "pt-BR";
    let i, c;
    if (n == "en-US" || n == "en-GB" ? (i = ",", c = ".") : (i = ".", c = ","), typeof t == "number") return t.toLocaleString(n, {
        currency: o,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }); {
        const e = t.replace(/[^0-9]+/g, ""),
            r = e.length,
            s = r > 2 ? e.slice(r - 2) : e.padStart(2, "0"),
            a = (r > 2 ? e.slice(0, r - 2).replace(/^0+/, "") : "0").replace(/\B(?=(\d{3})+(?!\d))/g, i);
        return `${a==""?"0":a}${c}${s}`
    }
}

function g(t) {
    return typeof t == "string" ? parseFloat(t.replace(/[^\d,]/g, "").replace(",", ".")) : t
}
export {
    f as a, g as c, u as f
};