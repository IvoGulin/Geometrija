function opseg() 
{
	var a = Number(document.getElementById("kiki").value);
	var opseg = 5*a;
	document.getElementById("rez1").innerHTML = opseg;
}
function povrsina() 
{
	var a = Number(document.getElementById("kiki").value);
	var povrsina = a*a/4*(25+10*5**(1/2))**(1/2);
	document.getElementById("rez2").innerHTML = povrsina;
} 
