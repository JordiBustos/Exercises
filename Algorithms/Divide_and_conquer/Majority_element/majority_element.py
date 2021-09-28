import sys
import math

def get_majority_element(a, left, right):  
    if left == right:
        return -1
    if left + 1 == right:
        return a[left]
    
    a.sort()
    contador, max, i = 0, 0, 0

    while (i < right):
        actual = a[i]
        while (i < right and a[i] == actual):
            contador = contador + 1
            i = i + 1
        if (contador > max):
            max = contador
        contador = 0

    if (max > math.floor(right/2)):
        return 1
    else:
        return -1

    

if __name__ == '__main__':
    input = sys.stdin.read()
    n, *a = list(map(int, input.split()))
    if get_majority_element(a, 0, n) != -1:
        print(1)
    else:
        print(0)
