
def recursion(n):
    if n == 0:
        return 0

    return recursion(n - 1) + n


# print(recursion(6))

# factorial


def factorial(n, i):

    if n == 0:
        return 1
    t = factorial(n-1, i) * n
    if (t <= i):
        print(t)

    return t


factorial(6, 6)


def isPalindrom(s):

    if (len(s) < 1):
        return True

    if (s[0] == s[-1]):

        return isPalindrom(s[1:-1])

    else:

        return False


print(isPalindrom("22022"))


def fibonacci(n):

    if n <= 1:
        return n

    t = fibonacci(n - 1) + fibonacci(n-2)
    return t


t = 5
for i in range(t):
    print(fibonacci(i))
