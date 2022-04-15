function gcd(a, b)
{
    if (a % b == 0)
    {
        return b;
    }
    else
    {
        return gcd(b, a % b);
    }
}

function lcm(a, b)
{
    return Math.abs(a * b) / gcd(a, b);
}

class Ratio
{
    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    add(target)
    {
        return new Ratio(this.a * (lcm(this.b, target.b) / this.b) + target.a * (lcm(this.b, target.b) / target.b), lcm(this.b, target.b));
    }

    sub(target)
    {
        return new Ratio(this.a * (lcm(this.b, target.b) / this.b) - target.a * (lcm(this.b, target.b) / target.b), lcm(this.b, target.b));
    }

    mul(target)
    {
        return new Ratio(this.a * target.a, this.b * target.b);
    }

    div(target)
    {
        return new Ratio(this.a * target.b, this.b * target.a);
    }

    toString()
    {
        return this.a + "/" + this.b;
    }
}

var r1 = new Ratio(1,3), r2 = new Ratio(2,4);
var r3 = r1.mul(r2);
console.log(r3.toString());
