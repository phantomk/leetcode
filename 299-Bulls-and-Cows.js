var getHint = function(secret, guess) {
  var s = secret.split(''), g = guess.split('');
  var arr = []
  var A = 0, B = 0;
  for (var i = 0; i < 10; i++) arr[i] = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === g[i]) {
      A++;
    } else {
      arr[s[i]]++;
      B += arr[s[i]] <= 0 ? 1 : 0;
      arr[g[i]]--;
      B += arr[g[i]] >= 0 ? 1 : 0;
    }
  }
  return A + 'A' + B + 'B';
};

console.log(getHint("1807", "0111"));
