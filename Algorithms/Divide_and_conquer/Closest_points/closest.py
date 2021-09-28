
import sys
import math
'''
Input example:
    3 -> this is n
    2 10 -> n_n-1 point
    1 10 -> n_n-2 "
    5 50 -> n "
'''
def insertionOrder(arrA, arrB):
    for i in range(1, len(arrA)):
        actual = arrA[i]
        actualY = arrB[i]
        j = i - 1
        while (j > -1 and arrA[j] > actual):
            arrA[j+1] = arrA[j]
            arrB[j+1] = arrB[j]
            j = j - 1
        arrA[j+1] = actual
        arrB[j+1] = actualY
    return arrA, arrB

def computeDistance(x_1, x_2, y_1, y_2):
    return math.sqrt((x_1 - x_2)**2 + (y_1 - y_2)**2)

def find_minimun(x, y, start, end):
    minimun = 10**9
    for i in range(start, end): #Distancia entre todos los puntos de segmento A y por otro lado segmento B
        j = i + 1
        while (j <= end):
            d = computeDistance(x[i], x[j], y[i], y[j])
            if (d <= minimun):
                minimun = d
            j += 1
    return minimun

def filterFunction(x, y, d, auxiliarX, auxiliarY, midlePoint):
    for i in range(len(x)):
        if (abs(x[i]-midlePoint+1) <= d):
            auxiliarX.append(x[i])
            auxiliarY.append(y[i])

def minimum_distance(x, y):
    #Se ordena por eje x 
    insertionOrder(x, y)
    if (len(x) == 2): #Si hay dos puntos se computa la d directamente
        return computeDistance(x[1], x[0], y[1], y[0])
    elif (len(x) == 0 or len(x) == 1): #Si hay uno o ninguno retorna 0
        return 0 

    #Punto medio entre las dos divisiones del array x e y
    midlePoint = math.floor((len(x)-1)/2)
   
    dLmin = find_minimun(x, y, 0, midlePoint) #Mínimo de la mitad inf y sup
    dRmin = find_minimun(x, y, midlePoint+1, len(x)-1)

    dLRmin = min(dRmin, dLmin) #Guarda el mínimo entre los puntos de la izq y los de la derecha, pero no entre sí

    filterX = []
    filterY = []
    filterFunction(x, y, dLRmin, filterX, filterY, midlePoint) #Si la d del punto al midlePoint es >= que dLRmin, la distancia a cualquier punto de la otra mitad será >= que dLRmin y por consiguiente se lo descarta

    minD = math.inf
    insertionOrder(filterY, filterX) #Ordenar por eje Y

    for i in range(midlePoint+1): #Calcular 'd' de los P del primer segmento con los del segundo 
        j = midlePoint + 1
        k = 1
        while (j < midlePoint+1 and k < 8): #Al estar ordenado por eje Y no es necesario calcular más que ese rango, si no la d min tendría que haber sido <
            d = computeDistance(filterX[j], filterX[i], filterY[j], filterY[i])
            if (d <= minD):
                minD = d
            j +=1
            k += 1
    
    output = min(dLRmin, minD)
    return output

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    x = data[1::2]
    y = data[2::2]
    print("{0:.9f}".format(minimum_distance(x, y)))