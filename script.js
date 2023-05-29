const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item)=>
  item.classList.remove('active'));
  this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click',activeLink))


var string = `
Aslo I am an Excel Guru 😂 I studied Data Analysis
That's give me a lot of Tools like a Power BI 📊, Python Specially Pandas & Numpy.` /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("texttype").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',40); /* change 70 for speed */

}
frameLooper();
