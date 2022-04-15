function integral(f, a, b)
{
    var area = 0;
    for (let x = a; x < b; x += 0.001)
    {
        area += f(x) * 0.001;
    }

    return area;
}

console.log(integral((x)=>x*x, 0, 1));
