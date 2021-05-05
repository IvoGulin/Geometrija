function opseg() 
{
	var a = Number(document.getElementById("var1").value);
	var b = Number(document.getElementById("var2").value);
	var c = Number(document.getElementById("var3").value);
	if ((a+b>c)&&(a+c>b)&&(b+c>a))
	{
		var z = a+b+c;
		document.getElementById("rez1").innerHTML = z;
	}
	else
	{
		alert("To nije trokut");
	}
}
function povrsina() 
{
	var a = Number(document.getElementById("var1").value);
	var b = Number(document.getElementById("var2").value);
	var c = Number(document.getElementById("var3").value);
	if ((a+b>c)&&(a+c>b)&&(b+c>a))
	{
		var s = (a + b + c)/2;
		var p = (s*(s-a)*(s-b)*(s-c))**(1/2)
		document.getElementById("rez2").innerHTML = p;
	}
	else
	{
		alert("To nije trokut");
	}
} 
