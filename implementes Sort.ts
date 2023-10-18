function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const unsortedArray: number[] = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArray: number[] = quickSort(unsortedArray);
console.log("Sorted array:", sortedArray);
