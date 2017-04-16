//This is a practice for javascript
//1. To show to current date and time in the following format:
// Today is: Friday
// Current time is: 4 PM : 50 : 22

var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var min = today.getMinutes()+" : ";
var sec = today.getSeconds();
var dayList=["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
if(Number(hour)===0||Number(hour)<12){
    hour = hour + " AM : ";
}
else if(Number(hour)>=12){
    if(hour===12){
        hour = hour + " PM : "
    } 
    else{
    	hour = hour%12 + " PM : ";
	}
}
console.log("Today is: "+dayList[day]+" \n Current Time: "+ hour+ min +sec);
alert("Today is:"+dayList[day]+"\n Current Time: "+ hour+min+sec);
