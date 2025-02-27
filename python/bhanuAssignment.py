import copy

def objects(a):
    # The variable a represents a list.
    # You are given a = [1,2,[3,4,5]]
    
    # The variable b also represents a list.
    # The list b is a copy of list a.   
    # Both list a and list b should have the same id address.
    
    # Write the Python statement which will result in list b being a
    # copy of list a with list a and list b having the same id address.
    # ENTER ANSWER BELOW.
    b = a
    

    # Assign a shallow copy of the list a to the variable c.
    # (Variable c is a list and is a shallow copy of list a).
    # ENTER ANSWER BELOW.
    c = copy.copy(a)
    
    print("c :", c)
    print("d :", a)
    print("nested address of c: ", id(a[2]))
    c[2][0] = 6
    c[0] = 6
    print('This is a: ', a)
    print('This is c: ', c)
    print("address of a: ", id(a))
    print("address of c: ", id(c))

    '''
    From the above conclusion:
    if b = a Then address will be same and when you change b in something
    a will be also reflected
    
    when do copy of copy eg: b = copy.copy(a)
    then their address will be different when you change something b 
    a will not be reflected
    When you change something in b nested array then will be reflected in a - shallow copy.
    
    when you change something in b nested/normal then it will not be reflected in b - deep copy.
    '''
    # # Assign a deep copy of the list a to the variable d.
    # # ENTER ANSWER BELOW.
    
    # d = copy.deepcopy(a)
    

    # # Assign the id of list a to the variable id_a
    # # ENTER ANSWER BELOW.
   
    # id_a = id(a)
    # id_b = id(b)
    # id_c = id(c)
    # id_d = id(d)
    # print("id_a: ",id_a, "id_b: ",id_b, "id_c: ", id_c, "id_d: ",id_d,)
    # return b, c, d, id_a

print(objects([1,2,[3,4,5]]))
#     """
#     Write a function prime_number(number). 
#     This function will return a list of all the prime numbers
#     from 2 up to but not including the variable number.
#     Please refer to the sample outputs given below.
    
#     Example1:
#             prime_number(10)
#             Output:[2,3,5,7]
#     Example2:
#             prime_number(100)
#             Output:[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
#     Example3:
#             prime_number(7)
#             Output:[2,3,5]
#     """

#     #PLEASE COMPLETE THE FOLLOWING PROGRAM.
    
def prime_number(number):
    primes = [True] * number
    num = []
        
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
            num.append(j)
        j += 1

    return num

    
    


    
#     """
#     Write a function while_loop(number). The variable
#     number is a string.

#     *If the character in the string is a number, the function
#       returns the sum of all integer numbers between 1 and
#       number inclusive. Please refer to the sample output
#       below:
#       Example1:
#             while_loop("3")
#             Output: 6
#             Explanation: 3 + 2 + 1 = 6

#     *If the character in the string is not a number, (or not an integer
#       number) the function returns the string "Error". Please refer to the
#       sample output below:
#       Example2:
#             while_loop("Hello")
#             Output: "Error"
#             Explanation: Chracters in the string are not numbers.
#             Hint: You may want to consider using a try statement with an except statement.

#     *If the character in the sting is a number less than one, the function
#       returns the number zero as a default. Please refer to the sample
#       output below:
#       Example3:
#             while_loop("-1")
#             Output: 0
#             Explanation: The number in the string is less than one. The defaul of zero is returned.
            
#         """

# #PLEASE COMPLETE THE FOLLOWING PROGRAM.

def while_loop(num):
   
    try:
        total = int(num)
        if(total > 0):
            return total*(total+1)//2
        else:
            return 0
    except ValueError:
        return 'Error'
