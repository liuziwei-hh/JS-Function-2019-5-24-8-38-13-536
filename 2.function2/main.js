function palindrome(message) { 
 // wirte your code here 
 var l=Math.round(message.length/2); 
 var a=message.split(""); 
 for(var i=0;i<=l;i++){ 
 if(a[i]!=a[message.length-i-1]){ 
 break; 
 } 
 } 
 if(i>l) 
 console.log(true); 
 else 
 console.log(false); 
 } 
 palindrome('hello'); // should return false 
 palindrome('abcba'); // should return true 
