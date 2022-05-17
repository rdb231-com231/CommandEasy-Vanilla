export function print(msg) {
  return console.log(msg)
};

export function printEach(arr) {
  for (const i of arr) {
    print(i)
  }
};

export function printIndex(arr, index) {
  if (index == null) {
    for (const i in arr) {
      print(i)
    };
  } else {
   print(arr.indexOf(arr[index]));
   };
};

export function delIndex(arr, index) {
  return `${arr.slice(0, index)},${arr.slice(index)}`;
};

