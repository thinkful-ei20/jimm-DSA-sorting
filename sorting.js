
const bubbleSort = (arr) => {
  let swapsThisLoop = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      swapsThisLoop++;
    }
  }
  if (swapsThisLoop > 0) {
    return bubbleSort(arr);
  }
  return arr;
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};


const mSort = (arr) => {
  // Check edge case, length <= 1
  if(arr.length <= 1){
    return arr;
  }
  // find middle index
  const middle = Math.floor(arr.length/2);
  // create left half
  let left = arr.slice(0, middle);
  // create right half
  let right = arr.slice(middle, arr.length);

  // call sort on each half (recursive)
  left = mSort(left);
  right = mSort(right);

  // return merge() of both halves into arr
  return merge(left, right, arr);
};

const merge = (leftArr, rightArr, outArr) => {
  // create indices to hold your place for left, right, and ouput
  let leftIdx = 0;
  let rightIdx = 0;
  let outIdx = 0;

  // loop while sideIndex is less than side length, side = left or right
  while (leftIdx < leftArr.length && rightIdx < rightArr.length){
    // add whichever side index has the lowest value to the array at out-index
    // increment the index of the side added and the output
    if (leftArr[leftIdx] < rightArr[rightIdx]){
      outArr[outIdx] = leftArr[leftIdx]; 
      outIdx++;
      leftIdx++;
    } else {
      outArr[outIdx] = rightArr[rightIdx]; 
      outIdx++;
      rightIdx++;
    } 
  }
 
  // loop thru the remaining indices in the nn-empty side
  for (let i = leftIdx; i < leftArr.length; i++){
    // add it to the array at out-index
    // increment out-index
    outArr[outIdx] = leftArr[i];
    outIdx++;
  }
  for (let i = rightIdx; i < rightArr.length; i++){
    // add it to the array at out-index
    // increment out-index
    outArr[outIdx] = rightArr[i];
    outIdx++;
  }
  
  // return arr
  return outArr; 
};

const qSort = (arr, start=0, end=arr.length) => {
  start = start;
  end = end;
  if (start >= end) {
    return arr;
  }
  const middle = part(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle + 1, end);
  return arr;
};

const part = (array, start, end) => {
  const pivot = array[end - 1];
  let j = start;
  for (let i=start; i<end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
};

const shuffle = (arr) => {
  for(let i = 0; i < arr.length; i++){
    let randIdx = Math.floor(Math.random()*arr.length/3);
    swap(arr, randIdx, i);
  }
  return arr;
};


const main = () => {
  
  let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

  // console.log(bubbleSort(data));
  // console.log(qSort(data));
  mSort(data);
  //console.log(data);
  shuffle(data);
  console.log(data);


};

main();