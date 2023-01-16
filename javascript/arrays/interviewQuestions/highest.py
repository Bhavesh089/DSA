
def maxp3(A):

    # if(len(A) == 1):

    #     return A[0]

    # if(len(A) == 2):

    #    return A[0] * A[1]

    if (len(A) == 3):

        return A[0] * A[1] * A[2]

    if (len(A) > 3):
        max1 = 0
        max2 = 0
        max3 = 0
        for i in A:

            if (abs(i) > max1):

                max3 = max2
                max2 = max1
                max1 = i
            elif (abs(i) > max2):
                max3 = max2
                max2 = i
            elif (i > max3):
                max3 = i
        print(max1, max2, max3)
    return max1 * max2 * max3


print(maxp3([-1, -2, -3, -4, -5]))
