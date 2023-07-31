// 1. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
if(array.length===0){
    return 0
}
else {
    return array[0]+sum(array.slice(1))
}
};

// 2. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var sums=0;
    for(var i=0;i<array.length;i++){
        if(typeof array[i]=== "number")
        {
            sums+=array[i];
        }
       
            
            sums+=arraySum(array[i]);
        
    }
    return sums;
};

// 3. Check if a number is even.

    var isEven = function(n) {
        n=Math.abs(n)
       if(n===1){
        return false ;
       }
       else if(n===0){
        return true;
    
       }
       else {
        return isEven(Math.abs(n-2))
        
    
       }
    
    }
    
    

// 4. Write a function that reverses a string.
var reverse = function(string) {
    if (string.length===0){
        return ""
    }
    else {
        
        return string.slice(-1)+reverse(string.substr(0, string.length-1));
    };
    }


// 5. Reverse the order of an array
function reverseArr(array) {
    if (array.length <= 1) {
      return array;
    } else {
      const temp = array.shift();
      reverseArr(array); 
      array.push(temp);     
      return array;
    }
  }
  
  
  


// 6. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.

    var fibonacci = function(n) {
        if (n <= 0) {
          return null;
        } else if (n === 1) {
          return [0];
        } else if (n === 2) {
          return [0, 1];
        } else {
          const fibArray = fibonacci(n - 1);
          const nextFibNumber = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
          fibArray.push(nextFibNumber);
          return fibArray;
        }
      };
  
  
 

// 7. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0) {
      return null;
    } else if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return nthFibo(n - 1) + nthFibo(n - 2);
    }
  };


// 8. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10

    var nestedEvenSum = function(obj) {
        let sum = 0;
      
        for (const key in obj) {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            sum += nestedEvenSum(obj[key]); // Recurse on nested objects
          } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key]; // Add even numbers to the sum
          }
        }
      
        return sum;
      };


// 9. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 10. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(arr) {
    if (arr.length === 1) {return arr;}
    var midpoint = Math.floor(arr.length / 2);
    // recursively determine left and right arrays
    var left = mergeSort(arr.slice(0, midpoint)) || [];
    var right = mergeSort(arr.slice(midpoint, arr.length)) || [];
    return merge(left,right);
  }
  
  

