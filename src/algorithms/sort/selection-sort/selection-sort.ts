const swap = <T>(arr: T[], index1: number, index2: number) => {
  [arr[index2], arr[index1]] = [arr[index1], arr[index2]];
}

function selectionSort<T>(arr: T[], comp: (a: T, b: T) => number) {
  for(let i = 0; i < arr.length; i++){
    let min = i;
    
    for(let j = i +1; j < arr.length; j++){
      if(comp(arr[min], arr[j]) > 0){
        min = j;
      }
    }

   if(i !== min)  swap(arr, i,min)
  }

  return arr
}