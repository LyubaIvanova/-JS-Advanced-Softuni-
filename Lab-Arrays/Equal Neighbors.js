
function solve(matrix){
       let equalsCounter = 0;
       let rowLength = 0;
       for(let i = 0; i < matrix.length; i++){  
                                                              //по редовете
           rowLength = matrix[i].length;
           for(let j = 0; j < rowLength; j++){
               
               if(matrix[i][j] === matrix[i][j + 1]){
                   equalsCounter++;
               }
           }
       }
       let flatten = matrix.flat();                            //по колоните
           for(let k = 0; k < flatten.length; k++){
               if(flatten[k] === flatten[k + rowLength]){
                   equalsCounter++;
               }
           }
       console.log(equalsCounter);
   }
   solve([['2', '3', '4', '7', '0'],
       ['4', '0', '5', '3', '4'],
       ['2', '3', '5', '4', '2'],
       ['9', '8', '7', '5', '4']]
);