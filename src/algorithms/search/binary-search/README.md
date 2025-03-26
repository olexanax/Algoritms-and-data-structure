
## Binary Search

| Complexity | Big O        |
| ---------- | ------------ |
| Average    | O(log n)     |
| Best       | O(1)         |
| Worst      | O(log n)     |
| Space      | O(1)         |



Binary Search is a divide-and-conquer algorithm used to efficiently locate a target element within a sorted array. 
It works by repeatedly dividing the search interval in half. At each step, it compares the middle element of the interval to the target value. 
If the middle element is equal to the target, the search is successful. 
If the target is less than the middle element, the search continues in the lower half; otherwise, it continues in the upper half. 
The process is repeated until the target is found or the search interval becomes empty, indicating that the target is not in the array.

![binarySearch](https://github.com/olexanax/Algoritms-and-data-structure/blob/main/assets/binary-search.gif?raw=true)
