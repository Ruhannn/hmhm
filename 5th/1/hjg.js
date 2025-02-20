// for (let i = 1; i <= 3; i++){
// for(let j = 1; j <= 3 j++){
//     console.log(``);
// }






// }
function isLeap(year) {
    if (year % 4 === 0) {
       if (year % 100 === 0){
          if (year % 400 == 0){
             return ("Leap year.");
          } else {
             return ("Not leap year.");
          }
       } else {
          return ("Leap year.");
       }
    } else{
       return ("Not leap year.");
    }
 }

 console.log(isLeap(20000));