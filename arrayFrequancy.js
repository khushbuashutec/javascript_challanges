a = [1, 1, 1, 5, 5, 5, 5, 8, 8, 8, 8];
result = {};
for (var i = 0; i < a.length; ++i) {
  if (!result[a[i]]) result[a[i]] = 0;
  ++result[a[i]];
}
console.log(result);
