function merge(nums1: number[], nums2: number[]) {
  const result: number[] = []
  let i = 0,
    j = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i++])
    } else {
      result.push(nums2[j++])
    }
  }

  while (i < nums1.length) {
    result.push(nums1[i++])
  }

  while (j < nums2.length) {
    result.push(nums2[j++])
  }

  return result
}

function getMedian(nums: number[]) {
  if (nums.length === 1) return nums[0]

  const mid = nums.length / 2
  if (nums.length % 2) {
    return nums[Math.floor(mid)]
  }
  return (nums[mid] + nums[mid - 1]) / 2
}

/**
 * There are two sorted arrays nums1 and nums2 of size m
 * and n respectively. Find the median of the two sorted
 * arrays.
 * @summary
 *  - Runtime: `O(n + m)`
 *  - Leetcode stats:
 *    - Runtime: `124ms` (64.19 percentile)
 *    - Memory: `39mb` (77.45 percentile)
 */
export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
) {
  const merged = merge(nums1, nums2)
  return getMedian(merged)
}
