const addi = [{name:'aadi'},1,52 ,true,"red"];
const jain = [1,5,1,2,3,]

console.log(addi.length);//print the length of the array

console.log(addi[2]);//print the first element of the array

console.log(addi[addi.length-1]);//print the last element of the array

console.log(addi[0].name);//print the name of the object

console.log(addi.at(3));//print the 3rd element of the array

console.log(addi.push(1,52,3,));//add the element in the array using push method
console.log(addi);

console.log(addi.pop());//remove the last element of the array using pop method
console.log(addi);

console.log(addi.shift());//remove the first element of the array using shift method
console.log(addi);

console.log(addi.unshift(1,2,3));//add the element in the array using unshift method  
console.log(addi);

console.log(addi.includes('man'));//check the element is present in the array or not

console.log(addi.indexOf(52,5));//find the index of the element in the array

console.log(addi.toString());//convert the array into string

console.log(addi.join('*'));//join the element of the array

console.log(addi.fill([5,6,8] , 1,2));//fill the element in the array
console.log(addi);

console.log(addi.flat());//flat the array

console.log(addi.reverse());//reverse the array
console.log(addi);

console.log(addi.sort());//sort the array
console.log(addi);

console.log(addi.concat(jain));//concat the two array

console.log(addi.slice(1,6));//slice the array
console.log(addi);

console.log(addi.splice(3,2));//splice the array
console.log(addi);

