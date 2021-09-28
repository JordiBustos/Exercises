/*
Given a set of N numbers 
And M unions
(4, 0), (2,5), ... M

Make the unions to the nodes changing always the first one for the second one
*/

//----------WEIGHTED-------------------------2.0 QUICKER APPROACH------------------------------------//

const unions_fast = [[4, 3], [3, 8], [6, 5], [9, 4], [2, 1], [8, 9], [5, 4], [5, 0], [7, 2], [6, 1], [7, 3]];

var arr_fast: number[] = [];
var sz: number[] = [] 

function quickFindF(N: number){
  for (let i = 0; i < N; i++){
    arr_fast[i] = i;
    sz[i] = 0;
  }
}

function root(i: number): number{
  while (i != arr_fast[i]) {
    i = arr_fast[i]
    arr_fast[i] = arr_fast[arr_fast[i]] //keep trees flat
  }
  return i
}

function connected(p: number, q: number): boolean{
  return root(p) == root(q);
}

function unionFast(p: number, q: number){
  let i: number = root(p);
  let j: number = root(q);

  if (i == j) return;
  
  if (sz[i] < sz[j]) {
    arr_fast[i] = j;
    if (sz[j] !== 0) sz[j] += sz[i];
    else sz[j]++
  }
  else { 
    arr_fast[j] = i;
    if (sz[i] !== 0) sz[i] += sz[j];
    else sz[i]++
  } 
}

quickFindF(10)

for(let k = 0; k < unions_fast.length; k++){
  unionFast(unions_fast[k][0], unions_fast[k][1]);
}

console.log(arr_fast)




//---------------O(n^2) algorithm------SLOWER APPROACH------------------------//


/*
var arr: number[] = []

function quickFind(N: number){
  for (let i = 0; i < N; i++){
    arr[i] = i
  }
}

function equals(p: number, q: number): boolean{
  return arr[p] == arr[q]
}

function union(p:number, q:number){
  let pArr: number = arr[p]
  let qArr: number = arr[q]
  if (!equals(pArr, qArr)){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == pArr) arr[i] = qArr
    }
  }
}

quickFind(10)

const unions = [[4, 3], [3, 8], [6, 5], [9, 4], [2, 1], [8, 9], [5, 0], [7, 2], [6, 1]]

for (let k = 0; k < unions.length; k++){
  union(unions[k][0], unions[k][1])
}

console.log(arr)
*/


//---------------------------------TOO-SLOW-FOR-LARGE-Ns------------------------------------------------//


                                  //-------------------//


//---------------------------------A LIL QUICKER APPROACH-----------------------------------------------//

/*const unions_fast = [[4, 3], [3, 8], [6, 5], [9, 4], [2, 1], [8, 9], [5, 4], [5, 0], [7, 2], [6, 1], [7, 3]];

var arr_fast: number[] = [];

function quickFindF(N: number){
  for (let i = 0; i < N; i++){
    arr_fast[i] = i;
  }
}

function root(i: number): number{
  while (i != arr_fast[i]) i = arr_fast[i]
  return i
}

function connected(p: number, q: number): boolean{
  return root(p) === root(q);
}

function unionFast(p: number, q: number){
  let i: number = root(p);
  let j: number = root(q);
  if (i === j) return
  arr_fast[i] = j
}

quickFindF(10)

for(let k = 0; k < unions_fast.length; k++){
  unionFast(unions_fast[k][0], unions_fast[k][1]);
}

/* -------------------------------------------NOT FAST ENOUGH :c ------------LINEAR TIME-------------*/
