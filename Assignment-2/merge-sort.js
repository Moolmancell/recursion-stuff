function mergesort(array) {

    function merge(left, right, newArray = []) {

        if (left[0] >= right[0]) {
            newArray.push(right[0]);
            right.shift();
            return merge(left, right, newArray);
        } else if (left[0] <= right[0]) {
            newArray.push(left[0]);
            left.shift();
            return merge(left, right, newArray)
        } else {
            if (left.length !== 0) {left.forEach(element => {newArray.push(element)});}
            if (right.length !== 0) {right.forEach(element => {newArray.push(element)});}
            return newArray;
        }
    }

    if (array.length !== 1) {
        let halfwayThrough = Math.floor(array.length / 2)

        let arrayLeft = array.slice(0, halfwayThrough);
        let arrayRight = array.slice(halfwayThrough, array.length);

        return merge(mergesort(arrayLeft), mergesort(arrayRight))
    } else {
        return array;
    }
}

console.log(mergesort([79, 100, 105, 110]));

/* 
                                    mergesort([3, 2, 1, 13, 8, 5, 0, 1])

                            merge(mergesort([3, 2, 1, 13]),mergesort([8, 5, 0, 1]))

                    merge([mergesort([3, 2])],mergesort([1, 13]))  merge(mergesort([8, 5]),mergesort([0, 1]))

                        merge([3], [2])  merge([1],[13])  merge([8],[5])  merge([0],[1])

*/