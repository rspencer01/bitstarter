//A slow, but instructing method to calculate primes

var primes = [2]
var nextToCheck = 3

while (primes.length < 100)
{
	for (i = 0;i<primes.length;i++)
	{
		if (primes[i]*primes[i] > nextToCheck)
		{
			primes.push(nextToCheck)
			break;
		}
		if (nextToCheck % primes[i] == 0)
			break;
	}
	nextToCheck += 2
}

var fs = require('fs')
var outfile = "primes.txt"
var out =  "2"
for (i = 1;i<primes.length;i++)
	out = out + "," + primes[i].toString()
fs.writeFileSync(outfile,out)
