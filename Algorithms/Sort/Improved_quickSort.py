# Uses python3
import sys
import random

def partition3(a, l, r):
    x, j, t = a[l], l, r
    i = j
    while i <= t:
        if a[i] < x:
            a[j], a[i] = a[i], a[j]
            j += 1
        elif a[i] > x:
            a[t], a[i] = a[i], a[t]
            t -= 1 
            i -= 1
        i += 1 
    return j, t

def randomized_quick_sort(a, l, r):
    if l >= r:
        return
    k = random.randint(l, r)
    a[l], a[k] = a[k], a[l]
    m1, m2 = partition3(a, l, r)
    randomized_quick_sort(a, l, m1 - 1)
    randomized_quick_sort(a, m2 + 1, r)


if __name__ == '__main__':
    input = sys.stdin.read()
    n, *a = list(map(int, input.split()))
    randomized_quick_sort(a, 0, n-1)
    for x in a:
        print(x, end=' ')
