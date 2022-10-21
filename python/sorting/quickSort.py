def shuffle(arr, start, end):

    i = start-1
    j = start

    pivot = end

    while (j < end):

        if (arr[j] < arr[pivot]):

            i += 1
            arr[i], arr[j] = arr[j], arr[i]
        j += 1

    arr[i + 1], arr[pivot] = arr[pivot], arr[i + 1]

    return i + 1


def quickSort(arr, start, end):

    if (start < end):
        pivotEle = shuffle(arr, start, end)
        quickSort(arr, start, pivotEle-1)
        quickSort(arr, pivotEle + 1, end)


arr = [2, 4, 5, 6, 1, 3, 4, 8]
start = 0
end = len(arr)-1
print(quickSort(arr, start, end))
print(arr)
