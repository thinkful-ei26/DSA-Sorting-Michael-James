/*
Write a function qSort that sorts a dataset using the quicksort algorithm. 
89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 
23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5
*/
const myString =
  "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5";
let myArr = myString.split(" ");
myArr = myArr.map(item => Number(item));
let counter = 0;

// pivot function
function partition(arr, start, end, count) {
  // create pivot from the end arr item
  const pivot = arr[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    //count.push(1);
    count++;
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
      // count.push(1);
      count++;
    }
  } //for ends here
  //count++;
  //console.log(count);
  //return the pivot point
  // j is the last location that we swapped on.
  swap(arr, end - 1, j);
  return j;
}

function swap(arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function qSort(arr, start = 0, end = arr.length, count) {
  //base case
  if (start >= end) {
    return arr;
  }

  // create middle
  // take entire array and return the index value of where the sort was.
  const middle = partition(arr, start, end, count);
  count++;
  // everything to the left is less than the pivot and to the right is greater than
  // 1st qsort call: middle = 45 start = 0 end = 100
  // middle : 22
  // 2nd qsort call:  middle = 22 start = 0 end = 45
  // 3rd qsort call: middle = 15 start = 0 end = 22

  //first pass we know that the arr at least has the left side smaller than the pivot and the right side larger than the pivot.

  // uses the index from the partition to recursively call on a smaller set of the arr until it hits the base case of 1 item in the arr.
  arr = qSort(arr, start, middle, count);
  //count.push(1);
  count++;
  // same but for the right part of the array
  arr = qSort(arr, middle + 1, end, count);
  // count.push(1);
  count++;
  //log out at the very end of each qSort function call;
  console.log("Count is:", count);
  return arr;
}

//qSort(myArr, 0, myArr.length, counter);

//console.log(Array.prototype.sort.toString());

function mSort(myArr) {
  // split the arr at the middle
  // if the
  if (myArr.length <= 1) {
    return myArr;
  }
  const end = myArr.length;
  const middle = Math.floor(myArr.length / 2);
  let left = myArr.slice(0, middle);
  let right = myArr.slice(middle, end);

  left = mSort(left);
  right = mSort(right);

  return merge(left, right, myArr);
  //recursively call msort on the
}

// works but we use more memory. Be careful when making solutions to pay attention to the data structures used for temps.
function merge(left, right, myArr) {
  // left right combine at the end
  //
  let leftCount = 0;
  let rightCount = 0;
  let resultsIndex = 0;
  // [1,6,7,10,13,2,3,8,9,11,14]
  // [1,6,7,10,13]
  // [2,3,8,9,11,14]
  // left [4] right [9]
  //
  while (leftCount < left.length && rightCount < right.length) {
    if (left[leftCount] < right[rightCount]) {
      myArr[resultsIndex++] = left[leftCount++];
    } else {
      myArr[resultsIndex++] = right[rightCount++];
    }
  }
  while (leftCount < left.length) {
    myArr[resultsIndex++] = left[leftCount++];
  }

  while (rightCount < right.length) {
    myArr[resultsIndex++] = right[rightCount++];
  }
  return myArr;
}

//console.log(mSort(myArr));
const bucketString =
  "0 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 100";
let bucketArr = bucketString.split(" ");
bucketArr = bucketArr.map(item => Number(item));

function bSort(array, start=0, end=array.length){
  /* 
  const lowest =0
  const highest=100
  what if->
  create a BST , O(n+ log(n))=> 1.4n => n

   30 -> insert BST  key=30 value=+1
   32
   30
      read DFS in-order O(n)
  */

 return array;
}

//const BinarySearchTree = require('./bst');
//let myTree = BinarySearchTree;
//console.log("Hello", bSort(bucketArr));




