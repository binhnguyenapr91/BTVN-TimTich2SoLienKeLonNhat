let arrayNumber=[2,5,9,10,11,7];

process(arrayNumber);

function process(inputArray) {
    let arrayNeedToCheck = [];
    let multiple;
    let multipleMax=0;
    let positionMax1=0;
    let positionMax2=0;
    for (let i = 0 ; i<inputArray.length-1; i++){
        multiple = inputArray[i]*inputArray[i+1];
        arrayNeedToCheck.push(multiple);
        for (let j = 0;j<arrayNeedToCheck.length;j++){
            if (arrayNeedToCheck[j]>multipleMax){
                multipleMax=arrayNeedToCheck[j];
                positionMax1 = inputArray[i];
                positionMax2 = inputArray[i+1];
            }
        }

    }
    alert("Pair of numbers which have the biggest multiple is: "+positionMax1+" and "+positionMax2);
    }
