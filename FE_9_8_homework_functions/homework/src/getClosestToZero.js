/* Task #5 */

let arrArg = [];
//Write a function - getClosestToZero
let getClosetToZero = () => {

        let min = arrArg[1];
        //It should accept arbitrary number of integer arguments 
        for (let i = 0; i < arrArg.length; i++) {
            //Tip: Math.abs() might be helpful
            if (Math.abs(arrArg[i]) < min) {
                min = arrArg[i];
            }
        }
        //and returns one closest to 0 (zero).
        // console.log(min);
        return min;
    }
    //For example: getClosestToZero(9, 5, -4, -9); // => -4
getClosetToZero();