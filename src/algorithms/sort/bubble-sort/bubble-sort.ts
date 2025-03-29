const swap = <T>(arr: T[], index1: number, index2: number) => {
  [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
}

function bubbleSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
  let swapped: boolean;

  for (let i = arr.length; i > 0; i--) {
    swapped = false; 

    for (let j = 0; j < i - 1; j++) {
      const current = arr[j];
      const next = arr[j + 1];

      if (compare(current, next) > 0) {
        swap(arr, j, j + 1);
        swapped = true; 
      }
    }

    if (!swapped) break;
  }

  return arr;
}