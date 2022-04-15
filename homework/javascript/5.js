function mean(array)
{
    var sum = 0;
    for (let i in array)
    {
        sum += array[i];
    }

    return sum /= array.length;
}

console.log(mean([1,2,3,4,5]));
