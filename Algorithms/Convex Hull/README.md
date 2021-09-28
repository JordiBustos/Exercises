This implementation takes O(n log n) time.

In a Euclidean plane, given a finite set of points Q, it is sometimes interesting to determine its convex hull,
namely the minimum convex polygon so that any point of Q is either inside this polygon or at its border.

This algorithm have two main things, the first one, sort the array by the lowers y-axis coordinate and then re-sort it by they polar angles with arr[0] 
