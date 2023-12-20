def solve(n, r, m):

    def fact(n, m):

        if (n == 0 or n == 1):
            return 1
        r = 1
        for x in range(2, n+1):
            r = (r % m * x % m) % m
        return r

    def fastPow(a, n, m):
        print(n)
        if n == 0:
            return 1
        print(n // 2, "====")
        temp = fastPow(a, n//2, m)

        temp1 = ((temp % m) * (temp % m)) % m

        if (n % 2 == 0):

            return (temp1)

        else:
            return ((a % m) * (temp1 % m)) % m

    a = fact(n, m)
    bFact = fact(n - r, m)
    cFact = fact(r, m)
    b = fastPow(bFact, m-2, m)
    c = fastPow(cFact, m-2, m)

    ans = ((((a % m) * (b % m)) % m) * (c % m)) % m

    # (((nfact % C)*(nrpow % C)) % C*(rpow % C)) % C
    return ans


print(1//2)
print(solve(1, 1, 1))
