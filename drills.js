/*
Write a function qSort that sorts a dataset using the quicksort algorithm. 
89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 
23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5
*/
const myString =
  "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5";
let myArr = myString.split(" ");
myArr = myArr.map(item => Number(item));
// pivot function
function partition(arr, start, end) {
  // create pivot from the end arr item
  const pivot = arr[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
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

function qSort(arr, start = 0, end = arr.length) {
  //base case
  if (start >= end) {
    return arr;
  }

  // create middle
  // take entire array and return the index value of where the sort was.
  const middle = partition(arr, start, end);
  // everything to the left is less than the pivot and to the right is greater than
  // 1st qsort call: middle = 45 start = 0 end = 100
  // middle : 22
  // 2nd qsort call:  middle = 22 start = 0 end = 45
  // 3rd qsort call: middle = 15 start = 0 end = 22

  //first pass we know that the arr at least has the left side smaller than the pivot and the right side larger than the pivot.

  // uses the index from the partition to recursively call on a smaller set of the arr until it hits the base case of 1 item in the arr.
  arr = qSort(arr, start, middle);

  // same but for the right part of the array
  arr = qSort(arr, middle + 1, end);

  return arr;
}

console.log(qSort(myArr));
