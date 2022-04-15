function filter357(num1, num2)
{
    var output = [];
    for (let i = num1; i < num2; i++)
    {
        if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0)
        {
            output.push(i);
        }
    }

    return output;
}

console.log(filter357(5, 10));
console.log(filter357(5, 15));
