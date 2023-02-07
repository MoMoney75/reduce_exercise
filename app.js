//1
function extractValue(arr, key) {
  return arr.reduce(function (acc, value) {
    acc.push(value[key]);
    return acc;
  }, []);
}

//2 unable to solve on my own
function vowelCount(str) {
  const vowels = "aeiou";
  return str.split("").reduce(function (acc, next) {
    let toLowerCased = next.toLowerCase();
    if (vowels.indexOf(toLowerCased) !== -1) {
      if (acc[toLowerCased]) {
        acc[toLowerCased]++;
      } else {
        acc[toLowerCased] = 1;
      }
    }
    return acc;
  }, {});
}
//3
function addKeyAndValue(arr, title, position) {
  return arr.reduce(function (acc, obj) {
    obj[title] = position;
    return arr;
  });
}

//4
function partition(arr, callback) {
  return arr.reduce(
    function (acc, next) {
      if (callback(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}
