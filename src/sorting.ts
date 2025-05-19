function sweep(nums: number[], a: number, b: number) {
  const tmp = nums[a]
  nums[a] = nums[b]
  nums[b] = tmp
}

/**
 * @link https://www.hello-algo.com/en/chapter_sorting/selection_sort/
 * 1. Find the min number in the range and then put in the beginning
 * 2. Repeat the previous step until it is done.
 */
export function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i + 1
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j
      }
    }
    sweep(nums, i, minIndex)
  }

  return nums
}
