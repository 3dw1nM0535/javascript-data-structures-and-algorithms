// Test cases for bubble sort algorithm implementation

const bubbleSort = require("../../Sorting and Searching algorithms/bubble_sort");
const selectionSort = require("../../Sorting and Searching algorithms/selection_sort");
const insertionSort = require("../../Sorting and Searching algorithms/insertion_sort");
const mergeSort = require("../../Sorting and Searching algorithms/merge_sort");
const quickSort = require("../../Sorting and Searching algorithms/quickSort");
const heapSort = require("../../Sorting and Searching algorithms/heap_sort");
const expect = require("expect.js");

const items = [12, 10, 23, 40, 40, 42, 2, 9];
const expected = [2, 9, 10, 12, 23, 40, 40, 42];
let sortedArray;

// Hook
beforeEach(() => {
  sortedArray = [];
});

describe("Implementing sorting algorithms", () => {
  // Bubble sort algorithm implementation
  it("Should be able to perform a sort using bubble sort algorithm", () => {
    sortedArray = bubbleSort(items);
    for (let i = 0; i < sortedArray.length; i += 1) {
      expect(expected[i]).to.be.equal(sortedArray[i]);
    }
  });
  // Selection sort algorithm implementation
  it("Should be able to perform a sort using selection sort algorithm", () => {
    sortedArray = selectionSort(items);
    for (let i = 0; i < sortedArray.length; i += 1) {
      expect(expected[i]).to.be.equal(sortedArray[i]);
    }
  });
  // Insertion sort algorithm implementation
  it("Should be able to perform a sort using insertion sort algorithm", () => {
    sortedArray = insertionSort(items);
    for (let i = 0; i < sortedArray.length; i += 1) {
      expect(expected[i]).to.be.equal(sortedArray[i]);
    }
  });
  // Merge sort algorithm implementation
  it("Should be able to perform a sort using merge sort algorithm", () => {
    sortedArray = mergeSort(items);
    for (let i = 0; i < sortedArray.length; i += 1) {
      expect(expected[i]).to.be.equal(sortedArray[i]);
    }
  });
  // Quick sort algorithm implementation
  it("Should be able to perform a sort using quick sort algorithm", () => {
    sortedArray = quickSort(items);
    for (let i = 0; i < sortedArray.length; i += 1) {
      expect(expected[i]).to.be.equal(sortedArray[i]);
    }
  });
  it("Should be able to perform a sort using heap sort algorithm", () => {
    sortedArray = heapSort(items);
    for (let i = 0; i < sortedArray.length; i += 1) {
      expect(expected[i]).to.be.equal(sortedArray[i]);
    }
  });
});
