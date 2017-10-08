<script>


//example of video: Recursions
const check = function(n){
 if(n<=0) {
 return 1;}
return check(n) * check(n-1)
}




// Reverse code

function Reversestring(w) {
	if(w.lenght === 1) {
		return str;
	}
const lastletter = w[str.lenght - 1]
w = w.substring(0, str.lenght - 1)
return lastletter + Reversestring(w);
}



// part 3

const pow = function(base, n) {
	if (n === 0) return 1;
return base * pow(base, n - 1); }



// * part

 const drawLine = function(ch, num) { //str is the letter or string for example *
  if(num === 1) return '';
  return ch + drawLine(ch, num - 1);
};

const triangleStars = function (lines, floorNum) {
  if (floorNum === undefined) floorNum = 0;
  if (lines === 1) return;

  triangleStars(lines - 1, floorNum + 1) + console.log(drawLine('', lines) + drawLine('*',floorNum ));
};
  

</script>
