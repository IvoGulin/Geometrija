function opseg() 
{
	var a = Number(document.getElementById("kiki").value);
	var opseg = 6*a;
	document.getElementById("rez1").innerHTML = opseg;
}
function povrsina() 
{
	var a = Number(document.getElementById("kiki").value);
	var povrsina = 6*3**(1/2)*a*a/4;
	document.getElementById("rez2").innerHTML = povrsina;
} 
