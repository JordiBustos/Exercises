#Uses python3

import sys

def max_dot_product(a, b):
    i=0
    res=0
    n = len(a)
    while (i < n):
        maxA = -10**6
        maxB = -10**6
        maxIndex = 0
        maxIndexB = 0
        for j in range(len(a)):
            if (a[j] >= maxA):
                maxA = a[j]
                maxIndex = j
            if (b[j] >= maxB):
                maxB= b[j]
                maxIndexB = j
        res = res + (maxA * maxB)
        a.pop(maxIndex) 
        b.pop(maxIndexB)
        i = i + 1

    return res

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    a = data[1:(n + 1)]
    b = data[(n + 1):]
    print(max_dot_product(a, b))
    
