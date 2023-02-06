def recursion(n):
    if n == 1:
        print(n)
        return 1

    print(n)
    recursion(n-1)


recursion(5)
