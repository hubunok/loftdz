function forEach(arr, callback, thisArg) {
  var i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    callback.call(thisArg, arr[i], i, arr);
  }
};

function map(array, fn) {
    var copy_array = [];
    for (var i = 0; i < array.length; i++) {
        copy_array[i] = fn(array[i], i, array);
    }
    return copy_array;
};

function reduce(array, fn, initial) {
    var x = initial || array[0],
       i = 0;
       if (!initial) {i = 1;}
       for (; i < array.length; i++) {
        x = fn(x, array[i], i, array);
    }

    return x;
};
  function upperProps(obj) {
      var arr = [];
      for (var key in obj) {
          key = key.toUpperCase();
          arr.push(key);
      }
      return arr;
  };


export {
    forEach,
    map,
    upperProps,
    reduce
};
