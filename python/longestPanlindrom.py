

def checkPalindrome(arr, s, e):

    temp = ""
    n = len(arr)
    
    if(s < 0):
        s = 0
    
    if( e > n-1):
        e = n-1
        
    # print(s,e)
        
    while(s < e):
        if(arr[s] != arr[e]):
            return False
        
        s+=1
        e-=1
    
    return True


def longestPalindrom(arr):
    
    n = len(arr)
    for i in range(len(arr)-1):
        
        
        s = i
        
        e = i+1

        final_s = s
        final_e = e
        while(s >=0 or e <= n-1):
            if(checkPalindrome(arr, s, e)):
                # print(checkPalindrome(arr, s, e))
                final_s = s
                final_e = e
                s -= 1
                e += 1
                print(i)
                print(s, e)
            else:
                break

            print(final_s, final_e,'final---')

print(longestPalindrom("aaaabaaa"))