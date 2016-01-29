function ucfirst (str) {
  return str ? (str.charAt(0).toUpperCase() + str.slice(1)) : '';
}

function escapeHTML (unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

function escapeRegExp(string) {
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function getConcatationString(stra, strb) {
  for (var i = strb.length; i > 0; i--) {
    var end = strb.slice(0, i);
    if (stra.lastIndexOf(end) === stra.length - end.length) return end;
  }
  return '';
}

function merge(a, b, needle) {
  if (typeof needle === 'undefined') {
    needle = getConcatationString(a, b); // auto compute
  }
  var len = needle.length;
  var end_a = a.slice(-len);
  var start_b = b.slice(0, len);
  if (end_a === start_b) return a.slice(-len) + b;
  return a + b;
}

module.exports = {
  merge: merge,
  escapeHTML: escapeHTML,
  escapeRegExp: escapeRegExp,
  replaceAll: replaceAll,
  getConcatationString: getConcatationString
}
