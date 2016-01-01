/* solution: 1 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length === t.length) {
    return false;
  }
  var i = 0;
  for (i; i < t.length; i++) {
    if (s.indexOf(t.charAt(i)) === -1) {
      break;
    }
  }
  if (i === t.length) {
    return true;
  }else {
    return false;
  }
};
/* END: solution: 1 */

/* solution: 2 */
var isAnagram2 = function (s, t) {
  if (JSON.stringify(s.split('').sort()) ===JSON.stringify(t.split('').sort()) ) {
    return true;
  }else {
    return false;
  }
};
/* END: solution: 2 */

/* solution: 3 */
var isAnagram3 = function (s, t) {
  return s.split('').sort().toString() == t.split('').sort().toString();
};
/* END: solution: 3 */

if (isAnagram3("hahahdia", "diahahha")) {
  console.log('true');
}else {
  console.log('false');
}
