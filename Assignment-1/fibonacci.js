/*Fibonacci*/

function fib(num, array = [0], currentIndex = 0) {
    if (1 == num) {
        return array;
    } else {
	for (; num > 1; num--) {
	    if (array.length == 1) {
            array = [0,1];
        } else {
	        array.push(array[currentIndex] + array[currentIndex+1]);
	        currentIndex++;
        }
        }	
    }
    return array;
}

console.log(`This is fib:${fib(8)}`)

function fibRec(num, array = [0], currentIndex = 0) {
    if (1 == num) {
        return array;
    } else {
        if (array.length == 1) {
            return fibRec(--num, array = [0,1], currentIndex)
        } else {
            array.push(array[currentIndex] + array[currentIndex+1])
            return fibRec(--num, array, ++currentIndex); 
        }
    }
}

console.log(`This is fibRec:${fibRec(8)}`)

/* node ./Assigment-1/fibonacci.js */
 