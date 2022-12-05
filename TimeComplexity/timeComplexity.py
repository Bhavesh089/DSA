'''
what is an algorithm ?
ans: A set of intruction to be followed to solve a problem !!!

example : From A to B
1) Go straight
2) turn left
3) turn right
4) reached goal 
'''

'''
If this algo works

you need to check the effiency 
--> running time (Time complexity)
--> how much space is used (space complexity)
'''

"""
Time complexity

asymtotic analysis

we use best case, avg case and worst case scenarios

which is denoted by asymtotic notations

Big O - O(n)
Omega - Ω(n)
Theta θ(n)
"""


"""
Big O notation (worst case scenario)

It is a tight upper bound beyond this your answer never grow or go

f(n) = O(g(n)) where n is size of the input

at larger value of n f(n) is g(n)

eg: f(n) = n^4 + n^3 + 2n + 1

g(n) = n^4 

g(n) will give max rate of growth of f(n) at larger value of n

"""

"""
case: 1
n = 4
for x in range(n): 0,1,2,3
    print(x)
    
time complexity - O(n)

case: 2
n = 4
for x in range(n):
    print(x)

for y in range(n):
    print(x)
    
time complexity -f(n) = O(n) + O(n) => 2 O(n) -> O(n) 

case: 3
n = 4
for x in range(n):
    print(x)

for y in range(n):
    print(x)
    
for y in range(n):
    for x in range(n):
        print(x)
    
time complexity - f(n) = n^2 + 2n => O(n^2) -> O(n^2) 

"""



