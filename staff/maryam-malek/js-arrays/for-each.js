function forEach(arr, callback){
    
    if(typeof arr !== 'array') throw Error ('array is not valid');
    
    for( var i=0; i<arr.length; i++){
        callback(arr[i], i , arr);
    }
}
