var fs = require('fs')

var initialRead = fs.readFileSync('number_array.txt', 'utf8', function(err, data){
    if(err) throw err;
    var numbersArray = Array.from(data)
    console.log("this is nums array after read", numbersArray)
    return numbersArray
});

var correctArr = initialRead.split("\r\n")
function gridReader(array){
    
    var greatestProduct = 0;
    var firstNumbersCord = [];
    var direction = "";

    const newMatrix = array.map((string) => {
        return string.split(" ").map((item) => {
            return parseInt(item)
        })
    })
    
    function traverseRight(matrix){
        for(let i = 0; i < matrix.length; i++){
            console.log("this should be row",matrix[i])
            for(let j = 0; j < matrix[i].length-3; j++){
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
        for(let i = 0; i < matrix.length-3; i++){
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
        for(let i = 0; i < matrix.length-3; i++){
            for(let j = 0; j < matrix[i].length-3; j++){
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
        for(let i = 0; i < matrix.length-3; i++){
            for(let j = 3; j < matrix[i].length; j++){
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

gridReader(correctArr)



