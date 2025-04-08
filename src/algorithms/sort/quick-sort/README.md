## Quick Sort

| Complexity | Big O        |
| ---------- | ------------ |
| Average    | O(n log n)   |
| Best       | O(n log n)   |
| Worst      | O(n^2)       |
| Space      | O(log n)     |


QuickSort is a divide-and-conquer sorting algorithm that efficiently sorts an array or list by partitioning it into smaller sub-arrays. 
The algorithm works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. 
The sub-arrays are then recursively sorted. This process is repeated until the entire array is sorted.

QuickSort has an average time complexity of O(n log n), making it a highly efficient sorting algorithm for most cases. 
The key to its efficiency lies in the partitioning step, which allows it to sort smaller sub-arrays independently.

However, it's important to note that the worst-case time complexity of QuickSort is O(n^2), 
which occurs when the pivot selection strategy leads to unbalanced partitioning. 
Nevertheless, QuickSort is often preferred in practice due to its average-case performance and the ability to implement optimizations, such as randomized pivot selection, to mitigate worst-case scenarios.

![quick-sort](https://github.com/olexanax/Algoritms-and-data-structure/blob/main/assets/quick-sort.gif?raw=true)