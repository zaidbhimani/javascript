$(document).ready(function(){

var imagebox = [
{
	name:'zaid',
	age:'24'
},
{
	name:'akshay',
	age:'26'
},
{
	name:'uchit',
	age:'26'
},
{
	name:'kranti',
	age:'24'
}
]

var indexNum = -1;

var indexNum2 = -1;

var result = '';
var result2 = '';

document.getElementById('divResult').addEventListener('click', function(){
   // let result = '';
   //Increment
   indexNum++;

   //Index should not be more than length
   if( indexNum > imagebox.length - 1){
     result = '';
     return $('#divResulttwo').html(result);
   }

   // compare two number if they are same increment one more time 
  if (indexNum == indexNum2){
     indexNum++;
  } 
   
  result = 'Name:-' + imagebox[indexNum].name +'</br>'+'age:-' + imagebox[indexNum].age;

   $('#divResulttwo').html(result);



/*
    if (indexNum == indexNum2){
    
       
   }
    else if( indexNum < 4){
    result = 'Name:-' + imagebox[indexNum].name +'</br>'+'age:-' + imagebox[indexNum].age;
     $('#divResulttwo').html(result);
    indexNum++;
    }

   else{
      result = '';
      $('#divResulttwo').html(result);
   }*/

});

document.getElementById('divResulttwo').addEventListener('click', function(){
   // let result = '';
   //Increment
   indexNum2++;

   //Index should not be more than length
   if( indexNum2 > imagebox.length - 1){
     result = '';
     return $('#divResult').html(result);
   }

   // compare two number if they are same increment one more time 
  if (indexNum == indexNum2){
     indexNum2++;
  } 
   
  result = 'Name:-' + imagebox[indexNum2].name +'</br>'+'age:-' + imagebox[indexNum2].age;

   $('#divResult').html(result);



});





});//main ending