function transpose(matrix)
{
    var output = Array.from(Array(matrix[0].length), () => new Array(matrix.length));
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[0].length; j++)
        {
            output[j][i] = matrix[i][j];
        }
    }

    return output;
}

console.log(transpose([[1,2,3], [3,2,1]]));
