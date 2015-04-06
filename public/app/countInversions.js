(function () {
    'use strict';
    var a = [];
    var tmp = [];

    var pad = function (num, size) {
        var s = "000000000" + num;
        return s.substr(s.length-size);
    };

    var printAll = function (arr) {
        var outCount = '|';
        var outValue = '|';
        for(var i=0; i< arr.length; i += 1) {
            outCount += ' ' + pad(i,1) + ' |';
            outValue += ' ' + pad(arr[i],1) + ' |';
        }
        console.log(outCount);
        console.log(outValue);
    };

    var merge = function(leftCursor, mid, right){
        var leftIdx = leftCursor;
        var leftUpper = mid-1;
        var rightIdx = mid;
        var tmpIdx = 0;
        var totalItems = right-leftCursor+1;
        var inv = 0;

        while(leftIdx <= leftUpper && rightIdx <= right){
            if(a[leftIdx] < a[rightIdx]){
                tmp[tmpIdx++] = a[leftIdx++];
            } else {
                tmp[tmpIdx++] = a[rightIdx++];
                inv += leftUpper - leftIdx + 1;
            }
        }

        while(leftIdx <= leftUpper){
            tmp[tmpIdx++] = a[leftIdx++];
        }
        while(rightIdx <= right) {
            tmp[tmpIdx++] = a[rightIdx++];
        }
        for(var t=0; t < totalItems; t += 1){
            a[t + leftCursor] = tmp[t];
        }
        return inv;
    };

    var mergeSort = function (left, right){
        if(left === right){
            return 0;
        }
        var mid = parseInt((right + left)/ 2,10);
        var x = mergeSort(left,mid);
        var y = mergeSort(mid+1, right);
        var z = merge(left,mid+1,right);
        return x+y+z;
    };

    //mergeSort(0, a.length-1);
    //printAll(a);

    module.exports.count = function (array){
        a = array;
        var inv = mergeSort(0, a.length-1);
        printAll(a);
        console.log(inv);
        return inv;
    }

}());