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

var indexNum = 0;

var indexNum2 = 0;

var result = '';
var result2 = '';

document.getElementById('divResult').addEventListener('click', function(){
   
    if (indexNum == indexNum2){
    indexNum++;
     result = 'Name:-' + imagebox[indexNum].name +'</br>'+'age:-' + imagebox[indexNum].age;
       $('#divResulttwo').html(result);
   }
    else if( indexNum < 4){
    result = 'Name:-' + imagebox[indexNum].name +'</br>'+'age:-' + imagebox[indexNum].age;
     $('#divResulttwo').html(result);
    indexNum++;
    }

   else{
      result = '';
      $('#divResulttwo').html(result);
   }

});

document.getElementById('divResulttwo').addEventListener('click', function(){
    if( indexNum2 < 4){
     result2 = 'Name:-' + imagebox[indexNum2].name +'</br>'+'age:-' + imagebox[indexNum2].age;
   $('#divResult').html(result2);
    indexNum2++;
  }
  else{
     result2 = '';
      $('#divResult').html(result2);
  }
   //  if(indexNum == indexNum2){
   //  indexNum2++;
   // }

});





});//main ending