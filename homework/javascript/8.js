function add(m1, m2)
{
    for (let i = 0; i < m1.length; i++)
    {
        for (let j = 0; j < m1[0].length; j++)
        {
            m1[i][j] += m2[i][j];
        }
    }

    return m1;
}

console.log(add([[1,2],[3,4]], [[1,1],[1,1]]));
