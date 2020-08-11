function getnotes(amount){
    let amtArray = [2000, 500,200,100];  // the denomination you want to find.
    let resultArray=[];
 for (let i = 0; i < amtArray.length; i++) {
            resultArray.push(Math.floor(amount / amtArray[i]));
            // Get the new total
            amount = amount % amtArray[i];
        }
        let twothousands_notes = resultArray[0],
         fivehundred_notes = resultArray[1],
         twohundred_notes = resultArray[2],
         hundred_notes = resultArray[3];

        console.log('calculated amt : ' + '100 : ' +
            hundred_notes + '  200 :  ' +
            twohundred_notes +'   500 :  ' +
            fivehundred_notes + '  2000 :  ' +
            twothousands_notes);
}

function maxColourCount(arr){
    let obj={};
    arr.forEach(e=>{
        obj[e]=obj[e]?obj[e]+1:1;
    });
    let colour=Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);

    console.log("Color Comes maximum time is "+colour+" and the count is "+ obj[colour]);
}