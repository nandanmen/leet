import findMedianSortedArrays from '.'

const cases: [number[], number[], number][] = [
  [[1, 3], [2], 2],
  [[1, 2], [3, 4], 2.5],
  [[1, 3], [2, 4], 2.5],
  [[3], [-2, -1], -1],
  [[1, 4], [2], 2]
]

describe('median of two sorted arrays', () => {
  test.each(cases)(
    'given [%s] and [%s], returns %s',
    (nums1, nums2, expected) => {
      expect(findMedianSortedArrays(nums1, nums2)).toEqual(expected)
    }
  )
})
