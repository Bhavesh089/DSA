# its a game we have to insert from unsorted region to sorted region
#eg: [3,2,1,9,0,8,3]
'''
step 1 : [3,2,1,9,0,8,3]
step 2 : [2,3,1,9,0,8,3] 3 > 2 so shift 2 to right side
step 3 : [1,2,3,9,0,8,3] 3 > 1, so shift, 2 > 1 so shift, 1 
step 4 : [1,2,3,9,0,8,3] no shifting for 9
step 5 : [0,1,2,3,9,8,3] 0 goes to first place
.
.
.
step n : [0,1,2,3,3,8,9] sorted
'''


def insertionSort(arr):

    for i in range(len(arr)):

        j = i + 1

        while (j < len(arr) and j > 0 and arr[j] < arr[j-1]):

            arr[j-1], arr[j] = arr[j], arr[j-1]

            j -= 1
    return arr


print(insertionSort([2, 3, 1, 2, 0, 48, 1, 0, 1, 1]))
