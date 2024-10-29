import random
import heapq


class Solution:

    # Quick select
    def find_kth_largest_quick_select(self, nums, k):
        # explanation:
        # quick select uses randomness and partioning of the array
        # randomly pick a pivot element and then "sort" the elements based on
        # the following:
        # if the element is less than the pivot element put in the left
        # if the element is greater then the pivot element put it in the right
        # put the pivot element in mid
        # we can then see that there are two groups that are roughly "sorted"
        # everything to the left of mid is smaller than the pivot element
        # everything to the right of mid is larger.
        # we then we know that there are two cases since we're looking for the
        # k-th largest element:
        # 1. we're either going to be in the left subarray if there are at least k elements in it
        # 2. we're in the right subarray if there are less than k elements in
        # the left subarray
        # we can exploit that fact to then search only the subarray where the
        # kth element would be.
        # this effectively uses the *structure* of the array to sort

        # run time is O(n) on average. O(n^2) in the worst case.
        # each call to quick select is O(n)
        # if we select a bad pivot then we can potentially call quick_select n
        # times which leads to O(n^2).
        def quick_select(nums, k):
            pivot = random.choice(nums)
            print(pivot)
            left, mid, right = [], [], []

            for num in nums:
                if num > pivot:
                    left.append(num)
                elif num < pivot:
                    right.append(num)
                else:
                    mid.append(num)
            print(k)
            print(left, mid, right)
            if k <= len(left):
                print(left)
                return quick_select(left, k)

            if len(left) + len(mid) < k:
                return quick_select(right, k - len(left) - len(mid))

            return pivot

        return quick_select(nums, k)

    def find_kth_largest_heap(self, nums, k):
        # explanation:
        # we can use the heap invariants to our advantage.
        # heaps are complete binary trees
        # max heap means the root of any tree (or subtree) is the largest value
        # of the tree.
        # min heap means the root of any tree is the smallest value (same as
        # above)
        # can find a value in O(n log(k)), where k is the target value:where
        heap = []
        for num in nums:
            heapq.heappush(heap, num)
            if len(heap) > k:
                heapq.heappop(heap)
        return heap[0]


tests = [[[3, 2, 1, 5, 6, 4], 2]]

for test in tests:
    s = Solution()
    print(s.find_kth_largest_quick_select(tests[0][0], tests[0][1]))
    print(s.find_kth_largest_heap(tests[0][0], tests[0][1]))
