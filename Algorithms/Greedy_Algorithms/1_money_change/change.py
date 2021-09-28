# Uses python3
import sys

def get_change(m):
    arr = [1, 5, 10]

    steps = m
    m=0
    while (steps > 0):
        if (steps >= 10):
            steps = steps - arr[2]
        else:
            if(steps >= 5):
                steps = steps - arr[1]
            else:
                steps = steps - arr[0]
        m = m + 1

    return m

m = int(input())
print(get_change(m))