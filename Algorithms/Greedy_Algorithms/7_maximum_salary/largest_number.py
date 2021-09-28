#Uses python3

import sys


def isGreaterOrEqual(digit, maxDigit):
    a = digit + maxDigit
    b = maxDigit + digit
    
    if (int(a) >= int(b)):
        return True
    else:
        return False

def largest_number(a):

    answer = ''
    while (len(a) != 0):
        maxDigit = ''

        for digit in a:
            if (isGreaterOrEqual(digit, maxDigit)):
                maxDigit = digit
        

        answer = answer + maxDigit
        a.remove(maxDigit)
        
    
    return answer


if __name__ == '__main__':
    input = sys.stdin.read()
    data = input.split()
    a = data[1:]
    print(largest_number(a))
    
