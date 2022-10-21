'''
merge two sorted array
https://www.youtube.com/watch?v=nCNfu_zNhyI
'''


def merge(arr):

    if len(arr) <= 1:
        return

    mid = len(arr) // 2

    left = arr[:mid]
    right = arr[mid:]

    merge(left)
    merge(right)

    mergeSorted(left, right, arr)


def mergeSorted(arr1, arr2, arr):

    n = len(arr1)
    m = len(arr2)
    i = 0
    j = 0
    k = 0
    while (i < n and j < m):

        if (arr1[i] <= arr2[j]):
            arr[k] = arr1[i]

            i += 1
            k += 1
        else:

            arr[k] = arr2[j]

            j += 1
            k += 1

    while (i < n):

        arr[k] = arr1[i]
        i += 1
        k += 1

    while (j < m):
        arr[k] = arr2[j]
        j += 1
        k += 1

    return arr


arr = [2, 4, 5, 6, 1, 3, 4, 8]
print(merge(arr))
print(arr)
