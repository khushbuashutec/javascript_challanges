const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}c in ${i + 1} Days `;
  }
  console.log(str);
};
console.log(printForecast([17, 21, 23]));
