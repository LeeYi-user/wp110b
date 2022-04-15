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

    reduce()
    {
        var min;

        if (this.a < this.b)
        {
            min = this.a;
        }
        else
        {
            min = this.b;
        }

        for (let i = 2; i <= min; i++)
        {
            if (this.a % i == 0 && this.b % i == 0)
            {
                this.a /= i;
                this.b /= i;
                min /= i;
                i = 1;
            }
        }
    }

    toString()
    {
        return this.a + "/" + this.b;
    }
}

var r1 = new Ratio(6, 9);
r1.reduce();
console.log(r1.toString());
