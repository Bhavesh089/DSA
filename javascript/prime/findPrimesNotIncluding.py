
def primes(number):
    primes = [True] * number
    primes_list = []
    
    i = 2
    while i * i < number:
        if primes[i]:
            j = i * i
            while j < number:
                primes[j] = False
                j += i
        i += 1

    j = 2
    while j < number:
        if primes[j]:
            primes_list.append(j)
        j += 1

    return primes_list

print(primes(100))
