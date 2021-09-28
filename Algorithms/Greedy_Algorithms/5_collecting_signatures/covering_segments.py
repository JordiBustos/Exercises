# Uses python3
import sys
from collections import namedtuple

Segment = namedtuple('Segment', 'start end')

def optimal_points(n, segments):   
    points = []
    i = 0
    totalPoints=0
    segments.sort(key = lambda x: x[1]) 
    
    while (i < n):
        points.append(segments[i][1])
        i = i + 1
        
        while (i < n and points[totalPoints] >= segments[i][0]):
            i = i + 1      
        
        totalPoints = totalPoints + 1
    return points


if __name__ == '__main__':
    input = sys.stdin.read()
    n, *data = map(int, input.split())
    segments = list(map(lambda x: Segment(x[0], x[1]), zip(data[::2], data[1::2])))
    points = optimal_points(n, segments)
    print(len(points))
    print(*points)
