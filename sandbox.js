// // var uniqueInOrder=function(iterable){
// //     //your code here - remember iterable can be a string or an array
// //     let result=[];
// //     for(let i=0;i<iterable.length;i++){
// //         if(i===0){
// //             result.push(iterable[i]);
// //         }
// //         else if(iterable[i]===iterable[i-1]){
// //             continue;
// //         }
// //         else{
// //             result.push(iterable[i]);
// //         }
// //     }
// //     return result;

// //     // let result=iterable.split("");
// //     // for(let i=0;i<result.length;i++){
// //     //     if(i===0){
// //     //         continue;
// //     //     }
// //     //     else if(result[i]===result[i-1]){
// //     //         result.splice(i,1);
// //     //     }
        
// //     // }
// //     // console.log(result);
// //   }

// //  console.log(uniqueInOrder('1112233523411'));

// function alphabetPosition(text) {
//     let result=[];
//     let temp;
//       text=text.toLowerCase();
      
//       for(let i=0;i<text.length;i++){
//         if(text.charCodeAt(i)<97||text.charCodeAt(i)>122){
//             continue;
//         }
//         else{
//             temp=text.charCodeAt(i);
//             result.push(Number(temp)-96);
//         }
//         }
      
//       return result.join(" ");
// }

//     console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// let obj={
//     x:"78",
//     y:"22",
//     function 
// }

// function twoSum(numbers, target) {
//     let result=[];
//     for(let i=0;i<numbers.length;i++){
//         for(let j=i+1;j<numbers.length;j++){
//         let temp=numbers[i]+numbers[j];
//         if(temp==target){
//             result.push(i,j);
//             break;
//         }
//         else{
//             continue;
//         }
//         }
//     }
//       return result;
//   }
//   console.log(twoSum([1, 2, 3], 4));

// function inArray(array1,array2){
//     let result=[];
//   for(let i=0;i<array1.length;i++){
//     for(let j=0;j<array2.length;j++){
//         if(array2[j].includes(array1[i])){
//         result.push(array1[i]);
//         break;
//         }
//     }
//   }
//   console.log(result);
//   }

//   inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]);


// var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// donuts.forEach((donut)=> {
//   donut += " hole";
//   donut = donut.toUpperCase();
//   console.log(donut);
// });

// words = ["cat", "in", "hat"];
// words.forEach(function(word, num, all) {
//   console.log("Word " + num + " in " + all.toString() + " is " + word);
// });

// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
// var x =test.map(function(value) {
    
//         return value+=100;

// });

// console.log(x);
// let obj={
//     firstChild:"chris"
// }
// console.log(obj.firstChild);

// let arr=[1,2,6,9,5,2];
// arr=arr.map((num)=>{
//    return num=num+1; 
// // });
// let x="aubin";
// let arr={...x};

// console.log(arr.reverse());

// // let x="Aubin";
// x+=String.fromCharCode(97);

// console.log(x);

function isPangram(string){
    string=string.toLowerCase();
    let codes=new Array;
    let temp=string.split("");

    string=temp.filter((temp)=>{
        if(temp.charCodeAt()>=97&&temp.charCodeAt()<123){
        return temp;
        }
       
    }
    )
    string=[...new Set(string)];
    string=string.sort().join("");
    for(let i=97;i<123;i++){
      codes.push(i);
    }
    // return (string);
    return string.includes(String.fromCharCode(...codes));
   }
console.log(isPangram("The quick brooooown fox&*() jumps ove the lazy dog."));



//  const spinWords=(string)=> { return string.split(" ").map((elt)=> elt.length>=5?elt.split("").reverse().join(''):elt).join(" ")}
   
// console.log(spinWords("Hey fellow warriors!"))