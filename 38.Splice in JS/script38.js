/* 
 splice is to remove elements in array
 It will change original array

 removed_element = Splice(start,length,new elements)
*/

const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + n1);
let removed_elements = n1.splice(2);

console.log("Removed Items : " + removed_elements);
console.log("After Splice : " + n1);

const n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + n2);
removed_elements = n2.splice(2, 2);
console.log("Removed Items : " + removed_elements);
console.log("After Splice : " + n2);

const n3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + n3);
removed_elements = n3.splice(2, 2, 25, 36);
console.log("Removed Items : " + removed_elements);
console.log("After Splice : " + n3);

const n4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before Splice : " + n4);

n4.splice(2, 0, 100, 300);
console.log("After Splice : " + n4);
