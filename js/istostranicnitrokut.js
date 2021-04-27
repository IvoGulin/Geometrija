function opseg() 
{
	var a = Number(document.getElementById("var1").value);
	var opseg = 3*a;
	document.getElementById("rez1").innerHTML = opseg;
}
function povrsina() 
{
	var a = Number(document.getElementById("var1").value);
	var povrsina = 3**(1/2)*a*a/4;
	document.getElementById("rez2").innerHTML = povrsina;
} 
