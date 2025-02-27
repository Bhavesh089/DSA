def recursive_function(n, num_iterations):
    if num_iterations <= 0:
        return
    else:
        print("Iteration", num_iterations)
        for i in range(1, n + 1):
            print("loop before function",i)
            recursive_function(n, num_iterations - 1)
            print("loop after function ",i)
        print("End of Iteration", num_iterations)

recursive_function(3,2)