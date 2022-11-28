def bar(x, y):
    if y == 0:
        return 0
    return (x + bar(x, y-1))


def foo(x, y):
    if y == 0:
        return 1

    return bar(x, foo(x, y-1))


a = [1, 2, 3]

for x in a:
    a.pop(1)
    print(x)

# print(foo(3, 5))

# jopenues problem

n = 5

person = []
for i in range(1, n+1):
    person.append(i)


def problem(person):
    i = 0
    while (len(person) != 1):

        i = (i + 1) % len(person)

        person.pop(i)

    return person


# print(problem(person))


def solve(A):

    i = 0
    j = 1
    count = 0
    print('hello')
    while (j <= len(A) - 1):
        print(i, j)
        if ((A[i] % 2 == 0 and A[j] % 2 == 0) or (A[i] % 2 > 0 and A[j] % 2 > 0)):

            i = j
            j += 1
        else:

            count += 1
            j += 1

    return count


print(solve([1, 2, 3, 4, 5]))
