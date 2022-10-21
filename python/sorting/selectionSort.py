'''
select the min element from the unsorted array and put it in sorted array
'''


def selectionSort(arr):

    for i in range(len(arr)):

        j = i + 1

        min = i
        while (j < len(arr)):

            if (arr[j] < arr[min]):

                min = j

            j += 1

        if (i + 1 < len(arr)):
            arr[i], arr[min] = arr[min], arr[i]
            print(arr, i, min)
    return arr


print(selectionSort([2, 3, 1, 2, 0, 48, 1, 0, 1, 1]))
