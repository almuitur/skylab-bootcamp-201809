function shift(arr) {

    if (!(arr instanceof Array)) throw Error ('array is not valid');
    if (!arr.length) throw Error ('array is empty');

    var newArr = arr;
    var length = arr.length;
    var first = arr[0];
    for(i=0; i<arr.length; i++){
        newArr[i] = arr[i+1];
    }
    newArr.length = length-1;
    return first;
}
