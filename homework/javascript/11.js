class Ratio
{
    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    toString()
    {
        return this.a + "/" + this.b;
    }
}

var r1 = new Ratio(1,3);
console.log(r1.toString());
