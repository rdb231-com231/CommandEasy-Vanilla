function print(msg) {
  return console.log(msg)
};

function printEach(arr) {
  for (const i of arr) {
    print(i)
  }
};

function printIndex(arr, index) {
  if (index == null) {
    for (const i in arr) {
      print(i)
    };
  } else {
   print(arr.indexOf(arr[index]);
   };
};

function delIndex(arr, index) {
  return `${arr.slice(0, index)},${arr.slice(index)}`;
};
