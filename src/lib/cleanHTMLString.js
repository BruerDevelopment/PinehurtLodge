module.exports = function CleanHTMLString(_in) {
    return _in.replaceAll("\n", "").replaceAll("\t", "").replaceAll("  ", "")
}