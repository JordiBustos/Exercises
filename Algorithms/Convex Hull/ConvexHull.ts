//ConvexHull problem O(n log n) Implementation


/*--------------Create array of points------------*/
class Point {
    x: number;
    y: number;

    constructor(x: number, y:number){
        this.x = x;
        this.y = y
    }
}

let points: Point[] = []
for (let i = 0; i < 10; i++){
    points.push(new Point(Math.floor(Math.random()*10), Math.floor(Math.random()*10)))
}

/*--------------Find if it's ccw or not------------*/
function ccw(q: Point, p: Point, r: Point):boolean{
    let val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    if (val <= 0) return false 
    return true
}


/*---------Main-------*/

const convexHull = (points: Point[], n:number) => {
    if (n < 3) return //Assumption
    let hull: Point[] = []

    hull.push(points[0]) //Definitely on hull
    hull.push(points[1])
    
    for (let i = 2; i < n; i++){
        let top: Point = hull.pop()
        while (!ccw(hull[hull.length - 1], top, points[i])){
            top = hull.pop()
        }
        hull.push(top);
        hull.push(points[i])
    }
    console.log(hull)
}


/*-------------Sort by lower y-axis----------------*/
points.sort((a, b) => a.y < b.y ? -1 : a.y > b.y ? 1: 0)
/*-------------Sort by polar angle-----------------*/
const findPolarAngle = (a, b) => {
    var ONE_RADIAN: number = 57.295779513082;
    var deltaX: number, deltaY: number;

    //if the points are undefined, return a zero difference angle.
    if (!a || !b) return 0;

    deltaX = (b.x - a.x);
    deltaY = (b.y - a.y);

    if (deltaX == 0 && deltaY == 0) {
        return 0;
    }

    var angle: number = Math.atan2(deltaY, deltaX) * ONE_RADIAN;

    if (this.reverse){
        if (angle <= 0) {
            angle += 360;
        }
    }else{
        if (angle >= 0) {
            angle += 360;
        }
    }
    return angle;
}

for (let i = 1; i < points.length; i++){
    let min: number = findPolarAngle(points[0], points[i]);
    let pos: number = i
    for (let k = i + 1; k < points.length; k++){
        const temp = findPolarAngle(points[0], points[k])
        if (temp < min){
            min = temp;
            pos = k
        }
    }
    let temp: Point = points[pos];
    points[pos] = points[i];
    points[i] = temp;  
}


console.log(points)
convexHull(points, points.length)
