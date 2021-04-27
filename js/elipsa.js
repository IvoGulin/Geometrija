
function povrsina() 
{
	var x = Number(document.getElementById("var1").value);
	var y = Number(document.getElementById("var2").value);
	var z = x*y*3.1415;
	document.getElementById("rez").innerHTML = z;
} 
