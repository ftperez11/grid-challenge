var fs = require('fs')

var initialRead = fs.readFileSync('number_array.txt', 'utf8', function(err, data){
    if(err) throw err;
    var numbersArray = Array.from(data)
    return numbersArray
});

function gridReader(array){
    
    var greatestProduct = 0;
    var firstNumbersCord = [];
    var direction = "";

    const cleanArray = array.split(" ").map((item) => {
        return parseInt(item)
    })
    var newMatrix = []

    function createMatrix(cleanArray){
        for(let i = 0; i < cleanArray.length; i++){
            newMatrix.push(cleanArray.splice(0,20))
        }
    }

    createMatrix(cleanArray) 

    function traverseRight(matrix){
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length-4; j++){
                var tempProd = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2] * matrix[i][j+3]
                if(tempProd > greatestProduct){
                    greatestProduct = tempProd
                    firstNumbersCord = [i,j]
                    direction = "right"
                }
            }
        }
    }
    traverseRight(newMatrix)


    function traverseDown(matrix){
        for(let i = 0; i < matrix.length-4; i++){
            for(let j = 0; j < matrix[i].length; j++){    
                var tempProd = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j]
                if(tempProd > greatestProduct){
                    greatestProduct = tempProd
                    firstNumbersCord = [i,j]
                    direction = "Down"
                }
            }
        }
    }

    traverseDown(newMatrix)

    function traverseRightDiagonal(matrix){
        for(let i = 0; i < matrix.length-4; i++){
            for(let j = 0; j < matrix[i].length-4; j++){
                var tempProd = matrix[i][j] * matrix[i+1][j+1] * matrix[i+2][j+2] * matrix[i+3][j+3]
                if(tempProd > greatestProduct){
                    greatestProduct = tempProd
                    firstNumbersCord = [i,j]
                    direction = "RightDiagonal"
                }
            }
        }
    }

    traverseRightDiagonal(newMatrix)

    function traverseLeftDiagonal(matrix){
        for(let i = 0; i < matrix.length-4; i++){
            for(let j = 4; j < matrix[i].length; j++){
                var tempProd = matrix[i][j] * matrix[i+1][j-1] * matrix[i+2][j-2] * matrix[i+3][j-3]
                if(tempProd > greatestProduct){
                    greatestProduct = tempProd
                    firstNumbersCord = [i,j]
                    direction = "LeftDiagonal"
                }
            }
        }
    }

    traverseLeftDiagonal(newMatrix)

    console.log("Greatest product: ", greatestProduct)
    console.log("Coordinates of first number: ", firstNumbersCord)
    console.log("Direction to traverse: ", direction)

    return [
        greatestProduct,
        firstNumbersCord,
        direction
    ]
}

gridReader(initialRead)



