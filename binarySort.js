let input = [0,0,0,0,1,1,1,0,0,0,0,1,1];

function binSort(array){
    let start = 0;
    let ticks= 0;
    let end = array.length;
    for (let i = start; i < end; i++){
        ticks++;
        if(array[i]===1){
           array.push(1);
            array.splice(i,1);
            end--;
            i--;
        }
    }
    console.log("count is: ", ticks);
    return array;
}

console.log(binSort(input));