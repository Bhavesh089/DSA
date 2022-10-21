def recursion(n):
    if n == 0:

        return "done"

    a = recursion(n-1)
    print(n)
    print(a)
    return "hello"


print(recursion(3))
