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