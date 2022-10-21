'''
bubbling up the end of the array 
'''


def bubbleSort(arr):

    for x in range(len(arr)):

        i = 0
        j = 1
        count = 0
        while (j < len(arr)-x):
            count += 1
            if (arr[j] < arr[i]):
                arr[i], arr[j] = arr[j], arr[i]
            i += 1
            j += 1
        print(arr)
        print(count)
    return arr


print(bubbleSort([2, 8, 4, 1]))
