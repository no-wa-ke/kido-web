! function() {
    function a(a, b) {
        return a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"))
    }

    function b(b, c) {
        a(b, c) || (b.className += " " + c)
    }

    function c(b, c) {
        if (a(b, c)) {
            var d = new RegExp("(\\s|^)" + c + "(\\s|$)");
            b.className = b.className.replace(d, " ")
        }
    }

    function d(a, b) {
        for (var c = a.offsetTop, d = a.offsetLeft, e = a.offsetWidth, f = a.offsetHeight; a.offsetParent;) a = a.offsetParent, c += a.offsetTop, d += a.offsetLeft;
        return b && (c += f * b), c < window.pageYOffset + window.innerHeight && d < window.pageXOffset + window.innerWidth && c + f > window.pageYOffset && d + e > window.pageXOffset
    }

    function e(e, f) {
        f = f || document.querySelectorAll('iframe[src*="vine.co"]');
        for (var g = 0; g < f.length; g++) a(f[g], "pinged") && (d(f[g], .5) && !a(f[g], "mostly-in-view") && (b(f[g], "mostly-in-view"), f[g].contentWindow.postMessage("mostlyInView", "*")), d(f[g]) ? a(f[g], "in-view") || (b(f[g], "in-view"), f[g].contentWindow.postMessage("scrolledInToView", "*")) : (e || a(f[g], "in-view")) && (c(f[g], "in-view"), c(f[g], "mostly-in-view"), f[g].contentWindow.postMessage("scrolledOutOfView", "*")))
    }
    if (!window.VINE_EMBEDS) {
        window.VINE_EMBEDS = !0;
        var f = window.addEventListener ? "addEventListener" : "attachEvent",
            g = window[f],
            h = 0;
        window.setInterval(function() {
            e(h++ < 20)
        }, 100);
        var i = "attachEvent" === f ? "onmessage" : "message";
        g(i, function(a) {
            if (/(vine\.co|localhost|(127|0)\.0\.0\.\d)/.test(a.origin)) {
                var d, f, g = a.data.split("::");
                if (d = Array.prototype.slice.call(document.querySelectorAll("iframe"), 0).filter(function(b) {
                        return b.contentWindow === a.source
                    })[0])
                    if ("ping" === g[0]) b(d, "pinged"), c(d, "in-view"), c(d, "mostly-in-view"), e(!1, [d]), d.setAttribute("frameborder", 0), d.contentWindow.postMessage("pong", "*");
                    else if ("height" === g[0]) d.style.removeProperty ? d.style.removeProperty("height") : d.style.removeAttribute("height"), d.height = parseInt(g[2], 10);
                else if ("unmute" === g[0]) {
                    b(d, "unmuted");
                    var h = document.querySelectorAll("iframe.loaded");
                    for (f = 0; f < h.length; f++) h[f] !== d && (c(h[f], "unmuted"), h[f].contentWindow.postMessage("mute", "*"))
                } else "loaded" === g[0] && b(d, "loaded")
            }
        })
    }
}();
