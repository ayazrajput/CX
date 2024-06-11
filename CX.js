
//     //Q#1: Write a function that will take an array as input, sort, and return the array in descending
// order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2]. 
   function sortArray(data){


for(i = 0;i <data.length; i++){
    for(j = data.length; j >=0;j--){
        let temp;
        if(data[j]> data[j-1]){
            temp = data[j]
            data[j] = data[j-1]
            data[j-1] = temp
        }
        
        
    }
   
}
 return data
}

const info = [3,2,7,4,6,9]
// sortArray(info)
// console.log(sortArray(info),"inforr")


// Q#2: Write a function that will take a string as input, check and return if it is palindrome or
// not. For example, if the string is “madam” the function should return true and if the string
// is “doctor” it should return false. 

function palindrome(data){

    let start = 0;
    let end = data.length-1
    let result = false

    while(end > start){
        if(data[start] != data[end]){
            return result = false
        }
       start++
       end--
        return result= true
    }

}

let str= "doctor"
// console.log(palindrome(str))


// Q#3: Write a function that will take an array as input and return the sum of the two largest
// numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
// because 11 and 19 are the largest numbers.


function SumOfLargestN(array){
    for(i = 0;i <array.length; i++){
    for(j = 0; j <=array.length;j++){
        let temp;
        if(array[j]> array[j+1]){
            temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
        
        
    }
   
   return array[array.length-1] + array[array.length-2]
}
}
const array = [3,7,1,5,11,19] 
// console.log(SumOfLargestN(array))



// Q#4: Write a function that will take an array as input and return an array with every missing
// element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
// entry is 9, and missing numbers are [0,5,8] 

function findMissingElements(array) {
   
    let set = new Set(array);
    let missingElements = [];

    for (let i = 0; i <= array.length; i++) {
        if (!set.has(i)) {
            missingElements.push(i);
        }
    }

    return missingElements;
}
const data = [3,4,9,1,7,3,2,6] 

// console.log(findMissingElements(data))


// Q#5: Write a function that will take an array of numbers and return the number most repeated
// in the array with how many times it was repeated. For example, if the array is
// [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 timesre
function repeatedValues(data){
    
    let valuesCount= {}
    let maxCount = 0
    let mostRepeated = null

    for( num of data){
        if(valuesCount[num]===undefined){
           
            valuesCount[num] =1
           
        }else{
            valuesCount[num]++
            console.log(valuesCount[num],"nummm")
        }

        if(valuesCount[num] > maxCount){
            maxCount = valuesCount[num]
            mostRepeated = num
        }
    }

    return `${mostRepeated} is repeated ${maxCount} times`;
}

// const values =[4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5]
// console.log(repeatedValues(values))

// Q#6: Write a function that will take an array as input, it will rotate the array to the right 1 time
// and return the rotated array. Rotation of the array means that each element is shifted right
// by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]
function Rotate(values){



   
    let lastElement = values[values.length - 1]; 
    let rotatedArr = [lastElement].concat(values.slice(0, -1)); 
    return rotatedArr;
}
const A = [3,8,9,7,6] 
console.log(Rotate(A))
