# Uses python3
import sys

def get_optimal_value(count, capacity, weights, values):
    if (capacity == 0):
        return 0
    price = 0
    valuesPerUnit = []
    for i in range(count):
        valuesPerUnit.append([values[i]/weights[i], weights[i]]) 
    valuesPerUnit.sort(key = lambda x: x[0], reverse = True)
    i = 0 
    while (capacity != 0 and i < len(valuesPerUnit)): 
        while ((valuesPerUnit[i][1] != 0) and (capacity != 0)):
            price += valuesPerUnit[i][0]
            valuesPerUnit[i][1] -= 1
            capacity -= 1
        i = i + 1   
    return price



if __name__ == "__main__":
    data = list(map(int, sys.stdin.read().split()))
    n, capacity = data[0:2]
    values = data[2:(2 * n + 2):2]
    weights = data[3:(2 * n + 2):2]
    opt_value = get_optimal_value(n, capacity, weights, values)
    print("{:.10f}".format(opt_value))
