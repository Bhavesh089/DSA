
def armStrong(num):
    
    lengthDigits = len(str(num))
    i = 0
    org = num
    
    while num != 0:
        
        mod = num % 10
        
        i += mod ** lengthDigits
        
        num //= 10
        
    
    return i == org

print(armStrong(371))