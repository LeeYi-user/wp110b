function Fibonacci(num)
{
    if (num == 1)
    {
        return 1;
    }
    else if (num == 0)
    {
        return 0;
    }
    else
    {
        return Fibonacci(num - 1) + Fibonacci(num - 2);
    }
}

console.log(Fibonacci(7));
