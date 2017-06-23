//This is a practice of javascript 
//To print out the current date in the following output:
//mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy 
var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
if(day<10){
    day = "0"+day;
}
if(month<10){
    month = "0"+month;
}
console.log(month+"-"+day+"-"+year+"\n");
console.log(month+"/"day+"/"+year+"\n");
console.log(day+"-"+month+"-"+year+"\n");
console.log(day+"/"+month+"/"+year+"\n");
