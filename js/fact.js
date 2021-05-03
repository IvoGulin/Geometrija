function factoriel() 
{
	var x = Number(document.getElementById("var1").value);
	var f = 1;
	for(var i=1; i<=x; i=i+1)
	{
		f = f * i;
	}
	document.getElementById("rez1").innerHTML = f;
} 

