(function () {
    'use strict';
    var a = [0, 4, 3, 6, 7, 5, 2, 1, 9, 8];
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

        while(leftIdx <= leftUpper && rightIdx <= right){
            if(a[leftIdx] < a[rightIdx]){
                tmp[tmpIdx++] = a[leftIdx++];
            } else {
                tmp[tmpIdx++] = a[rightIdx++];
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
    };

    var mergeSort = function (left, right){
        if(left === right){
            return;
        }
        var mid = parseInt((right + left)/ 2,10);
        mergeSort(left,mid);
        mergeSort(mid+1, right);
        merge(left,mid+1,right);
    };

    mergeSort(0, a.length-1);
    printAll(a);

}());