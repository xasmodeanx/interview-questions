// Write a function that takes as input an array of numbers representing the height of consecutive blocks
// and determines how many more blocks it would take to fill in all the empty spaces and make a complete rectangle.

// ex.
// arr = [1, 0, 1]
// howManyMoreBlocks(arr) = 1
/*
    

     _
    |_|______






*/



// ex.
// arr = [2, 0, 1, 0 , 2]
// holdsHowMuchWater(arr) = 5

const arr1 = [1, 0, 1]; // 1
const arr2 = [2, 0, 2, 0, 1, 3]; // 5
const arr3 = [2, 0]; // 0
const arr4 = [2, 0 ,1]; // 1
const arr5 = [2, 0, 2]; // 2
const arr6 = [1, 0, 1, 1, 3, 1, 2, 0, 0, 1, 2]; // 7
const arr7 = [0, 0, 1, 0, 1, 2, 3, 1, 3, 4, 0, 1]; // 4
const arr8 = [1, 0, 0, 0, 0, 0, 0, 1]; // 6

console.log(holdsHowMuchWater(arr8))

function holdsHowMuchWater(arr) {
    const chunks = breakIntoChunks(arr); // this is array of arrays
    return chunks.reduce((acc, curr) => acc + waterForChunk(curr), 0)
}

function breakIntoChunks(arr) {
    // find high point to start chunk
    let chunks = [];
    let startPoint;
    let startPointFound = false;
    let middleVals = [];
    const arrEnd = arr.length - 1;

    arr.forEach((el, i) => {

        if (!startPointFound) {
            if (el > 0) {
                startPoint = el;
                middleVals.push(el);
                startPointFound = true;
            }
        } else if (startPointFound) {
            middleVals.push(el);

            if (el >= startPoint) {

                chunks.push(middleVals);
                middleVals = [];
                middleVals.push(el);
                startPoint = el;
                // this closes chunk
            } else if (i === arrEnd) {
                chunks.push(middleVals);

            }
        }
    });

    return chunks;
}

function waterForChunk(chunk) {
    const arrStart = chunk[0];
    const arrEnd = chunk[chunk.length - 1];
    const midVals = chunk.slice(1, chunk.length - 1);
    
    const heightComparator = Math.min(arrStart, arrEnd);
    
    let waterHeld = 0;

    midVals.forEach(el => {
        waterHeld += heightComparator - el;
    });

    return waterHeld;
}
