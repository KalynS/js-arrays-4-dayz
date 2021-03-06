class Craze4Arrays{
    getNumberOfOccurrences(inputArray, valueToEvaluate){
        return inputArray.reduce((acc,elem) => {
            return (valueToEvaluate === elem ? acc + 1 : acc)

        },0);
    }

    /** 
        @param objectArray    an array of any type of Object
        @param objectToRemove a value to be removed from the `objectArray`
        @return an array with identical content excluding the specified `objectToRemove`
        Given an array of objects, name `objectArray`, and an object `objectToRemove`, return an array of objects with identical contents excluding `objectToRemove`
    */
    removeValue = (objectArray, objectToRemove) => objectArray.filter((val) => val !== objectToRemove ); 

    /**
     * @param objectArray an array of any type of Object
     * @return the most frequently occurring object in the array
     * given an array of objects, named `objectArray` return the most frequently occuring object in the array
     */
    getMostCommon(objectArray) {
        let mostOutput = objectArray.sort((a,b) =>
             objectArray.filter((val) => val === a).length - objectArray.filter((val) => val === b).length).pop();
         return mostOutput;
     
    }

    /**
     * @param objectArray an array of any type of Object
     * @return the least frequently occurring object in the array
     * given an array of objects, named `objectArray` return the least frequently occuring object in the array
     */
    getLeastCommon(objectArray) {
        let leastOutput = objectArray.sort((a,b) =>
        objectArray.filter((val) => val === b).length - objectArray.filter((val) => val === a).length).pop();
                return leastOutput;
    }

    /**
     * @param objectArray      an array of any type of Object
     * @param objectArrayToAdd an array of Objects to add to the first argument
     * @return an array containing all elements in `objectArray` and `objectArrayToAdd`
     * given two arrays `objectArray` and `objectArrayToAdd`, return an array containing all elements in `objectArray` and `objectArrayToAdd`
     */
    mergeArrays(objectArray, objectArrayToAdd) {
       let output = objectArray.concat(objectArrayToAdd);
        return output;
    }

}


module.exports = Craze4Arrays;
