function factor(num)
{
    var ans = [];
    for (let i = 2; i <= num; i++)
    {
        if (num % i == 0)
        {
            ans.push(i);
            num /= i;
            i = 1;
        }
    }

    return ans;
}

console.log(factor(45));
