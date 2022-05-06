class Point {
  length() { throw Error('Point.length() not implemented yet!'); }

  sub(p2) {
    return this.add(p2.neg())
  }

  distance(p2) {
    return this.sub(p2).length()
  }
}

class Point2D extends Point {
  constructor(x, y) {
    super()
    this.x = x;
    this.y = y;
  }

  length() {
    let [x, y] = [this.x, this.y]
    return Math.sqrt(x * x + y * y)
  }

  neg() {
    return new Point2D(-this.x, -this.y)
  }

  add(p2) {
    return new Point2D(this.x + p2.x, this.y + p2.y)
  }

  dot(p2) {
    return this.x * p2.x + this.y * p2.y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

class Vector extends Point
{
  constructor(array)
  {
    super();
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

  dot(v)
  {
    let sum = 0;

    for (let i in this.a)
    {
      sum += this.a[i] * v.a[i];
    }

    return sum;
  }

  toString()
  {
    return this.a.toString();
  }
}

let p = new Point2D(2,3), p2 = new Point2D(1,2)
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.dot(p2)=', p.dot(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.distance(p2)=', p.distance(p2))

p = new Vector([2,3]), p2 = new Vector([1,2])
console.log(p)
console.log(p.toString())
console.log(p+'')
console.log('p.length()=', p.length())
console.log('p.sub(p2)=', p.sub(p2))
console.log('p.dot(p2)=', p.dot(p2))
console.log('p.sub(p2).length()=', p.sub(p2).length())
console.log('p.distance(p2)=', p.distance(p2))
