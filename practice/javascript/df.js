function f1(x)
{
    return x * x
}

function f2(x)
{
    return 2 * x * x + 10
}

function df(f, x, dx)
{
    return (f(x + dx) - f(x)) / dx
}

console.log(df(f1, 2, 0.001))
console.log(df(f2, 2, 0.001))
