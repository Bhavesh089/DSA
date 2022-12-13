# def bar(x, y):
#     if y == 0:
#         return 0
#     return (x + bar(x, y-1))


# def foo(x, y):
#     if y == 0:
#         return 1

#     return bar(x, foo(x, y-1))


# a = [1, 2, 3]

# for x in a:
#     a.pop(1)
#     print(x)

# # print(foo(3, 5))

# # jopenues problem

# n = 5

# person = []
# for i in range(1, n+1):
#     person.append(i)


# def problem(person):
#     i = 0
#     while (len(person) != 1):

#         i = (i + 1) % len(person)

#         person.pop(i)

#     return person


# # print(problem(person))


# def solve(A):

#     i = 0
#     j = 1
#     count = 0
#     print('hello')
#     while (j <= len(A) - 1):
#         print(i, j)
#         if ((A[i] % 2 == 0 and A[j] % 2 == 0) or (A[i] % 2 > 0 and A[j] % 2 > 0)):

#             i = j
#             j += 1
#         else:

#             count += 1
#             j += 1

#     return count


# print(solve([1, 2, 3, 4, 5]))


a = [978, 847, 95, 729, 778, 586, 188, 782, 813, 870, 871, 940, 312, 693, 580, 101, 760, 837, 564, 633, 680, 155, 241, 374, 682, 290, 850, 601, 433, 922,
     773, 959, 530, 290, 990, 50, 516, 409, 868, 131, 664, 851, 721, 880, 20, 450, 745, 387, 787, 823, 392, 242, 674, 347, 65, 135, 819, 324, 651, 678, 139, 940]

print(len(a))
# for x in range(len(a)):

#     print(a[x])
