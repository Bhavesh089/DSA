# def solve(A, B):

#     size = [0] * 1000
#     n = len(A)
#     for i in range(0, n):
#         size[A[i]] += 1

#     countPairs = 0
#     for i in range(0, n):

#         countPairs += size[B - A[i]]
#         if (B - A[i] == A[i]):
#             countPairs -= 1

#     return int(countPairs / 2)


def solve(A):

    minSum = A[0]

    for x in range(1, len(A)):

        if ((A[x] + minSum) < minSum):

            minSum = A[x] + minSum
        else:
            minSum = A[x]

        print(minSum, 'this is minsum-->')
        if (minSum == 0):
            return 1

    return 0


print(solve([1, 3, -4]))
