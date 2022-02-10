var dp = Array.from({length: 200}, (_, i) => 0);
var count = 0;

function sumNumber(num)
{
    var res 
    for (var i = 1; i < num; i++)
    {
        res = (dp[i] + " ");
    }
    return res
}

function loop(sum , max,num , count)
{

    if (sum == 0)
    {
        const a = sumNumber(num);
        count++
        return console.log(a)
    }
 
  
    for (var i = max; i >= 1; i--)
    {
        if (i > sum)
        {
            continue;
        }
        else if (i <= sum)
        {
 
          
            dp[num] = i;
 
          
            loop(sum - i, i, num + 1, count);
        }
    }
}
    
var n = 4, count = 0;
    

    
  

console.log(loop(n, n, 1, count))