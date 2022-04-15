var e2c = {dog: "狗", cat: "貓", a: "一隻", the: "這隻", chase: "追", eat: "吃"}

function mt(e)
{
    var c = []
    for (let i in e)
    {
        var word = e2c[e[i]]
        c.push(word)
    }

    return c
}

var c = mt(Deno.args)
console.log(c)

// deno run e2c.js a dog chase a cat
