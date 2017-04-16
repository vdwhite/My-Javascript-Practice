//This is a practice using javascript to find area of a triangle where lengths of the three sides are 5, 6, 7

var s1 = 5;
var s2 = 6;
var s3 = 7;
var p = (s1+s2+s3)/2;
var a = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));
console.log("The area of a triangle with sides"+s1+", "+s2+" ,"+s3+" is: "+a);

