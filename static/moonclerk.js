var mc9t452zz7z
;(function (d, t) {
  var s = d.createElement(t),
    opts = {
      checkoutToken: "9t452zz7z",
      width: "100%",
      host: "staging.moonclerk.com",
      ssl: true,
    }
  s.src = "https://d4m3xhfao1kky.cloudfront.net/assets/embed.js"
  s.onload = s.onreadystatechange = function () {
    var rs = this.readyState
    if (rs) if (rs != "complete") if (rs != "loaded") return
    try {
      mc9t452zz7z = new MoonclerkEmbed(opts)
      mc9t452zz7z.display()
    } catch (e) {}
  }
  var scr = d.getElementsByTagName(t)[0]
  scr.parentNode.insertBefore(s, scr)
})(document, "script")
