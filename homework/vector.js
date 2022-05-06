class Vector
{
  constructor(array)
  {
    this.a = array;
  }

  length()
  {
    let sum = 0;

    for (let p of this.a)
    {
      sum += p*p;
    }

    return Math.sqrt(sum);
  }

  neg()
  {
    let na = [];

    for (let i in this.a)
    {
      na[i] = -this.a[i];
    }

    return new Vector(na);
  }

  add(v)
  {
    let na = [];

    for (let i in this.a)
    {
      na[i] = this.a[i] + v.a[i];
    }

    return new Vector(na);
  }

  sub(v)
  {
    return this.add(v.neg());
  }

  dot(v)
  {
    let sum = 0;

    for (let i in this.a)
    {
      sum += this.a[i] * v.a[i];
    }

    return sum;
  }

  distance(v)
  {
    return this.sub(v).length();
  }

  toString()
  {
    return this.a.toString();
  }
}

let v1 = new Vector([1, 2, 3]);
let v2 = new Vector([4, 5, 6]);

console.log("v1的長度：" + v1.length());
console.log("v1的相反向量：" + v1.neg());
console.log("v1 + v2：" + v1.add(v2));
console.log("v1 - v2：" + v1.sub(v2));
console.log("v1與v2的點積：" + v1.dot(v2));
console.log("v1到v2的距離：" + v1.distance(v2));
