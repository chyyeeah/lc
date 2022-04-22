class ArrayReader {

  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length)
      return Number.MAX_SAFE_INTEGER;
    return this.arr[index]
  }
};


const search_in_infinite_array = function (reader, key) {
  // TODO: Write your code here  
  return -1;
};

var reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
console.log(search_in_infinite_array(reader, 16))
console.log(search_in_infinite_array(reader, 11))
reader = new ArrayReader([1, 3, 8, 10, 15])
console.log(search_in_infinite_array(reader, 15))
console.log(search_in_infinite_array(reader, 200))
