function factorial(num)
{
    var ans = 1;
    for (let i = 1; i <= num; i++)
    {
        ans *= i;
    }

    return ans;
}

console.log(factorial(10));
