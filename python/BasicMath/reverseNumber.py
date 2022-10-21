num = 1234
reversed_num = 0

while num != 0:
    mod = num % 10
    reversed_num = reversed_num * 10 + mod
    num //= 10

print("Reversed Number: " + str(reversed_num))